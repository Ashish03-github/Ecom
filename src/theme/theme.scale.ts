import { Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("screen").width
const SCREEN_HEIGHT = Dimensions.get('screen').height

const guidelineBaseWidth = 390;
const guidelineBaseHeight = 840;

export const scale = (size: number) => {
    const scaledValue = (SCREEN_WIDTH / guidelineBaseWidth) * size;
    return scaledValue;
}
export const scaleVertical = (size: number) => {
    const scaledHeight = (SCREEN_HEIGHT / guidelineBaseHeight) * size;
    return scaledHeight;
}

export const normalizeFonts = (size: number) => {
    const newSize = scale(size) * 0.8;
    return newSize
}