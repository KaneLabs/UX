import React from 'react';
import { Text } from 'react-native';
import { makeStyles } from 'eros-ui/theme';

const useStyles = makeStyles((theme) => ({
  overline: {
    color: theme.textColor.primary,
    fontSize: 10,
    fontWeight: '300',
    lineHeight: 12,
    letterSpacing: 1.5,
  },
  gutter: {
    marginBottom: 12,
  },
}));

export const Overline = ({
  text = null, style = {}, children, gutter,
}) => {
  const content = (text || children).toUpperCase();
  const styles = useStyles();
  return (
    <Text style={[styles.overline, style, gutter && styles.gutter]}>
      {content}
    </Text>
  );
};

export default Overline;
