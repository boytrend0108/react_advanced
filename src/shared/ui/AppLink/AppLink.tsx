import { Link, LinkProps } from 'react-router-dom';
import cn from 'classnames';
import cls from './AppLink.module.scss';
import { memo } from 'react';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface Props extends LinkProps {
  className?: string;
  children: React.ReactNode;
  theme?: AppLinkTheme;
}

export const AppLink: React.FC<Props> = memo((props) => {
  const {
    theme = AppLinkTheme.PRIMARY,
    className,
    to,
    children,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      {...otherProps}
      className={cn(cls.AppLink, className, cls[theme])}
    >
      {children}
    </Link>
  );
});
