import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";


export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://fakestoreapi.com",
        prepareHeaders: (headers, { getState }) => {
            return headers;
        },
    }),
    tagTypes: [''],
    endpoints: () => ({})
})