import React from 'react';
import { View } from 'react-native';
import { useTheme } from '@kanelabs/ux/theme';
import Icon from '../Icon/Icon';

export const ListItemIcon = props => {
  const [{ iconSize, iconPadding }] = useTheme();
  const {
    name = null,
    size = iconSize,
    iconStyle = null,
    style,
    iconProps = {},
    ...rest
  } = props;
  return (
    <View style={[{ paddingRight: iconPadding }, style]} {...rest}>
      <Icon name={name} size={size} style={iconStyle} {...iconProps} />
    </View>
  );
};
