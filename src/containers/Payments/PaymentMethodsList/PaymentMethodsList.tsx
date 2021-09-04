import * as React from 'react';
import List, {
  ListItem,
  ListItemText,
  ListSubtitle,
  ListItemIcon,
} from '@kanelabs/ux/components/List';

import { useQuery } from '@apollo/client';
import { STRIPE_CARDS } from '@kanelabs/ux/queries/Pay';

export type Card = {
  id: string;
  brand: string;
  last4: string;
  expMonth: number;
  expYear: number;
  funding: string;
};
export interface PaymentMethodsListProps {
  onPress?: (arg0: Card) => void;
  onAddCardPress?: () => void;
  selectedCardId?: string;
}

const PaymentMethodsList: React.FC<PaymentMethodsListProps> = ({
  onPress,
  onAddCardPress,
  selectedCardId,
}) => {
  const { data, error, loading } = useQuery(STRIPE_CARDS);
  // const userHasNoCards = !loading && !error && data?.StripeCards.length === 0;
  return (
    <List>
      <ListSubtitle text={'Payment Methods'} />
      {loading && <ListSubtitle text="loading..." />}
      {error?.graphQLErrors.map(GraphQLError => {
        return <ListSubtitle text={GraphQLError.message} />;
      })}

      {data?.StripeCards.map((card: Card) => {
        console.log({ card });
        return (
          <ListItem
            focused={selectedCardId === card.id}
            onPress={() => onPress && onPress(card)}
            key={card.id}>
            {card.brand === 'Visa' && (
              <ListItemIcon
                iconProps={{ family: 'FontAwesome' }}
                name={'cc-visa'}
              />
            )}
            {card.brand !== 'Visa' && (
              <ListItemIcon
                iconProps={{ family: 'FontAwesome' }}
                name={'credit-card'}
              />
            )}
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
