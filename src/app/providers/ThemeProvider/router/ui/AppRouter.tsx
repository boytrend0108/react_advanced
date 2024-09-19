import { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { routerConfig } from 'shared/config/routerConfig/routerConfig';

export const AppRouter = () => {
  return (
    <Suspense fallback='Loading....'>
      <Routes>
        {Object.values(routerConfig).map(({ path, element }) => (
          <Route path={path} element={element} key={path} />
        ))}
      </Routes>
    </Suspense>
  );
};
