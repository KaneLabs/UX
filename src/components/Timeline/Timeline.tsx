import React from 'react';
import { FlatList, Platform, useWindowDimensions } from 'react-native';
import Post from 'eros-ui/components/Post';
import { makeStyles, useTheme } from 'eros-ui/theme';
import { SET_NAV_DOCKED } from 'eros-ui/queries';
import { useMutation } from '@apollo/client';

export interface Author {
  id: string;
  display: string;
  handle: string;
  description: string;
}


export interface Post {
    id: string;
    friendlyUrl: string;
    title: string;
    author: Author;
    createdAt: Date;
    updatedAt: Date;
}

export interface TimelineProps {
  posts: Post[]
  author?: Author;
  handle?: string;
  following?: boolean;
  onLoadMore?: () => void;
  subscribeToNewPosts?: () => void;
}

const Timeline: React.FC<TimelineProps> = ({
  author,
  handle,
  posts,
  following,
  onLoadMore,
  subscribeToNewPosts,
  ...rest
}) => {
  const { width } = useWindowDimensions();
  // const [setNavDocked] = useMutation(SET_NAV_DOCKED);
  const styles = useStyles();
  const [{ gutter, FEED_WIDTH }] = useTheme();

  const onScroll = (e) => {
    if (e.nativeEvent.contentOffset.y === 0) {
      return setNavDocked({ variables: { docked: true } });
    }
    return setNavDocked({ variables: { docked: false } });
  };

  const onEndReached = async (e) => {
    console.log('END_REACHED e', e);
    onLoadMore && await onLoadMore();
  };

  const style = {
    width: Platform.OS === 'web' ? '100%' : width - gutter * 2,
    maxWidth: FEED_WIDTH,
    marginBottom: gutter,
    marginHorizontal: Platform.OS === 'web' && gutter,
  };

  return (
    <FlatList
      data={posts}
      renderItem={({ item: post }) => (
        <Post
          {...post}
          persona={post.author}
          style={style}
        />
      )}
      onScroll={onScroll}
      onScrollEventThrottle={16}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.75}
      keyExtractor={({ id }) => id}
      contentContainerStyle={styles.contentContainer}
      style={styles.timeline}
      {...rest}
    />
  );
};

const useStyles = makeStyles((theme) => ({
  timeline: {
    flex: 1,
    width: '100%',
  },
  contentContainer: {
    alignItems: 'center',
    width: '100%',
  },
}));

export default Timeline;
