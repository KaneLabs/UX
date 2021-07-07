import React, { FC } from 'react';
import { Image, ImageStyle, StyleSheet } from 'react-native';
import { makeStyles } from 'eros-ui/theme';
import ForaLogoTyrion from '../../assets/fora-logo-tyrion-96x96.png';

type theme = {
  unit: number;
};

interface LogoStyles {
  height: number;
  width: number
}
interface ForaLogoStyles {
  logo: LogoStyles
}

const useStyles = makeStyles((theme: theme): ForaLogoStyles => ({
  logo: {
    height: theme.unit * 3,
    width: theme.unit * 3,
  },
}));

interface ForaLogoProps {
  style?: ImageStyle;
}

const ForaLogo: FC<ForaLogoProps> = props => {
  const styles = useStyles();
  const style = StyleSheet.compose(styles.logo, props?.style);
  return <Image style={style} source={ForaLogoTyrion} {...props} />;
};

export default ForaLogo;
