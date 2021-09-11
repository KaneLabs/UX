import * as React from 'react';
import Container from '@kanelabs/ux/components/Container';
import TextField from '@kanelabs/ux/components/TextField';
import Button from '@kanelabs/ux/components/Button';
import Paper from '@kanelabs/ui/Paper';
import Row from '@kanelabs/ui/Layout/Row';

import { AUTH_PHONE, ME } from '@kanelabs/ux/queries/Auth';
import { useNavigation } from '@react-navigation/native';
import countries, {
  Country,
} from '@kanelabs/ux/components/CountryCodeMenu/country-data';
import { TextInput } from 'react-native';
export type AuthenticatedUser = {
  token: string;
};

export interface PhoneInputProps {
  onPhone?: (phone: string) => void;
  selectedCountry?: Country;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  onPhone,
  selectedCountry,
}) => {
  const navigation = useNavigation();
  const [phone, setPhone] = React.useState('');
  const inputRef = React.useRef<TextInput>(null);

  React.useEffect(() => {
    const countryCode =
      selectedCountry?.phone ||
      countries.find((country: Country) => country?.key === 'US');

    const phoneString = `+${countryCode}${phone}`;
    onPhone && onPhone(phoneString);
  }, [selectedCountry, phone]);

  return (
    <Row
      style={{
        height: 44,
        width: '100%',
        paddingHorizontal: 24,
      }}>
      <Paper
        style={{
          flex: 1,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Button
          style={{ paddingHorizontal: 8 }}
          text={`+${selectedCountry?.phone} ${selectedCountry?.emoji} `}
          onPress={() => navigation.navigate('CountryCode')}
        />
        <Container>
          <TextField
            style={{ flex: 1 }}
            flat
            focusStyle={{ backgroundColor: 'rgba(0,0,0,0)' }}
            textContentType={'telephoneNumber'}
            autoCompleteType={'tel'} // Android only
            keyboardType={'phone-pad'}
            ref={inputRef}
            value={phone}
            onChangeText={setPhone}
            placeholder={'Enter Phone'}
          />
        </Container>
      </Paper>
    </Row>
  );
};

export default PhoneInput;
