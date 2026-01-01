import { getDataFromStorage } from "@/services/app.storage"
import { authStorageKeys } from "../constants/auth.storage.keys"

export const checkAuthenticationStatus = async () => {
    const reponse = await getDataFromStorage(authStorageKeys.authStatus)
    return {
        ...reponse
    }
}