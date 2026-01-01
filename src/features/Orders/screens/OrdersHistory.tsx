import { View, Alert } from 'react-native';
import React, { useState } from 'react';
import AppContainer from '@/common/components/AppContainer';
import useTheme from '@/common/hooks/useTheme';
import OrdersHistoryList from '../components/OrdersHistoryList';
import { clearStorage } from '@/services/app.storage';
import { useNavigation } from '@react-navigation/native';
import RNRestart from 'react-native-restart';

const OrdersHistory = () => {
  const navigation = useNavigation();

  const clearHistoryPress = async () => {
    await clearStorage();
    Alert.alert('Info', 'You have to start the process again.', [
      {
        text: 'ok',
        onPress: () => {
          navigation.navigate('ProductsScreen');
          RNRestart.restart();
        },
      },
    ]);
  };
  return (
    <AppContainer
      buttonLabel={'Reset'}
      onPress={clearHistoryPress}
      screenHeadings="Orders History"
    >
      <View style={{ flex: 1 }}>
        <OrdersHistoryList />
      </View>
    </AppContainer>
  );
};

export default OrdersHistory;
