import React from 'react';
import { Row, TipButton, FollowButton } from '@kanelabs/ux/components';
import { makeStyles } from '@kanelabs/ux/theme';
import EditButton from '@kanelabs/ux/containers/EditButton';

export const PersonaButtons = ({ handle, following, isMe = false }) => {
  const styles = useStyles();
  return (
    <Row style={styles.buttonRow}>
      {isMe && <EditButton />}
      {!isMe && <TipButton />}
      {!isMe && <FollowButton handle={handle} following={following} />}
    </Row>
  );
};

const useStyles = makeStyles((theme) => ({
  buttonRow: { paddingVertical: theme.unit },
}));

export default PersonaButtons;
