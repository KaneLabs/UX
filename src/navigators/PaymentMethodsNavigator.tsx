import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PaymentMethodsScreen from '@kanelabs/ux/screens/PaymentMethodsScreen';
import AddPaymentMethodScreen from '@kanelabs/ux/screens/AddPaymentMethodScreen';

import { useTheme } from '@kanelabs/ux/theme';

const PaymentMethods = createStackNavigator();

interface PaymentMethodsNavigatorProps {}

const PaymentMethodsNavigator: React.FC<PaymentMethodsNavigatorProps> = () => {
  const [theme] = useTheme();
  return (
    <PaymentMethods.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTintColor: theme.textColor.secondary,
        cardStyle: { backgroundColor: theme.backgroundColor },
      }}>
      <PaymentMethods.Screen
        options={{
          title: 'Payment Methods',
        }}
        name="PaymentMethodsScreen"
        component={PaymentMethodsScreen}
      />
      <PaymentMethods.Screen
        options={{
          title: 'Add Payment Method',
        }}
        name="AddPaymentMethodScreen"
        component={AddPaymentMethodScreen}
      />
    </PaymentMethods.Navigator>
  );
};

export default PaymentMethodsNavigator;
