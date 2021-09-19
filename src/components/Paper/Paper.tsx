import React, { forwardRef, ReactNode } from 'react';
import {
  View,
  ViewStyle,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  StyleSheet,
} from 'react-native';
import { makeStyles, Theme } from '@kanelabs/ux/theme';
import colorString from 'color-string';
import Color from 'color';
import { shadow as shadowStyles } from '../Shadow';

declare module 'react-native' {
  interface Paper {
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
  }
}

export interface PaperProps extends TouchableWithoutFeedbackProps {
  children?: ReactNode;
  style?: ViewStyle;
  shadow?: number;
  active?: boolean;
  onPress?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  fullWidth?: boolean;
}

const Paper = forwardRef<TouchableWithoutFeedback, PaperProps>(
  (props: PaperProps, ref) => {
    const {
      children,
      style,
      shadow = 4,
      onPress,
      active = false,
      fullWidth = false,
      ...rest
    } = props;
    const styles = useStyles();

    return (
      <TouchableWithoutFeedback ref={ref} onPress={onPress} {...rest}>
        <View
          style={StyleSheet.flatten([
            styles.Paper,
            shadowStyles(shadow),
            fullWidth && { width: '100%' },
            active && styles.PaperActive,
            style,
          ])}>
          {children}
        </View>
      </TouchableWithoutFeedback>
    );
  },
);

const rgbifyPrimaryColor = (primaryColor: string) => {
  const rgbArray = colorString.get.rgb(primaryColor);
  console.log({ rgbArray });
  const rgbString = colorString.to.rgb(rgbArray);
  console.log({ rgbString });

  return rgbString;
};

const useStyles = makeStyles((theme: Theme) => {
  const primaryRGB = rgbifyPrimaryColor(theme.primaryColor);

  const fadedPrimaryColor = Color(primaryRGB).fade(0.5);
  console.log({ fadedPrimaryColor });
  const { color: rgbArray, valpha } = fadedPrimaryColor;
  const realfadedPrimary = colorString.to.rgb([...rgbArray, valpha]);
  console.log({ realfadedPrimary });
  return {
    Paper: {
      backgroundColor: theme.canvas,
      borderWidth: 1,
      borderColor: theme.borderColor,
      borderRadius: theme.padding,
      overflow: 'hidden',
    },
    PaperActive: {
      borderWidth: 1,
      borderRadius: theme.padding,
      overflow: 'hidden',
      backgroundColor: realfadedPrimary,
      borderColor: theme.primaryColor,
    },
  };
});

export default Paper;
