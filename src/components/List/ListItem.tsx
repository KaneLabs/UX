import React, { useState } from 'react';
import {
  TouchableOpacity,
  View,
  TouchableOpacityProps,
  StyleSheet,
} from 'react-native';
import { makeStyles, Theme } from '@kanelabs/ux/theme';
import Color from 'color';
import colorString from 'color-string';

export interface ListItemProps extends TouchableOpacityProps {
  dense?: boolean;
  focused?: boolean;
}

const ListItem: React.FC<ListItemProps> = props => {
  const { children, onPress, dense = false, focused, style, ...rest } = props;
  // const [focused, setFocused] = useState(false);
  const styles = useStyles();

  const combinedStyles = StyleSheet.flatten([
    styles.core,
    dense ? styles.listItemDense : styles.listItem,
    focused && styles.focused,
    style,
  ]);

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={combinedStyles} {...rest}>
          {children}
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View {...rest} style={combinedStyles}>
      {children}
    </View>
  );
};

const useStyles = makeStyles((theme: Theme) => {
  const fadedPrimary = Color(
    colorString.to.rgb(colorString.get.rgb(theme.primaryColor)),
  ).fade(0.7);
  fadedPrimary.color.push(fadedPrimary.valpha);
  const realfadedPrimary = colorString.to.rgb(fadedPrimary.color);
  return {
    core: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
    },
    listItem: {
      height: 48, // 48
    },
    listItemDense: {
      height: 40, // 40
    },
    focused: {
      backgroundColor: realfadedPrimary,
      // backgroundColor: textColor.faint,
    },
  };
});

export default ListItem;
