declare type AuthenticatedUser = {
    token: string;
};
interface AuthenticatePhoneProps {
    onSuccess: (arg0: AuthenticatedUser) => void;
}
declare const AuthenticatePhone: ({ onSuccess }: AuthenticatePhoneProps) => JSX.Element;
export default AuthenticatePhone;
