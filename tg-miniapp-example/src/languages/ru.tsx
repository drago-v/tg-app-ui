import {LangType} from "tg-app-ui";

export const DOCS_URL = 'https://npmjs.com';

export const ru: LangType = {

    //Main
    info_title: 'Информация',
    main_info_content: <>
        Это пример мини-приложения Telegram. Он демонстрирует, как использовать
        библиотеку <b>tg-app-ui</b>. Эта библиотека предоставляет набор компонентов пользовательского
        интерфейса, которые похожи на стандартный интерфейс приложения Telegram. Вы можете использовать
        их для быстрой разработки своих собственных мини-приложений. Вы можете узнать больше о
        использовании этих компонентов в <a href={DOCS_URL} target="_blank" rel="noopener noreferrer">документации</a>.
    </>,

    //Main menu
    main_menu_title: 'Возможности библиотеки',
    main_menu_switch_theme: 'Сменить тему',
    main_menu_switch_language: 'Язык',
    main_menu_menu: 'Меню',
    main_menu_buttons: 'Кнопки',
    main_menu_forms: 'Формы',
    main_menu_loaders: 'Загрузчики',
    main_menu_modals: 'Модальные окна',

    //Switch theme
    theme_info_content : <>
        Библиотека поддерживает тёмную и светлую тему, а также тему клиента Telegram. Для смены темы
        вы можете использовать хук <b>useUiTheme</b>. <a href={DOCS_URL} target="_blank" rel="noopener noreferrer">Документация ›</a>
    </>,
    theme_switch_title : 'Выберите тему',
    theme_telegram : 'Telegram',
    theme_light : 'Светлая',
    theme_dark : 'Тёмная',

    //Switch language
    switch_language_title: 'Язык',
    switch_language_en: 'Английский',
    switch_language_ru: 'Русский',
    language_info_caption : <>
        Библиотека поддерживает смену языка приложения. Это делается с
        помощью хука <b>useLang</b>. <a href={DOCS_URL} target="_blank" rel="noopener noreferrer">Документация ›</a>
    </>,


    //Menu examples
    menu_info : <>
        С помощью компонента <b>TgBlockItem</b> вы можете реализовать различные
        меню и списки. <a href={DOCS_URL} target="_blank" rel="noopener noreferrer">Документация ›</a>
    </>,
    menu_title: 'Меню',
    menu_caption: 'Это пример меню',
    menu_icons_title: 'Меню с иконками',
    menu_icons_caption: 'Это пример меню с простыми иконками и второстепенным текстом',
    menu_colored_icons_title: 'Меню с цветными иконками',
    menu_colored_icons_caption: 'Это пример меню с цветными иконками',
    menu_profile: 'Профиль',
    menu_profile_caption: 'Данные вашего профиля',
    menu_settings: 'Настройки',
    menu_settings_caption: 'Управление параметрами',
    menu_notifications: 'Уведомления',
    menu_notifications_caption: 'Включить и выключить',
    menu_privacy: 'Конфиденциальность',
    menu_privacy_caption: 'Защита ваших данных',
    menu_support: 'Поддержка',
    menu_support_caption: 'Остались вопросы? Пишите!',

    //Buttons
    buttons_info : <>
        Компонент <b>TgBlockButton</b> позволит использовать кнопки в виде стандартных блоков интерфейса и цветные
        кнопки. <a href={DOCS_URL} target="_blank" rel="noopener noreferrer">Документация ›</a>
    </>,
    button_action : 'Кнопка действия',
    button_negative : 'Кнопка отрицательного действия',
    button_settings : 'Настройки',
    button_delete : 'Удалить элемент',
    button_solid: 'Цветная кнопка',
    button_accept : 'Принять',
    button_decline: 'Отклонить',
    button_disabled: 'Неактивная кнопка',

    //Forms
    forms_info : <>
        Вы можете легко создавать различные формы для ввода и редактирования
        информации с помощью компонентов библиотеки. <a href={DOCS_URL} target="_blank" rel="noopener noreferrer">Документация ›</a>
    </>,
    forms_input_title : 'Простое поле ввода',
    forms_input_placeholder : 'Ваш текст',
    forms_input_filter_title : 'Введите сумму оплаты',
    forms_input_filter_caption : 'Это поле ввода с фильтрацией данных. Здесь можно вводить только цифры, а при вводе слишком большой или слишком маленькой суммы будет выведена ошибка.',
    forms_input_filter_error_small : 'Сумма не может быть меньше $100.',
    forms_input_filter_error_large : 'Сумма не может быть больше $1000.',
    forms_input_large_title : 'Поле для ввода большого текста',
    forms_input_large_caption : 'Здесь можно ввести большой текст с переносами строк.',
    forms_switcher_title : 'Переключатели',
    forms_switcher_1 : 'Получать уведомления',
    forms_switcher_2 : 'Получать рассылки',
    forms_switcher_3 : 'Получать спецпредложения',
    forms_select_title : 'Выбор из списка',
    forms_select_1: 'Белый',
    forms_select_2: 'Черный',
    forms_select_3: 'Синий',
    forms_select_4: 'Красный',
    forms_select_5: 'Жёлтый',

    //Loaders
    loaders_info: <>
        Когда вы запускаете асинхронный процесс (к примеру, отправляете запрос на свой
        сервер), необходимо показать пользователю спиннер, который отображает статус
        загрузки данных. Вы можете отобразить спиннеры в блоках или кнопках, а также
        использовать хук <b>useScreenLoader</b>, который позволяет отобразить спиннер
        поверх интерфейса приложения, который заблокирует доступ к остальному приложению
        до завершения асинхронного запроса. <a href={DOCS_URL} target="_blank" rel="noopener noreferrer">Документация ›</a>
    </>,
    loaders_start : 'Начать асинхронный процесс',
    loaders_caption : 'Спиннер отображается справа',
    loaders_stop : 'Остановить процесс',
    loaders_start_success : 'Запустить успешный асинхронный процесс',
    loaders_start_error : 'Запустить асинхронный процесс с ошибкой',
    loaders_process_error : 'Произошла ошибка при выполнении запроса',

    //Modals
    modals_info: <>
        Компонент <b>Modal</b> и хук <b>useModal</b> позволяют показать пользователю
        модальное окно с какой-либо
        информацией. <a href={DOCS_URL} target="_blank" rel="noopener noreferrer">Документация ›</a>
    </>,
    modals_show : 'Простое модальное окно',
    modals_show_icon : 'Модальное окно с иконкой и заголовком',
    modals_simple_content : 'Это простое модальное окно с текстовым содержимым. Здесь можно разместить любой контент.',
    modals_icon_title: 'Профиль',
    modals_icon_content: 'Это модальное окно с заголовком и иконкой. К примеру, здесь можно разместить данные профиля пользователя.'
}