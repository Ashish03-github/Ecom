import { ProductDetailsScreen, ProductsListScreen } from "@/features/Products/screens";
import { createStackNavigator } from "@react-navigation/stack";

const AppNavigator = createStackNavigator({
    screenOptions: {
        headerShown: false
    },
    screens: {
        ProductsScreen: ProductsListScreen,
        ProductDetails: ProductDetailsScreen,
    },
});

export default AppNavigator;