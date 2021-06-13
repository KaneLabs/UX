import React from 'react';
import { SafeAreaView } from 'react-native';
import DrawerContent from './DrawerContent';

export const Drawer = ({ navigation }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <DrawerContent navigation={navigation} />
  </SafeAreaView>
);

export default Drawer;
