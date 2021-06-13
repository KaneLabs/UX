import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import {
  ActivityIndicator,
  Container,
  TextField,
  OutlinedButton,
  Caption,
  View,
  Title,
  Row,
} from 'eros-ui/components';

import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import {
  UPDATE_ACCOUNT,
  ACCOUNT,
  HANDLE_IS_AVAILABLE,
} from 'eros-ui/queries';
import { isValidHandle } from 'eros-ui/fns';
import { makeStyles } from 'eros-ui/theme';

export const PhoneAuthClaimHandle = ({ onSuccess }) => {
  const styles = useStyles();
  const { data: accountData } = useQuery(ACCOUNT);
  const account = accountData && accountData.account;
  const [updateAccount, updateResponse] = useMutation(UPDATE_ACCOUNT);
  const { loading: updateLoading } = updateResponse;
  const [checkHandleIsAvailable, { data, error, loading }] = useLazyQuery(HANDLE_IS_AVAILABLE);
  const handleIsAvailable = data && data.handleIsAvailable;
  const initialHandle = (account && account.handle && `@${account.handle}`) || '';
  const [handle, setHandle] = useState(initialHandle);

  useEffect(() => {
    if (isValidHandle(handle.slice(1))) {
      checkHandleIsAvailable({ variables: { handle: handle.slice(1), display: handle.slice(1) } });
    }
  }, [handle, checkHandleIsAvailable]);

  const submit = async () => {
    const input = { handle: handle.slice(1) };
    const { data } = await updateAccount({ variables: { input } });
    if (data && data.UpdateAccount) {
      onSuccess(data.UpdateAccount);
    }
  };

  const onHandle = (text) => {
    if (text === '@') {
      return setHandle('');
    } if (text && text[0] !== '@') {
      return setHandle(`@${text}`);
    }
    return setHandle(text);
  };

  const handleIsValid = isValidHandle(handle && handle.slice(1));
  const handleIsMe = account && (account.handle === (handle && handle.slice(1))) || false;

  return (
    <Container style={styles.container} testID="UpdateAccount">
      <View style={styles.titleContainer}>
        <Title type={5} text="Claim Your Handle" gutter />
      </View>

      <Row>
        <View style={{ width: '100%' }}>
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
            testID="PhoneAuthClaimHandleInput"
            onChangeText={onHandle}
            placeholder="@"
            style={styles.textField}
            value={handle}
          />
        </View>
      </Row>
      {updateLoading && <ActivityIndicator />}
      <OutlinedButton
        testID="PhoneAuthClaimHandlePrimaryButton"
        disabled={!isValidHandle}
        onPress={submit}
        text="Save"
        style={styles.button}
      />
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: theme.FEED_WIDTH,
    paddingHorizontal: theme.unit * 2,
    width: '100%',
    alignItems: 'center',
  },
  button: { flex: 1, marginTop: theme.unit * 3.5, width: '100%' },
  textField: {
    marginBottom: theme.unit * 2,
    width: '100%',
  },
  titleContainer: { width: '100%', textAlign: 'center', alignItems: 'center' },
}));

export default PhoneAuthClaimHandle;
