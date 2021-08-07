var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _reactNativeSvg=_interopRequireWildcard(require("react-native-svg"));var _this=this,_jsxFileName="/Users/kane/Lab/Eros/src/components/Neu/Shadow.js";function hexToRgb(hex){var shorthandRegex=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;hex=hex.replace(shorthandRegex,function(m,r,g,b){return r+r+g+g+b+b;});var result=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);return result?{r:parseInt(result[1],16),g:parseInt(result[2],16),b:parseInt(result[3],16)}:null;}function colorRgb(color){var reg=/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;var sColor=color.toLowerCase();var rgb=[];if(sColor&&reg.test(sColor)){if(sColor.length===4){var sColorNew='#';for(var i=1;i<4;i+=1){sColorNew+=sColor.slice(i,i+1).concat(sColor.slice(i,i+1));}sColor=sColorNew;}for(var _i=1;_i<7;_i+=2){rgb.push(parseInt("0x"+sColor.slice(_i,_i+2)));}return rgb;}throw Error('Invalid Color!');}var Shadow=function Shadow(props){var _props$setting=props.setting,_props$setting$width=_props$setting.width,width=_props$setting$width===void 0?0:_props$setting$width,_props$setting$height=_props$setting.height,height=_props$setting$height===void 0?0:_props$setting$height,_props$setting$color=_props$setting.color,color=_props$setting$color===void 0?'#000':_props$setting$color,_props$setting$offset=_props$setting.offsetX,offsetX=_props$setting$offset===void 0?0:_props$setting$offset,_props$setting$offset2=_props$setting.offsetY,offsetY=_props$setting$offset2===void 0?0:_props$setting$offset2,_props$setting$blur=_props$setting.blur,blur=_props$setting$blur===void 0?3:_props$setting$blur,_props$setting$spread=_props$setting.spread,spread=_props$setting$spread===void 0?0:_props$setting$spread,_props$setting$border=_props$setting.borderRadius,_borderRadius=_props$setting$border===void 0?0:_props$setting$border,_props$setting$opacit=_props$setting.opacity,opacity=_props$setting$opacit===void 0?'1':_props$setting$opacit,_props$setting$style=_props$setting.style,style=_props$setting$style===void 0?{}:_props$setting$style,children=_props$setting.children;var borderRadius=_borderRadius>Math.min(width,height)/2?Math.min(width,height)/2:_borderRadius;var rectInnerWidth=width+spread*2-blur;var rectInnerHeight=height+spread*2-blur;var rectOuterWidth=width+spread*2+blur;var rectOuterHeight=height+spread*2+blur;var innerRadius=borderRadius>0?Math.max(0,borderRadius+spread-blur/2):0;var outerRadius=borderRadius>0?Math.max(0,borderRadius+spread+blur/2):blur;var borderWidth=(rectOuterWidth-rectInnerWidth)/2;var rgb=hexToRgb(color);var linear=function linear(key){return[_react.default.createElement(_reactNativeSvg.Stop,{offset:"0",stopColor:color,stopOpacity:opacity,key:key+"Linear0",__self:_this,__source:{fileName:_jsxFileName,lineNumber:81,columnNumber:5}}),_react.default.createElement(_reactNativeSvg.Stop,{offset:"1",stopColor:color,stopOpacity:"0",key:key+"Linear1",__self:_this,__source:{fileName:_jsxFileName,lineNumber:87,columnNumber:5}})];};var radial=function radial(key){return[_react.default.createElement(_reactNativeSvg.Stop,{offset:"0",stopColor:color,stopOpacity:opacity,key:key+"Radial0",__self:_this,__source:{fileName:_jsxFileName,lineNumber:91,columnNumber:5}}),_react.default.createElement(_reactNativeSvg.Stop,{offset:Math.max(0,innerRadius/outerRadius).toString(),stopColor:color,stopOpacity:opacity,key:key+"Radial1",__self:_this,__source:{fileName:_jsxFileName,lineNumber:97,columnNumber:5}}),_react.default.createElement(_reactNativeSvg.Stop,{offset:"1",stopColor:color,stopOpacity:"0",key:key+"Radial2",__self:_this,__source:{fileName:_jsxFileName,lineNumber:103,columnNumber:5}})];};var styles=_reactNative.StyleSheet.create({viewContainer:(0,_extends2.default)({width:rectOuterWidth,height:rectOuterHeight,position:'absolute',left:-blur/2-spread+offsetX,top:-blur/2-spread+offsetY},style)});return _react.default.createElement(_reactNative.View,{style:styles.viewContainer,__self:_this,__source:{fileName:_jsxFileName,lineNumber:118,columnNumber:5}},_react.default.createElement(_reactNativeSvg.default,{width:rectOuterWidth,height:rectOuterHeight,__self:_this,__source:{fileName:_jsxFileName,lineNumber:119,columnNumber:7}},_react.default.createElement(_reactNativeSvg.Defs,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:120,columnNumber:9}},_react.default.createElement(_reactNativeSvg.LinearGradient,{id:"top",x1:"0%",x2:"0%",y1:"100%",y2:"0%",__self:_this,__source:{fileName:_jsxFileName,lineNumber:121,columnNumber:11}},linear('BoxTop')),_react.default.createElement(_reactNativeSvg.LinearGradient,{id:"bottom",x1:"0%",x2:"0%",y1:"0%",y2:"100%",__self:_this,__source:{fileName:_jsxFileName,lineNumber:124,columnNumber:11}},linear('BoxBottom')),_react.default.createElement(_reactNativeSvg.LinearGradient,{id:"left",x1:"100%",x2:"0%",y1:"0%",y2:"0%",__self:_this,__source:{fileName:_jsxFileName,lineNumber:127,columnNumber:11}},linear('BoxLeft')),_react.default.createElement(_reactNativeSvg.LinearGradient,{id:"right",x1:"0%",x2:"100%",y1:"0%",y2:"0%",__self:_this,__source:{fileName:_jsxFileName,lineNumber:130,columnNumber:11}},linear('BoxRight')),_react.default.createElement(_reactNativeSvg.RadialGradient,{id:"border-left-top",rx:"100%",ry:"100%",cx:"100%",cy:"100%",fx:"100%",fy:"100%",__self:_this,__source:{fileName:_jsxFileName,lineNumber:134,columnNumber:11}},radial('BoxLeftTop')),_react.default.createElement(_reactNativeSvg.RadialGradient,{id:"border-left-bottom",rx:"100%",ry:"100%",cx:"100%",cy:"0%",fx:"100%",fy:"0%",__self:_this,__source:{fileName:_jsxFileName,lineNumber:144,columnNumber:11}},radial('BoxLeftBottom')),_react.default.createElement(_reactNativeSvg.RadialGradient,{id:"border-right-top",rx:"100%",ry:"100%",cx:"0%",cy:"100%",fx:"0%",fy:"100%",__self:_this,__source:{fileName:_jsxFileName,lineNumber:154,columnNumber:11}},radial('BoxRightTop')),_react.default.createElement(_reactNativeSvg.RadialGradient,{id:"border-right-bottom",rx:"100%",ry:"100%",cx:"0%",cy:"0%",fx:"0%",fy:"0%",__self:_this,__source:{fileName:_jsxFileName,lineNumber:164,columnNumber:11}},radial('BoxRightBottom'))),_react.default.createElement(_reactNativeSvg.Path,{d:"\n            M 0 "+outerRadius+",\n            a "+outerRadius+" "+outerRadius+" 0 0 1 "+outerRadius+" "+-outerRadius+"\n            v "+blur+"\n            a "+innerRadius+" "+innerRadius+" 0 0 0 "+-innerRadius+" "+innerRadius+"\n            z\n          ",fill:"url(#border-left-top)",__self:_this,__source:{fileName:_jsxFileName,lineNumber:176,columnNumber:9}}),_react.default.createElement(_reactNativeSvg.Path,{d:"\n            M "+(rectOuterWidth-outerRadius)+" 0,\n            a "+outerRadius+" "+outerRadius+" 0 0 1 "+outerRadius+" "+outerRadius+"\n            h "+-blur+"\n            a "+innerRadius+" "+innerRadius+" 0 0 0 "+-innerRadius+" "+-innerRadius+"\n            z\n          ",fill:"url(#border-right-top)",__self:_this,__source:{fileName:_jsxFileName,lineNumber:186,columnNumber:9}}),_react.default.createElement(_reactNativeSvg.Path,{d:"\n            M "+rectOuterWidth+" "+(rectOuterHeight-outerRadius)+",\n            a "+outerRadius+" "+outerRadius+" 0 0 1 "+-outerRadius+" "+outerRadius+"\n            v "+-blur+"\n            a "+innerRadius+" "+innerRadius+" 0 0 0 "+innerRadius+" "+-innerRadius+"\n            z\n          ",fill:"url(#border-right-bottom)",__self:_this,__source:{fileName:_jsxFileName,lineNumber:196,columnNumber:9}}),_react.default.createElement(_reactNativeSvg.Path,{d:"\n            M "+outerRadius+" "+rectOuterHeight+",\n            a "+outerRadius+" "+outerRadius+" 0 0 1 "+-outerRadius+" "+-outerRadius+"\n            h "+blur+"\n            a "+innerRadius+" "+innerRadius+" 0 0 0 "+innerRadius+" "+innerRadius+"\n            z\n          ",fill:"url(#border-left-bottom)",__self:_this,__source:{fileName:_jsxFileName,lineNumber:206,columnNumber:9}}),_react.default.createElement(_reactNativeSvg.Rect,{x:outerRadius,y:0,width:rectInnerWidth-innerRadius*2,height:blur,fill:"url(#top)",__self:_this,__source:{fileName:_jsxFileName,lineNumber:216,columnNumber:9}}),_react.default.createElement(_reactNativeSvg.Rect,{x:rectOuterWidth-blur,y:outerRadius,width:blur,height:rectInnerHeight-innerRadius*2,fill:"url(#right)",__self:_this,__source:{fileName:_jsxFileName,lineNumber:224,columnNumber:9}}),_react.default.createElement(_reactNativeSvg.Rect,{x:outerRadius,y:rectOuterHeight-blur,width:rectInnerWidth-innerRadius*2,height:blur,fill:"url(#bottom)",__self:_this,__source:{fileName:_jsxFileName,lineNumber:231,columnNumber:9}}),_react.default.createElement(_reactNativeSvg.Rect,{x:0,y:outerRadius,width:blur,height:rectInnerHeight-innerRadius*2,fill:"url(#left)",__self:_this,__source:{fileName:_jsxFileName,lineNumber:238,columnNumber:9}}),_react.default.createElement(_reactNativeSvg.Path,{d:"\n            M "+borderWidth+" "+(borderWidth+innerRadius)+",\n            a "+innerRadius+" "+innerRadius+" 0 0 1 "+innerRadius+" "+-innerRadius+"\n            h "+(rectInnerWidth-innerRadius*2)+"\n            a "+innerRadius+" "+innerRadius+" 0 0 1 "+innerRadius+" "+innerRadius+"\n            v "+(rectInnerHeight-innerRadius*2)+"\n            a "+innerRadius+" "+innerRadius+" 0 0 1 "+-innerRadius+" "+innerRadius+"\n            h "+(-rectInnerWidth+innerRadius*2)+"\n            a "+innerRadius+" "+innerRadius+" 0 0 1 "+-innerRadius+" "+-innerRadius+"\n            z\n          ",fill:"rgba("+rgb.r+","+rgb.g+","+rgb.b+","+(opacity||1)+")",__self:_this,__source:{fileName:_jsxFileName,lineNumber:245,columnNumber:9}}),children));};var _default=Shadow;exports.default=_default;