import useTheme from '@/common/hooks/useTheme';
import { ThemeColors } from '@/theme/theme.colors';
import { ThemeFonts } from '@/theme/theme.fonts';
import { normalizeFonts, scale, scaleVertical } from '@/theme/theme.scale';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';

interface OrderImageProps {
  uri: string;
}

const OrderImage = ({ uri }: OrderImageProps) => {
  const { Colors, Fonts } = useTheme();
  const styles = React.useMemo(() => stylesFn(Colors, Fonts), [Fonts, Colors]);
  return (
    <View style={styles.orderImageContainer}>
      <FastImage
        style={styles.image}
        source={{
          uri: uri,
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};
export default OrderImage;
const stylesFn = (Colors: ThemeColors, Fonts: ThemeFonts) =>
  StyleSheet.create({
    orderHistoryCard: {
      width: '100%',
      height: scaleVertical(140),
      padding: scale(12),
      flexDirection: 'row',
      // backgroundColor: 'red',
    },
    image: {
      width: '100%',
      height: scaleVertical(70),
      borderRadius: scale(12),
    },
    orderImageContainer: {
      flex: 0.3,
      padding: scale(12),
      borderRadius: scale(12),
      backgroundColor: Colors.skyblueLight,
    },
    orderDetails: {
      flex: 0.7,
      // backgroundColor: 'yellow',
    },
    orderNameAndOrderIdContainer: {
      flex: 0.5,
      padding: 10,
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
      fontSize: normalizeFonts(24),
      color: Colors.primary,
      marginLeft: scale(5),
    },
    orderIdText: {
      ...Fonts.font400,
      fontSize: normalizeFonts(10),
    },
    dateText: {
      ...Fonts.font400,
      fontSize: normalizeFonts(10),
      marginTop: scale(5),
    },
  });
