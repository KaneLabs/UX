var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.LATEST=void 0;var _taggedTemplateLiteralLoose2=_interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));var _client=require("@apollo/client");var _templateObject;var LATEST=(0,_client.gql)(_templateObject||(_templateObject=(0,_taggedTemplateLiteralLoose2.default)(["\n  query latest($offset: Int, $limit: Int) {\n    Latest(offset: $offset, limit: $limit) {\n      offset\n      posts {\n        id\n        friendlyUrl\n        title\n        content {\n          text\n        }\n        createdAt\n        persona {\n          handle\n          avatarUrl\n          display\n        }\n      }\n    }\n  }\n"])));exports.LATEST=LATEST;