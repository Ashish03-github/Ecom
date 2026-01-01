import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import AppIcon from '@/common/components/AppIcon';
import useTheme from '@/common/hooks/useTheme';
import { normalizeFonts, scale } from '@/theme/theme.scale';

interface Props {
  category: string;
  price: number;
}

const ProductMeta = ({ category, price }: Props) => {
  const { Colors, Fonts } = useTheme();

  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.category, Fonts.font500]}>{category}</Text>

        <View style={styles.priceRow}>
          <AppIcon name="indian-rupee-sign" size={13} />
          <Text style={[styles.price, Fonts.font600]}>
            {Number(price).toFixed(2)}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.addBtn, { backgroundColor: Colors.primary }]}
      >
        <AppIcon name="plus" color={Colors.white} size={10} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  category: {
    fontSize: normalizeFonts(10),
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: normalizeFonts(20),
    marginLeft: scale(2),
  },
  addBtn: {
    width: scale(30),
    height: scale(30),
    borderRadius: scale(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductMeta;
