import {
  useAppDispatch,
  useAppSelector,
} from 'app/providers/StoreProvider/store.hooks';
import cn from 'classnames';
import {
  fetchProfileData,
  getProfileError,
  getProfileIsLoading,
  profileActions,
  ProfileCard,
  profileReducer,
  updateProfileData,
} from 'entitie/Profile';
import { Currency } from 'entitie/Currency';
import { Country } from 'entitie/Country';
import { useCallback, useEffect } from 'react';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/classNames/components/DynamicModuleLoader/DynamicModuleLoader';
import { ProfilePageHeader } from './components/ProfilePageHeader/ProfilePageHeader';
import { getProfileForm } from 'entitie/Profile/model/selectors/getProfileForm/getProfileForm';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface Props {
  className?: string;
}

const ProfilePage: React.FC<Props> = (props) => {
  const { className, ...otherProps } = props;
  const dispatch = useAppDispatch();
  const form = useAppSelector(getProfileForm);
  const isLoading = useAppSelector(getProfileIsLoading);
  const error = useAppSelector(getProfileError);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const onProfileNameChange = useCallback(
    (value: string) => {
      dispatch(profileActions.updateForm({ name: value }));
    },
    [dispatch]
  );

  const onProfileSurnameChange = useCallback(
    (value: string) => {
      dispatch(profileActions.updateForm({ surname: value }));
    },
    [dispatch]
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateForm({ age: Number(value) || 0 }));
    },
    [dispatch]
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateForm({ city: value || '' }));
    },
    [dispatch]
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateForm({ username: value || '' }));
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateForm({ avatar: value || '' }));
    },
    [dispatch]
  );

  const onChangeCurrency = useCallback(
    (currency: Currency) => {
      dispatch(profileActions.updateForm({ currency }));
    },
    [dispatch]
  );

  const onChangeCountry = useCallback(
    (country: Country) => {
      dispatch(profileActions.updateForm({ country }));
    },
    [dispatch]
  );

  const onProfileSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={cn('', className)} {...otherProps}>
        <ProfilePageHeader onProfileSave={onProfileSave} />

        <ProfileCard
          data={form}
          isLoading={isLoading}
          error={error}
          onProfileNameChange={onProfileNameChange}
          onProfileSurnameChange={onProfileSurnameChange}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
