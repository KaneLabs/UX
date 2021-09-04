import React from 'react';
import Typography, {
  TypographyTypes,
} from '@kanelabs/ux/components/Typography';
import { makeStyles, unit } from '@kanelabs/ux/theme';

const useStyles = makeStyles(() => ({
  title: { fontSize: 28, lineHeight: 32, paddingRight: unit * 2, paddingBottom: unit },
}));

const PersonaTitle: React.FC<{ text: string }> = ({ text }) => {
  const styles = useStyles();
  return (
    <Typography type={TypographyTypes.h4} text={text} style={[styles.title]} />
  );
};

export default PersonaTitle;
