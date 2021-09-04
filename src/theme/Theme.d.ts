import { TextColor, ThemeTypographyType } from './Typography';
import { ScreenThemeType } from './Screen';
import { Window } from 'react-native';
import { ShadowStyle } from '@kanelabs/ux/components/Shadow';

type Theme = {
  unit: number;
  mode: string;
  borderWidth: number;
  borderColor: string;
  borderRadius: number;
  padding: number;
  textColor: TextColor;
  shadow: (number) => ShadowStyle;
  backgroundColor: string;
  canvas: string; // main paper color
  canvas1: string; // main paper color
  canvas1Opaque: string; // main paper color with opacity
  canvas2: string; // secondary paper color
  canvas2Opaque: string; // secondary paper color with opacity
  canvas3: string;
  primaryColor: string;
  secondaryColor: string;
  Typography: ThemeTypographyType;
  Screen: ScreenThemeType;
  iconColor: string;
  iconPadding: number;
  iconSize: number;
  NAV_HEIGHT: number;
  FEED_WIDTH: number;
  window: Window;
  gutter: number;
  AVATAR_SIZE: number;
};

export default Theme;
