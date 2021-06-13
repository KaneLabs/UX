import React from 'react';
import { View } from 'react-native';
import { makeStyles } from 'eros-ui/theme';

export const Grid = ({
  style = null, center = false, gutter = false, ...rest
}) => {
  const styles = useStyles();
  return (
    <View style={[styles.grid, center && styles.center, gutter && styles.gutter, style]} {...rest}>
      {children}
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  grid: {
    flex: 1,
  },
  gutter: {
    marginHorizontal: theme.gutter,
  },
  center: {
    alignItems: 'center',
  },
}));
