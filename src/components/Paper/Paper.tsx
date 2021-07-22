import React, { forwardRef, ReactNode } from 'react';
import {
  View,
  ViewStyle,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from 'react-native';
import { makeStyles, Theme } from 'eros-ui/theme';

import { shadow as shadowStyles } from '../Shadow';

interface PaperProps extends TouchableWithoutFeedbackProps {
  children?: ReactNode;
  style?: ViewStyle;
  shadow?: number;
  onPress?: () => void;
  fullWidth?: boolean;
}

const Paper = forwardRef<TouchableWithoutFeedback, PaperProps>(
  (props: PaperProps, ref) => {
    const {
      children,
      style,
      shadow = 4,
      onPress,
      fullWidth = false,
      ...rest
    } = props;
    const styles = useStyles();

    if (onPress) {
      return (
        <TouchableWithoutFeedback ref={ref} onPress={onPress} {...rest}>
          <View
            style={[
              styles.paper,
              shadowStyles(shadow),
              fullWidth && { width: '100%' },
              style,
            ]}>
            {children}
          </View>
        </TouchableWithoutFeedback>
      );
    }

    return (
      <View
        style={[styles.paper, fullWidth && { width: '100%' }, style]}
        ref={ref}
        {...rest}>
        {children}
      </View>
    );
  },
);

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    backgroundColor: theme.canvas,
    borderWidth: theme.borderWidth,
    borderColor: theme.borderColor,
    borderRadius: theme.padding,
    overflow: 'hidden',
  },
}));

export default Paper;
