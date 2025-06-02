import cn from 'classnames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';

interface Props {
  className?: string;
}

export const LoginForm: React.FC<Props> = (props) => {
  const { className, ...otherProps } = props;
  const { t } = useTranslation();
  const { username, password } = useSelector(getLoginState);
  const dispatch = useDispatch();

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

      <Button className={cls.loginBtn} theme={ButtonTheme.CLEAR_INVERTED}>
        {t('Login')}
      </Button>
    </div>
  );
};
