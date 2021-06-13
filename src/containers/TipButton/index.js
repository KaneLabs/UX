import React from 'react';
import { Button } from 'eros-ui/components';
import { useMutation } from '@apollo/react-hooks';
import { OPEN_TIP_MODAL } from 'eros-ui/queries';

export default () => {
  const [openTipModal] = useMutation(OPEN_TIP_MODAL);
  return <Button secondary text="TIP" onPress={openTipModal} />;
};
