import React from 'react';
import { View } from 'react-native';
import PostContentBlock from './PostContentBlock';

export const PostContent = ({ content = [], mobile = false, width }) => {
  if (content.length === 0) return null;
  return (
    <View style={styles.content}>
      {content.map((contentBlock, i) => (
        <PostContentBlock
          // eslint-disable-next-line react/no-array-index-key
          key={`ContentBlock-${i}`}
          mobile={mobile}
          width={width}
          {...contentBlock}
        />
      ))}
    </View>
  );
};

const styles = {
  content: {
    flex: 1,
    width: '100%',
  },
};

export default PostContent;
