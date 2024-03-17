import baseApi from "./baseApi";
import baseApi2 from "./baseApi2";

const getPostData = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getpost: builder.query({
      query: () => ({
        url: "/api/v1/reliefpost",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetpostQuery } = getPostData;
