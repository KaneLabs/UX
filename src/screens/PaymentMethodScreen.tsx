import * as React from 'react';
import PaymentMethodsList from '@kanelabs/ui/Payments/PaymentMethodsList';
import Screen from '@kanelabs/ux/components/Screen';
import Loading from '@kanelabs/ux/components/Loading';

import Button from '@kanelabs/ui/Button';

import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@apollo/client';
import { STRIPE_CARDS } from '@kanelabs/ux/queries/Pay';
import { useFocusEffect } from '@react-navigation/native';

import ScreenNames from './ScreenNames';

const PaymentMethodScreen: React.FC = () => {
  const navigation = useNavigation();
  const { data, error, loading, refetch, called } = useQuery(STRIPE_CARDS, {
    fetchPolicy: 'cache-and-network',
    notifyOnNetworkStatusChange: true,
  });

  useFocusEffect(
    React.useCallback(() => {
      refetch();
    }, []),
  );

  return (
    <Screen safe padNav>
      <PaymentMethodsList cards={data?.StripeCards ?? []} />

      <Loading animating={loading} />
      <Button
        text="ADD CARD"
        onPress={() => navigation.navigate(ScreenNames.AddPaymentMethodScreen)}
      />
    </Screen>
  );
};

export default PaymentMethodScreen;
