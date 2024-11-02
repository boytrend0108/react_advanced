import cn from 'classnames';

import './styles/index.scss';

import { Navbar } from 'widgets/Navbar';
import { useTheme } from './providers/ThemeProvider2';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useState } from 'react';
import { AppRouter } from './providers/router';
import { Modal } from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';

export const App = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <Suspense>
      {/*Suspense for i18n*/}
      <div className={cn('app', theme)}>
        <Navbar />

        <button onClick={() => setIsOpen(true)}>{t('toggle')}</button>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {t(
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit.obcaecati labore odio possimus. Similique, inventore libero placeat temporibus aperiam ducimus.'
          )}
        </Modal>

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
