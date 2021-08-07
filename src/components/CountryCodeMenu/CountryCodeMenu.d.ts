import * as React from 'react';
import { Country } from './country-data';
export interface CountryCodeMenuProps {
    setCountryCode: (country: Country) => void;
    open: () => void;
    close: () => void;
}
declare const CountryCodeMenu: React.FC<CountryCodeMenuProps>;
export default CountryCodeMenu;
