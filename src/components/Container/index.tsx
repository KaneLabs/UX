import React, { FC } from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';
import { makeStyles } from 'eros-ui/theme';

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export interface ContainerProps extends ViewProps {
  center?: boolean;
}

const Container: React.FC<ContainerProps> = (props) => {
  const { style, center = false, ...rest } = props;
  const styles = useStyles();
  const containerStyles = StyleSheet.flatten([
    styles.container,
    center && styles.center,
    style,
  ]);
  return <View style={containerStyles} {...rest} />;
};

export default Container;
