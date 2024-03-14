import baseApi from "./baseApi";

const getPostData = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getpost: builder.query({
      query: () => ({
        url: "/blogandnews",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetpostQuery } = getPostData;
