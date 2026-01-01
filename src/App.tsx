import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { createStaticNavigation } from '@react-navigation/native';
import RootNavigatior from './navigation/RootNavigator';
import { StatusBar } from 'react-native';

export type RootStackParamList = {
  Products: undefined;
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
