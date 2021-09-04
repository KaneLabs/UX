import React, { useState } from 'react';
import { View } from 'react-native';
import { useMutation, useApolloClient, useQuery } from '@apollo/client';
import {
  PHONE,
  SET_PHONE,
  ME,
  AUTH_PHONE_OR_EMAIL,
} from '@kanelabs/ux/queries';
import { makeStyles } from '@kanelabs/ux/theme';
import { AsYouType } from 'libphonenumber-js';

import {
  OutlinedButton,
  TextField,
  Subtitle,
  ActivityIndicator,
  Row,
} from '@kanelabs/ux/components';

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
      throw new Error(`Action Type: ${action.type} not found`);
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

const AuthPhoneOrEmail = ({
  onSuccess = () => null,
  handle,
  onCountryCodePress = () => null,
  onNext = () => null,
  initialState = PHONE_STATE,
}) => {
  const styles = useStyles();
  const cachedMe = useQuery(ME, { fetchPolicy: 'cache-only' });
  console.log('cachedMe', cachedMe);
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const client = useApolloClient();
  const [authPhoneOrEmail, { data, error, loading }] = useMutation(
    AUTH_PHONE_OR_EMAIL,
    {
      // update(cache, { data }) {
      //   cache.writeQuery({
      //     query: ME,
      //     data: {

      //     },
      //   });
      // },
      onCompleted({ AuthPhoneOrEmail }) {
        console.log('onCompleted', AuthPhoneOrEmail);
        // client.writeQuery({ query: ME, data: { Phone: { ...phone } } });
        return AuthPhoneOrEmail && onSuccess && onSuccess(AuthPhoneOrEmail);
        // client.writeQuery({ query: PHONE, data: { Phone: { ...phone } } });
      },
    },
  );

  // const [setPhone, { data, error, loading }] = useSetPhoneMutation();

  const handlePhone = (next) => {
    setPhoneOrEmail(next);
    // const nextPhoneNumber = nextNumber.replace(/\D/g, '');
    // if (nextPhoneNumber.length === 3 && state.phoneNumber.length === 3) {
    //   return dispatch({ type: 'SET_PHONE_NUMBER', payload: nextPhoneNumber.slice(0, 2) });
    // }
    // return dispatch({ type: 'SET_PHONE_NUMBER', payload: nextPhoneNumber });
  };

  // useEffect(() => {
  //   if (state.phoneNumber.length === 10) {
  //     dispatch({ type: 'SET_IS_POSSIBLE', payload: true });
  //   } else {
  //     dispatch({ type: 'SET_IS_POSSIBLE', payload: false });
  //   }
  // }, [state.phoneNumber]);

  const submit = async () => {
    try {
      // const input = { countryCode: state.countryCode, number: state.phoneNumber };
      const { data, error } = await authPhoneOrEmail({
        variables: { phoneOrEmail },
      });
      console.log({ data, error });

      // if (data && data.AuthPhoneOrEmail) {
      //   return onSuccess && onSuccess(phoneOrEmail);
      // }
    } catch (e) {
      console.log('handlePhone catch', e.message);
    }
  };

  // console.log('state', state);å
  // const isValid = state.isPossible;

  return (
    <View style={{ width: '100%' }} testID="AuthPhoneOrEmail">
      <Subtitle text="Enter Phone or Email" gutter />
      <Row center style={styles.row}>
        <View style={styles.textFieldContainer}>
          <TextField
            testID="AuthPhoneOrEmailInput"
            style={styles.textField}
            autoFocus
            keyboardAppearance="dark"
            label="phone"
            onChangeText={handlePhone}
            value={phoneOrEmail}
          />
        </View>
      </Row>
      {error && error.message && (
        <Subtitle testID="AuthPhoneOrEmailError" text={error.message} gutter />
      )}
      {loading && <ActivityIndicator />}
      <OutlinedButton onPress={submit} />
    </View>
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

export default AuthPhoneOrEmail;
