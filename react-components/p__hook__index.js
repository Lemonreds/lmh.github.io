(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"0R6B":function(e,t,r){e.exports=r.p+"static/waller.b7ab45a9.jpg"},"0lfv":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var a=function(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),l=2;l<r;l++)a[l-2]=arguments[l];return e.addEventListener(t,...a),()=>n(e,t,...a)},n=function(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),n=2;n<r;n++)a[n-2]=arguments[n];return e.removeEventListener(t,...a)}},CPl0:function(e,t,r){e.exports={root:"root___33f24",front:"front___Pz72T",label:"label___3soUH",time:"time___udqxe",content:"content___1yoPg"}},TSYQ:function(e,t,r){var a,n;(function(){"use strict";var r={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var n=typeof a;if("string"===n||"number"===n)e.push(a);else if(Array.isArray(a)&&a.length){var c=l.apply(null,a);c&&e.push(c)}else if("object"===n)for(var o in a)r.call(a,o)&&a[o]&&e.push(o)}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):(a=[],n=function(){return l}.apply(t,a),void 0===n||(e.exports=n))})()},YkaV:function(e,t,r){e.exports={root:"root___kOfBI"}},kUTx:function(e,t,r){"use strict";var a=r("q1tI"),n=r.n(a),l=r("TSYQ"),c=r.n(l),o=r("YkaV"),u=r.n(o);class s extends n.a.Component{render(){var e=this.props,t=e.children,r=e.className;return n.a.createElement("div",{className:c()(u.a.root,r)},t)}}var i=s;t["a"]=i},orjh:function(e,t,r){e.exports={root:"root___2edV8"}},sEgR:function(e,t,r){"use strict";var a=r("q1tI"),n=r.n(a),l=r("CPl0"),c=r.n(l),o=e=>{var t=e.label,r=e.time,a=e.children;return n.a.createElement("section",{className:c.a.root},n.a.createElement("div",{className:c.a.front},n.a.createElement("h3",{className:c.a.label,id:t},t),n.a.createElement("time",{className:c.a.time},r)),n.a.createElement("div",{className:c.a.content},a))};t["a"]=o},tiwV:function(e,t,r){"use strict";var a=r("q1tI"),n=r.n(a),l=r("orjh"),c=r.n(l);t["a"]=e=>{var t=e.children;return n.a.createElement("div",{className:c.a.root},t)}},yW7A:function(e,t,r){"use strict";r.r(t);for(var a=r("q1tI"),n=r.n(a),l=r("tiwV"),c=r("tJVT"),o=r("sEgR"),u=r("kUTx"),s=r("0lfv"),i=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],m={},d=0;d<i.length;d+=1){var f=i[d];if(f[1]in document)for(var b=0;b<f.length;b+=1)m[i[0][b]]=f[b]}var v=e=>{var t=Object(a["useState"])(!1),r=Object(c["a"])(t,2),n=r[0],l=r[1],o=()=>{l(!!document[m.fullscreenElement])};Object(a["useEffect"])(()=>{var t=null;return e.current&&(t=Object(s["a"])(document,"".concat(m.fullscreenchange),o)),t},[e.current]);var u=()=>e.current[m.requestFullscreen](),i=()=>document[m.exitFullscreen](),d=n?i:u;return[n,{request:u,toggle:d,exit:i}]},h=v,g=e=>{var t=e.href,r=e.text;return n.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},r||t)},p=g,E=r("0R6B"),j=r.n(E),O=()=>{var e=Object(a["useRef"])(),t=h(e),r=Object(c["a"])(t,2),l=(r[0],r[1]),s=l.toggle;l.request,l.exit;return n.a.createElement(o["a"],{label:"useFullScreen",time:"2020-09-01"},n.a.createElement("img",{src:j.a,alt:"1",ref:e,onClick:s,style:{width:"100%",height:"320px",cursor:"pointer"}}),n.a.createElement(u["a"],null,"useFullScreen\uff0c\u57fa\u4e8e",n.a.createElement(p,{href:"https://github.com/sindresorhus/screenfull.js/blob/master/src/screenfull.js",text:"screenfull"}),"\u7684\u5143\u7d20\u5168\u5c4fhook\uff0c\u7b80\u5355\u8fdb\u884c\u4e86\u5c01\u88c5;"))},y=r("k1fw");function k(){return n.a.createElement("div",{style:{height:18}})}var w=k,S=e=>e instanceof Function,x=e=>"number"===typeof e,F=4,C=e=>{var t=e.total,r=void 0===t?0:t,n=e.height,l=void 0===n?320:n,o=e.itemHeight,u=void 0===o?32:o,s=e.cacheable,i=void 0!==s&&s,m=Object(a["useRef"])(null),d=Object(a["useState"])([]),f=Object(c["a"])(d,2),b=f[0],v=f[1];Object(a["useEffect"])(()=>{C()},[]);var h=()=>{if(x(u))return r*u;for(var e=0,t=0;t<r;t+=1)e+=u(t);return e},g=e=>x(u)?u:u(e),p=Object(a["useMemo"])(()=>[new Map,h()],[r,u]),E=Object(c["a"])(p,2),j=E[0],O=E[1],y=e=>{if(x(u))return Math.ceil(e/u);var t=0,r=0;while(r<e)r+=g(t),t+=1;return t},k=(e,t)=>{var r=0,a=e;while(r<t)r+=g(a),a+=1;return a},w=e=>{if(x(u))return e*u;if(i){var t=j.get(e);if(t)return t}for(var r=0,a=0;a<e;a+=1)r+=g(a);return i&&j.set(e,r),r},S=()=>{var e=m.current,t=e.scrollTop,a=e.clientHeight,n=y(t),l=k(n,a);return n=n-F<0?0:n-F,l=l+F>r?r:l+F,{start:n,end:l}},C=()=>{for(var e=S(),t=e.start,r=e.end,a=[],n=t;n<r;n+=1)a.push({style:{position:"absolute",width:"100%",height:g(n),top:"".concat(w(n),"px")},index:n});v(a)},_={ref:m,onScroll:e=>{C(),e.preventDefault()},style:{position:"relative",overflow:"auto",height:l}},R={style:{overflow:"hidden",height:O}};return[b,_,R]},_=C,R=["#8868ff","#24cdd0","#ffc84e","#fe657f","#748cfd"],T=()=>{var e=_({total:9996,height:280,itemHeight:54}),t=Object(c["a"])(e,3),r=t[0],a=t[1],l=t[2],s=_({total:9996,height:280,itemHeight:e=>e%2===0?86:54}),i=Object(c["a"])(s,3),m=i[0],d=i[1],f=i[2];return n.a.createElement(o["a"],{label:"useVirtual",time:"2020-08-21"},n.a.createElement("p",null,"Item \u5b9a\u9ad8"),n.a.createElement("div",a,n.a.createElement("div",l,r.map(e=>{var t=e.style,r=e.index;return n.a.createElement("div",{style:Object(y["a"])(Object(y["a"])({},t),{},{display:"flex",justifyContent:"center",alignItems:"center",background:R[r%R.length],borderBottom:"1px solid #e8e8e8"}),key:r},r+1)}))),n.a.createElement(w,null),n.a.createElement("p",null,"Item \u4e0d\u5b9a\u9ad8"),n.a.createElement("div",d,n.a.createElement("div",f,m.map(e=>{var t=e.style,r=e.index;return n.a.createElement("div",{style:Object(y["a"])(Object(y["a"])({},t),{},{display:"flex",justifyContent:"center",alignItems:"center",background:R[r%R.length],borderBottom:"1px solid #e8e8e8"}),key:r},r+1)}))),n.a.createElement(u["a"],null,"useVirtual\uff0c\u65e0\u9650\u957f\u5217\u8868\uff0c\u652f\u6301\u5b50\u9879\u4e0d\u5b9a\u9ad8\u5ea6\uff0c\u89e3\u51b3\u5217\u8868\u6570\u636e\u91cf\u8fc7\u5927\uff0cDOM\u6e32\u67d3\u8fc7\u591a\u7684\u5361\u987f\u95ee\u9898\u3002"))},I=!!window.IntersectionObserver,M=new Map,N=I?new window.IntersectionObserver(e=>{e.forEach(e=>{var t=e.isIntersecting,r=e.intersectionRatio,a=e.target;if(t&&r>0){var n=M.get(a);if(n){var l=n.callback;l(a)}N.unobserve(a)}})},{root:null}):null,q=(e,t)=>{N.observe(e),M.set(e,{callback:t})},z=e=>{N.unobserve(e),M.delete(e)},H=e=>{var t=Object(a["useState"])(!I),r=Object(c["a"])(t,2),n=r[0],l=r[1];return Object(a["useEffect"])(()=>I&&(null===e||void 0===e?void 0:e.current)?(q(e.current,()=>l(!0)),()=>z(e.current)):null,[e]),[n]},P=H,L=()=>{var e=Object(a["useRef"])(),t=P(e),r=Object(c["a"])(t,1),l=r[0];return n.a.createElement(o["a"],{label:"useOnScreen",time:"2020-08-21"},n.a.createElement("div",{ref:e},l?"  \u8fd9\u4e00\u6bb5\u6587\u5b57\u4f1a\u51fa\u73b0\u5728\u89e6\u53d1 IntersectionObserver \u4e8b\u4ef6\u7684\u65f6\u5019\u3002":"\u6ca1\u6709 \u4f60\u8fd8\u6ca1\u6ca1\u770b\u89c1"),n.a.createElement(u["a"],null,"useOnScreen\uff0c\u5f53\u7ec4\u4ef6\u8fdb\u5165\u53ef\u89c6\u533a\u57df\u65f6\u5019\u89e6\u53d1\uff08\u4ec5\u89e6\u53d1\u4e00\u6b21\uff09\uff0c\u53ef\u7528\u4e8e\u56fe\u7247\u548c\u7ec4\u4ef6\u7684\u61d2\u52a0\u8f7d\u3002"))},V=()=>n.a.createElement(o["a"],{label:"useRouter",time:"2020-08-21"},n.a.createElement("pre",null,"\n        react-router\u8def\u7531hook\u7684\u6574\u5408\uff0c\u63d0\u53d6\u4e86\u8def\u7531\u5e38\u7528\u65b9\u6cd5\uff0c\u548c\u89e3\u6790\u67e5\u8be2\u53c2\u6570\u3002\n        const {push, replace, goBack, go, pathname, \n        query, match, location, history} = useRouter();\n      "),n.a.createElement(u["a"],null,"useRouter\uff0c@ref",n.a.createElement(p,{href:"https://usehooks.com/useRouter/",text:"https://usehooks.com/useRouter/"}),"\u3002")),B=10,A=e=>{var t=e.threshold,r=void 0===t?0:t,n=e.loadMore,l=void 0===n?null:n,o=e.height,u=void 0===o?void 0:o,s=e.initLoadMore,i=void 0!==s&&s,m=Object(a["useRef"])(null),d=Object(a["useRef"])(!1),f=Object(a["useState"])(!0),b=Object(c["a"])(f,2),v=b[0],h=b[1],g=Object(a["useState"])(!1),p=Object(c["a"])(g,2),E=p[0],j=p[1];Object(a["useEffect"])(()=>{i&&S(l)&&l()},[]),Object(a["useLayoutEffect"])(()=>{E&&setTimeout(()=>{var e=m.current;e.scrollTop!==e.scrollHeight&&(e.scrollTop=e.scrollHeight)})},[E]);var O=Object(a["useCallback"])(()=>{if(v&&!E){if(!(null===m||void 0===m?void 0:m.current))throw new Error("`ref.current` is null.");var e=m.current,t=e.scrollTop,a=e.scrollHeight,n=e.clientHeight,c=d.current,o=t+n>=a-r-B;o&&!c&&S(l)&&l(),d.current=o}}),y={ref:m,onScroll:e=>{O(),e.preventDefault()}};return void 0!==u&&(y.style={height:u,overflowY:"scroll"}),[{containerProps:y,loading:E},{setLoading:j,setHasMore:h}]},Y=A,D=["#8868ff","#24cdd0","#ffc84e","#fe657f","#748cfd"],J=(e,t)=>new Promise(r=>{setTimeout(()=>r(e()),t)}),Q=()=>{var e=Object(a["useState"])([]),t=Object(c["a"])(e,2),r=t[0],l=t[1],s=()=>{h(!0),J(()=>{l([...r,{},{},{},{},{},{},{}]),h(!1),g(!0)},1800)},i=Y({loadMore:s,height:280,initLoadMore:!0}),m=Object(c["a"])(i,2),d=m[0],f=d.containerProps,b=d.loading,v=m[1],h=v.setLoading,g=v.setHasMore;return n.a.createElement(o["a"],{label:"useInfiniteScroller",time:"2020-08-26"},n.a.createElement("div",f,r.map((e,t)=>n.a.createElement("div",{style:{height:52,display:"flex",justifyContent:"center",alignItems:"center",background:D[t%D.length],borderBottom:"1px solid #e8e8e8"},key:t},t+1)),b?n.a.createElement("p",null,"\u52a0\u8f7d\u4e2d..."):null),n.a.createElement(u["a"],null,"useInfiniteScroller\uff0c\u5217\u8868\u65e0\u9650\u52a0\u8f7d\u7ec4\u4ef6\uff0c\u6eda\u52a8\u5230\u5e95\u90e8\u540e\u52a0\u8f7d\u65b0\u6570\u636e\u3002\u5217\u8868\u5e95\u90e8\u53ef\u4ee5\u589e\u52a0loader\uff0cloading\u65f6\u81ea\u52a8\u5b9a\u4f4d\u5230\u5e95\u90e8\u5c55\u793aloader\u7ec4\u4ef6\u3002"))},U=e=>{var t=Object(a["useState"])(e),r=Object(c["a"])(t,2),n=r[0],l=r[1],o=()=>l(!n);return[n,{toggle:o,setTrue:()=>l(!0),setFalse:()=>l(!1),set:l}]},W=U,G={pageNum:1,pageSize:10},K=e=>{var t=e.errCode,r=e.totalCount,a=e.data;return 0===t?{totalCount:r,data:a}:{totalCount:0,data:[]}},X=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:G,n=W(!1),l=Object(c["a"])(n,2),o=l[0],u=l[1],s=u.setTrue,i=u.setFalse,m=Object(a["useState"])(t),d=Object(c["a"])(m,2),f=d[0],b=d[1],v=Object(a["useState"])(r),h=Object(c["a"])(v,2),g=h[0],p=h[1],E=Object(a["useState"])([]),j=Object(c["a"])(E,2),O=j[0],k=j[1],w=Object(a["useState"])(0),S=Object(c["a"])(w,2),x=S[0],F=S[1],C=()=>{s(),e(Object(y["a"])(Object(y["a"])({},g),f)).then(e=>{var t=K(e);F(t.totalCount),k(t.data)}).finally(i)};Object(a["useEffect"])(()=>{C()},[g]);var _=(e,t)=>p({pageNum:e,pageSize:t}),R=e=>{b(e),p(Object(y["a"])(Object(y["a"])({},g),{},{pageNum:1}))};return[{data:O,loading:o,total:x,pagination:g},{onChange:_,updateQuery:R}]},Z=X,$=(e,t)=>new Promise(r=>{setTimeout(()=>r(e()),t)}),ee=$,te=["key","name","age","address"],re=()=>Math.random().toString(16).slice(2),ae=()=>ee(()=>({errCode:0,data:[{key:re(),name:"\u80e1\u5f66\u7956",age:32,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7"},{key:re(),name:"\u80e1\u5f66\u7956",age:18,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed2\u53f7"},{key:re(),name:"\u80e1\u5f66\u7956",age:22,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed3\u53f7"}],totalCount:198}),500),ne=()=>{var e=Z(ae),t=Object(c["a"])(e,2),r=t[0],a=r.data,l=r.loading,s=r.total,i=r.pagination,m=t[1].onChange,d=Math.ceil(s/i.pageSize),f=()=>{m(i.pageNum+1,i.pageSize)},b=()=>{m(i.pageNum-1,i.pageSize)};return n.a.createElement(o["a"],{label:"useTable",time:"2020-08-26"},n.a.createElement("p",null,l?"\u52a0\u8f7d\u4e2d...":"\u52a0\u8f7d\u5b8c\u6210"),n.a.createElement("p",null," \u5171\u6709 ".concat(s," \u6761 , \u7b2c ").concat(i.pageNum,"/").concat(Math.ceil(s/i.pageSize),"\u9875")),n.a.createElement("table",{border:"1"},n.a.createElement("tbody",null,n.a.createElement("tr",null,te.map(e=>n.a.createElement("th",{key:e},e))),a.map(e=>n.a.createElement("tr",{key:e.key},te.map(t=>n.a.createElement("td",{key:t},e[t])))))),n.a.createElement(w,null),n.a.createElement("button",{onClick:b,type:"submit",disabled:i.pageNum-1===0},"\u4e0a\u4e00\u9875"),n.a.createElement("button",{style:{marginLeft:24},onClick:f,type:"submit",disabled:i.pageNum+1>d},"\u4e0b\u4e00\u9875"),n.a.createElement(u["a"],null,"useTable\uff0c\u63d0\u53d6\u4e86Table\u7ec4\u4ef6\u7684\u5206\u9875\u3001\u8bf7\u6c42\u3001\u54cd\u5e94\u5904\u7406\u3001\u52a0\u8f7d\u72b6\u6001\u903b\u8f91\uff0c\u901a\u8fc7\u66b4\u9732\u7684\u65b9\u6cd5\u6765\u4fee\u6539\u5206\u9875\u3001\u66f4\u6539\u67e5\u8be2\u53c2\u6570\u540e\u91cd\u65b0\u53d1\u8d77\u8bf7\u6c42\u3002 \u4e3b\u8981\u7528\u4e8eAntd Table\u7ec4\u4ef6\u7684\u72b6\u6001hook\u62bd\u79bb\u3002"))};t["default"]=()=>n.a.createElement(l["a"],null,n.a.createElement(O,null),n.a.createElement(ne,null),n.a.createElement(Q,null),n.a.createElement(T,null),n.a.createElement(L,null),n.a.createElement(V,null))}}]);