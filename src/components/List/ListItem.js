import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { makeStyles } from 'eros-ui/theme';

export const ListItem = ({
  children, onPress = null, dense = false, style = null, ...rest
}) => {
  const [focused, setFocused] = useState(false);
  const styles = useStyles();

  const combinedStyles = [
    styles.core,
    dense ? styles.listItemDense : styles.listItem,
    focused && styles.focused,
    style,
  ];

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View
          onMouseEnter={() => setFocused(true)}
          onMouseLeave={() => setFocused(false)}
          style={combinedStyles}
          {...rest}
        >
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

const useStyles = makeStyles((theme) => ({
  core: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0)',
  },
  listItem: { paddingVertical: theme.unit, paddingHorizontal: theme.unit * 1.5 },
  listItemDense: { paddingVertical: theme.unit, paddingHorizontal: theme.unit },
  focused: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    // backgroundColor: textColor.faint,
  },
}));

export default ListItem;
