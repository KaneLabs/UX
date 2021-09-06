import React, { FC } from 'react';
import { Image, ImageStyle, StyleSheet } from 'react-native';
import makeStyles from '../../theme/makeStyles';
import { Theme } from '../../theme';
import ForaLogoTyrion from '../../assets/fora-logo-tyrion-96x96.png';

export interface ForaLogoStyles {
  logo: LogoStyles;
}

export interface LogoStyles {
  height: number;
  width: number;
}

const useStyles = makeStyles(
  (theme: Theme): ForaLogoStyles => ({
    logo: {
      height: theme.unit * 3,
      width: theme.unit * 3,
    },
  }),
);

export interface ForaLogoProps {
  style?: ImageStyle;
}

const ForaLogo: FC<ForaLogoProps> = (props) => {
  const styles = useStyles();
  const style = StyleSheet.compose(styles.logo, props?.style);
  return <Image style={style} source={ForaLogoTyrion} {...props} />;
};

export default ForaLogo;
