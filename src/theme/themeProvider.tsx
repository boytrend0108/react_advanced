import { useMemo, useState } from 'react';
import { ThemeContext } from './themeContext';
import { useTheme } from './useTheme';

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  const defaultProps = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
