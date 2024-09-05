import { lazy } from 'react';

export const MainPageAsync = lazy(
  () =>
    new Promise((res) =>
      setTimeout(() => {
        // @ts-ignore
        return res(import('./MainPage'));
      }, 1000)
    )
);
