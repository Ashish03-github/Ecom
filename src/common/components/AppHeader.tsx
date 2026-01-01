import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { ThemeColors } from '@/theme/theme.colors';
import { ThemeFonts } from '@/theme/theme.fonts';
import useTheme from '../hooks/useTheme';
import { normalizeFonts, scale, scaleVertical } from '@/theme/theme.scale';
import AppIcon from './AppIcon';
import { AppHeaderProps } from './components.type';
import { useNavigation } from '@react-navigation/native';

const AppHeader: React.FC<AppHeaderProps> = ({ heading }) => {
  const { Colors, Fonts } = useTheme();
  const navigation = useNavigation();
  const styles = React.useMemo(() => stylesFn(Colors, Fonts), [Colors, Fonts]);
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.headerContainer}>
      <AppIcon onPress={goBack} name="arrow-left" size={20} />
      <Text style={styles.heading}>{heading}</Text>
    </View>
  );
};

const stylesFn = (Colors: ThemeColors, Fonts: ThemeFonts) =>
  StyleSheet.create({
    headerContainer: {
      width: '100%',
      flexDirection: 'row',
      height: scaleVertical(60),
      alignItems: 'center',
    },
    heading: {
      ...Fonts.font600,
      fontSize: normalizeFonts(22),
      color: Colors.black,
      marginLeft: scale(16),
    },
  });
export default AppHeader;
