import { View, Text, ViewComponent, ViewProps, StyleSheet } from 'react-native';
import React from 'react';
import { ThemeColors } from '@/theme/theme.colors';
import { ThemeFonts } from '@/theme/theme.fonts';
import useTheme from '../hooks/useTheme';
import { scale } from '@/theme/theme.scale';
import AppButton from './AppButton';
import AppHeader from './AppHeader';

interface AppContainerProps extends ViewProps {
  children: React.ReactNode;
  buttonLabel?: string;
}

const AppContainer: React.FC<AppContainerProps> = ({
  children,
  buttonLabel,
}) => {
  const { Colors, Fonts } = useTheme();
  const styles = React.useMemo(() => stylesFn(Colors, Fonts), [Colors, Fonts]);
  return (
    <View style={styles.container}>
      <View style={styles.childrenContainer}>
        <AppHeader />
        {children}
      </View>
      {buttonLabel ? (
        <View style={styles.buttonContainer}>
          <AppButton title="Continue" onPress={() => {}} />
        </View>
      ) : null}
    </View>
  );
};
const stylesFn = (Colors: ThemeColors, Fonts: ThemeFonts) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: scale(16),
    },
    childrenContainer: {
      flex: 1,
      backgroundColor: 'red',
    },
    buttonContainer: {
      flex: 0.06,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default AppContainer;
