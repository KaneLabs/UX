import * as React from 'react';
import {
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@kanelabs/ux/components/List';

export type Card = {
  id: string;
  brand: string;
  last4: string;
  expMonth: number;
  expYear: number;
  funding: string;
  default: boolean;
};

export interface CardListItemProps {
  onPress?: (arg0: Card) => void;
  card: Card;
  focused?: boolean;
}

export const mapBrandToIconComponent = (brand: string): JSX.Element => {
  switch (brand.toUpperCase()) {
    case 'VISA':
      return (
        <ListItemIcon iconProps={{ family: 'FontAwesome' }} name={'cc-visa'} />
      );
    default:
      return (
        <ListItemIcon
          iconProps={{ family: 'FontAwesome' }}
          name={'credit-card'}
        />
      );
  }
};

const CardListItem: React.FC<CardListItemProps> = ({
  onPress,
  card,
  focused,
  ...rest
}) => {
  // const userHasNoCards = !loading && !error && data?.StripeCards.length === 0;
  return (
    <ListItem
      style={{ justifyContent: 'center' }}
      focused={focused}
      onPress={() => onPress && onPress(card)}
      key={card.id}
      {...rest}>
      {mapBrandToIconComponent(card.brand)}
      <ListItemText
        style={{ flex: 1, paddingHorizontal: 24 }}
        text={card.last4}
      />
      {card.default && <ListItemText text={`Default`} />}
    </ListItem>
  );
};

export default CardListItem;
