import React, { useEffect, useState } from "react";
import css from "./Modal.module.scss";
import { ModalContext, useModal } from "../../hooks/useModal.tsx";
import { TgUiIconCross } from "../Icons/TgUiIcons.tsx";

export type ModalProps = {
  children?: React.ReactNode;
  canClose?: boolean;
  title?: React.ReactNode;
  icon?: React.ReactNode;
};

/**
 * Used for showing modals above the apps interface.
 */
export const Modal = ({
  children,
  canClose = true,
  title = null,
  icon = null,
}: ModalProps) => {
  const modal = useModal();
  const [isHidden, setIsHidden] = useState(true);
  const { close } = React.useContext(ModalContext);

  const wrapperClasses = [css.ModalWrapper];
  let closeModal = close;

  if (!canClose) closeModal = () => false;

  if (isHidden || !modal.isVisible) wrapperClasses.push(css.ModalWrapperHidden);

  useEffect(() => {
    setIsHidden(false);
  }, []);

  return (
    <div className={wrapperClasses.join(" ")}>
      <div className={css.ModalDarkBackground} onClick={closeModal} />
      <div className={css.ModalContentWrapper}>
        {canClose && (
          <div className={css.close} onClick={closeModal}>
            <TgUiIconCross size={32} />
          </div>
        )}
        {icon && <div className={css.ModalContentIcon}>{icon}</div>}
        {title && <div className={css.ModalContentTitle}>{title}</div>}
        <div className={css.ModalContent}>{children}</div>
      </div>
    </div>
  );
};
