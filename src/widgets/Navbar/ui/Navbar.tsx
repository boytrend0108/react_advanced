import React from 'react';
import cn from 'classnames';

import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

interface Props {
  className?: string;
}

export const Navbar: React.FC<Props> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(cls.navbar, className, 'test')}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/' className={cls.mainLink}>
          {t('Home')}
        </AppLink>
      </div>
    </div>
  );
};
