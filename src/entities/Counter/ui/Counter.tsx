import cn from 'classnames';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue';

interface Props {
  className?: string;
}

export const Counter: React.FC<Props> = (props) => {
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
      <h1 data-testid='value'>value = {counterValue}</h1>

      <Button onClick={increment} data-testid='counter-increment'>
        increment
      </Button>
      <Button onClick={decrement} data-testid='counter-decrement'>
        decrement
      </Button>
    </div>
  );
};
