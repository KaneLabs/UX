import React, { useState } from 'react';
import { makeStyles } from 'eros-ui/theme';
import { View, Line } from 'eros-ui/components';
import PostButtons from './PostButtons';
import PostContent from './PostContent';
import PostHeader from './PostHeader';
// import PostMedia from './PostMedia';
// import { useRouter } from 'next/router';
// import Link from 'next/link';

const selectPostUrl = ({ handle, friendlyUrl, id }) => {
  const postUrl = friendlyUrl || id;
  return `/@${handle}/${postUrl}`;
};

const useStyles = makeStyles((theme) => ({
  post: {
    cursor: 'pointer',
    backgroundColor: theme.canvas2Opaque,
    width: '100%',
    maxWidth: theme.FEED_WIDTH,
    borderWidth: theme.borderWidth,
    borderColor: theme.borderColor,
    borderRadius: theme.borderRadius,
  },
  hovered: {
    backgroundColor: theme.textColor.faint,
  },
}));

export const PostRaised = ({
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
  // const router = useRouter();
  const handle = persona && persona.handle;
  const styles = useStyles();
  const [hovered, setHover] = useState(false);
  const onMouseEnter = () => setHover(true);
  const onMouseLeave = () => setHover(false);

  const postUrl = selectPostUrl({ handle, friendlyUrl, id });

  const onPress = (e) => {
    // e.preventDefault();
    console.log({ id, friendlyUrl });
    // router.push(`${postUrl}`);
  };

  console.log('content', content);

  return (
    <View
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={[styles.post, { width }, hovered && styles.hovered]}
    >
      <PostHeader {...persona} createdAt={createdAt} mobile={mobile} />
      <PostContent content={content} width={width} mobile={mobile} />
      <PostButtons postId={id} likes={likes} liked={liked} mobile={mobile} />
    </View>
  );
};

export default PostRaised;
