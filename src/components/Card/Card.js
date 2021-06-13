import React, { forwardRef } from 'react';
import Paper from '../Paper';
// import { View } from 'react-native';

export const Card = forwardRef(({ ...props }, ref) => (
  <Paper ref={ref} {...props} />
));

export default Card;
