import React from 'react';
import Moment from 'react-moment';
import ReactDOM from 'react-dom/client';

import { Router } from './features/routes/Router.tsx';
import { Providers } from './config/Providers.tsx';

import './index.css';

Moment.globalFormat = 'DD.MM.YYYY';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <Router />
    </Providers>
  </React.StrictMode>
);
