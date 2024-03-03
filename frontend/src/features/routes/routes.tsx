import { createBrowserRouter, Navigate } from 'react-router-dom';
import { UserTable } from '../users/UserTable';
import { App } from '../../App';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/admin',
        // element: <Navigate to={'/admin/users'} replace />,
        children: [
          {
            index: true,
            element: <UserTable />,
          },
        ],
      },
    ],
  },
]);
