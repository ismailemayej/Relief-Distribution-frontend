import baseApi from "../../../Redux/Api/baseApi";

const authApi2 = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    GetSupply: builder.query({
      query: () => ({
        url: "/api/v1/supplys",
        method: "GEt",
      }),
    }),
  }),
});
export const { useGetSupplyQuery } = authApi2;
