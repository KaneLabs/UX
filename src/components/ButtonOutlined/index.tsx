import React, { forwardRef, ReactNode } from 'react';
import {
  View,
  TouchableOpacity,
  ViewStyle,
  ButtonProps as RNButtonProps,
  StyleSheet,
} from 'react-native';

import { makeStyles, Theme, TypographyTypes } from '@kanelabs/ux/theme';
import Typography from '../Typography';

export interface ButtonProps extends Omit<RNButtonProps, 'title' | 'onPress'> {
  text?: string;
  children?: ReactNode;
  primary?: boolean;
  secondary?: boolean;
  outlined?: boolean;
  style?: ViewStyle;
  fontStyle?: ViewStyle;
  title?: string;
  onPress?: () => void;
}

const ButtonOutlined = forwardRef<TouchableOpacity, ButtonProps>(
  (props, ref) => {
    const {
      children,
      text,
      style,
      fontStyle,
      primary,
      secondary,
      outlined,
      onPress,
      ...rest
    }: ButtonProps = props;
    const styles = useStyles();

    const buttonStyle = (() => {
      if (primary) return styles.ButtonOutlinedPrimary;
      if (secondary) return styles.ButtonOutlinedPrimary;
      return styles.ButtonOutlined;
    })();

    const textStyle = (() => {
      if (primary) return styles.ButtonTextPrimary;
      if (secondary) return styles.ButtonTextSecondary;
    })();
    return (
      <TouchableOpacity
        ref={ref}
        style={StyleSheet.compose(buttonStyle, style)}
        onPress={onPress}
        {...rest}>
        <View>
          {text ? (
            <Typography
              type={TypographyTypes.button}
              text={text}
              style={StyleSheet.compose(textStyle, fontStyle)}
            />
          ) : (
            children
          )}
        </View>
      </TouchableOpacity>
    );
  },
);

const useStyles = makeStyles((theme: Theme) => ({
  ButtonOutlined: {
    color: theme.Typography.button.color,
    paddingHorizontal: theme.unit * 2.5,
    paddingVertical: theme.unit,
    borderWidth: 1,
    borderColor: theme.borderColor,
    borderRadius: theme.borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: theme.unit * 2.5,
    marginVertical: theme.unit,
  },
  ButtonOutlinedPrimary: {
    color: theme.primaryColor,
    paddingHorizontal: theme.unit * 2.5,
    paddingVertical: theme.unit,
    borderWidth: 1,
    borderColor: theme.primaryColor,
    borderRadius: theme.borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: theme.unit * 2.5,
    marginVertical: theme.unit,
  },
  ButtonOutlinedSecondary: {
    color: theme.secondaryColor,
    padding: theme.unit,
    borderWidth: 1,
    borderColor: theme.secondaryColor,
    borderRadius: theme.borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.unit,
  },
  ButtonTextPrimary: {
    color: theme.primaryColor,
  },
  ButtonTextSecondary: {
    color: theme.secondaryColor,
  },
}));

export default ButtonOutlined;
