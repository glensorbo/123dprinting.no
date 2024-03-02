import React from 'react';
import Moment from 'react-moment';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import { store } from './state/index.ts';

import { App } from './App.tsx';

import './index.css';

Moment.globalFormat = 'DD.MM.YYYY';

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
