import { ReactElement, useEffect, useRef, useState } from "react";

import { decode } from "html-entities";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  ArtistList,
  EditPlaylistDetails,
  Eyebrow,
  Heading,
  PageDetails,
  ScrollableText,
} from "components";
import {
  useAuth,
  useDynamicFontSize,
  useHeader,
  useModal,
  useSpotify,
  useTranslations,
} from "hooks";
import { AsType } from "types/heading";
import { HeaderProps, HeaderType } from "types/pageHeader";
import {
  formatNumber,
  formatTime,
  getMainColorFromImage,
  getYear,
} from "utils";

export default function PageHeader({
  type,
  coverImg,
  title,
  description,
  artists,
  ownerId,
  ownerDisplayName,
  totalTracks,
  duration_s,
  totalFollowers,
  release_date,
  popularity,
  totalPublicPlaylists,
  data,
  banner,
  disableOpacityChange,
  stats,
}: HeaderProps): ReactElement {
  const { setHeaderColor } = useHeader({ disableOpacityChange });
  const router = useRouter();
  const { translations } = useTranslations();
  const { setModalData } = useModal();
  const { user } = useAuth();
  const { pageDetails } = useSpotify();
  const isPlaylist = type === HeaderType.playlist;
  const isOwner = user?.id === pageDetails?.owner?.id;
  const enableEditPlaylist =
    !!(pageDetails?.id && isPlaylist && isOwner) &&
    router.asPath.includes("/playlist/");
  const [pageHeaderImg, setPageHeaderImg] = useState(coverImg);
  const [pageHeaderTitle, setPageHeaderTitle] = useState(title);
  const [pageHeaderDescription, setPageHeaderDescription] =
    useState(description);

  useEffect(() => {
    // This will reset page header image and title when navigating to a new page
    setPageHeaderImg(coverImg);
    setPageHeaderTitle(title);
    setPageHeaderDescription(description);
  }, [coverImg, title, description]);

  const isAlbumVariant =
    type === HeaderType.album ||
    type === HeaderType.single ||
    type === HeaderType.compilation;

  const headerTypeEyebrowText = {
    [HeaderType.artist]: translations.pageHeaderArtist,
    [HeaderType.album]: translations.pageHeaderAlbum,
    [HeaderType.single]: translations.pageHeaderSingle,
    [HeaderType.compilation]: translations.pageHeaderCompilation,
    [HeaderType.playlist]: translations.pageHeaderPlaylist,
    [HeaderType.profile]: translations.pageHeaderProfile,
    [HeaderType.concert]: translations.pageHeaderConcert,
    [HeaderType.song]: translations.pageHeaderSong,
    [HeaderType.podcast]: translations.pageHeaderPodcast,
    [HeaderType.episode]: translations.pageHeaderEpisode,
    [HeaderType.radio]: translations.pageHeaderRadio,
    [HeaderType.top]: translations.pageHeaderTop,
  };
  const headingRef = useRef<HTMLHeadingElement>(null);

  useDynamicFontSize({
    ref: headingRef,
    maxFontSize: 120,
    minFontSize: 40,
    maxHeight: 150,
    lineNum: 3,
  });

  return (
    <PageDetails
      banner={banner}
      data={data ?? null}
      disableOpacityChange={disableOpacityChange}
    >
      {coverImg && !banner ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={pageHeaderImg}
          alt=""
          id="cover-image"
          onLoad={() => {
            getMainColorFromImage("cover-image", setHeaderColor);
          }}
        />
      ) : (
        !banner && <div id="cover-image"></div>
      )}
      <div className="playlistInfo">
        <Eyebrow>{headerTypeEyebrowText[type]}</Eyebrow>
        <div className="title-container">
          <ScrollableText>
            <span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  if (enableEditPlaylist) {
                    setModalData({
                      title: "Edit Details",
                      modalElement: (
                        <EditPlaylistDetails
                          id={pageDetails?.id}
                          name={pageHeaderTitle}
                          description={pageHeaderDescription}
                          coverImg={pageHeaderImg}
                          setNewPlaylistDetaisl={(newDetails) => {
                            setPageHeaderImg(newDetails.coverImg);
                            setPageHeaderTitle(newDetails.name);
                            setPageHeaderDescription(newDetails.description);
                          }}
                        />
                      ),
                    });
                  }
                }}
              >
                <Heading number={1} ref={headingRef}>
                  {pageHeaderTitle}
                </Heading>
              </button>
            </span>
          </ScrollableText>
        </div>
        {pageHeaderDescription ? (
          <p className="description">{decode(pageHeaderDescription)}</p>
        ) : null}
        <div>
          <p>
            {type === HeaderType.song || isAlbumVariant ? (
              <span className="trackArtists">
                <ArtistList artists={artists} />
              </span>
            ) : type === HeaderType.podcast ? (
              <Heading number={3} as={AsType.SPAN}>
                {decode(ownerDisplayName)}
              </Heading>
            ) : (
              ownerDisplayName && (
                <Link
                  href={`/${
                    type === HeaderType.episode
                      ? "show"
                      : type === HeaderType.concert
                      ? "artist"
                      : "user"
                  }/${ownerId}`}
                  className="userLink"
                >
                  {decode(ownerDisplayName)}
                </Link>
              )
            )}
            {type === HeaderType.artist && (
              <span className="stats">
                {stats?.listeners && (
                  <span className="stat">
                    {formatNumber(Number(stats?.listeners))}{" "}
                    {translations.listeners}
                    <>&nbsp;&middot;</>&nbsp;
                  </span>
                )}
                {stats?.playcount && (
                  <span className="stat">
                    {formatNumber(Number(stats?.playcount))}{" "}
                    {translations.plays}
                    <>&nbsp;&middot;</>&nbsp;
                  </span>
                )}
              </span>
            )}
            {(totalFollowers ?? 0) > 0 ? (
              <span>
                {!(
                  type === HeaderType.profile || type === HeaderType.artist
                ) ? (
                  <>&nbsp;&middot;</>
                ) : (
                  ""
                )}{" "}
                {formatNumber(totalFollowers ?? 0)} {translations.followers}
              </span>
            ) : null}
            {(type === HeaderType.song || isAlbumVariant) && release_date ? (
              <>
                <span>&nbsp;&middot; {getYear(release_date)}</span>
                {type === HeaderType.song && duration_s ? (
                  <span>
                    &nbsp;&middot; {formatTime(duration_s)}{" "}
                    {translations.minutes}
                  </span>
                ) : null}
              </>
            ) : null}
            {totalTracks ? (
              <span>
                &nbsp;&middot; {formatNumber(totalTracks)}{" "}
                {totalTracks === 1
                  ? translations.song?.toLowerCase()
                  : translations.songs?.toLowerCase()}
              </span>
            ) : null}
            {popularity ? (
              <span>
                &nbsp;&middot; {formatNumber(popularity)}{" "}
                {translations.popularity}
              </span>
            ) : null}
            {totalPublicPlaylists ? (
              <span>
                &nbsp;&middot; {formatNumber(totalPublicPlaylists)}{" "}
                {translations.publicPlaylist}
              </span>
            ) : null}
          </p>
        </div>
      </div>
      <style jsx>
        {`
          div h1,
          div h2,
          div p {
            padding: ${banner ? "0px 0 15px 0px" : "0.08em 0px"};
          }
          div.playlistInfo {
            align-self: flex-end;
            text-shadow: ${banner ? "3px 1px 10px #00000078" : "none"};
            margin-right: 50px;
            width: 100%;
          }
          .title-container :global(.text) {
            white-space: pre-wrap;
          }
          .title-container :global(*) {
            width: 100%;
          }
          .title-container :global(h1) {
            line-break: auto;
            line-height: 1;
          }
          p.description {
            margin-bottom: 4px;
            font-size: 14px;
            word-spacing: 2px;
            line-height: 1.4;
          }
          .trackArtists,
          :global(.userLink) {
            display: inline-block;
            font-size: 14px;
            font-weight: 700;
            letter-spacing: normal;
            line-height: 16px;
            text-transform: none;
            color: #fff;
            text-decoration: none;
          }
          :global(.userLink:hover),
          :global(.userLink:focus) {
            text-decoration: underline;
          }
          button {
            border: none;
            background: transparent;
            cursor: ${enableEditPlaylist ? "pointer" : "default"};
          }
          p {
            margin: 0;
            color: #ffffffb3;
          }
          span {
            font-size: 14px;
            display: inline-block;
          }
          #cover-image {
            margin-right: 15px;
            align-self: center;
            align-self: flex-end;
            height: 232px;
            margin-inline-end: 24px;
            min-width: 232px;
            width: 232px;
            box-shadow: 0 4px 60px rgb(0 0 0 / 50%);
            border-radius: ${type === HeaderType.artist ||
            type === HeaderType.profile
              ? "50%"
              : type === HeaderType.episode || type === HeaderType.podcast
              ? "12px"
              : "0px"};
            object-fit: cover;
            object-position: center center;
          }
          @media (max-width: 768px) {
            .playlistInfo :global(h1) {
              white-space: nowrap;
              display: flex;
              margin: 0 auto;
              width: 100%;
              text-align: center;
              justify-content: start;
              width: fit-content;
            }
            #cover-image {
              margin: 0;
              margin-top: -40px;
            }
            div.playlistInfo span {
              margin: 0 auto;
              width: auto;
            }
          }
          @media (max-width: 480px) {
            .playlistInfo :global(h1) {
              margin: 0 auto;
              justify-content: start;
              width: fit-content;
            }
            div.playlistInfo span {
              margin: 0 auto;
              width: auto;
            }
          }
        `}
      </style>
    </PageDetails>
  );
}
