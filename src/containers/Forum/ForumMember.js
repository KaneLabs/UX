import React from 'react';
import {
  View,
  Avatar,
  Subtitle,
  List,
  ListItem,
  ListItemText,
} from '@kanelabs/ux/components';
import { StyleSheet } from 'react-native';
import { makeStyles } from '@kanelabs/ux/theme';

export const ForumMember = ({
  id,
  avatarUrl,
  display,
  handle,
  role = null,
  joinedAt = null,
}) => (
  <View style={styles.container}>
    <View>
      <View>
        <Avatar avatarUrl={avatarUrl} size={90} />
        <Subtitle text={`@${handle}`} type={2} />
      </View>
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
