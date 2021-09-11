import * as React from 'react';
import List, { ListHeader, ListSubtitle } from '@kanelabs/ux/components/List';
import { ApolloError } from '@apollo/client';

import CardListItem from '@kanelabs/ui/Payments/CardListItem';

export type Card = {
  id: string;
  brand: string;
  last4: string;
  expMonth: number;
  expYear: number;
  funding: string;
  default: boolean;
};
export interface PaymentMethodsListProps {
  onPress?: (arg0: Card) => void;
  cards: Card[];
  focusedCardId?: string;
  loading?: boolean;
  error?: ApolloError;
}

const PaymentMethodsList: React.FC<PaymentMethodsListProps> = ({
  cards,
  onPress,
  focusedCardId,
  loading,
  error,
}) => {
  return (
    <List>
      <ListHeader>
        {loading && <ListSubtitle text="loading..." />}
        {error?.graphQLErrors.map(GraphQLError => {
          return <ListSubtitle text={GraphQLError.message} />;
        })}
      </ListHeader>

      {cards.map((card: Card) => {
        return (
          <CardListItem
            focused={
              focusedCardId === card.id || (card.default && !focusedCardId)
            }
            onPress={card => onPress && onPress(card)}
            card={card}
            key={card.id}
          />
        );
      })}
    </List>
  );
};

export default PaymentMethodsList;
