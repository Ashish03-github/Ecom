import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import ProductCard from './ProductCard';
import { normalizeFonts, scale } from '@/theme/theme.scale';
import useTheme from '@/common/hooks/useTheme';
import { useGetProductsQuery } from '../services/product.api';
import { Product } from '../types/product.type';
import { ThemeColors } from '@/theme/theme.colors';
import { ThemeFonts } from '@/theme/theme.fonts';

const ProductList = () => {
  const { Colors, Fonts } = useTheme();
  const { data: products, isLoading, error } = useGetProductsQuery({});

  const styles = React.useMemo(() => stylesFn(Colors, Fonts), [Colors]);
  const renderItem = ({ item, index }: { item: Product; index: number }) => {
    return <ProductCard key={index.toString()} product={item} />;
  };

  if (isLoading) {
    return (
      <View
        style={[styles.loadingContainer, { backgroundColor: Colors.white }]}
      >
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }
  if (error) {
    return (
      <View style={[styles.errorContainer, { backgroundColor: Colors.white }]}>
        <Text style={[styles.errorText]}>
          Error loading products. Please try again later.
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={products}
      numColumns={2}
      renderItem={renderItem}
      columnWrapperStyle={styles.row}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.toString()}
      contentContainerStyle={styles.listContainer}
    />
  );
};

export default ProductList;

const stylesFn = (colors: ThemeColors, Fonts: ThemeFonts) =>
  StyleSheet.create({
    listContainer: {
      paddingBottom: scale(16),
    },
    row: {
      justifyContent: 'space-between',
      marginBottom: scale(16),
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    errorContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: scale(20),
    },
    errorText: {
      textAlign: 'center',
      ...Fonts.font500,
      fontSize: normalizeFonts(14),
    },
  });
