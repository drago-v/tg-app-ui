import React, { useState } from "react";

export type SelectedLanguageType = string;
export type SelectLanguageType = (lang: SelectedLanguageType) => void;
export type LangItemType = string | React.ReactNode;
export type LangType = { [key: string]: LangItemType };

export type LanguagesType = {
  [langKey: string]: LangType;
};

export interface LanguageContext {
  languages: LanguagesType;
  current: SelectedLanguageType;
  setLang: SelectLanguageType;
}

export const LanguageContext = React.createContext<LanguageContext>(
  {} as LanguageContext,
);

export interface LanguageProviderPropsType {
  languages: LanguagesType;
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderPropsType> = ({
  languages,
  children,
}) => {
  const [language, setLang] = useState(() => {
    return Object.keys(languages)[0];
  });

  return (
    <LanguageContext.Provider value={{ languages, current: language, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const { languages, current, setLang } = React.useContext(LanguageContext);

  return {
    lang: {
      ...languages[current],
    },
    currentLang: current,
    setLang: setLang,
  } as {
    lang: { [key: string]: LangItemType };
    currentLang: SelectedLanguageType;
    setLang: (lang: SelectedLanguageType) => void;
  };
};
