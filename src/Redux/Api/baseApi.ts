import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: () => ({}),
  tagTypes: ["homepost", "supply", "community", "testimonial", "volunteer"],
});
export default baseApi;
