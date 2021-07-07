var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends'),
);
var _react = _interopRequireDefault(require('react'));
var _View = _interopRequireDefault(
  require('react-native-web/dist/exports/View'),
);
var _StyleSheet = _interopRequireDefault(
  require('react-native-web/dist/exports/StyleSheet'),
);
var _Platform = _interopRequireDefault(
  require('react-native-web/dist/exports/Platform'),
);
var _Dimensions = _interopRequireDefault(
  require('react-native-web/dist/exports/Dimensions'),
);
var _ = require('../..');
var _Header = _interopRequireDefault(
  require('../../storybook/components/Header'),
);
var _Container = _interopRequireDefault(
  require('../../storybook/components/Container'),
);
var _storiesOf = require('eros-ui-storybook/helpers/storiesOf');
var _jsxFileName =
    '/Users/kane/Lab/Eros/src/components/Utils/Shadow/Shadow.stories.js',
  _this = this;
var pageWidth =
  _Platform.default.OS == 'web'
    ? window.innerWidth
    : _Dimensions.default.get('window').width;
var shadowTypeNum = 24;
var maxItemPerRow = shadowTypeNum / 4;
var itemWidth = pageWidth < 1200 ? pageWidth / 10 : 100;
var styles = _StyleSheet.default.create({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: '8%',
    marginBottom: 30,
  },
  shadowItem: {
    padding: 8,
    height: itemWidth,
    width: itemWidth,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 100,
    fontSize: itemWidth / 3,
  },
});
var shadowItems = [];
for (var i = 1; i <= shadowTypeNum; i++) {
  shadowItems.push(
    _react.default.createElement(
      _View.default,
      {
        style: [
          styles.shadowItem,
          (0, _extends2.default)({}, (0, _.shadow)(i)),
        ],
        __self: this,
        __source: { fileName: _jsxFileName, lineNumber: 42, columnNumber: 5 },
      },
      i,
    ),
  );
}
var shadowDividedItems = [];
for (var _i = 0; _i < maxItemPerRow; _i++) {
  shadowDividedItems.push(
    _react.default.createElement(
      _View.default,
      {
        style: styles.container,
        __self: this,
        __source: { fileName: _jsxFileName, lineNumber: 48, columnNumber: 5 },
      },
      shadowItems.slice(maxItemPerRow * _i, maxItemPerRow * (_i + 1)),
    ),
  );
}
var _default = (0, _storiesOf.storiesOf)('Utils|Shadows', module)
  .addParameters({ jest: ['Shadows'] })
  .add('Simple', function() {
    return _react.default.createElement(
      _Container.default,
      {
        __self: _this,
        __source: { fileName: _jsxFileName, lineNumber: 57, columnNumber: 5 },
      },
      _react.default.createElement(_Header.default, {
        title: 'Shadows',
        subtitle:
          'Use the shadow() function to add platform shadow to the style of any component',
        __self: _this,
        __source: { fileName: _jsxFileName, lineNumber: 58, columnNumber: 7 },
      }),
      _react.default.createElement(
        _View.default,
        {
          __self: _this,
          __source: { fileName: _jsxFileName, lineNumber: 63, columnNumber: 7 },
        },
        shadowDividedItems,
      ),
    );
  });
exports.default = _default;
