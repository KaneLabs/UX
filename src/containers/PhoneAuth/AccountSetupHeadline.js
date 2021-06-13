import React from 'react';
import { View } from 'react-native';
import { Title, BodyText } from 'eros-ui/components';
import { makeStyles } from 'eros-ui/theme';

export const AccountSetupHeadline = ({ last12 }) => (
  <View style={styles.headline} testID="AccountSetupHeadline">
    <Title type={5} text="Claim Your Name" gutter />
    <BodyText
      text={`Welcome NPC ${last12}. You have been assigned a unique ID and are therefore very special. However, we recommend a more lifelike persona to expand your reach on Fora.`}
    />
  </View>
);

const useStyles = makeStyles((theme) => ({
  headline: {
    width: '100%',
    alignItems: 'center',
    marginBottom: theme.gutter,
  },
}));

export default AccountSetupHeadline;
