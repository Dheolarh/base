/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import Splash from 'components/loader/Splash';
import PageLoader from 'components/loader/PageLoader';
import paths, { rootPaths } from './paths';

const App = lazy(() => import('App'));
const MainLayout = lazy(() => import('layouts/main-layout'));
const AuthLayout = lazy(() => import('layouts/auth-layout'));
const Dashboard = lazy(() => import('pages/dashboard'));
const Products = lazy(() => import('pages/products'));
const Orders = lazy(() => import('pages/orders'));
const Customers = lazy(() => import('pages/customers'));
const Inventory = lazy(() => import('pages/inventory'));
const LoidAI = lazy(() => import('pages/loid-ai'));
const Analytics = lazy(() => import('pages/analytics'));
const Settings = lazy(() => import('pages/settings'));
const SignIn = lazy(() => import('pages/authentication/SignIn'));
const SignUp = lazy(() => import('pages/authentication/SignUp'));
const ResetPassword = lazy(() => import('pages/authentication/ResetPassword'));
const Error404 = lazy(() => import('pages/errors/Error404'));

const routes = [
  {
    element: (
      <Suspense fallback={<Splash />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: '/',
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: 'pages/products',
            element: <Products />,
          },
          {
            path: 'pages/orders',
            element: <Orders />,
          },
          {
            path: 'pages/customers',
            element: <Customers />,
          },
          {
            path: 'pages/inventory',
            element: <Inventory />,
          },
          {
            path: 'pages/loid-ai',
            element: <LoidAI />,
          },
          {
            path: 'pages/analytics',
            element: <Analytics />,
          },
          {
            path: 'pages/settings',
            element: <Settings />,
          },
        ],
      },
      {
        path: rootPaths.authRoot,
        element: (
          <Suspense fallback={<Splash />}>
            <Outlet />
          </Suspense>
        ),
        children: [
          {
            path: paths.signin,
            element: (
              <AuthLayout>
                <SignIn />
              </AuthLayout>
            ),
          },
          {
            path: paths.signup,
            element: (
              <AuthLayout>
                <SignUp />
              </AuthLayout>
            ),
          },
          {
            path: paths.resetPassword,
            element: <ResetPassword />,
          },
        ],
      },
      {
        path: '*',
        element: <Error404 />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, { basename: '/base' });

export default router;
