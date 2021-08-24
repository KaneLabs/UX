import * as React from 'react';
import { View } from 'react-native';
import Line from 'eros-ui/components/Line';
import PersonaHeader from 'eros-ui/components/Persona/PersonaHeader';
import TimelineList from 'eros-ui/components/TimelineList';
import { useQuery } from '@apollo/client';
import { TIMELINE } from 'eros-ui/queries';
import { FEED_WIDTH } from 'eros-ui/theme';

export const TIMELINE_LIMIT = 4;

const TimeLineListHeader: React.FC<{ persona: any }> = ({ persona }) => {
  return (
    <View style={{ width: '100%', alignItems: 'center' }}>
      <PersonaHeader {...persona} />
      <Line style={{ maxWidth: FEED_WIDTH }} />
    </View>
  )
}

const Persona = ({ persona, handle, following }) => {
  const options = { variables: { handle, offset: 0, limit: TIMELINE_LIMIT } };
  const { data, fetchMore, subscribeToMore } = useQuery(TIMELINE, options);
  const timeline = data && data.Timeline;

  const onLoadMore = () =>
    fetchMore({
      query: TIMELINE,
      variables: {
        handle,
        offset: data.Timeline.offset + TIMELINE_LIMIT,
        limit: TIMELINE_LIMIT,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        const prevPosts = prev.Timeline.posts;
        const nextPosts = fetchMoreResult.Timeline.posts;

        return {
          Timeline: {
            // By returning `cursor` here, we update the `fetchMore` function
            // to the new cursor.
            handle,
            offset: fetchMoreResult.Timeline.offset,
            posts: [...prevPosts, ...nextPosts],
            __typename: prev.Timeline.__typename,
          },
        };
      },
    });

  const subscribeToNewPosts = () =>
    subscribeToMore({
      document: TIMELINE,
      variables: {
        handle,
        offset: data.Timeline.offset + TIMELINE_LIMIT,
        limit: TIMELINE_LIMIT,
      },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return prev;
        }
        const prevPosts = prev.Timeline.posts;
        const nextPosts = subscriptionData.Timeline.posts;

        return {
          Timeline: {
            // By returning `cursor` here, we update the `fetchMore` function
            // to the new cursor.
            handle,
            offset: data.Timeline.offset + TIMELINE_LIMIT,
            posts: [...prevPosts, ...nextPosts],
            __typename: prev.Timeline.__typename,
          },
        };
      },
    });

  return (
    <TimelineList
      ListHeaderComponent={TimeLineListHeader}
      handle={handle}
      persona={persona}
      following={following}
      onLoadMore={onLoadMore}
      subscribeToNewPosts={subscribeToNewPosts}
      {...timeline}
    />
  );
};

export default Persona;
