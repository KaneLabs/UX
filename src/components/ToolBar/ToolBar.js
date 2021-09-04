import React from 'react';
import { View } from 'react-native';
import { borderColor } from '@kanelabs/ux/theme';

const alignReducer = (align) => {
  switch (align) {
    case 'end':
      return 'flex-end';
    case 'center':
      return 'center';
    default:
      return 'flex-start';
  }
};

export const ToolBar = ({ children, align = null, style = {} }) => {
  const justifyContent = alignReducer(align);

  return (
    <View style={[styles.toolbar, style, { justifyContent }]}>{children}</View>
  );
};

const styles = {
  toolbar: {
    flexDirection: 'row',
    width: '100%',
    // borderTopWidth: StyleSheet.hairlineWidth,
    // borderColor,
  },
};
