import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { Product } from '../products/type';
import { rootApi } from '..';

export const cartApiSlice = rootApi.injectEndpoints({
    
    endpoints: (build) => ({
        addToCart: build.mutation<Product, Product>({
            query: (body: Product) => ({
                url: `/product/${body.id}`,
                method: 'PUT',
                body
            }),
             invalidatesTags: ["product"],
        }),
    })
});

export const { useAddToCartMutation } = cartApiSlice;