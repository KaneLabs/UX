import React, { useState } from 'react';
import { View } from 'react-native';
import { useMutation, useQuery } from '@apollo/client';
import { PHONE, VERIFY_PHONE } from 'eros-ui/queries';
import { makeStyles } from 'eros-ui/theme';

import {
  OutlinedButton,
  Button,
  TextField,
  Subtitle,
  Container,
  ActivityIndicator,
} from 'eros-ui/components';

const INITIAL_STATE = {
  phoneId: 0,
  countryCode: '1',
  emoji: '🇺🇸',
  number: '',
  verificationCode: '',
  status: 'NOT_VERIFIED',
  countryCodeMenuOpen: false,
};

export const PhoneAuthVerify = ({ onSuccess, onBack = () => null, handle }) => {
  const [state, setState] = useState(INITIAL_STATE);
  const styles = useStyles();
  const { data } = useQuery(PHONE);
  const phone = data && data.Phone;

  const [verifyPhone, { error, loading }] = useMutation(VERIFY_PHONE);

  const handleCode = async (nextCode) => {
    setState((state) => ({ ...state, verificationCode: nextCode }));

    if (nextCode.length === 6) {
      try {
        const { id } = phone;
        const input = { id, verificationCode: nextCode };

        const { data } = await verifyPhone({ variables: { input } });

        if (data && data.VerifyPhone && data.VerifyPhone.token) {
          console.log('verify phone account response', data.VerifyPhone);
          return onSuccess(data.VerifyPhone);
        }
      } catch (e) {
        console.log('verifyPhone catch', e);
      }
    }
  };

  const submit = async () => {
    try {
      const input = { id: phone.id, verificationCode: state.verificationCode };

      const { data } = await verifyPhone({ variables: { input } });

      if (data && data.VerifyPhone && data.VerifyPhone.token) {
        return onSuccess(data.VerifyPhone);
      }
    } catch (e) {}
  };

  return (
    <>
      <View style={{ width: '100%' }} testID="PhoneAuthVerify">
        <Subtitle text="Enter Verification Code" gutter />
        <View style={styles.row}>
          <View style={styles.textFieldContainer}>
            <TextField
              style={styles.textField}
              autoFocus
              testID="PhoneAuthVerifyInput"
              keyboardType="phone-pad"
              keyboardAppearance="dark"
              label="code"
              onChangeText={handleCode}
              value={state.verificationCode}
            />
          </View>
        </View>
        {error && error.message && (
          <Subtitle testID="PhoneAuthVerifyError" text={error.message} gutter />
        )}
        {loading && <ActivityIndicator />}
      </View>

      <Container center>
        <OutlinedButton
          disabled={state.verificationCode.length !== 6}
          testID="PhoneAuthVerifyPrimaryButton"
          text="NEXT"
          onPress={submit}
          style={{ marginBottom: 20, width: '100%' }}
        />
        <Button
          testID="PhoneAuthVerifyBackButton"
          text="Back"
          onPress={onBack}
          style={{ marginBottom: 20, width: '100%' }}
        />
      </Container>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: theme.FEED_WIDTH,
    padding: theme.NAV_HEIGHT,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: theme.unit * 1.5,
  },
  content: {
    flex: 1,
  },
  textField: {
    fontSize: 22,
    lineHeight: 28,
    alignItems: 'center',
  },
  textFieldContainer: {
    width: '100%',
    flex: 1,
  },
}));

export default PhoneAuthVerify;
