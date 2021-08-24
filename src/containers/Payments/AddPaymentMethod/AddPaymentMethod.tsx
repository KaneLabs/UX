import * as React from 'react';
import Typography from 'eros-ui/components/Typography';
import TextField from 'eros-ui/components/TextField';
import Button from 'eros-ui/components/Button';
import Container from 'eros-ui/components/Container';
import Row from 'eros-ui/components/Layout/Row';
import { useQuery, useMutation } from '@apollo/client';
import { ME } from 'eros-ui/queries/Auth';
import { CREATE_STRIPE_CARD_TOKEN } from 'eros-ui/queries/Pay'

// import { useNavigation } from '@react-navigation/native';
import { TypographyTypes } from 'eros-ui/theme';
import { TextInput } from 'react-native';

const AddPaymentMethod: React.FC = () => {
  // const navigation = useNavigation();
  const [number, setNumber] = React.useState('');
  const [expMonth, setExpMonth] = React.useState('');
  const [expYear, setExpYear] = React.useState('');
  const [cvc, setCvc] = React.useState('');

  const numberRef = React.useRef<TextInput>(null);
  React.useEffect(() => {
    numberRef?.current?.focus();
  }, []);

  const { data } = useQuery(ME);
  console.log({ data });
  const [createStripeCardToken, { error, loading }] = useMutation(CREATE_STRIPE_CARD_TOKEN);

  const onSubmit = async () => {
    console.log(number)
    const input = { number, expMonth, expYear, cvc };
    createStripeCardToken({ variables: { input } });
  }

  return (
        <Container style={{ padding: 20, alignItems: 'center' }}>
          <Typography type={TypographyTypes.h6} style={{ marginBottom: 16 }}>
            {'Add Payment Method'}
          </Typography>
          {error?.graphQLErrors.map((GraphQLError => {
            return <Typography text={GraphQLError.message} />
          }))}

          {loading && <Typography text={'loading...'} />}
          <TextField
            ref={numberRef}
            autoCompleteType={'cc-number'}
            textContentType={'creditCardNumber'}
            value={number}
            onChangeText={setNumber}
            style={{ marginBottom: 10 }}
            fullWidth
            placeholder={'Number'}
          />
          <Row>
            <Row style={{ flex: 1 }}>
              <TextField
                autoCompleteType={'cc-exp-month'}
                style={{ marginBottom: 10, marginRight: 10 }}
                placeholder={'MO'}
                value={expMonth}
                onChangeText={setExpMonth}
              />
              <TextField
                autoCompleteType={'cc-exp-year'}
                style={{ marginBottom: 10 }}
                placeholder={'YEAR'}
                value={expYear}
                onChangeText={setExpYear}
              />
            </Row>
            <TextField
              autoCompleteType={'cc-csc'}
              style={{ marginBottom: 10 }}
              placeholder={'CVC'}
              value={cvc}
              onChangeText={setCvc}
            />
          </Row>
          <Button
            style={{ margin: 32 }}
            text="Add Payment Method"
            onPress={onSubmit}
            disabled={loading}
          />
        </Container>
  );
};

export default AddPaymentMethod;
