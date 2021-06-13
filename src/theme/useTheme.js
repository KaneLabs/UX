import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

const useTheme = () => {
  const [theme, toggleTheme] = useContext(ThemeContext);
  return [theme, toggleTheme];
};

export default useTheme;
