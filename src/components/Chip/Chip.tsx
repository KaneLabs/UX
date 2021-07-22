import React, { useState } from 'react';
import { View, Platform } from 'react-native';

import { useTheme, makeStyles, shadow } from 'eros-ui/theme';
import Paper from 'eros-ui/components/Paper';
import Typography from 'eros-ui/components/Typography';

const DEFAULT_CHIP_HEIGHT = 32;

const useStyles = makeStyles(theme => ({
  default: Platform.select({
    default: {
      height: DEFAULT_CHIP_HEIGHT,
      borderRadius: DEFAULT_CHIP_HEIGHT,
      // maxWidth: DEFAULT_CHIP_HEIGHT * 3,
      borderColor: theme.borderColor,
      borderWidth: theme.borderWidth,
      paddingLeft: theme.padding,
      paddingRight: theme.padding,
      overflow: 'hidden',
      justifyContent: 'center',
    },
  }),
  flat: Platform.select({
    web: {
      backgroundColor: theme.canvas2Opaque,
      borderWidth: 0,
      outlineWidth: 0,
    },
    default: { backgroundColor: theme.canvas2Opaque, borderWidth: 0 },
  }),
}));

const Chip = ({
  text = null,
  flat = false,
  style = null,
  hoverStyle = null,
  focusStyle = null,
  children,
  ...rest
}) => {
  const [{ textColor, canvas2Opaque }] = useTheme();
  const [focus, setFocus] = useState(false);
  const [hover, setHover] = useState(false);
  const styles = useStyles();

  const ChipStyle = [
    styles.default,
    hover && {
      borderColor: textColor.disabled,
      color: textColor.secondary,
      ...shadow(8),
      backgroundColor: canvas2Opaque,
      ...hoverStyle,
    },
    // focus && {
    //   borderColor: textColor.secondary,
    //   color: textColor.primary,
    //   ...shadow(8),
    //   backgroundColor: canvas2Opaque,
    //   ...focusStyle,
    // },
    flat && styles.flat,
    Platform.OS === 'web' && { outlineWidth: 0 }, // needed for Web
    style,
  ];

  return (
    <Paper
      style={ChipStyle}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}>
      {(text && <Typography type="body2">{text}</Typography>) ||
        children ||
        null}
    </Paper>
  );
};

export default Chip;
