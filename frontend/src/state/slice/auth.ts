import { persistReducer } from 'redux-persist';
import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/user';
import { AuthState } from '../../types/auth-state';

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
    name: '',
    status: '',
    active: false,
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
        access_token: string;
        userToken: string;
      }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.access_token;
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
