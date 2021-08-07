export declare type AuthenticatedUser = {
    token: string;
};
export interface CountryCodeScreenProps {
    onSuccess: (arg0: AuthenticatedUser) => void;
}
declare const CountryCodeScreen: ({ onSuccess }: CountryCodeScreenProps) => JSX.Element;
export default CountryCodeScreen;
