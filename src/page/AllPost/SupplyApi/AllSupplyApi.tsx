/* eslint-disable @typescript-eslint/no-explicit-any */

import baseApi from "../../../Redux/Api/baseApi";

interface DeleteSupplyResponse {
  success: boolean;
  message: string;
}
const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    GetSupply: builder.query<void, any>({
      query: () => ({
        url: "/api/v1/supplys",
        method: "GET",
      }),
      providesTags: ["supply"],
    }),
    deleteSupply: builder.mutation<string, DeleteSupplyResponse>({
      query: (id) => ({
        url: `/api/v1/supplys/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["supply"],
    }),
  }),
});

export const { useGetSupplyQuery, useDeleteSupplyMutation } = authApi;
