import { api } from "@/services/baseApi";
import { ProductRequest, ProductResponse } from "../types/product.type";

export const productApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query<ProductResponse, ProductRequest>({
            query: () => "/product",
            providesTags: ["products"]
        }),

        getProductById: builder.query<ProductRequest, number>({
            query: (id: number) => `/product/${id}`,
        })
    })
})

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi