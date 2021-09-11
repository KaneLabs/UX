import * as React from 'react';
import { ScrollView } from 'react-native';
import Screen from '@kanelabs/ux/components/Screen';
import { useNavigation } from '@react-navigation/native';
import CountryCodeList from '@kanelabs/ux/components/CountryCodeMenu/CountryCodeList';

import { Country } from '@kanelabs/ux/components/CountryCodeMenu/country-data';

export type AuthenticatedUser = {
  token: string;
};

export interface CountryCodeScreenProps {
  onSuccess: (arg0: AuthenticatedUser) => void;
}

const CountryCodeScreen = ({ onSuccess }: CountryCodeScreenProps) => {
  const navigation = useNavigation();
  const onPress = (country: Country) =>
    navigation.navigate('AuthPhone', { country });

  return (
    <Screen safe padNav>
      <ScrollView contentContainerStyle={{ maxWidth: '100%' }}>
        <CountryCodeList onCountryPress={onPress} />
      </ScrollView>
    </Screen>
  );
};

export default CountryCodeScreen;
