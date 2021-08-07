import Theme from './Theme';
export declare enum ThemeModes {
    dark = "dark",
    light = "light"
}
export interface MakeThemeProps {
    mode?: ThemeModes;
    primaryColor?: string;
    secondaryColor?: string;
}
declare const makeTheme: (options?: MakeThemeProps | undefined) => Theme & MakeThemeProps;
export default makeTheme;
