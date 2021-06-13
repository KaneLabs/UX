import React from 'react';
import { View } from 'react-native';
import { makeStyles } from 'eros-ui/theme';

export const List = ({ dense = false, ...rest }) => {
  const styles = useStyles();
  return <View style={[dense ? styles.dense : styles.list]} {...rest} />;
};

const useStyles = makeStyles((theme) => ({
  list: {
    width: '100%',
    paddingVertical: theme.padding,
  },
  dense: {
    width: '100%',
    paddingVertical: theme.gutter,
  },
}));

export default List;
