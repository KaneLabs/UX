import * as React from 'react';
import { View, AsyncStorage, TextInput } from 'react-native';
import Container from '@kanelabs/ux/components/Container';
import TextField from '@kanelabs/ux/components/TextField';
import Button from '@kanelabs/ux/components/Button';
import { AUTH_PHONE_VERIFY, ME } from '@kanelabs/ux/queries/Auth';
import { useMutation, useQuery } from '@apollo/client';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

type AuthenticatedUser = {
  token: string;
};

interface AuthenticatePhoneProps {
  onSuccess: (arg0: AuthenticatedUser) => void;
}

const AuthenticatePhone = ({ onSuccess }: AuthenticatePhoneProps) => {
  const navigation = useNavigation();
  const [code, setCode] = React.useState('');
  const inputRef = React.useRef<TextInput>(null);

  const { refetch, data, client } = useQuery(ME);
  const [verifyCode, verifyCodeData] = useMutation(AUTH_PHONE_VERIFY);

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      // reset state
      inputRef?.current?.focus();
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        setCode('');
      };
    }, [refetch]),
  );

  const submitCode = React.useCallback(async () => {
    console.log({ data });
    const phone = await AsyncStorage.getItem('phone');
    const input = { phone, code };
    const response = await verifyCode({ variables: { input } });
    const token = response?.data?.AuthPhoneVerify?.token;
    console.log({ token });
    if (token) {
      await AsyncStorage.setItem('token', token);
      await client.resetStore();
      onSuccess && onSuccess(response.data.AuthPhoneVerify);
      navigation.navigate('Map');
    }
  }, [code, verifyCode, onSuccess, navigation, refetch]);

  return (
    <Container
      center
      style={{
        marginVertical: 80,
      }}>
      <View style={{ flex: 1, alignSelf: 'center', padding: 40 }}>
        <TextField
          ref={inputRef}
          textContentType={'oneTimeCode'}
          keyboardType={'phone-pad'}
          value={code}
          onChangeText={setCode}
          placeholder={'Enter Code'}
        />
        <Button onPress={submitCode} text="Submit" />
      </View>
    </Container>
  );
};

export default AuthenticatePhone;
