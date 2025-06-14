import cn from 'classnames';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue';
import { useTranslation } from 'react-i18next';

interface Props {
  className?: string;
}

export const Counter: React.FC<Props> = (props) => {
  const { t } = useTranslation();
  const { className, ...otherProps } = props;
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  function increment() {
    dispatch(counterActions.increment());
  }

  function decrement() {
    dispatch(counterActions.decrement());
  }

  return (
    <div className={cn(className)} {...otherProps}>
      <h1 data-testid='value'>{counterValue}</h1>

      <Button onClick={increment} data-testid='counter-increment'>
        {t('increment')}
      </Button>

      <Button onClick={decrement} data-testid='counter-decrement'>
        {t('decrement')}
      </Button>
    </div>
  );
};

Counter.whyDidYouRender = true;
