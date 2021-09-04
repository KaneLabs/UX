import * as React from 'react';
import { View, AsyncStorage } from 'react-native';
import Container from '@kanelabs/ux/components/Container';
import TextField from '@kanelabs/ux/components/TextField';
import Button from '@kanelabs/ux/components/Button';
import Typography from '@kanelabs/ux/components/Typography';
import Row from '@kanelabs/ux/components/Layout/Row';
// import Typography from '@kanelabs/ux/components/Typography';
import { RouteProp } from '@react-navigation/core';

import { AUTH_PHONE, ME } from '@kanelabs/ux/queries/Auth';
import { useMutation, useQuery } from '@apollo/client';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import countries, {
  Country,
} from '@kanelabs/ux/components/CountryCodeMenu/country-data';
import { TextInput } from 'react-native';
export type AuthenticatedUser = {
  token: string;
};

export interface AuthPhoneProps {
  onSuccess: (arg0: AuthenticatedUser) => void;
  route: RouteProp<{ params?: { country: Country } }, 'params'>;
}

console.log({ AUTH_PHONE, ME });

const AuthPhone: React.FC<AuthPhoneProps> = ({ route }) => {
  const navigation = useNavigation();
  const [phone, setPhone] = React.useState('');
  const inputRef = React.useRef<TextInput>(null);
  const { refetch, loading, data, error, called, client } = useQuery(ME);
  const [authPhone, authPhoneData] = useMutation(AUTH_PHONE);
  console.log({ route });
  const [selectedCountry, setSelectedCountry] = React.useState<
    Country | undefined
  >(countries.find((country: Country) => country?.key === 'US'));

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      called && refetch();
      if (
        route?.params?.country &&
        selectedCountry?.key !== route?.params?.country?.key
      ) {
        setSelectedCountry(route?.params?.country);
      }

      inputRef?.current?.focus();
      // reset state
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        setPhone('');
      };
    }, [refetch, route?.params]),
  );

  const submitPhone = React.useCallback(async () => {
    const phoneString = `+${selectedCountry?.phone}${phone}`;
    console.log({ phoneString });
    const response = await authPhone({
      variables: { input: { phone: phoneString } },
    });
    const success = response?.data?.AuthPhone === 'We sent you a code.';
    if (success) {
      await AsyncStorage.setItem('phone', phoneString);
      navigation.navigate('AuthPhoneVerify');
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
                    {error?.graphQLErrors.map((GraphQLError => {
            return <Typography text={GraphQLError.message} />
          }))}
        <Row fullWidth style={{ padding: 20, paddingRight: 40 }}>
          <Button
            style={{ paddingHorizontal: 8 }}
            text={`+${selectedCountry?.phone} ${selectedCountry?.emoji} `}
            onPress={() => navigation.navigate('CountryCode')}
          />
          <TextField
            textContentType={'telephoneNumber'}
            autoCompleteType={'tel'} // Android only
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
