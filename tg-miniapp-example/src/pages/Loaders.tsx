import {useEffect, useState} from "react";
import {
    TgBlock,
    TgBlockButton,
    TgBlockItem,
    TgBlockText,
    useLang,
    useScreenLoader,
    useTelegramWebApp,
    SolidButton
} from "tg-app-ui";
import {IoSettingsSharp} from "react-icons/io5";

export const Loaders = () => {

    const screenLoader = useScreenLoader();
    const {lang} = useLang();
    const WebApp = useTelegramWebApp();

    const [blockLoading, setBlockLoading] = useState(false);
    const [buttonLoading, setButtonLoading] = useState(false);

    useEffect(() => {
        if (WebApp?.setNavigateBack !== undefined) {
            WebApp.setNavigateBack();
        }
    }, []);

    return <>

        <TgBlock title={lang.info_title}>
            <TgBlockText>
                {lang.loaders_info}
            </TgBlockText>
        </TgBlock>

        <TgBlock>
            <TgBlockItem
                text={blockLoading ? lang.loaders_stop : lang.loaders_start}
                caption={lang.loaders_caption}
                icon={<IoSettingsSharp />}
                loading={blockLoading}
                onClick={() => {
                    setBlockLoading(!blockLoading)
                }}
            />
        </TgBlock>

        <SolidButton
            text={buttonLoading ? lang.loaders_stop : lang.loaders_start}
            loading={buttonLoading}
            onClick={() => {
                setButtonLoading(!buttonLoading)
            }}
        />

        <TgBlockButton text={lang.loaders_start_success} onClick={() => {
            screenLoader.show('loading');
            setTimeout(() => {
                screenLoader.show('success');
            }, 2000)
        }} />

        <TgBlockButton text={lang.loaders_start_error} color="red" onClick={() => {
            screenLoader.show('loading');
            setTimeout(() => {
                screenLoader.show('error', lang.loaders_process_error);
            }, 2000)
        }} />

        </>

}