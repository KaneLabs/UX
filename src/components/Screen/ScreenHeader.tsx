import * as React from 'react';
import { makeStyles } from '@kanelabs/ux/theme';
import { View, StyleSheet, ViewProps } from 'react-native';

const ScreenHeader: React.FC<ViewProps> = ({ style, ...props }) => {
  const styles = useStyles();
  return (
    <View style={StyleSheet.compose(styles.ScreenHeader, style)} {...props} />
  );
};

const useStyles = makeStyles(theme => ({
  ScreenHeader: {
    paddingHorizontal: theme.padding * 2,
    paddingVertical: theme.padding * 2,
  },
}));

export default ScreenHeader;
