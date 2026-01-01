import { View, StyleSheet, ViewProps } from 'react-native';
import React from 'react';
import { ThemeColors } from '@/theme/theme.colors';
import { ThemeFonts } from '@/theme/theme.fonts';
import useTheme from '../hooks/useTheme';
import { scale } from '@/theme/theme.scale';
import AppButton from './AppButton';
import AppHeader from './AppHeader';

interface AppContainerProps extends ViewProps {
  children: React.ReactNode;
  buttonLabel?: string | null;
  screenHeadings: string;
  onPress?: () => void;
  isLoginModalVisible?: boolean;
  onModalClose?: () => void;
  canGoBack?: boolean;
}

const AppContainer: React.FC<AppContainerProps> = ({
  children,
  buttonLabel = 'continue',
  screenHeadings,
  onPress,
  canGoBack = true,
}) => {
  const { Colors, Fonts } = useTheme();
  const styles = React.useMemo(() => stylesFn(Colors, Fonts), [Colors, Fonts]);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={styles.childrenContainer}>
          <AppHeader canGoBack={canGoBack} heading={screenHeadings} />
          {children}
        </View>

        {buttonLabel ? (
          <View style={styles.buttonContainer}>
            <AppButton
              title={buttonLabel}
              onPress={onPress ? onPress : () => {}}
            />
          </View>
        ) : null}
      </View>
    </View>
  );
};

const stylesFn = (Colors: ThemeColors, Fonts: ThemeFonts) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: scale(24),
      padding: scale(16),
      backgroundColor: Colors.white,
    },
    childrenContainer: {
      flex: 1,
    },
    buttonContainer: {
      flex: 0.06,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default AppContainer;
