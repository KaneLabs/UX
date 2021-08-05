import { TextColor, ThemeTypographyType } from './Typography';
import { ScreenThemeType } from './Screen';

type Theme = {
  unit: number;
  mode: string;
  borderWidth: number;
  borderColor: string;
  borderRadius: number;
  padding: number;
  textColor: TextColor;
  shadow: (number) => any;
  backgroundColor: string;
  canvas: string; // main paper color
  canvas2: string; // secondary paper color
  canvas3: string;
  canvas2Opaque: string; // secondary paper color with opacity
  primaryColor: string;
  secondaryColor: string;
  Typography: ThemeTypographyType;
  Screen: ScreenThemeType;
  iconColor: string;
  iconPadding: number;
  iconSize: number;
  NAV_HEIGHT: number;
};

export default Theme;
