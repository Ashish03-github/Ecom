import useTheme from '@/common/hooks/useTheme';
import { ThemeColors } from '@/theme/theme.colors';
import { ThemeFonts } from '@/theme/theme.fonts';
import { scale, scaleVertical } from '@/theme/theme.scale';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import OrderImage from './OrderImage';
import OrderDetails from './OrderDetails';
import { OrderHistoryCardItem } from '../types/components.types';

const OrderHistoryCard = ({
  data,
  key,
}: {
  data: OrderHistoryCardItem;
  key: string;
}) => {
  const { Colors, Fonts } = useTheme();
  const styles = React.useMemo(() => stylesFn(Colors, Fonts), [Fonts, Colors]);
  return (
    <View key={key} style={styles.orderHistoryCard}>
      <OrderImage uri={data.image} />
      <OrderDetails
        date={data.date}
        title={data.title}
        price={data.price}
        orderId={data.orderId}
        category={data.category}
      />
    </View>
  );
};

export default OrderHistoryCard;

const stylesFn = (Colors: ThemeColors, Fonts: ThemeFonts) =>
  StyleSheet.create({
    orderHistoryCard: {
      width: '100%',
      height: scaleVertical(100),
      flexDirection: 'row',
      marginBottom: scale(16),
    },
  });
