import cn from 'classnames';
import * as cls from './ThemeSwitcher.module.scss';
import { useTheme } from 'app/providers/ThemeProvider2';
import LigthIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Theme } from 'app/providers/ThemeProvider2/lib/themeContext';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import React from 'react';

interface Props {
  className?: string;
}

export const ThemeSwitcher: React.FC<Props> = (props) => {
  const { className, ...otherProps } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={cn(cls.ThemeSwitcher, className)}
      {...otherProps}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LigthIcon />}
    </Button>
  );
};
