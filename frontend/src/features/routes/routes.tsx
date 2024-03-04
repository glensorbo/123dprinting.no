import { createBrowserRouter } from 'react-router-dom';
import { UsersTable } from '../admin/UsersTable';
import { App } from '../../App';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
]);
