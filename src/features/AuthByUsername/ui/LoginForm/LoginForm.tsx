import cn from 'classnames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { useAppDispatch } from 'app/providers/StoreProvider/config/store';

interface Props {
  className?: string;
}

export const LoginForm: React.FC<Props> = (props) => {
  const { className, ...otherProps } = props;
  const { t } = useTranslation();
  const { username, password } = useSelector(getLoginState);
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
  }, [dispatch, username, password]);

  return (
    <div className={cn(cls.loginForm)} {...otherProps}>
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
      >
        {t('Login')}
      </Button>
    </div>
  );
};
