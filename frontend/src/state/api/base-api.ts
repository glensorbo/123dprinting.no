import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { RootState } from '../index';

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5001',
    prepareHeaders: (headers, { getState }) => {
      // const token = (getState() as RootState).auth.token as string;
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlNGE3NjU4ZDk2ODYyOWM1MzE3Mzk1In0sImlhdCI6MTcwOTU4NDM5MiwiZXhwIjoxNzEyMzQ5MTkyfQ.-8r-GjUylxvixoCTi8LkdnI0sYk8iqIN3DFpvqkgAOE';

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});
