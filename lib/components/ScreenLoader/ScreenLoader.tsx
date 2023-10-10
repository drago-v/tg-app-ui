import React from "react";
import css from "./ScreenLoader.module.scss";
import {
  TgUiIconCheck,
  TgUiIconCross,
  TgUiIconSpinner,
} from "../Icons/TgUiIcons.tsx";

export type ScreenLoaderStatusType = "loading" | "success" | "error";
export type ScreenLoaderErrorTextType = React.ReactNode;

export type ScreenLoaderProps = {
  status?: ScreenLoaderStatusType;
  errorText?: ScreenLoaderErrorTextType;
};

/**
 * Used for showing loading spinner or async request status. Blocks app interface from use interactions.
 */
export const ScreenLoader = ({
  status = "loading",
  errorText = "",
}: ScreenLoaderProps) => {
  let icon = <TgUiIconSpinner size={36} />;
  const iconClasses = [css.ScreenLoaderIcon];

  if (errorText !== "" || status === "error") {
    iconClasses.push(css.ScreenLoaderIconError);
  }

  if (status === "success") {
    icon = <TgUiIconCheck size={36} />;
  }

  if (status === "error") {
    icon = <TgUiIconCross size={36} />;
  }

  return (
    <div className={css.ScreenLoaderWrapper}>
      <div className={iconClasses.join(" ")}>{icon}</div>
      {status === "error" && errorText !== "" && (
        <div className={css.ScreenLoaderError}>{errorText}</div>
      )}
    </div>
  );
};
