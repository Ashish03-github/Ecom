import React from 'react';
import { View, StyleSheet } from 'react-native';
import useTheme from '@/common/hooks/useTheme';
import { ThemeColors } from '@/theme/theme.colors';
import { ThemeFonts } from '@/theme/theme.fonts';
import { scale } from '@/theme/theme.scale';
import ProductHeader from './ProductHeader';
import ProductDescription from './ProductDescription';

const ProductInfoSection = () => {
  const { Colors, Fonts } = useTheme();
  const styles = React.useMemo(() => styleFn(Colors, Fonts), [Colors, Fonts]);

  return (
    <View style={styles.container}>
      <ProductHeader />
      <ProductDescription />
    </View>
  );
};

const styleFn = (_Colors: ThemeColors, _Fonts: ThemeFonts) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: scale(16),
    },
  });

export default ProductInfoSection;
