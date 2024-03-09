import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import { UsersTable } from '../admin/UsersTable';
import { AuthProvider } from '../../config/AuthProvider';

const routeConfig: RouteObject[] = [
  {
    path: '/',
    element: <AuthProvider />,
    children: [
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
