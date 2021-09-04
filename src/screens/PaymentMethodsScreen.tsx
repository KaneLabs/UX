import * as React from 'react';
import PaymentMethodsList from '@kanelabs/ux/containers/Payments/PaymentMethodsList';
import Screen from '@kanelabs/ux/components/Screen';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from './ScreenNames';

const PaymentMethodsScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Screen safe padNav>
      <PaymentMethodsList
        onAddCardPress={() =>
          navigation.navigate(ScreenNames.AddPaymentMethodScreen)
        }
      />
    </Screen>
  );
};

export default PaymentMethodsScreen;
