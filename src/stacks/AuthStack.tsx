import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthPhone from 'eros-ui/screens/AuthPhone';
import AuthPhoneVerify from 'eros-ui/screens/AuthPhoneVerify';
import CountryCodeScreen from 'eros-ui/screens/CountryCodeScreen';

import { useTheme } from 'eros-ui/theme';

const Auth = createStackNavigator();

interface AuthStackProps {
  heroUrl?: string;
}

const AuthStack: React.FC<AuthStackProps> = ({ heroUrl }) => {
  const [theme] = useTheme();
  return (
    <Auth.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTintColor: theme.textColor.secondary,
        cardStyle: { backgroundColor: theme.backgroundColor },
      }}>
      <Auth.Screen name="AuthPhone" component={AuthPhone} />
      <Auth.Screen name="AuthPhoneVerify" component={AuthPhoneVerify} />
      <Auth.Screen name="CountryCode" component={CountryCodeScreen} />
    </Auth.Navigator>
  );
};

export default AuthStack;
