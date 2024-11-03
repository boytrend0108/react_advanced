import { createPortal } from 'react-dom';

interface Props {
  children: React.ReactNode;
  element?: HTMLElement;
}

export const Portal: React.FC<Props> = (props) => {
  const { children, element = document.body } = props;

  return createPortal(children, element);
};
