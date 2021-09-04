import * as React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { makeStyles, Theme } from '@kanelabs/ux/theme';
import Menu from '../Menu';
import Typography from '../Typography';
import countries, { Country } from './country-data';

export interface CountryCodeMenuProps {
  setCountryCode: (country: Country) => void;
  open: () => void;
  close: () => void;
}

const CountryCodeMenu: React.FC<CountryCodeMenuProps> = ({
  setCountryCode,
  close,
}) => {
  const styles = useStyles();
  return (
    <Menu visible onBackdropPress={close} style={styles.menu}>
      {countries.map((country: Country) => (
        <TouchableWithoutFeedback
          key={country.key}
          onPress={() => setCountryCode(country)}>
          <View style={styles.row}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                paddingRight: 4,
              }}>
              <Typography style={styles.text}>{`${country.emoji}`}</Typography>
            </View>
            <View style={{ flex: 1 }}>
              <Typography
                style={[
                  styles.text,
                  { paddingLeft: 12 },
                ]}>{`${country.name}`}</Typography>
            </View>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </Menu>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
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

export default CountryCodeMenu;
