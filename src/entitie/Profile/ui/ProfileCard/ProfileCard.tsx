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
import { Currency, CurrencySelect } from 'entitie/Currency';
import { Country, CountrySelect } from 'entitie/Country';
import { Avatar } from 'shared/ui/Avatar/Avatar';

interface Props {
  className?: string;
  data: Profile | null;
  error?: string;
  isLoading: boolean;
  onProfileNameChange?: (value: string) => void;
  onProfileSurnameChange?: (value: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard: React.FC<Props> = memo((props) => {
  const {
    className,
    data,
    error,
    isLoading,
    onProfileNameChange,
    onProfileSurnameChange,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeCountry,
    onChangeCurrency,
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
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data?.avatar} />
          </div>
        )}

        <Input
          placeholder={t('Enter your name')}
          value={data?.name || ''}
          readonly={readonly}
          onChange={onProfileNameChange}
        />

        <Input
          placeholder={t('Enter your surname')}
          readonly={readonly}
          value={data?.surname || ''}
          onChange={onProfileSurnameChange}
        />

        <Input
          value={data?.age || 0}
          placeholder={t('Ваш возраст')}
          className={cls.input}
          onChange={onChangeAge}
          readonly={readonly}
        />
        <Input
          value={data?.city || ''}
          placeholder={t('Город')}
          className={cls.input}
          onChange={onChangeCity}
          readonly={readonly}
        />

        <Input
          value={data?.avatar || ''}
          placeholder={t('Enter an avatar link')}
          className={cls.input}
          onChange={onChangeAvatar}
          readonly={readonly}
        />
        <CurrencySelect
          className={cls.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          className={cls.input}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>
  );
});
