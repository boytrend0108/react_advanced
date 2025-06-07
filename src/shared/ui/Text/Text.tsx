import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface Props {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text: React.FC<Props> = (props) => {
  const {
    text,
    title,
    className,
    theme = TextTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <div
      className={cn(cls.Text, className, {
        [cls[theme]]: true,
      })}
      {...otherProps}
    >
      {title && <p className={cls.title}>{title}</p>}

      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};
