import React from 'react';
import FastImage from 'react-native-fast-image';
import { StyleSheet } from 'react-native';
import { scale, scaleVertical } from '@/theme/theme.scale';

const ProductImage = ({ image }: { image: string }) => {
  return (
    <FastImage
      style={styles.image}
      source={{ uri: image, priority: FastImage.priority.high }}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: scaleVertical(90),
    // paddingVertical: 12,
    borderRadius: scale(12),
    // backgroundColor: 'red',
  },
});

export default ProductImage;
