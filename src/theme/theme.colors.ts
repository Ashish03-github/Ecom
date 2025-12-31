
const colors = {
    light: {
        primary: "#5d52d2",
        white: "#ffffff",
        black: "#000000",
        secondary: "",
    },
    dark: {
        primary: "#5d52d2",
        white: "#ffffff",
        black: "#000000",
        secondary: "",
    }
}

export type ThemeColors = typeof colors[keyof typeof colors];
export default colors;