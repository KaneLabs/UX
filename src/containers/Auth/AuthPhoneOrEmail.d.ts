export default AuthPhoneOrEmail;
declare function AuthPhoneOrEmail({ onSuccess, handle, onCountryCodePress, onNext, initialState, }: {
    onSuccess?: (() => null) | undefined;
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
