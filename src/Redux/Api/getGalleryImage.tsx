import baseApi from "./baseApi";

const getGallery = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getGalleryData: builder.query({
      query: () => ({
        url: "/eventitem",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetGalleryDataQuery } = getGallery;
