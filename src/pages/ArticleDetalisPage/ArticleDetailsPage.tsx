import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticleDetailsPage.module.scss';

interface Props {
  className?: string;
}

const ArticleDetailsPage: React.FC<Props> = (props) => {
  const { className, ...otherProps } = props;
  const { t } = useTranslation('articles');
  return (
    <div className={cn(cls.ActiclePage, className)} {...otherProps}>
      {t('ARTICLE DETAILS PAGE')}
    </div>
  );
};

export default memo(ArticleDetailsPage);
