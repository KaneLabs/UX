import React, { useState } from 'react';
import { ViewProps, View } from 'react-native';
import { makeStyles, Theme } from '@kanelabs/ux/theme';
// import { View } from '@kanelabs/ux/components';
// import { useRouter } from 'next/router';
import PostHeader from './PostHeader';
// import PostContent from './PostContent';
// import PostButtons from './PostButtons';

const selectPostUrl: (options: { handle: string, friendlyUrl: string, id: string }) => void = ({ handle, friendlyUrl, id }) => {
  const postUrl = friendlyUrl || id;
  return `/@${handle}/${postUrl}`;
};

export interface Author {
  id: string,
  display: string,
  handle: string,
  avatarUrl?: string,
  description: string,
  createdAt: Date,
}

export interface PostProps extends ViewProps {
    id: string,
    persona: Author,
    // content,
    // media,
    createdAt: Date,
    friendlyUrl: string,
    // likes,
    // liked,
}

export const Post: React.FC<PostProps> = (props) => {
  const {
    id,
    persona,
    friendlyUrl,
    createdAt
  } = props;

  const handle = persona && persona.handle;
  const [hovered, setHover] = useState(false);
  const onMouseEnter = () => setHover(true);
  const onMouseLeave = () => setHover(false);
  const styles = useStyles();

  const postUrl = selectPostUrl({ handle, friendlyUrl, id });

  const onPress = (e) => {
    // e.preventDefault();
    console.log({ id, friendlyUrl });
    // router.push(`${postUrl}`);
  };

  // console.log('content', content);

  return (
      <View
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={[styles.post, hovered && styles.hovered]}>
        <PostHeader {...persona} createdAt={createdAt} />
        {/* <PostContent content={content} width={width} mobile={mobile} />
        <PostButtons postId={id} likes={likes} liked={liked} mobile={mobile} /> */}
        {/* <Line style={{ width: width - 32, marginHorizontal: 16 }} /> */}
      </View>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  post: {
    cursor: 'pointer',
    backgroundColor: 'transparent',
    width: theme.window.width || '100%',
    maxWidth: 720,
    borderWidth: 0,
    borderRadius: 0,
  },
  hovered: {
    backgroundColor: theme.textColor.faint,
  },
}));

export default Post;
