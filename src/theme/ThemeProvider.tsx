import * as React from 'react';
import { useColorScheme, useWindowDimensions } from 'react-native';
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
  const { children, initialScheme } = props;
  if (!props.theme) console.log('No Theme provided, using default');
  const colorScheme = useColorScheme();

  const [themeMode, setThemeMode] = React.useState(
    initialScheme || colorScheme || 'dark',
  );

  const window = useWindowDimensions();

  const toggleTheme = React.useCallback(
    () =>
      setThemeMode((mode) =>
        mode === ThemeModes.light ? ThemeModes.dark : ThemeModes.light,
      ),
    [],
  );

  const theme = React.useMemo(() => {
    const initialTheme = props.theme ?? {};
    const theme =
      themeMode === ThemeModes.light
        ? makeTheme({ mode: ThemeModes.light, ...initialTheme })
        : makeTheme({ mode: ThemeModes.dark, ...initialTheme });
        theme.window = window;
    return theme;
  }, [themeMode, props.theme, window, colorScheme]);

  const value = [theme, toggleTheme] as ThemeContextType;
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
