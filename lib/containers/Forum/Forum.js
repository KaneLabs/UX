var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=exports.Forum=void 0;var _react=_interopRequireDefault(require("react"));var _components=require("../../components");var _reactNative=require("react-native");var _ForumChat=_interopRequireDefault(require("./ForumChat"));var _this=this,_jsxFileName="/Users/kane/Lab/Eros/src/containers/Forum/Forum.js";var Forum=function Forum(props){return _react.default.createElement(_components.Container,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:7,columnNumber:3}},_react.default.createElement(_components.NavPlaceholder,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:8,columnNumber:5}}),_react.default.createElement(_components.Container,{style:{flexDirection:'row'},__self:_this,__source:{fileName:_jsxFileName,lineNumber:9,columnNumber:5}},_react.default.createElement(_components.Container,{center:true,__self:_this,__source:{fileName:_jsxFileName,lineNumber:10,columnNumber:7}},_react.default.createElement(_components.Title,{text:props.title,__self:_this,__source:{fileName:_jsxFileName,lineNumber:11,columnNumber:9}})),_react.default.createElement(_ForumChat.default,{forumId:props.id,__self:_this,__source:{fileName:_jsxFileName,lineNumber:13,columnNumber:7}})));};exports.Forum=Forum;var _default=Forum;exports.default=_default;