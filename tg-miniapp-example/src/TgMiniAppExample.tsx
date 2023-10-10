import {useEffect} from 'react';
import {TgMiniAppRoot, useUiTheme} from "tg-app-ui";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import {Main} from "./pages/Main.tsx";
import {useWebApp} from "@vkruglikov/react-telegram-web-app";
import {SwitchTheme} from "./pages/SwitchTheme.tsx";
import {SwitchLanguage} from "./pages/SwitchLanguage.tsx";
import {ru} from './languages/ru.tsx'
import {en} from './languages/en.tsx'
import {Menu} from "./pages/Menu.tsx";
import {Buttons} from "./pages/Buttons.tsx";
import {Forms} from "./pages/Forms.tsx";
import {Loaders} from "./pages/Loaders.tsx";
import {Modals} from "./pages/Modals.tsx";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Main />,
    },
    {
        path : '/switch-theme',
        element: <SwitchTheme />
    },
    {
        path : '/switch-language',
        element: <SwitchLanguage />
    },
    {
        path : '/menu',
        element: <Menu />
    },
    {
        path : '/buttons',
        element: <Buttons />
    },
    {
        path : '/forms',
        element: <Forms />
    },
    {
        path : '/loaders',
        element: <Loaders />
    },
    {
        path : '/modals',
        element: <Modals />
    },
])

function TgMiniAppExample() {

    const uiTheme = useUiTheme();
    const WebApp = useWebApp();

    useEffect(() => {
        uiTheme.change(WebApp?.themeParams?.bg_color !== undefined ? 'telegram' : 'light');
    }, []);

    return <TgMiniAppRoot languages={{en, ru}}>

        <RouterProvider router={router} />

    </TgMiniAppRoot>

}

export default TgMiniAppExample;
