import { Dispatch, SetStateAction } from "react";
import SpotifyWebAPI from "spotify-web-api-node";
import {
  AuthorizationResponse,
  RefreshResponse,
  RemoveTracksResponse,
  ITrack,
} from "types/spotify";
import { isCorruptedTrack } from "utils/isCorruptedTrack";
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
): Promise<Response> {
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

  if (context_uri) {
    body.context_uri = context_uri;
  } else if (Array.isArray(uris) && uris.length) {
    body.uris = [...new Set(uris)];
  }
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
      await play(newAccessToken, deviceId, options, setAccessToken, true);
    }
  }
  return res;
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
): Promise<ITrack[]> => {
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
    return tracks.map(({ track, added_at, is_local }, i) => {
      return {
        ...track,
        corruptedTrack: isCorruptedTrack(track),
        position: i,
        added_at,
        is_local,
      };
    });
  } catch (err) {
    throw new Error(`getAllTracksFromPlaylist error: ${err}`);
  }
};
export const getpageDetails = async (
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
    throw new Error(`getpageDetails error: ${err}`);
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
