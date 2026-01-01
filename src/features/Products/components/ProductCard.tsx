import { View, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import useTheme from '@/common/hooks/useTheme';
import { ThemeColors } from '@/theme/theme.colors';
import { ThemeFonts } from '@/theme/theme.fonts';
import { scale, scaleVertical } from '@/theme/theme.scale';
import { useNavigation } from '@react-navigation/native';

import ProductImage from './ProductImage';
import ProductItemHeader from './ProductItemHeader';
import ProductMeta from './ProductMeta';
import { Product } from '../types/product.type';

const ProductCard = ({ product, key }: { product: Product; key: string }) => {
  const { Colors, Fonts } = useTheme();
  const styles = React.useMemo(() => stylesFn(Colors, Fonts), [Colors, Fonts]);
  const navigation = useNavigation();

  return (
    <Pressable
      key={key}
      onPress={() => navigation.navigate('ProductDetails', { product: item })}
      style={styles.card}
    >
      <ProductImage image={product?.image} />

      <View style={{ flex: 1 }}>
        <ProductItemHeader title={product.title} rating={product.rating.rate} />
        <ProductMeta category={product.category} price={product.price} />
      </View>
    </Pressable>
  );
};

const stylesFn = (Colors: ThemeColors, Fonts: ThemeFonts) =>
  StyleSheet.create({
    card: {
      width: '47%',
      height: scaleVertical(180),
      borderRadius: scale(12),
      padding: scale(12),
      paddingBottom: scale(8),
      backgroundColor: Colors.skyblueLight,
    },
  });

export default ProductCard;
