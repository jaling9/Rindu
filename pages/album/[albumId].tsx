import { useEffect, useState } from "react";

import { NextApiRequest, NextApiResponse, NextPage } from "next";
import { NextParsedUrlQuery } from "next/dist/server/request-meta";
import { useRouter } from "next/router";

import {
  ContentContainer,
  PageHeader,
  PlayButton,
  PlaylistTopBarExtraField,
  TrackListHeader,
  VirtualizedList,
} from "components";
import { CardType } from "components/CardTrack";
import { Heart } from "components/icons";
import { useAnalytics, useAuth, useHeader, useSpotify, useToast } from "hooks";
import { HeaderType } from "types/pageHeader";
import { ITrack } from "types/spotify";
import {
  ContentType,
  getAuth,
  getSiteUrl,
  getTranslations,
  isCorruptedTrack,
  Page,
  serverRedirect,
  templateReplace,
  ToastMessage,
} from "utils";
import {
  checkIfUserFollowAlbums,
  checkTracksInLibrary,
  followAlbums,
  getAlbumById,
  unFollowAlbums,
} from "utils/spotifyCalls";

interface AlbumPageProps {
  album: SpotifyApi.SingleAlbumResponse | null;
  accessToken?: string;
  user: SpotifyApi.UserObjectPrivate | null;
  tracks: ITrack[] | null;
  tracksInLibrary: boolean[] | null;
  translations: Record<string, string>;
}

const AlbumPage: NextPage<AlbumPageProps> = ({
  album,
  user,
  accessToken,
  tracks,
  tracksInLibrary,
  translations,
}) => {
  const { setUser, setAccessToken } = useAuth();
  const { trackWithGoogleAnalytics } = useAnalytics();
  const { setAllTracks, setPageDetails, allTracks } = useSpotify();
  const router = useRouter();
  const [isPin, setIsPin] = useState(false);
  const [isFollowingThisAlbum, setIsFollowingThisAlbum] = useState(false);
  const { setElement } = useHeader({
    showOnFixed: false,
  });
  const { addToast } = useToast();

  useEffect(() => {
    (async () => {
      const userFollowThisAlbum = await checkIfUserFollowAlbums(
        [album?.id || ""],
        accessToken
      );
      setIsFollowingThisAlbum(!!userFollowThisAlbum?.[0]);
    })();
  }, [accessToken, album?.id, user?.id]);

  useEffect(() => {
    if (!album) {
      router.push("/");
    }

    setElement(() => <PlaylistTopBarExtraField uri={album?.uri} />);
    trackWithGoogleAnalytics();

    setAccessToken(accessToken);

    setUser(user);

    setAllTracks(tracks ?? []);

    if (!album) {
      return;
    }

    setPageDetails({
      id: album.id,
      uri: album.uri,
      type: "playlist",
      name: album.name,
      tracks: { total: album.tracks.total },
    });
  }, [
    accessToken,
    album,
    router,
    setAccessToken,
    setAllTracks,
    setPageDetails,
    setUser,
    trackWithGoogleAnalytics,
    tracks,
    user,
    setElement,
  ]);

  function getPageHeaderByAlbumType(
    album_type?: SpotifyApi.AlbumObjectSimplified["album_type"]
  ) {
    switch (album_type) {
      case "single":
        return HeaderType.single;
      case "compilation":
        return HeaderType.compilation;
      default:
        return HeaderType.album;
    }
  }

  return (
    <ContentContainer hasPageHeader>
      <PageHeader
        type={getPageHeaderByAlbumType(album?.album_type)}
        title={album?.name ?? ""}
        coverImg={
          album?.images?.[0]?.url ??
          album?.images?.[1]?.url ??
          `${getSiteUrl()}/defaultSongCover.jpeg`
        }
        artists={album?.artists ?? []}
        totalTracks={album?.tracks.total ?? 0}
        release_date={album?.release_date ?? "1"}
        data={album}
      />
      <div className="tracksContainer">
        <div className="options">
          <PlayButton
            uri={album?.uri}
            size={56}
            centerSize={28}
            allTracks={allTracks}
          />
          <div className="info">
            <Heart
              active={isFollowingThisAlbum}
              handleDislike={async () => {
                if (!album) return null;
                const unfollowRes = await unFollowAlbums([album.id]);
                if (unfollowRes) {
                  addToast({
                    message: templateReplace(
                      translations[ToastMessage.TypeRemovedFrom],
                      [
                        translations[ContentType.Album],
                        translations[ContentType.Library],
                      ]
                    ),
                    variant: "success",
                  });
                  return true;
                }
                return null;
              }}
              handleLike={async () => {
                if (!album) return null;
                const followRes = await followAlbums([album.id]);
                if (followRes) {
                  addToast({
                    message: templateReplace(
                      translations[ToastMessage.TypeAddedTo],
                      [
                        translations[ContentType.Album],
                        translations[ContentType.Library],
                      ]
                    ),
                    variant: "success",
                  });
                  return true;
                }
                return null;
              }}
              style={{ width: 80, height: 80 }}
            />
          </div>
        </div>
        <div className="trc">
          <TrackListHeader
            type={CardType.album}
            setIsPin={setIsPin}
            isPin={isPin}
          />
          <VirtualizedList
            type={CardType.album}
            initialTracksInLibrary={tracksInLibrary}
          />
          <div className="copy">
            {album?.copyrights?.map(({ text }) => {
              return <p key={text}>{text}</p>;
            })}
          </div>
        </div>
      </div>
      <style jsx>{`
        .copy {
          margin-top: 16px;
          padding-bottom: 24px;
        }
        p {
          font-size: 0.6875rem;
          line-height: 1rem;
          text-transform: none;
          letter-spacing: normal;
          font-weight: 400;
          color: #ffffffb3;
          margin: 0;
        }
        div.info {
          align-self: flex-end;
          width: calc(100% - 310px);
        }
        .info :global(button) {
          margin-left: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: transparent;
          border: none;
        }
        .options {
          display: flex;
          padding: 24px 0;
          position: relative;
          width: 100%;
          align-items: center;
          margin: 16px 0;
          flex-direction: row;
        }
        .options,
        .trc {
          padding: 0 32px;
        }
        .trc {
          margin-bottom: 50px;
        }
        @media (max-width: 768px) {
          .options {
            padding: 32px 32px;
          }
        }
      `}</style>
    </ContentContainer>
  );
};

export default AlbumPage;

export async function getServerSideProps({
  params: { albumId },
  req,
  res,
  query,
}: {
  params: { albumId: string };
  req: NextApiRequest;
  res: NextApiResponse;
  query: NextParsedUrlQuery;
}): Promise<{
  props: AlbumPageProps | null;
}> {
  const country = (query.country || "US") as string;
  const translations = getTranslations(country, Page.Album);
  const cookies = req ? req.headers?.cookie : undefined;
  if (!cookies) {
    serverRedirect(res, "/");
    return { props: null };
  }
  const { accessToken, user } = (await getAuth(res, cookies)) || {};

  const album = await getAlbumById(albumId, user?.country ?? "US", accessToken);
  const trackIds = album?.tracks.items.map(({ id }: { id: string }) => id);
  const tracksInLibrary = await checkTracksInLibrary(
    trackIds ?? [],
    accessToken || ""
  );
  const tracks: ITrack[] | undefined = album?.tracks.items.map((track, i) => {
    return {
      ...track,
      album: {
        images: album.images,
        id: album.id,
        name: album.name,
        uri: album.uri,
      },
      is_local: false,
      corruptedTrack: isCorruptedTrack(track),
      added_at: album.release_date,
      position: album.album_type === "compilation" ? i : track.track_number - 1,
    };
  });

  return {
    props: {
      album,
      accessToken,
      user: user ?? null,
      tracks: tracks ?? null,
      tracksInLibrary,
      translations,
    },
  };
}
