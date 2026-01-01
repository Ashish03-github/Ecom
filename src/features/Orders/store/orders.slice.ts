import { Product } from "@/features/Products/types/product.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import uuid from 'react-native-uuid';

interface orderHistoryItem {
    id: string;
    date: string;
    items: Product[];
    total: number
}

interface orderHistory {
    history: orderHistoryItem
}

const initialState: orderHistory = {
    history: {
        id: '',
        date: '',
        items: [],
        total: 0
    }
}

const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        placeOrders(state, action: PayloadAction<{ items: Product[], total: number }>) {

            console.log("ORDERS =>", {
                id: uuid.v4(),
                date: Date().toString(),
                items: action.payload.items,
                total: action.payload.total
            })

            state.history = {
                id: uuid.v4(),
                date: Date().toString(),
                items: action.payload.items,
                total: action.payload.total
            }
        }
    }
});

export const { placeOrders } = ordersSlice.actions;
export default ordersSlice.reducer;