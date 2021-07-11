import { useContext } from 'react';
import { ThemeContext, ThemeContextType } from './ThemeProvider';

const useTheme = () => {
  const [theme, toggleTheme] = useContext(ThemeContext) as ThemeContextType;
  return [theme, toggleTheme];
};

export default useTheme;
