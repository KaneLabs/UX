import React from 'react';
import useDimensions from 'eros-ui/state/useDimensions';
import MobileLayout from './Mobile';
import DesktopLayout from './Desktop';

const Layout = ({ Component, pageProps }) => {
  const { mobile } = useDimensions();

  if (mobile) {
    return <MobileLayout Component={Component} pageProps={pageProps} />;
  }

  return <DesktopLayout Component={Component} pageProps={pageProps} />;
};

export default Layout;
