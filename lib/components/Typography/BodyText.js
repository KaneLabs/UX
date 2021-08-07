var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=exports.BodyText=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _theme=require("../../theme");var _this=this,_jsxFileName="/Users/kane/Lab/Eros/src/components/Typography/BodyText.tsx";var BodyText=function BodyText(_ref){var _ref$text=_ref.text,text=_ref$text===void 0?null:_ref$text,_ref$children=_ref.children,children=_ref$children===void 0?null:_ref$children,_ref$style=_ref.style,style=_ref$style===void 0?{}:_ref$style,_ref$gutter=_ref.gutter,gutter=_ref$gutter===void 0?null:_ref$gutter,_ref$type=_ref.type,type=_ref$type===void 0?1:_ref$type,rest=(0,_objectWithoutProperties2.default)(_ref,["text","children","style","gutter","type"]);var _useTheme=(0,_theme.useTheme)(),_useTheme2=(0,_slicedToArray2.default)(_useTheme,2),theme=_useTheme2[0],setTheme=_useTheme2[1];var styles=useStyles();var textStyle=type===1?styles.body:styles.body2;var colorStyle=type===1?{color:theme.textColor.primary}:{color:theme.textColor.secondary};var overrideableStyle=[textStyle,colorStyle,gutter&&styles.gutter,style];var content=text||children;return _react.default.createElement(_reactNative.Text,(0,_extends2.default)({style:overrideableStyle},rest,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:29,columnNumber:5}}),content);};exports.BodyText=BodyText;var useStyles=(0,_theme.makeStyles)(function(theme){return{body:{fontSize:16,lineHeight:19,fontWeight:'300',letterSpacing:0.5},body2:{fontSize:14,lineHeight:17,fontWeight:'300',letterSpacing:0.25},gutter:{marginBottom:12}};});var _default=BodyText;exports.default=_default;