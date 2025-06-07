import cn from 'classnames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import {
  useAppDispatch,
  useAppSelector,
} from 'app/providers/StoreProvider/store.hooks';
import { log } from 'console';
import { Text, TextTheme } from 'shared/ui/Text/Text';

interface Props {
  className?: string;
}

export const LoginForm: React.FC<Props> = (props) => {
  const { className, ...otherProps } = props;
  const { t } = useTranslation();
  const { username, password, isLoading, error } =
    useAppSelector(getLoginState);

  const dispatch = useAppDispatch();

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUserName(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setUserPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [username, password, dispatch]);

  return (
    <div className={cn(cls.loginForm)} {...otherProps}>
      <Text title={t('Authorization form')} />

      {error && <Text theme={TextTheme.ERROR} text={error} />}

      <Input
        value={username}
        onChange={onChangeUsername}
        placeholder='login'
        autofocus
      />

      <Input
        value={password}
        onChange={onChangePassword}
        placeholder='password'
      />

      <Button
        className={cls.loginBtn}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onLoginClick}
        disabled={!username || !password || isLoading}
      >
        {t('Login')}
      </Button>
    </div>
  );
};
