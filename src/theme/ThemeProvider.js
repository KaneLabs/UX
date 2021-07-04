import React, {
  useState, useMemo, createContext, useCallback,
} from 'react';
import { useColorScheme } from 'react-native';
import * as light from './light';
import * as dark from './dark';

export const ThemeContext = createContext(null);

export const ThemeProvider = (props) => {
  const { children, initialScheme } = props;
  const colorScheme = useColorScheme();
  console.log(`Detected device color scheme: ${colorScheme}`);
  const [themeMode, setThemeMode] = useState(initialScheme || colorScheme);
  const toggleTheme = useCallback(() => setThemeMode((mode) => (mode === 'light' ? 'dark' : 'light')));
  const value = useMemo(
    () => (themeMode === 'light' ? [light, toggleTheme] : [dark, toggleTheme]),
    [themeMode],
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
