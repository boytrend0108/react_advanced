import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import './styles/index.scss';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classnames';
import { AppRouter } from './providers/router';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', { active: false }, [theme])}>
      <button onClick={toggleTheme}>Toogle theme</button>

      <Link to='/'>Main</Link>
      <Link to='/about'>About</Link>

      <AppRouter />
    </div>
  );
};
