import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import cls from './ProfileCard.module.scss';
import { useAppSelector } from 'app/providers/StoreProvider/store.hooks';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { memo } from 'react';
import { getProfileIsLoading } from 'entitie/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'entitie/Profile/model/selectors/getProfileError/getProfileError';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface Props {
  className?: string;
}
console.log(cls);

export const ProfileCard: React.FC<Props> = memo((props) => {
  const { className, ...otherProps } = props;
  const { t } = useTranslation('profile');
  const data = useAppSelector(getProfileData);
  const isLoading = useAppSelector(getProfileIsLoading);
  const error = useAppSelector(getProfileError);

  return (
    <div className={cn(cls.profileCard, className)} {...otherProps}>
      <div className={cls.header}>
        <Text title={t('Profile')} />

        <Button theme={ButtonTheme.OUTLINED}>{t('Edit Profile')}</Button>
      </div>

      <div className={cls.data}>
        <Input placeholder={t('Enter your name')} value={data?.name || ''} />

        <Input
          placeholder={t('Enter your surname')}
          value={data?.surname || ''}
        />
      </div>
    </div>
  );
});
