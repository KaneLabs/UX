import * as React from 'react';
import { RouteProp } from '@react-navigation/core';
import { Country } from 'eros-ui/components/CountryCodeMenu/country-data';
export declare type AuthenticatedUser = {
    token: string;
};
export interface AuthPhoneProps {
    onSuccess: (arg0: AuthenticatedUser) => void;
    route: RouteProp<{
        params?: {
            country: Country;
        };
    }, 'params'>;
}
declare const AuthPhone: React.FC<AuthPhoneProps>;
export default AuthPhone;
