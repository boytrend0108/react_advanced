import { useState } from 'react';
import * as classes from './Counter.module.scss';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className={classes.counter}>
      <h1>{counter}</h1>

      <button
        className={classes.button}
        onClick={() => setCounter(counter + 1)}
      >
        increment
      </button>
    </div>
  );
};

export default Counter;
