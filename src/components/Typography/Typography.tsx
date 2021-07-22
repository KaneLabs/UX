import * as React from 'react';
import {
  Text,
  TextProps,
  StyleSheet,
  StyleProp,
  TextStyle,
} from 'react-native';
import { useTheme, TypographyTypes } from 'eros-ui/theme';

export interface TypographyProps extends TextProps {
  text?: string;
  type?: TypographyTypes;
  children?: React.ReactNode;
  gutter?: boolean;
  style?: StyleProp<TextStyle>;
}

const Typography = (props: TypographyProps) => {
  const {
    text,
    children,
    style,
    gutter = false,
    type = TypographyTypes.body1,
    ...rest
  } = props;
  const [theme] = useTheme();
  const overrideableStyles = React.useMemo(() => {
    const selectedStyle = theme.Typography[type];
    const gutterStyles = { marginBottom: gutter ? 10 : 0 };

    return StyleSheet.flatten([selectedStyle, gutterStyles, style]);
  }, [theme.mode, gutter, style]);

  return (
    <Text style={overrideableStyles} {...rest}>
      {text || children || undefined}
    </Text>
  );
};

export default Typography;
