import { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINED = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'sizeM',
  L = 'sizeL',
  XL = 'sizeXl',
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  theme?: ButtonTheme;
  size?: ButtonSize;
  square?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<Props> = (props) => {
  const {
    className,
    children,
    theme,
    size = ButtonSize.M,
    square,
    disabled = false,
    ...otherProps
  } = props;

  const mods = {
    [cls[theme]]: true,
    [cls[size]]: true,
    [cls.square]: square,
    [cls.disabled]: disabled,
  };

  return (
    <button
      className={cn(cls.button, className, mods)}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};
