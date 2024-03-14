import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://e-service-eosin.vercel.app",
  }),
  endpoints: () => ({}),
});
export default baseApi;
