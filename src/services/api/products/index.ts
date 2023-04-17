import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { Product } from './type';
import { rootApi } from '..';

export const productApiSlice = rootApi.injectEndpoints({
    
    endpoints: (build) => ({
        getProducts: build.query<Product[], void>({
            query: () => '/product',
            providesTags: [{ type: "product", id: "LIST" }],
        }),
    })
});

export const { useGetProductsQuery } = productApiSlice;