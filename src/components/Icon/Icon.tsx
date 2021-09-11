import * as React from 'react';
import useTheme from '@kanelabs/ux/theme/useTheme';
import { ViewProps } from 'react-native';

export type IconFamily =
  | 'Ionicons'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'MaterialCommunityIcons';

export interface IconProps extends ViewProps {
  family?: IconFamily;
  name?: string;
  color?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({
  family,
  color,
  name,
  size,
  ...rest
}) => {
  const [theme] = useTheme();
  const Icon = React.useMemo(() => {
    switch (family) {
      case 'Ionicons':
        return require(`react-native-vector-icons/Ionicons`).default;
      case 'FontAwesome':
        return require(`react-native-vector-icons/FontAwesome`).default;
      case 'FontAwesome5':
        return require(`react-native-vector-icons/FontAwesome5`).default;
      case 'MaterialCommunityIcons':
        return require(`react-native-vector-icons/MaterialCommunityIcons`)
          .default;
      default:
        return require(`react-native-vector-icons/Ionicons`).default;
    }
  }, [family]);
  return (
    <Icon
      color={color || theme.iconColor}
      size={size || theme.iconSize}
      name={name}
      {...rest}
    />
  );
};

export default Icon;
