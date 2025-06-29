import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import cls from './ProfilePageHeader.module.scss';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import {
  useAppDispatch,
  useAppSelector,
} from 'app/providers/StoreProvider/store.hooks';
import { getProfileReadOnly, profileActions } from 'entitie/Profile';
import { useCallback } from 'react';

interface Props {
  className?: string;
  onProfileSave?: () => void;
}

export const ProfilePageHeader: React.FC<Props> = (props) => {
  const { className, onProfileSave, ...otherProps } = props;
  const { t } = useTranslation();
  const readonly = useAppSelector(getProfileReadOnly);
  const dispatch = useAppDispatch();

  const onEditClick = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelClick = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  return (
    <div className={cn(cls.profilePageHeader, className)} {...otherProps}>
      <Text title={t('Profile')} />

      {!readonly ? (
        <div className={cls.buttons}>
          <Button theme={ButtonTheme.OUTLINED} onClick={onProfileSave}>
            {t('Save')}
          </Button>

          <Button theme={ButtonTheme.OUTLINED_RED} onClick={onCancelClick}>
            {t('Cancel')}
          </Button>
        </div>
      ) : (
        <Button theme={ButtonTheme.OUTLINED} onClick={onEditClick}>
          {t('Edit Profile')}
        </Button>
      )}
    </div>
  );
};
