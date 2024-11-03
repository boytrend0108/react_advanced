import cn from 'classnames';
import cls from './Modal.module.scss';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Portal } from '../Portal/Portal';

interface Props {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal: React.FC<Props> = (props) => {
  const { className, children, isOpen, onClose, ...otherProps } = props;
  const [isClosing, setIsClosing] = useState(false);
  const timeRef = useRef<ReturnType<typeof setTimeout>>(null);

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);

      timeRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  function onContentClick(e: React.MouseEvent) {
    e.stopPropagation();
  }

  const onKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    },
    [closeHandler]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeydown);
    }

    return () => {
      clearTimeout(timeRef.current);
      window.removeEventListener('keydown', onKeydown);
    };
  }, [isOpen, onKeydown]);

  return (
    <Portal>
      <div
        className={cn(cls.modal, className, {
          [cls.open]: isOpen,
          [cls.isClosing]: isClosing,
        })}
        {...otherProps}
      >
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
