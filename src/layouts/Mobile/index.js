import React from 'react';
import { Nav, Drawer, ComposeModal } from 'eros-ui/components';
import AppBarBottom from 'eros-ui/containers/AppBarBottom';

export const MobileLayout = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <AppBarBottom />
    <Drawer from="left" mobile />
    <ComposeModal mobile />
  </>
);

export default MobileLayout;
