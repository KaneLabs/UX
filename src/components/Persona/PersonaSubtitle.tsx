import React from 'react';
import Typography, {
  TypographyTypes,
} from '@kanelabs/ux/components/Typography';
import { makeStyles } from '@kanelabs/ux/theme';

const PersonaSubtitle: React.FC<{ text: string }> = ({ text, ...rest }) => {
  const styles = useStyles();
  return (
    <Typography
      text={text}
      type={TypographyTypes.subtitle1}
      style={styles.PersonaSubtitle}
      {...rest}
    />
  );
};

const useStyles = makeStyles((theme) => ({
  PersonaSubtitle: {paddingRight: theme.unit * 2, paddingBottom: theme.unit },
}));

export default PersonaSubtitle;
