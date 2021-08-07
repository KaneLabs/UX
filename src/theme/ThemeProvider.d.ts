import * as React from 'react';
import Theme from './Theme';
import { ThemeModes } from './makeTheme';
export declare const ThemeContext: React.Context<ThemeContextType>;
export interface ThemeOverrideProps {
    primaryColor?: string;
    secondaryColor?: string;
}
export interface ThemeProviderProps {
    children: React.ReactNode;
    initialScheme?: ThemeModes;
    theme?: ThemeOverrideProps;
}
export declare type ThemeContextType = [Theme, () => any];
export declare type ThemeProvider<ThemeProviderProps> = (props: ThemeProviderProps) => React.ContextType<any>;
export declare const ThemeProvider: (props: ThemeProviderProps) => JSX.Element;
export default ThemeProvider;
