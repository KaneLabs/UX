import * as React from 'react';
import Screen from '@kanelabs/ux/components/Screen';
import ScreenHeader from '@kanelabs/ux/components/Screen/ScreenHeader';

import AddPaymentMethod from '@kanelabs/ux/containers/Payments/AddPaymentMethod';

const AddPaymentMethodScreen: React.FC = () => {
  return (
    <Screen safe padNav>
      <ScreenHeader>
        </ScreenHeader>
      <AddPaymentMethod hideTitle />
    </Screen>
  );
};

export default AddPaymentMethodScreen;
