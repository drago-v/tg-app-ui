import { useModal } from "./useModal.tsx";
import { Modal } from "../components/Modal/Modal.tsx";
import {
  ScreenLoader,
  ScreenLoaderErrorTextType,
  ScreenLoaderStatusType,
} from "../components/ScreenLoader/ScreenLoader.tsx";

export const useScreenLoader = () => {
  const screenLoaderModal = useModal();

  return {
    show: (
      status = "loading" as ScreenLoaderStatusType,
      errorText = "" as ScreenLoaderErrorTextType,
      closeInterval = 2500 as number,
    ) => {
      if (status === "loading" && closeInterval > 0) {
        closeInterval = 0;
      }

      screenLoaderModal.open(
        <Modal canClose={false}>
          <ScreenLoader status={status} errorText={errorText} />
        </Modal>,
        closeInterval,
      );
    },

    hide: screenLoaderModal.close,
  };
};
