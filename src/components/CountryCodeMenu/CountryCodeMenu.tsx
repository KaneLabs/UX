import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { makeStyles } from 'eros-ui/theme';
import Menu from '../Menu';
import BodyText from '../Typography/BodyText';
import { countryData } from './country-data';

export const CountryCodeMenu = ({ setCountryCode, close }) => {
  const styles = useStyles();

  return (
    <Menu visible onBackdropPress={close} style={styles.menu}>
      {countryData.map((country) => (
        <TouchableWithoutFeedback
          key={country.key}
          onPress={() => setCountryCode(country.phone)}
        >
          <View style={styles.row}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingRight: 4 }}>
              <BodyText style={styles.text}>{`${country.emoji}`}</BodyText>
            </View>
            <View style={{ flex: 1 }}>
              <BodyText style={[styles.text, { paddingLeft: 12 }]}>{`${country.name}`}</BodyText>
            </View>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </Menu>
  );
};

const useStyles = makeStyles((theme) => ({
  menu: {
    width: '100%',
    backgroundColor: theme.canvas,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  text: {
    fontSize: 22,
    lineHeight: 22,
  },
}));
