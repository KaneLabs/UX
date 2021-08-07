var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=exports.SearchInput=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _components=require("../../components");var _theme=require("../../theme");var _this=this,_jsxFileName="/Users/kane/Lab/Eros/src/containers/Search/SearchInput.js";var SearchInput=function SearchInput(props){var styles=useStyles();return _react.default.createElement(_reactNative.View,{style:styles.container,__self:_this,__source:{fileName:_jsxFileName,lineNumber:9,columnNumber:5}},_react.default.createElement(_components.TextField,(0,_extends2.default)({style:styles.searchField,placeholder:"Search"},props,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:10,columnNumber:7}})));};exports.SearchInput=SearchInput;var useStyles=(0,_theme.makeStyles)(function(_ref){var unit=_ref.unit,padding=_ref.padding,borderColor=_ref.borderColor,borderWidth=_ref.borderWidth,textColor=_ref.textColor;return{container:{paddingVertical:padding,paddingHorizontal:padding*2,flex:1},searchField:_reactNative.Platform.select({web:{width:'100%',height:unit*4,borderRadius:unit*4,borderColor:borderColor,borderWidth:borderWidth,backgroundColor:'rgba(0,0,0,0.15)',backdropFilter:'blur(12px)',padding:unit,color:textColor.secondary},default:{width:'100%',maxWidth:180,height:unit*3.5,borderRadius:unit*3.5,backgroundColor:'rgba(0,0,0,0.15)'}})};});var _default=SearchInput;exports.default=_default;