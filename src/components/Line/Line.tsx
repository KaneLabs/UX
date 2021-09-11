import React from 'react';
import { View, StyleSheet } from 'react-native';
import { makeStyles } from '@kanelabs/ux/theme';

export const Line = ({ style, fullWidth = false, ...rest }) => {
  const styles = useStyles();
  return (
    <View
      style={[styles.line, fullWidth && styles.fullWidth, style]}
      {...rest}
    />
  );
};

const useStyles = makeStyles(theme => ({
  line: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: theme.textColor.faint,
  },
  fullWidth: {
    width: '100%',
  },
}));

export default Line;
