import cn from 'classnames';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

export enum TextSize {
  M = 'size_m',
  L = 'size_l',
}

interface Props {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
}

export const Text: React.FC<Props> = (props) => {
  const {
    text,
    title,
    className,
    align = TextAlign.LEFT,
    theme = TextTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <div
      className={cn(cls.Text, cls[align], className, {
        [cls[theme]]: true,
      })}
      {...otherProps}
    >
      {title && <p className={cls.title}>{title}</p>}

      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};
