import colors from '@/theme/theme.colors'
import fonts from '@/theme/theme.fonts'
import { useColorScheme } from 'react-native'

const useTheme = () => {
    const colorScheme = useColorScheme()
    const isDarkMode = colorScheme === 'dark'
    const themeVariant = isDarkMode ? "dark" : "light";

    return {
        isDarkMode,
        Colors: colors[themeVariant],
        Fonts: fonts,
    };
}

export default useTheme