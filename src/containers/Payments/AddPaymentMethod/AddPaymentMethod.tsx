import * as React from 'react';
import Typography from '@kanelabs/ux/components/Typography';
import TextField from '@kanelabs/ux/components/TextField';
import Button from '@kanelabs/ux/components/Button';
import Container from '@kanelabs/ux/components/Container';
import Row from '@kanelabs/ux/components/Layout/Row';
import Loading from '@kanelabs/ui/Loading';
import List, { ListHeader } from '@kanelabs/ui/List';

import { useQuery, useMutation } from '@apollo/client';
import { ME } from '@kanelabs/ux/queries/Auth';
import { CREATE_STRIPE_CARD_TOKEN } from '@kanelabs/ux/queries/Pay';

import { useNavigation } from '@react-navigation/native';
import { TypographyTypes, makeStyles } from '@kanelabs/ux/theme';
import { TextInput } from 'react-native';

const AddPaymentMethod: React.FC<{ hideTitle?: boolean }> = ({
  hideTitle = false,
}) => {
  const navigation = useNavigation();
  const styles = useStyles();
  const [number, setNumber] = React.useState('');
  const [expMonth, setExpMonth] = React.useState('');
  const [expYear, setExpYear] = React.useState('');
  const [cvc, setCvc] = React.useState('');

  const numberRef = React.useRef<TextInput>(null);
  const monthRef = React.useRef<TextInput>(null);
  const yearRef = React.useRef<TextInput>(null);
  const cvcRef = React.useRef<TextInput>(null);

  React.useEffect(() => {
    numberRef?.current?.focus();
  }, []);

  const { data } = useQuery(ME);
  const [createStripeCardToken, { error, loading }] = useMutation(
    CREATE_STRIPE_CARD_TOKEN,
    { onCompleted: () => navigation.goBack() },
  );

  const onSubmit = async () => {
    console.log(number);
    const input = { number, expMonth, expYear, cvc };
    createStripeCardToken({ variables: { input } });
  };

  return (
    <Container style={{ padding: 24 }}>
      {!hideTitle && (
        <Typography type={TypographyTypes.h6} style={styles.MarginBottom}>
          {'Add Payment Method'}
        </Typography>
      )}
      <ListHeader>
        {error?.graphQLErrors.map(GraphQLError => {
          return <Typography text={GraphQLError.message} gutter />;
        })}
      </ListHeader>

      <TextField
        ref={numberRef}
        autoCompleteType={'cc-number'}
        textContentType={'creditCardNumber'}
        returnKeyType="next"
        onSubmitEditing={() => monthRef?.current?.focus()}
        value={number}
        onChangeText={setNumber}
        style={styles.MarginBottom}
        placeholder={'Number'}
      />
      <Row>
        <Row style={{ flex: 1 }}>
          <TextField
            ref={monthRef}
            autoCompleteType={'cc-exp-month'}
            keyboardType={'numbers-and-punctuation'}
            returnKeyType="next"
            onSubmitEditing={() => yearRef?.current?.focus()}
            style={{ marginBottom: 16, marginRight: 16 }}
            placeholder={'MO'}
            value={expMonth}
            onChangeText={setExpMonth}
          />
          <TextField
            ref={yearRef}
            autoCompleteType={'cc-exp-year'}
            keyboardType={'numbers-and-punctuation'}
            returnKeyType="next"
            onSubmitEditing={() => cvcRef?.current?.focus()}
            style={styles.MarginBottom}
            placeholder={'YEAR'}
            value={expYear}
            onChangeText={setExpYear}
          />
        </Row>
        <TextField
          ref={cvcRef}
          autoCompleteType={'cc-csc'}
          keyboardType={'numbers-and-punctuation'}
          returnKeyType="done"
          onSubmitEditing={onSubmit}
          style={styles.MarginBottom}
          placeholder={'CVC'}
          value={cvc}
          onChangeText={setCvc}
        />
      </Row>

      <Loading animating={loading} />
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
