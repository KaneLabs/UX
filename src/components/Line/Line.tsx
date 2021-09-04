import React from 'react';
import { View, StyleSheet } from 'react-native';
import { makeStyles } from '@kanelabs/ux/theme';

export const Line = ({ style = null, ...rest }) => {
  const styles = useStyles();
  return <View style={[styles.line, style]} {...rest} />;
};

const useStyles = makeStyles((theme) => ({
  line: {
    height: StyleSheet.hairlineWidth,
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.25)',
  },
}));

export default Line;
