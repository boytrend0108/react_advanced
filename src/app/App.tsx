import cn from 'classnames';

import './styles/index.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { ThemeContext } from './providers/ThemeProvider/lib/themeContext';
import { AppRouter } from './providers/ThemeProvider/router';

export const App = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={cn('app', theme)}>
      <Link to='/'>Main</Link>
      <Link to='/about'>About</Link>
      <button onClick={() => setTheme()}>Toogle</button>

      <AppRouter />
    </div>
  );
};
