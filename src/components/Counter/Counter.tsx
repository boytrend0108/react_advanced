import React, { useState } from 'react';
import * as classes from './Counter.module.scss';

export const Counter = React.memo(() => {
  const [counter, setCounter] = useState(0);
  console.log('counter');

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
});
