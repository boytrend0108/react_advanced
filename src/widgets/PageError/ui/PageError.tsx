import cn from 'classnames';
import * as cls from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

interface Props {
  className?: string;
}

export const PageError: React.FC<Props> = (props) => {
  const { t } = useTranslation();
  const { className, ...otherProps } = props;

  function reloadPage() {
    location.reload();
  }

  return (
    <div className={cn(cls.PageError, className)} {...otherProps}>
      <h1>{t('Something went wrong')}</h1>
      <Button onClick={reloadPage}>{t('Restart')}</Button>
    </div>
  );
};
