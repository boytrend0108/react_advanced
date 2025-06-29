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
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
