import React from 'react';
import { View } from 'eros-ui/components';
import { makeStyles } from 'eros-ui/theme';
import PersonaHeaderAvatar from './PersonaHeaderAvatar';
import PersonaDescription from './PersonaDescription';

export const PersonaHeaderMain = ({
  avatarUrl,
  display,
  handle,
  mobile = false,
}) => {
  const styles = useStyles();
  return (
    <View style={styles.headerMain}>
      <PersonaHeaderAvatar avatarUrl={avatarUrl} mobile={mobile} />

      <PersonaDescription display={display} handle={handle} mobile={mobile} />
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  headerMain: {
    width: '100%',
    maxWidth: theme.FEED_WIDTH,
    paddingTop: theme.unit * 2,
    padding: theme.unit * 2,
    flexDirection: 'row',
  },
}));

export default PersonaHeaderMain;
