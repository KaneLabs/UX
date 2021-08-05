import React, { useEffect, useReducer } from 'react';
import { View } from 'react-native';
import { useMutation, useApolloClient } from '@apollo/react-hooks';
import { PHONE, SET_PHONE } from 'eros-ui/queries';
import { makeStyles } from 'eros-ui/theme';
import { AsYouType } from 'libphonenumber-js';

import {
  OutlinedButton,
  Container,
  TextField,
  Subtitle,
  ActivityIndicator,
  Row,
} from 'eros-ui/components';

// const PHONE_STATE = {
//   phoneId: 0,
//   countryCode: '1',
//   emoji: '🇺🇸',
//   number: '',
//   verificationCode: '',
//   status: 'NOT_VERIFIED',
//   countryCodeMenuOpen: false,
// };

const PHONE_STATE = {
  countryCode: '1',
  country: 'US',
  phoneNumber: '',
  friendlyPhoneNumber: '',
  isPossible: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PHONE_NUMBER':
      return {
        ...state,
        phoneNumber: action.payload,
        friendlyPhoneNumber: new AsYouType(state.country).input(action.payload),
      };
    case 'SET_IS_POSSIBLE':
      return {
        ...state,
        isPossible: action.payload,
      };
    default:
      throw `Action Type: ${action.type} not found`;
  }
};

const useSetPhoneMutation = () => {
  const client = useApolloClient();
  const [setPhone, state] = useMutation(SET_PHONE, {
    onCompleted({ SetPhone: phone }) {
      console.log('onCompleted phone', phone);
      client.writeQuery({ query: PHONE, data: { Phone: { ...phone } } });
    },
  });

  return [setPhone, state];
};

export const PhoneAuthSet = ({
  onSuccess,
  handle,
  onCountryCodePress = () => null,
  onNext = () => null,
  initialState = PHONE_STATE,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [setPhone, { data, error, loading }] = useSetPhoneMutation();

  const handlePhone = (nextNumber) => {
    const nextPhoneNumber = nextNumber.replace(/\D/g, '');
    if (nextPhoneNumber.length === 3 && state.phoneNumber.length === 3) {
      return dispatch({
        type: 'SET_PHONE_NUMBER',
        payload: nextPhoneNumber.slice(0, 2),
      });
    }
    return dispatch({ type: 'SET_PHONE_NUMBER', payload: nextPhoneNumber });
  };

  useEffect(() => {
    if (state.phoneNumber.length === 10) {
      dispatch({ type: 'SET_IS_POSSIBLE', payload: true });
    } else {
      dispatch({ type: 'SET_IS_POSSIBLE', payload: false });
    }
  }, [state.phoneNumber]);

  const submitPhone = async () => {
    try {
      const input = {
        countryCode: state.countryCode,
        number: state.phoneNumber,
      };
      const { data } = await setPhone({ variables: { input } });

      if (data && data.SetPhone) {
        return onSuccess(data.SetPhone);
      }
    } catch (e) {
      console.log('handlePhone catch', e.message);
    }
  };

  console.log('state', state);
  const isValid = state.isPossible;

  const styles = useStyles();

  return (
    <>
      <View style={{ width: '100%' }} testID="PhoneAuthSet">
        <Subtitle text="Enter Phone Number" gutter />
        <Row center style={styles.row}>
          <View style={styles.textFieldContainer}>
            <TextField
              testID="PhoneAuthSetInput"
              style={styles.textField}
              autoFocus
              keyboardType="phone-pad"
              keyboardAppearance="dark"
              label="phone"
              onChangeText={handlePhone}
              value={state.friendlyPhoneNumber}
            />
          </View>
        </Row>
        {error && error.message && (
          <Subtitle testID="PhoneAuthSetError" text={error.message} gutter />
        )}
        {loading && <ActivityIndicator />}
      </View>

      <Container center>
        <OutlinedButton
          testID="PhoneAuthSetPrimaryButton"
          disabled={!isValid}
          style={styles.button}
          text="Continue"
          onPress={submitPhone}
        />
      </Container>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: theme.FEED_WIDTH,
    padding: theme.NAV_HEIGHT,
    // paddingHorizontal: unit * 2.5,
    // paddingVertical: unit * 3.5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: { flex: 1, width: '100%' },
  row: {
    width: '100%',
    marginBottom: 14,
  },
  content: {
    flex: 1,
  },
  textField: {
    fontSize: 21,
    lineHeight: 31,
    alignItems: 'center',
  },
  textFieldContainer: {
    width: '100%',
    flex: 1,
  },
}));

export default PhoneAuthSet;
