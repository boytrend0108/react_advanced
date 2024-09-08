import { Link, LinkProps } from 'react-router-dom';
import cn from 'classnames';
import * as cls from './AppLink.module.scss';

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

export const AppLink: React.FC<Props> = (props) => {
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
};
