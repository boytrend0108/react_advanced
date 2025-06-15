import cn from 'classnames';
import cls from './ThemeSwitcher.module.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import LigthIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Theme } from 'app/providers/ThemeProvider/lib/themeContext';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import React, { memo } from 'react';

interface Props {
  className?: string;
}

export const ThemeSwitcher: React.FC<Props> = memo((props) => {
  const { className, ...otherProps } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={cn(cls.ThemeSwitcher, className)}
      {...otherProps}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LigthIcon />}
    </Button>
  );
});
