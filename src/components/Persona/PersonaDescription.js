import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Subtitle, Row } from 'eros-ui/components';
import { makeStyles } from 'eros-ui/theme';
import PersonaTitle from './PersonaTitle';
import PersonaSubtitle from './PersonaSubtitle';

export const Followers = ({ followers, style = null }) => {
  const styles = makeStyles();
  return (
    <Row style={style} center>
      <Subtitle text={`${followers}`} style={{ fontWeight: '600' }} />
      <Subtitle text=" Followers" />
    </Row>
  );
};

export const PersonaDescription = ({ display, handle, mobile }) => {
  const styles = makeStyles();
  return (
    <View style={[styles.description]}>
      <PersonaTitle text={display} mobile={mobile} />
      <PersonaSubtitle text={`@${handle}`} mobile={mobile} />
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  description: {
    flex: 2,
  },
  accountDesc: {
    paddingBottom: 12,
  },
}));

export default PersonaDescription;
