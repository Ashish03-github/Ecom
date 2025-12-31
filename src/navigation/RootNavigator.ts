import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigator from './AppNavigator';

const RootNavigatior = createNativeStackNavigator({
    screenOptions: {
        headerShown: false,
    },
    screens: {
        AppNavigator: AppNavigator,
    },
});


export default RootNavigatior;