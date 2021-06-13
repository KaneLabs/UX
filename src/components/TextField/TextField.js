import React, { useState } from 'react';
import { StyleSheet, TextInput, Platform } from 'react-native';

import { useTheme, makeStyles, shadow } from 'eros-ui/theme';

const TextField = React.forwardRef(({
  autoFocus = false, style = null, flat = false, hoverStyle = null, focusStyle = null, ...rest
}, ref) => {
  const [{
    textColor, mode, canvas2Opaque,
  }] = useTheme();
  const [focus, setFocus] = useState(autoFocus);
  const [hover, setHover] = useState(false);
  const styles = useStyles();

  const textFieldStyle = ([
    styles.default,
    hover && {
      borderColor: textColor.disabled,
      color: textColor.secondary,
      ...shadow(8),
      backgroundColor: canvas2Opaque,
      ...hoverStyle,
    },
    focus && {
      borderColor: textColor.secondary,
      color: textColor.primary,
      ...shadow(8),
      backgroundColor: canvas2Opaque,
      ...focusStyle,
    },
    flat && styles.flat,
    Platform.OS === 'web' && ({ outlineWidth: 0 }), // needed for Web
    style,
  ]);

  return (
    <TextInput
      ref={ref}
      style={textFieldStyle}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      keyboardAppearance={mode}
      placeholderTextColor={focus || hover ? textColor.secondary : textColor.disabled}
      {...rest}
    />
  );
});

const useStyles = makeStyles((theme) => ({
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
    web: ({ borderWidth: 0, outlineWidth: 0 }),
    default: ({ borderWidth: 0 }),
  }),
}));

export default TextField;
