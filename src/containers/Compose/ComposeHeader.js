import React from 'react';
import { useQuery } from '@apollo/client';
import { ACCOUNT } from '@kanelabs/ux/queries';
import { PersonaHeaderMain } from '../..';
// import { textColor } from '@kanelabs/ux/theme';

const ComposeHeader = ({ title = null, mobile = false }) => {
  const { data: accountData } = useQuery(ACCOUNT);
  const account = accountData && accountData.account;

  return <PersonaHeaderMain {...account} mobile={mobile} />;
};

// const styles = {
//   header: {
//     width: '100%',
//     flexDirection: 'column',
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//   },
//   subtitle: { color: textColor.secondary },
// };

export default ComposeHeader;
