import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import useTheme from './useTheme';

const makeStyles = (themeFn) => {
  const useStyles = () => {
    const [currTheme] = useTheme();
    const styles = useMemo(() => StyleSheet.create(themeFn(currTheme)), [currTheme.mode]);
    return styles;
  };

  return useStyles;
};

export default makeStyles;
