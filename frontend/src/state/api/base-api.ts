import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { RootState } from '../index';

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5069',
    prepareHeaders: (headers, { getState }) => {
      // const token = (getState() as RootState).auth.token as string;
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlNzBhNGU5MzVlOWVjZmZmNzE5MWRlIn0sImlhdCI6MTcwOTY1NTk0MywiZXhwIjoxNzEyNDIwNzQzfQ.XDTd0k_fQp1dBZCWN1vYH9ShVLTx3RaGSkPEjLZPGG4';

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});
