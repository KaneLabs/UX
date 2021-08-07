var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=exports.TypographyTypes=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var React=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _theme=require("../../theme");var _this=this,_jsxFileName="/Users/kane/Lab/Eros/src/components/Typography/Typography.tsx";var TypographyTypes;exports.TypographyTypes=TypographyTypes;(function(TypographyTypes){TypographyTypes["h1"]="h1";TypographyTypes["h2"]="h2";TypographyTypes["h3"]="h3";TypographyTypes["h4"]="h4";TypographyTypes["h5"]="h5";TypographyTypes["h6"]="h6";TypographyTypes["subtitle1"]="subtitle1";TypographyTypes["subtitle2"]="subtitle2";TypographyTypes["body1"]="body1";TypographyTypes["body2"]="body2";TypographyTypes["button"]="button";TypographyTypes["caption"]="caption";TypographyTypes["overline"]="overline";})(TypographyTypes||(exports.TypographyTypes=TypographyTypes={}));var Typography=function Typography(props){var text=props.text,children=props.children,style=props.style,_props$gutter=props.gutter,gutter=_props$gutter===void 0?false:_props$gutter,_props$type=props.type,type=_props$type===void 0?TypographyTypes.body1:_props$type,rest=(0,_objectWithoutProperties2.default)(props,["text","children","style","gutter","type"]);var _useTheme=(0,_theme.useTheme)(),_useTheme2=(0,_slicedToArray2.default)(_useTheme,1),theme=_useTheme2[0];var overrideableStyles=React.useMemo(function(){var selectedStyle=theme.Typography[type];var gutterStyles={marginBottom:gutter?10:0};return _reactNative.StyleSheet.flatten([selectedStyle,gutterStyles,style]);},[theme.mode,gutter,style]);return React.createElement(_reactNative.Text,(0,_extends2.default)({style:overrideableStyles},rest,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:53,columnNumber:5}}),text||children||undefined);};var _default=Typography;exports.default=_default;