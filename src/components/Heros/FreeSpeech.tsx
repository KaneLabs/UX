import React from 'react';
import { SplitHero } from 'eros-ui/components';
// import dynamic from 'next/dynamic';
import DeathOfSocratesImage from 'eros-ui/assets/The_Death_of_Socrates-1920x1080.jpg';

export const FreeSpeechHero = ({ imageSide = 'left', ...rest }) => (
  <SplitHero
    source={DeathOfSocratesImage}
    title="Free Speech"
    subtitle="The Right to Be Despicable"
    imageSide={imageSide}
    {...rest}
  />
);

export default FreeSpeechHero;
