import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import {
  Avatar,
  ActivityIndicator,
  Container,
  TextField,
  OutlinedButton,
  View,
  Caption,
  ImageUploadButton,
  Banner,
} from 'eros-ui/components';

import { useQuery, useMutation, useLazyQuery } from '@apollo/client';
import {
  UPDATE_ACCOUNT,
  ACCOUNT,
  HANDLE_IS_AVAILABLE,
  UPDATE_PERSONA_AVATAR,
  UPDATE_PERSONA_BANNER,
} from 'eros-ui/queries';
import { isValidHandle } from 'eros-ui/fns';
import {
  makeStyles,
  FEED_WIDTH,
  unit,
  canvasOpaque,
  canvas3Opaque,
} from 'eros-ui/theme';

const initialState = {
  display: '',
  handle: '',
};

export const SetProfilePic = ({ onSuccess }) => {
  const { data: accountData } = useQuery(ACCOUNT);
  const account = accountData && accountData.account;
  const [updateAccount, updateResponse] = useMutation(UPDATE_ACCOUNT);
  const { loading: updateLoading } = updateResponse;
  const [updatePersonaAvatar] = useMutation(UPDATE_PERSONA_AVATAR);
  const [updatePersonaBanner] = useMutation(UPDATE_PERSONA_BANNER);
  const [checkHandleIsAvailable, { data, error, loading }] =
    useLazyQuery(HANDLE_IS_AVAILABLE);
  const handleIsAvailable = data && data.handleIsAvailable;
  const initialDisplay = (account && account.display) || '';
  const [display, setDisplay] = useState(initialDisplay);
  const initialHandle =
    (account && account.handle && `@${account.handle}`) || '';
  const [handle, setHandle] = useState(initialHandle);

  const onAvatarFiles = async (images) => {
    const options = { variables: { image: images[0] } };
    const { data } = await updatePersonaAvatar(options);

    if (data) alert(`NEW URI ${data}`);
  };

  const onBannerFiles = async (images) => {
    const options = { variables: { image: images[0] } };
    const { data } = await updatePersonaBanner(options);

    if (data) alert(`NEW URI ${data}`);
  };

  useEffect(() => {
    if (isValidHandle(handle.slice(1))) {
      checkHandleIsAvailable({ variables: { handle: handle.slice(1) } });
    }
  }, [handle, checkHandleIsAvailable]);

  const submit = async () => {
    const input = { handle: handle.slice(1), display };
    const { data } = await updateAccount({ variables: { input } });
    if (data && data.UpdateAccount) {
      onSuccess(data.UpdateAccount);
    }
  };

  const handleIsValid = isValidHandle(handle && handle.slice(1));
  const handleIsMe = account.handle === (handle && handle.slice(1));
  const handleIsAvailableAndValid =
    handleIsAvailable && handleIsValid && display.length > 1;

  const isValid = handleIsAvailableAndValid || handleIsMe;

  return (
    <Container style={styles.container} testID="UpdateAccount">
      <Banner uri={account && account.bannerUrl}>
        <ImageUploadButton
          style={{ backgroundColor: canvasOpaque }}
          hoverStyle={{ backgroundColor: canvas3Opaque }}
          iconName="ios-camera"
          onFiles={onBannerFiles}
        />
      </Banner>
      <View style={styles.row}>
        <View
          style={{
            height: 90,
            width: 90,
            borderRadius: 90,
            marginRight: 16,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ImageUploadButton
            style={{ backgroundColor: canvasOpaque }}
            hoverStyle={{ backgroundColor: canvas3Opaque }}
            iconName="ios-camera"
            onFiles={onAvatarFiles}
          />
          <Avatar
            size={90}
            avatarUrl={account && account.avatarUrl}
            style={{ padding: 0, position: 'absolute', zIndex: -1 }}
          />
        </View>
      </View>

      {updateLoading && <ActivityIndicator />}

      <Container>
        <OutlinedButton
          testID="UpdateAccountPrimaryButton"
          disabled={!isValid}
          onPress={submit}
          text="SKIP"
          style={styles.button}
        />
      </Container>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: FEED_WIDTH,
    paddingHorizontal: unit * 2,
    // paddingHorizontal: unit * 2.5,
    // paddingVertical: unit * 3.5,
    width: '100%',
    alignItems: 'center',
  },
  button: { flex: 1, width: '100%' },
  textField: {
    marginBottom: unit * 2,
  },
  row: {
    width: '100%',
    paddingVertical: unit * 2,
    flexDirection: 'row',
  },
  banner: {},
}));

export default SetProfilePic;
