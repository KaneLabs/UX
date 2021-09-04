import React from 'react';
import { View } from 'react-native';
import { makeStyles } from '@kanelabs/ux/theme';
import PersonaTitle from './PersonaTitle';
import PersonaSubtitle from './PersonaSubtitle';

export const PersonaDescription: React.FC<{ display: string, handle: string, }> = ({ display, handle }) => {
  const styles = useStyles();
  return (
    <View style={[styles.description]}>
      <PersonaTitle text={display} />
      <PersonaSubtitle text={`@${handle}`} />
    </View>
  );
};

const useStyles = makeStyles(() => ({
  description: {
    flex: 2,
  },
  accountDesc: {
    paddingBottom: 12,
  },
}));

export default PersonaDescription;
