import css from "./TgBlockItem.module.scss";
import React, { MouseEventHandler } from "react";
import {
  TgUiIconCheck,
  TgUiIconChevron,
  TgUiIconInfo,
  TgUiIconSpinner,
} from "../Icons/TgUiIcons.tsx";

export type TgBlockItemProps = {

  /** Primary text of the item. */
  text?: string | React.ReactNode;

  /** Secondary text of the item. */
  textSecondary?: string | React.ReactNode;

  /** Text that appears on the right side. */
  textRight?: string | React.ReactNode;

  /** Caption tha appears under primary and secondary text. */
  caption?: string | React.ReactNode;

  /** Icon on the left side*/
  icon?: React.ReactNode;

  /** Background color for the icon. */
  iconColor?: string;

  /** If true, chevron icon will appear on the right side. Usually used for navigation purposes. */
  chevron?: boolean;

  /** If true, info icon will appear on the right side. */
  info?: boolean;

  /** If true, checkmark will appear on the right side. Usually user for selecting item. */
  check?: boolean;

  /** If true, loading spinner will appear on the right side. Usually used while loading some data. */
  loading?: boolean;

  /** If true or false, enabled or disabled switcher will appear on the right side */
  switcher?: boolean;

  /** Function that runs when item is clicked */
  onClick?: React.MouseEventHandler;

  /** Other item contents */
  children?: React.ReactNode;
};

/**
 * This is main element of the library. You can use this component with different props
 * to build a lot of different UI elements. Should be used inside <TgBlock> component.
 */
export const TgBlockItem = ({
  text = "",
  textSecondary = "",
  textRight = "",
  caption = "",
  icon = null,
  iconColor = "",
  chevron = false,
  info = false,
  check = false,
  loading = false,
  switcher,
  onClick = () => false,
  children = null,
}: TgBlockItemProps) => {
  const props = {} as { onClick: MouseEventHandler };

  const wrapperClasses = [css.TgBlockItemWrapper];

  if (onClick) props.onClick = onClick;

  if (icon) wrapperClasses.push(css.TgBlockItemWrapperIcon);
  if (chevron) wrapperClasses.push(css.TgBlockItemWrapperChevron);

  const iconClasses = [css.icon];

  if (iconColor !== "") {
    iconClasses.push(css.icon_color, css["icon_color_" + iconColor]);
  }

  const rightContent = {
    text: null,
    icon: null,
  } as { text: React.ReactNode; icon: React.ReactNode };

  if (textRight) {
    rightContent.text = <div className={css.textRight}>{textRight}</div>;
  }

  if (chevron) {
    rightContent.icon = (
      <div className={css.iconRight}>
        <TgUiIconChevron />
      </div>
    );
  }

  if (info) {
    rightContent.icon = (
      <div className={css.iconRight}>
        <TgUiIconInfo />
      </div>
    );
  }

  if (check === true) {
    rightContent.icon = (
      <div className={css.iconRight + " " + css.iconRightAccent}>
        <TgUiIconCheck />
      </div>
    );
  }

  if (loading === true) {
    rightContent.icon = (
      <div className={css.iconRight}>
        <TgUiIconSpinner />
      </div>
    );
  }

  if (switcher === true || switcher === false) {
    rightContent.text = null;
    rightContent.icon = (
      <div
        className={
          css.switcher +
          " " +
          css["switcher_" + (switcher ? "enabled" : "disabled")]
        }
      />
    );
  }

  return (
    <div className={css.TgBlockItemWrapperOuter}>
      <div className={wrapperClasses.join(" ")} {...props}>
        <div className={css.TgBlockItem}>
          {children ? (
            children
          ) : (
            <>
              {icon && <div className={iconClasses.join(" ")}>{icon}</div>}

              <div className={css.content}>
                <div className={css.left}>
                  {text !== "" && <div className={css.text}>{text}</div>}

                  {textSecondary !== "" && (
                    <div className={css.textSecondary}>{textSecondary}</div>
                  )}

                  {caption !== "" && (
                    <div className={css.caption}>{caption}</div>
                  )}
                </div>

                <div className={css.right}>
                  {rightContent.text}
                  {rightContent.icon}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
