import React from 'react';
import Typography from '../Typography';
import { TypographyTypes } from 'eros-ui/theme';
import { TextProps } from 'react-native';

const ListItemText: React.FC<TextProps> = (props) => (
  <Typography type={TypographyTypes.body1} {...props} />
);

export default ListItemText;
