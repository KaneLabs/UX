import * as React from 'react';
import {
  StyleSheet,
  TextInput,
  Platform,
  TextInputProps,
  ViewStyle,
} from 'react-native';

import { useTheme, makeStyles, Theme, ThemeModes } from 'eros-ui/theme';

interface TextFieldProps extends TextInputProps {
  flat?: boolean;
  hoverStyle?: ViewStyle;
  focusStyle?: ViewStyle;
  children?: React.ReactNode;
}

const TextField = React.forwardRef<TextInput, TextFieldProps>((props, ref) => {
  const {
    autoFocus = false,
    style = null,
    flat = false,
    hoverStyle,
    focusStyle,
    ...rest
  }: TextFieldProps = props;
  const [theme] = useTheme();
  const [focus, setFocus] = React.useState(autoFocus);
  const [hover, setHover] = React.useState(false);
  const styles = useStyles();

  const textFieldStyle = StyleSheet.flatten([
    styles.default,
    hover && StyleSheet.compose(styles.hover, hoverStyle),
    focus && StyleSheet.compose(styles.focus, focusStyle),
    flat && styles.flat,
    Platform.OS === 'web' && { outlineWidth: 0 }, // needed for Web
    style,
  ]);

  const keyboardAppearance = theme.mode === ThemeModes.light ? 'light' : 'dark';
  return (
    <TextInput
      ref={ref}
      style={textFieldStyle}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      keyboardAppearance={keyboardAppearance}
      placeholderTextColor={
        focus || hover ? theme.textColor.secondary : theme.textColor.disabled
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
  }),
  flat: Platform.select({
    web: { borderWidth: 0, outlineWidth: 0 },
    default: { borderWidth: 0 },
  }),
  hover: {
    borderColor: theme.textColor.disabled,
    color: theme.textColor.secondary,
    ...theme.shadow(8),
    backgroundColor: theme.canvas2Opaque,
  },
  focus: {
    borderColor: theme.textColor.disabled,
    color: theme.textColor.secondary,
    ...theme.shadow(8),
    backgroundColor: theme.canvas2Opaque,
  },
}));

export default TextField;
