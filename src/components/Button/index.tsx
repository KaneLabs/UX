import React, { forwardRef, ReactNode } from 'react';
import {
  View,
  TouchableOpacity,
  ViewStyle,
  ButtonProps as RNButtonProps,
  StyleSheet,
} from 'react-native';

import { makeStyles, Theme, TypographyTypes } from '@kanelabs/ux/theme';
import Loading from '@kanelabs/ui/Loading';
import Row from '@kanelabs/ui/Row';

import Typography from '../Typography';

export interface ButtonProps extends Omit<RNButtonProps, 'title' | 'onPress'> {
  text?: string;
  children?: ReactNode;
  primary?: boolean;
  secondary?: boolean;
  style?: ViewStyle;
  fontStyle?: ViewStyle;
  title?: string;
  loading?: boolean;
  disabled?: boolean;
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
    loading,
    disabled,
    ...rest
  }: ButtonProps = props;
  const styles = useStyles();
  const mainStyle = (() => {
    if (primary) return styles.primary;
    if (secondary) return styles.secondary;
  })();

  const isDisabled = disabled || loading;
  return (
    <TouchableOpacity
      ref={ref}
      style={StyleSheet.compose(styles.Button, style)}
      onPress={onPress}
      disabled={isDisabled}
      {...rest}>
      <Row>
        {loading && <Loading animating={loading} />}
        {text ? (
          <Typography
            type={TypographyTypes.button}
            text={text}
            style={StyleSheet.compose(mainStyle, fontStyle)}
          />
        ) : (
          children
        )}
      </Row>
    </TouchableOpacity>
  );
});

const useStyles = makeStyles((theme: Theme) => ({
  Button: {
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
