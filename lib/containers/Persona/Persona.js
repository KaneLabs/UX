var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.Persona=exports.TIMELINE_LIMIT=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _toConsumableArray2=_interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _components=require("../../components");var _reactHooks=require("@apollo/react-hooks");var _queries=require("../../queries");var _theme=require("../../theme");var _this=this,_jsxFileName="/Users/kane/Lab/Eros/src/containers/Persona/Persona.js";var TIMELINE_LIMIT=4;exports.TIMELINE_LIMIT=TIMELINE_LIMIT;var Persona=function Persona(_ref){var persona=_ref.persona,handle=_ref.handle,following=_ref.following;var options={variables:{handle:handle,offset:0,limit:TIMELINE_LIMIT}};var _useQuery=(0,_reactHooks.useQuery)(_queries.TIMELINE,options),data=_useQuery.data,fetchMore=_useQuery.fetchMore,subscribeToMore=_useQuery.subscribeToMore;var timeline=data&&data.Timeline;var onLoadMore=function onLoadMore(){return fetchMore({query:_queries.TIMELINE,variables:{handle:handle,offset:data.Timeline.offset+TIMELINE_LIMIT,limit:TIMELINE_LIMIT},updateQuery:function updateQuery(prev,_ref2){var fetchMoreResult=_ref2.fetchMoreResult;var prevPosts=prev.Timeline.posts;var nextPosts=fetchMoreResult.Timeline.posts;return{Timeline:{handle:handle,offset:fetchMoreResult.Timeline.offset,posts:[].concat((0,_toConsumableArray2.default)(prevPosts),(0,_toConsumableArray2.default)(nextPosts)),__typename:prev.Timeline.__typename}};}});};var subscribeToNewPosts=function subscribeToNewPosts(){return subscribeToMore({document:_queries.TIMELINE,variables:{handle:handle,offset:data.Timeline.offset+TIMELINE_LIMIT,limit:TIMELINE_LIMIT},updateQuery:function updateQuery(prev,_ref3){var subscriptionData=_ref3.subscriptionData;if(!subscriptionData.data){return prev;}var prevPosts=prev.Timeline.posts;var nextPosts=subscriptionData.Timeline.posts;return{Timeline:{handle:handle,offset:data.Timeline.offset+TIMELINE_LIMIT,posts:[].concat((0,_toConsumableArray2.default)(prevPosts),(0,_toConsumableArray2.default)(nextPosts)),__typename:prev.Timeline.__typename}};}});};return _react.default.createElement(_components.Timeline,(0,_extends2.default)({ListHeaderComponent:_react.default.createElement(_reactNative.View,{style:{width:'100%',alignItems:'center'},__self:_this,__source:{fileName:_jsxFileName,lineNumber:66,columnNumber:9}},_react.default.createElement(_components.PersonaHeader,(0,_extends2.default)({},persona,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:67,columnNumber:11}})),_react.default.createElement(_components.Line,{style:{maxWidth:_theme.FEED_WIDTH},__self:_this,__source:{fileName:_jsxFileName,lineNumber:68,columnNumber:11}})),handle:handle,persona:persona,following:following,onLoadMore:onLoadMore,subscribeToNewPosts:subscribeToNewPosts},timeline,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:64,columnNumber:5}}));};exports.Persona=Persona;