import React from 'react';
import Moment from 'react-moment';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import { routes } from './features/routes/routes.tsx';
import { Providers } from './config/Providers.tsx';

import './index.css';

Moment.globalFormat = 'DD.MM.YYYY';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={routes} />
    </Providers>
  </React.StrictMode>
);
