import { Product } from "@/features/Products/types/product.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = Product & {
    quantity: number;
};
type CartState = {
    cartData: CartItem[];
};
const initialState: CartState = {
    cartData: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<CartItem>) {
            const { id, quantity = 1 } = action.payload;

            const existingItem = state.cartData.find(
                item => item.id === id
            );

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.cartData.push({
                    ...action.payload,
                    quantity,
                });
            }
        },
        removeFromCart(state, action: PayloadAction<number>) {
            const currentId = action.payload;
            state.cartData = state.cartData.filter(item => item.id !== currentId)
        },
        updateQuantity: (
            state,
            action: PayloadAction<{ id: number; quantity: number }>
        ) => {
            const item = state.cartData.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
            }
        },
        clearCart(state) {
            state.cartData = [];
        }
    }
})

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer