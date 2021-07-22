import React from 'react';
import { SplitHero } from 'eros-ui/components';
import SaintGeorgeHero from 'eros-ui/assets/Saint_George_Tuscany-1920x1080.jpg';

export const DistributedHero = ({ imageSide = 'left', ...rest }) => (
  <SplitHero
    source={SaintGeorgeHero}
    title="Distributed"
    subtitle="The UX of Central Servers with The Redundancy of Blockchain."
    imageSide={imageSide}
    {...rest}
  />
);

export default DistributedHero;
