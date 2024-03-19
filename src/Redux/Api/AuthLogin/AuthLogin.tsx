import baseApi from "../baseApi";
const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    Login: builder.mutation({
      query: (userInfo) => ({
        url: "/api/v1/login",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});
export const { useLoginMutation } = authApi;
