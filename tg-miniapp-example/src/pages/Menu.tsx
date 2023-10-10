import {useEffect} from "react";

import {
    TgBlock,
    TgBlockItem,
    TgBlockText,
    useLang,
    useTelegramWebApp
} from "tg-app-ui";

import {
    IoHelpCircleSharp,
    IoLockClosed,
    IoNotificationsSharp,
    IoPersonSharp,
    IoSettingsSharp
} from "react-icons/io5";

export const Menu = () => {

    const WebApp = useTelegramWebApp();
    const {lang} = useLang();

    useEffect(() => {
        WebApp.setNavigateBack();
    }, []);

    return <>

        <TgBlock title={lang.info_title}>
            <TgBlockText>
                {lang.menu_info}
            </TgBlockText>
        </TgBlock>

        <TgBlock title={lang.menu_title}>

            <TgBlockItem text={lang.menu_profile} chevron />

            <TgBlockItem text={lang.menu_settings} chevron />

            <TgBlockItem text={lang.menu_notifications} chevron  />

            <TgBlockItem text={lang.menu_privacy} chevron  />

            <TgBlockItem text={lang.menu_support} chevron  />

        </TgBlock>

        <TgBlock
            title={lang.menu_icons_title}
            caption={lang.menu_icons_caption}
        >

            <TgBlockItem
                text={lang.menu_profile}
                caption={lang.menu_profile_caption}
                icon={<IoPersonSharp size={20} />}
                chevron
            />

            <TgBlockItem
                text={lang.menu_settings}
                caption={lang.menu_settings_caption}
                icon={<IoSettingsSharp size={20} />}
                chevron
            />

            <TgBlockItem
                text={lang.menu_notifications}
                caption={lang.menu_notifications_caption}
                icon={<IoNotificationsSharp size={20} />}
                chevron
            />

            <TgBlockItem
                text={lang.menu_privacy}
                caption={lang.menu_privacy_caption}
                icon={<IoLockClosed size={20} />}
                chevron
            />

            <TgBlockItem
                text={lang.menu_support}
                caption={lang.menu_support_caption}
                icon={<IoHelpCircleSharp size={20} />}
                chevron
            />

        </TgBlock>

        <TgBlock
            title={lang.menu_colored_icons_title}
            caption={lang.menu_colored_icons_caption}
        >

            <TgBlockItem
                text={lang.menu_profile}
                icon={<IoPersonSharp size={20} />}
                iconColor="green"
                chevron
            />

            <TgBlockItem
                text={lang.menu_settings}
                icon={<IoSettingsSharp size={20} />}
                iconColor="red"
                chevron
            />

            <TgBlockItem
                text={lang.menu_notifications}
                icon={<IoNotificationsSharp size={20} />}
                iconColor="orange"
                chevron
            />

            <TgBlockItem
                text={lang.menu_privacy}
                icon={<IoLockClosed size={20} />}
                iconColor="violet"
                chevron
            />

            <TgBlockItem
                text={lang.menu_support}
                icon={<IoHelpCircleSharp size={20} />}
                iconColor="blue"
                chevron
            />

        </TgBlock>

    </>

}