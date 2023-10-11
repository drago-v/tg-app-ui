# tg-app-ui

🇺🇸 Documentation in English is available via [link](https://github.com/drago-v/tg-app-ui/blob/master/README.md)

## Введение

Библиотека **tg-app-ui** представляет собой набор React-компонентов, которые имитируют интерфейс клиента Telegram. Вы можете использовать эти компоненты для быстрой разработки мини-приложений Telegram, используя фреймворк React.

[Документация библиотеки](#документация)

[Подробнее про мини-приложения Telegram](https://core.telegram.org/bots/webapps)

Пример мини-приложения, использующего tg-app-ui: [**@MiniAppExampleBot**](https://t.me/MiniAppExampleBot)

### Возможности библиотеки

- Поддержка различных цветовых тем
- Поддержка различных языков
- Меню в стиле клиента Telegram
- Кнопки действий
- Формы - поля ввода, переключатели, селекты
- Загрузочные спиннеры
- Модальные окна

### Дорожная карта

- Дополнить документацию
- Добавить тесты для всех компонентов
- Добавить больше компонентов и функционала

#  Документация

⚠️ _Документация будет дополнена в ближайшее время._ ⚠️

## Компоненты

1. **[TgMiniAppRoot](#tgminiapproot)**
2. **[TgBlock](#tgblock-и-tgblockitem)**
3. **[TgBlockItem](#tgblock-и-tgblockitem)**

---

### TgMiniAppRoot

Это корневой компонент, в который должно быть обернуто приложение.

```typescript jsx
<TgMiniAppRoot>
    /* Your app here */
</TgMiniAppRoot>
```

---

### TgBlock и TgBlockItem

Это основные компоненты, из которых можно собрать интерфейс приложения.

`TgBlock` позволяет создать блок с заголовком и кратким описанием снизу, внутри которого можно разместить один или несколько `TgBlockItem`.

`TgBlockItem` - это основной компонент, который представляет собой блок с текстом и иконками. Вы можете добавить к нему chevron иконку, если блок должен быть ссылкой на другой раздел приложения, галочку, если вы создаете выбор из списка, или переключатель.

---

#### Примеры использования

Telegram-бот с примерами использования библиотеки: [**@MiniAppExampleBot**](https://t.me/MiniAppExampleBot)

Для корректной работы приложения дополнительно используются следующие библиотеки:
- `react-router` и `react-router-dom` для навигации между различными разделами приложения
- `react-icons` для отрисовки красивых иконок

<details>
<summary>
<b>Инструкция по запуску примера приложения на локальном окружении</b>
</summary>

Чтобы запустить пример приложения на локальном окружении, клонируйте репозиторий и выполните следующие команды:
```
cd tg-miniapp-example
npm i
```

После установки всех зависимостей запустите приложение:
```
npm run start
```

</details>

---

<details>
<summary>
<b>1. Пример простого навигационного меню</b>
</summary>

```typescript jsx
<TgBlock title="Простое меню">
    <TgBlockItem text="Профиль" chevron />
    <TgBlockItem text="Настройки" chevron />
    <TgBlockItem text="Уведомления" chevron  />
    <TgBlockItem text="Конфиденциальность" chevron  />
    <TgBlockItem text="Техподдержка" chevron  />
</TgBlock>
```

_Результат:_

![Простое меню](https://storage.yandexcloud.net/tg-app-ui/example-images/ru/1_menu.png)

</details>

<details>
<summary><b>2. Пример меню с иконками и второстепенным текстом</b></summary>

```typescript jsx
<TgBlock 
    title="Меню с иконками" 
    caption="Это пример меню с простыми иконками и второстепенным текстом"
>

    <TgBlockItem
        text="Профиль"
        caption="Данные вашего профиля"
        icon={<IoPersonSharp size={20} />}
        chevron
    />
    
    <TgBlockItem
        text="Настройки"
        caption="Управление параметрами"
        icon={<IoSettingsSharp size={20} />}
        chevron
    />
    
    <TgBlockItem
        text="Уведомления"
        caption="Включить и выключить"
        icon={<IoNotificationsSharp size={20} />}
        chevron
    />
    
    <TgBlockItem
        text="Конфиденциальность"
        caption="Защита ваших данных"
        icon={<IoLockClosed size={20} />}
        chevron
    />

    <TgBlockItem
        text="Поддержка"
        caption="Остались вопросы? Пишите!"
        icon={<IoHelpCircleSharp size={20} />}
        chevron
    />

</TgBlock>
```

_Результат:_
![Меню с иконками и второстепенным текстом](https://storage.yandexcloud.net/tg-app-ui/example-images/ru/2_menu_icons.png)

</details>

<details>
<summary><b>3. Пример меню с цветными иконками</b></summary>

```typescript jsx
<TgBlock 
    title="Меню с иконками"
>

    <TgBlockItem
        text="Профиль"
        icon={<IoPersonSharp size={20} />}
        iconColor="green"
        chevron
    />
    
    <TgBlockItem
        text="Настройки"
        icon={<IoSettingsSharp size={20} />}
        iconColor="red"
        chevron
    />
    
    <TgBlockItem
        text="Уведомления"
        icon={<IoNotificationsSharp size={20} />}
        iconColor="orange"
        chevron
    />
    
    <TgBlockItem
        text="Конфиденциальность"
        icon={<IoLockClosed size={20} />}
        iconColor="violet"
        chevron
    />

    <TgBlockItem
        text="Поддержка"
        icon={<IoHelpCircleSharp size={20} />}
        iconColor="blue"
        chevron
    />

</TgBlock>
```

_Результат:_
![Меню с цветными иконками](https://storage.yandexcloud.net/tg-app-ui/example-images/ru/3_menu_colored_icons.png)

</details>

<details>
<summary><b>4. Пример меню с переключателями</b></summary>

```typescript jsx

const [switcherValue1, setSwitcherValue1] = useState(true);
const [switcherValue2, setSwitcherValue2] = useState(false);
const [switcherValue3, setSwitcherValue3] = useState(false);

const toggleSwitcher1 = () => setSwitcherValue1(!switcherValue1);
const toggleSwitcher2 = () => setSwitcherValue2(!switcherValue2);
const toggleSwitcher3 = () => setSwitcherValue3(!switcherValue3);

return <TgBlock title="Переключатели">

    <TgBlockItem
        text="Получать уведомления"
        switcher={switcherValue1}
        onClick={toggleSwitcher1}
    />

    <TgBlockItem
        text="Получать рассылки"
        switcher={switcherValue2}
        onClick={toggleSwitcher2} />

    <TgBlockItem
        text="Получать спецпредложения"
        switcher={switcherValue3}
        onClick={toggleSwitcher3}
    />

</TgBlock>
```

_Результат:_
![Меню с цветными иконками](https://storage.yandexcloud.net/tg-app-ui/example-images/ru/4_switches.png)

</details>

<details>
<summary><b>5. Пример меню с выбором из списка</b></summary>

```typescript jsx

const [selectedValue, setSelectedValue] = useState('white');

return <TgBlock title={lang.forms_select_title}>

    <TgBlockItem
        text="Белый"
        icon="⚪️"
        check={selectedValue === 'white'}
        onClick={() => setSelectedValue('white')}
    />

    <TgBlockItem
        text="Чёрный"
        icon="⚫️"
        check={selectedValue === 'black'}
        onClick={() => setSelectedValue('black')}
    />

    <TgBlockItem
        text="Синий"
        icon="🔵"
        check={selectedValue === 'blue'}
        onClick={() => setSelectedValue('blue')}
    />

    <TgBlockItem
        text="Красный"
        icon="🔴"
        check={selectedValue === 'red'}
        onClick={() => setSelectedValue('red')}
    />

    <TgBlockItem
        text="Жёлтый"
        icon="🟡"
        check={selectedValue === 'yellow'}
        onClick={() => setSelectedValue('yellow')}
    />

</TgBlock>
```

_Результат:_
![Меню с цветными иконками](https://storage.yandexcloud.net/tg-app-ui/example-images/ru/5_select_list.png)

</details>

---

