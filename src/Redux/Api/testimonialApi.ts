import baseApi from "./baseApi";
const testimonialApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addTestimonial: builder.mutation({
      query: (testimonialinfo) => ({
        url: "/api/v1/testimonial",
        method: "POST",
        body: testimonialinfo,
      }),
      invalidatesTags: ["testimonial"],
    }),
    getTestimonial: builder.query({
      query: () => ({
        url: "/api/v1/testimonial",
        method: "GET",
      }),
      providesTags: ["testimonial"],
    }),
  }),
});
export const { useAddTestimonialMutation, useGetTestimonialQuery } =
  testimonialApi;
