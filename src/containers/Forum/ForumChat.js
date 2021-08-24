import React, { useState } from 'react';
import {
  Container,
  Paper,
  NavPlaceHolder,
  AccountButton,
  List,
  ListItem,
  ListItemText,
  View,
  IconButton,
  Subtitle,
} from 'eros-ui/components';
import { StyleSheet } from 'react-native';
import { DRAWER, FORUM_CHAT } from 'eros-ui/queries';
import { useQuery, useSubscription } from '@apollo/client';
// import ForumToolbar from './ForumToolbar';
import { NAV_HEIGHT, makeStyles } from 'eros-ui/theme';
import ForumMembersList from './ForumMembersList';
import ForumChatInput from './ForumChatInput';
import ForumMember from './ForumMember';

export const ChatList = ({ data = [] }) => (
  <List dense>
    {data.map(({ message }) => (
      <ListItem dense>
        <ListItemText text={message} />
      </ListItem>
    ))}
  </List>
);

export const ForumChat = ({ forumId }) => {
  const {
    data: {
      Drawer: { open: drawerOpen },
    },
  } = useQuery(DRAWER);
  const [chatList, setChatList] = useState([]);
  const [index, setIndex] = useState(0);
  const [selectedMember, setSelectedMember] = useState(null);
  const onSubscriptionData = ({ subscriptionData }) =>
    setChatList((state) => [...state, subscriptionData.data.ForumChat]);

  const options = {
    variables: { forumId },
    shouldResubscribe: true,
    onSubscriptionData,
  };
  useSubscription(FORUM_CHAT, options);

  const onPressMember = (member) => {
    setSelectedMember(member);
    setIndex(2);
  };
  console.log('chatList', chatList);

  const _renderStep = () => {
    switch (index) {
      case 0:
        return <ChatList data={chatList} />;
      case 1:
        return (
          <ForumMembersList forumId={forumId} onPressMember={onPressMember} />
        );
      case 2:
        return <ForumMember {...selectedMember} />;
      default:
        throw 'Unexpected Index';
    }
  };

  const goBack = () => setIndex((last) => last - 1);

  const styles = useStyles();

  return (
    <Paper style={styles.paper}>
      <View style={styles.forumChatHeader}>
        {index === 0 ? (
          <View style={{ height: NAV_HEIGHT, width: NAV_HEIGHT }} />
        ) : (
          <IconButton name="ios-arrow-round-back" onPress={goBack} />
        )}

        <Subtitle type={6} text={index === 0 ? 'Forum Chat' : 'Members'} />
        {index === 1 ? (
          <View style={{ height: NAV_HEIGHT, width: NAV_HEIGHT }} />
        ) : (
          <IconButton name="ios-contacts" onPress={() => setIndex(1)} />
        )}
      </View>
      <Container>{_renderStep()}</Container>
      <ForumChatInput forumId={forumId} />
    </Paper>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '100%',
    maxWidth: 270,
    borderRadius: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRightWidth: 0,
  },
  forumChatHeader: {
    width: '100%',
    height: NAV_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: unit / 2,
  },
}));

export default ForumChat;
