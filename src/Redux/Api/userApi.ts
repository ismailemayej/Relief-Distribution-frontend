/* eslint-disable @typescript-eslint/no-explicit-any */
import baseApi from "./baseApi";
export const getUserData = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUser: builder.query<any, any>({
      query: (email) => ({
        url: `api/v1/user`,
        method: "GET",
        params: { email: email },
      }),
    }),
  }),
});
export const { useGetCurrentUserQuery } = getUserData;
