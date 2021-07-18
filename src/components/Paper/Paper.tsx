import React, { forwardRef, ReactNode } from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';
import { makeStyles, Theme } from 'eros-ui/theme';

import { shadow as shadowStyles } from '../Shadow';

interface PaperProps extends ViewProps {
  children?: ReactNode;
  style?: ViewStyle;
  shadow?: number;
  onPress?: () => void;
  fullWidth?: boolean;
}

const Paper = forwardRef<View, PaperProps>((props: PaperProps, ref) => {
  const {
    children,
    style,
    shadow = 4,
    onPress,
    fullWidth = false,
    ...rest
  } = props;
  const styles = useStyles();

  return (
    <View
      ref={ref}
      style={[
        styles.paper,
        shadowStyles(shadow),
        fullWidth && { width: '100%' },
        style,
      ]}
      {...rest}
    />
  );
});

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    backgroundColor: theme.canvas,
    borderWidth: theme.borderWidth,
    borderColor: theme.borderColor,
    borderRadius: theme.padding,
    overflow: 'hidden',
  },
}));

export default Paper;
