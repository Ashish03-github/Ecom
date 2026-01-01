export type AuthState = {
    token: string;
    loading: boolean;
    isAuthenticated: boolean;
    error?: string;
}