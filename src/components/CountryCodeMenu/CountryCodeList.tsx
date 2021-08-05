import * as React from 'react';
import { makeStyles, Theme } from 'eros-ui/theme';
import List, { ListItem, ListItemText } from '../List';
import countries, { Country, selectWhitelistedCountries } from './country-data';

export interface CountryCodeListProps {
  onCountryPress?: (country: Country) => void;
  open?: () => void;
  close?: () => void;
  allowed?: string[];
}

const CountryCodeList: React.FC<CountryCodeListProps> = ({
  onCountryPress,
  close,
  allowed,
}) => {
  const styles = useStyles();
  const allowedCountries = React.useMemo(() => {
    if (allowed?.length) {
      return selectWhitelistedCountries(allowed);
    }
    return countries;
  }, [allowed?.length]);

  return (
    <List style={{ width: '100%' }}>
      {allowedCountries.map((country: Country) => (
        <ListItem
          style={{ width: '100%', justifyContent: 'space-between' }}
          key={country.key}
          onPress={() => onCountryPress && onCountryPress(country)}>
          <ListItemText
            style={{
              fontSize: 20,
            }}>{`  ${country.emoji}   ${country.name}`}</ListItemText>
          <ListItemText
            style={{
              width: 60,
              fontSize: 16,
            }}>{`+ ${country.phone}`}</ListItemText>
        </ListItem>
      ))}
    </List>
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

export default CountryCodeList;
