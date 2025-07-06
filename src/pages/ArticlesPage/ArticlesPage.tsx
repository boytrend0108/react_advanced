import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticlesPage.module.scss';

interface Props {
  className?: string;
}

const ArticlesPage: React.FC<Props> = (props) => {
  const { className, ...otherProps } = props;
  const { t } = useTranslation('articles');
  return (
    <div className={cn(cls.ActiclePage, className)} {...otherProps}>
      {t('ARTICLES PAGE')}
    </div>
  );
};

export default memo(ArticlesPage);
