import React from 'react';
import {
  FlatList,
  RefreshControl,
  Image,
  Dimensions,
  ScrollView,
  View,
} from 'react-native';
import { Typography } from '@kanelabs/ux/components';
import { useTheme, makeStyles, shadow } from '@kanelabs/ux/theme';
import { useDrawer, useSocialDrawer } from '@kanelabs/ux/state';

import Search from '../Search';

// persona,
//   content,
//   media,
//   createdAt,
//   friendlyUrl,
//   likes,
//   liked,

const Chip = ({ text }) => {
  const styles = useStyles();
  return (
    <View style={styles.chip}>
      <Typography type="caption" text={text} />
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  chip: {
    paddingHorizontal: theme.padding,
    borderColor: theme.borderColor,
    borderWidth: theme.borderWidth,
    borderRadius: theme.unit * 4,
    height: theme.unit * 4,
    minWidth: theme.unit * 6,
    marginVertical: theme.padding,
    marginRight: theme.padding,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  headerScrollableRow: {
    marginLeft: theme.padding * 2,
  },
  container: {
    backgroundColor: theme.backgroundColorOpaque,
    backdropFilter: `blur(${theme.padding}px)`,
    // borderBottomColor: theme.borderColor,
    // borderBottomWidth: theme.borderWidth,
    width: '100%',
    marginBottom: theme.padding * 2,
  },
  headerTitle: {
    width: theme.unit * 7, // 56
  },
  headerPrimaryRow: {
    width: '100%',
    paddingHorizontal: theme.padding * 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerPrimaryLeft: {
    height: '100%',
    justifyContent: 'center',
    width: theme.unit * 7, // 56
  },
  headerPrimaryRight: {
    height: '100%',
    width: theme.unit * 7, // 56
  },
}));

const ListHeaderComponent = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.headerPrimaryRow}>
        <Typography type="h5" text="Fora" style={styles.headerTitle} />
        <Search />
        <View style={styles.headerPrimaryRight} />
      </View>
      <ScrollView horizontal contentContainerStyle={styles.headerScrollableRow}>
        <Chip text="#Hot" />
        <Chip text="#Friends" />
        <Chip text="#HotFriends" />
        <Chip text="#Following" />
      </ScrollView>
    </View>
  );
};

const MasonryList = ({
  posts,
  onPostPress,
  onEndReached,
  onRefresh,
  refreshing,
  subscribeToNewPosts,
  mobile = null,
  ...rest
}) => {
  // useEffect(() => {
  //   console.log('adding new timeline list');
  //   subscribeToNewPosts();
  // }, [subscribeToNewPosts]);
  console.log('POSTS', posts);
  const [
    {
      appBackgroundColor,
      textColor,
      borderRadius,
      borderColor,
      padding,
      unit,
      TOOLBAR_WIDTH_OPEN,
      TOOLBAR_WIDTH_CLOSED,
    },
  ] = useTheme();
  const { open: leftOpen, lock: leftLock } = useDrawer();
  const { open: rightOpen, lock: rightLock } = useSocialDrawer();
  const { width } = Dimensions.get('window');
  const toolbarLeftWidth =
    leftOpen && leftLock ? TOOLBAR_WIDTH_OPEN : TOOLBAR_WIDTH_CLOSED;
  const toolbarRightWidth =
    rightOpen && rightLock ? TOOLBAR_WIDTH_OPEN : TOOLBAR_WIDTH_CLOSED;

  const WIDTH = width - toolbarLeftWidth - toolbarRightWidth;
  const MARGIN = padding;
  const CONTAINER_WIDTH = WIDTH - MARGIN * 2;
  const NUM_COLUMNS = 3;

  const COLUMN_WIDTH = Math.floor(CONTAINER_WIDTH / NUM_COLUMNS);
  const IMAGE_WIDTH = Math.floor(COLUMN_WIDTH - MARGIN * 2);
  const ASPECT_RATIO = 16 / 9;
  const IMAGE_HEIGHT = Math.floor(IMAGE_WIDTH * ASPECT_RATIO);

  const FULL_IMAGE_WIDTH = Math.floor(CONTAINER_WIDTH - MARGIN * 2);
  const FULL_IMAGE_HEIGHT = Math.floor(FULL_IMAGE_WIDTH / ASPECT_RATIO);

  const data = [
    {
      id: 0,
      uri: `https://picsum.photos/${FULL_IMAGE_WIDTH}/${FULL_IMAGE_HEIGHT}`,
      height: FULL_IMAGE_HEIGHT,
      width: FULL_IMAGE_WIDTH,
    },
    {
      id: 1,
      contents: [
        {
          id: 2,
          uri: `https://picsum.photos/${IMAGE_HEIGHT}/${IMAGE_WIDTH}`,
          height: IMAGE_HEIGHT,
          width: IMAGE_WIDTH,
        },
        {
          id: 3,
          uri: `https://picsum.photos/${IMAGE_HEIGHT}/${IMAGE_WIDTH}`,
          height: IMAGE_HEIGHT,
          width: IMAGE_WIDTH,
        },
        {
          id: 4,
          uri: `https://picsum.photos/${IMAGE_HEIGHT}/${IMAGE_WIDTH}`,
          height: IMAGE_HEIGHT,
          width: IMAGE_WIDTH,
        },
      ],
      height: Math.ceil(CONTAINER_WIDTH / ASPECT_RATIO) - MARGIN,
      width: CONTAINER_WIDTH,
    },

    {
      id: 9,
      uri: `https://picsum.photos/${FULL_IMAGE_WIDTH}/${FULL_IMAGE_HEIGHT}`,
      height: FULL_IMAGE_HEIGHT,
      width: FULL_IMAGE_WIDTH,
    },
    {
      id: 2,
      contents: [
        {
          id: 2,
          uri: `https://picsum.photos/${IMAGE_HEIGHT}/${IMAGE_WIDTH}`,
          height: IMAGE_HEIGHT,
          width: IMAGE_WIDTH,
        },
        {
          id: 3,
          uri: `https://picsum.photos/${IMAGE_HEIGHT}/${IMAGE_WIDTH}`,
          height: IMAGE_HEIGHT,
          width: IMAGE_WIDTH,
        },
        {
          id: 4,
          uri: `https://picsum.photos/${IMAGE_HEIGHT}/${IMAGE_WIDTH}`,
          height: IMAGE_HEIGHT,
          width: IMAGE_WIDTH,
        },
      ],
      height: Math.ceil(CONTAINER_WIDTH / ASPECT_RATIO) - MARGIN,
      width: CONTAINER_WIDTH,
    },
  ];

  // const style = useMemo(() => {
  //   const postStyle = {
  //     width: width,
  //     maxWidth: FEED_WIDTH,
  //     marginBottom: gutter,
  //     marginHorizontal: gutter,
  //   };
  //   return postStyle;
  // }, [width])

  return (
    <FlatList
      testID="MasonryList"
      data={data}
      ListHeaderComponent={ListHeaderComponent}
      stickyHeaderIndices={[0]}
      renderItem={({ item, key }) => {
        if (item?.contents) {
          return (
            <View
              style={{
                flexWrap: 'wrap',
                width: item.width,
                height: item.height,
                marginLeft: MARGIN * 2,
                marginBottom: MARGIN * 2,
              }}>
              {item.contents.map((content) => (
                <Image
                  style={{
                    ...shadow(12),
                    borderColor,
                    borderWidth: 1,
                    borderRadius: borderRadius * 3.5,
                    height: content.height,
                    width: content.width,
                    marginRight: MARGIN * 2,
                  }}
                  source={{ uri: content.uri }}
                />
              ))}
            </View>
          );
        }

        return (
          <Image
            style={{
              ...shadow(12),
              borderColor,
              borderWidth: 1,
              borderRadius: borderRadius * 3.5,
              height: item.height,
              width: item.width,
              marginBottom: MARGIN * 2,
              marginHorizontal: MARGIN * 2,
            }}
            source={{ uri: item.uri }}
          />
        );
      }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={textColor.secondary}
        />
      }
      columnWrapperStyle={{ flexWrap: 'wrap' }}
      numColumns={NUM_COLUMNS}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      keyExtractor={({ id }) => id}
      contentContainerStyle={{
        paddingLeft: toolbarLeftWidth,
        paddingRight: toolbarRightWidth,
        height: '100%',
      }}
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: appBackgroundColor,
      }}
      {...rest}
    />
  );
};

export default MasonryList;
