import { useMemo } from 'react';
import { StyleSheet, StyleSheetProperties } from 'react-native';
import useTheme from './useTheme';
import Theme from './Theme';

type ThemeFunction = (theme: Theme) => any;

const makeStyles: Function = (themeFn: ThemeFunction) => {
  const useStyles = () => {
    const [currTheme, toggleTheme] = useTheme();
    const styles = useMemo(
      () => StyleSheet.create(themeFn(currTheme)),
      [currTheme.mode],
    );
    return styles;
  };

  return useStyles;
};

export default makeStyles;
