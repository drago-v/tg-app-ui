import {useEffect} from "react";
import {
    TgBlock,
    TgBlockItem,
    TgBlockText,
    useLang,
    useTelegramWebApp
} from "tg-app-ui";
import {useNavigate} from "react-router-dom";

export const Main = () => {

    const navigate = useNavigate();
    const WebApp = useTelegramWebApp();
    const {lang, currentLang}  = useLang();

    useEffect(() => {
        WebApp?.BackButton?.hide();
    }, []);

    return <>

        <TgBlock title={lang.info_title}>

            <TgBlockText>
                {lang.main_info_content}
            </TgBlockText>

        </TgBlock>

        <TgBlock title={lang.main_menu_title}>

            <TgBlockItem
                text={lang.main_menu_switch_theme}
                chevron
                onClick={() => navigate('/switch-theme')}
            />

            <TgBlockItem
                text={lang.main_menu_switch_language}
                textRight={lang['switch_language_' + currentLang]}
                chevron
                onClick={() => navigate('/switch-language')}
            />

            <TgBlockItem
                text={lang.main_menu_menu}
                chevron
                onClick={() => navigate('/menu')}
            />

            <TgBlockItem
                text={lang.main_menu_buttons}
                chevron
                onClick={() => navigate('/buttons')}
            />

            <TgBlockItem
                text={lang.main_menu_forms}
                chevron
                onClick={() => navigate('/forms')}
            />

            <TgBlockItem
                text={lang.main_menu_loaders}
                chevron
                onClick={() => navigate('/loaders')}
            />

            <TgBlockItem
                text={lang.main_menu_modals}
                chevron
                onClick={() => navigate('/modals')}
            />

        </TgBlock>

    </>

}