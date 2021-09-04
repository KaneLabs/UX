import React from 'react';
import { SplitHero } from '@kanelabs/ux/components';
import IncoronazioneDellaVergine from '@kanelabs/ux/assets/Incoronazione_della_Vergine-1080x1080.jpg';

export const CreatorOwnedHero = ({ imageSide = 'left', ...rest }) => (
  <SplitHero
    source={IncoronazioneDellaVergine}
    title="Creator Owned"
    subtitle="Shares distributed weekly to top & emerging creators."
    imageSide={imageSide}
    {...rest}
  />
);

export default CreatorOwnedHero;
