export declare type Country = {
    name: string;
    phone: string;
    emoji: string;
    key: string;
};
export declare const allCountryData: Country[];
export declare const whitelistedCountries: string[];
export declare const whiteListedCountryData: Country[];
export declare const selectWhitelistedCountries: (whitelistedCountries: string[]) => Country[];
export default allCountryData;
