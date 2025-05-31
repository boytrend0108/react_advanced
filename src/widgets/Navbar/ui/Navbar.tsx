import React, { useCallback, useState } from 'react';
import cn from 'classnames';

import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';

interface Props {
  className?: string;
}

export const Navbar: React.FC<Props> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <div className={cn(cls.navbar, className, 'test')}>
      <div className={cls.links}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onShowModal}>
          {t('Enter')}
        </Button>
      </div>

      <LoginModal onClose={onCloseModal} isOpen={isAuthModal} />
    </div>
  );
};
