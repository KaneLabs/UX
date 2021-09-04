import React from 'react';
import { IconButton } from '@kanelabs/ux/components';
import { DRAWER } from '@kanelabs/ux/queries';
import { useQuery } from '@apollo/client';

import { useTheme } from '@kanelabs/ux/theme';

export const DrawerToggleButton = () => {
  const {
    data: {
      Drawer: { open },
    },
    client,
  } = useQuery(DRAWER);
  const [{ iconColor }] = useTheme();

  return (
    <IconButton
      color={iconColor}
      name={open ? 'ios-arrow-back' : 'ios-arrow-forward'}
      onPress={() => {
        client.writeQuery({
          query: DRAWER,
          data: { Drawer: { open: !open, __typename: 'Drawer' } },
        });
      }}
    />
  );
};

export default DrawerToggleButton;
