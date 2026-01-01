import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import useTheme from '../hooks/useTheme';
import { ThemeColors } from '@/theme/theme.colors';
import { ThemeFonts } from '@/theme/theme.fonts';
import { AppButtonProps } from './components.type';
import { normalizeFonts, scale } from '@/theme/theme.scale';

const AppButton: React.FC<AppButtonProps> = ({
  title = 'Continue',
  onPress,
  style,
}) => {
  const { Fonts, Colors } = useTheme();
  const styles = React.useMemo(() => styleFn(Colors, Fonts), [Fonts, Colors]);
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.buttonContainer, style]}
    >
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styleFn = (Colors: ThemeColors, Fonts: ThemeFonts) =>
  StyleSheet.create({
    buttonContainer: {
      width: '100%',
      minHeight: scale(44),
      borderRadius: scale(100),
      backgroundColor: Colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonTitle: {
      ...Fonts.font500,
      fontSize: normalizeFonts(14),
      color: Colors.white,
    },
  });

export default AppButton;
