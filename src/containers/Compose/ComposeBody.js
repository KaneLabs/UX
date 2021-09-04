import React, { memo } from 'react';
import { View } from 'react-native';
import {
  Multiline,
  ContentBlockText,
  Video,
  Subtitle,
} from '@kanelabs/ux/components';
import { makeStyles } from '@kanelabs/ux/theme';
import { ComposeActions as Actions } from '@kanelabs/ux/state';
import ImagePreview from './ImagePreview';

const VideoPreview = ({ files }) =>
  files.map((fileBlob) => {
    const url = URL.createObjectURL(fileBlob);
    return (
      <Video controls src={url} style={{ height: 'auto', width: '100%' }} />
    );
  });

const ContentPreview = memo(({ contentArray = [] }) =>
  Array.from(contentArray).map(([index, contentBlock]) => {
    if (contentBlock.type === 'Text') {
      return <ContentBlockText {...contentBlock} />;
    }
    if (contentBlock.type === 'Image') {
      return <ImagePreview {...contentBlock.files[0]} />;
    }
    if (contentBlock.type === 'Video') {
      console.log({ videoContentBlock: contentBlock });
      return <VideoPreview {...contentBlock} />;
    }
    return null;
  }),
);

const ComposeBody = memo(({ state, dispatch, loadingPercent }) => {
  const styles = useStyles();

  const setContent = (text) => {
    dispatch({
      type: Actions.SET_CONTENT,
      payload: {
        index: state.activeIndex,
        data: { index: state.activeIndex, type: 'Text', text },
      },
    });
  };

  console.log('content', state.content);
  console.log('activeIndex', state.activeIndex);
  // stops active text block from displaying
  const contentArray = Object.entries(state.content).filter(([index]) => {
    return (
      state.activeType !== 'Text' || parseInt(index, 10) !== state.activeIndex
    );
  });

  const showLoadingBar = loadingPercent !== null;

  return (
    <View style={styles.container}>
      {showLoadingBar && <Subtitle text={`${loadingPercent * 100}%`} />}
      <ContentPreview
        contentArray={contentArray}
        content={state.content}
        loadingPercent={loadingPercent}
      />

      {state.activeType === 'Text' && (
        <Multiline
          flat
          value={state.content[state.activeIndex].text}
          onChangeText={setContent}
          style={styles.multiline}
        />
      )}
    </View>
  );
});

const useStyles = makeStyles((theme) => ({
  container: {
    // alignItems: 'center',
  },
  multiline: {
    paddingHorizontal: utheme.unit * 2,
  },
}));

export default ComposeBody;
