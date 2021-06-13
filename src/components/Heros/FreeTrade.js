import React from 'react';
import { SplitHero, OutlinedButton } from 'eros-ui/components';
import Link from 'next/link';

import RomanForaImage from 'eros-ui/assets/Roman_Fora-1920x1080.jpg';

const JoinButtonLink = () => (
  <Link passHref href="/join">
    <a>
      <OutlinedButton testID="JoinButton" text="JOIN" />
    </a>
  </Link>
);

export const FreeTradeHero = ({ imageSide = 'left', ...rest }) => (
  <SplitHero
    source={RomanForaImage}
    title="Free Trade"
    subtitle="Tip, Subscribe, Sell, Buy, and Send Money for Free"
    imageSide={imageSide}
    {...rest}
  />
);

export default FreeTradeHero;
