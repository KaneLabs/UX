import React, { useState } from 'react';
import { AccountButton, Menu, MenuItem, Button } from '@kanelabs/ux/components';
import Link from 'next/link';
import { useAccount } from '@kanelabs/ux/state';
// import { makeStyles } from '@kanelabs/ux/theme';
import { useMutation } from '@apollo/client';
import { LOGOUT } from '@kanelabs/ux/queries';

const AccountLinkMenuItem = (props) => {
  const { onPress, handle } = props;
  return (
    <Link passHref href="/[creator]" as={`/@${handle}`}>
      <a>
        <MenuItem onPress={onPress} text="Profile" />
      </a>
    </Link>
  );
};

const AccountMenuButton = (props) => {
  const account = useAccount();
  const [open, setOpen] = useState(false);
  const [logout] = useMutation(LOGOUT);

  const onLogout = async () => {
    await logout();
  };

  return (
    <Menu
      visible={open}
      onBackdropPress={() => setOpen(false)}
      button={
        <AccountButton onPress={() => setOpen((last) => !last)} size={32} />
      }>
      <AccountLinkMenuItem
        handle={account?.handle}
        onPress={() => setOpen(false)}
      />
      <MenuItem text="Logout" onPress={onLogout} />
    </Menu>
  );
};

export default AccountMenuButton;
