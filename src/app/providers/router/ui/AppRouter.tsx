import { Route, Routes } from 'react-router-dom';
import { memo, Suspense, useMemo } from 'react';
import { routerConfig } from 'shared/config/routerConfig/routerConfig';
import { PageLoader } from 'widgets/PageLoader';
import { useAppSelector } from 'app/providers/StoreProvider/store.hooks';
import { getUserAuthData } from 'entitie/User';

export const AppRouter = memo(() => {
  const isAuth = useAppSelector(getUserAuthData);

  const routes = useMemo(() => {
    return Object.values(routerConfig).filter((route) => {
      if (route.authOnly && !isAuth) {
        return false;
      }
      return true;
    });
  }, [isAuth]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routes).map(({ path, element }) => (
          <Route path={path} element={element} key={path} />
        ))}
      </Routes>
    </Suspense>
  );
});
