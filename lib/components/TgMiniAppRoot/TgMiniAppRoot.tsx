import React from "react";
import css from "./TgMiniAppRoot.module.scss";
import { LanguageProvider, LanguagesType } from "../../hooks/useLang.tsx";
import { ModalProvider } from "../../hooks/useModal.tsx";

export type TgMiniAppTheme = "telegram" | "light" | "dark";

export type TgMiniAppRootProps = {
  languages?: LanguagesType;
  children?: React.ReactNode;
};

export const TgMiniAppRoot = ({
  languages = {},
  children,
}: TgMiniAppRootProps) => {
  return (
    <div className={css.TgMiniAppRoot} id="TgMiniAppRoot">
      <LanguageProvider languages={languages}>
        <ModalProvider>
          <div className={css.TgMiniAppRootContent}>{children}</div>
        </ModalProvider>
      </LanguageProvider>
    </div>
  );
};
