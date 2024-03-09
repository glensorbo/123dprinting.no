import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import { Login } from '../../components/Login';
import { UsersTable } from '../admin/UsersTable';
import { PageLayout } from '../layout/PageLayout';

const routeConfig: RouteObject[] = [
  {
    path: '/',
    element: <PageLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'admin',
        children: [
          {
            path: 'users',
            element: <UsersTable />,
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routeConfig);

export const Router = () => {
  return <RouterProvider router={router} />;
};
