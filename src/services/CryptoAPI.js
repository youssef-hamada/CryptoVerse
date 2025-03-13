import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const CryptoApiHeaders = {
  "x-rapidapi-key": "cd23b9f51fmsh91717acb40bc3edp1ee848jsnc728721b34df",
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
};

// Base URL for the API
const baseUrl = "https://coinranking1.p.rapidapi.com";

// Create a function to add headers to the request
const createRequest = (url) => ({ url, headers: CryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }), // Use baseUrl here
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/coins?limit=10"), // Simplified query parameters
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
