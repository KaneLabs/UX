import React from 'react';
import { Row, LikeButton, View, BodyText } from '@kanelabs/ux/components';
import { makeStyles } from '@kanelabs/ux/theme';

export const PostButtons = ({ postId, likes = 0, liked = false }) => {
  const styles = useStyles();
  return (
    <Row style={styles.row}>
      <View style={styles.rowItem}>
        <LikeButton liked={liked} postId={postId} />
        {likes > 0 && (
          <BodyText style={styles.rowItemText} type={2} text={likes} />
        )}
      </View>
    </Row>
  );
};

const useStyles = makeStyles((theme) => ({
  row: { paddingBottom: theme.unit },
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowItemText: {
    marginLeft: theme.unit * 1.5,
  },
}));

export default PostButtons;
