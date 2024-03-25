import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://relief-management-server-site.vercel.app",
  }),
  endpoints: () => ({}),
  tagTypes: ["homepost", "supply"],
});
export default baseApi;
