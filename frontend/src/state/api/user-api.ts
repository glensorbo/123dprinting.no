import { User } from '../../types/user';
import { baseApi } from './base-api';

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => '/user',
    }),
    getUser: builder.query<User, string>({
      query: (id) => `/user/${id}`,
    }),
    createNewUser: builder.mutation<User, User>({
      query: (user) => ({
        url: '/user',
        method: 'POST',
        body: user,
      }),
    }),
  }),
});

export const { useGetUsersQuery, useGetUserQuery, useCreateNewUserMutation } =
  userApi;
