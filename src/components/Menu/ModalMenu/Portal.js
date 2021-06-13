import { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Portal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      el: null,
      target: null,
    };
  }

  componentDidMount() {
    const container = document.createElement('div');
    if (typeof document === 'undefined') {
      return;
    }
    const { target, el } = this.state;
    this.setState({ el: container, target: document.body }, () => {
      target.appendChild(el);
    });
  }

  componentWillUnmount() {
    const { target, el } = this.state;
    if (target) {
      target.removeChild(el);
    }
  }

  render() {
    const { children } = this.props;
    const { el } = this.state;

    if (el) {
      return ReactDOM.createPortal(children, el);
    }

    return null;
  }
}

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  // visible: PropTypes.bool,
};

export default Portal;
