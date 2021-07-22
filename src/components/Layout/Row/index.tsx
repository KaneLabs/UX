import React, { forwardRef } from 'react';
import { View } from 'react-native';

export const Row = ({
  children, style = null, center = null, fullWidth = false,
}) => {
  const rowStyle = [styles.row, center && styles.center, fullWidth && styles.fullWidth, style];
  return <View style={rowStyle}>{children}</View>;
};

const styles = {
  row: { flexDirection: 'row' },
  center: { alignItems: 'center' },
  fullWidth: { width: '100%' },
};
