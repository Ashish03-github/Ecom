import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TextInputProps,
} from 'react-native';
import React from 'react';
import { normalizeFonts, scale, scaleVertical } from '@/theme/theme.scale';
import { ThemeColors } from '@/theme/theme.colors';
import { ThemeFonts } from '@/theme/theme.fonts';
import useTheme from '../hooks/useTheme';

interface AppInputProps extends TextInputProps {
  label: string;
  error?: string;
}
const AppInput: React.FC<AppInputProps> = ({
  label,
  value,
  error,
  placeholder,
  onChangeText,
  ...props
}) => {
  const { Colors, Fonts } = useTheme();
  const styles = React.useMemo(() => stylesFn(Colors, Fonts), [Colors, Fonts]);
  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        value={value}
        style={styles.inputStyle}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={Colors.grey}
        {...props}
      />

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

export default AppInput;

const stylesFn = (Colors: ThemeColors, Fonts: ThemeFonts) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      padding: scale(20),
      justifyContent: 'center',
    },
    inputWrapper: {
      marginBottom: scale(16),
    },
    inputLabel: {
      ...Fonts.font600,
      fontSize: normalizeFonts(14),
      marginBottom: scale(3),
      color: Colors.primary,
    },
    inputStyle: {
      width: '100%',
      minHeight: scaleVertical(44),
      borderRadius: scale(8),
      borderWidth: 1,
      ...Fonts.font400,
      fontSize: normalizeFonts(14),
      borderColor: Colors.lightGrey,
      paddingHorizontal: scale(10),
    },
    buttonContainer: {
      flex: 0.1,
      paddingHorizontal: scale(16),
      justifyContent: 'center',
      alignItems: 'center',
    },
    errorText: {
      ...Fonts.font400,
      color: 'red',
      fontSize: normalizeFonts(12),
      marginTop: scale(5),
    },
  });
