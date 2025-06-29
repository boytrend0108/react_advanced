import cn from 'classnames';
import cls from './Sidebar.module.scss';
import React, { memo, useCallback, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { sidebarItems } from 'widgets/Sidebar/model/item';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { useAppSelector } from 'app/providers/StoreProvider/store.hooks';
import { getUserAuthData } from 'entitie/User';

interface Props {
  className?: string;
}

export const Sidebar: React.FC<Props> = memo((props) => {
  const { className, ...otherProps } = props;
  const [collapsed, setCollapsed] = useState(false);
  const isAuth = useAppSelector(getUserAuthData);

  const onToggle = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  const filteredSidebarItems = useMemo(() => {
    return sidebarItems.filter((item) => {
      if (item.authOnly && !isAuth) {
        return false;
      }
      return true;
    });
  }, [isAuth]);

  return (
    <div
      data-testid='sidebar'
      className={cn(cls.sidebar, { [cls.collapsed]: collapsed }, className)}
      {...otherProps}
    >
      <Button
        onClick={onToggle}
        data-testid='sidebar-toogle'
        className={cls.collapsedBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={cls.items}>
        {filteredSidebarItems.map((item) => (
          <SidebarItem item={item} key={item.path} colapsed={collapsed} />
        ))}
      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </div>
  );
});
