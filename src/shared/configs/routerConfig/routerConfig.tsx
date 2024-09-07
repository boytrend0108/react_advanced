import { RouteProps } from 'react-router';
import { MainPage } from 'pages/MainPage';
import { About } from 'pages/About';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
};

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: routePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: routePath.about,
    element: <About />,
  },
};
