import * as React from 'react';
// import IonIcon from 'react-native-vector-icons/Ionicons';
import useTheme from '@kanelabs/ux/theme/useTheme';

export interface IconProps {
  family?: 'Ionicons' | 'FontAwesome5';
}

const Icon: React.FC<IconProps> = ({ family, ...props }) => {
  const [theme] = useTheme();
  const Icon = React.useMemo(() => {
    switch (family) {
      case 'Ionicons':
        return require(`react-native-vector-icons/dist/Ionicons`).default;
      case 'FontAwesome5':
        return require(`react-native-vector-icons/dist/FontAwesome5`).default;
      default:
        return require(`react-native-vector-icons/dist/Ionicons`).default;
    }
  }, [family]);
  return <Icon color={theme.iconColor} size={theme.iconSize} {...props} />;
};

export default Icon;
