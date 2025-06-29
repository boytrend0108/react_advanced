import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import cls from './ProfileCard.module.scss';
import { memo } from 'react';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from 'entitie/Profile/model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { useAppSelector } from 'app/providers/StoreProvider/store.hooks';
import { getProfileReadOnly } from 'entitie/Profile/model/selectors/getProfileReadOnly/getProfileReadOnly';

interface Props {
  className?: string;
  data: Profile | null;
  error?: string;
  isLoading: boolean;
  onProfileNameChange?: (value: string) => void;
  onProfileSurnameChange?: (value: string) => void;
}

export const ProfileCard: React.FC<Props> = memo((props) => {
  const {
    className,
    data,
    error,
    isLoading,
    onProfileNameChange,
    onProfileSurnameChange,
    ...otherProps
  } = props;
  const { t } = useTranslation('profile');
  const readonly = useAppSelector(getProfileReadOnly);

  if (isLoading) {
    return (
      <div
        className={cn(cls.profileCard, cls.loading, className)}
        {...otherProps}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={cn(cls.profileCard, cls.error, className)}
        {...otherProps}
      >
        <Text
          title={t('Something went wrong')}
          text={t('Failed to fetch a profile cart')}
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  return (
    <div className={cn(cls.profileCard, className)} {...otherProps}>
      <div className={cls.data}>
        <Input
          placeholder={t('Enter your name')}
          value={data?.name || ''}
          readOnly={readonly}
          onChange={onProfileNameChange}
        />

        <Input
          placeholder={t('Enter your surname')}
          readOnly={readonly}
          value={data?.surname || ''}
          onChange={onProfileSurnameChange}
        />
      </div>
    </div>
  );
});
