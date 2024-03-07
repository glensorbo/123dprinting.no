import { persistStore } from 'redux-persist';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store } from '../state';
import { ThemeProvider } from './AntConfigProvider';
import { AuthProvider } from './AuthProvider';

const persistor = persistStore(store);

type Props = {
  children: React.ReactNode;
};

export const Providers = ({ children }: Props) => {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider>
          {children}
          {/* <AuthProvider>{children}</AuthProvider> */}
        </ThemeProvider>
      </PersistGate>
    </ReduxProvider>
  );
};
