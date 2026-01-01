import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import AppIcon from '@/common/components/AppIcon';
import useTheme from '@/common/hooks/useTheme';
import { normalizeFonts, scale } from '@/theme/theme.scale';
import { ThemeColors } from '@/theme/theme.colors';
import { ThemeFonts } from '@/theme/theme.fonts';
import { OrderHistoryCardItem } from '../types/components.types';

type OrderDetailsProps = {
  title: string;
  price: number;
  date: string;
  category: string;
  orderId: string;
};
const OrderDetails = ({
  title,
  price,
  date,
  category,
  orderId,
}: OrderDetailsProps) => {
  const { Colors, Fonts } = useTheme();
  const styles = React.useMemo(() => stylesFn(Colors, Fonts), [Fonts, Colors]);
  return (
    <View style={styles.orderDetails}>
      <View style={styles.orderNameAndOrderIdContainer}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.orderName}>
          {title}
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.orderCategory}
        >
          {category}
        </Text>

        <View style={styles.priceContainer}>
          <AppIcon name="indian-rupee-sign" color={Colors.primary} size={14} />
          <Text style={styles.price}>{price.toFixed(2)}</Text>
        </View>

        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.orderIdText}>
          <Text style={styles.minorHeading}>Order Id:</Text> {orderId}
        </Text>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.dateText}>
          <Text style={styles.minorHeading}>Date:</Text>{' '}
          {new Date(date).toDateString()}
        </Text>
      </View>
    </View>
  );
};

export default OrderDetails;

const stylesFn = (Colors: ThemeColors, Fonts: ThemeFonts) =>
  StyleSheet.create({
    orderDetails: {
      flex: 0.7,
      paddingTop: scale(6),
    },
    orderNameAndOrderIdContainer: {
      flex: 0.5,
      paddingHorizontal: scale(10),
    },
    orderName: {
      ...Fonts.font600,
      fontSize: normalizeFonts(12),
    },
    orderCategory: {
      ...Fonts.font500,
      fontSize: normalizeFonts(12),
      color: Colors.grey,
    },
    priceContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    price: {
      ...Fonts.font600,
      fontSize: normalizeFonts(20),
      color: Colors.primary,
      marginLeft: scale(5),
    },
    minorHeading: {
      ...Fonts.font600,
    },
    orderIdText: {
      ...Fonts.font400,
      fontSize: normalizeFonts(10),
    },
    dateText: {
      ...Fonts.font400,
      fontSize: normalizeFonts(10),
      // marginTop: scale(5),
    },
  });
