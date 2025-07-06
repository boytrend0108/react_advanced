import { lazy } from 'react';

export const ArticleDetailPage = lazy(
  () =>
    new Promise((res) => {
      setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        res(import('./ArticleDetailsPage'));
      }, 1000);
    })
);
