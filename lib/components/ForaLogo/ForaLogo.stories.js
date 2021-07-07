var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _react = _interopRequireDefault(require('react'));
var _View = _interopRequireDefault(
  require('react-native-web/dist/exports/View'),
);
var _storiesOf = require('eros-ui-storybook/helpers/storiesOf');
var _ForaLogo = _interopRequireDefault(require('./ForaLogo'));
var _Header = _interopRequireDefault(
  require('eros-ui-storybook/components/Header'),
);
var _Container = _interopRequireDefault(
  require('eros-ui-storybook/components/Container'),
);
var _this = this,
  _jsxFileName =
    '/Users/kane/Lab/Eros/src/components/ForaLogo/ForaLogo.stories.js';
var _default = (0, _storiesOf.storiesOf)('Components|ForaLogo', module)
  .addParameters({ jest: ['ForaLogo'] })
  .add('ForaLogo', function() {
    return _react.default.createElement(
      _Container.default,
      {
        __self: _this,
        __source: { fileName: _jsxFileName, lineNumber: 14, columnNumber: 5 },
      },
      _react.default.createElement(_Header.default, {
        title: 'ForaLogo',
        __self: _this,
        __source: { fileName: _jsxFileName, lineNumber: 15, columnNumber: 7 },
      }),
      _react.default.createElement(
        _View.default,
        {
          style: { flexDirection: 'row', flexWrap: 'wrap' },
          __self: _this,
          __source: { fileName: _jsxFileName, lineNumber: 16, columnNumber: 7 },
        },
        _react.default.createElement(_ForaLogo.default, {
          __self: _this,
          __source: { fileName: _jsxFileName, lineNumber: 17, columnNumber: 9 },
        }),
      ),
    );
  });
exports.default = _default;
