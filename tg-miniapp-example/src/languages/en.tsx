import {LangType} from "tg-app-ui";
import {DOCS_URL} from "./ru.tsx";

export const en: LangType = {

    info_title: 'Information',
    main_info_content: <>
        This is an example of a Telegram mini-application. It demonstrates how to use
        the <b>tg-app-ui</b> library. This library provides a set of user interface components
        that resemble the standard Telegram app interface. You can use them for rapid development
        of your own mini-applications. You can learn more about using these components in the
        <a href={DOCS_URL} target="_blank" rel="noopener noreferrer">documentation</a>.
    </>,

    // Main menu
    main_menu_title: 'Library features',
    main_menu_switch_theme: 'Switch theme',
    main_menu_switch_language: 'Language',
    main_menu_menu: 'Menu',
    main_menu_buttons: 'Buttons',
    main_menu_forms: 'Forms',
    main_menu_loaders: 'Loaders',
    main_menu_modals: 'Modals',

    // Switch theme
    theme_info_content: <>
        The library supports light and dark themes, as well as the Telegram client theme. To switch themes,
        you can use the <b>useUiTheme</b> hook. <a href={DOCS_URL} target="_blank" rel="noopener noreferrer">Documentation ›</a>
    </>,
    theme_switch_title: 'Choose a theme',
    theme_telegram: 'Telegram',
    theme_light: 'Light',
    theme_dark: 'Dark',

    // Switch language
    switch_language_title: 'Language',
    switch_language_en: 'English',
    switch_language_ru: 'Russian',
    language_info_caption: <>
        The library supports changing the application&apos;s language. This can be done using the
        <b>useLang</b> hook. <a href={DOCS_URL} target="_blank" rel="noopener noreferrer">Documentation ›</a>
    </>,

        // Menu examples
        menu_info: <>
        With the <b>TgBlockItem</b> component, you can implement various menus and lists. <a href={DOCS_URL} target="_blank" rel="noopener noreferrer">Documentation ›</a>
        </>,
        menu_title: 'Menu',
        menu_caption: 'This is an example menu',
        menu_icons_title: 'Menu with Icons',
        menu_icons_caption: 'This is an example menu with simple icons and secondary text',
        menu_colored_icons_title: 'Menu with Colored Icons',
        menu_colored_icons_caption: 'This is an example menu with colored icons',
        menu_profile: 'Profile',
        menu_profile_caption: 'Your profile data',
        menu_settings: 'Settings',
        menu_settings_caption: 'Manage settings',
        menu_notifications: 'Notifications',
        menu_notifications_caption: 'Enable or disable notifications',
        menu_privacy: 'Privacy',
        menu_privacy_caption: 'Protect your data',
        menu_support: 'Support',
        menu_support_caption: 'Have questions? Write to us!',

        // Buttons
        buttons_info: <>
        The <b>TgBlockButton</b> component allows you to use buttons as standard interface blocks
        and colored buttons.
        <a href={DOCS_URL} target="_blank" rel="noopener noreferrer">Documentation ›</a>
        </>,
        button_action: 'Action Button',
        button_negative: 'Negative Action Button',
        button_settings: 'Settings',
        button_delete: 'Delete Item',
        button_solid: 'Colored Button',
        button_accept: 'Accept',
        button_decline: 'Decline',
        button_disabled: 'Inactive Button',

        // Forms
        forms_info: <>
        You can easily create various input and editing forms with the library&apos;s components. <a href={DOCS_URL} target="_blank" rel="noopener noreferrer">Documentation ›</a>
        </>,
        forms_input_title: 'Simple Input Field',
        forms_input_placeholder: 'Your Text',
        forms_input_filter_title: 'Enter Payment Amount',
        forms_input_filter_caption: 'This is an input field with data filtering. You can only enter numbers here, and if you enter a too large or too small amount, an error will be displayed.',
        forms_input_filter_error_small: 'The amount cannot be less than $100.',
        forms_input_filter_error_large: 'The amount cannot be greater than $1000.',
        forms_input_large_title: 'Large Text Input Field',
        forms_input_large_caption: 'You can enter large text with line breaks here.',
        forms_switcher_title: 'Switchers',
        forms_switcher_1: 'Receive Notifications',
        forms_switcher_2: 'Receive Newsletters',
        forms_switcher_3: 'Receive Special Offers',
        forms_select_title: 'Select from List',
        forms_select_1: 'White',
        forms_select_2: 'Black',
        forms_select_3: 'Blue',
        forms_select_4: 'Red',
        forms_select_5: 'Yellow',

        // Loaders
        loaders_info: <>
        When you initiate an asynchronous process (e.g., sending a request to your
        server), you need to show the user a spinner that indicates the
        data loading status. You can display spinners in blocks or buttons, and also
        use the <b>useScreenLoader</b> hook, which allows you to display a spinner
        over the application interface, blocking access to the rest of the application
        until the asynchronous request is completed. <a href={DOCS_URL} target="_blank" rel="noopener noreferrer">Documentation ›</a>
        </>,
        loaders_start: 'Start Asynchronous Process',
        loaders_caption: 'The spinner is displayed on the right',
        loaders_stop: 'Stop Process',
        loaders_start_success: 'Start Successful Asynchronous Process',
        loaders_start_error: 'Start Asynchronous Process with Error',
        loaders_process_error: 'An error occurred while executing the request',

        // Modals
        modals_info: <>
        The <b>Modal</b> component and <b>useModal</b> hook allow you to show the user
        a modal window with some information. <a href={DOCS_URL} target="_blank" rel="noopener noreferrer">Documentation ›</a>
        </>,
        modals_show: 'Simple Modal Window',
        modals_show_icon: 'Modal Window with Icon and Title',
        modals_simple_content: 'This is a simple modal window with text content. You can place any content here.',
        modals_icon_title: 'Profile',
        modals_icon_content: 'This is a modal window with a title and an icon. For example, you can place user profile data here.'

}