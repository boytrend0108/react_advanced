import React, { memo, useCallback, useState } from 'react';
import cn from 'classnames';

import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import {
  useAppDispatch,
  useAppSelector,
} from 'app/providers/StoreProvider/store.hooks';
import { getUserAuthData, userActions } from 'entitie/User';
import { useNavigate } from 'react-router';
import { routePath } from 'shared/config/routerConfig/routerConfig';

interface Props {
  className?: string;
}

export const Navbar: React.FC<Props> = memo(({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const user = useAppSelector(getUserAuthData);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
    navigate(routePath.main);
  }, [dispatch, navigate]);

  if (user) {
    return (
      <div className={cn(cls.navbar, className, 'test')}>
        <div className={cls.links}>
          <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onLogout}>
            {t('Logout')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(cls.navbar, className, 'test')}>
      <div className={cls.links}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onShowModal}>
          {t('Enter')}
        </Button>
      </div>

      {isAuthModal && (
        <LoginModal onClose={onCloseModal} isOpen={isAuthModal} />
      )}
    </div>
  );
});
