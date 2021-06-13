import React from 'react';
import { Button } from 'eros-ui/components';
import { useNavigation } from '@react-navigation/native';

const EditButton = (props) => {
  const navigation = useNavigation();
  const onPress = () => navigation.navigate('Snap');
  return <Button text="EDIT" onPress={onPress} {...props} />;
};

export default EditButton;
