import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { createStaticNavigation } from '@react-navigation/native';
import RootNavigatior from './navigation/RootNavigator';
import { StatusBar } from 'react-native';
import { Product } from './features/Products/types/product.type';

export type RootStackParamList = {
  Products: { product: Product };
  ProductDetails: { productId: string };
  Cart: undefined;
};

const Navigation = createStaticNavigation(RootNavigatior);
const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle={'dark-content'} />
      <Navigation />
    </Provider>
  );
};

export default App;
