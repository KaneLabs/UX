var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _NeuView=_interopRequireDefault(require("./NeuView"));var _propTypes=_interopRequireDefault(require("prop-types"));var _this=this,_jsxFileName="/Users/kane/Lab/Eros/src/components/Neu/NeuInput.js";var NeuInput=function NeuInput(props){var _props$height=props.height,height=_props$height===void 0?32:_props$height,_props$width=props.width,width=_props$width===void 0?180:_props$width,_props$borderRadius=props.borderRadius,borderRadius=_props$borderRadius===void 0?16:_props$borderRadius,_props$color=props.color,color=_props$color===void 0?'#EEEEEE':_props$color,_props$style=props.style,style=_props$style===void 0?{}:_props$style,_props$textStyle=props.textStyle,textStyle=_props$textStyle===void 0?{}:_props$textStyle,_props$placeholder=props.placeholder,placeholder=_props$placeholder===void 0?'':_props$placeholder,_props$onChangeText=props.onChangeText,onChangeText=_props$onChangeText===void 0?function(){}:_props$onChangeText,_props$value=props.value,value=_props$value===void 0?'':_props$value,Prefix=props.prefix,rest=(0,_objectWithoutProperties2.default)(props,["height","width","borderRadius","color","style","textStyle","placeholder","onChangeText","value","prefix"]);var styles={input:{borderBottomWidth:0,flex:1}};return _react.default.createElement(_NeuView.default,(0,_extends2.default)({},rest,{height:height,width:width,color:color,borderRadius:borderRadius,style:(0,_extends2.default)({},style),inset:true,__self:_this,__source:{fileName:_jsxFileName,lineNumber:29,columnNumber:5}}),_react.default.createElement(_reactNative.View,{style:{flexDirection:'row',paddingHorizontal:12},__self:_this,__source:{fileName:_jsxFileName,lineNumber:37,columnNumber:7}},Prefix&&_react.default.createElement(_reactNative.View,{style:{alignItems:'center',justifyContent:'center',marginRight:6},__self:_this,__source:{fileName:_jsxFileName,lineNumber:43,columnNumber:11}},Prefix),_react.default.createElement(_reactNative.TextInput,{style:(0,_extends2.default)({},styles.input,textStyle),onChangeText:onChangeText,placeholder:placeholder,value:value,__self:_this,__source:{fileName:_jsxFileName,lineNumber:52,columnNumber:9}})));};NeuInput.propTypes=(0,_extends2.default)({style:_propTypes.default.object,textStyle:_propTypes.default.object,placeholder:_propTypes.default.string,onChangeText:_propTypes.default.func.isRequired,value:_propTypes.default.string.isRequired},_NeuView.default.propTypes);var _default=NeuInput;exports.default=_default;