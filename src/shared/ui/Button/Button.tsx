import { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
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
}

export const Button: React.FC<Props> = (props) => {
  const {
    className,
    children,
    theme,
    size = ButtonSize.M,
    square,
    ...otherProps
  } = props;

  console.log(size);
  console.log(cls);

  const mods = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true,
  };

  return (
    <button className={cn(cls.button, className, mods)} {...otherProps}>
      {children}
    </button>
  );
};
