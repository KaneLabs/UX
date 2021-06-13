import React from 'react';
import { Row, TipButton, FollowButton } from 'eros-ui/components';
import { makeStyles } from 'eros-ui/theme';
import EditButton from 'eros-ui/containers/EditButton';

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
