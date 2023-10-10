import React, { useEffect, useState } from "react";

export interface ModalContext {
  isVisible: boolean;
  open: (modalContent: React.ReactNode, closeTimeout?: number) => void;
  close: () => void;
}

export const ModalContext = React.createContext<ModalContext>(
  {} as ModalContext,
);

export interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({
  children,
}: ModalProviderProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [closeTimeoutId, setCloseTimeoutId] = useState(0);

  const close = () => {
    setIsVisible(false);

    setTimeout(() => {
      setModalContent(null);
    }, 200);
  };

  const open = (modalContent: React.ReactNode, closeTimeout = 0 as number) => {
    setModalContent(modalContent);

    setIsVisible(true);

    if (closeTimeout > 0) {
      setCloseTimeoutId(
        setTimeout(() => {
          close();
        }, closeTimeout) as unknown as number,
      );
    }
  };

  useEffect(() => {
    return () => clearTimeout(closeTimeoutId);
  });

  return (
    <ModalContext.Provider value={{ isVisible, open, close }}>
      {children}

      {modalContent}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const { open, close, isVisible } = React.useContext(ModalContext);

  return {
    open,
    close,
    isVisible,
  };
};
