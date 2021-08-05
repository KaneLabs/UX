import React from 'react';
import { arrayifyStyle } from 'eros-ui/fns';
import { Button } from 'eros-ui/components';

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
