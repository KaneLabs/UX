import React from 'react';
import { FlatList, Platform } from 'react-native';
import Post from 'eros-ui/components/Post';
import { makeStyles, useTheme } from 'eros-ui/theme';
import { useDimensions } from 'eros-ui/state';
import { SET_NAV_DOCKED } from 'eros-ui/queries';
import { useMutation } from '@apollo/react-hooks';

export const Timeline = ({
  persona,
  handle,
  posts,
  following,
  onLoadMore,
  subscribeToNewPosts,
  ...rest
}) => {
  const { width, mobile } = useDimensions();
  const [setNavDocked] = useMutation(SET_NAV_DOCKED);
  const styles = makeStyles();
  const [{ gutter, FEED_WIDTH }] = useTheme();

  const onScroll = (e) => {
    if (e.nativeEvent.contentOffset.y === 0) {
      return setNavDocked({ variables: { docked: true } });
    }
    return setNavDocked({ variables: { docked: false } });
  };

  const onEndReached = async (e) => {
    console.log('END_REACHED e', e);
    await onLoadMore();
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
      renderItem={({ item }) => (
        <Post {...item} persona={persona} style={style} mobile={mobile} width={width} />
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
