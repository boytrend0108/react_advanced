import cn from 'classnames';
import * as cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import React from 'react';

interface Props {
  className?: string;
}

export const Navbar: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(cls.Navbar, className)}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/' className={cls.mainLink}>
          Main
        </AppLink>

        <AppLink theme={AppLinkTheme.RED} to='/about'>
          About
        </AppLink>
      </div>
    </div>
  );
};
