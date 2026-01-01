import { Product } from "@/features/Products/types/product.type";
import { createSlice } from "@reduxjs/toolkit";

type cartState = {
    cartData: Product[]
}

const initialState: cartState = {
    cartData: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            state.cartData.push(action.payload)
        },
        removeFromCart(state, action) {
            const currentId = action.payload;
            state.cartData = state.cartData.filter(item => item.id !== currentId)
        },
        increaseQuantity(state, action) {
            state.cartData = action.payload;
        },
        decreaseQuantity(state, action) {
            state.cartData = action.payload;
        }
    }
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer