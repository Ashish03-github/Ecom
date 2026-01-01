import { api } from "@/services/baseApi";
import { Product, ProductRequest, ProductResponse } from "../types/product.type";

export const productApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], ProductRequest>({
            query: () => "/products",
            providesTags: ["products"]
        }),

        getProductById: builder.query<ProductRequest, number>({
            query: (id: number) => `/product/${id}`,
        })
    })
})

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi