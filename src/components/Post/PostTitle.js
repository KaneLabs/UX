import React from 'react';
import { Title } from 'eros-ui/components';
import { makeStyles } from 'eros-ui/theme';

const nullifyIfEmptyString = (string) => {
  if (typeof string === 'string' && string.length === 0) {
    return null;
  }
  return string;
};

export const PostTitle = ({ mobile = false, text, ...rest }) => {
  const styles = useStyles();
  const postTitle = nullifyIfEmptyString(text);
  if (postTitle) {
    return <Title style={[styles.title]} type={mobile ? 4 : 3} {...rest} />;
  }
  return null;
};

const useStyles = makeStyles((theme) => ({
  title: { paddingHorizontal: theme.unit * 2, paddingVertical: theme.unit * 2 },
}));

export default PostTitle;
