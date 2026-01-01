import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import AppIcon from '@/common/components/AppIcon';
import useTheme from '@/common/hooks/useTheme';
import { normalizeFonts, scale } from '@/theme/theme.scale';

interface Props {
  title: string;
  rating: number;
}

const ProductItemHeader = ({ title, rating }: Props) => {
  const { Fonts } = useTheme();

  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={[styles.title, Fonts.font500]}>
        {title}
      </Text>

      <View style={styles.ratingContainer}>
        <Text style={[styles.rating, Fonts.font500]}>{rating}</Text>
        <AppIcon name="star" type="Ionicons" color="#fcc035" size={10} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    paddingTop: scale(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  title: {
    width: '75%',
    fontSize: normalizeFonts(12),
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: normalizeFonts(10),
    marginRight: scale(2),
  },
});

export default ProductItemHeader;
