import React from "react";
import css from "./TgBlock.module.scss";

export type TgBlockProps = {

  /** Block title. Shows above the block */
  title?: React.ReactNode;

  /** Block caption. Shows under the block */
  caption?: React.ReactNode;

  /** Block contents. Usually it is a set of <TgBlockItem> components. */
  children?: React.ReactNode;

  /** Extra styling for the block */
  style?: React.CSSProperties;

  /** If true, block will have red border. */
  isError?: boolean;

};

/**
 * Main element that will help you create complex Telegram-like app interface.
 */
export const TgBlock = (props: TgBlockProps) => {
  const captionClasses = [css.TgBlockCaption];

  if (props.isError) {
    captionClasses.push(css.TgBlockCaptionError);
  }

  return (
    <div className={css.TgBlockWrapper} style={props.style}>
      <div className={css.TgBlock}>
        {props.title && props.title !== "" && (
          <div className={css.TgBlockTitle}>{props.title}</div>
        )}

        {props.children && (
          <div className={css.TgBlockContent}>{props.children}</div>
        )}

        {props.caption && props.caption !== "" && (
          <div className={captionClasses.join(" ")}>{props.caption}</div>
        )}
      </div>
    </div>
  );
};
