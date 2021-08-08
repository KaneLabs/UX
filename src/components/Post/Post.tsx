import React from 'react';
import Paper from 'eros-ui/components/Paper';
import { makeStyles } from 'eros-ui/theme';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostButtons from './PostButtons';

export const Post = React.forwardRef(
  (
    { id, content, persona, createdAt, style = null, mobile = false, ...rest },
    ref,
  ) => {
    const styles = useStyles();
    return (
      <Paper ref={ref} {...rest} style={[styles.post, style]}>
        <PostHeader {...persona} createdAt={createdAt} mobile={mobile} />
        {/* <PostContent content={content} mobile={mobile} />
        <PostButtons postId={id} mobile={mobile} /> */}
      </Paper>
    );
  },
);

export default Post;

const useStyles = makeStyles((theme) => ({
  post: { width: '100%', maxWidth: theme.FEED_WIDTH },
}));
