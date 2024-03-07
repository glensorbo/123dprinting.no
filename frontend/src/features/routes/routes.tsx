import { createBrowserRouter } from 'react-router-dom';
import { UsersTable } from '../admin/UsersTable';
import { App } from '../../App';
import { Login } from '../../components/Login';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
]);
