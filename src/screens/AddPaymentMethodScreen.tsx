import * as React from 'react';
import Screen from 'eros-ui/components/Screen';
import AddPaymentMethod from 'eros-ui/containers/Payments/AddPaymentMethod';
import { SafeAreaView } from 'react-native';

const AddPaymentMethodScreen: React.FC = () => {
  return (
    <Screen>
      <SafeAreaView style={{ flex: 1 }}>
        <AddPaymentMethod />
      </SafeAreaView>
    </Screen>
  );
};

export default AddPaymentMethodScreen;
