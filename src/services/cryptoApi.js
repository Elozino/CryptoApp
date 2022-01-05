import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "09703e6698mshf43e2b477fb9b7bp1cab0djsn52091d834332",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createrequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createrequest(`/coins?limit=${count}`),
    }),
  }),
});

export const {
  useGetCryptosQuery, //should be equal to the name of the build (it is a custom hook)
} = cryptoApi
