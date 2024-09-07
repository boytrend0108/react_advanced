import React from 'react';

export const CounterAsync = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        //@ts-ignore
        resolve(import('./Counter'));
      }, 1000);
    })
);
