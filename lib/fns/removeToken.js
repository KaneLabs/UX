var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.removeToken=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _reactNative=require("react-native");var _jsCookie=_interopRequireDefault(require("js-cookie"));var removeToken=function removeToken(){return _regenerator.default.async(function removeToken$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;if(_reactNative.Platform.OS==='web'){_jsCookie.default.remove('token');}return _context.abrupt("return",_reactNative.AsyncStorage.removeItem('token'));case 5:_context.prev=5;_context.t0=_context["catch"](0);return _context.abrupt("return",null);case 8:case"end":return _context.stop();}}},null,null,[[0,5]],Promise);};exports.removeToken=removeToken;