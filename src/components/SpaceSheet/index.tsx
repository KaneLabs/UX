import * as React from 'react';
import {
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { shadow as shadowStyles, makeStyles, Theme } from '@kanelabs/ux/theme';

const gradient = ['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.2)'];

export interface SpaceSheetProps extends TouchableWithoutFeedbackProps {
  shadow?: number;
}

const SpaceSheet: React.FC<SpaceSheetProps> = React.forwardRef<
  TouchableWithoutFeedback,
  SpaceSheetProps
>(({ children, style, shadow = 4, onPress, ...rest }, ref) => {
  const styles = useStyles();
  const joinedStyles = StyleSheet.flatten([
    styles.paper,
    shadowStyles(shadow),
    style,
  ]);
  return (
    <TouchableWithoutFeedback
      ref={ref}
      onPress={onPress}
      style={joinedStyles}
      {...rest}>
      <LinearGradient colors={gradient} style={styles} {...rest}>
        {children}
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
});

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    backgroundColor: theme.canvas,
    borderWidth: theme.borderWidth,
    borderColor: theme.borderColor,
    borderRadius: theme.borderRadius,
    overflow: 'hidden',
  },
}));

export default SpaceSheet;
