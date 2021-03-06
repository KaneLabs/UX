import React from 'react';
import { View, ViewProps } from 'react-native';
import { makeStyles } from '@kanelabs/ux/theme';

export interface ListProps extends ViewProps {
  dense?: boolean;
}

export const List: React.FC<ListProps> = ({ dense = false, ...rest }) => {
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
