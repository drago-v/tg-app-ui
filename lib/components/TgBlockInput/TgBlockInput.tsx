import css from "./TgBlockInput.module.scss";
import TextareaAutosize from "react-textarea-autosize";
import React, { ChangeEventHandler } from "react";
import { TgBlock } from "../TgBlock/TgBlock.tsx";

export type TgBlockInputProps = {

  /** Input value */
  value?: string;

  /** Input change event handler */
  onChange?: ChangeEventHandler;

  /** Title shown above the input */
  title?: React.ReactNode;

  /** Caption shown under the input */
  caption?: React.ReactNode;

  /** Icon on the right side of the input */
  iconRight?: React.ReactNode;

  /** Icon on the left side of input */
  iconLeft?: React.ReactNode;

  /** Additional styles for input */
  style?: React.CSSProperties;

  /** If true, user will be able to type multiline text */
  multiLine?: boolean;

  /** if true, input will have green border */
  isSuccess?: boolean;

  /** If true, input will have red border */
  isError?: boolean;

  /** Placeholder for the input */
  placeholder?: React.ReactNode;

};

/**
 * Used for custom Telegram-like inputs
 */
export const TgBlockInput = ({
  value,
  onChange,
  title,
  caption,
  iconRight,
  iconLeft,
  style,
  multiLine,
  isSuccess,
  isError,
  placeholder = "",
}: TgBlockInputProps) => {
  const inputWrapperClasses = [css.input];

  if (isSuccess) inputWrapperClasses.push(css.inputSuccess);

  if (isError) {
    inputWrapperClasses.push(css.inputError);
    caption = <span style={{ color: "var(--red)" }}>{caption}</span>;
  }

  if (iconRight) inputWrapperClasses.push(css.inputIconRight);
  if (iconLeft) inputWrapperClasses.push(css.inputIconLeft);

  let inputPlaceholder = "";

  if (typeof placeholder === "string") {
    inputPlaceholder = placeholder;
  }

  let input = (
    <input value={value} onChange={onChange} placeholder={inputPlaceholder} />
  );

  if (multiLine) {
    input = (
      <TextareaAutosize
        placeholder={inputPlaceholder}
        value={value}
        onChange={onChange}
        minRows={3}
      />
    );
  }

  return (
    <TgBlock title={title} caption={caption} style={style} isError={isError}>
      <div className={inputWrapperClasses.join(" ")}>
        {input}
        {iconRight && <div className={css.iconRight}>{iconRight}</div>}
        {iconLeft && <div className={css.iconLeft}>{iconLeft}</div>}
      </div>
    </TgBlock>
  );
};
