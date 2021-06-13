import React from 'react';
import { Button } from 'eros-ui/components';
import { makeStyles } from 'eros-ui/theme';

const useStyles = makeStyles((theme) => ({ button: { minWidth: 48 } }));

const JoinLinkButton = () => {
  const styles = useStyles();
  return (
    <Button style={styles.button} testID="JoinLinkButton" text="JOIN" primary />
  );
};

export default JoinLinkButton;
