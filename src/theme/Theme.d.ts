import { TextColor } from './Typography';

type Theme = {
  unit: number;
  mode: string;
  borderWidth: number;
  borderColor: string;
  padding: number;
  textColor: TextColor;
  shadow: (number) => any;
  canvas: string; // main paper color
  canvas2: string; // secondary paper color
  canvas2Opaque: string; // secondary paper color with opacity
  primaryColor: string;
  secondaryColor: string;
};

export default Theme;
