import React from 'react';

export enum Theme {
  DARK = 'app_dark_theme',
  LIGHT = 'app_light_theme',
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (v?: Theme) => void;
}

export const ThemeContext = React.createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';