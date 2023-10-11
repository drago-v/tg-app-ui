# tg-app-ui

🇷🇺 Документация на русском языке доступна [по ссылке](https://github.com/drago-v/tg-app-ui/blob/master/README.ru.md)

## Introduction

The **tg-app-ui** library is a collection of React components that simulate the Telegram client interface. You can use these components to quickly develop Telegram mini-applications using the React framework.

[Library Documentation](#documentation)

Learn more about Telegram mini-applications [here](https://core.telegram.org/bots/webapps).

Example of a mini-application using tg-app-ui: [**@MiniAppExampleBot**](https://t.me/MiniAppExampleBot)

### Library Features

- Support for various color themes
- Support for various languages
- Telegram client-style menu
- Action buttons
- Forms - input fields, switches, selects
- Loading spinners
- Modal windows

### Roadmap

- Add more info to documentation
- Add tests for all components
- Add more components and functionality

## Documentation

⚠️ _The documentation will be supplemented in the near future._ ⚠️

## Components

1. **[TgMiniAppRoot](#tgminiapproot)**
2. **[TgBlock](#tgblock-and-tgblockitem)**
3. **[TgBlockItem](#tgblock-and-tgblockitem)**

---

### TgMiniAppRoot

This is the root component in which your application should be wrapped.

```typescript jsx
<TgMiniAppRoot>
    /* Your app here */
</TgMiniAppRoot>
```

---

### TgBlock and TgBlockItem

These are the core components that can be used to build the application's interface.

`TgBlock` allows you to create a block with a title and a brief description at the bottom, inside of which you can place one or more `TgBlockItem`.

`TgBlockItem` is the primary component representing a block with text and icons. You can add a chevron icon to it if the block should be a link to another section of the application, a checkmark if you are creating a selection from a list, or a switch.

---

#### Usage Examples

Telegram bot with examples of library usage: [**@MiniAppExampleBot**](https://t.me/MiniAppExampleBot)

For the proper functioning of the application, the following libraries are additionally used:
- `react-router` and `react-router-dom` for navigation between different sections of the application
- `react-icons` for rendering beautiful icons

<details>
<summary>
<b>Instructions for Running the Example Application in a Local Environment</b>
</summary>

To run the example application in a local environment, clone the repository and execute the following commands:
```
cd tg-miniapp-example
npm i
```

After installing all dependencies, start the application:
```
npm run start
```

</details>

---

<details>
<summary>
<b>1. Example of a Simple Navigation Menu</b>
</summary>

```typescript jsx
<TgBlock title="Menu">
    <TgBlockItem text="Profile" chevron />
    <TgBlockItem text="Settings" chevron />
    <TgBlockItem text="Notifications" chevron  />
    <TgBlockItem text="Privacy" chevron  />
    <TgBlockItem text="Support" chevron  />
</TgBlock>
```

_Результат:_

![Simple menu](https://storage.yandexcloud.net/tg-app-ui/example-images/en/1_menu.png)

</details>

<details>
<summary><b>2. Example of a menu with icons and secondary text</b></summary>

```typescript jsx
<TgBlock 
    title="Menu with icons" 
    caption="This is an example menu with simple icons and secondary text"
>

    <TgBlockItem
        text="Profile"
        caption="Your profile data"
        icon={<IoPersonSharp size={20} />}
        chevron
    />
    
    <TgBlockItem
        text="Settings"
        caption="Manage settings"
        icon={<IoSettingsSharp size={20} />}
        chevron
    />
    
    <TgBlockItem
        text="Notifications"
        caption="Enable or disable notifications"
        icon={<IoNotificationsSharp size={20} />}
        chevron
    />
    
    <TgBlockItem
        text="Privacy"
        caption="Protect your data"
        icon={<IoLockClosed size={20} />}
        chevron
    />

    <TgBlockItem
        text="Support"
        caption="Have questions? Write to us!"
        icon={<IoHelpCircleSharp size={20} />}
        chevron
    />

</TgBlock>
```

_Result:_
![Menu with simple icons and secondary text](https://storage.yandexcloud.net/tg-app-ui/example-images/en/2_menu_icons.png)

</details>

<details>
<summary><b>3. Example of a menu with colored icons</b></summary>

```typescript jsx
<TgBlock
    title="Menu with colored icons"
>

    <TgBlockItem
        text="Profile"
        icon={<IoPersonSharp size={20} />}
        iconColor="green"
        chevron
    />

    <TgBlockItem
        text="Settings"
        icon={<IoSettingsSharp size={20} />}
        iconColor="red"
        chevron
    />

    <TgBlockItem
        text="Notifications"
        icon={<IoNotificationsSharp size={20} />}
        iconColor="orange"
        chevron
    />

    <TgBlockItem
        text="Privacy"
        icon={<IoLockClosed size={20} />}
        iconColor="violet"
        chevron
    />

    <TgBlockItem
        text="Support"
        icon={<IoHelpCircleSharp size={20} />}
        iconColor="blue"
        chevron
    />

</TgBlock>
```

_Result:_
![Menu with colored icons](https://storage.yandexcloud.net/tg-app-ui/example-images/en/3_menu_colored_icons.png)

</details>

<details>
<summary><b>4. Example of a menu with switches</b></summary>

```typescript jsx

const [switcherValue1, setSwitcherValue1] = useState(true);
const [switcherValue2, setSwitcherValue2] = useState(false);
const [switcherValue3, setSwitcherValue3] = useState(false);

const toggleSwitcher1 = () => setSwitcherValue1(!switcherValue1);
const toggleSwitcher2 = () => setSwitcherValue2(!switcherValue2);
const toggleSwitcher3 = () => setSwitcherValue3(!switcherValue3);

return <TgBlock title="Switchers">

    <TgBlockItem
        text="Receive notifications"
        switcher={switcherValue1}
        onClick={toggleSwitcher1}
    />

    <TgBlockItem
        text="Receive newsletters"
        switcher={switcherValue2}
        onClick={toggleSwitcher2} />

    <TgBlockItem
        text="Receive special offers"
        switcher={switcherValue3}
        onClick={toggleSwitcher3}
    />

</TgBlock>
```

_Result:_
![Menu with switches](https://storage.yandexcloud.net/tg-app-ui/example-images/en/4_switches.png)

</details>

<details>
<summary><b>5. Example of a menu with list selection</b></summary>

```typescript jsx

const [selectedValue, setSelectedValue] = useState('white');

return <TgBlock title="">

    <TgBlockItem
        text="White"
        icon="⚪️"
        check={selectedValue === 'white'}
        onClick={() => setSelectedValue('white')}
    />

    <TgBlockItem
        text="Black"
        icon="⚫️"
        check={selectedValue === 'black'}
        onClick={() => setSelectedValue('black')}
    />

    <TgBlockItem
        text="Blue"
        icon="🔵"
        check={selectedValue === 'blue'}
        onClick={() => setSelectedValue('blue')}
    />

    <TgBlockItem
        text="Red"
        icon="🔴"
        check={selectedValue === 'red'}
        onClick={() => setSelectedValue('red')}
    />

    <TgBlockItem
        text="Yellow"
        icon="🟡"
        check={selectedValue === 'yellow'}
        onClick={() => setSelectedValue('yellow')}
    />

</TgBlock>
```

_Result:_
![Menu with list selection](https://storage.yandexcloud.net/tg-app-ui/example-images/en/5_select_list.png)

</details>

---
