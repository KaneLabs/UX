import React, {
  useState,
  useMemo,
  createContext,
  useCallback,
  ReactNode,
} from 'react';
import { useColorScheme } from 'react-native';
import * as light from './light';
import * as dark from './dark';

export const ThemeContext = createContext(null);

interface ThemeProviderProps {
  initialScheme?: string;
  children: ReactNode;
}

interface ThemeType {}

export type ThemeContextType = unknown | [ThemeType, Function];

export type ThemeProvider<ThemeProviderProps> = (
  props: ThemeProviderProps,
) => React.ContextType<any>;

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, initialScheme } = props;
  const colorScheme = useColorScheme();
  console.log(
    `Detected device color scheme: ${colorScheme}`,
    `initial color scheme: ${initialScheme || colorScheme}`,
  );

  const [themeMode, setThemeMode] = useState(initialScheme || colorScheme);
  const toggleTheme = useCallback(
    () => setThemeMode(mode => (mode === 'light' ? 'dark' : 'light')),
    [themeMode],
  );
  const value = useMemo(
    () => (themeMode === 'light' ? [light, toggleTheme] : [dark, toggleTheme]),
    [themeMode],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
