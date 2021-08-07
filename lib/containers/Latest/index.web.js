var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=exports.Latest=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _toConsumableArray2=_interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _reactHooks=require("@apollo/react-hooks");var _queries=require("../../queries");var _MasonryList=_interopRequireDefault(require("../MasonryList"));var _this=this,_jsxFileName="/Users/kane/Lab/Eros/src/containers/Latest/index.web.js";var TIMELINE_LIMIT=5;var Latest=function Latest(_ref){var onPostPress=_ref.onPostPress,_ref$width=_ref.width,width=_ref$width===void 0?null:_ref$width,_ref$mobile=_ref.mobile,mobile=_ref$mobile===void 0?true:_ref$mobile;var options={variables:{offset:0,limit:5}};var _useQuery=(0,_reactHooks.useQuery)(_queries.TIMELINE,options),data=_useQuery.data,fetchMore=_useQuery.fetchMore,subscribeToMore=_useQuery.subscribeToMore;var latest=data&&data.Timeline;console.log('latest',latest);var posts=latest&&latest.posts;var _useState=(0,_react.useState)(false),_useState2=(0,_slicedToArray2.default)(_useState,2),refreshing=_useState2[0],setRefreshing=_useState2[1];var onLoadMore=function onLoadMore(){return fetchMore({query:_queries.TIMELINE,variables:{offset:data.Timeline.offset+TIMELINE_LIMIT,limit:TIMELINE_LIMIT},updateQuery:function updateQuery(prev,_ref2){var fetchMoreResult=_ref2.fetchMoreResult;var prevPosts=prev.Timeline.posts;var nextPosts=fetchMoreResult.Timeline.posts.reduce(function(acc,post){var indexFound=prevPosts.findIndex(function(prevPost){return prevPost.id===post.id;});if(indexFound===-1){return[].concat((0,_toConsumableArray2.default)(acc),[post]);}return acc;},[]);var offset=fetchMoreResult.Timeline.offset;return{Timeline:{offset:offset,posts:[].concat((0,_toConsumableArray2.default)(prevPosts),(0,_toConsumableArray2.default)(nextPosts)),__typename:prev.Timeline.__typename}};}});};var refresh=function refresh(){return fetchMore({query:_queries.TIMELINE,variables:{offset:0,limit:TIMELINE_LIMIT},updateQuery:function updateQuery(prev,_ref3){var fetchMoreResult=_ref3.fetchMoreResult;var prevPosts=prev.Timeline.posts;var nextPosts=fetchMoreResult.Timeline.posts.reduce(function(acc,post){var indexFound=prevPosts.findIndex(function(prevPost){return prevPost.id===post.id;});if(indexFound===-1){return[].concat((0,_toConsumableArray2.default)(acc),[post]);}return acc;},[]);var offset=fetchMoreResult.Timeline.offset;return{Timeline:{offset:offset,posts:[].concat((0,_toConsumableArray2.default)(nextPosts),(0,_toConsumableArray2.default)(prevPosts)),__typename:prev.Timeline.__typename}};}});};var subscribeToNewPosts=function subscribeToNewPosts(){return subscribeToMore({document:_queries.NEW_POST,updateQuery:function updateQuery(prev,_ref4){var subscriptionData=_ref4.subscriptionData;if(!subscriptionData.data){return prev;}var prevPosts=prev.Timeline.posts;var nextPost=subscriptionData.data.newPost;return{Timeline:(0,_extends2.default)({},prev.Timeline,{offset:prev.Timeline.offset+TIMELINE_LIMIT,posts:[nextPost].concat((0,_toConsumableArray2.default)(prevPosts)),__typename:prev.Timeline.__typename})};}});};var onEndReached=function onEndReached(e){return _regenerator.default.async(function onEndReached$(_context){while(1){switch(_context.prev=_context.next){case 0:console.log('END_REACHED loadMore()');_context.next=3;return _regenerator.default.awrap(onLoadMore());case 3:case"end":return _context.stop();}}},null,null,null,Promise);};var onRefresh=function onRefresh(){return _regenerator.default.async(function onRefresh$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:setRefreshing(true);_context2.next=3;return _regenerator.default.awrap(refresh());case 3:setRefreshing(false);case 4:case"end":return _context2.stop();}}},null,null,null,Promise);};return _react.default.createElement(_MasonryList.default,{posts:posts,onPostPress:onPostPress,onEndReached:onEndReached,onRefresh:onRefresh,refreshing:refreshing,subscribeToNewPosts:subscribeToNewPosts,width:width,mobile:mobile,__self:_this,__source:{fileName:_jsxFileName,lineNumber:108,columnNumber:5}});};exports.Latest=Latest;var _default=Latest;exports.default=_default;