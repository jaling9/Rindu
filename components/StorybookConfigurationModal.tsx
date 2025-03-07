import { ReactElement, useState } from "react";

import FormToggle from "./FormToggle";
import Heading from "./Heading";
import SelectControl from "./SelectControl";
import TextControl from "./TextControl";
import { useTranslations } from "hooks";
import { AsType } from "types/heading";
import { Language } from "utils";

export interface StorybookConfigurationModalProps {
  setAccessToken: (accessToken: string) => void;
  setProduct: (product: string) => void;
  setIsLogin: (isLogin: boolean) => void;
  setLanguage: (language: Language) => void;
  accessToken: string;
  product: string;
  isLogin: boolean;
  language: Language;
}

export default function StorybookConfigurationModal({
  setAccessToken,
  setProduct,
  setIsLogin,
  accessToken,
  product,
  isLogin,
  language,
  setLanguage,
}: StorybookConfigurationModalProps): ReactElement {
  const [inputAccessToken, setInputAccessToken] = useState(accessToken);
  const [isLoggedInput, setIsLoggedInput] = useState(isLogin);
  const { translations } = useTranslations();
  return (
    <div className="preferences-container">
      <Heading number={4} as={AsType.H2}>
        Language
      </Heading>
      <div className="section">
        <div className="label-container">
          <label htmlFor="product">
            Select a language to use with the components
          </label>
        </div>
        <div className="select-container">
          <SelectControl
            options={[
              { label: translations.spanish, value: "ES" },
              { label: translations.english, value: "EN" },
            ]}
            id="language"
            defaultValue={language}
            onChange={(e) => {
              setLanguage(e.target.value as Language);
            }}
          />
        </div>
      </div>
      <Heading number={4} as={AsType.H2}>
        Product Selection
      </Heading>
      <div className="section">
        <div className="label-container">
          <label htmlFor="product">
            Select a product to use with the components
          </label>
        </div>
        <div className="select-container">
          <SelectControl
            options={[
              { label: "Premium", value: "premium" },
              { label: "Free", value: "free" },
            ]}
            id="product"
            defaultValue={product}
            onChange={(e) => {
              setProduct(e.target.value);
            }}
          />
        </div>
      </div>
      <Heading number={4} as={AsType.H2}>
        Access Token
      </Heading>
      <div className="section">
        <div className="label-container">
          <label htmlFor="accessToken">
            To obtain an access token with the required scopes, go to{" "}
            <a
              href="https://developer.spotify.com/documentation/web-api/concepts/access-token"
              target="_blank"
              rel="noreferrer"
            >
              https://developer.spotify.com/documentation/web-api/concepts/access-token
            </a>{" "}
            and follow the instructions.
          </label>
        </div>
        <div className="select-container">
          <TextControl
            id="accessToken"
            placeholder="Paste your access token here"
            value={inputAccessToken}
            onChange={(e) => {
              setInputAccessToken(e.target.value);
              setAccessToken(e.target.value);
            }}
            popupText="This is the access token that will be used to make requests to the Spotify API."
          />
        </div>
      </div>
      <Heading number={4} as={AsType.H2}>
        Logged In Status
      </Heading>
      <div className="section">
        <div className="label-container">
          <label htmlFor="isLoggedIn">
            Toggle the logged in status for the components
          </label>
        </div>
        <div className="select-container">
          <FormToggle
            id="isLoggedIn"
            name="isLoggedIn"
            checked={isLoggedInput}
            tabIndex={0}
            onChange={(e) => {
              setIsLogin(e.target.checked);
              setIsLoggedInput(e.target.checked);
            }}
          />
        </div>
      </div>
      <style jsx>{`
        :global(.modal) {
          overflow: auto;
        }
        .preferences-container {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin: 0 auto;
          max-width: 900px;
          padding: 16px 0px;
        }
        .section {
          display: grid;
          gap: 8px 24px;
          grid-template-columns: 1.8fr 1fr;
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
          color: #a7a7a7;
        }
        .select-container {
          align-items: center;
          display: flex;
          justify-content: flex-end;
          position: relative;
          width: 100%;
        }
        a {
          color: #fff;
          text-decoration: none;
          font-weight: 600;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
