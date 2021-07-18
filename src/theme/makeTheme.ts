import * as light from './light';
import * as dark from './dark';
import Theme from './Theme';

export enum ThemeModes {
  dark = 'dark',
  light = 'light',
}

export interface MakeThemeProps {
  mode?: ThemeModes;
  primaryColor?: string;
  secondaryColor?: string;
}

const selectBaseTheme = (mode?: ThemeModes): Theme =>
  mode === ThemeModes.light ? light : dark;

const makeTheme = (options?: MakeThemeProps) => {
  const baseTheme = selectBaseTheme(options?.mode || ThemeModes.dark);
  const overridedTheme = Object.assign({}, baseTheme, options);
  return overridedTheme;
};

export default makeTheme;
