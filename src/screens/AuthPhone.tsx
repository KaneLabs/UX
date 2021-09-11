import * as React from 'react';
import { View, AsyncStorage } from 'react-native';
import Container from '@kanelabs/ux/components/Container';
import TextField from '@kanelabs/ux/components/TextField';
import Button from '@kanelabs/ux/components/Button';
import Typography from '@kanelabs/ux/components/Typography';
import Paper from '@kanelabs/ui/Paper';
import Row from '@kanelabs/ui/Layout/Row';

// import Typography from '@kanelabs/ux/components/Typography';
import { RouteProp } from '@react-navigation/core';
import Screen from '@kanelabs/ui/Screen';
import PhoneInput from '@kanelabs/ui/Inputs/PhoneInput';

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
    const response = await authPhone({
      variables: { input: { phone } },
    });
    console.log('submitPhoneResponse', response);
    const success = response?.data?.AuthPhone === 'We sent you a code.';
    if (success) {
      await AsyncStorage.setItem('phone', phone);
      navigation.navigate('AuthPhoneVerify');
    }
  }, [authPhone, phone]);

  const isValid = () => phone.length >= 10;
  return (
    <Screen safe padNav>
      {error?.graphQLErrors.map(({ message, extensions }) => {
        console.log({ extensions });
        if (extensions?.code === 'UNAUTHENTICATED') {
          return null;
        }
        if (message) return <Typography text={message} />;
      })}
      <View style={{ marginVertical: 48 }}>
        <PhoneInput selectedCountry={selectedCountry} onPhone={setPhone} />
      </View>
      <Button
        disabled={loading || !isValid()}
        onPress={submitPhone}
        text="Submit"
      />
    </Screen>
  );
};

export default AuthPhone;
