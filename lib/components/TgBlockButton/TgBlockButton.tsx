import React from "react";
import css from "./TgBlockButton.module.scss";
import { TgUiIconSpinner } from "../Icons/TgUiIcons.tsx";

export type TgBlockButtonProps = {

  /** Button text */
  text?: React.ReactNode;

  /** Icon that appears in the button. Could be an SVG or image */
  icon?: React.ReactNode;

  /** Button color */
  color?: "main" | "red";

  /** function that executes when button is clicked */
  onClick?: React.MouseEventHandler;

  /** Allows to disable the button. In case of disabling onClick function will not execute. */
  disabled?: boolean;

  /** Shows loading spinner in the button */
  loading?: boolean;

};

/**
 * Button with Telegram-like appearance
 */
export const TgBlockButton = ({
  icon = null,
  text = "",
  color = "main",
  onClick,
  disabled,
  loading,
}: TgBlockButtonProps) => {
  const buttonClasses = [
    css.TgBlockButton,
    css["TgBlockButton"],
    css["TgBlockButton_" + color],
  ];

  if (disabled) {
    buttonClasses.push(css["TgBlockButton_disabled"]);
  }

  console.log(css);

  return (
    <div className={css.TgBlockButtonWrapper}>
      <div className={buttonClasses.join(" ")} onClick={onClick}>
        {loading ? (
          <TgUiIconSpinner />
        ) : (
          <>
            {icon && <div className={css.TgBlockButtonIcon}>{icon}</div>}
            <div className={css.TgBlockButtonText}>{text}</div>
          </>
        )}
      </div>
    </div>
  );
};
