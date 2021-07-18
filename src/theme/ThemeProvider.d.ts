import React, { ReactNode } from 'react';
export declare const ThemeContext: React.Context<null>;
interface ThemeProviderProps {
  initialScheme?: string;
  children: ReactNode;
}
interface ThemeType {}
export declare type ThemeContextType = unknown | [ThemeType, Function];
export declare type ThemeProvider<ThemeProviderProps> = (
  props: ThemeProviderProps,
) => React.ContextType<any>;
export declare const ThemeProvider: (props: ThemeProviderProps) => JSX.Element;
export default ThemeProvider;
