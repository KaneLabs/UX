import * as React from 'react';
import { View, AsyncStorage, TextInput } from 'react-native';
import Container from 'eros-ui/components/Container';
import TextField from 'eros-ui/components/TextField';
import Button from 'eros-ui/components/Button';
import { AUTH_PHONE_VERIFY, ME } from 'eros-ui/queries/Auth';
import { useMutation, useQuery } from '@apollo/client';
// import { useNavigation } from '@react-navigation/native';

type AuthenticatedUser = {
  token: string;
};

interface AuthPhoneVerifyProps {
  onSuccess: (arg0: AuthenticatedUser) => void;
}

const AuthPhoneVerify: React.FC<AuthPhoneVerifyProps> = ({ onSuccess }) => {
  // // const navigation = useNavigation();
  const [code, setCode] = React.useState('');
  const inputRef = React.useRef<TextInput>(null);

  const { refetch, data } = useQuery(ME);
  const [verifyCode, verifyCodeData] = useMutation(AUTH_PHONE_VERIFY);

  React.useEffect(() => {
    // reset state
    inputRef?.current?.focus();

    return () => setCode('');
  }, [])

  const submitCode = React.useCallback(async () => {
    console.log({ data });
    const phone = await AsyncStorage.getItem('phone');
    const input = { phone, code };
    const response = await verifyCode({ variables: { input } });
    const token = response?.data?.AuthPhoneVerify?.token;
    console.log({ token });
    if (token) {
      await AsyncStorage.setItem('token', token);
      onSuccess && onSuccess(response.data.AuthPhoneVerify);
      // navigation.navigate('Map');
    }
  }, [code, verifyCode, onSuccess, refetch, data]);

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

export default AuthPhoneVerify;
