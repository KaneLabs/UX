import React from 'react';
import { Text } from 'react-native';
import { makeStyles } from '@kanelabs/ux/theme';

export const Subtitle = ({
  text = null,
  children = null,
  style = {},
  gutter = null,
  type = 1,
  ...rest
}) => {
  const styles = useStyles();
  const textStyle = type === 1 ? styles.subtitle1 : styles.subtitle2;

  const overrideableStyle = [textStyle, style, gutter && styles.gutter];
  return (
    <Text style={overrideableStyle} {...rest}>
      {text || children}
    </Text>
  );
};

const useStyles = makeStyles((theme) => ({
  subtitle1: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '300',
    letterSpacing: 0.15,
    color: theme.textColor.primary,
  },
  subtitle2: {
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '500',
    letterSpacing: 0.1,
    color: theme.textColor.primary,
  },
  gutter: { marginBottom: 12 },
}));

export default Subtitle;
