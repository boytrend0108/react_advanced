import cn from 'classnames';
import * as cls from './Button.module.scss';
import { ButtonHTMLAttributes } from 'react';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINED = 'outline',
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  theme?: ThemeButton;
}

export const Button: React.FC<Props> = (props) => {
  const { className, children, theme, ...otherProps } = props;

  return (
    <button className={cn(cls.Button, className, cls[theme])} {...otherProps}>
      {children}
    </button>
  );
};
