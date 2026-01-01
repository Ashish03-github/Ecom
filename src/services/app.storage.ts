import AsyncStorage from "@react-native-async-storage/async-storage";

export const addDataToStorage = async (key: string, data: any) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(data))
        return {
            success: true,
            data: data
        }
    } catch (error) {
        return {
            success: false,
            data: data
        }
    }
}

export const getDataFromStorage = async (key: string) => {
    try {
        let data = await AsyncStorage.getItem(key)
        let parsedData = data ? JSON.parse(data) : null;
        return {
            success: true,
            data: parsedData,
            message: "data fetched successfully"
        }
    } catch (error) {
        return {
            success: false,
            data: null,
            message: "failed to fetch data"
        }
    }
}

export const clearStorage = async () => {
    await AsyncStorage.clear()
}