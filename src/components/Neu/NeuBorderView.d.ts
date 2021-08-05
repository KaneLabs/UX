export default NeuBorderView;
declare function NeuBorderView(props: any): JSX.Element;
declare namespace NeuBorderView {
  namespace propTypes {
    const color: PropTypes.Validator<string>;
    const width: PropTypes.Validator<number>;
    const height: PropTypes.Validator<number>;
    const borderRadius: PropTypes.Validator<number>;
    const borderWidth: PropTypes.Validator<number>;
    const containerStyle: PropTypes.Validator<object>;
    const style: PropTypes.Validator<object>;
  }
}
import PropTypes from 'prop-types';
