import React from 'react';
import {
  NavPlaceholder,
  NavMutatingScroll,
  View,
  Container,
} from 'eros-ui/components';

import { StyleSheet } from 'react-native';
import { CREATE_POST, CREATE_PRESIGNED_URL } from 'eros-ui/queries';
import { useMutation } from '@apollo/client';
import { makeStyles } from 'eros-ui/theme';
import { useDimensions, useCompose, ComposeActions } from 'eros-ui/state';
import { convertFilesToBase64, signFile } from 'eros-ui/fns';
import ComposeToolbar from '../ComposeToolbar';
import ComposeBody from '../ComposeBody';
import ComposeTitle from '../ComposeTitle';

const { SET_TYPE, SET_INDEX, SET_CONTENT, SET_TITLE, RESET } = ComposeActions;

const filterEmptyContent = (contentBlock) => {
  if (contentBlock.type === 'Text' && contentBlock.text === '') {
    return false;
  }
  return true;
};

const formatContentForGraph = (content) => {
  const contentArray = Object.entries(content)
    .reduce((acc, [index, contentBlock]) => {
      if (contentBlock.type === 'Image') {
        return [
          ...acc,
          {
            index: parseInt(index, 10),
            type: contentBlock.type,
            files: contentBlock.files,
          },
        ];
      }
      return [...acc, { index: parseInt(index, 10), ...contentBlock }];
    }, [])
    .filter(filterEmptyContent);
  return contentArray;
};

export const Compose = ({ onSuccess = () => null }) => {
  const styles = useStyles();
  const { mobile } = useDimensions();
  const [state, dispatch] = useCompose();
  const [createPost, { error, loading }] = useMutation(CREATE_POST);
  const [createPresignedUrl] = useMutation(CREATE_PRESIGNED_URL);

  const signFiles = (files) =>
    Promise.all(files.map((file) => signFile(file)(createPresignedUrl)));

  const onFiles = async (nextFiles) => {
    dispatch({ type: SET_TYPE, payload: 'Image' });
    const nextIndex = state.activeIndex + 1;
    dispatch({ type: SET_INDEX, payload: nextIndex });
    console.log('nextFiles', nextFiles);
    await convertFilesToBase64(nextFiles);
    console.log('nextFiles', nextFiles);
    const signedFiles = await signFiles(nextFiles);
    console.log('signedFiles', signedFiles);
    const contentBlockImage = {
      index: nextIndex,
      data: { index: nextIndex, type: 'Image', files: signedFiles },
    };
    dispatch({ type: SET_CONTENT, payload: contentBlockImage });
    const newTextBlock = {
      index: nextIndex + 1,
      data: { index: nextIndex + 1, type: 'Text', text: '' },
    };
    dispatch({ type: SET_CONTENT, payload: newTextBlock });
    dispatch({ type: SET_TYPE, payload: 'Text' });
    dispatch({ type: SET_INDEX, payload: nextIndex + 1 });
  };

  const { title, friendlyUrl, content } = state;
  const onSubmit = async () => {
    try {
      // process title here in the future
      const contentArray = formatContentForGraph(content);
      console.log({ contentArray });
      const input = { content: contentArray, title, friendlyUrl };
      const { data } = await createPost({ variables: { input } });
      if (data && data.CreatePost) {
        dispatch({ type: RESET });
        onSuccess(data.CreatePost);
      }
    } catch (e) {
      console.log('createPostError', e);
    }
  };

  const setTitle = (title) => dispatch({ type: SET_TITLE, payload: title });

  // const modalOpen = data && data.composeModal && data.composeModal.open;
  return (
    <>
      <NavMutatingScroll>
        <NavPlaceholder />
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <Container>
              <ComposeTitle title={state.title} setTitle={setTitle} />
              <ComposeBody state={state} dispatch={dispatch} />
            </Container>
            <ComposeToolbar
              loading={loading}
              mobile={mobile}
              // onPressImage={onPressImage}
              onFiles={onFiles}
              onSubmit={onSubmit}
              urlPreview={state.friendlyUrl}
            />
          </View>
        </View>
      </NavMutatingScroll>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingBottom: 48,
    flex: 1,
  },
  contentContainer: {
    maxWidth: theme.FEED_WIDTH,
    width: '100%',
    height: '100%',
    flex: 1,
  },
}));

export default Compose;
