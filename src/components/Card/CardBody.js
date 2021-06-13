import React, { forwardRef } from 'react';
import { View } from 'react-native';

const CardBody = (props) => (
  <View style={{ paddingTop: 0, padding: 8, width: '100%' }} {...props} />
);

export default CardBody;
