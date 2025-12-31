import { View, Text } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { scale } from '@/theme/theme.scale';

type IconType = 'FontAwesome6' | '';
interface AppIconProps {
  name: string;
  size?: number;
  color?: string;
  type?: IconType;
}
const AppIcon: React.FC<AppIconProps> = ({
  name,
  size = 24,
  color = 'black',
  type,
}) => {
  return <Icon name={name} size={scale(size)} color={color} />;
};

export default AppIcon;
