import { lazy } from 'react';

export const AboutPageAsync = lazy(
  () =>
    new Promise((res) => {
      setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        res(import('./AboutPage'));
      }, 1000);
    })
);
