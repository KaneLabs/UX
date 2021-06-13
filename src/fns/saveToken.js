import { AsyncStorage, Platform } from 'react-native';
import Cookies from 'js-cookie';

export const saveToken = async (token) => {
  console.log(Platform.OS);
  if (Platform.OS === 'web') {
    Cookies.set('token', token);
  }
  return AsyncStorage.setItem('token', token);
};
