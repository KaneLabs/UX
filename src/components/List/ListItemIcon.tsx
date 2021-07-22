import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'eros-ui/theme';
import Icon from '../Icon/Icon';

export const ListItemIcon = (props) => {
  const [{ iconSize, unit }] = useTheme();
  const {
    name = null, size = iconSize, iconStyle = null, ...rest
  } = props;
  return (
    <View style={[styles.iconContainer, { padding: unit }]} {...rest}>
      <Icon name={name} size={size} style={iconStyle} />
    </View>
  );
};
