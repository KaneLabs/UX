import * as React from 'react';
import { TextProps, StyleProp, TextStyle } from 'react-native';
export interface TypographyProps extends TextProps {
    text?: string;
    type?: TypographyTypes;
    children?: React.ReactNode;
    gutter?: boolean;
    style?: StyleProp<TextStyle>;
}
export declare enum TypographyTypes {
    h1 = "h1",
    h2 = "h2",
    h3 = "h3",
    h4 = "h4",
    h5 = "h5",
    h6 = "h6",
    subtitle1 = "subtitle1",
    subtitle2 = "subtitle2",
    body1 = "body1",
    body2 = "body2",
    button = "button",
    caption = "caption",
    overline = "overline"
}
declare const Typography: (props: TypographyProps) => JSX.Element;
export default Typography;
