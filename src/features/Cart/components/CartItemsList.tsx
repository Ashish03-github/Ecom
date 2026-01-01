import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { useAppSelctor } from '@/store/hooks';
import { Product } from '@/features/Products/types/product.type';
import CartItemCard from './CartItemCard';
import CartTotal from './CartTotal';
import { ThemeColors } from '@/theme/theme.colors';
import { ThemeFonts } from '@/theme/theme.fonts';
import useTheme from '@/common/hooks/useTheme';
import { normalizeFonts } from '@/theme/theme.scale';

const CartItemsList = () => {
  const { cartData } = useAppSelctor(state => state.cart);
  const { Colors, Fonts } = useTheme();
  const styles = React.useMemo(() => stylesFn(Colors, Fonts), [Colors, Fonts]);

  if (cartData.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No products added yet in the cart.</Text>
      </View>
    );
  }

  const renderItem = ({ item, index }: { item: Product; index: number }) => {
    return <CartItemCard key={index.toString()} product={item} />;
  };

  return (
    <FlatList
      data={cartData}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.toString()}
      ListFooterComponent={cartData.length > 0 ? <CartTotal /> : null}
    />
  );
};

const stylesFn = (Colors: ThemeColors, Fonts: ThemeFonts) =>
  StyleSheet.create({
    emptyContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    emptyText: {
      ...Fonts.font500,
      fontSize: normalizeFonts(14),
    },
  });

export default CartItemsList;
