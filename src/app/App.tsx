import cn from 'classnames';

import { Navbar } from 'widgets/Navbar';
import { useTheme } from './providers/ThemeProvider2';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useState } from 'react';
import { AppRouter } from './providers/router';
import { useTranslation } from 'react-i18next';

export const App = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

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
