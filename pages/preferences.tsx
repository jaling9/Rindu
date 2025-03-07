import { ReactElement, useEffect, useState } from "react";

import { NextApiRequest, NextApiResponse } from "next";
import { NextParsedUrlQuery } from "next/dist/server/request-meta";
import { useRouter } from "next/router";

import { ContentContainer, Heading } from "components";
import SelectControl from "components/SelectControl";
import { useAnalytics, useAuth } from "hooks";
import { AsType } from "types/heading";
import {
  getAuth,
  getLanguageByCountry,
  getTranslations,
  makeCookie,
  Page,
  serverRedirect,
  takeCookie,
} from "utils";

interface PreferencesProps {
  user: SpotifyApi.UserObjectPrivate | null;
  accessToken: string | null;
  translations: Record<string, string>;
  lang: string;
}

export default function PreferencesPage({
  user,
  accessToken,
  translations,
  lang,
}: PreferencesProps): ReactElement {
  const [language, setLanguage] = useState(lang);
  const [isReload, setIsReload] = useState(false);
  const { setUser, setAccessToken } = useAuth();
  const { trackWithGoogleAnalytics } = useAnalytics();
  const router = useRouter();

  useEffect(() => {
    trackWithGoogleAnalytics();

    if (!accessToken) {
      router.push("/");
      return;
    }

    setAccessToken(accessToken);

    setUser(user);
  }, [
    accessToken,
    router,
    setAccessToken,
    setUser,
    trackWithGoogleAnalytics,
    user,
  ]);

  return (
    <ContentContainer>
      <div className="preferences-container">
        <Heading number={3} as={AsType.H1}>
          {translations.preferences}
        </Heading>
        <Heading number={4} as={AsType.H2}>
          {translations.language}
        </Heading>
        <div className="inputs-container">
          <div className="label-container">
            <label htmlFor="language">{translations.languageLabel}</label>
          </div>
          <div className="select-container">
            <SelectControl
              options={[
                { label: translations.spanish, value: "es" },
                { label: translations.english, value: "en" },
              ]}
              id="language"
              defaultValue={language}
              onChange={(e) => {
                setLanguage(e.target.value);
                setIsReload(true);
              }}
            />
          </div>
          {isReload && (
            <div>
              <button
                className="reload button"
                onClick={() => {
                  makeCookie({
                    name: "language",
                    value: language,
                    age: 60 * 60 * 24 * 30 * 2,
                  });

                  setIsReload(false);
                  window.location.reload();
                }}
              >
                {translations.reload}
              </button>
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        .preferences-container {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin: 0 auto;
          max-width: 900px;
          padding: 16px 32px;
        }
        .inputs-container {
          display: grid;
          gap: 8px 24px;
          grid-template-columns: 2fr 1fr;
        }
        .label-container {
          align-items: center;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
        }
        label {
          box-sizing: border-box;
          margin-block: 0px;
          font-size: 0.875rem;
          font-weight: 400;
          color: #6a6a6a;
        }
        .select-container {
          align-items: center;
          display: flex;
          justify-content: flex-end;
          position: relative;
          width: 100%;
        }
        button.reload {
          box-sizing: border-box;
          font-size: 1rem;
          font-weight: 700;
          background-color: transparent;
          border-radius: 500px;
          cursor: pointer;
          position: relative;
          text-align: center;
          text-decoration: none;
          text-transform: none;
          touch-action: manipulation;
          transition-duration: 33ms;
          transition-property: background-color, border-color, color, box-shadow,
            filter, transform;
          user-select: none;
          vertical-align: middle;
          transform: translate3d(0px, 0px, 0px);
          padding-block: 7px;
          padding-inline: 31px;
          border: 1px solid #727272;
          color: #fff;
          min-block-size: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        button.reload:focus {
          outline: none;
        }
        button.reload:hover {
          transform: scale(1.04);
          border-color: #fff;
        }
        button.reload:active {
          opacity: 0.7;
          outline: none;
          transform: scale(1);
          border-color: #727272;
        }
      `}</style>
    </ContentContainer>
  );
}

export async function getServerSideProps({
  res,
  req,
  query,
}: {
  res: NextApiResponse;
  req: NextApiRequest;
  query: NextParsedUrlQuery & { code?: string };
}): Promise<{
  props: Partial<PreferencesProps>;
}> {
  const country = (query.country || "US") as string;
  const cookies = req?.headers?.cookie ?? "";
  const language =
    takeCookie("language", cookies) || getLanguageByCountry(country);
  const translations = getTranslations(country, Page.Preferences);
  if (!cookies) {
    serverRedirect(res, "/");
    return { props: {} };
  }

  const { accessToken, user } = (await getAuth(res, cookies)) || {};

  return {
    props: {
      user: user || null,
      accessToken: accessToken ?? null,
      translations,
      lang: language,
    },
  };
}
