import { View, StyleSheet } from 'react-native';
import React from 'react';
import AppContainer from '@/common/components/AppContainer';
import { ThemeColors } from '@/theme/theme.colors';
import { ThemeFonts } from '@/theme/theme.fonts';
import useTheme from '@/common/hooks/useTheme';
import ProductList from '../components/ProductList';
import { useAppDispatch } from '@/store/hooks';
import { setAuthenticationStatus } from '@/features/auth/store/auth.slice';
import { checkAuthenticationStatus } from '@/features/auth/utility/login.helper';

const Products = () => {
  const { Colors, Fonts } = useTheme();
  const styles = React.useMemo(() => stylesFn(Colors, Fonts), [Fonts, Colors]);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const fetchAuthStatus = async () => {
      try {
        const { data, success } = await checkAuthenticationStatus();
        if (success) {
          dispatch(
            setAuthenticationStatus({
              token: data?.token || '',
              isAuthenticated: data?.isAuthenticated || '',
            }),
          );
        }
      } catch (error) {
        console.error('Auth status check failed', error);
      }
    };

    fetchAuthStatus();
  }, [dispatch]);

  return (
    <AppContainer
      canGoBack={false}
      buttonLabel={null}
      screenHeadings="Products"
    >
      <View style={styles.container}>
        <ProductList />
      </View>
    </AppContainer>
  );
};

const stylesFn = (Colors: ThemeColors, Fonts: ThemeFonts) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
  });

export default Products;
