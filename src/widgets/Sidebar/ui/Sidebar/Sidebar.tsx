import cn from 'classnames';
import * as cls from './Sidebar.module.scss';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

interface Props {
  className?: string;
}

export const Sidebar: React.FC<Props> = (props) => {
  const { className, ...otherProps } = props;
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid='sidebar'
      className={cn(cls.Sidebar, { [cls.collapsed]: collapsed }, className)}
      {...otherProps}
    >
      <Button onClick={onToggle} data-testid='sidebar-toogle'>
        {t('toggle')}
      </Button>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
