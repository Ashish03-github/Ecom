import React from 'react';
import AppContainer from '@/common/components/AppContainer';
import ProductImageSection from '../components/ProductImageSection';
import ProductInfoSection from '../components/ProductInfoSection';
import { useNavigation } from '@react-navigation/native';

const ProductDetails = () => {
  const navigation = useNavigation();

  const navigateTo = () => {
    navigation.navigate('CartScreen');
  };

  return (
    <AppContainer
      buttonLabel="Add To Cart"
      onPress={navigateTo}
      screenHeadings="Details"
    >
      <ProductImageSection />
      <ProductInfoSection />
    </AppContainer>
  );
};

export default ProductDetails;
