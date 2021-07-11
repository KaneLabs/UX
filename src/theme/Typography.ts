export enum TextColorLightTheme {
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

export const TextColor: TextColor = {
  primary: TextColorLightTheme.primary,
  secondary: TextColorLightTheme.secondary,
  inactive: TextColorLightTheme.inactive,
  hint: TextColorLightTheme.hint,
  disabled: TextColorLightTheme.disabled,
  faint: TextColorLightTheme.faint,
};

export const textColor = TextColor;

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

export type TypographyType = {
  fontWeight: string;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  color: TextColorLightTheme;
};

export const Typography = {
  [TypographyTypes.h1]: {
    fontWeight: '200',
    fontSize: 96,
    lineHeight: 116,
    letterSpacing: -1.5,
    color: TextColorLightTheme.primary,
  },
  [TypographyTypes.h2]: {
    fontWeight: '200',
    fontSize: 60,
    lineHeight: 72,
    letterSpacing: -0.5,
    color: TextColorLightTheme.primary,
  },
  [TypographyTypes.h3]: {
    fontWeight: '300',
    fontSize: 40,
    lineHeight: 48,
    letterSpacing: 0,
    color: TextColorLightTheme.primary,
  },
  [TypographyTypes.h4]: {
    fontWeight: '300',
    fontSize: 28,
    lineHeight: 34,
    letterSpacing: 0.25,
    color: TextColorLightTheme.primary,
  },
  [TypographyTypes.h5]: {
    fontWeight: '300',
    fontSize: 24,
    lineHeight: 29,
    letterSpacing: 0,
    color: TextColorLightTheme.primary,
  },
  [TypographyTypes.h6]: {
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.15,
    color: TextColorLightTheme.primary,
  },
  [TypographyTypes.subtitle1]: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '300',
    letterSpacing: 0.15,
    color: TextColorLightTheme.primary,
  },
  [TypographyTypes.subtitle2]: {
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '500',
    letterSpacing: 0.1,
    color: TextColorLightTheme.primary,
  },
  [TypographyTypes.body1]: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '300',
    letterSpacing: 0.5,
    color: TextColorLightTheme.primary,
  },
  [TypographyTypes.body2]: {
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '300',
    letterSpacing: 0.25,
    color: TextColorLightTheme.primary,
  },
  [TypographyTypes.button]: {
    color: TextColorLightTheme.primary,
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '400',
    letterSpacing: 1.25,
  },
  [TypographyTypes.caption]: {
    color: TextColorLightTheme.secondary,
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: 0.4,
  },
  [TypographyTypes.caption]: {
    color: TextColorLightTheme.primary,
    fontSize: 10,
    fontWeight: '300',
    lineHeight: 12,
    letterSpacing: 1.5,
  },
};
