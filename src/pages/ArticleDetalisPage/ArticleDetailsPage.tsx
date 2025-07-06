import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './articleDetailsPage.module.scss';
import { ArticleDetails } from 'entitie/Article/ui/ArticleDetails/ArticleDetails';
import { classNames } from 'shared/lib/classNames/classNames';
import { useParams } from 'react-router';

interface Props {
  className?: string;
}

const ArticleDetailsPage: React.FC<Props> = (props) => {
  const { className = '', ...otherProps } = props;
  const { t } = useTranslation('articles');
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <div className={classNames(cls.articleDetailsPage, {}, [className])}>
        {t('Статья не найдена')}
      </div>
    );
  }

  return (
    <div className={cn(cls.ActiclePage, className)} {...otherProps}>
      <ArticleDetails id={id} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
