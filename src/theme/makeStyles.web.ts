import { useMemo } from 'react';
import useTheme from './useTheme';
import Theme from './Theme';

type ThemeFunction = (theme: Theme) => any;

const makeStyles = (themeFn: ThemeFunction) => {
  const useStyles = () => {
    const [currTheme] = useTheme();
    const styles = useMemo(
      () => themeFn(currTheme),
      [currTheme],
    );
    return styles;
  };

  return useStyles;
};

export default makeStyles;
