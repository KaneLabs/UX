import * as React from 'react';
import Typography from 'eros-ui/components/Typography';
import List, { ListItem, ListItemText, ListSubtitle } from 'eros-ui/components/List';

import { useQuery } from '@apollo/client';
import { STRIPE_CARDS } from 'eros-ui/queries/Pay';

export type Card = {
  id: string;
  brand: string;
  last4: string;
  expMonth: number;
  expYear: number;
  funding: string;
}
export interface PaymentMethodsListProps {
    onPress?: (arg0: Card) => void;
    onAddCardPress?: () => void;
}

const PaymentMethodsList: React.FC<PaymentMethodsListProps> = ({ onPress, onAddCardPress }) => {
const { data, error, loading } = useQuery(STRIPE_CARDS);

  const userHasNoCards = !loading && !error && data?.StripeCards.length === 0;
  return (
    <List>
        <ListSubtitle text={'Payment Methods'} />
        {loading &&  <ListSubtitle text="loading..." />}
        {error?.graphQLErrors.map((GraphQLError => {
          return <ListSubtitle text={GraphQLError.message} />
        }))}

        {data?.StripeCards.map((card: Card) => {
            return (
                <ListItem onPress={() => onPress && onPress(card)} key={card.id}>
                    <ListItemText text={card.last4} />
                </ListItem>
            );
        })}

        <ListItem onPress={onAddCardPress} key={'ADD_CARD'}>
                    <ListItemText text="ADD CARD" />
                </ListItem>
    </List>
  );
};

export default PaymentMethodsList;
