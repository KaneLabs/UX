import * as React from 'react';
import Typography from 'eros-ui/components/Typography';
import TextField from 'eros-ui/components/TextField';
import Button from 'eros-ui/components/Button';
import Screen from 'eros-ui/components/Screen';
import { useNavigation } from '@react-navigation/native';
import { TypographyTypes } from 'eros-ui/theme';

const AddPaymentMethodScreen = () => {
  const navigation = useNavigation();
  const [number, setNumber] = React.useState('');
  const [expMonth, setExpMonth] = React.useState('');
  const [expYear, setExpYear] = React.useState('');
  const [expCVC, setExpCVC] = React.useState('');

  return (
    <Screen>
      <Typography type={TypographyTypes.h4} gutter>
        {'$5/Mo'}
      </Typography>
      <Typography type={TypographyTypes.h5}>{'Add Credit Card'}</Typography>
      <TextField autoFocus value={number} onChangeText={setNumber} />
      <TextField value={expMonth} onChangeText={setExpMonth} />
      <TextField value={expYear} onChangeText={setExpYear} />
      <TextField value={expCVC} onChangeText={setExpCVC} />
      <Button
        text="List Your Business"
        onPress={() => navigation.navigate('BusinessOnboardingSuccessScreen')}
      />
    </Screen>
  );
};

export default AddPaymentMethodScreen;
