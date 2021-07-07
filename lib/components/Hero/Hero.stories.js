var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _react = _interopRequireDefault(require('react'));
var _View = _interopRequireDefault(
  require('react-native-web/dist/exports/View'),
);
var _storiesOf = require('eros-ui-storybook/helpers/storiesOf');
var _Hero = _interopRequireDefault(require('./Hero'));
var _Header = _interopRequireDefault(
  require('eros-ui-storybook/components/Header'),
);
var _Container = _interopRequireDefault(
  require('eros-ui-storybook/components/Container'),
);
var _Saint_George1080x = _interopRequireDefault(
  require('../../assets/Saint_George-1080x1920.jpg'),
);
var _this = this,
  _jsxFileName = '/Users/kane/Lab/Eros/src/components/Hero/Hero.stories.js';
var _default = (0, _storiesOf.storiesOf)('Components|Hero', module)
  .addParameters({ jest: ['Hero'] })
  .add('Hero', function() {
    return _react.default.createElement(
      _Container.default,
      {
        __self: _this,
        __source: { fileName: _jsxFileName, lineNumber: 15, columnNumber: 5 },
      },
      _react.default.createElement(_Header.default, {
        title: 'Hero',
        __self: _this,
        __source: { fileName: _jsxFileName, lineNumber: 16, columnNumber: 7 },
      }),
      _react.default.createElement(
        _View.default,
        {
          style: { flexDirection: 'row', flexWrap: 'wrap' },
          __self: _this,
          __source: { fileName: _jsxFileName, lineNumber: 17, columnNumber: 7 },
        },
        _react.default.createElement(_Hero.default, {
          source: _Saint_George1080x.default,
          __self: _this,
          __source: { fileName: _jsxFileName, lineNumber: 18, columnNumber: 9 },
        }),
      ),
    );
  });
exports.default = _default;
