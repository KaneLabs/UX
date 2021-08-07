var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=require("react");var _reactNative=require("react-native");var _useTheme3=_interopRequireDefault(require("./useTheme"));var makeStyles=function makeStyles(themeFn){var useStyles=function useStyles(){var _useTheme=(0,_useTheme3.default)(),_useTheme2=(0,_slicedToArray2.default)(_useTheme,2),currTheme=_useTheme2[0],toggleTheme=_useTheme2[1];var styles=(0,_react.useMemo)(function(){return _reactNative.StyleSheet.create(themeFn(currTheme));},[currTheme.mode]);return styles;};return useStyles;};var _default=makeStyles;exports.default=_default;