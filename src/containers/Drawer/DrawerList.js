import React from 'react';
import { View, Platform } from 'react-native';
import { ListItem, ListItemIcon, ListItemText } from '@kanelabs/ux/components';

const PersonaListItem = ({ onPress }) => (
  <ListItem onPress={onPress}>
    <ListItemIcon name="ios-person" />
    <ListItemText text="Persona" />
  </ListItem>
);

export const DrawerList = ({ navigation, account }) => {
  const navigateToProfile = () => navigation.navigate('Persona', account);

  return (
    <View style={{ flex: 1 }}>
      {Platform.OS !== 'web' && <PersonaListItem onPress={navigateToProfile} />}
    </View>
  );
};

export default DrawerList;
