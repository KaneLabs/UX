import { useContext } from 'react';
import { ThemeContext, ThemeContextType } from './ThemeProvider';

const useTheme = (): ThemeContextType => {
  const [theme, toggleTheme] = useContext(ThemeContext) as ThemeContextType;
  return [theme, toggleTheme] as ThemeContextType;
};

export default useTheme;
