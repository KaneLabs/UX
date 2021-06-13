import React, { useState } from 'react';
import { Platform } from 'react-native';
import { IconButton } from 'eros-ui/components';
import { useTheme } from 'eros-ui/theme';
import { useMutation } from '@apollo/react-hooks';
import { LIKE_POST, TIMELINE } from 'eros-ui/queries';

export const LikeButton = ({ postId, likes = 0, liked = false }) => {
  const [like] = useMutation(LIKE_POST);
  const [isLiked, setIsLiked] = useState(liked);

  const update = (cache) => {
    const { Timeline } = cache.readQuery({ query: TIMELINE });
    console.log('Timeline', Timeline);
    // cache.writeQuery({
    //   query: PERSONA,
    //   variables: { handle },
    //   data: { Persona: { ...Persona, followers: Persona.followers + 1 }, Following: true },
    // });
  };

  const onPress = (e) => {
    e.preventDefault();
    try {
      if (!liked) {
        const options = { variables: { postId }, update };
        like(options);
        setIsLiked(true);
      } else {
        const options = { variables: { postId, unlike: true }, update };
        like(options);
        setIsLiked(false);
      }
    } catch (e) {}
  };

  const [{ iconColor, primaryColor }] = useTheme;

  return (
    <IconButton
      testID="LikeButton"
      name="ios-flame-outline"
      color={isLiked ? primaryColor : iconColor}
      onPress={onPress}
    />
  );
};

export default LikeButton;
