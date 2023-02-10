import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseQuery = fetchBaseQuery({
  baseUrl: 'https://connections-api.herokuapp.com',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQuery,
  endpoints: builder => ({
    registerUser: builder.mutation({
      query(data) {
        return {
          url: '/users/signup',
          method: 'POST',
          body: data,
        };
      },
    }),
    loginUser: builder.mutation({
      query(data) {
        return {
          url: '/users/login',
          method: 'POST',
          body: data,
        };
      },
    }),
    logOutUser: builder.mutation({
      query(data) {
        return {
          url: '/users/logout',
          method: 'POST',
          body: data,
        };
      },
    }),
    refreshUser: builder.query({
      query: () => '/users/current',
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogOutUserMutation,
  useRefreshUserQuery,
} = authApi;
