import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/features/Products/types/product.type';

interface OrdersState {
    lastOrderId: string | null;
}

const initialState: OrdersState = {
    lastOrderId: null,
};

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        placeOrders(
            state,
            action: PayloadAction<{ orderId: string }>
        ) {
            state.lastOrderId = action.payload.orderId;
        },
    },
});

export const { placeOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
