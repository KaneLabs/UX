import React, { forwardRef } from 'react';
import { View, TouchableOpacity } from 'react-native';

import { makeStyles } from 'eros-ui/theme';
import ButtonText from '../Typography/ButtonText';

export const Button = forwardRef(
  (
    {
      children,
      text = null,
      title = null,
      backgroundColor,
      style = null,
      fontStyle = null,
      primary = null,
      secondary = null,
      ...rest
    },
    ref,
  ) => {
    const styles = useStyles();
    return (
      <TouchableOpacity
        ref={ref}
        style={[styles.default, style, backgroundColor && { backgroundColor }]}
        {...rest}>
        <View>
          <ButtonText
            style={[
              primary && styles.primary,
              secondary && styles.secondary,
              fontStyle,
            ]}>
            {children || text || title}
          </ButtonText>
        </View>
      </TouchableOpacity>
    );
  },
);

const useStyles = makeStyles((theme) => ({
  default: {
    paddingHorizontal: theme.unit * 2.5,
    paddingVertical: theme.unit,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    color: theme.primaryColorOpaque,
  },
  secondary: {
    color: theme.secondaryColorOpaque,
  },
}));

export default Button;
