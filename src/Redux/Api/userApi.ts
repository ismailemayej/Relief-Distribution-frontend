/* eslint-disable @typescript-eslint/no-explicit-any */
import baseApi from "./baseApi";
export const getUserData = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUser: builder.query<any, void>({
      query: () => "/api/v1/user",
    }),
    getUserById: builder.query<any, string>({
      query: (userId) => `/api/v1/users/${userId}`,
    }),
  }),
});
export const { useGetCurrentUserQuery, useGetUserByIdQuery } = getUserData;
