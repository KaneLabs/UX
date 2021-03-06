import React from 'react';
import { Button } from '@kanelabs/ux/components';
import { makeStyles } from '@kanelabs/ux/theme';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({ button: { minWidth: 48 } }));

const JoinLinkButton = () => {
  const styles = useStyles();
  return (
    <Link passHref href="/join">
      <a>
        <Button
          style={styles.button}
          testID="JoinLinkButton"
          text="JOIN"
          primary
        />
      </a>
    </Link>
  );
};

export default JoinLinkButton;
