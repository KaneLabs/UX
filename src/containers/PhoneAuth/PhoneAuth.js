import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ImageBackground,
  Platform,
  StyleSheet,
} from 'react-native';
import { Title, View, KeyboardAwareContainer } from '@kanelabs/ux/components';
import { ACCOUNT, SET_ACCOUNT } from '@kanelabs/ux/queries';
import { useQuery, useMutation } from '@apollo/client';
import { useDimensions } from '@kanelabs/ux/state';
import { useTheme, makeStyles } from '@kanelabs/ux/theme';
import PhoneAuthSet from './PhoneAuthSet';
import PhoneAuthVerify from './PhoneAuthVerify';
// import SetProfilePic from './SetProfilePic';
import PhoneAuthClaimHandle from './PhoneAuthClaimHandle';

import SaintGeorge from '../../assets/Saint_George-1080x1920.jpg';

export const PhoneAuth = ({ onSuccess, handle = null }) => {
  const { data: accountData } = useQuery(ACCOUNT);
  console.log('accountData', accountData);
  const [setAccount] = useMutation(SET_ACCOUNT);
  const account = accountData && accountData.account;

  const [stepIndex, setStepIndex] = useState(0);
  const { width, height } = useDimensions();

  const onNext = () => setStepIndex((last) => last + 1);
  const onBack = () => setStepIndex((last) => last - 1);

  const onVerifySuccess = async (account) => {
    await setAccount({ variables: account });
    const hasAHandle = account && account.handle;
    if (hasAHandle) {
      return onSuccess(account);
    }
    return onNext();
  };

  const onAccountSetupSuccess = async (account) => {
    console.log('onAccountSetupSuccess', { account });
    await setAccount({ variables: account });
    return onSuccess(account);
  };

  const onClaimNameSuccess = async (account) => {
    console.log('onClaimNameSuccess', { account });
    await setAccount({ variables: account });
    onNext();
  };

  const _renderStep = (stepIndex) => {
    switch (stepIndex) {
      // case 0:
      //   return <PhoneAuthSet onSuccess={onNext} />;
      // case 1:
      //   return <PhoneAuthVerify onBack={onBack} onSuccess={onVerifySuccess} />;
      // case 2:
      //   return <PhoneAuthClaimHandle onSuccess={onClaimNameSuccess} />;
      // case 3:
      //   return <SetProfilePic onSuccess={onAccountSetupSuccess} />;
      default:
        return null;
    }
  };

  const styles = useStyles();
  const [{ FEED_WIDTH, unit }] = useTheme();

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
          {handle && (
            <View style={styles.titleContainer}>
              <Title type={5} text={`@${handle} Is Available`} gutter />
            </View>
          )}
          <PhoneAuthClaimHandle onSuccess={onClaimNameSuccess} />
          {/* <PhoneAuthSet onSuccess={onNext} /> */}
          {/* {_renderStep(stepIndex)} */}
        </KeyboardAwareContainer>
      </SafeAreaView>
    </ImageBackground>
  );
};

const useStyles = makeStyles((theme) => ({
  blurredBackground: {
    flex: 1,
    // backdropFilter: `blur(${unit * 2}px)`,
    backgroundColor: 'rgba(0,0,0,0.8)',
    alignItems: 'center',
  },
  imageBackground: { flex: 1 },
  safeAreaView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.85)',
  },
  container: {
    flex: 1,
    maxWidth: theme.FEED_WIDTH,
    paddingVertical: theme.NAV_HEIGHT + theme.unit * 2,
    paddingHorizontal: theme.unit * 2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: { width: '100%' },
}));

export default PhoneAuth;
