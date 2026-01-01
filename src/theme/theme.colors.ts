
const colors = {
    light: {
        primary: "#5d52d2",
        white: "#ffffff",
        black: "#000000",
        skyblueLight: "#d9e9f9",
        grey: "#757474",
        lightGrey: "#AEACAC",
    },
    dark: {
        primary: "#5d52d2",
        white: "#ffffff",
        black: "#000000",
        skyblueLight: "#d9e9f9",
        grey: "#757474",
        lightGrey: "#AEACAC",
    }
}

export type ThemeColors = typeof colors[keyof typeof colors];
export default colors;