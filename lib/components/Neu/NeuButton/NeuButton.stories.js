var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends'),
);
var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray'),
);
var _react = _interopRequireDefault(require('react'));
var _View = _interopRequireDefault(
  require('react-native-web/dist/exports/View'),
);
var _Text = _interopRequireDefault(
  require('react-native-web/dist/exports/Text'),
);
var _Dimensions = _interopRequireDefault(
  require('react-native-web/dist/exports/Dimensions'),
);
var _neo = require('../../neo');
var _Container = _interopRequireDefault(
  require('../eros-ui-storybook/components/Container'),
);
var _storiesOf = require('../eros-ui-storybook/helpers/storiesOf');
var _this = this,
  _jsxFileName =
    '/Users/kane/Lab/Eros/src/components/Neu/NeuButton/NeuButton.stories.js';
var ShadowsControl = function ShadowsControl() {
  var _React$useState = _react.default.useState(160),
    _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
    color = _React$useState2[0],
    setColor = _React$useState2[1];
  var _React$useState3 = _react.default.useState(160),
    _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
    colorRed = _React$useState4[0],
    setColorRed = _React$useState4[1];
  var _React$useState5 = _react.default.useState(160),
    _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
    colorGreen = _React$useState6[0],
    setColorGreen = _React$useState6[1];
  var _React$useState7 = _react.default.useState(160),
    _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
    colorBlue = _React$useState8[0],
    setColorBlue = _React$useState8[1];
  var _React$useState9 = _react.default.useState(20),
    _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
    borderRadius = _React$useState10[0],
    setBorderRadius = _React$useState10[1];
  var _React$useState11 = _react.default.useState(10),
    _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
    shadowRadius = _React$useState12[0],
    setShadowRadius = _React$useState12[1];
  var colorStr = 'rgb(' + colorRed + ', ' + colorGreen + ', ' + colorBlue + ')';
  return _react.default.createElement(
    _View.default,
    {
      style: styles.main,
      __self: _this,
      __source: { fileName: _jsxFileName, lineNumber: 23, columnNumber: 5 },
    },
    _react.default.createElement(
      _neo.Shadow,
      {
        inner: true,
        style: (0, _extends2.default)(
          {
            borderRadius: borderRadius,
            shadowColor: colorStr,
            shadowRadius: shadowRadius,
          },
          styles.shadowStyle,
        ),
        __self: _this,
        __source: { fileName: _jsxFileName, lineNumber: 24, columnNumber: 7 },
      },
      _react.default.createElement(
        _Text.default,
        {
          style: styles.textShadow,
          __self: _this,
          __source: { fileName: _jsxFileName, lineNumber: 32, columnNumber: 9 },
        },
        'INNER ONLY',
        '\n',
        'ART SHADOW',
      ),
    ),
    _react.default.createElement(_View.default, {
      style: { height: 20 },
      __self: _this,
      __source: { fileName: _jsxFileName, lineNumber: 34, columnNumber: 7 },
    }),
    _react.default.createElement(
      _View.default,
      {
        style: { flexDirection: 'row' },
        __self: _this,
        __source: { fileName: _jsxFileName, lineNumber: 35, columnNumber: 7 },
      },
      _react.default.createElement(
        _neo.Shadow,
        {
          draw: true,
          style: (0, _extends2.default)(
            {
              borderRadius: borderRadius,
              shadowColor: colorStr,
              shadowRadius: shadowRadius,
            },
            styles.shadowStyle,
          ),
          __self: _this,
          __source: { fileName: _jsxFileName, lineNumber: 36, columnNumber: 9 },
        },
        _react.default.createElement(
          _Text.default,
          {
            style: styles.textShadow,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 11,
            },
          },
          'ART',
          '\n',
          'SHADOW',
        ),
      ),
      _react.default.createElement(_View.default, {
        style: { width: 40 },
        __self: _this,
        __source: { fileName: _jsxFileName, lineNumber: 46, columnNumber: 9 },
      }),
      _react.default.createElement(
        _neo.Shadow,
        {
          style: (0, _extends2.default)(
            {
              borderRadius: borderRadius,
              shadowColor: colorStr,
              shadowRadius: shadowRadius,
            },
            styles.shadowStyle,
          ),
          __self: _this,
          __source: { fileName: _jsxFileName, lineNumber: 47, columnNumber: 9 },
        },
        _react.default.createElement(
          _Text.default,
          {
            style: styles.textShadow,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 11,
            },
          },
          'NATIVE IOS',
          '\n',
          'SHADOW',
        ),
      ),
    ),
    _react.default.createElement(_View.default, {
      style: { height: 50 },
      __self: _this,
      __source: { fileName: _jsxFileName, lineNumber: 57, columnNumber: 7 },
    }),
    _react.default.createElement(
      _View.default,
      {
        style: { width: 300 },
        __self: _this,
        __source: { fileName: _jsxFileName, lineNumber: 58, columnNumber: 7 },
      },
      _react.default.createElement(
        _View.default,
        {
          style: styles.blockValue,
          __self: _this,
          __source: { fileName: _jsxFileName, lineNumber: 59, columnNumber: 9 },
        },
        _react.default.createElement(
          _Text.default,
          {
            style: styles.blockValueText,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 11,
            },
          },
          'Color:',
        ),
        _react.default.createElement(
          _Text.default,
          {
            style: styles.blockValueText2,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 11,
            },
          },
          colorStr,
        ),
      ),
      _react.default.createElement(_View.default, {
        style: { height: 25 },
        __self: _this,
        __source: { fileName: _jsxFileName, lineNumber: 64, columnNumber: 9 },
      }),
      _react.default.createElement(
        _View.default,
        {
          style: styles.blockValue,
          __self: _this,
          __source: { fileName: _jsxFileName, lineNumber: 65, columnNumber: 9 },
        },
        _react.default.createElement(
          _Text.default,
          {
            style: styles.blockValueText,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 11,
            },
          },
          'Border radius:',
        ),
        _react.default.createElement(
          _Text.default,
          {
            style: styles.blockValueText2,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 11,
            },
          },
          Math.round(borderRadius),
        ),
      ),
      _react.default.createElement(_View.default, {
        style: { height: 25 },
        __self: _this,
        __source: { fileName: _jsxFileName, lineNumber: 69, columnNumber: 9 },
      }),
      _react.default.createElement(
        _View.default,
        {
          style: styles.blockValue,
          __self: _this,
          __source: { fileName: _jsxFileName, lineNumber: 70, columnNumber: 9 },
        },
        _react.default.createElement(
          _Text.default,
          {
            style: styles.blockValueText,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 11,
            },
          },
          'Shadow radius:',
        ),
        _react.default.createElement(
          _Text.default,
          {
            style: styles.blockValueText2,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 11,
            },
          },
          Math.round(shadowRadius),
        ),
      ),
    ),
  );
};
var styles = {
  main: {
    width: _Dimensions.default.get('window').width,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
  },
  textShadow: { fontWeight: 'bold', fontSize: 13, textAlign: 'center' },
  blockValue: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  blockValueText: { fontSize: 14 },
  blockValueText2: { fontWeight: 'bold', fontSize: 14, textAlign: 'left' },
  shadowStyle: {
    shadowOpacity: 1,
    backgroundColor: '#ECF0F3',
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
var _default = (0, _storiesOf.storiesOf)('Components|Neomorphic', module)
  .addParameters({ jest: ['Neomorphic'] })
  .add('Shadows', function() {
    return _react.default.createElement(
      _Container.default,
      {
        __self: _this,
        __source: { fileName: _jsxFileName, lineNumber: 120, columnNumber: 7 },
      },
      _react.default.createElement(ShadowsControl, {
        __self: _this,
        __source: { fileName: _jsxFileName, lineNumber: 121, columnNumber: 9 },
      }),
    );
  })
  .add('<Neomorph />', function() {
    return _react.default.createElement(
      _Container.default,
      {
        __self: _this,
        __source: { fileName: _jsxFileName, lineNumber: 126, columnNumber: 5 },
      },
      _react.default.createElement(_neo.NeomorphFlex, {
        inner: true,
        swapShadows: true,
        style: {
          shadowRadius: 10,
          borderRadius: 25,
          backgroundColor: '#DDDDDD',
          width: 150,
          height: 150,
        },
        __self: _this,
        __source: { fileName: _jsxFileName, lineNumber: 127, columnNumber: 7 },
      }),
    );
  })
  .add('<NeomorphBlur />', function() {
    return _react.default.createElement(
      _Container.default,
      {
        __self: _this,
        __source: { fileName: _jsxFileName, lineNumber: 142, columnNumber: 7 },
      },
      _react.default.createElement(_neo.NeomorphBlur, {
        style: {
          shadowRadius: 12,
          borderRadius: 70,
          backgroundColor: '#ECF0F3',
          width: 140,
          height: 140,
        },
        __self: _this,
        __source: { fileName: _jsxFileName, lineNumber: 143, columnNumber: 9 },
      }),
    );
  })
  .add('Nested Neomorph', function() {
    return _react.default.createElement(
      _Container.default,
      {
        __self: _this,
        __source: { fileName: _jsxFileName, lineNumber: 157, columnNumber: 7 },
      },
      _react.default.createElement(
        _neo.Neomorph,
        {
          style: {
            shadowRadius: 3,
            borderRadius: 100,
            backgroundColor: '#DDDDDD',
            width: 200,
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 9,
          },
        },
        _react.default.createElement(
          _neo.Neomorph,
          {
            inner: true,
            style: {
              shadowRadius: 7,
              borderRadius: 90,
              backgroundColor: '#F19F9F',
              width: 180,
              height: 180,
              justifyContent: 'center',
              alignItems: 'center',
            },
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 11,
            },
          },
          _react.default.createElement(_neo.Neomorph, {
            style: {
              shadowRadius: 7,
              borderRadius: 50,
              backgroundColor: '#DDDDDD',
              width: 100,
              height: 100,
            },
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 13,
            },
          }),
        ),
      ),
    );
  });
exports.default = _default;
