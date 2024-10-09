import { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import cls from './Button.module.scss';

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
    <button className={cn(cls.button, className, cls[theme])} {...otherProps}>
      {children}
    </button>
  );
};
