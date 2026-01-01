import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AppContainer from '@/common/components/AppContainer';
import ProductImageSection from '../components/ProductImageSection';
import ProductInfoSection from '../components/ProductInfoSection';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Product } from '../types/product.type';
import { scale } from '@/theme/theme.scale';
import useTheme from '@/common/hooks/useTheme';

type RootStackParamList = {
  ProductDetails: { product: Product };
  CartScreen: { product: Product };
  // Add other screen params as needed
};

type ProductDetailsRouteProp = RouteProp<RootStackParamList, 'ProductDetails'>;
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProductDetails'>;

const ProductDetails = () => {
  const { Colors } = useTheme();
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<ProductDetailsRouteProp>();
  const { product } = route.params;

  const navigateToCart = (): void => {
    navigation.navigate('CartScreen', { product });
  };

  if (!product) {
    return (
      <View style={[styles.container, { backgroundColor: Colors.white }]}>
        <Text style={[styles.errorText, { color: 'red' }]}>
          Product not found
        </Text>
      </View>
    );
  }

  return (
    <AppContainer
      buttonLabel="Add To Cart"
      onPress={navigateToCart}
      screenHeadings="Product Details"
    >
      <ProductImageSection 
        image={product.image} 
        rating={product.rating.rate}
        ratingCount={product.rating.count}
      />
      <ProductInfoSection 
        title={product.title}
        price={product.price}
        description={product.description}
        rating={product.rating.rate}
        category={product.category}
      />
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: scale(16),
  },
  errorText: {
    fontSize: scale(16),
    textAlign: 'center',
  },
});

export default ProductDetails;
