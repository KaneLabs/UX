import * as React from 'react';
import { View, AsyncStorage } from 'react-native';
import Container from 'eros-ui/components/Container';
import TextField from 'eros-ui/components/TextField';
import Button from 'eros-ui/components/Button';
import Row from 'eros-ui/components/Layout/Row';
// import Typography from 'eros-ui/components/Typography';
// import { RouteProp } from '@react-navigation/core';

import { AUTH_PHONE, ME } from 'eros-ui/queries/Auth';
import { useMutation, useQuery } from '@apollo/client';
// // import { useFocusEffect, useNavigation } from '@react-navigation/native';
import countries, {
  Country,
} from 'eros-ui/components/CountryCodeMenu/country-data';
import { TextInput } from 'react-native';
export type AuthenticatedUser = {
  token: string;
};

export interface AuthPhoneProps {
  onSuccess?: (arg0: 'We sent you a code.') => void;
  onCountryCodePress?: () => void;
  // route: RouteProp<{ params?: { country: Country } }, 'params'>;
}

console.log({ AUTH_PHONE, ME });

const AuthPhone: React.FC<AuthPhoneProps> = ({ onSuccess, onCountryCodePress }) => {
  // // const navigation = useNavigation();
  const [phone, setPhone] = React.useState('');
  const inputRef = React.useRef<TextInput>(null);
  const { refetch, loading, data, error, called, client } = useQuery(ME);
  const [authPhone, authPhoneData] = useMutation(AUTH_PHONE);
  // console.log({ route });
  const [selectedCountry, setSelectedCountry] = React.useState<
    Country | undefined
  >(countries.find((country: Country) => country?.key === 'US'));

  // useFocusEffect(
  //   React.useCallback(() => {
  //     // Do something when the screen is focused
  //     called && refetch();
  //     if (
  //       route?.params?.country &&
  //       selectedCountry?.key !== route?.params?.country?.key
  //     ) {
  //       setSelectedCountry(route?.params?.country);
  //     }

  //     inputRef?.current?.focus();
  //     // reset state
  //     return () => {
  //       // Do something when the screen is unfocused
  //       // Useful for cleanup functions
  //       setPhone('');
  //     };
  //   }, [refetch, route?.params]),
  // );

  const submitPhone = React.useCallback(async () => {
    const phoneString = `+${selectedCountry?.phone}${phone}`;
    const response = await authPhone({
      variables: { input: { phone: phoneString } },
    });
    const success = response?.data?.AuthPhone === 'We sent you a code.';
    if (success) {
      await AsyncStorage.setItem('phone', phoneString);
      onSuccess && onSuccess('We sent you a code.');
    }
  }, [authPhone, phone]);

  return (
    <Container center>
      <View
        style={{
          flex: 1,
          alignSelf: 'center',
          margin: 40,
          marginVertical: 80,
        }}>
        <Row fullWidth style={{ padding: 20, paddingRight: 40 }}>
          <Button
            style={{ paddingHorizontal: 8 }}
            text={`+${selectedCountry?.phone} ${selectedCountry?.emoji} `}
            onPress={onCountryCodePress}
          />
          <TextField
            keyboardType={'phone-pad'}
            style={{ width: '100%' }}
            ref={inputRef}
            value={phone}
            onChangeText={setPhone}
            placeholder={'Enter Phone'}
          />
        </Row>
        <Button disabled={loading} onPress={submitPhone} text="Submit" />
      </View>
    </Container>
  );
};

export default AuthPhone;
