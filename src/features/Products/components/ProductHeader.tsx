import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppIcon from '@/common/components/AppIcon';
import useTheme from '@/common/hooks/useTheme';
import { normalizeFonts, scale } from '@/theme/theme.scale';
import { ThemeColors } from '@/theme/theme.colors';
import { ThemeFonts } from '@/theme/theme.fonts';

const ProductHeader = () => {
  const { Colors, Fonts } = useTheme();
  const styles = React.useMemo(() => styleFn(Colors, Fonts), [Colors, Fonts]);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
      </Text>

      <Text style={styles.category}>men's clothing</Text>

      <View style={styles.priceContainer}>
        <AppIcon name="indian-rupee-sign" size={16} />
        <Text style={styles.price}>109.95</Text>
      </View>
    </View>
  );
};

const styleFn = (Colors: ThemeColors, Fonts: ThemeFonts) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
    },
    name: {
      ...Fonts.font600,
      fontSize: normalizeFonts(14),
    },
    category: {
      ...Fonts.font600,
      fontSize: normalizeFonts(12),
      color: Colors.grey,
    },
    priceContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    price: {
      ...Fonts.font700,
      marginLeft: scale(5),
      marginTop: scale(5),
      fontSize: normalizeFonts(26),
    },
  });

export default ProductHeader;
