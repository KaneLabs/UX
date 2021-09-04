import React from 'react';
import { View } from 'react-native';
import { makeStyles } from '@kanelabs/ux/theme';

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export const Container = ({ style = null, center = null, ...rest }) => {
  const styles = useStyles();
  const containerStyles = [styles.container, center && styles.center, style];
  return <View style={containerStyles} {...rest} />;
};
