import * as React from 'react';
import {
  Text,
  TextProps,
  StyleSheet,
  StyleProp,
  TextStyle,
} from 'react-native';
import { useTheme } from '@kanelabs/ux/theme';

export interface TypographyProps extends TextProps {
  text?: string;
  type?: TypographyTypes;
  children?: React.ReactNode;
  gutter?: boolean;
  style?: StyleProp<TextStyle>;
}

export enum TypographyTypes {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  subtitle1 = 'subtitle1',
  subtitle2 = 'subtitle2',
  body1 = 'body1',
  body2 = 'body2',
  button = 'button',
  caption = 'caption',
  overline = 'overline',
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
