import * as React from 'react';
import {
  StyleSheet,
  TextInput,
  Platform,
  TextInputProps,
  ViewStyle,
} from 'react-native';

import { useTheme, makeStyles, Theme, ThemeModes } from '@kanelabs/ux/theme';

export interface TextFieldProps extends TextInputProps {
  flat?: boolean;
  fullWidth?: boolean;
  hoverStyle?: ViewStyle;
  focusStyle?: ViewStyle;
  children?: React.ReactNode;
}

const TextField = React.forwardRef<TextInput, TextFieldProps>((props, ref) => {
  const {
    autoFocus = false,
    style = null,
    flat = false,
    fullWidth = false,
    hoverStyle,
    focusStyle,
    ...rest
  }: TextFieldProps = props;
  const [theme] = useTheme();
  const [focus, setFocus] = React.useState(autoFocus);
  const [hover, setHover] = React.useState(false);
  const styles = useStyles();

  const textFieldStyle = React.useMemo(
    () =>
      StyleSheet.flatten([
        styles.default,
        hover && StyleSheet.compose(styles.hover, hoverStyle),
        focus && StyleSheet.compose(styles.focus, focusStyle),
        flat && styles.flat,
        fullWidth && styles.fullWidth,
        Platform.OS === 'web' && { outlineWidth: 0 }, // needed for Web
        style,
      ]),
    [hover, focus, hoverStyle, focusStyle, fullWidth, style],
  );

  const keyboardAppearance = theme.mode === ThemeModes.light ? 'light' : 'dark';
  return (
    <TextInput
      ref={ref}
      style={textFieldStyle}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      keyboardAppearance={keyboardAppearance}
      placeholderTextColor={
        focus || hover ? theme.textColor.primary : theme.textColor.secondary
      }
      {...rest}
    />
  );
});

const useStyles = makeStyles((theme: Theme) => ({
  default: Platform.select({
    default: {
      fontSize: 16,
      lineHeight: 19,
      borderRadius: theme.unit,
      borderColor: theme.borderColor,
      borderWidth: theme.borderWidth,
      color: theme.textColor.secondary,
      alignItems: 'center',
      paddingLeft: theme.unit,
      paddingRight: theme.unit,
      paddingTop: theme.unit / 2,
      paddingBottom: theme.unit / 2,
    },
    web: {
      fontSize: 16,
      lineHeight: 19,
      borderRadius: theme.unit,
      borderColor: theme.borderColor,
      borderWidth: theme.borderWidth,
      color: theme.textColor.secondary,
      alignItems: 'center',
      paddingLeft: theme.unit,
      paddingRight: theme.unit,
      paddingTop: theme.unit / 2,
      paddingBottom: theme.unit / 2,
      outlineWidth: 0,
    },
  }),
  flat: Platform.select({
    web: { borderWidth: 0, outlineWidth: 0 },
    default: { borderWidth: 0 },
  }),
  hover: {
    borderColor: theme.textColor.disabled,
    color: theme.textColor.secondary,
    ...theme.shadow(8),
    backgroundColor: theme.canvas2,
  },
  focus: {
    borderColor: theme.textColor.disabled,
    color: theme.textColor.secondary,
    ...theme.shadow(8),
    backgroundColor: theme.canvas2,
  },
  fullWidth: { width: '100%' },
}));

export default TextField;
