import React, { forwardRef } from 'react';
import Paper from '../Paper';

const Card = forwardRef(({ ...props }, ref) => <Paper ref={ref} {...props} />);

export default Card;
