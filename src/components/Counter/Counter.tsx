import { useState } from 'react';
import './Counter.scss';

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className='Counter'>
      <h1>{counter}</h1>

      <button onClick={() => setCounter(counter + 1)}>increment</button>
    </div>
  );
};
