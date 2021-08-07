var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.NEW_POST=exports.LIKE_POST=exports.CREATE_POST=exports.POST=void 0;var _taggedTemplateLiteralLoose2=_interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));var _client=require("@apollo/client");var _templateObject,_templateObject2,_templateObject3,_templateObject4;var POST=(0,_client.gql)(_templateObject||(_templateObject=(0,_taggedTemplateLiteralLoose2.default)(["\n  query post($id: ID, $friendlyUrl: String) {\n    Post(id: $id, friendlyUrl: $friendlyUrl) {\n      id\n      friendlyUrl\n      title\n      content {\n        type\n        text\n        uri\n      }\n      persona {\n        handle\n        avatarUrl\n        display\n      }\n      likes\n      liked\n      createdAt\n    }\n  }\n"])));exports.POST=POST;var CREATE_POST=(0,_client.gql)(_templateObject2||(_templateObject2=(0,_taggedTemplateLiteralLoose2.default)(["\n  mutation createPost($input: CreatePostInput!) {\n    CreatePost(input: $input) {\n      content {\n        text\n      }\n    }\n  }\n"])));exports.CREATE_POST=CREATE_POST;var LIKE_POST=(0,_client.gql)(_templateObject3||(_templateObject3=(0,_taggedTemplateLiteralLoose2.default)(["\n  mutation likePost($postId: String!, $unlike: Boolean) {\n    LikePost(postId: $postId, unlike: $unlike)\n  }\n"])));exports.LIKE_POST=LIKE_POST;var NEW_POST=(0,_client.gql)(_templateObject4||(_templateObject4=(0,_taggedTemplateLiteralLoose2.default)(["\n  subscription newPost($handle: String) {\n    newPost(handle: $handle) {\n      id\n      createdAt\n      friendlyUrl\n      title\n      content {\n        text\n      }\n      persona {\n        handle\n        avatarUrl\n        display\n      }\n    }\n  }\n"])));exports.NEW_POST=NEW_POST;