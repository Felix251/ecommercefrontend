import { configureStore } from "@reduxjs/toolkit";
import { productApiSlice } from "../services/api/products";
import { cartApiSlice } from "../services/api/cart";
import  cartItemsReducer  from '../features/cartSlice';

export const store = configureStore({
    reducer: {
        [productApiSlice.reducerPath]: productApiSlice.reducer,
        [cartApiSlice.reducerPath]: cartApiSlice.reducer,
        cartItems: cartItemsReducer,
    },

    middleware: (getDefaultMiddleware) => {
        getDefaultMiddleware().concat(productApiSlice.middleware);
        return getDefaultMiddleware().concat(cartApiSlice.middleware);
    }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch