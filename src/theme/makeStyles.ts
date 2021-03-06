import { useMemo } from 'react';
import { StyleSheet, StyleSheetProperties } from 'react-native';
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

  return () => StyleSheet.create(useStyles());
};

export default makeStyles;
