import { lazy } from 'react';

export const ArticlesPage = lazy(
  () =>
    new Promise((res) => {
      setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        res(import('./ArticlesPage'));
      }, 1000);
    })
);
