import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./auth.type";
import { addDataToStorage, getDataFromStorage } from "@/services/app.storage";
import { authStorageKeys } from "../constants/auth.storage.keys";

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
        setAuthenticationStatus: (state, action) => {
            state.token = action.payload.token,
                state.isAuthenticated = action.payload.isAuthenticated
        },
        logIn: (state, action) => {
            const { email, password } = action.payload;
            if ((email === 'test@zignuts.com' || email === "practical@zignuts.com") && password === 'test@1234') {
                state.token = 'dummy_jwt_token';
                state.isAuthenticated = true;
                state.error = '';
                addDataToStorage(authStorageKeys.authStatus, {
                    token: state.token,
                    isAuthenticated: state.isAuthenticated
                }).then(() => console.log("User loggin successfully"))
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
            addDataToStorage(authStorageKeys.authStatus, {
                token: '',
                isAuthenticated: ''
            }).then(() => console.log("User logout successfully"))
        },
    }
})

export const { logIn, logOut, setAuthenticationStatus } = authSlice.actions;
export default authSlice.reducer