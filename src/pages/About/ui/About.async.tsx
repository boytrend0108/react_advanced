import React from 'react';

export const AboutAsync = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        //@ts-ignore
        resolve(import('./About'));
      }, 1000);
    })
);
