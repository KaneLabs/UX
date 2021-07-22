import React, { forwardRef } from 'react';
import { View } from 'react-native';
import Typography from '../Typography';

const CardHeader = ({
  children,
  title = null,
  subtitle = null,
  center = false,
  ...props
}) => (
  <View
    style={[{ padding: 16, width: '100%' }, center && { alignItems: 'center' }]}
    {...props}>
    {title && <Typography type="h6" text={title} gutter />}
    {subtitle && <Typography type="subtitle1" text={subtitle} />}
    {children}
  </View>
);

export default CardHeader;
