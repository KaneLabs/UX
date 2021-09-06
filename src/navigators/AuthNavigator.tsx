import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthPhone from '@kanelabs/ux/screens/AuthPhone';
import AuthPhoneVerify from '@kanelabs/ux/screens/AuthPhoneVerify';
import CountryCodeScreen from '@kanelabs/ux/screens/CountryCodeScreen';

import { useTheme } from '@kanelabs/ux/theme';

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
      <Auth.Screen
        options={{
          title: 'Phone Login',
        }}
        name="AuthPhone"
        component={AuthPhone}
      />
      <Auth.Screen
        options={{
          title: 'Verification Code',
        }}
        name="AuthPhoneVerify"
        component={AuthPhoneVerify}
      />
      <Auth.Screen
        options={{
          title: 'Country Code',
        }}
        name="CountryCode"
        component={CountryCodeScreen}
      />
    </Auth.Navigator>
  );
};

export default AuthStack;
