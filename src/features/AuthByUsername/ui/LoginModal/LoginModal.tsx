import cn from 'classnames';
import cls from './LoginModal.module.scss';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';

interface Props {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const LoginModal: React.FC<Props> = (props) => {
  const { className, isOpen, onClose, ...otherProps } = props;

  return (
    <Modal
      className={cn(cls.LoginModal, className)}
      {...otherProps}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};
