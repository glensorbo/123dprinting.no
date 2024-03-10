import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import { UsersTable } from '../admin/UsersTable';
import { AuthProvider } from '../../config/AuthProvider';
import { PageLayout } from '../layout/PageLayout';
import { Login } from '../../components/Login';

const routeConfig: RouteObject[] = [
  {
    path: '/',
    element: <AuthProvider />,
    children: [
      {
        index: true,
        element: <PageLayout />,
      },
      {
        path: 'admin',
        element: <PageLayout />,
        children: [
          {
            path: 'users',
            element: <UsersTable />,
          },
        ],
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
];

const router = createBrowserRouter(routeConfig);

export const Router = () => {
  return <RouterProvider router={router} />;
};
