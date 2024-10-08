import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export interface DashboardMetrics {
    popularProducts: PopularProduct[]
    salesSummary: SalesSummary[]
    purchaseSummary: PurchaseSummary[]
    expenseSummary: ExpenseSummary[]
    expenseByCategory: ExpenseByCategory[]
}

export interface PopularProduct {
    productId: string
    name: string
    price: number
    rating?: number
    stockQuantity: number
}

export interface SalesSummary {
    salesSummaryId: string
    totalValue: number
    changePercentage: number
    date: string
}

export interface PurchaseSummary {
    purchaseSummaryId: string
    totalPurchased: number
    changePercentage: number
    date: string
}

export interface ExpenseSummary {
    expenseSummaryId: string
    totalExpenses: number
    date: string
}

export interface ExpenseByCategory {
    expenseByCategoryId: string
    expenseSummaryId: string
    category: string
    amount: string
    date: string
}


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

export const {
    useGetDashboardMetricsQuery
} = api;