import * as React from 'react';
import Typography from '@kanelabs/ux/components/Typography';
import TextField from '@kanelabs/ux/components/TextField';
import Button from '@kanelabs/ux/components/Button';
import Container from '@kanelabs/ux/components/Container';
import Row from '@kanelabs/ux/components/Layout/Row';
import { useQuery, useMutation } from '@apollo/client';
import { ME } from '@kanelabs/ux/queries/Auth';
import { CREATE_STRIPE_CARD_TOKEN } from '@kanelabs/ux/queries/Pay';

// import { useNavigation } from '@react-navigation/native';
import { TypographyTypes, makeStyles } from '@kanelabs/ux/theme';
import { TextInput } from 'react-native';

const AddPaymentMethod: React.FC<{ hideTitle?: boolean }> = ({
  hideTitle = false,
}) => {
  // const navigation = useNavigation();
  const styles = useStyles();
  const [number, setNumber] = React.useState('');
  const [expMonth, setExpMonth] = React.useState('');
  const [expYear, setExpYear] = React.useState('');
  const [cvc, setCvc] = React.useState('');

  const numberRef = React.useRef<TextInput>(null);
  React.useEffect(() => {
    numberRef?.current?.focus();
  }, []);

  const { data } = useQuery(ME);
  const [createStripeCardToken, { error, loading }] = useMutation(
    CREATE_STRIPE_CARD_TOKEN,
  );

  const onSubmit = async () => {
    console.log(number);
    const input = { number, expMonth, expYear, cvc };
    createStripeCardToken({ variables: { input } });
  };

  return (
    <Container style={{ padding: 20, alignItems: 'center' }}>
      {!hideTitle && (
        <Typography type={TypographyTypes.h6} style={styles.MarginBottom}>
          {'Add Payment Method'}
        </Typography>
      )}
      {error?.graphQLErrors.map(GraphQLError => {
        return <Typography text={GraphQLError.message} />;
      })}

      {loading && <Typography text={'loading...'} />}
      <TextField
        ref={numberRef}
        autoCompleteType={'cc-number'}
        textContentType={'creditCardNumber'}
        value={number}
        onChangeText={setNumber}
        style={styles.MarginBottom}
        fullWidth
        placeholder={'Number'}
      />
      <Row>
        <Row style={{ flex: 1 }}>
          <TextField
            autoCompleteType={'cc-exp-month'}
            style={{ marginBottom: 16, marginRight: 16 }}
            placeholder={'MO'}
            value={expMonth}
            onChangeText={setExpMonth}
          />
          <TextField
            autoCompleteType={'cc-exp-year'}
            style={styles.MarginBottom}
            placeholder={'YEAR'}
            value={expYear}
            onChangeText={setExpYear}
          />
        </Row>
        <TextField
          autoCompleteType={'cc-csc'}
          style={styles.MarginBottom}
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

const useStyles = makeStyles(theme => ({
  MarginBottom: { marginBottom: theme.padding },
}));

export default AddPaymentMethod;
