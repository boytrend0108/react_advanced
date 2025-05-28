import cn from 'classnames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useState } from 'react';

interface Props {
  className?: string;
}

export const LoginForm: React.FC<Props> = (props) => {
  const { className, ...otherProps } = props;
  const { t } = useTranslation();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={cn(cls.loginForm)} {...otherProps}>
      <Input value={login} onChange={setLogin} placeholder='login' />
      <Input value={password} onChange={setPassword} placeholder='password' />

      <Button className={cls.loginBtn}>{t('Login')}</Button>
    </div>
  );
};
