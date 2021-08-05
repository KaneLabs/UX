import * as React from 'react';
import Container, { ContainerProps } from 'eros-ui/components/Container';
import { StyleSheet } from 'react-native';
import { makeStyles, Theme } from 'eros-ui/theme';

interface ScreenProps extends ContainerProps {
  padded?: boolean;
}

const Screen: React.FC<ScreenProps> = (props) => {
  const styles = useStyles();

  return (
    <Container
      style={StyleSheet.compose(
        props?.padded ? styles.ScreenPadded : styles.Screen,
        props.style,
      )}
      {...props}
    />
  );
};

const useStyles = makeStyles((theme: Theme) => {
  return {
    Screen: theme.Screen,
    ScreenPadded: {
      ...theme.Screen,
      padding: theme.padding,
    },
  };
});

export default Screen;
