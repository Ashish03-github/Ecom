import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./auth.type";

const initialState: AuthState = {
    token: "",
    loading: false,
    error: '',
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logIn: (state, action) => {
            const { email, password } = action.payload;
            if ((email === 'test@zignuts.com' || email === "practical@zignuts.com") && password === 'test@1234') {
                state.token = 'dummy_jwt_token';
                state.isAuthenticated = true;
                state.error = '';
            } else {
                state.error = 'Invalid email or password';
                state.isAuthenticated = false;
            }
            state.loading = false;
        },
        logOut: (state) => {
            state.token = '';
            state.isAuthenticated = false;
            state.error = '';
        },
    }
})

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer