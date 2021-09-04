import React, { forwardRef } from 'react';
import { Text } from 'react-native';
import { useTheme, makeStyles } from '@kanelabs/ux/theme';

export const Title = forwardRef(
  ({ text, children, style = null, gutter = null, type = 1 }, ref) => {
    const [theme] = useTheme();
    const styles = useStyles();
    const titleType = `h${type}`;
    const textStyle = theme.Typography[titleType];

    return (
      <Text ref={ref} style={[textStyle, style, gutter && styles.gutter]}>
        {text || children}
      </Text>
    );
  },
);

const useStyles = makeStyles((theme) => ({
  gutter: {
    marginBottom: 16,
  },
}));

export default Title;
