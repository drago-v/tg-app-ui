import {useEffect} from "react";
import {
    TgBlock,
    TgBlockItem,
    useLang,
    useTelegramWebApp
} from "tg-app-ui";

export const SwitchLanguage = () => {

    const WebApp = useTelegramWebApp();
    const {lang, currentLang, setLang} = useLang();

    useEffect(() => {
        WebApp.setNavigateBack();
    }, []);

    return <TgBlock
        title={lang.switch_language_title}
        caption={lang.language_info_caption}
    >

        <TgBlockItem
            text={lang.switch_language_en}
            caption="English"
            icon="🇺🇸"
            check={currentLang === 'en'}
            onClick={() => setLang('en')}
        />

        <TgBlockItem
            text={lang.switch_language_ru}
            caption="Русский"
            icon="🇷🇺"
            check={currentLang === 'ru'}
            onClick={() => setLang('ru')}
        />

    </TgBlock>

}