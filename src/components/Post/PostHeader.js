import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { BodyText, Avatar, Row } from 'eros-ui/components';
import { makeStyles } from 'eros-ui/theme';
import { formatCreatedAt } from 'eros-ui/fns';

export const PostAvatarButton = ({ avatarUrl, onPress = () => null }) => (
  <TouchableOpacity onPress={onPress} style={styles.postAvatarButton}>
    <View>
      <Avatar avatarUrl={avatarUrl} size={48} />
    </View>
  </TouchableOpacity>
);

export const InlineSpacer = () => (
  <BodyText text="·" style={styles.inlineSpacer} />
);

export const PostHeaderHeadline = ({
  display,
  handle,
  createdAt,
  location = null,
}) => (
  <View style={styles.postHeaderContent}>
    <Row center style={styles.postHeaderTopline}>
      <Row style={{ flex: 1, alignItems: 'center' }}>
        <BodyText text={display} style={styles.postHeaderDisplayName} />
        <InlineSpacer />
        <BodyText text={`@${handle}`} />
      </Row>
      <BodyText
        text={`${formatCreatedAt(createdAt)}`}
        style={styles.postTime}
      />
    </Row>

    <Row>{location && <BodyText text={location} />}</Row>
  </View>
);

export const PostHeader = ({ avatarUrl, display, handle, createdAt }) => (
  <Row styles={styles.postHeader}>
    <PostAvatarButton avatarUrl={avatarUrl} />
    <PostHeaderHeadline
      display={display}
      handle={handle}
      createdAt={createdAt}
    />
  </Row>
);

const useStyles = makeStyles((theme) => ({
  postHeader: {
    width: '100%',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.borderColor,
  },
  postAvatarButton: {
    padding: 16,
  },
  postHeaderContent: {
    paddingTop: 16,
    flex: 1,
  },
  postHeaderDisplayName: {
    fontSize: 17,
    lineHeight: 20,
    fontWeight: '700',
  },
  inlineSpacer: { paddingHorizontal: 4 },
  postHeaderTopline: { marginBottom: 2, width: '100%', alignItems: 'center' },
  postTime: { paddingHorizontal: 8 },
}));

export default PostHeader;
