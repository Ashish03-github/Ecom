import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./rootReducers";
import { api } from "@/services/baseApi";

export const store = configureStore({
    reducer: rootReducers,
    middleware: getDefaultMiddleware => (getDefaultMiddleware({
        serializableCheck: true,
        immutableCheck: true
    })).concat(api.middleware),
})