import React from 'react';
import { View } from 'react-native';
import { useTheme, makeStyles } from '@kanelabs/ux/theme';
import Icon from '../Icon/Icon';

const ListItemIcon = props => {
  const [{ iconSize, iconPadding, padding }] = useTheme();
  const {
    name,
    size = iconSize,
    iconStyle = {},
    iconProps = {},
    style = {},
    ...rest
  } = props;
  const styles = useStyles();

  return (
    <View style={[styles.ListItemIcon, style]} {...rest}>
      <Icon name={name} size={20} style={iconStyle} {...iconProps} />
    </View>
  );
};

const useStyles = makeStyles(theme => ({
  ListItemIcon: {
    marginVertical: theme.padding,
    marginLeft: theme.padding * 2,
    height: theme.padding * 2,
    width: theme.padding * 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ListItemIconDense: {
    margin: theme.padding,
    height: theme.padding * 1.5,
    width: theme.padding * 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default ListItemIcon;
