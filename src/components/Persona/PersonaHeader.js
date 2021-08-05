import React from 'react';
import { View, Platform } from 'react-native';
import { Followers, PersonaButtons, Row, Banner } from 'eros-ui/components';
import { NAV_HEIGHT, makeStyles } from 'eros-ui/theme';
import { useDimensions } from 'eros-ui/state';
// import { DRAWER } from 'eros-ui/queries';
// import { useQuery } from '@apollo/react-hooks';
// import PersonaDescription from './PersonaDescription';
import PersonaHeaderMain from './PersonaHeaderMain';

export const PersonaHeader = (props) => {
  const {
    // display,
    handle,
    followers,
    // avatarUrl,
    bannerUrl,
    // heroUrl,
    isMe,
    following,
    // onPressEdit = () => null,
  } = props;
  const { width, mobile, desktop } = useDimensions();
  const styles = useStyles();
  // const { data: drawerData } = useQuery(DRAWER);

  const sizeStyles = {
    width: Platform.OS === 'web' ? 'calc(100vw)' : width,
    height: Platform.OS === 'web' ? 'calc(100vw / 3)' : width / 3,
    maxHeight: 360,
  };

  return (
    <View
      style={[
        styles.header,
        { width: sizeStyles.width },
        desktop && { flex: 1 },
      ]}>
      {bannerUrl ? (
        <Banner uri={bannerUrl} />
      ) : (
        <View style={{ height: NAV_HEIGHT, width: sizeStyles.width }} />
      )}

      <PersonaHeaderMain {...props} mobile={mobile} />

      <Row fullWidth style={styles.buttonRow}>
        <Followers followers={followers} />
        <PersonaButtons handle={handle} isMe={isMe} following={following} />
      </Row>
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
  },
  headerImageContainer: {
    marginRight: theme.unit * 3.5,
  },
  description: {
    paddingHorizontal: theme.unit * 2.5,
    paddingVertical: theme.unit * 1.5,
  },
  buttonRow: {
    maxWidth: theme.FEED_WIDTH,
    height: theme.NAV_HEIGHT,
    paddingLeft: theme.unit * 2,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

export default PersonaHeader;
