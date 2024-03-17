import baseApi from "./baseApi";

const getGallery = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getGalleryData: builder.query({
      query: () => ({
        url: "/api/v1/gellery",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetGalleryDataQuery } = getGallery;
