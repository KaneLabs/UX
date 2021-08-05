import React from 'react';
import { AccountButton } from 'eros-ui/containers';
import Link from 'next/link';

interface AccountLinkButtonProps {
  handle: string;
  onHover?: () => void;
}

const AccountLinkButton: React.FC<AccountLinkButtonProps> = props => {
  const { handle, onHover } = props;
  return (
    <Link passHref href="/[creator]" as={`/@${handle}`}>
      <AccountButton onHover={onHover} size={32} />
    </Link>
  );
};

export default AccountLinkButton;
