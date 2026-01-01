import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React, { useCallback } from 'react';
import AppContainer from '@/common/components/AppContainer';
import { ThemeColors } from '@/theme/theme.colors';
import { ThemeFonts } from '@/theme/theme.fonts';
import useTheme from '@/common/hooks/useTheme';
import { normalizeFonts, scale } from '@/theme/theme.scale';
import CartItemsList from '../components/CartItemsList';
import { useAppSelctor } from '@/store/hooks';
import { useDispatch } from 'react-redux';
import { placeOrders } from '@/features/Orders/store/orders.slice';
import { Product } from '@/features/Products/types/product.type';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/navigation/types';
import { clearCart } from '../store/cart.slice';
import { saveOrderToStorage } from '@/features/Orders/services/order.storage';

const Cart = () => {
  const { Colors, Fonts } = useTheme();
  const styles = React.useMemo(() => stylesFn(Colors, Fonts), [Fonts, Colors]);
  const { cartData } = useAppSelctor(state => state.cart);
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const totalAmount = cartData.reduce(
    (total: number, item: Product) => total + item.price * (item.quantity || 1),
    0,
  );

  const onPlaceOrderPress = useCallback(async () => {
    const currentCartData = [...cartData];

    if (currentCartData.length === 0) {
      Alert.alert(
        'Alert',
        'Cannot place order as cart is empty',
        [{ text: 'OK' }],
        { cancelable: true },
      );
      return;
    }

    try {
      dispatch(clearCart());
      const orderId = await saveOrderToStorage(currentCartData, totalAmount);
      dispatch(placeOrders({ orderId }));
      navigation.navigate('OrdersHistoryScreen');
    } catch (error) {
      console.error('Error placing order:', error);
      Alert.alert('Error', 'Failed to place order. Please try again.');
    }
  }, [dispatch, cartData]);

  return (
    <AppContainer
      screenHeadings="My Cart"
      buttonLabel={'Place Order'}
      onPress={onPlaceOrderPress}
    >
      <View style={styles.container}>
        <CartItemsList />
      </View>
    </AppContainer>
  );
};

const stylesFn = (Colors: ThemeColors, Fonts: ThemeFonts) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    priceContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    price: {
      ...Fonts.font600,
      marginLeft: scale(5),
      fontSize: normalizeFonts(20),
    },
    totalAmount: {
      ...Fonts.font600,
      textAlign: 'right',
      fontSize: normalizeFonts(20),
    },
    priceIconContainer: { flexDirection: 'row', alignItems: 'center' },
  });
export default Cart;
