import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./auth.type";

const initialState: AuthState = {
    token: "",
    loading: false,
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logIn: (state, action) => {
            state.isAuthenticated = true;
        },
        logOut: (state, action) => {
            state.isAuthenticated = false;
        }
    }
})

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer