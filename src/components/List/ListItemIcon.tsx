import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'eros-ui/theme';
import Icon from '../Icon/Icon';

export const ListItemIcon = (props) => {
  const [{ iconSize, unit }] = useTheme();
  const {
    name = null, size = iconSize, iconStyle = null, style, ...rest
  } = props;
  return (
    <View style={[{ padding: unit }, style]} {...rest}>
      <Icon name={name} size={size} style={iconStyle} />
    </View>
  );
};
