import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": "09703e6698mshf43e2b477fb9b7bp1cab0djsn52091d834332",
};


const baseUrl = "https://bing-news-search1.p.rapidapi.com"

const createrequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptosNews: builder.query({
      query: (newsCategory, count) => createrequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
});

export const {
  useGetCryptosNewsQuery, //should be equal to the name of the build (it is a custom hook)
} = cryptoNewsApi













// var options = {
//   method: 'GET',
//   url: '/news',
//   params: {safeSearch: 'Off', textFormat: 'Raw'},
//   headers: {
//
// };
