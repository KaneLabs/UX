import React, { useMemo } from 'react';
import { Text } from 'react-native';
import { useTheme } from 'eros-ui/theme';

const Typography = ({
  text = null,
  children = null,
  style = null,
  gutter = null,
  type = 'body1',
  ...rest
}) => {
  const [theme] = useTheme();

  const selectedStyles = useMemo(() => theme.Typography[type], [theme.mode, type]);
  console.log({ theme, selectedStyles });
  const gutterStyles = { marginBottom: gutter ? 10 : 0 };
  const overrideableStyle = [selectedStyles, gutterStyles, style];
  const content = text || children;

  return (
    <Text style={overrideableStyle} {...rest}>
      {content}
    </Text>
  );
};

export default Typography;
