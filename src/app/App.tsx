import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import './styles/index.scss';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classnames';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', { active: false }, [theme])}>
      <button onClick={toggleTheme}>Toogle theme</button>

      <Link to='/main'>Main</Link>
      <Link to='/about'>About</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/main' element={<MainPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
