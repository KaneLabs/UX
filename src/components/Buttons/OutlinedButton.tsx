import React, { forwardRef } from 'react';
import { View, TouchableHighlight, StyleSheet } from 'react-native';

import { unit, makeStyles } from '@kanelabs/ux/theme';
import Icon from '../Icon';
import ButtonText from '../Typography/ButtonText';

export const OutlinedButton = forwardRef((props, ref) => {
  const {
    children,
    text,
    title = null,
    icon = null,
    // backgroundColor,
    style = null,
    disabled = false,
    onPress = () => null,
    ...rest
  } = props;
  const styles = useStyles();
  return (
    <TouchableHighlight
      ref={ref}
      style={[styles.default, style, disabled && styles.disabled]}
      onPress={disabled ? null : onPress}
      {...rest}>
      <View style={styles.iconContainer}>
        {icon && <Icon name={icon} style={styles.icon} />}
        <ButtonText>{children || text || title}</ButtonText>
      </View>
    </TouchableHighlight>
  );
});

const useStyles = makeStyles((theme) => ({
  default: {
    paddingVertical: theme.unit,
    paddingHorizontal: theme.unit * 3,
    borderColor: theme.primaryColorOpaque,
    borderWidth: theme.borderWidth,
    borderRadius: theme.borderRadius,
    backgroundColor: theme.primaryColorOpaqueUltralight,
    minWidth: 60,
    minHeight: 32,
    maxHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    borderWidth: 0,
    opacity: 0.35,
  },
  icon: {
    marginRight: theme.unit,
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
