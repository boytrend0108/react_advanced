import cn from 'classnames';
import cls from './Sidebar.module.scss';
import React, { memo, useCallback, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { sidebarItems } from 'widgets/Sidebar/model/item';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface Props {
  className?: string;
}

export const Sidebar: React.FC<Props> = memo((props) => {
  const { className, ...otherProps } = props;
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

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
        {sidebarItems.map((item) => (
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
