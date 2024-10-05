import cn from 'classnames';
import cls from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

interface Props {
  className?: string;
}

export const LangSwitcher: React.FC<Props> = (props) => {
  const { className, ...otherProps } = props;
  const { t, i18n } = useTranslation();

  function toogle() {
    i18n.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua');
  }

  return (
    <Button
      onClick={toogle}
      className={cn(cls.LangSwitcher, className)}
      {...otherProps}
    >
      {t('Language')}
    </Button>
  );
};
