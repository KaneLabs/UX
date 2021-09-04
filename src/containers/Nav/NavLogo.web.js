import React from 'react';
import Link from 'next/link';
import { ForaLogo } from '@kanelabs/ux/components';
import { NAV_HEIGHT } from '@kanelabs/ux/theme';

export const NavLogo = () => (
  <Link passHref href="/">
    <a>
      <ForaLogo style={styles.logo} />
    </a>
  </Link>
);

const styles = {
  logo: { height: NAV_HEIGHT, width: NAV_HEIGHT },
};
