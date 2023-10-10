import { useState } from "react";

export type uiThemeType = "telegram" | "light" | "dark";

export const useUiTheme = () => {
  const [theme, setTheme] = useState(document.body.getAttribute("theme"));

  const change = (newTheme: uiThemeType) => {
    document.body.setAttribute("theme", newTheme);

    setTheme(newTheme);
  };

  return {
    current: theme,
    change,
  };
};
