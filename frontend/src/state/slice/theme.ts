import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { ThemeMode } from '../../types/theme-mode';
import type { ThemePreference } from '../../types/state/theme-preference';

export const persistConfig = {
  key: 'theme',
  version: 1,
  storage,
};

const initialState: ThemePreference = {
  theme: 'dark',
};

export const themePreferenceSlice = createSlice({
  name: 'themePreference',
  initialState,
  selectors: {
    getTheme: (s) => s.theme,
  },
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.theme = action.payload;
    },
  },
});

export const themePreferenceReducerPersisted = persistReducer(
  persistConfig,
  themePreferenceSlice.reducer
);

export const { setTheme } = themePreferenceSlice.actions;
export const { getTheme } = themePreferenceSlice.selectors;
