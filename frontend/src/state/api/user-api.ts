import { User } from '../../types/user';
import { baseApi } from './base-api';

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => '',
    }),
    // login: builder.mutation<LoginResponse, LoginRequest>({
    //   query: (credentials) => ({
    //     url: '/auth/login',
    //     method: 'POST',
    //     body: credentials,
    //   }),
    // }),
  }),
});

export const { useGetUsersQuery } = userApi;
