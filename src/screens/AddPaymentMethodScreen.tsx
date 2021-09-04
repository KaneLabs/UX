import * as React from 'react';
import Screen from '@kanelabs/ux/components/Screen';
import AddPaymentMethod from '@kanelabs/ux/containers/Payments/AddPaymentMethod';
import { SafeAreaView } from 'react-native';

const AddPaymentMethodScreen: React.FC = () => {
  return (
    <Screen safe padNav padded>
      <AddPaymentMethod hideTitle />
    </Screen>
  );
};

export default AddPaymentMethodScreen;
