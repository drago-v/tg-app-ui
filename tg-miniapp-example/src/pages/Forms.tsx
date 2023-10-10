import React, {useEffect, useState} from "react";
import {
    TgBlock,
    TgBlockInput,
    TgBlockItem,
    TgBlockText,
    useLang,
    useTelegramWebApp
} from "tg-app-ui";

export const Forms = () => {

    const {lang} = useLang();
    const WebApp = useTelegramWebApp();

    //Switchers
    const [switcherValue1, setSwitcherValue1] = useState(true);
    const [switcherValue2, setSwitcherValue2] = useState(false);
    const [switcherValue3, setSwitcherValue3] = useState(false);

    const toggleSwitcher1 = () => setSwitcherValue1(!switcherValue1);
    const toggleSwitcher2 = () => setSwitcherValue2(!switcherValue2);
    const toggleSwitcher3 = () => setSwitcherValue3(!switcherValue3);

    //Inputs
    const [inputValue1, setInputValue1] = useState('');
    const changeInput1 = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => setInputValue1(e.target.value);

    const [inputValue2, setInputValue2] = useState('100');
    const [input2Error, setInput2Error] = useState<string|React.ReactNode>('');
    const changeInput2 = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {

        const newValue = e.target.value.replace(/\D/g, '');

        if (parseInt(newValue) < 100) {
            setInput2Error(lang.forms_input_filter_error_small);
        } else if (parseInt(newValue) > 1000) {
            setInput2Error(lang.forms_input_filter_error_large);
        } else {
            setInput2Error('');
        }

        setInputValue2(newValue.toString());
    }

    const [inputValue3, setInputValue3] = useState('');
    const changeInput3 = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => setInputValue3(e.target.value);

    //Select
    const [selectedValue, setSelectedValue] = useState(1);

    useEffect(() => {
        WebApp.setNavigateBack();
    }, []);

    return <>

        <TgBlock title={lang.info_title}>

            <TgBlockText>{lang.forms_info}</TgBlockText>

        </TgBlock>

        <TgBlockInput
            title={lang.forms_input_title}
            value={inputValue1}
            onChange={changeInput1}
            placeholder={lang.forms_input_placeholder}
        />

        <TgBlockInput
            title={lang.forms_input_filter_title}
            caption={input2Error !== '' ? input2Error : lang.forms_input_filter_caption}
            value={inputValue2}
            iconLeft={'$'}
            onChange={changeInput2}
            isError={input2Error !== ''}
        />

        <TgBlockInput
            title={lang.forms_input_large_title}
            caption={lang.forms_input_large_caption}
            value={inputValue3}
            multiLine
            onChange={changeInput3}
        />

        <TgBlock title={lang.forms_switcher_title}>

            <TgBlockItem
                text={lang.forms_switcher_1}
                switcher={switcherValue1}
                onClick={toggleSwitcher1}
            />

            <TgBlockItem
                text={lang.forms_switcher_2}
                switcher={switcherValue2}
                onClick={toggleSwitcher2} />

            <TgBlockItem
                text={lang.forms_switcher_3}
                switcher={switcherValue3}
                onClick={toggleSwitcher3}
            />

        </TgBlock>

        <TgBlock title={lang.forms_select_title}>

            <TgBlockItem
                text={lang.forms_select_1}
                icon="⚪️"
                check={selectedValue === 1}
                onClick={() => setSelectedValue(1)}
            />

            <TgBlockItem
                text={lang.forms_select_2}
                icon="⚫️"
                check={selectedValue === 2}
                onClick={() => setSelectedValue(2)}
            />

            <TgBlockItem
                text={lang.forms_select_3}
                icon="🔵"
                check={selectedValue === 3}
                onClick={() => setSelectedValue(3)}
            />

            <TgBlockItem
                text={lang.forms_select_4}
                icon="🔴"
                check={selectedValue === 4}
                onClick={() => setSelectedValue(4)}
            />

            <TgBlockItem
                text={lang.forms_select_5}
                icon="🟡"
                check={selectedValue === 5}
                onClick={() => setSelectedValue(5)}
            />

        </TgBlock>

    </>

}