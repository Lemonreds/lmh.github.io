(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"0Owb":function(e,t,r){"use strict";function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},a.apply(this,arguments)}r.d(t,"a",(function(){return a}))},"0R6B":function(e,t,r){e.exports=r.p+"static/waller.b7ab45a9.jpg"},CPl0:function(e,t,r){e.exports={root:"root___33f24",front:"front___Pz72T",label:"label___3soUH",time:"time___udqxe",content:"content___1yoPg"}},NbDM:function(e,t,r){e.exports={root:"root___39uKF",left:"left___3c3Xg",handler:"handler___27c7N",right:"right___1TmvO"}},Xa7E:function(e,t,r){"use strict";var a=r("q1tI"),n=r.n(a),l=e=>{var t=e.href,r=e.text,a=e.children;return n.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},r||a||t)};t["a"]=l},YkaV:function(e,t,r){e.exports={root:"root___kOfBI"}},kUTx:function(e,t,r){"use strict";var a=r("q1tI"),n=r.n(a),l=r("TSYQ"),o=r.n(l),c=r("YkaV"),i=r.n(c);class s extends n.a.Component{render(){var e=this.props,t=e.children,r=e.className;return n.a.createElement("div",{className:o()(i.a.root,r)},t)}}var u=s;t["a"]=u},orjh:function(e,t,r){e.exports={root:"root___2edV8"}},r3Ns:function(e,t,r){"use strict";var a=r("q1tI"),n=r.n(a),l=r("wiyY"),o=r.n(l);t["a"]=e=>{var t=e.children;return n.a.createElement("div",{className:o.a.root},t)}},sEgR:function(e,t,r){"use strict";var a=r("q1tI"),n=r.n(a),l=r("TSYQ"),o=r.n(l),c=r("CPl0"),i=r.n(c),s=e=>{var t=e.label,r=e.time,a=e.children,l=e.className;return n.a.createElement("section",{className:o()(l,i.a.root)},n.a.createElement("div",{className:i.a.front},n.a.createElement("h3",{className:i.a.label,id:t},t),n.a.createElement("time",{className:i.a.time},r)),n.a.createElement("div",{className:i.a.content},a))};t["a"]=s},t4BC:function(e,t,r){"use strict";var a=r("q1tI"),n=r("I0BZ"),l=e=>{Object(a["useEffect"])(e,[])},o=l,c={x:0,y:0},i={overbound:!0},s=null,u=function(e,t){var r=t.onMouseDown,l=t.onMouseUp,u=t.onMouseMove,d=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i,m=d.overbound,b=Object(a["useRef"])(null),f=Object(a["useRef"])(null);o(()=>{var t=t=>{if(f.current===s&&b.current&&u){var r,a,n=null!==(r=null!==(a=null===e||void 0===e?void 0:e.current)&&void 0!==a?a:e)&&void 0!==r?r:f.current.parentNode,l=t.clientX-c.x,o=t.clientY-c.y;if(!m){l<0&&(l=0),o<0&&(o=0);var i=n.clientWidth,d=n.clientHeight,v=f.current,h=v.clientWidth,g=v.clientHeight;l+h>i&&(l=i-h),o+g>d&&(o=d-g)}u({x:l,y:o})}},r=e=>{f.current===s&&(b.current=!1,l&&l(e))};return Object(n["e"])(window,"mousemove",t),Object(n["e"])(window,"mouseup",r),()=>{Object(n["d"])(window,"mousemove",t),Object(n["d"])(window,"mouseup",r)}});var v={ref:f,onMouseDown:e=>{b.current=!0;var t=e.target||e.srcElement;s=t,c.x=e.clientX-t.offsetLeft,c.y=e.clientY-t.offsetTop,r&&r(e)}};return[v,b]};t["a"]=u},tiwV:function(e,t,r){"use strict";var a=r("q1tI"),n=r.n(a),l=r("orjh"),o=r.n(l);t["a"]=e=>{var t=e.comps,r=e.children;return n.a.createElement("div",{className:o.a.root},t?t.map((e,t)=>n.a.createElement(e,{key:t})):r)}},wiyY:function(e,t,r){e.exports={root:"root___1h4ZC"}},yW7A:function(e,t,r){"use strict";r.r(t);var a=r("q1tI"),n=r.n(a),l=r("tiwV"),o=r("0Owb"),c=r("tJVT"),i=r("sEgR"),s=r("kUTx"),u=r("t4BC"),d=r("Xa7E"),m=r("r3Ns"),b=r("k1fw"),f=r("NbDM"),v=r.n(f);function h(e){var t=e.children,r=e.min,l=void 0===r?0:r,i=e.max,s=void 0===i?1/0:i,d=e.containerWidth,m=void 0===d?0:d,f=e.containerHeight,h=void 0===f?0:f,g=e.initLeftWidth,p=void 0===g?0:g,E=e.handler,j=void 0===E?null:E,O=Object(a["useRef"])(null),y=Object(a["useState"])({x:p,y:0}),x=Object(c["a"])(y,2),w=x[0],k=x[1],S=Object(u["a"])(O,{onMouseMove:e=>{var t=e.x,r=e.y,a=t;a<l&&(a=l),a>s&&(a=s),k({x:a,y:r})}},{overbound:!1}),_=Object(c["a"])(S,1),M=_[0],C=j?n.a.cloneElement(j,Object(b["a"])(Object(b["a"])({},j.props),{},{style:Object(b["a"])(Object(b["a"])({},j.props.style),{},{pointerEvents:"none"})})):n.a.createElement("span",{style:{fontSize:18,pointerEvents:"none"}},"\u300b");return n.a.createElement("div",{ref:O,className:v.a.root,style:{width:m,height:h}},n.a.createElement("div",{className:v.a.left,style:{width:w.x}},t[0],n.a.createElement("div",Object(o["a"])({className:v.a.handler},M),C)),n.a.createElement("div",{className:v.a.right,style:{width:m-w.x}},t[1]))}for(var g=h,p=g,E=()=>{var e=Object(a["useRef"])(null),t=Object(a["useState"])("Drag Element base"),r=Object(c["a"])(t,2),l=r[0],d=r[1],b=Object(a["useState"])({x:20,y:10}),f=Object(c["a"])(b,2),v=f[0],h=f[1],g=Object(a["useState"])({x:20,y:100}),E=Object(c["a"])(g,2),j=E[0],O=E[1],y=Object(a["useState"])({x:280,y:100}),x=Object(c["a"])(y,2),w=x[0],k=x[1],S=Object(u["a"])(e,{onMouseMove:e=>{var t=e.x,r=e.y;h({x:t,y:r}),d("Drag Element moving")},onMouseDown:e=>d("Drag Element start"),onMouseUp:()=>d("Drag Element stop")},{overbound:!1}),_=Object(c["a"])(S,2),M=_[0],C=(_[1],Object(u["a"])(e,{onMouseMove:e=>{var t=e.x,r=e.y;return O({x:t,y:r})}},{overbound:!1})),F=Object(c["a"])(C,1),N=F[0],I=Object(u["a"])(e,{onMouseMove:e=>{var t=e.x,r=e.y;return k({x:t,y:r})}},{overbound:!0}),R=Object(c["a"])(I,1),T=R[0];return n.a.createElement(i["a"],{label:"useDraggable",time:"2020-09-23"},n.a.createElement(m["a"],null,"\u57fa\u7840\u4f7f\u7528\uff0c\u662f\u5426\u5141\u8bb8\u62d6\u62fdDOM\u6ea2\u51fa\u5bb9\u5668"),n.a.createElement("div",{ref:e,style:{width:400,height:220,margin:"0 auto",border:"1px solid #efefef",position:"relative"}},n.a.createElement("div",Object(o["a"])({},M,{style:{width:60,height:60,background:"rgb(199, 240, 210)",fontSize:"14px",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid #efefef",position:"absolute",userSelect:"none",left:v.x,top:v.y}}),l),n.a.createElement("div",Object(o["a"])({},N,{style:{width:100,height:110,background:"#fbe9eb",fontSize:"13px",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid #efefef",userSelect:"none",position:"absolute",left:j.x,top:j.y}}),"DragEle \u4e0d\u5141\u8bb8\u62d6\u62fd\u51fa\u5bb9\u5668"),n.a.createElement("div",Object(o["a"])({},T,{style:{width:85,height:65,background:"rgb(210, 54, 105)",fontSize:"13px",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid #efefef",userSelect:"none",position:"absolute",left:w.x,top:w.y}}),"DragEle \u5141\u8bb8\u62d6\u62fd\u51fa\u5bb9\u5668")),n.a.createElement(m["a"],null,"\u4e24\u680f\u5e03\u5c40\u7684\u4f38\u7f29\u63a7\u5236\uff0cLeft\u5143\u7d20\u5bb9\u5668\u7684\u5bbd\u5ea6\u8303\u56f4\u8bbe\u7f6e\u4e3a [50,500]\uff0c\u907f\u514d\u574d\u7f29"),n.a.createElement(p,{containerWidth:550,containerHeight:220,min:50,max:500,initLeftWidth:100,handler:n.a.createElement("div",{style:{width:4,height:"100%",background:"rgb(77, 81, 100)"}})},n.a.createElement("div",{style:{backgroundColor:"rgb(36, 205, 208)",color:"#fff",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},"left"),n.a.createElement("div",{style:{backgroundColor:"rgb(116, 140, 253)",color:"#fff",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},"right")),n.a.createElement(s["a"],null,"useDraggable\uff0c\u4f7f\u5bb9\u5668\u5185\u7684DOM\u5143\u7d20\u53d8\u5f97\u53ef\u62d6\u62fd\u3002"))},j=r("I0BZ"),O=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],y={},x=0;x<O.length;x+=1){var w=O[x];if(w[1]in document)for(var k=0;k<w.length;k+=1)y[O[0][k]]=w[k]}var S=e=>{var t=Object(a["useState"])(!1),r=Object(c["a"])(t,2),n=r[0],l=r[1],o=()=>{l(!!document[y.fullscreenElement])};Object(a["useEffect"])(()=>{var t=null;return e.current&&(t=Object(j["e"])(document,"".concat(y.fullscreenchange),o)),t},[e.current]);var i=()=>e.current[y.requestFullscreen](),s=()=>document[y.exitFullscreen](),u=n?s:i;return[n,{request:i,toggle:u,exit:s}]},_=S,M=r("0R6B"),C=r.n(M),F=()=>{var e=Object(a["useRef"])(),t=_(e),r=Object(c["a"])(t,2),l=(r[0],r[1]),o=l.toggle;l.request,l.exit;return n.a.createElement(i["a"],{label:"useFullScreen",time:"2020-09-01"},n.a.createElement("img",{src:C.a,alt:"1",ref:e,onClick:o,style:{width:"100%",height:"320px",cursor:"pointer"}}),n.a.createElement(s["a"],null,"useFullScreen\uff0c\u57fa\u4e8e",n.a.createElement(d["a"],{href:"https://github.com/sindresorhus/screenfull.js/blob/master/src/screenfull.js",text:"screenfull"}),"\u7684\u5143\u7d20\u5168\u5c4fhook\uff0c\u7b80\u5355\u8fdb\u884c\u4e86\u5c01\u88c5;"))};function N(){return n.a.createElement("div",{style:{height:18}})}var I=N,R=e=>e instanceof Function,T=e=>"number"===typeof e,D=4,q=e=>{var t=e.total,r=void 0===t?0:t,n=e.height,l=void 0===n?320:n,o=e.itemHeight,i=void 0===o?32:o,s=e.cacheable,u=void 0!==s&&s,d=Object(a["useRef"])(null),m=Object(a["useState"])([]),b=Object(c["a"])(m,2),f=b[0],v=b[1];Object(a["useEffect"])(()=>{S()},[]);var h=()=>{if(T(i))return r*i;for(var e=0,t=0;t<r;t+=1)e+=i(t);return e},g=e=>T(i)?i:i(e),p=Object(a["useMemo"])(()=>[new Map,h()],[r,i]),E=Object(c["a"])(p,2),j=E[0],O=E[1],y=e=>{if(T(i))return Math.ceil(e/i);var t=0,r=0;while(r<e)r+=g(t),t+=1;return t},x=(e,t)=>{var r=0,a=e;while(r<t)r+=g(a),a+=1;return a},w=e=>{if(T(i))return e*i;if(u){var t=j.get(e);if(t)return t}for(var r=0,a=0;a<e;a+=1)r+=g(a);return u&&j.set(e,r),r},k=()=>{var e=d.current,t=e.scrollTop,a=e.clientHeight,n=y(t),l=x(n,a);return n=n-D<0?0:n-D,l=l+D>r?r:l+D,{start:n,end:l}},S=()=>{for(var e=k(),t=e.start,r=e.end,a=[],n=t;n<r;n+=1)a.push({style:{position:"absolute",width:"100%",height:g(n),top:"".concat(w(n),"px")},index:n});v(a)},_={ref:d,onScroll:e=>{S(),e.preventDefault()},style:{position:"relative",overflow:"auto",height:l}},M={style:{overflow:"hidden",height:O}};return[f,_,M]},z=q,H=["#8868ff","#24cdd0","#ffc84e","#fe657f","#748cfd"],B=()=>{var e=z({total:9996,height:280,itemHeight:54}),t=Object(c["a"])(e,3),r=t[0],a=t[1],l=t[2],o=z({total:9996,height:280,itemHeight:e=>e%2===0?86:54}),u=Object(c["a"])(o,3),d=u[0],f=u[1],v=u[2];return n.a.createElement(i["a"],{label:"useVirtual",time:"2020-08-21"},n.a.createElement(m["a"],null,"Item \u5b9a\u9ad8"),n.a.createElement("div",a,n.a.createElement("div",l,r.map(e=>{var t=e.style,r=e.index;return n.a.createElement("div",{style:Object(b["a"])(Object(b["a"])({},t),{},{display:"flex",justifyContent:"center",alignItems:"center",background:H[r%H.length],borderBottom:"1px solid #e8e8e8"}),key:r},r+1)}))),n.a.createElement(I,null),n.a.createElement(m["a"],null,"Item \u4e0d\u5b9a\u9ad8"),n.a.createElement("div",f,n.a.createElement("div",v,d.map(e=>{var t=e.style,r=e.index;return n.a.createElement("div",{style:Object(b["a"])(Object(b["a"])({},t),{},{display:"flex",justifyContent:"center",alignItems:"center",background:H[r%H.length],borderBottom:"1px solid #e8e8e8"}),key:r},r+1)}))),n.a.createElement(s["a"],null,"useVirtual\uff0c\u65e0\u9650\u957f\u5217\u8868\uff0c\u652f\u6301\u5b50\u9879\u4e0d\u5b9a\u9ad8\u5ea6\uff0c\u89e3\u51b3\u5217\u8868\u6570\u636e\u91cf\u8fc7\u5927\uff0cDOM\u6e32\u67d3\u8fc7\u591a\u7684\u5361\u987f\u95ee\u9898\u3002"))},L=!!window.IntersectionObserver,P=new Map,Y=L?new window.IntersectionObserver(e=>{e.forEach(e=>{var t=e.isIntersecting,r=e.intersectionRatio,a=e.target;if(t&&r>0){var n=P.get(a);if(n){var l=n.callback;l(a)}Y.unobserve(a)}})},{root:null}):null,V=(e,t)=>{Y.observe(e),P.set(e,{callback:t})},W=e=>{Y.unobserve(e),P.delete(e)},U=e=>{var t=Object(a["useState"])(!L),r=Object(c["a"])(t,2),n=r[0],l=r[1];return Object(a["useEffect"])(()=>L&&(null===e||void 0===e?void 0:e.current)?(V(e.current,()=>l(!0)),()=>W(e.current)):null,[e]),[n]},X=U,J=()=>{var e=Object(a["useRef"])(),t=X(e),r=Object(c["a"])(t,1),l=r[0];return n.a.createElement(i["a"],{label:"useOnScreen",time:"2020-08-21"},n.a.createElement("div",{ref:e},l?"  \u8fd9\u4e00\u6bb5\u6587\u5b57\u4f1a\u51fa\u73b0\u5728\u89e6\u53d1 IntersectionObserver \u4e8b\u4ef6\u7684\u65f6\u5019\u3002":"\u6ca1\u6709 \u4f60\u8fd8\u6ca1\u6ca1\u770b\u89c1"),n.a.createElement(s["a"],null,"useOnScreen\uff0c\u5f53\u7ec4\u4ef6\u8fdb\u5165\u53ef\u89c6\u533a\u57df\u65f6\u5019\u89e6\u53d1\uff08\u4ec5\u89e6\u53d1\u4e00\u6b21\uff09\uff0c\u53ef\u7528\u4e8e\u56fe\u7247\u548c\u7ec4\u4ef6\u7684\u61d2\u52a0\u8f7d\u3002"))},Q=()=>n.a.createElement(i["a"],{label:"useRouter",time:"2020-08-21"},n.a.createElement("pre",null,"\n        react-router\u8def\u7531hook\u7684\u6574\u5408\uff0c\u63d0\u53d6\u4e86\u8def\u7531\u5e38\u7528\u65b9\u6cd5\uff0c\u548c\u89e3\u6790\u67e5\u8be2\u53c2\u6570\u3002\n        const {push, replace, goBack, go, pathname, \n        query, match, location, history} = useRouter();\n      "),n.a.createElement(s["a"],null,"useRouter\uff0c@ref",n.a.createElement(d["a"],{href:"https://usehooks.com/useRouter/",text:"https://usehooks.com/useRouter/"}),"\u3002")),Z=10,A=e=>{var t=e.threshold,r=void 0===t?0:t,n=e.loadMore,l=void 0===n?null:n,o=e.height,i=void 0===o?void 0:o,s=e.initLoadMore,u=void 0!==s&&s,d=Object(a["useRef"])(null),m=Object(a["useRef"])(!1),b=Object(a["useState"])(!0),f=Object(c["a"])(b,2),v=f[0],h=f[1],g=Object(a["useState"])(!1),p=Object(c["a"])(g,2),E=p[0],j=p[1];Object(a["useEffect"])(()=>{u&&R(l)&&l()},[]),Object(a["useLayoutEffect"])(()=>{E&&setTimeout(()=>{var e=d.current;e.scrollTop!==e.scrollHeight&&(e.scrollTop=e.scrollHeight)})},[E]);var O=Object(a["useCallback"])(()=>{if(v&&!E){if(!(null===d||void 0===d?void 0:d.current))throw new Error("`ref.current` is null.");var e=d.current,t=e.scrollTop,a=e.scrollHeight,n=e.clientHeight,o=m.current,c=t+n>=a-r-Z;c&&!o&&R(l)&&l(),m.current=c}}),y={ref:d,onScroll:e=>{O(),e.preventDefault()}};return void 0!==i&&(y.style={height:i,overflowY:"scroll"}),[{containerProps:y,loading:E},{setLoading:j,setHasMore:h}]},K=A,G=["#8868ff","#24cdd0","#ffc84e","#fe657f","#748cfd"],$=(e,t)=>new Promise(r=>{setTimeout(()=>r(e()),t)}),ee=()=>{var e=Object(a["useState"])([]),t=Object(c["a"])(e,2),r=t[0],l=t[1],o=()=>{h(!0),$(()=>{l([...r,{},{},{},{},{},{},{}]),h(!1),g(!0)},1800)},u=K({loadMore:o,height:280,initLoadMore:!0}),d=Object(c["a"])(u,2),m=d[0],b=m.containerProps,f=m.loading,v=d[1],h=v.setLoading,g=v.setHasMore;return n.a.createElement(i["a"],{label:"useInfiniteScroller",time:"2020-08-26"},n.a.createElement("div",b,r.map((e,t)=>n.a.createElement("div",{style:{height:52,display:"flex",justifyContent:"center",alignItems:"center",background:G[t%G.length],borderBottom:"1px solid #e8e8e8"},key:t},t+1)),f?n.a.createElement("p",null,"\u52a0\u8f7d\u4e2d..."):null),n.a.createElement(s["a"],null,"useInfiniteScroller\uff0c\u5217\u8868\u65e0\u9650\u52a0\u8f7d\u7ec4\u4ef6\uff0c\u6eda\u52a8\u5230\u5e95\u90e8\u540e\u52a0\u8f7d\u65b0\u6570\u636e\u3002\u5217\u8868\u5e95\u90e8\u53ef\u4ee5\u589e\u52a0loader\uff0cloading\u65f6\u81ea\u52a8\u5b9a\u4f4d\u5230\u5e95\u90e8\u5c55\u793aloader\u7ec4\u4ef6\u3002"))},te=e=>{var t=Object(a["useState"])(e),r=Object(c["a"])(t,2),n=r[0],l=r[1],o=()=>l(!n);return[n,{toggle:o,setTrue:()=>l(!0),setFalse:()=>l(!1),set:l}]},re=te,ae={pageNum:1,pageSize:10},ne=e=>{var t=e.errCode,r=e.totalCount,a=e.data;return 0===t?{totalCount:r,data:a}:{totalCount:0,data:[]}},le=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:ae,n=re(!1),l=Object(c["a"])(n,2),o=l[0],i=l[1],s=i.setTrue,u=i.setFalse,d=Object(a["useState"])(t),m=Object(c["a"])(d,2),f=m[0],v=m[1],h=Object(a["useState"])(r),g=Object(c["a"])(h,2),p=g[0],E=g[1],j=Object(a["useState"])([]),O=Object(c["a"])(j,2),y=O[0],x=O[1],w=Object(a["useState"])(0),k=Object(c["a"])(w,2),S=k[0],_=k[1],M=()=>{s(),e(Object(b["a"])(Object(b["a"])({},p),f)).then(e=>{var t=ne(e);_(t.totalCount),x(t.data)}).finally(u)};Object(a["useEffect"])(()=>{M()},[p]);var C=(e,t)=>E({pageNum:e,pageSize:t}),F=e=>{v(e),E(Object(b["a"])(Object(b["a"])({},p),{},{pageNum:1}))};return[{data:y,loading:o,total:S,pagination:p},{onChange:C,updateQuery:F}]},oe=le,ce=(e,t)=>new Promise(r=>{setTimeout(()=>r(e()),t)}),ie=ce,se=["key","name","age","address"],ue=()=>Math.random().toString(16).slice(2),de=()=>ie(()=>({errCode:0,data:[{key:ue(),name:"\u80e1\u5f66\u7956",age:32,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7"},{key:ue(),name:"\u80e1\u5f66\u7956",age:18,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed2\u53f7"},{key:ue(),name:"\u80e1\u5f66\u7956",age:22,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed3\u53f7"}],totalCount:198}),500),me=()=>{var e=oe(de),t=Object(c["a"])(e,2),r=t[0],a=r.data,l=r.loading,o=r.total,u=r.pagination,d=t[1].onChange,m=Math.ceil(o/u.pageSize),b=()=>{d(u.pageNum+1,u.pageSize)},f=()=>{d(u.pageNum-1,u.pageSize)};return n.a.createElement(i["a"],{label:"useTable",time:"2020-08-26"},n.a.createElement("p",null,l?"\u52a0\u8f7d\u4e2d...":"\u52a0\u8f7d\u5b8c\u6210"),n.a.createElement("p",null," \u5171\u6709 ".concat(o," \u6761 , \u7b2c ").concat(u.pageNum,"/").concat(Math.ceil(o/u.pageSize),"\u9875")),n.a.createElement("table",{border:"1"},n.a.createElement("tbody",null,n.a.createElement("tr",null,se.map(e=>n.a.createElement("th",{key:e},e))),a.map(e=>n.a.createElement("tr",{key:e.key},se.map(t=>n.a.createElement("td",{key:t},e[t])))))),n.a.createElement(I,null),n.a.createElement("button",{onClick:f,type:"submit",disabled:u.pageNum-1===0},"\u4e0a\u4e00\u9875"),n.a.createElement("button",{style:{marginLeft:24},onClick:b,type:"submit",disabled:u.pageNum+1>m},"\u4e0b\u4e00\u9875"),n.a.createElement(s["a"],null,"useTable\uff0c\u63d0\u53d6\u4e86Table\u7ec4\u4ef6\u7684\u5206\u9875\u3001\u8bf7\u6c42\u3001\u54cd\u5e94\u5904\u7406\u3001\u52a0\u8f7d\u72b6\u6001\u903b\u8f91\uff0c\u901a\u8fc7\u66b4\u9732\u7684\u65b9\u6cd5\u6765\u4fee\u6539\u5206\u9875\u3001\u66f4\u6539\u67e5\u8be2\u53c2\u6570\u540e\u91cd\u65b0\u53d1\u8d77\u8bf7\u6c42\u3002 \u4e3b\u8981\u7528\u4e8eAntd Table\u7ec4\u4ef6\u7684\u72b6\u6001hook\u62bd\u79bb\u3002"))},be=[E,F,me,ee,B,J,Q];t["default"]=()=>n.a.createElement(l["a"],{comps:be})}}]);