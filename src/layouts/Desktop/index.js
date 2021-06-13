import React from 'react';
import { TipModal, SocialDrawer, ToolsDrawer } from 'eros-ui/components';

export const DesktopLayout = ({ Component, pageProps }) => (
  <>
    <ToolsDrawer />
    <Component {...pageProps} />
    <SocialDrawer />
    <TipModal />
  </>
);

export default DesktopLayout;
