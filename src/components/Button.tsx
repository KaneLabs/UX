import React, { forwardRef, ReactNode } from 'react';
import {
  View,
  TouchableOpacity,
  ViewStyle,
  ViewProps,
  ButtonProps as RNButtonProps,
  StyleSheet,
} from 'react-native';

import { makeStyles, Theme } from 'eros-ui/theme';
import Typography from './Typography';

export interface ButtonProps extends ViewProps {
  text?: string;
  children?: ReactNode;
  primary?: boolean;
  secondary?: boolean;
  style?: ViewStyle;
  fontStyle?: ViewStyle;
  onPress?: () => any;
}

const Button = forwardRef<TouchableOpacity>((props, ref) => {
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
  const mainStyle = secondary ? styles.secondary : styles.primary;
  return (
    <TouchableOpacity
      ref={ref}
      style={StyleSheet.compose(styles.default, style)}
      onPress={onPress}
      {...rest}>
      <View>
        {text ? (
          <Typography
            type={'button'}
            text={text}
            style={StyleSheet.compose(mainStyle, fontStyle)}></Typography>
        ) : (
          children
        )}
      </View>
    </TouchableOpacity>
  );
});

const useStyles = makeStyles((theme: Theme) => ({
  default: {
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
