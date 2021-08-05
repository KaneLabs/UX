export default AppbarBottomSVG;
declare function AppbarBottomSVG({
  paddingHorizontal,
  width,
  backgroundColor,
  fabPosition,
}: {
  paddingHorizontal: any;
  width: any;
  backgroundColor: any;
  fabPosition: any;
}): JSX.Element;
declare namespace AppbarBottomSVG {
  namespace propTypes {
    const paddingHorizontal: PropTypes.Requireable<number>;
    const width: PropTypes.Requireable<number>;
    const backgroundColor: PropTypes.Requireable<string>;
    const fabPosition: PropTypes.Requireable<string>;
  }
}
import PropTypes from 'prop-types';
