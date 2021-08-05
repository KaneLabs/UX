import * as React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';

export interface RowProps extends ViewProps {
  center?: boolean;
  fullWidth?: boolean;
}

export const Row: React.FC<RowProps> = ({
  children,
  style,
  center = false,
  fullWidth = false,
}) => {
  const rowStyle = StyleSheet.flatten([
    styles.row,
    center && styles.center,
    fullWidth && styles.fullWidth,
    style,
  ]);
  return <View style={rowStyle}>{children}</View>;
};

const styles = StyleSheet.create({
  row: { flexDirection: 'row' },
  center: { alignItems: 'center' },
  fullWidth: { width: '100%' },
});

export default Row;
