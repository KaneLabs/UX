import React from 'react';
import { Text } from 'react-native';
import { makeStyles } from 'eros-ui/theme';

const useStyles = makeStyles((theme) => ({
  buttonText: {
    color: theme.textColor.secondary,
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '400',
    letterSpacing: 1.25,
  },
  hovered: {
    color: theme.textColor.primary,
  },
  gutter: {
    marginBottom: 12,
  },
}));

export const ButtonText = ({
  text = '', style = {}, children, gutter, hovered,
}) => {
  const styles = useStyles();
  const content = children || text;
  return (
    <Text style={[styles.buttonText, style, gutter && styles.gutter, hovered && styles.hovered]}>
      {content.toUpperCase()}
    </Text>
  );
};

export default ButtonText;
