import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { normalizeFonts, scale } from '@/theme/theme.scale';
import { ThemeColors } from '@/theme/theme.colors';
import { ThemeFonts } from '@/theme/theme.fonts';
import useTheme from '@/common/hooks/useTheme';
import AppIcon from '@/common/components/AppIcon';

const CartTotal = () => {
  const { Colors, Fonts } = useTheme();
  const styles = React.useMemo(() => styleFn(Colors, Fonts), [Fonts, Colors]);
  return (
    <View style={styles.priceContainer}>
      <Text style={styles.totalAmount}>Total: </Text>
      <View style={styles.priceIconContainer}>
        <AppIcon
          name="indian-rupee-sign"
          style={{ marginBottom: scale(5) }}
          size={14}
        />
        <Text style={styles.price}>109.95</Text>
      </View>
    </View>
  );
};

const styleFn = (Colors: ThemeColors, Fonts: ThemeFonts) =>
  StyleSheet.create({
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

export default CartTotal;
