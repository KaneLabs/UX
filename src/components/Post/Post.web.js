import React, { useState } from 'react';
import { makeStyles } from 'eros-ui/theme';
import { View, Line } from 'eros-ui/components';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostButtons from './PostButtons';

const selectPostUrl = ({ handle, friendlyUrl, id }) => {
  const postUrl = friendlyUrl || id;
  return `/@${handle}/${postUrl}`;
};

export const Post = ({
  id,
  persona,
  content,
  media,
  createdAt,
  friendlyUrl,
  likes,
  liked,
  mobile = false,
  width,
  ...props
}) => {
  const router = useRouter();
  const handle = persona && persona.handle;
  const [hovered, setHover] = useState(false);
  const onMouseEnter = () => setHover(true);
  const onMouseLeave = () => setHover(false);

  const postUrl = selectPostUrl({ handle, friendlyUrl, id });

  const onPress = (e) => {
    // e.preventDefault();
    console.log({ id, friendlyUrl });
    router.push(`${postUrl}`);
  };

  console.log('content', content);

  return (
    <Link passHref href="/[creator]/[post]" as={postUrl}>
      <View
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={[styles.post, { width }, hovered && styles.hovered]}>
        <PostHeader {...persona} createdAt={createdAt} mobile={mobile} />
        <PostContent content={content} width={width} mobile={mobile} />
        <PostButtons postId={id} likes={likes} liked={liked} mobile={mobile} />
        <Line style={{ width: width - 32, marginHorizontal: 16 }} />
      </View>
    </Link>
  );
};

const useStyles = makeStyles((theme) => ({
  post: {
    cursor: 'pointer',
    backgroundColor: 'transparent',
    width: '100%',
    maxWidth: theme.FEED_WIDTH,
    borderWidth: 0,
    borderRadius: 0,
  },
  hovered: {
    backgroundColor: theme.textColor.faint,
  },
}));

export default Post;
