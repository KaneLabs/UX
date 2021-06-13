import React, { useCallback, useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useCompose, ComposeActions } from 'eros-ui/state';
import {
  COMPOSE_MODAL,
  TOGGLE_COMPOSE_MODAL,
  CREATE_POST,
  CREATE_PRESIGNED_URL,
} from '../../queries';
import { Modal } from '../..';
import ComposeToolbar from './ComposeToolbar';
import ComposeBody from './ComposeBody';
import { formatContentForGraph, signFile, convertFilesToBase64 } from '../../fns';

const uploadImage = async (file) => {
  try {
    const response = await fetch(file.presignedUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: file,
    });
    console.log({ response });
    if (response.status === 200) {
      return response.url;
    }
    return null;
  } catch (e) {
    console.log(e);
    return null;
  }
};

const uploadImages = (files) => Promise.all(files.map(uploadImage));

const contentMediaFilter = (content) => {
  if (content?.type === 'Image') {
    return true;
  }
  if (content?.type === 'Video') {
    return true;
  }
};

const ComposeModal = () => {
  const { data } = useQuery(COMPOSE_MODAL);
  const [toggleComposeModal] = useMutation(TOGGLE_COMPOSE_MODAL);
  const [state, dispatch] = useCompose();
  // const [title, setTitle] = useState(null);
  // const [friendlyUrl, setFriendlyUrl] = useState(null);
  // const [content, setContent] = useState({ text: '' });
  const [createPost] = useMutation(CREATE_POST);
  const [loadingPercent, setLoadingPercent] = useState(null);
  // const { data: accountData } = useQuery(ACCOUNT);
  // const account = accountData && accountData.account;
  const open = data?.ComposeModal?.open;

  const [createPresignedUrl] = useMutation(CREATE_PRESIGNED_URL);
  // const { data: accountData } = useQuery(ACCOUNT);

  const signFiles = (files) =>
    Promise.all(files.map((file) => signFile(file)(createPresignedUrl)));

  const onLoadStart = (event) => {
    setLoadingPercent(0);
    console.log({ onLoadStart: event });
  };

  const onLoadProgress = (event) => {
    console.log({ onLoadProgress: event });
    const { loaded, total } = event;
    const normalPercent = Math.floor((loaded / total) * 100) / 100;
    console.log({ normalPercent });
    setLoadingPercent(normalPercent);
  };

  const uploadVideo = useCallback(async (fileBlob) => {
    // const url = URL.createObjectURL(fileBlob);
    try {
      const response = await new Promise((resolve) => {
        const onLoadEnd = (event) => {
          console.log({ onLoadEnd: event });
          setLoadingPercent(null);
          resolve(event);
        };
        const xhr = new XMLHttpRequest(); // den AJAX Request anlegen
        xhr.upload.addEventListener('loadstart', onLoadStart, false);
        xhr.upload.addEventListener('progress', onLoadProgress, false);
        xhr.upload.addEventListener('load', onLoadEnd, false);
        xhr.open('PUT', fileBlob.presignedUrl); // Angeben der URL und des Requesttyps
        xhr.setRequestHeader('Content-type', fileBlob.type);
        xhr.setRequestHeader('X_FILE_NAME', fileBlob.name);
        xhr.send(fileBlob);
      });

      console.log({ response });
    } catch (e) {
      console.log({ error: e });
    }
  }, []);

  // useEffect(() => {
  //   setFriendlyUrl(makeFriendlyUrl(content.text));
  //   return () => setFriendlyUrl('');
  // }, [content.text]);
  //
  // useEffect(() => {
  //   setTitle(content.text);
  //   return () => setTitle('');
  // }, [content.text]);
  const onFiles = async (files) => {
    console.log({ files });
    await convertFilesToBase64(files);
    const signedFiles = await signFiles(files);
    console.log({ signedFiles });
    const nextIndex = state.activeIndex + 1;
    dispatch({ type: ComposeActions.SET_TYPE, payload: 'Image' });
    dispatch({ type: ComposeActions.SET_INDEX, payload: nextIndex });
    const contentBlockImage = {
      index: nextIndex,
      data: { index: nextIndex, type: 'Image', files: signedFiles },
    };
    dispatch({ type: ComposeActions.SET_CONTENT, payload: contentBlockImage });
    const newTextBlock = {
      index: nextIndex + 1,
      data: { index: nextIndex + 1, type: 'Text', text: '' },
    };
    dispatch({ type: ComposeActions.SET_CONTENT, payload: newTextBlock });
    dispatch({ type: ComposeActions.SET_TYPE, payload: 'Text' });
    dispatch({ type: ComposeActions.SET_INDEX, payload: nextIndex + 1 });
  };

  const onVideoFiles = async (files) => {
    console.log({ files });
    const signedFiles = await signFiles(files);
    console.log({ signedFiles });
    const nextIndex = state.activeIndex + 1;
    dispatch({ type: ComposeActions.SET_TYPE, payload: 'Video' });
    dispatch({ type: ComposeActions.SET_INDEX, payload: nextIndex });
    const contentBlockVideo = {
      index: nextIndex,
      data: { index: nextIndex, type: 'Video', files: signedFiles },
    };
    dispatch({ type: ComposeActions.SET_CONTENT, payload: contentBlockVideo });
    const newTextBlock = {
      index: nextIndex + 1,
      data: { index: nextIndex + 1, type: 'Text', text: '' },
    };
    dispatch({ type: ComposeActions.SET_CONTENT, payload: newTextBlock });
    dispatch({ type: ComposeActions.SET_TYPE, payload: 'Text' });
    dispatch({ type: ComposeActions.SET_INDEX, payload: nextIndex + 1 });
  };

  const onSubmit = async () => {
    const { title, friendlyUrl, content } = state;
    // add a title here in the future
    const filesInPost = Object.values(content).filter(contentMediaFilter);
    console.log({ filesInPost });

    const uploadedFiles = await Promise.all(
      filesInPost.map((content) => {
        if (content.type === 'Video') {
          return uploadVideo(content.files[0]);
        }
        if (content.type === 'Image') {
          return uploadImages(content.files);
        }
        return null;
      }),
    );
    console.log({ uploadedFiles });

    const contentArray = formatContentForGraph(content);
    console.log({ contentArray, title, friendlyUrl });
    const input = { content: contentArray };
    console.log({ input });
    try {
      const { data } = await createPost({ variables: { input } });
      console.log('createPost data', data);
      if (data && data.CreatePost) {
        // setContent({ text: '' });
        toggleComposeModal();
      }
    } catch (e) {
      console.log('createPostError', e);
    }
  };

  return (
    <Modal open={open} onClose={toggleComposeModal}>
      <ComposeBody
        state={state}
        dispatch={dispatch}
        loadingPercent={loadingPercent}
      />
      <ComposeToolbar
        onFiles={onFiles}
        onVideoFiles={onVideoFiles}
        onSubmit={onSubmit}
        loadingPercent={loadingPercent}
      />
    </Modal>
  );
};

export default ComposeModal;
