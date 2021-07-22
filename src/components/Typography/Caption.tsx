import React from 'react';
import { Text } from 'react-native';
import { makeStyles } from 'eros-ui/theme';

const useStyles = makeStyles((theme) => ({
  caption: {
    color: theme.textColor.secondary,
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: 0.4,
  },
  gutter: {
    marginBottom: 8,
  },
}));

export const Caption = ({
  text = null, style = null, children, gutter, ...rest
}) => {
  const styles = useStyles();
  return (
    <Text style={[styles.caption, style, gutter && styles.gutter]} {...rest}>
      {text || children}
    </Text>
  );
};

export default Caption;
