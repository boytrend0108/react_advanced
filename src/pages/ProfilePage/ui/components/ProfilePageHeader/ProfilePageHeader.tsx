import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import cls from './ProfilePageHeader.module.scss';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface Props {
  className?: string;
}

export const ProfilePageHeader: React.FC<Props> = (props) => {
  const { className, ...otherProps } = props;
  const { t } = useTranslation();
  return (
    <div className={cn(cls.profilePageHeader, className)} {...otherProps}>
      <Text title={t('Profile')} />

      <Button theme={ButtonTheme.OUTLINED}>{t('Edit Profile')}</Button>
    </div>
  );
};
