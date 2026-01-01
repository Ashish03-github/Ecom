import { ButtonProps, StyleProp, ViewProps, ViewStyle } from "react-native";
import { IconProps } from "react-native-vector-icons/Icon";
export interface AppButtonProps extends ButtonProps {
    title: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
}

type IconType = 'FontAwesome6' | 'Octicons' | 'Ionicons';
export interface AppIconProps extends IconProps {
    name: string;
    size?: number;
    color?: string;
    type?: IconType;
    onPress?: () => void;
}


export interface AppHeaderProps {
    heading: string;
    canGoBack?: boolean;
};