import React, { useState } from 'react';
import {
  View,
  Multiline,
  Button,
  ActivityIndicator,
} from '@kanelabs/ux/components';
import { CREATE_FORUM_CHAT_MESSAGE } from '@kanelabs/ux/queries';
import { useMutation } from '@apollo/client';
import { makeStyles } from '@kanelabs/ux/theme';

export const ForumChatInputButtons = ({ onSend, loading = false }) => {
  const styles = useStyles();
  return (
    <View style={styles.chatInputButtons}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Button text="SEND" onPress={onSend} />
      )}
    </View>
  );
};

export const ForumChatInput = ({ forumId }) => {
  const [message, setMessage] = useState('');
  const styles = useStyles();
  const [send, { error, loading }] = useMutation(CREATE_FORUM_CHAT_MESSAGE);

  const onSend = async () => {
    try {
      const input = { forumId, message };
      const options = { variables: { input } };
      const { data } = await send(options);
      const messageReceived = data && data.CreateForumChatMessage;
      if (messageReceived) {
        return setMessage('');
      }
    } catch (e) {
      console.log('e');
    }
  };

  return (
    <View style={styles.chatInputContainer}>
      <Multiline
        value={message}
        onChangeText={setMessage}
        style={styles.chatInput}
      />
      <ForumChatInputButtons onSend={onSend} loading={loading} />
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  chatInputContainer: {
    paddingHorizontal: theme.unit,
    paddingBottom: theme.unit,
  },
  chatInputButtons: {
    flexDirection: 'row',
    marginTop: theme.unit * 1.5,
    justifyContent: 'flex-end',
  },
  chatInput: {
    backgroundColor: theme.textColor.faint,
    fontSize: 14,
    lineHeight: 21,
  },
}));

export default ForumChatInput;
