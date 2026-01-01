import React, { useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import AppIcon from '@/common/components/AppIcon';
import useTheme from '@/common/hooks/useTheme';
import { ThemeColors } from '@/theme/theme.colors';
import { ThemeFonts } from '@/theme/theme.fonts';
import { normalizeFonts, scale, scaleVertical } from '@/theme/theme.scale';
import { Product } from '@/features/Products/types/product.type';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../store/cart.slice';

interface CartItemCardProps {
  product: Product;
  key: string;
}
const CartItemCard: React.FC<CartItemCardProps> = ({ product, key }) => {
  const { Colors, Fonts } = useTheme();
  const styles = React.useMemo(() => stylesFn(Colors, Fonts), [Colors, Fonts]);
  const dispatch = useDispatch();

  const onRemovePress = useCallback(() => {
    dispatch(removeFromCart(product.id));
  }, []);

  return (
    <View key={key} style={styles.cartCard}>
      <View style={styles.imageWrapper}>
        <FastImage
          style={styles.productImage}
          source={{
            uri: product.image,
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />

        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>{product.rating.rate}</Text>
          <AppIcon type="Ionicons" name="star" color="#fcc035" size={10} />
        </View>
      </View>

      <View style={styles.contentWrapper}>
        <Text style={styles.productName} numberOfLines={2}>
          {product.title}
        </Text>

        <Text style={styles.productCategory} numberOfLines={1}>
          {product.category}
        </Text>

        <View style={styles.priceContainer}>
          <AppIcon name="indian-rupee-sign" size={16} />
          <Text style={styles.price}>{product.price.toFixed(2)}</Text>
        </View>

        <View style={styles.footerRow}>
          <View style={styles.quantityContainer}>
            <TouchableOpacity activeOpacity={0.8} style={styles.quantityButton}>
              <AppIcon name="minus" size={8} color={Colors.white} />
            </TouchableOpacity>

            <Text style={styles.productQuantity}>1</Text>

            <TouchableOpacity activeOpacity={0.8} style={styles.quantityButton}>
              <AppIcon name="plus" size={8} color={Colors.white} />
            </TouchableOpacity>
          </View>

          <AppIcon onPress={onRemovePress} name="trash" color="red" size={14} />
        </View>
      </View>
    </View>
  );
};

const stylesFn = (Colors: ThemeColors, Fonts: ThemeFonts) =>
  StyleSheet.create({
    cartCard: {
      width: '100%',
      height: scaleVertical(150),
      flexDirection: 'row',
      // backgroundColor: 'red',
      paddingLeft: 0,
      padding: scale(12),
      marginBottom: scale(10),
    },

    imageWrapper: {
      flex: 0.4,
      padding: scale(8),
      borderRadius: scale(10),
      backgroundColor: Colors.skyblueLight,
    },

    productImage: {
      width: '100%',
      height: '100%',
      borderRadius: scale(12),
    },

    ratingContainer: {
      position: 'absolute',
      top: scale(5),
      right: scale(5),
      flexDirection: 'row',
      alignItems: 'center',
    },

    ratingText: {
      ...Fonts.font600,
      fontSize: normalizeFonts(10),
      color: Colors.primary,
      marginRight: scale(3),
    },

    contentWrapper: {
      flex: 0.6,
      paddingHorizontal: scale(12),
    },

    productName: {
      ...Fonts.font600,
      fontSize: normalizeFonts(14),
    },

    productCategory: {
      ...Fonts.font500,
      fontSize: normalizeFonts(12),
      color: Colors.grey,
      marginTop: scale(2),
    },

    priceContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: scale(4),
    },

    price: {
      ...Fonts.font600,
      marginLeft: scale(5),
      fontSize: normalizeFonts(20),
    },

    footerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: scale(8),
    },

    quantityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    quantityButton: {
      width: scale(24),
      height: scale(24),
      borderRadius: scale(20),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.primary,
    },

    productQuantity: {
      ...Fonts.font600,
      fontSize: normalizeFonts(16),
      marginHorizontal: scale(10),
    },
  });

export default CartItemCard;
