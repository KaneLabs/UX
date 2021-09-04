import React from 'react';
import { Text } from 'react-native';
import { useTheme, makeStyles } from '@kanelabs/ux/theme';

export const BodyText = ({
  text = null,
  children = null,
  style = {},
  gutter = null,
  type = 1,
  ...rest
}) => {
  const [theme, setTheme] = useTheme();
  const styles = useStyles();
  const textStyle = type === 1 ? styles.body : styles.body2;
  const colorStyle =
    type === 1
      ? { color: theme.textColor.primary }
      : { color: theme.textColor.secondary };

  const overrideableStyle = [
    textStyle,
    colorStyle,
    gutter && styles.gutter,
    style,
  ];
  const content = text || children;

  return (
    <Text style={overrideableStyle} {...rest}>
      {content}
    </Text>
  );
};

const useStyles = makeStyles((theme) => ({
  body: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '300',
    letterSpacing: 0.5,
  },
  body2: {
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '300',
    letterSpacing: 0.25,
  },
  gutter: { marginBottom: 12 },
}));

export default BodyText;
