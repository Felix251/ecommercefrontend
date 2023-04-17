import { createSlice} from '@reduxjs/toolkit';
import type { PayloadAction} from '@reduxjs/toolkit';

export interface Product {
    id: string,
    name: string,
    price: number,
    image: string,
    details: string,
    note: number,
    quantity: number
};
export interface CartItemState {
    products: Product[],
    nextId: number
}
const initialState: CartItemState = {
    products: [],
    nextId: 1
}
export const cartSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        addProductToCart: (state, action: PayloadAction<Product>) => {
            const { id, name, price, image, quantity, details} = action.payload;
            state.products.push({
                id: id,
                name: name,
                price: price,
                image: image,
                details: details,
                note: 5,
                quantity: quantity
            });
            state.nextId++;
        },
        removeProductFromCart: (state, action: PayloadAction<string>) => {
            state.products = state.products.filter((product) => product.id !== action.payload);
            state.nextId--;
          },
          addQTY: (state, action: PayloadAction<string>) => {
            const produitAModifier = state.products.find((produit) => produit.id === action.payload);
            if (produitAModifier) {
                produitAModifier.quantity++;
            }
          },
          removeQTY: (state, action: PayloadAction<string>) => {
            const produitAModifier = state.products.find((produit) => produit.id === action.payload);
            if (produitAModifier) {
                produitAModifier.quantity--;
                if (produitAModifier.quantity==0) {
                    state.products = state.products.filter((product) => product.id !== action.payload);
                    state.nextId--;
                }
            }
          },
    }
});

export const { addProductToCart, removeProductFromCart, addQTY, removeQTY } = cartSlice.actions;

export default cartSlice.reducer;