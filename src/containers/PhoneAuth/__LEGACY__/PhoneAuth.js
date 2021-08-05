import React, { useState } from 'react';
import { View } from 'react-native';
import { useMutation } from '@apollo/react-hooks';
import { SET_PHONE, VERIFY_PHONE } from 'eros-ui/queries';
import { unit, makeStyles } from 'eros-ui/theme';

import {
  Button,
  TextField,
  Subtitle,
  CountryCodeMenu,
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

const PhoneAuth = ({ onSuccess, handle }) => {
  const [state, setState] = useState(INITIAL_STATE);
  // const [me, { data: account }] = useLazyQuery(ME, {
  //   fetchPolicy: 'network-only',
  // });

  const [setPhone] = useMutation(SET_PHONE);
  const [verifyPhone] = useMutation(VERIFY_PHONE);

  // const client = useApolloClient();

  const handlePhone = async (nextNumber) => {
    setState((state) => ({ ...state, number: nextNumber }));

    if (nextNumber.length === 10) {
      try {
        setState((state) => ({ ...state, loading: true }));

        const input = { countryCode: state.countryCode, number: nextNumber };
        const { data } = await setPhone({ variables: { input } });

        console.log('data', data);

        if (data && data.SetPhone && data.SetPhone.id) {
          return setState((state) => ({
            ...state,
            status: 'CODE_SENT',
            phoneId: data.SetPhone.id,
            loading: false,
          }));
        }

        return setState((state) => ({ ...state, loading: false }));
      } catch (e) {
        console.log('handlePhone catch', e.message);
        return setState((state) => ({ ...state, loading: false }));
      }
    }
  };

  const handleCode = async (nextCode) => {
    setState((state) => ({ ...state, verificationCode: nextCode }));

    if (nextCode.length === 6) {
      try {
        setState((state) => ({ ...state, loading: true }));
        const { countryCode, number, phoneId } = state;

        const input = { id: phoneId, verificationCode: nextCode };

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

  const styles = useStyles();

  return (
    <View style={styles.container} testID="PhoneAuth">
      <Subtitle
        type={2}
        text={
          state.status === 'NOT_VERIFIED'
            ? 'Enter Phone Number'
            : 'Enter Verification Code'
        }
        gutter
      />

      {state.status === 'NOT_VERIFIED' ? (
        <>
          <View style={styles.row}>
            <Button
              fontStyle={{ fontSize: 22, lineHeight: 24 }}
              text={`${state.emoji} ${state.countryCode.toString()} `}
              onPress={() =>
                setState((state) => ({ ...state, countryCodeMenuOpen: true }))
              }
            />

            <View style={styles.textFieldContainer}>
              <TextField
                style={styles.textField}
                autoFocus
                testID="PhoneInput"
                keyboardType="number-pad"
                keyboardAppearance="dark"
                label="phone"
                onChangeText={handlePhone}
                value={state.number}
              />
            </View>
          </View>

          {state.countryCodeMenuOpen && (
            <CountryCodeMenu
              setCountryCode={(countryCode) => {
                setState((state) => ({
                  ...state,
                  countryCode,
                  countryCodeMenuOpen: false,
                }));
              }}
              close={() =>
                setState((state) => ({ ...state, countryCodeMenuOpen: false }))
              }
            />
          )}
        </>
      ) : (
        <View style={styles.row}>
          <View style={styles.textFieldContainer}>
            <TextField
              style={styles.textField}
              autoFocus
              testID="CodeInput"
              keyboardType="number-pad"
              keyboardAppearance="dark"
              label="code"
              onChangeText={handleCode}
              value={state.verificationCode}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 540,
    paddingHorizontal: unit * 2.5,
    paddingVertical: unit * 3.5,
    width: '100%',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
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

export default PhoneAuth;
