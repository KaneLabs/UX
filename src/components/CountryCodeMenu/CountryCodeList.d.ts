import * as React from 'react';
import { Country } from './country-data';
export interface CountryCodeListProps {
    onCountryPress?: (country: Country) => void;
    open?: () => void;
    close?: () => void;
    allowed?: string[];
}
declare const CountryCodeList: React.FC<CountryCodeListProps>;
export default CountryCodeList;
