import React from 'react';
import { Image } from 'react-native';
import { makeStyles } from 'eros-ui/theme';
import ForaLogoTyrion from '../../assets/fora-logo-tyrion-96x96.png';

const useStyles = makeStyles((theme) => ({
  logo: {
    height: theme.unit * 3,
    width: theme.unit * 3,
  },
}));

const ForaLogo = ({ style = {}, ...props }) => {
  const styles = useStyles();
  return (
    <Image style={[styles.logo, style]} source={ForaLogoTyrion} {...props} />
  );
};

export default ForaLogo;
