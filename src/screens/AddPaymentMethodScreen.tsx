import * as React from 'react';
import Screen from '@kanelabs/ux/components/Screen';
import AddPaymentMethod from '@kanelabs/ux/containers/Payments/AddPaymentMethod';

const AddPaymentMethodScreen: React.FC = () => {
  return (
    <Screen safe padNav>
      <AddPaymentMethod hideTitle />
    </Screen>
  );
};

export default AddPaymentMethodScreen;
