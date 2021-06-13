import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import useTheme from 'eros-ui/theme/useTheme';

export const Icon = (props) => {
  const [theme] = useTheme();
  return <IonIcon color={theme.iconColor} size={theme.iconSize} {...props} />;
};

export default Icon;
