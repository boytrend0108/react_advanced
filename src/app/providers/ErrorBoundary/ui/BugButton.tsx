import cn from 'classnames';
import { useEffect, useState } from 'react';

interface Props {
  className?: string;
}

export const BugButton: React.FC<Props> = (props) => {
  const { className, ...otherProps } = props;
  const [error, setError] = useState(false);

  function onThrow() {
    setError(true);
  }

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <button className={cn('', className)} {...otherProps} onClick={onThrow}>
      throw error
    </button>
  );
};
