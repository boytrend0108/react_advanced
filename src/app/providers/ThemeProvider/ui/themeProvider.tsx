import { useMemo } from 'react';
import { useTheme } from '../lib/useTheme';
import { ThemeContext } from '../lib/themeContext';

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
