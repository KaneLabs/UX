import React, { useState } from 'react';
import {
  TouchableOpacity,
  View,
  TouchableOpacityProps,
  StyleSheet,
} from 'react-native';
import { makeStyles, Theme } from 'eros-ui/theme';

export interface ListItemProps extends TouchableOpacityProps {
  dense?: boolean;
}

const ListItem: React.FC<ListItemProps> = (props) => {
  const { children, onPress, dense = false, style, ...rest } = props;
  const [focused, setFocused] = useState(false);
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

const useStyles = makeStyles((theme: Theme) => ({
  core: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0)',
  },
  listItem: {
    height: theme.unit * 6,
    paddingVertical: theme.unit,
    paddingHorizontal: theme.unit * 1.5,
  },
  listItemDense: {
    height: theme.unit * 4.5,
    paddingVertical: theme.unit,
    paddingHorizontal: theme.unit,
  },
  focused: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    // backgroundColor: textColor.faint,
  },
}));

export default ListItem;
