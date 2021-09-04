import * as React from 'react';
import { useRouter } from 'next/router';
import { Persona } from '@kanelabs/ux/containers';
import AvailablePersonaPage from '@kanelabs/ux/pages/Persona/Available';
import { useQuery } from '@apollo/client';
import { PERSONA } from '@kanelabs/ux/queries';

export default () => {
  const router = useRouter();
  const { creator } = router.query;
  const handle = creator.slice(1);
  const { data } = useQuery(PERSONA, { variables: { handle } });
  const persona = data && data.Persona;
  const isFollowing = data && data.Following;
  const isAvailable = persona && persona.available;

  if (isAvailable) {
    return <AvailablePersonaPage handle={handle} />;
  }

  return <Persona handle={handle} persona={persona} following={isFollowing} />;
};
