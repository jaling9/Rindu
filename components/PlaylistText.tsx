import { ReactElement, useCallback } from "react";

import { useRouter } from "next/router";

import { Volume } from "components/icons";
import {
  useAuth,
  useClickPreventionOnDoubleClick,
  useSpotify,
  useToast,
  useTranslations,
} from "hooks";
import { ToastMessage } from "utils";
import { play } from "utils/spotifyCalls";

interface PlaylistTextProps {
  id: string;
  uri: string;
  name: string;
  type: "playlist";
}

export default function PlaylistText({
  id,
  uri,
  name,
  type,
}: PlaylistTextProps): ReactElement {
  const {
    volume,
    setVolume,
    lastVolume,
    setLastVolume,
    player,
    deviceId,
    setPlaylistPlayingId,
    setPlayedSource,
    playlistPlayingId,
    setReconnectionError,
  } = useSpotify();
  const router = useRouter();
  const { user, accessToken, setAccessToken } = useAuth();
  const isPremium = user?.product === "premium";
  const { addToast } = useToast();
  const { translations } = useTranslations();

  const getActualVolume = useCallback(() => {
    if (volume > 0) {
      return 0;
    }
    if (lastVolume === 0 && volume === 0) {
      return 1;
    }
    return lastVolume;
  }, [lastVolume, volume]);

  const onDoubleClick = useCallback(() => {
    if (uri && accessToken && deviceId && isPremium) {
      (player as Spotify.Player)?.activateElement();
      play(
        accessToken,
        deviceId,
        {
          context_uri: uri,
        },
        setAccessToken
      ).then((res) => {
        if (res.status === 404) {
          (player as Spotify.Player).disconnect();
          addToast({
            variant: "error",
            message: translations[ToastMessage.UnableToPlayReconnecting],
          });
          setReconnectionError(true);
        }
        if (res.ok) {
          setPlaylistPlayingId(id);
          const isCollection = id?.split(":")?.[3];
          setPlayedSource(isCollection ? `spotify:${type}:${id}` : uri);
        }
      });
    }
  }, [
    accessToken,
    addToast,
    deviceId,
    id,
    isPremium,
    player,
    setAccessToken,
    setPlayedSource,
    setPlaylistPlayingId,
    setReconnectionError,
    translations,
    type,
    uri,
  ]);

  const onClick = useCallback(() => {
    router.push(`/playlist/${encodeURIComponent(id)}`);
  }, [id, router]);

  const [handleClick, handleDoubleClick] = useClickPreventionOnDoubleClick(
    onClick,
    onDoubleClick
  );

  return (
    <div key={id} className="playlistName">
      <button
        type="button"
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        className={playlistPlayingId === id ? "playlist green" : "playlist"}
      >
        {name || "No name"}
      </button>
      {playlistPlayingId === id ? (
        <button
          type="button"
          className="volume"
          aria-label={`${volume > 0 ? "Mute" : "Unmute"}`}
          onClick={() => {
            setVolume(getActualVolume());
            if (volume > 0) {
              setLastVolume(volume);
            }
            player?.setVolume(getActualVolume());
          }}
        >
          <Volume volume={volume} />
        </button>
      ) : (
        <div className="volume"></div>
      )}
      <style jsx>{`
        .playlistName {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .volume,
        .playlist {
          border: none;
          background-color: transparent;
        }
        .volume {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 16px;
          margin-left: 2px;
          padding-bottom: 10px;
        }
        .volume :global(svg path) {
          fill: ${volume > 0 ? "#1db954" : "#fff"};
        }
        .volume:hover :global(svg path) {
          fill: #fff;
        }
        .playlist.green {
          color: #1db954;
        }
        .playlist:hover {
          color: #fff;
        }
        .playlist {
          display: inline-block;
          font-size: 14px;
          color: #ffffffb3;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 100%;
          text-decoration: none;
          text-align: left;
          padding-bottom: 10px;
        }
      `}</style>
    </div>
  );
}
