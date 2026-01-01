import React, { useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';
import AppContainer from '@/common/components/AppContainer';
import ProductImageSection from '../components/ProductImageSection';
import ProductInfoSection from '../components/ProductInfoSection';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Product } from '../types/product.type';
import { scale } from '@/theme/theme.scale';
import { useAppDispatch, useAppSelctor } from '@/store/hooks';
import { addToCart } from '@/features/Cart/store/cart.slice';
import LoginModal from '@/features/auth/screens/LoginModal';
import { logIn } from '@/features/auth/store/auth.slice';

type RootStackParamList = {
  ProductDetails: { product: Product };
  CartScreen: { product: Product };
};

type ProductDetailsRouteProp = RouteProp<RootStackParamList, 'ProductDetails'>;
type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ProductDetails'
>;

type AuthState = {
  email: string;
  password: string;
  error: string;
};

const ProductDetails = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<ProductDetailsRouteProp>();
  const { product } = route.params;

  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelctor(state => state.auth.isAuthenticated);
  const [showLoginModal, setShowLoginModal] = React.useState(false);
  const [authState, setAuthState] = useState<AuthState>({
    email: '',
    password: '',
    error: '',
  });

  const navigateToCart = () => {
    if (!isAuthenticated) {
      setShowLoginModal(true);
      return;
    }

    dispatch(addToCart(product));
    navigation.navigate('CartScreen', { product });
  };

  const onLoginPress = useCallback(() => {
    // console.log('Is Authenticated =>', {
    //   email: authState.email,
    //   password: authState.password,
    // });
    dispatch(logIn({ email: authState.email, password: authState.password }));
    if (isAuthenticated) {
      setShowLoginModal(false);
      dispatch(addToCart(product));
      navigation.navigate('CartScreen', { product });
    }
  }, [dispatch, authState.email, authState.password, isAuthenticated, product]);

  return (
    <>
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

      <LoginModal
        visible={showLoginModal}
        authState={authState}
        setAuthState={setAuthState}
        onClose={() => setShowLoginModal(false)}
        onLoginPress={onLoginPress}
      />
    </>
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
