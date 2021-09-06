import React from 'react';
import { View, ViewProps } from 'react-native';
import { makeStyles } from '@kanelabs/ux/theme';

export interface ListHeaderProps extends ViewProps {
  dense?: boolean;
}

export const ListHeader: React.FC<ListHeaderProps> = ({
  dense = false,
  ...rest
}) => {
  const styles = useStyles();
  return <View style={[dense ? styles.dense : styles.ListHeader]} {...rest} />;
};

const useStyles = makeStyles(theme => ({
  ListHeader: {
    width: '100%',
    padding: theme.padding,
  },
  ListHeaderDense: {
    width: '100%',
    padding: theme.gutter,
  },
}));

export default ListHeader;
