import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { TIMELINE, NEW_POST } from '../../queries';
import MasonryList from '../MasonryList';

const TIMELINE_LIMIT = 5;

export const Latest = ({ onPostPress, width = null, mobile = true }) => {
  const options = { variables: { offset: 0, limit: 5 } };
  const { data, fetchMore, subscribeToMore } = useQuery(TIMELINE, options);
  const latest = data && data.Timeline;
  console.log('latest', latest);
  const posts = latest && latest.posts;
  const [refreshing, setRefreshing] = useState(false);

  const onLoadMore = () =>
    fetchMore({
      query: TIMELINE,
      variables: {
        offset: data.Timeline.offset + TIMELINE_LIMIT,
        limit: TIMELINE_LIMIT,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        const prevPosts = prev.Timeline.posts;
        const nextPosts = fetchMoreResult.Timeline.posts.reduce((acc, post) => {
          const indexFound = prevPosts.findIndex(
            (prevPost) => prevPost.id === post.id,
          );
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

  const refresh = () =>
    fetchMore({
      query: TIMELINE,
      variables: { offset: 0, limit: TIMELINE_LIMIT },
      updateQuery: (prev, { fetchMoreResult }) => {
        const prevPosts = prev.Timeline.posts;
        const nextPosts = fetchMoreResult.Timeline.posts.reduce((acc, post) => {
          const indexFound = prevPosts.findIndex(
            (prevPost) => prevPost.id === post.id,
          );
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
  const subscribeToNewPosts = () =>
    subscribeToMore({
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
    <MasonryList
      posts={posts}
      onPostPress={onPostPress}
      onEndReached={onEndReached}
      onRefresh={onRefresh}
      refreshing={refreshing}
      subscribeToNewPosts={subscribeToNewPosts}
      width={width}
      mobile={mobile}
    />
  );
};

export default Latest;
