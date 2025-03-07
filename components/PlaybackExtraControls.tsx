import { ReactElement } from "react";

import {
  DeviceConnectControl,
  FullScreenControl,
  VolumeControl,
} from "components";
import { FullScreen, Lyrics, Queue } from "components/icons";
import { useSpotify } from "hooks";
import { DisplayInFullScreen } from "types/spotify";

export default function PlaybackExtraControls(): ReactElement {
  const { currentlyPlaying } = useSpotify();
  return (
    <div className="extras">
      {currentlyPlaying?.type === "track" && (
        <FullScreenControl
          icon={Lyrics}
          displayInFullScreen={DisplayInFullScreen.Lyrics}
        />
      )}
      <FullScreenControl
        icon={Queue}
        displayInFullScreen={DisplayInFullScreen.Queue}
      />
      <DeviceConnectControl />
      <VolumeControl />
      <FullScreenControl
        icon={FullScreen}
        displayInFullScreen={DisplayInFullScreen.Player}
      />
      <style jsx>{`
        .extras {
          display: flex;
          width: 100%;
          column-gap: 0px;
          align-items: center;
          justify-content: flex-end;
        }
        @media (max-width: 1100px) {
          .extras {
            column-gap: 5px;
          }
        }
      `}</style>
    </div>
  );
}
