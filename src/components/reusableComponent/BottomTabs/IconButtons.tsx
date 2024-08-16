import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export type IconLibrary = {
  [key: string]: () => React.ComponentType<any>;
};

const ICON_LIBRARIES: IconLibrary = {
  Feather: () => Feather,
  MaterialCommunityIcons: () => MaterialCommunityIcons,
};

export type IconButtonProps = PressableProps & {
  icon: string;
  iconFamily?: 'Feather' | 'MaterialCommunityIcons';
  variant?: 'text' | 'contained' | 'outline';
  size?: 'small' | 'medium' | 'big';
  iconColor?: string;
  roundness?: 'full' | 'medium' | 'small';
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

const IconButton = ({
  icon,
  iconFamily = 'Feather',
  variant = 'text',
  size = 'medium',
  iconColor = 'white',
  roundness = 'medium',
  style,
  onPress,
  ...rest
}: IconButtonProps) => {
  const Icon = ICON_LIBRARIES[iconFamily ?? 'Feather']();
  const iconSize =
    size === 'big' ? 24 : size === 'medium' ? 16 : 12;
  const buttonSize =
    size === 'big' ? 48 : size === 'medium' ? 36 : 24;

  const variantStyles =
    variant === 'contained'
      ? { backgroundColor: '#3B82F6' } 
      : variant === 'outline'
      ? { borderWidth: 1, borderColor: '#3B82F6' } 
      : { backgroundColor: 'transparent' };

  const roundnessStyles =
    roundness === 'full'
      ? { borderRadius: 999 } 
      : roundness === 'medium'
      ? { borderRadius: 6 } 
      : { borderRadius: 4 }; 

  return (
    <Pressable
      {...rest}
      onPress={onPress}
      style={({pressed}) => [
        {
          alignItems: 'center',
          justifyContent: 'center',
          width: buttonSize,
          height: buttonSize,
        },
        variantStyles,
        roundnessStyles,
        pressed && { opacity: 0.9 },
        pressed && { shadowColor: '#fff', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.18, shadowRadius: 1, elevation: 1 },
        style,
      ]}>
      <Icon name={icon} size={iconSize} color={iconColor} />
    </Pressable>
  );
};

export default IconButton;
