import { lazy, LazyExoticComponent, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

import Layouts from '@layouts';
import { NotFound } from '@components';

const About = lazy(() => import('@/views/About'));
const Home = lazy(() => import('@/views/Home'));
const Login = lazy(() => import('@/views/Login'));

const lazyLoader = (
  LazyComponent: LazyExoticComponent<() => JSX.Element>,
) => {
  return (
    <Suspense fallback={<Spin delay={600} indicator={<LoadingOutlined />} />}>
      <LazyComponent />
    </Suspense>
  );
};

export const routeItems = [
  {
    path: '/',
    element: <Layouts />,
    children: [
      {
        path: '/login',
        element: lazyLoader(Login),
      },
      {
        path: '/home',
        element: lazyLoader(Home),
      },
      {
        path: '/about',
        element: lazyLoader(About),
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

function Routes() {
  const routes = useRoutes(routeItems);
  return routes;
}

export default Routes;
