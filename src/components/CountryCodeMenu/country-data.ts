import { countries } from 'countries-list';

export type Country = {
  name: string;
  phone: string;
  emoji: string;
  key: string;
};

export const allCountryData: Country[] = Object.entries(countries).map(
  ([key, value]) => {
    const { name, phone, emoji } = value;
    const country: Country = { name, phone, emoji, key };
    return country;
  },
);

export const whitelistedCountries = ['US', 'CA', 'MX'];

export const whiteListedCountryData = allCountryData.filter((country) =>
  whitelistedCountries.includes(country.key),
);

export const selectWhitelistedCountries = (whitelistedCountries: string[]) =>
  allCountryData.filter((country) =>
    whitelistedCountries.includes(country.key),
  );

export default allCountryData;
