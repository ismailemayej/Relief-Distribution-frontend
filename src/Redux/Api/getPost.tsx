import baseApi from "./baseApi";
const getPostData = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getpost: builder.query({
      query: () => ({
        url: "/api/v1/reliefpost",
        method: "GET",
      }),
      providesTags: ["homepost"],
    }),
  }),
});
export const { useGetpostQuery } = getPostData;
