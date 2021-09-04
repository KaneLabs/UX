import { ViewStyle } from 'react-native';
export interface ScreenThemeType extends ViewStyle {
  flex: number;
}

export const ScreenTheme: ScreenThemeType = {
  flex: 1,
};

export default ScreenTheme;
