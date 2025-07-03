import { useContext } from "react";
import { Theme, ThemeContext } from "./themeContext";

interface UseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  return { theme, toggleTheme: setTheme };
}