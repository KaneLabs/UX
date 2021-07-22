import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { useTheme, makeStyles } from 'eros-ui/theme';
import shadow from '../Shadow';

const useStyles = makeStyles(theme => ({
  core: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  icon: {
    color: theme.iconColor,
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

const IconButton = props => {
  const [{ iconSize, iconPadding, iconColor }] = useTheme();
  const {
    padding = iconPadding,
    color = iconColor,
    size = iconSize,
    style = null,
    hoverStyle = null,
    name = null,
    fab = false,
    ...rest
  } = props;
  const styles = useStyles();
  const [hover, setHover] = useState(false);
  const height = size + padding * 2;
  const sizeStyles = {
    height,
    width: height,
    borderRadius: height,
    padding,
  };
  const iconButtonStyles = [
    styles.core,
    hover ? styles.iconButtonHover : styles.iconButton,
    sizeStyles,
    style,
    hover && hoverStyle,
    fab && styles.fab,
    fab && shadow(8),
    hover && fab && styles.fabHover,
    hover && fab && shadow(12),
  ];
  return (
    <TouchableOpacity
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={iconButtonStyles}
      {...rest}>
      <Icon name={name} color={color} size={size} />
    </TouchableOpacity>
  );
};

export default IconButton;
