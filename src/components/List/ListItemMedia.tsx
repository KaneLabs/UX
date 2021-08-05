import React from 'react';
import { View } from 'react-native';
import { makeStyles } from 'eros-ui/theme';

export const ListItemMedia = ({
  name = null,
  media,
  dense = false,
  children,
  style = null,
  ...rest
}) => {
  const styles = makeStyles();
  return (
    <View
      style={[dense ? styles.dense : styles.mediaContainer, style]}
      {...rest}>
      {media || children}
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  mediaContainer: {
    // paddingHorizontal: theme.unit * 1.5,
    // paddingVertical: theme.unit * 1.5,
    marginRight: theme.unit * 1.5,
  },
  dense: {
    // paddingHorizontal: theme.unit,
    // paddingVertical: theme.unit,
    marginRight: theme.unit,
  },
}));
