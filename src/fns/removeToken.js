import { AsyncStorage, Platform } from 'react-native';
import Cookies from 'js-cookie';

export const removeToken = async () => {
  try {
    if (Platform.OS === 'web') {
      Cookies.remove('token');
    }
    return AsyncStorage.removeItem('token');
  } catch (e) {
    return null;
  }
};
