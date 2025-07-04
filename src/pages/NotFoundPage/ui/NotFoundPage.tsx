import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import cls from './NotFoundPage.module.scss';

interface Props {
  className?: string;
}

export const NotFoundPage: React.FC<Props> = (props) => {
  const { t } = useTranslation('not_found');
  const { className, ...otherProps } = props;

  return (
    <div className={cn(cls.notFoundPage, className)} {...otherProps}>
      <h1>{t('Page not found', { ns: 'not_found' })}</h1>
    </div>
  );
};

NotFoundPage.displayName = 'NotFoundPage';
