import cn from 'classnames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import {
  loginActions,
  loginReducer,
} from 'features/AuthByUsername/model/slice/loginSlice';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import {
  useAppDispatch,
  useAppSelector,
} from 'app/providers/StoreProvider/store.hooks';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginUsername } from '../..//model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../..//model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../..//model/selectors/getLogitIsLoading/getLoginIsLoading';
import { getLoginError } from '../..//model/selectors/getLoginError/getLoginError';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/classNames/components/DynamicModuleLoader/DynamicModuleLoader';

export interface LoginFormProps {
  className?: string;
  onSuccess?: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm: React.FC<LoginFormProps> = memo((props) => {
  const { className, onSuccess, ...otherProps } = props;
  const { t } = useTranslation();
  const username = useAppSelector(getLoginUsername);
  const password = useAppSelector(getLoginPassword);
  const isLoading = useAppSelector(getLoginIsLoading);
  const error = useAppSelector(getLoginError);

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
    dispatch(loginByUsername({ username, password })).then((result) => {
      if (result.meta.requestStatus === 'fulfilled') {
        dispatch(loginActions.setUserPassword(''));
        dispatch(loginActions.setUserName(''));
        onSuccess?.();
      }
    });
  }, [username, password, dispatch, onSuccess]);

  return (
    <DynamicModuleLoader
      removeAfterUnmount
      reducers={initialReducers}
      name='loginForm'
    >
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
    </DynamicModuleLoader>
  );
});

export default LoginForm;
