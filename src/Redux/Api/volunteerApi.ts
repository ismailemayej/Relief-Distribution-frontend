import baseApi from "./baseApi";
const volunteerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addvolunteer: builder.mutation({
      query: (volunteerinfo) => ({
        url: "/api/v1/volunteer",
        method: "POST",
        body: volunteerinfo,
      }),
      invalidatesTags: ["volunteer"],
    }),
    getvolunteer: builder.query({
      query: () => ({
        url: "/api/v1/volunteer",
        method: "GET",
      }),
      providesTags: ["volunteer"],
    }),
  }),
});
export const { useAddvolunteerMutation, useGetvolunteerQuery } = volunteerApi;
