import cn from 'classnames';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { GetCounterValue } from '../model/selectors/getCounterValue';

interface Props {
  className?: string;
}

export const Counter: React.FC<Props> = (props) => {
  const { className, ...otherProps } = props;
  const dispatch = useDispatch();
  const counterValue = useSelector(GetCounterValue);

  function increment() {
    dispatch(counterActions.increment());
  }

  function decrement() {
    dispatch(counterActions.decrement());
  }

  return (
    <div className={cn(className)} {...otherProps}>
      <h1>value = {counterValue}</h1>

      <Button onClick={increment}>increment</Button>
      <Button onClick={decrement}>decrement</Button>
    </div>
  );
};
