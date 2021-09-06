import React from 'react';
import Typography, { TypographyProps } from '../Typography';
import { TypographyTypes, makeStyles } from '@kanelabs/ux/theme';

const ListItemText: React.FC<TypographyProps> = props => {
  const styles = useStyles();
  return (
    <Typography
      style={styles.ListItemText}
      type={TypographyTypes.body1}
      {...props}
    />
  );
};
const useStyles = makeStyles(theme => ({
  ListItemText: {
    marginHorizontal: theme.padding * 2,
    fontSize: 20,
    lineHeight: 32,
    fontWeight: '400',
    color: theme.textColor.secondary,
  },
}));

export default ListItemText;
