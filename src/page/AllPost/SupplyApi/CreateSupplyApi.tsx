import baseApi from "../../../Redux/Api/baseApi";
const authApi1 = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    CrateSupply: builder.mutation({
      query: (supply) => ({
        url: "/api/v1/supplys",
        method: "POST",
        body: supply,
      }),
      invalidatesTags: ["supply"],
    }),
    getSingleSupply: builder.query({
      query: (id) => ({
        url: `/api/v1/supplys/${id}`,
      }),
    }),
    UpdateSupply: builder.mutation({
      query: ({ id, body }) => ({
        url: `/api/v1/supplys/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["supply"],
    }),
  }),
});
export const {
  useCrateSupplyMutation,
  useGetSingleSupplyQuery,
  useUpdateSupplyMutation,
} = authApi1;
