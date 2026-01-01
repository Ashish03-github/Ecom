import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import AppButton from '@/common/components/AppButton';
import AppContainer from '@/common/components/AppContainer';
import { ThemeColors } from '@/theme/theme.colors';
import { ThemeFonts } from '@/theme/theme.fonts';
import useTheme from '@/common/hooks/useTheme';
import ProductCard from '../components/ProductCard';
import ProductList from '../components/ProductList';

const Products = () => {
  const { Colors, Fonts } = useTheme();
  const styles = React.useMemo(() => stylesFn(Colors, Fonts), [Fonts, Colors]);
  return (
    <AppContainer buttonLabel={null} screenHeadings="Products">
      <View style={styles.container}>
        <ProductList />
      </View>
    </AppContainer>
  );
};

const stylesFn = (Colors: ThemeColors, Fonts: ThemeFonts) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
  });

export default Products;
