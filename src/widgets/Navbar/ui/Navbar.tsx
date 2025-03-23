import React, { useCallback, useState } from 'react';
import cn from 'classnames';

import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface Props {
  className?: string;
}

export const Navbar: React.FC<Props> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={cn(cls.navbar, className, 'test')}>
      <div className={cls.links}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onToggleModal}>
          {t('Enter')}
        </Button>
      </div>

      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        {t('Lorem ipsho adfasdf  llkjn, fsdf;kdf ')}
      </Modal>
    </div>
  );
};
