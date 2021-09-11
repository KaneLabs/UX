import React from 'react';
import { StyleSheet } from 'react-native';
import Typography, { TypographyProps } from '../Typography';
import { TypographyTypes, makeStyles } from '@kanelabs/ux/theme';

interface ListItemTextProps extends TypographyProps {
  dense?: boolean;
}

const ListItemText: React.FC<ListItemTextProps> = props => {
  const styles = useStyles();
  const type = props.dense ? TypographyTypes.body2 : TypographyTypes.body1;
  const style = props.dense ? styles.ListItemTextDense : styles.ListItemText;

  return (
    <Typography
      style={StyleSheet.compose(style, props.style)}
      type={type}
      {...props}
    />
  );
};
const useStyles = makeStyles(theme => ({
  ListItemText: {
    marginHorizontal: theme.padding * 2,
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '400',
    color: theme.textColor.secondary,
  },
  ListItemTextDense: {
    marginHorizontal: theme.padding * 1.5,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    color: theme.textColor.secondary,
  },
}));

export default ListItemText;
