import { countries } from 'countries-list';

export const allCountryData = Object.entries(countries).map(([key, value]) => {
  const { name, phone, emoji } = value;
  return {
    name, phone, emoji, key,
  };
});

export const whitelistedCountries = ['US', 'CA', 'MX'];

export const countryData = whitelistedCountries.map((countryCode) => allCountryData.find((country) => country.key === countryCode));

export const whiteListedCountryData = countryData;

export default countryData;
