import React from 'react';
import { Button } from 'eros-ui/components';
import { useMutation } from '@apollo/react-hooks';
import { FOLLOW, UNFOLLOW, PERSONA } from 'eros-ui/queries';

export const FollowButton = ({ handle, following }) => {
  const [follow] = useMutation(FOLLOW, {
    update: (cache) => {
      const { Persona } = cache.readQuery({ query: PERSONA, variables: { handle } });
      cache.writeQuery({
        query: PERSONA,
        variables: { handle },
        data: { Persona: { ...Persona, followers: Persona.followers + 1 }, Following: true },
      });
    },
  });
  const [unfollow] = useMutation(UNFOLLOW, {
    update: (cache) => {
      const { Persona } = cache.readQuery({ query: PERSONA, variables: { handle } });
      cache.writeQuery({
        query: PERSONA,
        variables: { handle },
        data: { Persona: { ...Persona, followers: Persona.followers - 1 }, Following: false },
      });
    },
  });
  const onPress = () => {
    const options = { variables: { handle } };
    if (following) {
      return unfollow(options);
    }
    return follow(options);
  };
  return <Button primary onPress={onPress} text={following ? 'UNFOLLOW' : 'FOLLOW'} />;
};

export default FollowButton;
