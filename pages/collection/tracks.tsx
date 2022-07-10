import { NextApiRequest, NextApiResponse, NextPage } from "next";
import { ISpotifyContext, ITrack } from "types/spotify";
import PlaylistLayout from "layouts/playlist";
import { serverRedirect } from "utils/serverRedirect";
import { getAuth } from "utils/getAuth";
import { checkTracksInLibrary } from "utils/spotifyCalls/checkTracksInLibrary";
import { getMyLikedSongs } from "utils/spotifyCalls/getMyLikedSongs";

interface PlaylistProps {
  pageDetails: ISpotifyContext["pageDetails"];
  playListTracks: ITrack[];
  tracksInLibrary: boolean[] | null;
  accessToken: string | null;
  user: SpotifyApi.UserObjectPrivate | null;
}

const Playlist: NextPage<PlaylistProps> = (props) => {
  return (
    <PlaylistLayout
      isLibrary={true}
      pageDetails={props.pageDetails}
      playListTracks={props.playListTracks}
      tracksInLibrary={props.tracksInLibrary}
      user={props.user}
      accessToken={props.accessToken}
    />
  );
};

export default Playlist;

export async function getServerSideProps({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}): Promise<{
  props: PlaylistProps | null;
}> {
  const cookies = req?.headers?.cookie;
  if (!cookies) {
    serverRedirect(res, "/");
    return { props: null };
  }
  const { accessToken, user } = (await getAuth(res, cookies)) || {};

  const playListTracks = await getMyLikedSongs(
    user?.country ?? "US",
    accessToken,
    cookies
  );
  const trackIds = playListTracks?.items
    ?.filter(({ track }) => {
      if (track?.id) {
        return true;
      }
      return false;
    })
    .map(({ track }) => track?.id) as string[] | undefined;
  const tracksInLibrary = await checkTracksInLibrary(
    trackIds ?? [],
    accessToken || ""
  );

  if (!playListTracks) {
    return { props: null };
  }

  const pageDetails: ISpotifyContext["pageDetails"] = {
    id: "tracks",
    images: [
      {
        url: "https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png",
      },
    ],
    name: "Liked Songs",
    owner: {
      id: user?.id,
      display_name: user?.display_name,
    },
    tracks: {
      total: playListTracks.total,
    },
    type: "collection",
    uri: `spotify:user:${user?.id}:collection`,
  };
  return {
    props: {
      pageDetails,
      tracksInLibrary,
      playListTracks: playListTracks.items.map(
        ({ track, added_at }, i: number) => {
          const isCorrupted =
            !track?.name &&
            !track?.artists?.[0]?.name &&
            track?.duration_ms === 0;
          return {
            ...track,
            corruptedTrack: isCorrupted,
            position: i,
            added_at,
          };
        }
      ),
      accessToken: accessToken ?? null,
      user: user ?? null,
    },
  };
}
