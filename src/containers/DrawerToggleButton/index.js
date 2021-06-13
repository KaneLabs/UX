import React from 'react';
import { IconButton } from 'eros-ui/components';
import { DRAWER } from 'eros-ui/queries';
import { useQuery } from '@apollo/react-hooks';

import { useTheme } from 'eros-ui/theme';

export const DrawerToggleButton = () => {
  const { data: { Drawer: { open } }, client } = useQuery(DRAWER);
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
