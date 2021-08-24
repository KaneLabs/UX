import React, { useState } from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import Icon from 'eros-ui/components/Icon';
import { useTheme, makeStyles, Theme } from 'eros-ui/theme';
import shadow from '../Shadow';

export interface IconButtonProps extends TouchableOpacityProps {
  name?: string;
  color?: string;
  size?: number;
  padding?: number;
  fab?: boolean;
  hoverStyle?: ViewStyle
}

const IconButton: React.FC<IconButtonProps> = (props) => {
  const [{ iconSize, iconPadding, iconColor }] = useTheme();
  const {
    padding = iconPadding,
    color = iconColor,
    size = iconSize,
    style,
    hoverStyle,
    name,
    fab = false,
    ...rest
  } = props;
  const styles = useStyles();
  const [hover, setHover] = useState(false);

  const overrideableStyle = React.useMemo(() => {
    const height = size + padding * 2;
    const sizeStyles = {
      height,
      width: height,
      borderRadius: height,
      padding,
    };
    return StyleSheet.flatten([
      styles.core,
      hover ? styles.iconButtonHover : styles.iconButton,
      sizeStyles,
      style,
      hover && hoverStyle,
      fab && styles.fab,
      fab && shadow(8),
      hover && fab && styles.fabHover,
      hover && fab && shadow(12),
    ]);
  }, [hover, fab, style, styles, hoverStyle, padding, size]);

  return (
    <TouchableOpacity
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={overrideableStyle}
      {...rest}>
      <Icon name={name} color={color} size={size} />
    </TouchableOpacity>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  core: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  icon: {
    color: theme.iconColor,
    padding: theme.iconPadding,
  },
  iconButton: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 1,
  },
  iconButtonHover: {
    backgroundColor: theme.primaryColorOpaqueUltralight,
    borderColor: theme.primaryColorOpaqueLight,
    borderWidth: theme.borderWidth,
  },
  fab: {
    height: theme.NAV_HEIGHT,
    width: theme.NAV_HEIGHT,
    backgroundColor: theme.primaryColor,
    borderRadius: theme.NAV_HEIGHT,
    borderWidth: 0,
  },
  fabHover: {
    backgroundColor: theme.primaryColorLighten,
  },
}));

export default IconButton;
