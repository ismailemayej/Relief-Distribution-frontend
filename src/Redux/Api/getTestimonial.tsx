import baseApi from "./baseApi";

const getTestimonial = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTestimonial: builder.query({
      query: () => ({
        url: "/testimonial",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetTestimonialQuery } = getTestimonial;
