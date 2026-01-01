import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { scale } from '@/theme/theme.scale';
import { AppIconProps } from './components.type';

const AppIcon: React.FC<AppIconProps> = ({
  name,
  size = 24,
  color = 'black',
  type,
  onPress,
  ...props
}) => {
  if (type === 'Octicons') {
    return (
      <Octicons
        onPress={onPress}
        name={name}
        size={scale(size)}
        color={color}
        {...props}
      />
    );
  }
  if (type === 'Ionicons') {
    return (
      <Ionicons
        onPress={onPress}
        name={name}
        size={scale(size)}
        color={color}
      />
    );
  }
  return (
    <Icon onPress={onPress} name={name} size={scale(size)} color={color} />
  );
};

export default AppIcon;
