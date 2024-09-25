import cn from 'classnames';
import { useEffect, useState, useTransition } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  className?: string;
}

export const BugButton: React.FC<Props> = (props) => {
  const { className, ...otherProps } = props;
  const [error, setError] = useState(false);
  const { t } = useTranslation();

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
      {t('throw error')}
    </button>
  );
};
