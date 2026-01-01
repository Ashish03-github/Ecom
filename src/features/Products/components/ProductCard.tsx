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

const ProductCard = ({ item }: any) => {
  const { Colors, Fonts } = useTheme();
  const styles = React.useMemo(() => stylesFn(Colors, Fonts), [Colors, Fonts]);
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate('ProductDetails', { product: item })}
      style={styles.card}
    >
      <ProductImage
        image={
          item?.image ||
          'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png'
        }
      />

      <View style={{ flex: 1 }}>
        <ProductItemHeader
          title={item?.title ? item.title : 'Product Title'}
          // rating={item.rating?.rate}
          rating={5.5}
        />
        <ProductMeta category={"Men's category"} price={90.0} />
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
