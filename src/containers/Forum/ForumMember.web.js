import React from 'react';
import {
  View,
  Avatar,
  Subtitle,
  List,
  ListItem,
  ListItemText,
} from 'eros-ui/components';
import { StyleSheet } from 'react-native';
import { makeStyles } from 'eros-ui/theme';
import Link from 'next/link';

export const ForumMember = ({
  id, avatarUrl, display, handle, role = null, joinedAt = null,
}) => (
  <View style={styles.container}>
    <View>
      <Link passHref to="/[creator]" as={`/@${handle}`}>
        <a>
          <Avatar avatarUrl={avatarUrl} size={90} />
          <Subtitle text={`@${handle}`} type={2} />
        </a>
      </Link>
    </View>

    <List dense>
      <ListItem onPress={() => alert('PM coming soon')}>
        <ListItemText text="Send Message" />
      </ListItem>
      <ListItem onPress={() => alert('Money Transfer coming soon')}>
        <ListItemText text="Send Money" />
      </ListItem>
    </List>
  </View>
);

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
}));

export default ForumMember;
