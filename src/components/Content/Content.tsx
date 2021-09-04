import React from 'react';
import { View } from 'react-native';
import { gutter } from '@kanelabs/ux/theme';
import ContentBlockText from './ContentBlockText';

export const Content = ({ content = [], mobile }) => (
  <View style={styles.content}>
    {content.map((contentBlock, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <ContentBlockText
        mobile={mobile}
        key={`ContentBlock-${i}`}
        {...contentBlock}
      />
    ))}
  </View>
);

const styles = {
  content: {
    flex: 1,
    width: '100%',
    paddingVertical: gutter,
  },
};

export default Content;
