import { Route, Routes } from 'react-router-dom';
import { memo, Suspense, useMemo } from 'react';
import { routerConfig } from 'shared/config/routerConfig/routerConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequaredAuth } from './RequaredAuth';

export const AppRouter = memo(() => {
  const renderWithWrapper = useMemo(() => {
    return Object.values(routerConfig).map(({ path, element, authOnly }) => (
      <Route
        path={path}
        element={authOnly ? <RequaredAuth>{element}</RequaredAuth> : element}
        key={path}
      />
    ));
  }, []);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{renderWithWrapper}</Routes>
    </Suspense>
  );
});
