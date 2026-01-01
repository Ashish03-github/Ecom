import React from 'react';
import { Text, StyleSheet } from 'react-native';
import useTheme from '@/common/hooks/useTheme';
import { normalizeFonts, scale } from '@/theme/theme.scale';
import { ThemeColors } from '@/theme/theme.colors';
import { ThemeFonts } from '@/theme/theme.fonts';

const ProductDescription = () => {
  const { Colors, Fonts } = useTheme();
  const styles = React.useMemo(() => styleFn(Colors, Fonts), [Colors, Fonts]);

  return (
    <Text style={styles.text}>
      Your perfect pack for everyday use and walks in the forest. Stash your
      laptop (up to 15 inches) in the padded sleeve, your everyday
    </Text>
  );
};

const styleFn = (_Colors: ThemeColors, Fonts: ThemeFonts) =>
  StyleSheet.create({
    text: {
      ...Fonts.font500,
      fontSize: normalizeFonts(12),
      paddingTop: scale(5),
    },
  });

export default ProductDescription;
