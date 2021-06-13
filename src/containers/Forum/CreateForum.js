import React, { useReducer, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Title,
  Subtitle,
  Paper,
  TextField,
  OutlinedButton,
  ActivityIndicator,
} from 'eros-ui/components';
import { CREATE_FORUM } from 'eros-ui/queries';
import { useMutation } from '@apollo/react-hooks';
import { makeStyles } from 'eros-ui/theme';

const INITIAL_STATE = {
  url: '',
  title: '',
};

const SET_URL = 'SET_URL';
const SET_TITLE = 'SET_TITLE';
const RESET = 'RESET';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_URL:
      return { ...state, url: action.payload };
    case SET_TITLE:
      return { ...state, title: action.payload };
    case RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const CreateForum = ({ url: initialUrl, onSuccess = () => null }) => {
  const [state, dispatch] = useReducer(reducer, { ...INITIAL_STATE, url: initialUrl });
  const [createForum, { error, loading }] = useMutation(CREATE_FORUM);
  const styles = useStyles();

  useEffect(() => () => dispatch({ type: RESET }), []);

  const onChangeUrl = (nextUrl) => dispatch({ type: SET_URL, payload: nextUrl });
  const onChangeTitle = (nextTitle) => dispatch({ type: SET_TITLE, payload: nextTitle });

  const onSubmit = async () => {
    try {
      const { url, title } = state;
      const input = { url, title };
      const options = { variables: { input } };
      const { data } = await createForum(options);
      if (data && data.CreateForum) {
        return onSuccess(data.CreateForum);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const { url, title } = state;
  return (
    <Container center>
      <Paper style={styles.paper}>
        <Title type={6} text="Create Forum" gutter />
        {error && <Subtitle text={error.message} gutter />}
        {loading && <ActivityIndicator />}

        <Subtitle gutter>Name</Subtitle>
        <TextField value={url} onChangeText={onChangeUrl} style={styles.textField} />
        <Subtitle gutter>Title</Subtitle>
        <TextField value={title} onChangeText={onChangeTitle} style={styles.textField} />

        <OutlinedButton onPress={onSubmit} text="SUBMIT" />
      </Paper>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.unit * 2,
  },
  textField: {
    marginBottom: theme.unit * 1.5,
  },
}));

export default CreateForum;
