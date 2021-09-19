import * as React from 'react';
import { makeStyles } from '@kanelabs/ux/theme';
import { View, StyleSheet, ViewProps } from 'react-native';

const ScreenActions: React.FC<ViewProps> = ({ style, ...props }) => {
  const styles = useStyles();
  return (
    <View style={StyleSheet.compose(styles.ScreenActions, style)} {...props} />
  );
};

const useStyles = makeStyles(theme => ({
  ScreenActions: {
    marginVertical: theme.padding * 2,
  },
}));

export default ScreenActions;
