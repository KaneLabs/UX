import React from 'react';
import { arrayifyStyle } from '@kanelabs/ux/fns';
import { Button } from '@kanelabs/ux/components';

export const BackButton = ({ style = {}, size = 32, ...rest }) => {
  const iconStyles = [styles.default, ...arrayifyStyle(style)];
  return (
    <Button style={iconStyles} size={size} {...rest}>
      BACK
    </Button>
  );
};

const styles = {
  default: {
    padding: 16,
  },
};
