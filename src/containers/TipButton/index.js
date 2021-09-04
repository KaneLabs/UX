import React from 'react';
import { Button } from '@kanelabs/ux/components';
import { useMutation } from '@apollo/client';
import { OPEN_TIP_MODAL } from '@kanelabs/ux/queries';

export default () => {
  const [openTipModal] = useMutation(OPEN_TIP_MODAL);
  return <Button secondary text="TIP" onPress={openTipModal} />;
};
