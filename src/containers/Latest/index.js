import React, { useState, useEffect } from 'react';
import { FlatList, RefreshControl, View } from 'react-native';
import { Post } from 'eros-ui/components';
import { useTheme, makeStyles } from 'eros-ui/theme';
import { TIMELINE, NEW_POST, SET_NAV_DOCKED } from 'eros-ui/queries';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useDimensions } from 'eros-ui/state';

const TIMELINE_LIMIT = 5;

export const Latest = ({ onPostPress }) => {
  const [theme] = useTheme();
  const { gutter, FEED_WIDTH, textColor } = theme;
  const options = { variables: { offset: 0, limit: 5 } };
  const { data, fetchMore, subscribeToMore } = useQuery(TIMELINE, options);
  const latest = data && data.Timeline;
  const posts = latest && latest.posts;
  const [refreshing, setRefreshing] = useState(false);

  const onLoadMore = () => fetchMore({
    query: TIMELINE,
    variables: { offset: data.Timeline.offset + TIMELINE_LIMIT, limit: TIMELINE_LIMIT },
    updateQuery: (prev, { fetchMoreResult }) => {
      const prevPosts = prev.Timeline.posts;
      const nextPosts = fetchMoreResult.Timeline.posts.reduce((acc, post) => {
        const indexFound = prevPosts.findIndex((prevPost) => prevPost.id === post.id);
        if (indexFound === -1) {
          return [...acc, post];
        }
        return acc;
      }, []);
      const { offset } = fetchMoreResult.Timeline;

      return {
        Timeline: {
          // By returning `cursor` here, we update the `fetchMore` function
          // to the new cursor.
          // handle,
          offset,
          posts: [...prevPosts, ...nextPosts],
          __typename: prev.Timeline.__typename,
        },
      };
    },
  });

  const refresh = () => fetchMore({
    query: TIMELINE,
    variables: { offset: 0, limit: TIMELINE_LIMIT },
    updateQuery: (prev, { fetchMoreResult }) => {
      const prevPosts = prev.Timeline.posts;
      const nextPosts = fetchMoreResult.Timeline.posts.reduce((acc, post) => {
        const indexFound = prevPosts.findIndex((prevPost) => prevPost.id === post.id);
        if (indexFound === -1) {
          return [...acc, post];
        }
        return acc;
      }, []);

      const { offset } = fetchMoreResult.Timeline;

      return {
        Timeline: {
          // By returning `cursor` here, we update the `fetchMore` function
          // to the new cursor.
          // handle,
          offset,
          posts: [...nextPosts, ...prevPosts],
          __typename: prev.Timeline.__typename,
        },
      };
    },
  });

  // TODO: Subscriptions
  const subscribeToNewPosts = () => subscribeToMore({
    document: NEW_POST,
    // variables: { handle },
    updateQuery: (prev, { subscriptionData }) => {
      if (!subscriptionData.data) {
        return prev;
      }
      const prevPosts = prev.Timeline.posts;
      const nextPost = subscriptionData.data.newPost;

      return {
        Timeline: {
          ...prev.Timeline,
          // By returning `cursor` here, we update the `fetchMore` function
          // to the new cursor.
          // handle,
          offset: prev.Timeline.offset + TIMELINE_LIMIT,
          posts: [nextPost, ...prevPosts],
          __typename: prev.Timeline.__typename,
        },
      };
    },
  });

  const onEndReached = async (e) => {
    console.log('END_REACHED loadMore()');
    await onLoadMore();
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await refresh();
    setRefreshing(false);
  };

  return (
    <TimelineList
      posts={posts}
      onPostPress={onPostPress}
      onEndReached={onEndReached}
      onRefresh={onRefresh}
      refreshing={refreshing}
      subscribeToNewPosts={subscribeToNewPosts}
    />
  );
};

const TimelineList = ({
  posts,
  onPostPress,
  onEndReached,
  onRefresh,
  refreshing,
  subscribeToNewPosts,
  ...rest
}) => {
  const { gutter, FEED_WIDTH, textColor } = theme;

  const { width, mobile } = useDimensions();
  useEffect(() => {
    subscribeToNewPosts();
  }, [subscribeToNewPosts]);

  const [setNavDocked] = useMutation(SET_NAV_DOCKED);

  const onScroll = (e) => {
    if (e.nativeEvent.contentOffset.y === 0) {
      return setNavDocked({ variables: { docked: true } });
    }
    return setNavDocked({ variables: { docked: false } });
  };

  const style = {
    width: width - gutter * 2,
    maxWidth: FEED_WIDTH,
    marginBottom: gutter,
  };

  const _renderHeader = () => <View />;

  return (
    <FlatList
      testID="Timeline"
      data={posts}
      renderItem={({ item, key }) => <Post key={item.id} {...item} mobile={mobile} width={width} style={style} />}
      refreshControl={(
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={textColor.secondary}
        />
      )}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      keyExtractor={({ id }) => id}
      contentContainerStyle={{
        alignItems: 'center',
        width: '100%',
      }}
      style={{ flex: 1, width: '100%' }}
      {...rest}
    />
  );
};

export default Latest;
