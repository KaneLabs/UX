import React from 'react';
import { Title } from 'eros-ui/components';
import { makeStyles, unit } from 'eros-ui/theme';

const useStyles = makeStyles(() => ({
  title: { fontSize: 28, lineHeight: 32, paddingRight: unit * 2 },
}));

export const PersonaTitle = ({ text, mobile }) => {
  const styles = useStyles();
  const paddingBottom = mobile ? unit / 2 : unit;
  return <Title text={text} type={4} style={[styles.title, { paddingBottom }]} />;
};

export default PersonaTitle;
