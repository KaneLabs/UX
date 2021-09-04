import * as React from 'react';
// import { TouchableWithoutFeedback } from 'react-native';
import Paper, { PaperProps } from '../Paper';

interface CardProps extends PaperProps {
    active?: boolean;
}

const Card: React.FC<CardProps> = ({ ...props }, ref) => (
  <Paper {...props} />
);

export default Card;
