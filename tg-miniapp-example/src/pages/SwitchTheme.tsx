import {useEffect} from "react";
import {
    TgBlock,
    TgBlockItem,
    TgBlockText,
    useUiTheme,
    useLang,
    useTelegramWebApp
} from "tg-app-ui";
import {BiLogoTelegram} from "react-icons/bi";

export const SwitchTheme = () => {

    const uiTheme = useUiTheme();
    const {lang} = useLang();
    const WebApp = useTelegramWebApp();

    useEffect(() => {
        if (WebApp?.setNavigateBack !== undefined) {
            WebApp.setNavigateBack();
        }
    }, []);

    return <>

        <TgBlock title={lang.info_title}>
            <TgBlockText>
                {lang.theme_info_content}
            </TgBlockText>
        </TgBlock>

        <TgBlock title={lang.theme_switch_title}>

            <TgBlockItem
                text={lang.theme_telegram}
                icon={<BiLogoTelegram />}
                check={uiTheme.current === 'telegram'}
                onClick={() => uiTheme.change('telegram')}
            />

            <TgBlockItem
                text={lang.theme_light}
                icon="🌞"
                check={uiTheme.current === 'light'}
                onClick={() => uiTheme.change('light')}
            />

            <TgBlockItem
                text={lang.theme_dark}
                icon="🌚"
                check={uiTheme.current === 'dark'}
                onClick={() => uiTheme.change('dark')}
            />

        </TgBlock>

    </>

}