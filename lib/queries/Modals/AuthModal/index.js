var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.OPEN_AUTH_MODAL=exports.CLOSE_AUTH_MODAL=exports.TOGGLE_AUTH_MODAL=exports.AUTH_MODAL=void 0;var _taggedTemplateLiteralLoose2=_interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));var _client=require("@apollo/client");var _templateObject,_templateObject2,_templateObject3,_templateObject4;var AUTH_MODAL=(0,_client.gql)(_templateObject||(_templateObject=(0,_taggedTemplateLiteralLoose2.default)(["\n  query authModal {\n    authModal @client {\n      open\n    }\n  }\n"])));exports.AUTH_MODAL=AUTH_MODAL;var TOGGLE_AUTH_MODAL=(0,_client.gql)(_templateObject2||(_templateObject2=(0,_taggedTemplateLiteralLoose2.default)(["\n  mutation toggleAuthModal {\n    toggleAuthModal @client {\n      open\n    }\n  }\n"])));exports.TOGGLE_AUTH_MODAL=TOGGLE_AUTH_MODAL;var CLOSE_AUTH_MODAL=(0,_client.gql)(_templateObject3||(_templateObject3=(0,_taggedTemplateLiteralLoose2.default)(["\n  mutation closeAuthModal {\n    closeAuthModal @client {\n      open\n    }\n  }\n"])));exports.CLOSE_AUTH_MODAL=CLOSE_AUTH_MODAL;var OPEN_AUTH_MODAL=(0,_client.gql)(_templateObject4||(_templateObject4=(0,_taggedTemplateLiteralLoose2.default)(["\n  mutation openAuthModal {\n    openAuthModal @client {\n      open\n    }\n  }\n"])));exports.OPEN_AUTH_MODAL=OPEN_AUTH_MODAL;