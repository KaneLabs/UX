import React, { forwardRef, ReactNode } from 'react';
import {
  View,
  TouchableOpacity,
  ViewStyle,
  ButtonProps as RNButtonProps,
  StyleSheet,
} from 'react-native';

import { makeStyles, Theme, TypographyTypes } from 'eros-ui/theme';
import Typography from '../Typography';

export interface ButtonProps extends Omit<RNButtonProps, 'title' | 'onPress'> {
  text?: string;
  children?: ReactNode;
  primary?: boolean;
  secondary?: boolean;
  style?: ViewStyle;
  fontStyle?: ViewStyle;
  title?: string;
  onPress?: () => void;
}

const Button = forwardRef<TouchableOpacity, ButtonProps>((props, ref) => {
  const {
    children,
    text,
    style,
    fontStyle,
    primary,
    secondary,
    onPress,
    ...rest
  }: ButtonProps = props;
  const styles = useStyles();
  const mainStyle = (() => {
    if (primary) return styles.primary;
    if (secondary) return styles.secondary;
  })();
  return (
    <TouchableOpacity
      ref={ref}
      style={StyleSheet.compose(styles.default, style)}
      onPress={onPress}
      {...rest}>
      <View>
        {text ? (
          <Typography
            type={TypographyTypes.button}
            text={text}
            style={StyleSheet.compose(mainStyle, fontStyle)}
          />
        ) : (
          children
        )}
      </View>
    </TouchableOpacity>
  );
});

const useStyles = makeStyles((theme: Theme) => ({
  default: {
    color: theme.Typography.button.color,
    paddingHorizontal: theme.unit * 2.5,
    paddingVertical: theme.unit,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    color: theme.primaryColor,
  },
  secondary: {
    color: theme.secondaryColor,
  },
}));

export default Button;
