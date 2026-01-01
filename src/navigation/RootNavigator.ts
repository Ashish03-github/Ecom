import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigator from './AppNavigator';
import { createStackNavigator } from '@react-navigation/stack';

const RootNavigatior = createNativeStackNavigator({
    screenOptions: {
        headerShown: false,
    },
    screens: {
        AppNavigator: AppNavigator,
    },
});

export default RootNavigatior;