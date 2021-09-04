import React from 'react';
import Typography, { TypographyProps } from '../Typography';
import { TypographyTypes } from '@kanelabs/ux/theme';

const ListItemText: React.FC<TypographyProps> = (props) => (
  <Typography type={TypographyTypes.body1} {...props} />
);

export default ListItemText;
