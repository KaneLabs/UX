import * as React from 'react';
import { View, ViewProps } from 'react-native';
import { makeStyles, Theme } from '@kanelabs/ux/theme';

const Divider: React.FC<ViewProps> = (props) => {
  const styles = useStyles();
  return <View style={styles.Divider} {...props} />;
};

const useStyles = makeStyles((theme: Theme) => ({
  Divider: {
    margin: theme.padding,
    height: 1,
    color: theme.textColor.secondary,
  },
}));

export default Divider;
