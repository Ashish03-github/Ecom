import { View, FlatList, StyleSheet } from 'react-native';
import React, { useCallback } from 'react';
import ProductCard from './ProductCard';

const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ProductList = () => {
  const renderItem = ({ item }: { item: number }) => {
    return <ProductCard />;
  };

  return (
    <FlatList
      data={DATA}
      numColumns={2}
      keyExtractor={item => item.toString()}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
      columnWrapperStyle={styles.row}
      renderItem={renderItem}
    />
  );
};

export default ProductList;

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 16,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
});
