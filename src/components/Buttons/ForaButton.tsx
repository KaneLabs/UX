import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import ForaLogoWhite from '../../assets/fora-logo-white-160x160.png';

export const ForaButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.foraButton}>
    <Image source={ForaLogoWhite} style={styles.foraButtonLogo} />
  </TouchableOpacity>
);

const styles = {
  foraButton: {
    paddingLeft: 4,
    paddingBottom: 0,
    paddingTop: 8,
    paddingRight: 8,
  },
  foraButtonLogo: { height: 32, width: 32 },
};
