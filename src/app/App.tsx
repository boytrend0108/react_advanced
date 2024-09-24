import cn from 'classnames';

import './styles/index.scss';

import { Navbar } from 'widgets/Navbar';
import { useTheme } from './providers/ThemeProvider';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { AppRouter } from './providers/router';

export const App = () => {
  const { theme } = useTheme();

  return (
    <Suspense>
      {/*Suspense for i18n*/}
      <div className={cn('app', theme)}>
        <Navbar />

        <div className='content-page'>
          <Sidebar />
          <div className='page-wrapper'>
            <AppRouter />
          </div>
        </div>
      </div>
    </Suspense>
  );
};
