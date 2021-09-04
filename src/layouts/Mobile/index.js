import React from 'react';
import { Nav, Drawer, ComposeModal } from '@kanelabs/ux/components';
import AppBarBottom from '@kanelabs/ux/containers/AppBarBottom';

export const MobileLayout = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <AppBarBottom />
    <Drawer from="left" mobile />
    <ComposeModal mobile />
  </>
);

export default MobileLayout;
