import React, { useState } from 'react';
import { makeStyles } from 'eros-ui/theme';
import { CountryCodeMenu } from 'eros-ui/components';

const INITIAL_STATE = {
  phoneId: 0,
  countryCode: '1',
  emoji: '🇺🇸',
  number: '',
  verificationCode: '',
  status: 'NOT_VERIFIED',
  countryCodeMenuOpen: false,
};

export const PhoneAuthCountryCode = ({ onSuccess, handle }) => {
  const [state, setState] = useState('1');

  return (
    <CountryCodeMenu
      setCountryCode={(countryCode) => {
        setState(countryCode);
      }}
      close={() => setState('1')}
    />
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 540,
    paddingHorizontal: theme.unit * 2.5,
    paddingVertical: theme.unit * 3.5,
    width: '100%',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  content: {
    flex: 1,
  },
  textField: {
    fontSize: 22,
    lineHeight: 28,
    alignItems: 'center',
  },
  textFieldContainer: {
    width: '100%',
    flex: 1,
  },
}));
