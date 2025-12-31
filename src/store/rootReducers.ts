import { combineReducers } from "@reduxjs/toolkit";
import authReducer from '@/features/auth/store/auth.slice'
import { api } from "@/services/baseApi";

const rootReducers = combineReducers({
    auth: authReducer,
    cart: {},
    orders: {},
    products: {},
    [api.reducerPath]: api.reducer
})

export default rootReducers;