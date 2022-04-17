import { Dispatch, SetStateAction } from "react";
import SpotifyWebAPI from "spotify-web-api-node";
import {
  AuthorizationResponse,
  RefreshResponse,
  RemoveTracksResponse,
  AllTracksFromAPlaylistResponse,
} from "types/spotify";
import { getAccessToken } from "utils/spotifyCalls/getAccessToken";

const SPOTIFY_CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const SPOTIFY_REDIRECT_URL = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URL;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

const spotifyAPI = new SpotifyWebAPI({
  redirectUri: SPOTIFY_REDIRECT_URL,
  clientId: SPOTIFY_CLIENT_ID,
  clientSecret: SPOTIFY_CLIENT_SECRET,
});

export async function play(
  accessToken: string,
  deviceId: string,
  options: { context_uri?: string; uris?: string[]; offset?: number },
  setAccessToken: Dispatch<SetStateAction<string | undefined>>,
  ignore?: boolean
): Promise<unknown> {
  const { context_uri, offset, uris } = options;
  const body: {
    context_uri?: string;
    uris?: string[];
    offset?: { position: number };
    position_ms: number;
  } = { position_ms: 0 };

  if (offset !== undefined) {
    body.offset = { position: offset };
  }
  let data;

  if (context_uri) {
    body.context_uri = context_uri;
  } else if (Array.isArray(uris) && uris.length) {
    body.uris = [...new Set(uris)];
  }

  try {
    const res = await fetch(
      `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(body),
      }
    );

    if (res.status === 401 && !ignore) {
      const { accessToken: newAccessToken } = (await getAccessToken()) || {};
      if (newAccessToken) {
        setAccessToken(newAccessToken);
        data = await play(
          newAccessToken,
          deviceId,
          options,
          setAccessToken,
          true
        );
      }
    }

    data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}

export function getMyCurrentPlaybackState(callback: CallableFunction): void {
  spotifyAPI
    .refreshAccessToken()
    .then(function (data) {
      // Set the access token on the API object so that it's used in all future requests
      spotifyAPI.setAccessToken(data.body["access_token"]);

      return spotifyAPI.getMyCurrentPlaybackState({});
    })
    .then(function (data) {
      callback(data.body);
    })
    .catch(function (err) {
      console.log("Unfortunately, something has gone wrong.", err.message);
      callback(null);
    });
}

export async function getSpotifyAuthorization(
  code: string
): Promise<AuthorizationResponse> {
  const data = await spotifyAPI.authorizationCodeGrant(code);
  return {
    accessToken: data.body.access_token,
    refreshToken: data.body.refresh_token,
    expiresIn: data.body.expires_in,
  };
}

export async function getRefreshAccessToken(
  refreshToken: string
): Promise<RefreshResponse> {
  spotifyAPI.setRefreshToken(refreshToken);
  const data = await spotifyAPI.refreshAccessToken();
  return {
    accessToken: data.body.access_token,
    expiresIn: data.body.expires_in,
    refreshToken: data.body.refresh_token,
  };
}

export async function getSpotifyUser(
  accessToken: string
): Promise<SpotifyApi.UserObjectPrivate> {
  spotifyAPI.setAccessToken(accessToken);
  const data = await spotifyAPI.getMe();
  return data.body;
}

export const getAllTracksFromPlaylist = async (
  accessToken: string,
  playlist: string,
  market: string
): Promise<AllTracksFromAPlaylistResponse> => {
  try {
    if (accessToken) {
      spotifyAPI.setAccessToken(accessToken);
    }
    let tracks = [];
    const data = await spotifyAPI.getPlaylistTracks(playlist, {
      limit: 50,
      offset: 0,
      market: market ?? "US",
    });
    const { body } = data;

    tracks = body.items;
    // if (body.total > 100)
    //   for (let i = 1; i < Math.ceil(body.total / 100); i++) {
    //     const add = await spotifyAPI.getPlaylistTracks(playlist, {
    //       offset: 100 * i,
    //     });
    //     tracks = [...tracks, ...add.body.items];
    //   }
    return {
      tracks: tracks.map(({ track, added_at, is_local }, i) => {
        return {
          name: track?.name,
          images: track?.album.images,
          uri: track?.uri,
          href: track?.external_urls.spotify,
          artists: track.artists,
          id: track?.id,
          explicit: track?.explicit,
          duration: track?.duration_ms,
          audio: track?.preview_url,
          corruptedTrack: !track?.uri,
          position: i,
          album: track.album,
          added_at,
          type: track.type,
          media_type: "audio",
          is_playable: track.is_playable,
          is_local,
        };
      }),
    };
  } catch (err) {
    throw new Error(`getAllTracksFromPlaylist error: ${err}`);
  }
};
export const getPlaylistDetails = async (
  accessToken: string,
  playlist: string
): Promise<SpotifyApi.SinglePlaylistResponse> => {
  try {
    if (accessToken) {
      spotifyAPI.setAccessToken(accessToken);
    }
    const data = await spotifyAPI.getPlaylist(playlist);
    const { body } = data;
    return body;
  } catch (err) {
    throw new Error(`getPlaylistDetails error: ${err}`);
  }
};

export async function removeTracksFromPlaylist(
  accessToken: string,
  playlist: string,
  tracks: Array<number>,
  snapshotID: string
): Promise<RemoveTracksResponse> {
  try {
    spotifyAPI.setAccessToken(accessToken);
    const data = await spotifyAPI.removeTracksFromPlaylistByPosition(
      playlist,
      tracks,
      snapshotID
    );
    return data.body.snapshot_id;
  } catch (err) {
    throw new Error(`removeTracksFromPlaylist error: ${err}`);
  }
}
