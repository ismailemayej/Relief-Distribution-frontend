import baseApi from "./baseApi";
const communityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    communitywall: builder.mutation({
      query: (communityinfo) => ({
        url: "/api/v1/community",
        method: "POST",
        body: communityinfo,
      }),
      invalidatesTags: ["community"],
    }),
    communitywallget: builder.query({
      query: () => ({
        url: "/api/v1/community",
        method: "GET",
      }),
      providesTags: ["community"],
    }),
  }),
});
export const { useCommunitywallMutation, useCommunitywallgetQuery } =
  communityApi;
