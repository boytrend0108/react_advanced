import cn from 'classnames';
import cls from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { memo } from 'react';

interface Props {
  className?: string;
  short?: boolean;
}

export const LangSwitcher: React.FC<Props> = memo((props) => {
  const { className, short, ...otherProps } = props;
  const { t, i18n } = useTranslation();

  function toogle() {
    i18n.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua');
  }

  return (
    <Button
      onClick={toogle}
      className={cn(cls.LangSwitcher, className)}
      {...otherProps}
      theme={ButtonTheme.BACKGROUND_INVERTED}
    >
      {t(short ? 'ShortLang' : 'Language')}
    </Button>
  );
});
