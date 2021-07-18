export function PhoneAuthSet({ onSuccess, handle, onCountryCodePress, onNext, initialState, }: {
    onSuccess: any;
    handle: any;
    onCountryCodePress?: (() => null) | undefined;
    onNext?: (() => null) | undefined;
    initialState?: {
        countryCode: string;
        country: string;
        phoneNumber: string;
        friendlyPhoneNumber: string;
        isPossible: boolean;
    } | undefined;
}): JSX.Element;
export default PhoneAuthSet;
