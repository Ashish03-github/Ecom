import { View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import OrderHistoryCard from './OrderHistoryCard';
import { clearStorage, getDataFromStorage } from '@/services/app.storage';
import { ordersStorageKey } from '../constants/orders.storage.keys';
import { OrderHistoryCardItem } from '../types/components.types';

const OrdersHistoryList = () => {
  const [orders, setOrders] = useState<OrderHistoryCardItem[]>([]);

  useEffect(() => {
    fetchOrderHistory();
  }, []);

  const fetchOrderHistory = async () => {
    const orderHistoryResp = await getDataFromStorage(
      ordersStorageKey.orderHistory,
    );

    setOrders(orderHistoryResp.data);
  };

  const renderItem = ({
    item,
    index,
  }: {
    item: OrderHistoryCardItem;
    index: number;
  }) => {
    return <OrderHistoryCard key={index.toString()} data={item} />;
  };

  return (
    <FlatList
      data={orders}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      keyExtractor={(_, i) => i.toString()}
    />
  );
};

export default OrdersHistoryList;
