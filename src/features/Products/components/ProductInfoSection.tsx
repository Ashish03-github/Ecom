import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import useTheme from '@/common/hooks/useTheme';
import { ThemeColors } from '@/theme/theme.colors';
import { ThemeFonts } from '@/theme/theme.fonts';
import { scale } from '@/theme/theme.scale';
import AppIcon from '@/common/components/AppIcon';

interface ProductInfoSectionProps {
  title: string;
  price: number;
  description: string;
  category: string;
  rating?: number;
}

const ProductInfoSection = ({
  title,
  price,
  description,
  category,
  rating = 0,
}: ProductInfoSectionProps) => {
  const { Colors, Fonts } = useTheme();
  const styles = React.useMemo(() => styleFn(Colors, Fonts), [Colors, Fonts]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <AppIcon name="indian-rupee-sign" size={20} color={Colors.primary} />
          <Text style={styles.price}>{price.toFixed(2)}</Text>
        </View>
      </View>

      <Text style={styles.category}>{category}</Text>

      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
    </View>
  );
};

const styleFn = (Colors: ThemeColors, Fonts: ThemeFonts) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: scale(16),
    },
    header: {
      marginBottom: scale(0),
    },
    title: {
      ...Fonts.font600,
      fontSize: scale(16),
      color: Colors.black,
    },
    price: {
      ...Fonts.font600,
      fontSize: scale(22),
      marginLeft: scale(2),
      color: Colors.primary,
    },
    categoryContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    category: {
      ...Fonts.font400,
      fontSize: scale(12),
      color: Colors.grey,
      textTransform: 'capitalize',
      marginRight: scale(12),
    },
    descriptionContainer: {
      marginTop: scale(16),
    },
    descriptionTitle: {
      ...Fonts.font600,
      fontSize: scale(14),
      color: Colors.black,
      marginBottom: scale(8),
    },
    descriptionText: {
      ...Fonts.font400,
      fontSize: scale(12),
      color: Colors.grey,
      lineHeight: scale(20),
    },
  });

export default ProductInfoSection;
