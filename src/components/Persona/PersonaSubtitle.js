import React from 'react';
import { Subtitle } from 'eros-ui/components';
import { makeStyles } from 'eros-ui/theme';

export const PersonaSubtitle = ({ text, mobile, ...rest }) => {
  const styles = useStyles();
  return (
    <Subtitle
      text={text}
      style={mobile ? styles.mobile : styles.desktop}
      {...rest}
    />
  );
};

const useStyles = makeStyles((theme) => ({
  mobile: { paddingRight: theme.unit * 2, paddingBottom: theme.unit / 2 },
  desktop: { paddingRight: theme.unit * 2, paddingBottom: theme.unit * 2.5 },
}));

export default PersonaSubtitle;
