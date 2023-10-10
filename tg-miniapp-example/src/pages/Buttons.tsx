import {useEffect} from "react";
import {
    TgBlock,
    TgBlockButton,
    TgBlockText,
    useLang,
    useTelegramWebApp,
    SolidButton
} from "tg-app-ui";
import {IoCheckmark, IoClose, IoSettingsSharp, IoTrashSharp} from "react-icons/io5";


export const Buttons = () => {

    const WebApp = useTelegramWebApp();
    const {lang} = useLang();

    useEffect(() => {
        if (WebApp?.setNavigateBack !== undefined) {
            WebApp.setNavigateBack();
        }
    }, []);

    return <>

        <TgBlock title={lang.info_title}>
            <TgBlockText>
                {lang.buttons_info}
            </TgBlockText>
        </TgBlock>

        <TgBlockButton text={lang.button_action} />

        <TgBlockButton text={lang.button_negative} color="red" />

        <TgBlockButton text={lang.button_settings} icon={<IoSettingsSharp />} />

        <TgBlockButton text={lang.button_delete} icon={<IoTrashSharp />} color="red" />

        <TgBlockButton text={lang.button_disabled} disabled />

        <SolidButton text={lang.button_solid}  />

        <SolidButton text={lang.button_accept} icon={<IoCheckmark />} color="green"  />

        <SolidButton text={lang.button_decline} icon={<IoClose />} color="red" />

        <SolidButton text={lang.button_disabled} disabled  />

    </>

}