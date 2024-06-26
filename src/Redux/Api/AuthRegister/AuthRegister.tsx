import baseApi from "../baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    Register: builder.mutation({
      query: (userInfo) => ({
        url: "/api/v1/register",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});
export const { useRegisterMutation } = authApi;
