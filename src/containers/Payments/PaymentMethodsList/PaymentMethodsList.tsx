import * as React from 'react';
import List, {
  ListItem,
  ListItemText,
  ListHeader,
  ListSubtitle,
  ListItemIcon,
} from '@kanelabs/ux/components/List';

import PaymentMethodsList from '@kanelabs/ui/Payments/PaymentMethodsList';

import CardListItem from '@kanelabs/ui/Payments/CardListItem';

import { useQuery } from '@apollo/client';
import { STRIPE_CARDS } from '@kanelabs/ux/queries/Pay';

import { useFocusEffect } from '@react-navigation/native';

export type Card = {
  id: string;
  brand: string;
  last4: string;
  expMonth: number;
  expYear: number;
  funding: string;
  default: boolean;
};
export interface PaymentMethodsListContainerProps {
  onPress?: (arg0: Card) => void;
  onAddCardPress?: () => void;
  selectedCardId?: string;
  onCardsLoaded?: (cards: Card[]) => void;
  onDefaultLoaded?: (card: Card) => void;
}

const PaymentMethodsListContainer: React.FC<PaymentMethodsListContainerProps> =
  ({ onPress, selectedCardId, onCardsLoaded, onDefaultLoaded }) => {
    const { data, error, loading, refetch, called } = useQuery(STRIPE_CARDS, {
      notifyOnNetworkStatusChange: true,
      fetchPolicy: 'cache-and-network',
    });

    React.useEffect(() => {
      refetch();
    }, []);

    React.useEffect(() => {
      if (data?.StripeCards) {
        const selectDefaultCard = (cards: Card[]) =>
          cards.find(card => card.default);
        const defaultCard = selectDefaultCard(data?.StripeCards);
        if (defaultCard) {
          onDefaultLoaded && onDefaultLoaded(defaultCard);
        }
        onCardsLoaded && onCardsLoaded(data.StripeCards);
      }
    }, [data]);

    return (
      <PaymentMethodsList
        cards={data?.StripeCards ?? []}
        loading={loading}
        error={error}
        onPress={onPress}
        focusedCardId={selectedCardId}
      />
    );
  };

export default PaymentMethodsListContainer;
