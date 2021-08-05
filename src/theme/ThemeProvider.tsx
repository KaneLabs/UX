import * as React from 'react';
import { useColorScheme } from 'react-native';
import * as light from './light';
import * as dark from './dark';
import Theme from './Theme';
import makeTheme, { ThemeModes } from './makeTheme';

const defaultTheme: Theme = makeTheme({ mode: ThemeModes.light });
const defaultContext: ThemeContextType = [defaultTheme, () => null];
export const ThemeContext = React.createContext(defaultContext);

export interface ThemeOverrideProps {
  primaryColor?: string;
  secondaryColor?: string;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
  initialScheme?: ThemeModes;
  theme?: ThemeOverrideProps;
}

export type ThemeContextType = [Theme, () => any];

export type ThemeProvider<ThemeProviderProps> = (
  props: ThemeProviderProps,
) => React.ContextType<any>;

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, initialScheme, theme = {} } = props;
  const colorScheme = useColorScheme();
  console.log(
    `Detected device color scheme: ${colorScheme}`,
    `initial color scheme: ${initialScheme || colorScheme}`,
  );

  const [themeMode, setThemeMode] = React.useState(
    initialScheme || colorScheme,
  );

  const toggleTheme = React.useCallback(
    (): any =>
      setThemeMode((mode) =>
        mode === ThemeModes.light ? ThemeModes.dark : ThemeModes.light,
      ),
    [themeMode],
  );

  const nextTheme = React.useMemo(() => {
    const nextTheme =
      themeMode === ThemeModes.light
        ? makeTheme({ mode: ThemeModes.light, ...theme })
        : makeTheme({ mode: ThemeModes.dark, ...theme });
    return nextTheme;
  }, [themeMode]);

  const value = [nextTheme, toggleTheme] as ThemeContextType;
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
