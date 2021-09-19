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
import { TextInput, TextInputProps } from 'react-native';
import { makeStyles } from '@kanelabs/ux/theme';

export type AuthenticatedUser = {
  token: string;
};

export interface PhoneInputProps extends TextInputProps {
  onPhone?: (phone: string) => void;
  selectedCountry?: Country;
}

const PhoneInput = React.forwardRef<TextInput, PhoneInputProps>(
  ({ onPhone, selectedCountry, ...rest }, ref) => {
    const navigation = useNavigation();
    const [phone, setPhone] = React.useState('');
    const [focused, setFocused] = React.useState(false);
    const styles = useStyles();

    console.log({ focused });

    React.useEffect(() => {
      const countryCode =
        selectedCountry?.phone ||
        countries.find((country: Country) => country?.key === 'US');

      const phoneString = `+${countryCode}${phone}`;
      onPhone && onPhone(phoneString);
    }, [selectedCountry, phone]);

    return (
      <Paper
        style={
          focused ? styles.PhoneInputPaperFocused : styles.PhoneInputPaper
        }>
        <Button
          style={{ paddingHorizontal: 8 }}
          text={`+${selectedCountry?.phone} ${selectedCountry?.emoji} `}
          onPress={() => navigation.navigate('CountryCode')}
        />
        <Container>
          <TextField
            ref={ref}
            style={{ flex: 1 }}
            flat
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            returnKeyType={'done'}
            textContentType={'telephoneNumber'}
            autoCompleteType={'tel'} // Android only
            keyboardType={'phone-pad'}
            value={phone}
            onChangeText={setPhone}
            placeholder={'Enter Phone'}
            {...rest}
          />
        </Container>
      </Paper>
    );
  },
);

const useStyles = makeStyles(theme => ({
  PhoneInputPaper: {
    height: 40,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    borderWidth: theme.borderWidth,
  },
  PhoneInputPaperFocused: {
    height: 40,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.mode === 'dark' ? theme.canvas2 : theme.canvas1,
    borderWidth: 0,
    ...theme.shadow(12),
  },
}));

export default PhoneInput;
