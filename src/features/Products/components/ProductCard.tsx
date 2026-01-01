import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import { normalizeFonts, scale, scaleVertical } from '@/theme/theme.scale';
import useTheme from '@/common/hooks/useTheme';
import { ThemeColors } from '@/theme/theme.colors';
import { ThemeFonts } from '@/theme/theme.fonts';
import FastImage from 'react-native-fast-image';
import AppIcon from '@/common/components/AppIcon';
import { useNavigation } from '@react-navigation/native';

const ProductCard = () => {
  const { Colors, Fonts } = useTheme();
  const styles = React.useMemo(() => stylesFn(Colors, Fonts), [Fonts, Colors]);
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('ProductDetails')}
      style={styles.card}
    >
      <FastImage
        style={styles.imageStyle}
        source={{
          uri: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View style={{ flex: 1 }}>
        <View style={styles.productNameAndRatingContainer}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.productName}
          >
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptop
          </Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>5.5</Text>
            <AppIcon type="Ionicons" name="star" color="#fcc035" size={10} />
          </View>
        </View>
        <View style={styles.productCategoryAndPriceContainer}>
          <View>
            <Text style={styles.productCategory}>men's clothing</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <AppIcon name="indian-rupee-sign" size={13} />
              <Text style={styles.productPrice}> 90.00</Text>
            </View>
          </View>
          {/* <TouchableOpacity activeOpacity={0.8} style={styles.addToCartButton}>
            <AppIcon name="plus" color={Colors.white} size={14} />
          </TouchableOpacity> */}
        </View>
      </View>
    </Pressable>
  );
};
const stylesFn = (Colors: ThemeColors, Fonts: ThemeFonts) =>
  StyleSheet.create({
    card: {
      width: '47%',
      height: scaleVertical(180),
      borderRadius: scale(12),
      padding: scale(12),
      paddingBottom: scale(8),
      backgroundColor: Colors.skyblueLight,
    },
    imageStyle: {
      width: '100%',
      height: scaleVertical(90),
      borderRadius: scale(12),
    },
    productNameAndRatingContainer: {
      flex: 0.3,
      paddingTop: scale(8),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
    productName: {
      ...Fonts.font500,
      width: '75%',
      fontSize: normalizeFonts(12),
    },
    productPrice: {
      ...Fonts.font600,
      marginTop: scale(2),
      fontSize: normalizeFonts(20),
    },
    productCategory: {
      ...Fonts.font500,
      fontSize: normalizeFonts(10),
    },
    ratingContainer: { flexDirection: 'row' },
    rating: {
      ...Fonts.font500,
      fontSize: normalizeFonts(10),
      marginRight: scale(2),
    },
    productCategoryAndPriceContainer: {
      flex: 0.7,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
    addToCartButton: {
      width: scale(34),
      height: scale(34),
      borderRadius: scale(34),
      backgroundColor: Colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default ProductCard;
