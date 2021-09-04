import * as React from 'react';
import dynamic from 'next/dynamic';
import { NavMutatingScroll } from '@kanelabs/ux/components';
import AuthPhoneOrEmail from '@kanelabs/ux/containers/Auth/AuthPhoneOrEmail';
import { useRouter } from 'next/router';

import CreatorOwned from '@kanelabs/ux/components/Heros/CreatorOwned';

const FreeTrade = dynamic(() => import('ui/components/Heros/FreeTrade'), {
  ssr: true,
});
const FreeSpeech = dynamic(() => import('ui/components/Heros/FreeSpeech'), {
  ssr: false,
});
const Distributed = dynamic(() => import('ui/components/Heros/Distributed'), {
  ssr: false,
});

const HerosPage = () => {
  const router = useRouter();
  return (
    <NavMutatingScroll>
      <CreatorOwned imageSide="left">
        <AuthPhoneOrEmail onSuccess={() => router.push('/auth/signup')} />
      </CreatorOwned>
      <FreeTrade imageSide="right" />
      <FreeSpeech imageSide="left" />
      <Distributed imageSide="right" />
    </NavMutatingScroll>
  );
};

export default HerosPage;
