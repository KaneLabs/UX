import React, { useEffect } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { Post, Line } from 'eros-ui/components';
import { useTheme } from 'eros-ui/theme';
// import { TIMELINE, NEW_POST } from 'eros-ui/queries';
// import { useQuery } from '@apollo/react-hooks';

const TimelineList = ({
  posts,
  onPostPress,
  onEndReached,
  onRefresh,
  refreshing,
  subscribeToNewPosts,
  width,
  mobile = null,
  ...rest
}) => {
  useEffect(() => {
    const [theme] = useTheme();
    const { gutter, FEED_WIDTH, textColor } = theme;

    console.log('adding new timeline list');
    subscribeToNewPosts();
  }, [subscribeToNewPosts]);
  console.log('POSTS', posts);

  // const [setNavDocked] = useMutation(SET_NAV_DOCKED);

  // const onScroll = e => {
  //   if (e.nativeEvent.contentOffset.y === 0) {
  //     return setNavDocked({ variables: { docked: true } });
  //   }
  //   return setNavDocked({ variables: { docked: false } });
  // };

  const postStyle = {
    width,
    maxWidth: FEED_WIDTH,
    marginBottom: gutter,
    marginHorizontal: gutter,
  };

  // const _renderHeader = () => {
  //   return (
  //     <View
  //       style={{
  //         height: NAV_HEIGHT,
  //         width,
  //       }}
  //     />
  //   );
  // };

  return (
    <FlatList
      testID="Timeline"
      data={posts}
      // ListHeaderComponent={_renderHeader}
      // stickyHeaderIndices={[0]}
      renderItem={({ item, key }) => <Post key={item.id} {...item} mobile={mobile} width={width} style={postStyle} />}
      ItemSeparatorComponent={<Line />}
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
        width,
      }}
      style={{ flex: 1, width }}
      {...rest}
    />
  );
};

export default TimelineList;