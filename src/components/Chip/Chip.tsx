import React, { useState } from 'react';
import { Platform, ViewStyle, StyleSheet } from 'react-native';

import { makeStyles, TypographyTypes, Theme } from 'eros-ui/theme';
import Paper, { PaperProps } from 'eros-ui/components/Paper';

import Typography from 'eros-ui/components/Typography';

const DEFAULT_CHIP_HEIGHT = 32;

export interface ChipProps extends PaperProps {
  text?: string;
  flat?: boolean;
  style?: ViewStyle;
  hoverStyle?: ViewStyle;
  focusStyle?: ViewStyle;
  onPress?: () => void;
}

const Chip: React.FC<ChipProps> = (props) => {
  const {
    text,
    flat = false,
    style,
    hoverStyle,
    focusStyle,
    children,
    ...rest
  } = props;
  const [focus, setFocus] = useState(false);
  const [hover, setHover] = useState(false);
  const styles = useStyles();

  const ChipStyle = React.useMemo(
    () =>
      StyleSheet.flatten([
        styles.Chip,
        hover && styles.ChipHovered,
        hover && hoverStyle,
        focus && styles.ChipFocused,
        focus && focusStyle,
        flat && styles.ChipFlat,
        Platform.OS === 'web' && { outlineWidth: 0 }, // needed for Web
        style,
      ]),
    [],
  );

  return (
    <Paper
      style={ChipStyle}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}>
      {(text && <Typography type={TypographyTypes.body2}>{text}</Typography>) ||
        children ||
        null}
    </Paper>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  Chip: Platform.select({
    default: {
      height: DEFAULT_CHIP_HEIGHT,
      borderRadius: DEFAULT_CHIP_HEIGHT,
      borderColor: theme.borderColor,
      borderWidth: theme.borderWidth,
      paddingLeft: theme.padding,
      paddingRight: theme.padding,
      overflow: 'hidden',
      justifyContent: 'center',
    },
  }),
  ChipFlat: Platform.select({
    web: {
      backgroundColor: theme.canvas2Opaque,
      borderWidth: 0,
      outlineWidth: 0,
    },
    default: { backgroundColor: theme.canvas2Opaque, borderWidth: 0 },
  }),
  ChipHovered: {
    borderColor: theme.textColor.disabled,
    color: theme.textColor.secondary,
    ...theme.shadow(8),
    backgroundColor: theme.canvas2Opaque,
  },
  ChipFocused: {
    borderColor: theme.textColor.secondary,
    color: theme.textColor.primary,
    ...theme.shadow(8),
    backgroundColor: theme.canvas2Opaque,
  },
}));

export default Chip;
