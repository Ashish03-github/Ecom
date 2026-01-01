import { combineReducers } from "@reduxjs/toolkit";
import authReducer from '@/features/auth/store/auth.slice'
import cartReducer from "@/features/Cart/store/cart.slice"
import { api } from "@/services/baseApi";

const rootReducers = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    orders: {},
    products: {},
    [api.reducerPath]: api.reducer
})

export default rootReducers;