import * as React from 'react';
import { useRouter } from 'next/router';
import { Persona } from 'eros-ui/containers';
import AvailablePersonaPage from 'eros-ui/pages/Persona/Available';
import { useQuery } from '@apollo/react-hooks';
import { PERSONA } from 'eros-ui/queries';

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
