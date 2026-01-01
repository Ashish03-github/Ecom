import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import AppContainer from '@/common/components/AppContainer';
import { ThemeColors } from '@/theme/theme.colors';
import { ThemeFonts } from '@/theme/theme.fonts';
import useTheme from '@/common/hooks/useTheme';
import { normalizeFonts, scale } from '@/theme/theme.scale';
import CartItemsList from '../components/CartItemsList';

const Cart = () => {
  const { Colors, Fonts } = useTheme();
  const styles = React.useMemo(() => stylesFn(Colors, Fonts), [Fonts, Colors]);

  return (
    <AppContainer screenHeadings="My Cart" buttonLabel={'Place Order'}>
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
