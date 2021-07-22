import React, { forwardRef } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { shadow as shadowStyles, makeStyles } from 'eros-ui/theme';

const gradient = ['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.2)'];

export const SpaceSheet = forwardRef(
  ({
    children, style = null, shadow = 4, onPress = null, ...rest
  }, ref) => {
    const styles = useStyles();
    const joinedStyles = [styles.paper, shadowStyles(shadow), style];
    if (onPress) {
      return (
        <TouchableWithoutFeedback ref={ref} onPress={onPress} style={joinedStyles} {...rest}>
          <LinearGradient colors={gradient} style={styles} ref={ref} {...rest}>
            {children}
          </LinearGradient>
        </TouchableWithoutFeedback>
      );
    }

    return (
      <LinearGradient colors={gradient} style={joinedStyles} ref={ref} {...rest}>
        {children}
      </LinearGradient>
    );
  },
);

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: thee.canvas,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.borderColor,
    borderRadius: theme.borderRadius,
    overflow: 'hidden',
    // backdropFilter: 'blur(3px)',
  },
}));

export default SpaceSheet;
