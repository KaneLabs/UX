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

import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import {
  UPDATE_ACCOUNT,
  ACCOUNT,
  HANDLE_IS_AVAILABLE,
  UPDATE_PERSONA_AVATAR,
  UPDATE_PERSONA_BANNER,
} from 'eros-ui/queries';
import { isValidHandle } from 'eros-ui/fns';
import { makeStyles, useTheme } from 'eros-ui/theme';

const initialState = {
  display: '',
  handle: '',
};

const UpdateAvatarButton = (props) => {
  const [{ canvasOpaque, canvas3Opaque }] = useTheme();

  return (
    <ImageUploadButton
      style={{ backgroundColor: canvasOpaque }}
      hoverStyle={{ backgroundColor: canvas3Opaque }}
      iconName="ios-camera"
      onFiles={onBannerFiles}
    />
  );
};

export const UpdateAccount = ({ onSuccess }) => {
  const [{ canvasOpaque, canvas3Opaque }] = useTheme();

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

  const onHandle = (text) => {
    if (text === '@') {
      return setHandle('');
    }
    if (text && text[0] !== '@') {
      return setHandle(`@${text}`);
    }
    return setHandle(text);
  };

  const handleIsValid = isValidHandle(handle && handle.slice(1));
  const handleIsMe = account.handle === (handle && handle.slice(1));
  const handleIsAvailableAndValid =
    handleIsAvailable && handleIsValid && display.length > 1;

  const isValid = handleIsAvailableAndValid || handleIsMe;

  const styles = useStyles();

  return (
    <>
      <Banner uri={account && account.bannerUrl}>
        <ImageUploadButton
          style={{ backgroundColor: canvasOpaque }}
          hoverStyle={{ backgroundColor: canvas3Opaque }}
          iconName="ios-camera"
          onFiles={onBannerFiles}
        />
      </Banner>
      <Container style={styles.container} testID="UpdateAccount">
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
          <Container>
            <Caption text="Name" gutter />
            <TextField
              testID="UpdateAccountDisplayInput"
              onChangeText={setDisplay}
              placeholder="Display"
              style={styles.textField}
              value={display}
            />
            {loading ? (
              <ActivityIndicator size={12} style={{ marginBottom: 8 }} />
            ) : handleIsMe ? (
              <Caption text={`${handle}`} gutter />
            ) : handleIsValid && handleIsAvailable ? (
              <Caption text={`${handle} is available`} gutter />
            ) : handle.length === 0 ? (
              <Caption text="Claim your handle" gutter />
            ) : (
              <Caption text={`${handle} has been taken`} gutter />
            )}
            <TextField
              testID="UpdateAccountHandleInput"
              onChangeText={onHandle}
              placeholder="@"
              style={styles.textField}
              value={handle}
            />
          </Container>
        </View>

        {updateLoading && <ActivityIndicator />}
        <Container>
          <OutlinedButton
            testID="UpdateAccountPrimaryButton"
            disabled={!isValid}
            onPress={submit}
            text="Save"
            style={styles.button}
          />
        </Container>
      </Container>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: theme.FEED_WIDTH,
    paddingHorizontal: theme.unit * 2,
    // paddingHorizontal: theme.unit * 2.5,
    // paddingVertical: theme.unit * 3.5,
    width: '100%',
    alignItems: 'center',
  },
  button: { flex: 1, width: '100%' },
  textField: {
    marginBottom: theme.unit * 2,
  },
  row: {
    width: '100%',
    paddingVertical: theme.unit * 2,
    flexDirection: 'row',
  },
  banner: {},
  // content: {
  //   flex: 1,
  // },
  // textField: {
  //   fontSize: 21,
  //   lineHeight: 31,
  //   alignItems: 'center',
  // },
  // textFieldContainer: {
  //   width: '100%',
  //   flex: 1,
  // },
}));
