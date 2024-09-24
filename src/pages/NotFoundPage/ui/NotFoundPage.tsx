import cn from 'classnames';
import * as cls from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';

interface Props {
  className?: string;
}

export const NotFoundPage: React.FC<Props> = (props) => {
  const { t } = useTranslation('not_found');
  const { className, ...otherProps } = props;

  return (
    <div className={cn(cls.NotFoundPage, className)} {...otherProps}>
      <h1>{t('Page not found', { ns: 'not_found' })}</h1>
    </div>
  );
};
