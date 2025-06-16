import cn from 'classnames';
import './Loader.scss';
import { memo } from 'react';

interface Props {
  className?: string;
}

export const Loader: React.FC<Props> = memo((props) => {
  const { className, ...otherProps } = props;
  return (
    <div className={cn('lds-ellipsis', className)} {...otherProps}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
});
