import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { ThemeColors } from '@/theme/theme.colors';
import { ThemeFonts } from '@/theme/theme.fonts';
import useTheme from '../hooks/useTheme';
import { normalizeFonts, scale, scaleVertical } from '@/theme/theme.scale';
import AppIcon from './AppIcon';

type AppHeaderProps = {};

const AppHeader = () => {
  const { Colors, Fonts } = useTheme();
  const styles = React.useMemo(() => stylesFn(Colors, Fonts), [Colors, Fonts]);
  return (
    <View style={styles.headerContainer}>
      <AppIcon name="arrow-left" size={20} />
      <Text style={styles.heading}>Products</Text>
    </View>
  );
};

const stylesFn = (Colors: ThemeColors, Fonts: ThemeFonts) =>
  StyleSheet.create({
    headerContainer: {
      width: '100%',
      flexDirection: 'row',
      height: scaleVertical(60),
      backgroundColor: 'yellow',
      //   justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      ...Fonts.font600,
      fontSize: normalizeFonts(22),
      color: Colors.black,
      marginLeft: scale(10),
    },
  });
export default AppHeader;
