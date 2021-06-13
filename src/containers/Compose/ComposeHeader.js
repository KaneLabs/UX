import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ACCOUNT } from 'eros-ui/queries';
import { PersonaHeaderMain } from '../..';
// import { textColor } from 'eros-ui/theme';

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
