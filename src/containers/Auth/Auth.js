import React, { useState } from 'react';
import { SafeAreaView, ImageBackground, Platform } from 'react-native';
import { ME, ACCOUNT, SET_ACCOUNT } from 'eros-ui/queries';
import { useQuery, useMutation } from '@apollo/client';
import { useDimensions } from 'eros-ui/state';
import { FEED_WIDTH, makeStyles } from 'eros-ui/theme';
import KeyboardAwareContainer from '../../components/KeyboardAwareContainer';
import AuthPhoneOrEmail from './AuthPhoneOrEmail';
import AuthSignup from './AuthSignup';
import AuthVerifyPhone from './AuthVerifyPhone';

// import PhoneAuthClaimHandle from './PhoneAuthClaimHandle';

import SaintGeorge from '../../assets/Saint_George-1080x1920.jpg';

const Auth = ({ onSuccess, handle = null }) => {
  // const client = useApolloClient();

  const meQuery = useQuery(ME);
  console.log('meQuery', meQuery);
  const { data: accountData } = useQuery(ACCOUNT);
  const [setAccount] = useMutation(SET_ACCOUNT);
  const account = accountData && accountData.account;
  const styles = useStyles();

  const [stepIndex, setStepIndex] = useState(0);
  const { width, height } = useDimensions();

  const onNext = () => setStepIndex((last) => last + 1);
  const onBack = () => setStepIndex((last) => last - 1);

  const onVerifySuccess = (account) => {
    onSuccess(account);
  };

  const onAccountSetupSuccess = async (account) => {
    console.log('onAccountSetupSuccess', { account });
    await setAccount({ variables: account });
    return onSuccess(account);
  };

  const onSignupSuccess = async (account) => {
    if (response === 'We sent you a code.') {
      setStepIndex(2);
    }
  };

  const handlePhoneOrEmail = (response) => {
    console.log(response === 'We sent you a code.');
    if (response === 'We sent you a code.') {
      setStepIndex(2);
    }
  };

  const _renderStep = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <AuthPhoneOrEmail onSuccess={handlePhoneOrEmail} />;
      case 1:
        return <AuthSignup onBack={onBack} onSuccess={onSignupSuccess} />;
      case 2:
        return <AuthVerifyPhone onSuccess={onVerifySuccess} />;
      default:
        return null;
    }
  };

  const sizeStyles = Platform.select({
    web: { width: '100%', maxWidth: FEED_WIDTH, height: '100%' },
    default: { width, height },
  });

  return (
    <ImageBackground
      source={SaintGeorge}
      style={[styles.imageBackground, sizeStyles]}>
      <SafeAreaView style={styles.safeAreaView}>
        <KeyboardAwareContainer style={styles.container}>
          {_renderStep(stepIndex)}
        </KeyboardAwareContainer>
      </SafeAreaView>
    </ImageBackground>
  );
};

const useStyles = makeStyles((theme) => ({
  blurredBackground: {
    flex: 1,
    backdropFilter: `blur(${theme.unit * 1}px)`,
    paddingVertical: theme.unit * 3.5,
    paddingHorizontal: theme.unit * 3.5,
    backgroundColor: 'rgba(0,0,0,0.8)',
    alignItems: 'center',
  },
  imageBackground: {
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.85)',
  },
  container: {
    flex: 1,
    maxWidth: theme.FEED_WIDTH,
    maxHeight: theme.FEED_WIDTH * (16 / 9),
    paddingVertical: theme.unit * 3.5,
    paddingHorizontal: theme.unit * 3.5,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: { width: '100%' },
}));

export default Auth;
