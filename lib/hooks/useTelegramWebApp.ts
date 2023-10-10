declare global {
    interface Window {
        Telegram: {
            WebApp: any
        };
    }
}

export interface TelegramWebApp {

    BackButton?: {
        isVisible: boolean,
        onClick: (callback: () => void) => void,
        offClick: (callback: () => void) => void,
        show: () => void,
        hide: () => void,
    },

    setNavigateBack?: () => void
}

export const useTelegramWebApp: () => TelegramWebApp = () => {

    const WebApp = window?.Telegram?.WebApp;

    return {

        BackButton : {

            isVisible : WebApp.BackButton?.isVisible,

            onClick : (callback: () => void) => WebApp?.BackButton?.onClick(callback),

            offClick : (callback: () => void) => WebApp?.BackButton?.offClick(callback),

            show : () => WebApp?.BackButton?.show(),

            hide : () => WebApp?.BackButton?.hide(),

        },

        setNavigateBack: () => {
            WebApp?.BackButton?.onClick(() => {
                window.history.back();
            });
            WebApp?.BackButton?.show();
        }

    }

}