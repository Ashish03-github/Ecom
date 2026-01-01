import React from 'react';
import AppContainer from '@/common/components/AppContainer';
import useTheme from '@/common/hooks/useTheme';
import { ThemeColors } from '@/theme/theme.colors';
import { ThemeFonts } from '@/theme/theme.fonts';
import { StyleSheet } from 'react-native';
import ProductImageSection from '../components/ProductImageSection';
import ProductInfoSection from '../components/ProductInfoSection';

const ProductDetails = () => {
  const { Colors, Fonts } = useTheme();
  const styles = React.useMemo(() => styleFn(Colors, Fonts), [Colors, Fonts]);

  return (
    <AppContainer buttonLabel="Add To Cart" screenHeadings="Details">
      <ProductImageSection />
      <ProductInfoSection />
    </AppContainer>
  );
};

const styleFn = (_Colors: ThemeColors, _Fonts: ThemeFonts) =>
  StyleSheet.create({});

export default ProductDetails;
