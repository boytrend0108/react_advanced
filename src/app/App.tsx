import cn from 'classnames';

import './styles/index.scss';
import { useContext } from 'react';

import { ThemeContext } from './providers/ThemeProvider/lib/themeContext';
import { AppRouter } from './providers/ThemeProvider/router';
import { Navbar } from 'widgets/Navbar';

export const App = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={cn('app', theme)}>
      <Navbar />
      <button onClick={() => setTheme()}>Toogle</button>

      <AppRouter />
    </div>
  );
};
