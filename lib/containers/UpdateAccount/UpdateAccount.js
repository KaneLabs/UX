var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.UpdateAccount=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _components=require("../../components");var _reactHooks=require("@apollo/react-hooks");var _queries=require("../../queries");var _fns=require("../../fns");var _theme=require("../../theme");var _this=this,_jsxFileName="/Users/kane/Lab/Eros/src/containers/UpdateAccount/UpdateAccount.js";var initialState={display:'',handle:''};var UpdateAvatarButton=function UpdateAvatarButton(props){var _useTheme=(0,_theme.useTheme)(),_useTheme2=(0,_slicedToArray2.default)(_useTheme,1),_useTheme2$=_useTheme2[0],canvasOpaque=_useTheme2$.canvasOpaque,canvas3Opaque=_useTheme2$.canvas3Opaque;return _react.default.createElement(_components.ImageUploadButton,{style:{backgroundColor:canvasOpaque},hoverStyle:{backgroundColor:canvas3Opaque},iconName:"ios-camera",onFiles:onBannerFiles,__self:_this,__source:{fileName:_jsxFileName,lineNumber:35,columnNumber:5}});};var UpdateAccount=function UpdateAccount(_ref){var onSuccess=_ref.onSuccess;var _useTheme3=(0,_theme.useTheme)(),_useTheme4=(0,_slicedToArray2.default)(_useTheme3,1),_useTheme4$=_useTheme4[0],canvasOpaque=_useTheme4$.canvasOpaque,canvas3Opaque=_useTheme4$.canvas3Opaque;var _useQuery=(0,_reactHooks.useQuery)(_queries.ACCOUNT),accountData=_useQuery.data;var account=accountData&&accountData.account;var _useMutation=(0,_reactHooks.useMutation)(_queries.UPDATE_ACCOUNT),_useMutation2=(0,_slicedToArray2.default)(_useMutation,2),updateAccount=_useMutation2[0],updateResponse=_useMutation2[1];var updateLoading=updateResponse.loading;var _useMutation3=(0,_reactHooks.useMutation)(_queries.UPDATE_PERSONA_AVATAR),_useMutation4=(0,_slicedToArray2.default)(_useMutation3,1),updatePersonaAvatar=_useMutation4[0];var _useMutation5=(0,_reactHooks.useMutation)(_queries.UPDATE_PERSONA_BANNER),_useMutation6=(0,_slicedToArray2.default)(_useMutation5,1),updatePersonaBanner=_useMutation6[0];var _useLazyQuery=(0,_reactHooks.useLazyQuery)(_queries.HANDLE_IS_AVAILABLE),_useLazyQuery2=(0,_slicedToArray2.default)(_useLazyQuery,2),checkHandleIsAvailable=_useLazyQuery2[0],_useLazyQuery2$=_useLazyQuery2[1],data=_useLazyQuery2$.data,error=_useLazyQuery2$.error,loading=_useLazyQuery2$.loading;var handleIsAvailable=data&&data.handleIsAvailable;var initialDisplay=account&&account.display||'';var _useState=(0,_react.useState)(initialDisplay),_useState2=(0,_slicedToArray2.default)(_useState,2),display=_useState2[0],setDisplay=_useState2[1];var initialHandle=account&&account.handle&&"@"+account.handle||'';var _useState3=(0,_react.useState)(initialHandle),_useState4=(0,_slicedToArray2.default)(_useState3,2),handle=_useState4[0],setHandle=_useState4[1];var onAvatarFiles=function onAvatarFiles(images){var options,_await$updatePersonaA,data;return _regenerator.default.async(function onAvatarFiles$(_context){while(1){switch(_context.prev=_context.next){case 0:options={variables:{image:images[0]}};_context.next=3;return _regenerator.default.awrap(updatePersonaAvatar(options));case 3:_await$updatePersonaA=_context.sent;data=_await$updatePersonaA.data;if(data)alert("NEW URI "+data);case 6:case"end":return _context.stop();}}},null,null,null,Promise);};var onBannerFiles=function onBannerFiles(images){var options,_await$updatePersonaB,data;return _regenerator.default.async(function onBannerFiles$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:options={variables:{image:images[0]}};_context2.next=3;return _regenerator.default.awrap(updatePersonaBanner(options));case 3:_await$updatePersonaB=_context2.sent;data=_await$updatePersonaB.data;if(data)alert("NEW URI "+data);case 6:case"end":return _context2.stop();}}},null,null,null,Promise);};(0,_react.useEffect)(function(){if((0,_fns.isValidHandle)(handle.slice(1))){checkHandleIsAvailable({variables:{handle:handle.slice(1)}});}},[handle,checkHandleIsAvailable]);var submit=function submit(){var input,_await$updateAccount,data;return _regenerator.default.async(function submit$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:input={handle:handle.slice(1),display:display};_context3.next=3;return _regenerator.default.awrap(updateAccount({variables:{input:input}}));case 3:_await$updateAccount=_context3.sent;data=_await$updateAccount.data;if(data&&data.UpdateAccount){onSuccess(data.UpdateAccount);}case 6:case"end":return _context3.stop();}}},null,null,null,Promise);};var onHandle=function onHandle(text){if(text==='@'){return setHandle('');}if(text&&text[0]!=='@'){return setHandle("@"+text);}return setHandle(text);};var handleIsValid=(0,_fns.isValidHandle)(handle&&handle.slice(1));var handleIsMe=account.handle===(handle&&handle.slice(1));var handleIsAvailableAndValid=handleIsAvailable&&handleIsValid&&display.length>1;var isValid=handleIsAvailableAndValid||handleIsMe;var styles=useStyles();return _react.default.createElement(_react.default.Fragment,null,_react.default.createElement(_components.Banner,{uri:account&&account.bannerUrl,__self:_this,__source:{fileName:_jsxFileName,lineNumber:107,columnNumber:7}},_react.default.createElement(_components.ImageUploadButton,{style:{backgroundColor:canvasOpaque},hoverStyle:{backgroundColor:canvas3Opaque},iconName:"ios-camera",onFiles:onBannerFiles,__self:_this,__source:{fileName:_jsxFileName,lineNumber:108,columnNumber:9}})),_react.default.createElement(_components.Container,{style:styles.container,testID:"UpdateAccount",__self:_this,__source:{fileName:_jsxFileName,lineNumber:115,columnNumber:7}},_react.default.createElement(_components.View,{style:styles.row,__self:_this,__source:{fileName:_jsxFileName,lineNumber:116,columnNumber:9}},_react.default.createElement(_components.View,{style:{height:90,width:90,borderRadius:90,marginRight:16,alignItems:'center',justifyContent:'center'},__self:_this,__source:{fileName:_jsxFileName,lineNumber:117,columnNumber:11}},_react.default.createElement(_components.ImageUploadButton,{style:{backgroundColor:canvasOpaque},hoverStyle:{backgroundColor:canvas3Opaque},iconName:"ios-camera",onFiles:onAvatarFiles,__self:_this,__source:{fileName:_jsxFileName,lineNumber:127,columnNumber:13}}),_react.default.createElement(_components.Avatar,{size:90,avatarUrl:account&&account.avatarUrl,style:{padding:0,position:'absolute',zIndex:-1},__self:_this,__source:{fileName:_jsxFileName,lineNumber:133,columnNumber:13}})),_react.default.createElement(_components.Container,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:139,columnNumber:11}},_react.default.createElement(_components.Caption,{text:"Name",gutter:true,__self:_this,__source:{fileName:_jsxFileName,lineNumber:140,columnNumber:13}}),_react.default.createElement(_components.TextField,{testID:"UpdateAccountDisplayInput",onChangeText:setDisplay,placeholder:"Display",style:styles.textField,value:display,__self:_this,__source:{fileName:_jsxFileName,lineNumber:141,columnNumber:13}}),loading?_react.default.createElement(_components.ActivityIndicator,{size:12,style:{marginBottom:8},__self:_this,__source:{fileName:_jsxFileName,lineNumber:149,columnNumber:15}}):handleIsMe?_react.default.createElement(_components.Caption,{text:""+handle,gutter:true,__self:_this,__source:{fileName:_jsxFileName,lineNumber:151,columnNumber:15}}):handleIsValid&&handleIsAvailable?_react.default.createElement(_components.Caption,{text:handle+" is available",gutter:true,__self:_this,__source:{fileName:_jsxFileName,lineNumber:153,columnNumber:15}}):handle.length===0?_react.default.createElement(_components.Caption,{text:"Claim your handle",gutter:true,__self:_this,__source:{fileName:_jsxFileName,lineNumber:155,columnNumber:15}}):_react.default.createElement(_components.Caption,{text:handle+" has been taken",gutter:true,__self:_this,__source:{fileName:_jsxFileName,lineNumber:157,columnNumber:15}}),_react.default.createElement(_components.TextField,{testID:"UpdateAccountHandleInput",onChangeText:onHandle,placeholder:"@",style:styles.textField,value:handle,__self:_this,__source:{fileName:_jsxFileName,lineNumber:159,columnNumber:13}}))),updateLoading&&_react.default.createElement(_components.ActivityIndicator,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:169,columnNumber:27}}),_react.default.createElement(_components.Container,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:170,columnNumber:9}},_react.default.createElement(_components.OutlinedButton,{testID:"UpdateAccountPrimaryButton",disabled:!isValid,onPress:submit,text:"Save",style:styles.button,__self:_this,__source:{fileName:_jsxFileName,lineNumber:171,columnNumber:11}}))));};exports.UpdateAccount=UpdateAccount;var useStyles=(0,_theme.makeStyles)(function(theme){return{container:{maxWidth:theme.FEED_WIDTH,paddingHorizontal:theme.unit*2,width:'100%',alignItems:'center'},button:{flex:1,width:'100%'},textField:{marginBottom:theme.unit*2},row:{width:'100%',paddingVertical:theme.unit*2,flexDirection:'row'},banner:{}};});