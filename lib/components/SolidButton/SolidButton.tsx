import React from "react";
import css from "./SolidButton.module.scss";
import { TgUiIconSpinner } from "../Icons/TgUiIcons.tsx";

export type SolidButtonProps = {

  /** Button text */
  text?: React.ReactNode;

  /** Icon that appears in the button. Could be an SVG or image */
  icon?: React.ReactNode;

  /** Button color */
  color?: "main" | "red" | "green" | "yellow" | "lightblue" | "violet";

  /** function that executes when button is clicked */
  onClick?: React.MouseEventHandler;

  /** Allows to disable the button. In case of disabling onClick function will not execute. */
  disabled?: boolean;

  /** Shows loading spinner in the button */
  loading?: boolean;
};

/**
 * A button with solid background. Could be used for some primary actions.
 */
export const SolidButton = ({
  icon = null,
  text = "",
  color = "main",
  onClick,
  disabled,
  loading,
}: SolidButtonProps) => {
  const buttonClasses = [
    css.SolidButton,
    css["SolidButton_"],
    css["SolidButton_" + color],
  ];

  if (disabled) {
    buttonClasses.push(css["SolidButton_disabled"]);
  }

  console.log(css);

  return (
    <div className={css.SolidButtonWrapper}>
      <div className={buttonClasses.join(" ")} onClick={onClick}>
        {loading ? (
          <TgUiIconSpinner />
        ) : (
          <>
            {icon && <div className={css.SolidButtonIcon}>{icon}</div>}
            <div className={css.SolidButtonText}>{text}</div>
          </>
        )}
      </div>
    </div>
  );
};
