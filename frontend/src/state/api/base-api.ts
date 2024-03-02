import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { RootState } from '../index';

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://apex.glensorbo.com',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token as string;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});
