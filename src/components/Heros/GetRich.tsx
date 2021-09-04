import React from 'react';
import { SplitHero, OutlinedButton } from '@kanelabs/ux/components';
import Link from 'next/link';

const JoinButtonLink = () => (
  <Link passHref href="/join">
    <a>
      <OutlinedButton testID="JoinButton" text="JOIN" />
    </a>
  </Link>
);

export const GetRichHero = ({ imageSide = 'right', ...rest }) => (
  <SplitHero
    source="/assets/Roman_Fora-1920x1080.jpg"
    title="Get Rich"
    subtitle="Earn cash on your content. Tip, Subscribe, & Send Money for freetype. "
    imageSide={imageSide}
    {...rest}
  />
);

export default GetRichHero;
