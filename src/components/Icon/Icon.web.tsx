import React from 'react';
import IonIcon from 'react-native-vector-icons/dist/Ionicons';
import useTheme from 'eros-ui/theme/useTheme';

const Icon = props => {
  const [theme] = useTheme();
  return <IonIcon color={theme.iconColor} size={theme.iconSize} {...props} />;
};

export default Icon;
