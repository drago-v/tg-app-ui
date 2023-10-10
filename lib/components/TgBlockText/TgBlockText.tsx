import React from "react";
import css from "./TgBlockText.module.scss";

export type TgBlockTextProps = {
  children?: React.ReactNode;
  size?: "s" | "m" | "l";
  color?: "primary" | "secondary";
};

export const TgBlockText = ({
  size = "m",
  color = "primary",
  children,
}: TgBlockTextProps) => {
  const textBlockClasses = [
    css.TgBlockText,
    css["TgBlockText_size_" + size],
    css["TgBlockText_color_" + color],
  ];

  return <div className={textBlockClasses.join(" ")}>{children}</div>;
};
