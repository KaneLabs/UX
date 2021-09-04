import * as React from 'react';
import { View, Platform, useWindowDimensions } from 'react-native';
import PersonaFollowers from './PersonaFollowers';
import PersonaButtons from './PersonaButtons';
import PersonaBanner from './PersonaBanner';
import Row from '@kanelabs/ux/components/Row';

import { NAV_HEIGHT, makeStyles } from '@kanelabs/ux/theme';
// import { DRAWER } from '@kanelabs/ux/queries';
// import { useQuery } from '@apollo/client';
// import PersonaDescription from './PersonaDescription';
import PersonaHeaderMain from './PersonaHeaderMain';

export interface PersonaHeaderProps {
  display?: string;
  handle?: string;
  bannerUrl?: string;
  isMe?: boolean;
  following?: boolean;
  followers?: number;
}

export const PersonaHeader: React.FC<PersonaHeaderProps> = (props) => {
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
  const { width } = useWindowDimensions();
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
        width >= 720 && { flex: 1 },
      ]}>
      {bannerUrl ? (
        <PersonaBanner source={{uri: bannerUrl}} />
      ) : (
        <View style={{ height: NAV_HEIGHT, width: sizeStyles.width }} />
      )}

      <PersonaHeaderMain {...props} mobile={width < 720 } />

      <Row fullWidth style={styles.buttonRow}>
        <PersonaFollowers followers={followers || 0} />
        {/* <PersonaButtons handle={handle} isMe={isMe} following={following} /> */}
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
