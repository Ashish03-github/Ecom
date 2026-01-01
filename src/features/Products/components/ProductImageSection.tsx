import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import AppIcon from '@/common/components/AppIcon';
import useTheme from '@/common/hooks/useTheme';
import { normalizeFonts, scale } from '@/theme/theme.scale';
import { ThemeColors } from '@/theme/theme.colors';
import { ThemeFonts } from '@/theme/theme.fonts';

const ProductImageSection = () => {
  const { Colors, Fonts } = useTheme();
  const styles = React.useMemo(() => styleFn(Colors, Fonts), [Colors, Fonts]);

  return (
    <View style={styles.container}>
      <FastImage
        style={styles.image}
        source={{
          uri: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />

      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>5.5</Text>
        <AppIcon type="Ionicons" name="star" color="#fcc035" size={12} />
        <Text style={styles.separator}>|</Text>
        <Text style={styles.ratingCount}>300</Text>
      </View>
    </View>
  );
};

const styleFn = (Colors: ThemeColors, Fonts: ThemeFonts) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: '45%',
      padding: scale(12),
      borderRadius: scale(12),
      backgroundColor: Colors.skyblueLight,
    },
    image: {
      flex: 1,
      borderRadius: scale(12),
    },
    ratingContainer: {
      position: 'absolute',
      top: scale(16),
      right: scale(16),
      flexDirection: 'row',
    },
    ratingText: {
      ...Fonts.font600,
      fontSize: normalizeFonts(12),
      color: Colors.primary,
      marginRight: scale(3),
    },
    ratingCount: {
      ...Fonts.font600,
      fontSize: normalizeFonts(12),
      color: Colors.grey,
    },
    separator: {
      fontSize: normalizeFonts(12),
      color: Colors.grey,
      marginHorizontal: scale(4),
    },
  });

export default ProductImageSection;
