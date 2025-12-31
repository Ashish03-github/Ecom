import { ButtonProps, StyleProp, ViewProps } from "react-native";

export interface AppButtonProps extends ButtonProps {
    title: string;
    onPress: () => void;
    style?: StyleProp<ViewProps>;
}
