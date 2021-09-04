import * as React from 'react';
import Container, { ContainerProps } from '@kanelabs/ux/components/Container';
import { StyleSheet, SafeAreaView } from 'react-native';
import { makeStyles, Theme } from '@kanelabs/ux/theme';

interface ScreenProps extends ContainerProps {
  safe?: boolean;
  padNav?: boolean;
  padded?: boolean;
}

const Screen: React.FC<ScreenProps> = ({ safe, padded, padNav, ...props }) => {
  const styles = useStyles();

  if (safe && padNav && padded) {
    const style = StyleSheet.compose(
      styles.ScreenSafePadNavPadding,
      (props.style = {}),
    );

    return (
      <SafeAreaView style={style}>
        <Container {...props} />
      </SafeAreaView>
    );
  }

  if (safe && padNav) {
    const style = StyleSheet.compose(
      styles.ScreenSafePadNav,
      (props.style = {}),
    );

    return (
      <SafeAreaView style={style}>
        <Container {...props} />
      </SafeAreaView>
    );
  }

  if (safe) {
    const style = StyleSheet.compose(styles.Screen, (props.style = {}));
    return (
      <SafeAreaView style={style} {...props}>
        <Container />
      </SafeAreaView>
    );
  }

  const style = StyleSheet.compose(styles.Screen, (props.style = {}));
  return <Container style={style} {...props} />;
};

const useStyles = makeStyles((theme: Theme) => {
  return {
    Screen: theme.Screen,
    ScreenSafe: {
      ...theme.Screen,
    },
    ScreenSafePadNav: {
      ...theme.Screen,
      marginTop: theme.NAV_HEIGHT,
    },
    ScreenSafePadNavPadding: {
      ...theme.Screen,
      marginTop: theme.NAV_HEIGHT + theme.padding,
      padding: theme.padding,
    },
    ScreenPadded: {
      ...theme.Screen,
      padding: theme.padding,
    },
  };
});

export default Screen;
