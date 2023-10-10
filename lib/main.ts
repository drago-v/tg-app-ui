import "./index.scss";

//Components
export { TgMiniAppRoot } from "./components/TgMiniAppRoot/TgMiniAppRoot.tsx";
export type { TgMiniAppRootProps } from "./components/TgMiniAppRoot/TgMiniAppRoot.tsx";
export type { TgMiniAppTheme } from "./components/TgMiniAppRoot/TgMiniAppRoot.tsx";

export { TgBlock } from "./components/TgBlock/TgBlock.tsx";
export type { TgBlockProps } from "./components/TgBlock/TgBlock.tsx";

export { TgBlockItem } from "./components/TgBlockItem/TgBlockItem.tsx";
export type { TgBlockItemProps } from "./components/TgBlockItem/TgBlockItem.tsx";

export { TgBlockInput } from "./components/TgBlockInput/TgBlockInput.tsx";
export type { TgBlockInputProps } from "./components/TgBlockInput/TgBlockInput.tsx";

export { TgBlockText } from "./components/TgBlockText/TgBlockText.tsx";
export type { TgBlockTextProps } from "./components/TgBlockText/TgBlockText.tsx";

export { SolidButton } from "./components/Button/SolidButton.tsx";
export type { TgBlockButtonProps } from "./components/Button/SolidButton.tsx";

export { TgUiIconChevron } from "./components/Icons/TgUiIcons.tsx";
export { TgUiIconInfo } from "./components/Icons/TgUiIcons.tsx";
export { TgUiIconCheck } from "./components/Icons/TgUiIcons.tsx";
export { TgUiIconCross } from "./components/Icons/TgUiIcons.tsx";
export { TgUiIconSpinner } from "./components/Icons/TgUiIcons.tsx";

export { Modal } from "./components/Modal/Modal.tsx";
export type { ModalProps } from "./components/Modal/Modal.tsx";

export { ScreenLoader } from "./components/ScreenLoader/ScreenLoader.tsx";
export type { ScreenLoaderProps } from "./components/ScreenLoader/ScreenLoader.tsx";
export type { ScreenLoaderErrorTextType } from "./components/ScreenLoader/ScreenLoader.tsx";
export type { ScreenLoaderStatusType } from "./components/ScreenLoader/ScreenLoader.tsx";

//Hooks
export { useLang } from "./hooks/useLang.tsx";
export type { SelectedLanguageType } from "./hooks/useLang.tsx";
export type { SelectLanguageType } from "./hooks/useLang.tsx";
export type { LangItemType } from "./hooks/useLang.tsx";
export type { LangType } from "./hooks/useLang.tsx";

export { useModal } from "./hooks/useModal.tsx";

export { useScreenLoader } from "./hooks/useScreenLoader.tsx";

export { useUiTheme } from "./hooks/useUiTheme.ts";
export type { uiThemeType } from "./hooks/useUiTheme.ts";

export { useTelegramWebApp } from "./hooks/useTelegramWebApp.ts";
export type {TelegramWebApp} from "./hooks/useTelegramWebApp.ts";
