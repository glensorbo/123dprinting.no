import { persistReducer } from 'redux-persist';
import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import type { User } from '../../types/user';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AuthState } from '../../types/auth-state';

export const persistConfig = {
  key: 'auth',
  version: 1,
  storage,
};

const initialState: AuthState = {
  isAuthenticated: false,
  user: {
    _id: '',
    email: '',
    firstName: '',
    lastName: '',
    role: 'customer',
    address: {
      street: '',
      number: '',
    },
    postal: {
      code: '',
      region: '',
    },
  },
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{
        user: User;
        token: string;
      }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = initialState.user;
      state.token = '';
    },
  },
});

export const authReducerPersisted = persistReducer(
  persistConfig,
  authSlice.reducer
);

export const { setCredentials, logout } = authSlice.actions;
