import { useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme } from "./themeContext";

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface useThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export function useTheme(): useThemeResult {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

  function toggleTheme() {
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  }

  return { theme, toggleTheme }
}