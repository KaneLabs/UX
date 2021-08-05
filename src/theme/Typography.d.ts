export declare enum TextColorLightTheme {
  primary = 'rgba(0,0,0,0.87)',
  secondary = 'rgba(0,0,0,0.54)',
  inactive = 'rgba(0,0,0,0.38)',
  hint = 'rgba(0,0,0,0.38)',
  disabled = 'rgba(0,0,0,0.38)',
  faint = 'rgba(0,0,0,0.12)',
}
interface TextColor {
  primary: string;
  secondary: string;
  inactive: string;
  hint: string;
  disabled: string;
  faint: string;
}
export declare const TextColor: TextColor;
export declare const textColor: TextColor;
export declare enum TypographyTypes {
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
export declare type TypographyType = {
  fontWeight: string;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  color: TextColorLightTheme;
};
export declare const Typography: {
  h1: {
    fontWeight: string;
    fontSize: number;
    lineHeight: number;
    letterSpacing: number;
    color: TextColorLightTheme;
  };
  h2: {
    fontWeight: string;
    fontSize: number;
    lineHeight: number;
    letterSpacing: number;
    color: TextColorLightTheme;
  };
  h3: {
    fontWeight: string;
    fontSize: number;
    lineHeight: number;
    letterSpacing: number;
    color: TextColorLightTheme;
  };
  h4: {
    fontWeight: string;
    fontSize: number;
    lineHeight: number;
    letterSpacing: number;
    color: TextColorLightTheme;
  };
  h5: {
    fontWeight: string;
    fontSize: number;
    lineHeight: number;
    letterSpacing: number;
    color: TextColorLightTheme;
  };
  h6: {
    fontWeight: string;
    fontSize: number;
    lineHeight: number;
    letterSpacing: number;
    color: TextColorLightTheme;
  };
  subtitle1: {
    fontSize: number;
    lineHeight: number;
    fontWeight: string;
    letterSpacing: number;
    color: TextColorLightTheme;
  };
  subtitle2: {
    fontSize: number;
    lineHeight: number;
    fontWeight: string;
    letterSpacing: number;
    color: TextColorLightTheme;
  };
  body1: {
    fontSize: number;
    lineHeight: number;
    fontWeight: string;
    letterSpacing: number;
    color: TextColorLightTheme;
  };
  body2: {
    fontSize: number;
    lineHeight: number;
    fontWeight: string;
    letterSpacing: number;
    color: TextColorLightTheme;
  };
  button: {
    color: TextColorLightTheme;
    fontSize: number;
    lineHeight: number;
    fontWeight: string;
    letterSpacing: number;
  };
  caption: {
    color: TextColorLightTheme;
    fontSize: number;
    fontWeight: string;
    lineHeight: number;
    letterSpacing: number;
  };
};
export {};
