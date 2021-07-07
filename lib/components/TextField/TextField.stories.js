var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _react = _interopRequireDefault(require('react'));
var _View = _interopRequireDefault(
  require('react-native-web/dist/exports/View'),
);
var _TextField = _interopRequireDefault(require('./TextField'));
var _Container = _interopRequireDefault(
  require('eros-ui-storybook/components/Container'),
);
var _storiesOf = require('eros-ui-storybook/helpers/storiesOf');
var _this = this,
  _jsxFileName =
    '/Users/kane/Lab/Eros/src/components/TextField/TextField.stories.js';
var _default = (0, _storiesOf.storiesOf)('Components|TextField', module)
  .addParameters({ jest: ['TextField'] })
  .add('TextField', function() {
    return _react.default.createElement(
      _Container.default,
      {
        __self: _this,
        __source: { fileName: _jsxFileName, lineNumber: 12, columnNumber: 5 },
      },
      _react.default.createElement(
        _View.default,
        {
          style: { flexDirection: 'column', flexWrap: 'wrap' },
          __self: _this,
          __source: { fileName: _jsxFileName, lineNumber: 13, columnNumber: 7 },
        },
        _react.default.createElement(_TextField.default, {
          placeholder: 'Enter Text',
          __self: _this,
          __source: { fileName: _jsxFileName, lineNumber: 14, columnNumber: 9 },
        }),
      ),
    );
  });
exports.default = _default;
