import { lazy } from 'react';

export const ProfilePageAsync = lazy(
  () =>
    new Promise((res) => {
      setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        res(import('./ProfilePage'));
      }, 1000);
    })
);
