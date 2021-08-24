import React from 'react';
import { View } from 'react-native';
import { useMutation } from '@apollo/client';
import { TOGGLE_COMPOSE_MODAL } from 'eros-ui/queries';
import ImageUploadButton from 'eros-ui/components/Buttons/ImageUploadButton';
import OutlinedButton from 'eros-ui/components/Buttons/OutlinedButton';
import { unit } from 'eros-ui/theme';

const ComposeButtons = () => {
  const [toggleComposeModal] = useMutation(TOGGLE_COMPOSE_MODAL);
  return (
    <View style={styles.container}>
      <ImageUploadButton />
      <OutlinedButton
        icon="ios-add"
        onPress={toggleComposeModal}
        style={styles.composeButton}
        text="POST"
      />
    </View>
  );
};

const styles = {
  container: { width: '100%', padding: unit * 1.5, paddingBottom: unit * 3.5 },
  composeButton: { width: '100%' },
};

export default ComposeButtons;
