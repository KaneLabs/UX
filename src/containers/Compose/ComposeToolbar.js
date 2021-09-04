import React from 'react';
import {
  View,
  ImageUploadButton,
  VideoUploadButton,
  IconButton,
  Row,
} from '@kanelabs/ux/components';
import { makeStyles } from '@kanelabs/ux/theme';

const ComposeToolbar = ({
  onFiles = () => null,
  // onTypePress = () => null,
  // onHeadlinePress = () => null,
  onSubmit = () => null,
  onVideoFiles = () => null,
  urlPreview,
}) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.composeToolbar}>
        <Row>
          <ImageUploadButton onFiles={onFiles} />
          <VideoUploadButton onFiles={onVideoFiles} />
        </Row>
        <View>
          <IconButton name="ios-add-circle-outline" onPress={onSubmit} />
        </View>
      </View>
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  composeToolbar: {
    overflow: 'hidden',
    width: '100%',
    maxWidth: theme.FEED_WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  captionContainer: { flex: 1, paddingRight: theme.unit },
}));

export default ComposeToolbar;
