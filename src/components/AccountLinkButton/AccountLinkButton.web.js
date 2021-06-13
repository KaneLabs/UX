import React from 'react';
import { AccountButton } from 'eros-ui/containers';
// import { useStyles } from 'eros-ui/theme';
import Link from 'next/link';

const AccountLinkButton = (props) => {
  const { handle } = props;
  return (
    <Link passHref href="/[creator]" as={`/@${handle}`}>
      <AccountButton onHover={(event) => console.log('hover')} size={32} />
    </Link>
  );
};

export default AccountLinkButton;
