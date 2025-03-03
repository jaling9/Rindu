import { HTMLAttributes, ReactElement } from "react";

import { useRouter } from "next/router";

import { CardContent, PlayButton } from "components";
import { CardType } from "components/CardContent";
import { useAuth, useSpotify } from "hooks";
import { ITrack } from "types/spotify";

export interface PresentationCardProps {
  type: CardType;
  id: string;
  images?: SpotifyApi.ImageObject[];
  title: string;
  subTitle: string | JSX.Element;
  track?: ITrack;
  isSingle?: boolean;
  url?: string;
}

function PresentationCard({
  images,
  title,
  subTitle,
  id,
  type,
  isSingle,
  track,
  url,
  ...props
}: PresentationCardProps & HTMLAttributes<HTMLAnchorElement>): ReactElement {
  const unsupportedUris = ["genre", "user"];
  const uri = unsupportedUris.includes(type ?? "")
    ? undefined
    : `spotify:${type || "track"}:${id}`;
  const { user } = useAuth();
  const isPremium = user?.product === "premium";
  const router = useRouter();
  const isCollection = router.pathname.includes("collection");
  const { allTracks } = useSpotify();

  return (
    <div className="container">
      <CardContent
        id={id}
        type={type}
        images={images}
        title={title}
        subTitle={subTitle}
        url={url}
      />
      <span>
        {!url && (
          <PlayButton
            uri={uri}
            track={track}
            isSingle={isSingle}
            centerSize={24}
            size={48}
            tabIndex={props.tabIndex}
            aria-hidden={props["aria-hidden"]}
            allTracks={allTracks}
          />
        )}
      </span>
      <style jsx>{`
        .container {
          --card-container-border-radius: clamp(
            4px,
            (var(--left-panel-width, 0px) - 32px) * 0.025,
            8px
          );
          color: inherit;
          cursor: pointer;
          border: none;
          background: unset;
          margin: 0;
          padding: 0;
          text-decoration: none;
          position: relative;
          background-color: #181818;
          transition: background-color 0.25s ease;
          border-radius: calc(var(--card-container-border-radius) + 2px);
          width: ${isCollection ? "unset" : "min-content"};
        }
        span {
          position: absolute;
          bottom: 100px;
          right: 24px;
          transition: all 0.25s ease;
          opacity: 0;
          display: ${!isPremium || !uri ? "none" : "flex"};
          z-index: 2;
        }
        .container:hover,
        .container:focus-within {
          background-color: #282828;
        }
        .container:focus-within span,
        .container:hover span {
          transform: translateY(-8px);
          opacity: 1;
        }
      `}</style>
    </div>
  );
}

export default PresentationCard;
