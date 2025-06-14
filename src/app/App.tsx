import cn from 'classnames';

import { Navbar } from 'widgets/Navbar';
import { useTheme } from './providers/ThemeProvider';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { AppRouter } from './providers/router';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from './providers/StoreProvider/store.hooks';
import { userActions } from 'entitie/User';

export const App = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

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
