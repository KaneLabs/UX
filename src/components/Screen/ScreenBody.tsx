import * as React from 'react';
import { makeStyles } from '@kanelabs/ux/theme';
import { View, StyleSheet, ViewProps } from 'react-native';

const ScreenBody: React.FC<ViewProps> = ({ style, ...props }) => {
  const styles = useStyles();
  return (
    <View style={StyleSheet.compose(styles.ScreenBody, style)} {...props} />
  );
};

const useStyles = makeStyles(theme => ({
  ScreenBody: {
    paddingHorizontal: theme.padding * 2,
  },
}));

export default ScreenBody;
