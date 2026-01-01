import {
  View,
  Modal,
  StyleSheet,
  KeyboardAvoidingView,
  Pressable,
  Platform,
} from 'react-native';
import React from 'react';
import { ThemeColors } from '@/theme/theme.colors';
import { ThemeFonts } from '@/theme/theme.fonts';
import useTheme from '@/common/hooks/useTheme';
import { normalizeFonts, scale, scaleVertical } from '@/theme/theme.scale';
import AppButton from '@/common/components/AppButton';
import AppInput from '@/common/components/AppInput';

type AuthState = {
  email: string;
  password: string;
  error: string;
};

interface LoginModalProps {
  visible: boolean;
  onClose: () => void;
  onLoginPress: () => void;
  authState: AuthState;
  setAuthState: React.Dispatch<React.SetStateAction<AuthState>>;
}

const LoginModal = ({
  visible,
  onClose,
  onLoginPress,
  authState,
  setAuthState,
}: LoginModalProps) => {
  const { Colors, Fonts } = useTheme();
  const styles = React.useMemo(() => stylesFn(Colors, Fonts), [Colors, Fonts]);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
    >
      <Pressable style={styles.backdrop} onPress={onClose}>
        <Pressable style={styles.modalContainer}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          >
            <AppInput
              label="Email"
              error={authState.error}
              value={authState.email}
              onChangeText={text =>
                setAuthState(prev => ({
                  ...prev,
                  email: text,
                }))
              }
              placeholder="Enter your email"
            />
            <AppInput
              label="Password"
              error={authState.error}
              value={authState.password}
              onChangeText={text =>
                setAuthState(prev => ({
                  ...prev,
                  password: text,
                }))
              }
              placeholder="Enter your password"
            />

            <AppButton
              style={{ marginTop: scale(20) }}
              title="Sign In"
              onPress={onLoginPress}
            />
          </KeyboardAvoidingView>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default LoginModal;

const stylesFn = (Colors: ThemeColors, Fonts: ThemeFonts) =>
  StyleSheet.create({
    backdrop: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      padding: scale(20),
    },
    modalContainer: {
      backgroundColor: Colors.white,
      borderRadius: scale(12),
      padding: scale(20),
    },
  });
