import * as React from 'react';
import PaymentMethodsList from 'eros-ui/containers/Payments/PaymentMethodsList';
import Screen from 'eros-ui/components/Screen';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from './ScreenNames';

const PaymentMethodsScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Screen>
        <PaymentMethodsList onAddCardPress={() => navigation.navigate(ScreenNames.AddPaymentMethodScreen)} />
    </Screen>
  );
};

export default PaymentMethodsScreen;
