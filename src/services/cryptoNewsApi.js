import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsApiHeaders = {
  "x-rapidapi-key": "cd23b9f51fmsh91717acb40bc3edp1ee848jsnc728721b34df",
  "x-rapidapi-host": "news-api14.p.rapidapi.com",
};

const baseUrl = "https://news-api14.p.rapidapi.com";
export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () => "/trendings?topic=cryptocurrency&language=en&country=us",
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
