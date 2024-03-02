import { baseApi } from './base-api';

import type { LoginRequest } from '../../types/api/login-request';
import type { LoginResponse } from '../../types/api/login-response';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
