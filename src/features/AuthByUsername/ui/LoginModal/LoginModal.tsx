import cn from 'classnames';
import cls from './LoginModal.module.scss';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

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
    >
      <LoginForm />
    </Modal>
  );
};
