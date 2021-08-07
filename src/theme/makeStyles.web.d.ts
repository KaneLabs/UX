import Theme from './Theme';
declare type ThemeFunction = (theme: Theme) => any;
declare const makeStyles: (themeFn: ThemeFunction) => () => any;
export default makeStyles;
