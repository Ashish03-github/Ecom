import { View, FlatList, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import OrderHistoryCard from './OrderHistoryCard';
import { clearStorage, getDataFromStorage } from '@/services/app.storage';
import { ordersStorageKey } from '../constants/orders.storage.keys';
import { OrderHistoryCardItem } from '../types/components.types';
import useTheme from '@/common/hooks/useTheme';
import { ThemeColors } from '@/theme/theme.colors';
import { ThemeFonts } from '@/theme/theme.fonts';
import { normalizeFonts } from '@/theme/theme.scale';

const OrdersHistoryList = () => {
  const [orders, setOrders] = useState<OrderHistoryCardItem[]>([]);
  const { Colors, Fonts } = useTheme();
  const styles = React.useMemo(() => stylesFn(Colors, Fonts), [Fonts, Colors]);
  useEffect(() => {
    fetchOrderHistory();
  }, []);

  const fetchOrderHistory = async () => {
    const orderHistoryResp = await getDataFromStorage(
      ordersStorageKey.orderHistory,
    );
    setOrders(orderHistoryResp?.data || []);
  };

  if (orders.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No order history available.</Text>
      </View>
    );
  }

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
      data={orders?.reverse()}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      keyExtractor={(_, i) => i.toString()}
    />
  );
};

const stylesFn = (Colors: ThemeColors, Fonts: ThemeFonts) =>
  StyleSheet.create({
    emptyContainer: {
      width: 1000,
      height: 1000,
      justifyContent: 'center',
      alignItems: 'center',
    },
    emptyText: {
      ...Fonts.font500,
      fontSize: normalizeFonts(12),
    },
  });

export default OrdersHistoryList;
