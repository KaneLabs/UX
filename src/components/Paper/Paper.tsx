import React, { forwardRef } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { makeStyles } from 'eros-ui/theme';

import { shadow as shadowStyles } from '../Shadow';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.canvas,
    borderWidth: theme.borderWidth,
    borderColor: theme.borderColor,
    borderRadius: theme.padding,
    overflow: 'hidden',
  },
}));

const Paper = forwardRef((
  {
    children, style = null, shadow = 4, onPress = null, fullWidth = false, ...rest
  },
  ref,
) => {
  const styles = useStyles();

  if (onPress) {
    return (
      <TouchableWithoutFeedback ref={ref} onPress={onPress} {...rest}>
        <View style={[styles.paper, shadowStyles(shadow), fullWidth && { width: '100%' }, style]}>
          {children}
        </View>
      </TouchableWithoutFeedback>
    );
  }

  return (
    <View style={[styles.paper, fullWidth && { width: '100%' }, style]} ref={ref} {...rest}>
      {children}
    </View>
  );
});

export default Paper;
