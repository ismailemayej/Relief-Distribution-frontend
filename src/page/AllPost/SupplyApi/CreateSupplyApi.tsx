import baseApi from "../../../Redux/Api/baseApi";
const authApi1 = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    CrateSupply: builder.mutation({
      query: (supply) => ({
        url: "/api/v1/supplys",
        method: "POST",
        body: supply,
      }),
    }),
  }),
});
export const { useCrateSupplyMutation } = authApi1;
