import {useEffect} from "react";
import {
    Modal,
    TgBlock,
    TgBlockItem,
    TgBlockText,
    useLang,
    useModal,
    useTelegramWebApp
} from "tg-app-ui";
import {IoPersonCircleOutline,} from "react-icons/io5";

export const Modals = () => {

    const WebApp = useTelegramWebApp();
    const {lang} = useLang();
    const modal = useModal();

    const ModalSimple = () => {
        return <Modal>
            {lang.modals_simple_content}
        </Modal>
    }

    const ModalWithTitleAndIcon = () => {
        return <Modal title={lang.modals_icon_title} icon={<IoPersonCircleOutline size={64} />}>
            {lang.modals_icon_content}
        </Modal>
    }

    useEffect(() => {
        WebApp.setNavigateBack();
    }, []);

    return <>

        <TgBlock title={lang.info_title}>
            <TgBlockText>
                {lang.modals_info}
            </TgBlockText>
        </TgBlock>

        <TgBlock title={lang.modals_examples_title}>

            <TgBlockItem
                text={lang.modals_show}
                chevron
                onClick={() => {
                    modal.open(<ModalSimple />);
                }}
            />

            <TgBlockItem
                text={lang.modals_show_icon}
                chevron
                onClick={() => {
                    modal.open(<ModalWithTitleAndIcon />);
                }}
            />

        </TgBlock>

    </>

}