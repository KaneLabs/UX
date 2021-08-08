import React from 'react';
import { StyleSheet, TouchableOpacity, View, ViewProps } from 'react-native';

import Avatar from 'eros-ui/components/Avatar';
import Row from 'eros-ui/components/Layout/Row';

import Typography from 'eros-ui/components/Typography';
import { makeStyles } from 'eros-ui/theme';
import { formatCreatedAt } from 'eros-ui/fns';


interface PostAvatarButtonProps extends ViewProps {
  avatarUrl?: string;
  onPress?: () => void;
}


export const PostAvatarButton: React.FC<PostAvatarButtonProps> = ({ avatarUrl, onPress = () => null }) => {
  const styles = useStyles();

  return (
  <TouchableOpacity onPress={onPress} style={styles.postAvatarButton}>
    <View>
      {avatarUrl ?? <Avatar avatarUrl={avatarUrl} size={48} />}
    </View>
  </TouchableOpacity>
)};

interface PostHeaderHeadlineProps extends ViewProps {
  display: string;
  handle: string;
  avatarUrl?: string;
  createdAt: Date;
  location?: string;
}

export const PostHeaderHeadline: React.FC<PostHeaderHeadlineProps> = ({
  display,
  handle,
  createdAt,
  location = null,
}) => {
  const styles = useStyles();
  return (
  <View style={styles.postHeaderContent}>
    <Row center style={styles.postHeaderTopline}>
      <Row style={{ flex: 1, alignItems: 'center' }}>
        <Typography text={display} style={styles.postHeaderDisplayName} />
        <Typography text="·" style={styles.inlineSpacer} />
        <Typography text={`@${handle}`} />
      </Row>
      <Typography
        text={`${formatCreatedAt(createdAt)}`}
        style={styles.postTime}
      />
    </Row>

    <Row>{location && <Typography text={location} />}</Row>
  </View>
)};

interface PostHeaderProps extends ViewProps {
    id: string;
    display: string;
    handle: string;
    avatarUrl?: string;
    description: string;
    createdAt: Date;  
}

export const PostHeader: React.FC<PostHeaderProps> = ({ avatarUrl, display, handle, createdAt }) => {
  const styles = useStyles();
  return (
  <Row style={styles.postHeader}>
    <PostAvatarButton avatarUrl={avatarUrl} />
    <PostHeaderHeadline
      display={display}
      handle={handle}
      createdAt={createdAt}
    />
  </Row>
)};

const useStyles = makeStyles((theme) => ({
  postHeader: {
    width: '100%',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.borderColor,
  },
  postAvatarButton: {
    padding: 16,
    backgroundColor: theme.canvas3,
    borderRadius: theme.borderRadius,
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
