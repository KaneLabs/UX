import React from 'react';
import { Button } from '@kanelabs/ux/components';
import { makeStyles } from '@kanelabs/ux/theme';

const useStyles = makeStyles((theme) => ({ button: { minWidth: 48 } }));

const JoinLinkButton = () => {
  const styles = useStyles();
  return (
    <Button style={styles.button} testID="JoinLinkButton" text="JOIN" primary />
  );
};

export default JoinLinkButton;
