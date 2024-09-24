import cn from 'classnames';
import * as cls from './PageLoader.module.scss';
import { Loader } from 'shared/ui/Loader/Loader';

interface Props {
  className?: string;
}

export const PageLoader: React.FC<Props> = (props) => {
  const { className, ...otherProps } = props;
  return (
    <div className={cn(cls.PageLoader, className)} {...otherProps}>
      <Loader />
    </div>
  );
};
