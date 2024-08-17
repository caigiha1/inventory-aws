import {createApi, EndpointBuilder, fetchBaseQuery} from "@reduxjs/toolkit/query";

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_SERVER_URL,
    }),
    reducerPath:'api',
    tagTypes: ['DashboardMetrics'],
    endpoints: (build) => ({
        getDashboardMetrics: build.query<DashboardMetrics, void>({
            query: () => '/dashboard',
            providesTags: ['DashboardMetrics'],
        })
    })
})

export const { } = api;