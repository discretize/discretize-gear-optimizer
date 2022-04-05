var gd=Object.defineProperty,bd=Object.defineProperties;var vd=Object.getOwnPropertyDescriptors;var $r=Object.getOwnPropertySymbols;var Ra=Object.prototype.hasOwnProperty,Aa=Object.prototype.propertyIsEnumerable;var Ta=(e,n,t)=>n in e?gd(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,ue=(e,n)=>{for(var t in n||(n={}))Ra.call(n,t)&&Ta(e,t,n[t]);if($r)for(var t of $r(n))Aa.call(n,t)&&Ta(e,t,n[t]);return e},Ne=(e,n)=>bd(e,vd(n));var Ir=(e,n)=>{var t={};for(var r in e)Ra.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&$r)for(var r of $r(e))n.indexOf(r)<0&&Aa.call(e,r)&&(t[r]=e[r]);return t};import{r as C,R as xd,i as Zn,_ as g,u as St,a as xn,s as Il,b as Rn,o as Tn,j as i,c as fe,P as yd,d as At,g as Pe,e as we,f as Q,h as y,k as vi,l as Ce,C as wd,m as L,n as Ll,p as Mn,q as xi,t as El,v as kt,w as V,x as ye,y as Cd,T as Ml,z as Dt,A as hr,B as Bn,D as Ht,E as $e,F as Xr,G as Zr,H as Sd,I as Io,J as Lr,K as Da,L as Er,M as kd,N as mo,O as Pd,S as Bl,Q as Ol,U as Nl,V as Td,W as yi,X as wi,Y as j,Z as Rd,$ as Ad,a0 as Ci,a1 as zl,a2 as Dd,a3 as $d,a4 as ur,a5 as $a,a6 as Id,a7 as Ld,a8 as Ed,a9 as Md,aa as Fl,ab as Bd,ac as _l,ad as Od,ae as mn,af as Nn,ag as dt,ah as zn,ai as Nd,aj as zd,ak as Hl,al as Ke,am as Je,an as Y,ao as Ee,ap as pt,aq as J,ar as Fn,as as Wl,at as q,au as ho,av as Vl,aw as Fd,ax as jl,ay as Se,az as qn,aA as eo,aB as _d,aC as go,aD as Hd,aE as et,aF as X,aG as he,aH as ge,aI as Ul,aJ as Sr,aK as Wd,aL as Vd,aM as Ia,aN as La,aO as Ea,aP as jd,aQ as Ud,aR as Si,aS as gr,aT as ki,aU as qd,aV as Gd,aW as ql,aX as Zo,aY as dr,aZ as Gl,a_ as Yd,a$ as Kd,b0 as Yl,b1 as Kl,b2 as Ql,b3 as Jl,b4 as Qd,b5 as Jd,b6 as Xd,b7 as kn,b8 as Zd,b9 as ep,ba as np,bb as vn,bc as Lo,bd as er,be as Ma,bf as Ba,bg as nt,bh as tp,bi as Eo,bj as Oa,bk as rp,bl as op,bm as ei,bn as Na,bo as za,bp as ip,bq as ap,br as sp,bs as lp,bt as cp,bu as Fa,bv as up,bw as Pi,bx as Ze,by as pr,bz as dp,bA as pp,bB as Pn,bC as fp,bD as mp,bE as nr,bF as no,bG as _a,bH as hp,bI as gp,bJ as Xl,bK as bp,bL as vp,bM as ni,bN as Ha,bO as xp,bP as yp,bQ as bo,bR as wp,bS as Cp,bT as Sp,bU as Zl,bV as ec,bW as nc,bX as tc,bY as rc,bZ as oc,b_ as kp,b$ as Pp,c0 as Tp,c1 as ic,c2 as Rp,c3 as Ap,c4 as Dp,c5 as $p,c6 as Ip,c7 as Lp,c8 as Ep,c9 as Mp,ca as Ti,cb as Bp,cc as Op,cd as Np,ce as zp,cf as Un,cg as Fp,ch as Wa,ci as to,cj as _p,ck as _t,cl as wt,cm as Hp,cn as Wp,co as Vp,cp as jp,cq as Up,cr as ac,cs as sc,ct as lc,cu as qp,cv as Gp,cw as Yp,cx as Kp,cy as Mo,cz as Qp,cA as Jp,cB as cc,cC as Xp,cD as Zp,cE as uc,cF as ef,cG as nf,cH as tf,cI as rf,cJ as of,cK as af,cL as sf,cM as lf,cN as cf,cO as uf,cP as ti,cQ as df,cR as pf,cS as ff,cT as dc,cU as Va,cV as mf,cW as ja,cX as hf,cY as gf,cZ as bf,c_ as vf,c$ as xf,d0 as yf,d1 as wf,d2 as Cf,d3 as Ua,d4 as Bo,d5 as Sf,d6 as kf,d7 as Pf,d8 as Tf,d9 as Rf,da as Af,db as Df,dc as $f,dd as If,de as Lf,df as Ef}from"./queryParam.80802935.js";function Mf(e,n){return()=>null}function Bf(e,n){return()=>null}let qa=0;function Of(e){const[n,t]=C.exports.useState(e),r=e||n;return C.exports.useEffect(()=>{n==null&&(qa+=1,t(`mui-${qa}`))},[n]),r}const Ga=xd["useId"];function kr(e){if(Ga!==void 0){const n=Ga();return e!=null?e:n}return Of(e)}function Nf(e,n,t,r,o){return null}const zf={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"};var Ff=zf;function lt(e,n={},t){return Zn(e)?n:g({},n,{ownerState:g({},n.ownerState,t)})}function Ya(e){return typeof e.normalize!="undefined"?e.normalize("NFD").replace(/[\u0300-\u036f]/g,""):e}function _f(e={}){const{ignoreAccents:n=!0,ignoreCase:t=!0,limit:r,matchFrom:o="any",stringify:a,trim:s=!1}=e;return(l,{inputValue:c,getOptionLabel:u})=>{let d=s?c.trim():c;t&&(d=d.toLowerCase()),n&&(d=Ya(d));const p=l.filter(m=>{let f=(a||u)(m);return t&&(f=f.toLowerCase()),n&&(f=Ya(f)),o==="start"?f.indexOf(d)===0:f.indexOf(d)>-1});return typeof r=="number"?p.slice(0,r):p}}function Oo(e,n){for(let t=0;t<e.length;t+=1)if(n(e[t]))return t;return-1}const Hf=_f(),Ka=5;function Wf(e){const{autoComplete:n=!1,autoHighlight:t=!1,autoSelect:r=!1,blurOnSelect:o=!1,disabled:a,clearOnBlur:s=!e.freeSolo,clearOnEscape:l=!1,componentName:c="useAutocomplete",defaultValue:u=e.multiple?[]:null,disableClearable:d=!1,disableCloseOnSelect:p=!1,disabledItemsFocusable:m=!1,disableListWrap:f=!1,filterOptions:b=Hf,filterSelectedOptions:v=!1,freeSolo:h=!1,getOptionDisabled:x,getOptionLabel:w=N=>{var M;return(M=N.label)!=null?M:N},isOptionEqualToValue:k=(N,M)=>N===M,groupBy:T,handleHomeEndKeys:R=!e.freeSolo,id:A,includeInputInList:$=!1,inputValue:D,multiple:E=!1,onChange:S,onClose:P,onHighlightChange:B,onInputChange:I,onOpen:O,open:z,openOnFocus:_=!1,options:H,readOnly:G=!1,selectOnFocus:W=!e.freeSolo,value:U}=e,te=kr(A);let Z=w;Z=N=>{const M=w(N);return typeof M!="string"?String(M):M};const re=C.exports.useRef(!1),de=C.exports.useRef(!0),ce=C.exports.useRef(null),K=C.exports.useRef(null),[me,be]=C.exports.useState(null),[oe,ae]=C.exports.useState(-1),Ie=t?0:-1,We=C.exports.useRef(Ie),[se,tn]=St({controlled:U,default:u,name:c}),[Te,an]=St({controlled:D,default:"",name:c,state:"inputValue"}),[rn,Me]=C.exports.useState(!1),Be=C.exports.useCallback((N,M)=>{if(!(E?se.length<M.length:M!==null)&&!s)return;let ve;if(E)ve="";else if(M==null)ve="";else{const je=Z(M);ve=typeof je=="string"?je:""}Te!==ve&&(an(ve),I&&I(N,ve,"reset"))},[Z,Te,E,I,an,s,se]),Re=C.exports.useRef();C.exports.useEffect(()=>{const N=se!==Re.current;Re.current=se,!(rn&&!N)&&(h&&!N||Be(null,se))},[se,Be,rn,Re,h]);const[Fe,on]=St({controlled:z,default:!1,name:c,state:"open"}),[Qe,F]=C.exports.useState(!0),ee=!E&&se!=null&&Te===Z(se),ne=Fe&&!G,le=ne?b(H.filter(N=>!(v&&(E?se:[se]).some(M=>M!==null&&k(N,M)))),{inputValue:ee&&Qe?"":Te,getOptionLabel:Z}):[],_e=Fe&&le.length>0&&!G,Ue=xn(N=>{N===-1?ce.current.focus():me.querySelector(`[data-tag-index="${N}"]`).focus()});C.exports.useEffect(()=>{E&&oe>se.length-1&&(ae(-1),Ue(-1))},[se,E,oe,Ue]);function ke(N,M){if(!K.current||N===-1)return-1;let pe=N;for(;;){if(M==="next"&&pe===le.length||M==="previous"&&pe===-1)return-1;const ve=K.current.querySelector(`[data-option-index="${pe}"]`),je=m?!1:!ve||ve.disabled||ve.getAttribute("aria-disabled")==="true";if(ve&&!ve.hasAttribute("tabindex")||je)pe+=M==="next"?1:-1;else return pe}}const De=xn(({event:N,index:M,reason:pe="auto"})=>{if(We.current=M,M===-1?ce.current.removeAttribute("aria-activedescendant"):ce.current.setAttribute("aria-activedescendant",`${te}-option-${M}`),B&&B(N,M===-1?null:le[M],pe),!K.current)return;const ve=K.current.querySelector('[role="option"].Mui-focused');ve&&(ve.classList.remove("Mui-focused"),ve.classList.remove("Mui-focusVisible"));const je=K.current.parentElement.querySelector('[role="listbox"]');if(!je)return;if(M===-1){je.scrollTop=0;return}const cn=K.current.querySelector(`[data-option-index="${M}"]`);if(!!cn&&(cn.classList.add("Mui-focused"),pe==="keyboard"&&cn.classList.add("Mui-focusVisible"),je.scrollHeight>je.clientHeight&&pe!=="mouse")){const en=cn,jn=je.clientHeight+je.scrollTop,Pa=en.offsetTop+en.offsetHeight;Pa>jn?je.scrollTop=Pa-je.clientHeight:en.offsetTop-en.offsetHeight*(T?1.3:0)<je.scrollTop&&(je.scrollTop=en.offsetTop-en.offsetHeight*(T?1.3:0))}}),xe=xn(({event:N,diff:M,direction:pe="next",reason:ve="auto"})=>{if(!ne)return;const cn=ke((()=>{const en=le.length-1;if(M==="reset")return Ie;if(M==="start")return 0;if(M==="end")return en;const jn=We.current+M;return jn<0?jn===-1&&$?-1:f&&We.current!==-1||Math.abs(M)>1?0:en:jn>en?jn===en+1&&$?-1:f||Math.abs(M)>1?en:0:jn})(),pe);if(De({index:cn,reason:ve,event:N}),n&&M!=="reset")if(cn===-1)ce.current.value=Te;else{const en=Z(le[cn]);ce.current.value=en,en.toLowerCase().indexOf(Te.toLowerCase())===0&&Te.length>0&&ce.current.setSelectionRange(Te.length,en.length)}}),Ve=C.exports.useCallback(()=>{if(!ne)return;const N=E?se[0]:se;if(le.length===0||N==null){xe({diff:"reset"});return}if(!!K.current){if(N!=null){const M=le[We.current];if(E&&M&&Oo(se,ve=>k(M,ve))!==-1)return;const pe=Oo(le,ve=>k(ve,N));pe===-1?xe({diff:"reset"}):De({index:pe});return}if(We.current>=le.length-1){De({index:le.length-1});return}De({index:We.current})}},[le.length,E?!1:se,v,xe,De,ne,Te,E]),sn=xn(N=>{Il(K,N),N&&Ve()});C.exports.useEffect(()=>{Ve()},[Ve]);const He=N=>{Fe||(on(!0),F(!0),O&&O(N))},it=(N,M)=>{!Fe||(on(!1),P&&P(N,M))},at=(N,M,pe,ve)=>{if(Array.isArray(se)){if(se.length===M.length&&se.every((je,cn)=>je===M[cn]))return}else if(se===M)return;S&&S(N,M,pe,ve),tn(M)},ln=C.exports.useRef(!1),Ye=(N,M,pe="selectOption",ve="options")=>{let je=pe,cn=M;if(E){cn=Array.isArray(se)?se.slice():[];const en=Oo(cn,jn=>k(M,jn));en===-1?cn.push(M):ve!=="freeSolo"&&(cn.splice(en,1),je="removeOption")}Be(N,cn),at(N,cn,je,{option:M}),!p&&!N.ctrlKey&&!N.metaKey&&it(N,je),(o===!0||o==="touch"&&ln.current||o==="mouse"&&!ln.current)&&ce.current.blur()};function On(N,M){if(N===-1)return-1;let pe=N;for(;;){if(M==="next"&&pe===se.length||M==="previous"&&pe===-1)return-1;const ve=me.querySelector(`[data-tag-index="${pe}"]`);if(!ve||!ve.hasAttribute("tabindex")||ve.disabled||ve.getAttribute("aria-disabled")==="true")pe+=M==="next"?1:-1;else return pe}}const Ro=(N,M)=>{if(!E)return;it(N,"toggleInput");let pe=oe;oe===-1?Te===""&&M==="previous"&&(pe=se.length-1):(pe+=M==="next"?1:-1,pe<0&&(pe=0),pe===se.length&&(pe=-1)),pe=On(pe,M),ae(pe),Ue(pe)},Dr=N=>{re.current=!0,an(""),I&&I(N,"","clear"),at(N,E?[]:null,"clear")},Ca=N=>M=>{if(N.onKeyDown&&N.onKeyDown(M),!M.defaultMuiPrevented&&(oe!==-1&&["ArrowLeft","ArrowRight"].indexOf(M.key)===-1&&(ae(-1),Ue(-1)),M.which!==229))switch(M.key){case"Home":ne&&R&&(M.preventDefault(),xe({diff:"start",direction:"next",reason:"keyboard",event:M}));break;case"End":ne&&R&&(M.preventDefault(),xe({diff:"end",direction:"previous",reason:"keyboard",event:M}));break;case"PageUp":M.preventDefault(),xe({diff:-Ka,direction:"previous",reason:"keyboard",event:M}),He(M);break;case"PageDown":M.preventDefault(),xe({diff:Ka,direction:"next",reason:"keyboard",event:M}),He(M);break;case"ArrowDown":M.preventDefault(),xe({diff:1,direction:"next",reason:"keyboard",event:M}),He(M);break;case"ArrowUp":M.preventDefault(),xe({diff:-1,direction:"previous",reason:"keyboard",event:M}),He(M);break;case"ArrowLeft":Ro(M,"previous");break;case"ArrowRight":Ro(M,"next");break;case"Enter":if(We.current!==-1&&ne){const pe=le[We.current],ve=x?x(pe):!1;if(M.preventDefault(),ve)return;Ye(M,pe,"selectOption"),n&&ce.current.setSelectionRange(ce.current.value.length,ce.current.value.length)}else h&&Te!==""&&ee===!1&&(E&&M.preventDefault(),Ye(M,Te,"createOption","freeSolo"));break;case"Escape":ne?(M.preventDefault(),M.stopPropagation(),it(M,"escape")):l&&(Te!==""||E&&se.length>0)&&(M.preventDefault(),M.stopPropagation(),Dr(M));break;case"Backspace":if(E&&!G&&Te===""&&se.length>0){const pe=oe===-1?se.length-1:oe,ve=se.slice();ve.splice(pe,1),at(M,ve,"removeOption",{option:se[pe]})}break}},Ao=N=>{Me(!0),_&&!re.current&&He(N)},Zt=N=>{if(K.current!==null&&K.current.parentElement.contains(document.activeElement)){ce.current.focus();return}Me(!1),de.current=!0,re.current=!1,r&&We.current!==-1&&ne?Ye(N,le[We.current],"blur"):r&&h&&Te!==""?Ye(N,Te,"blur","freeSolo"):s&&Be(N,se),it(N,"blur")},Oe=N=>{const M=N.target.value;Te!==M&&(an(M),F(!1),I&&I(N,M,"input")),M===""?!d&&!E&&at(N,null,"clear"):He(N)},bn=N=>{De({event:N,index:Number(N.currentTarget.getAttribute("data-option-index")),reason:"mouse"})},st=()=>{ln.current=!0},Do=N=>{const M=Number(N.currentTarget.getAttribute("data-option-index"));Ye(N,le[M],"selectOption"),ln.current=!1},pd=N=>M=>{const pe=se.slice();pe.splice(N,1),at(M,pe,"removeOption",{option:se[N]})},Sa=N=>{Fe?it(N,"toggleInput"):He(N)},fd=N=>{N.target.getAttribute("id")!==te&&N.preventDefault()},md=()=>{ce.current.focus(),W&&de.current&&ce.current.selectionEnd-ce.current.selectionStart===0&&ce.current.select(),de.current=!1},hd=N=>{(Te===""||!Fe)&&Sa(N)};let $o=h&&Te.length>0;$o=$o||(E?se.length>0:se!==null);let ka=le;return T&&(ka=le.reduce((N,M,pe)=>{const ve=T(M);return N.length>0&&N[N.length-1].group===ve?N[N.length-1].options.push(M):N.push({key:pe,index:pe,group:ve,options:[M]}),N},[])),a&&rn&&Zt(),{getRootProps:(N={})=>g({"aria-owns":_e?`${te}-listbox`:null},N,{onKeyDown:Ca(N),onMouseDown:fd,onClick:md}),getInputLabelProps:()=>({id:`${te}-label`,htmlFor:te}),getInputProps:()=>({id:te,value:Te,onBlur:Zt,onFocus:Ao,onChange:Oe,onMouseDown:hd,"aria-activedescendant":ne?"":null,"aria-autocomplete":n?"both":"list","aria-controls":_e?`${te}-listbox`:void 0,"aria-expanded":_e,autoComplete:"off",ref:ce,autoCapitalize:"none",spellCheck:"false",role:"combobox"}),getClearProps:()=>({tabIndex:-1,onClick:Dr}),getPopupIndicatorProps:()=>({tabIndex:-1,onClick:Sa}),getTagProps:({index:N})=>g({key:N,"data-tag-index":N,tabIndex:-1},!G&&{onDelete:pd(N)}),getListboxProps:()=>({role:"listbox",id:`${te}-listbox`,"aria-labelledby":`${te}-label`,ref:sn,onMouseDown:N=>{N.preventDefault()}}),getOptionProps:({index:N,option:M})=>{const pe=(E?se:[se]).some(je=>je!=null&&k(M,je)),ve=x?x(M):!1;return{key:Z(M),tabIndex:-1,role:"option",id:`${te}-option-${N}`,onMouseOver:bn,onClick:Do,onTouchStart:st,"data-option-index":N,"aria-disabled":ve,"aria-selected":pe}},id:te,inputValue:Te,value:se,dirty:$o,popupOpen:ne,focused:rn||oe!==-1,anchorEl:me,setAnchorEl:be,focusedTag:oe,groupedOptions:ka}}function Qa(e){return e.substring(2).toLowerCase()}function Vf(e,n){return n.documentElement.clientWidth<e.clientX||n.documentElement.clientHeight<e.clientY}function pc(e){const{children:n,disableReactTree:t=!1,mouseEvent:r="onClick",onClickAway:o,touchEvent:a="onTouchEnd"}=e,s=C.exports.useRef(!1),l=C.exports.useRef(null),c=C.exports.useRef(!1),u=C.exports.useRef(!1);C.exports.useEffect(()=>(setTimeout(()=>{c.current=!0},0),()=>{c.current=!1}),[]);const d=Rn(n.ref,l),p=xn(b=>{const v=u.current;u.current=!1;const h=Tn(l.current);if(!c.current||!l.current||"clientX"in b&&Vf(b,h))return;if(s.current){s.current=!1;return}let x;b.composedPath?x=b.composedPath().indexOf(l.current)>-1:x=!h.documentElement.contains(b.target)||l.current.contains(b.target),!x&&(t||!v)&&o(b)}),m=b=>v=>{u.current=!0;const h=n.props[b];h&&h(v)},f={ref:d};return a!==!1&&(f[a]=m(a)),C.exports.useEffect(()=>{if(a!==!1){const b=Qa(a),v=Tn(l.current),h=()=>{s.current=!0};return v.addEventListener(b,p),v.addEventListener("touchmove",h),()=>{v.removeEventListener(b,p),v.removeEventListener("touchmove",h)}}},[p,a]),r!==!1&&(f[r]=m(r)),C.exports.useEffect(()=>{if(r!==!1){const b=Qa(r),v=Tn(l.current);return v.addEventListener(b,p),()=>{v.removeEventListener(b,p)}}},[p,r]),i(C.exports.Fragment,{children:C.exports.cloneElement(n,f)})}var wn="top",Ln="bottom",En="right",Cn="left",Ri="auto",Pr=[wn,Ln,En,Cn],Wt="start",br="end",jf="clippingParents",fc="viewport",tr="popper",Uf="reference",Ja=Pr.reduce(function(e,n){return e.concat([n+"-"+Wt,n+"-"+br])},[]),mc=[].concat(Pr,[Ri]).reduce(function(e,n){return e.concat([n,n+"-"+Wt,n+"-"+br])},[]),qf="beforeRead",Gf="read",Yf="afterRead",Kf="beforeMain",Qf="main",Jf="afterMain",Xf="beforeWrite",Zf="write",em="afterWrite",nm=[qf,Gf,Yf,Kf,Qf,Jf,Xf,Zf,em];function Qn(e){return e?(e.nodeName||"").toLowerCase():null}function Vn(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var n=e.ownerDocument;return n&&n.defaultView||window}return e}function Vt(e){var n=Vn(e).Element;return e instanceof n||e instanceof Element}function In(e){var n=Vn(e).HTMLElement;return e instanceof n||e instanceof HTMLElement}function Ai(e){if(typeof ShadowRoot=="undefined")return!1;var n=Vn(e).ShadowRoot;return e instanceof n||e instanceof ShadowRoot}function tm(e){var n=e.state;Object.keys(n.elements).forEach(function(t){var r=n.styles[t]||{},o=n.attributes[t]||{},a=n.elements[t];!In(a)||!Qn(a)||(Object.assign(a.style,r),Object.keys(o).forEach(function(s){var l=o[s];l===!1?a.removeAttribute(s):a.setAttribute(s,l===!0?"":l)}))})}function rm(e){var n=e.state,t={popper:{position:n.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(n.elements.popper.style,t.popper),n.styles=t,n.elements.arrow&&Object.assign(n.elements.arrow.style,t.arrow),function(){Object.keys(n.elements).forEach(function(r){var o=n.elements[r],a=n.attributes[r]||{},s=Object.keys(n.styles.hasOwnProperty(r)?n.styles[r]:t[r]),l=s.reduce(function(c,u){return c[u]="",c},{});!In(o)||!Qn(o)||(Object.assign(o.style,l),Object.keys(a).forEach(function(c){o.removeAttribute(c)}))})}}var om={name:"applyStyles",enabled:!0,phase:"write",fn:tm,effect:rm,requires:["computeStyles"]};function Gn(e){return e.split("-")[0]}var Pt=Math.max,ro=Math.min,jt=Math.round;function Ut(e,n){n===void 0&&(n=!1);var t=e.getBoundingClientRect(),r=1,o=1;if(In(e)&&n){var a=e.offsetHeight,s=e.offsetWidth;s>0&&(r=jt(t.width)/s||1),a>0&&(o=jt(t.height)/a||1)}return{width:t.width/r,height:t.height/o,top:t.top/o,right:t.right/r,bottom:t.bottom/o,left:t.left/r,x:t.left/r,y:t.top/o}}function Di(e){var n=Ut(e),t=e.offsetWidth,r=e.offsetHeight;return Math.abs(n.width-t)<=1&&(t=n.width),Math.abs(n.height-r)<=1&&(r=n.height),{x:e.offsetLeft,y:e.offsetTop,width:t,height:r}}function hc(e,n){var t=n.getRootNode&&n.getRootNode();if(e.contains(n))return!0;if(t&&Ai(t)){var r=n;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function tt(e){return Vn(e).getComputedStyle(e)}function im(e){return["table","td","th"].indexOf(Qn(e))>=0}function yt(e){return((Vt(e)?e.ownerDocument:e.document)||window.document).documentElement}function vo(e){return Qn(e)==="html"?e:e.assignedSlot||e.parentNode||(Ai(e)?e.host:null)||yt(e)}function Xa(e){return!In(e)||tt(e).position==="fixed"?null:e.offsetParent}function am(e){var n=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,t=navigator.userAgent.indexOf("Trident")!==-1;if(t&&In(e)){var r=tt(e);if(r.position==="fixed")return null}var o=vo(e);for(Ai(o)&&(o=o.host);In(o)&&["html","body"].indexOf(Qn(o))<0;){var a=tt(o);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||n&&a.willChange==="filter"||n&&a.filter&&a.filter!=="none")return o;o=o.parentNode}return null}function Tr(e){for(var n=Vn(e),t=Xa(e);t&&im(t)&&tt(t).position==="static";)t=Xa(t);return t&&(Qn(t)==="html"||Qn(t)==="body"&&tt(t).position==="static")?n:t||am(e)||n}function $i(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function fr(e,n,t){return Pt(e,ro(n,t))}function sm(e,n,t){var r=fr(e,n,t);return r>t?t:r}function gc(){return{top:0,right:0,bottom:0,left:0}}function bc(e){return Object.assign({},gc(),e)}function vc(e,n){return n.reduce(function(t,r){return t[r]=e,t},{})}var lm=function(n,t){return n=typeof n=="function"?n(Object.assign({},t.rects,{placement:t.placement})):n,bc(typeof n!="number"?n:vc(n,Pr))};function cm(e){var n,t=e.state,r=e.name,o=e.options,a=t.elements.arrow,s=t.modifiersData.popperOffsets,l=Gn(t.placement),c=$i(l),u=[Cn,En].indexOf(l)>=0,d=u?"height":"width";if(!(!a||!s)){var p=lm(o.padding,t),m=Di(a),f=c==="y"?wn:Cn,b=c==="y"?Ln:En,v=t.rects.reference[d]+t.rects.reference[c]-s[c]-t.rects.popper[d],h=s[c]-t.rects.reference[c],x=Tr(a),w=x?c==="y"?x.clientHeight||0:x.clientWidth||0:0,k=v/2-h/2,T=p[f],R=w-m[d]-p[b],A=w/2-m[d]/2+k,$=fr(T,A,R),D=c;t.modifiersData[r]=(n={},n[D]=$,n.centerOffset=$-A,n)}}function um(e){var n=e.state,t=e.options,r=t.element,o=r===void 0?"[data-popper-arrow]":r;o!=null&&(typeof o=="string"&&(o=n.elements.popper.querySelector(o),!o)||!hc(n.elements.popper,o)||(n.elements.arrow=o))}var dm={name:"arrow",enabled:!0,phase:"main",fn:cm,effect:um,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function qt(e){return e.split("-")[1]}var pm={top:"auto",right:"auto",bottom:"auto",left:"auto"};function fm(e){var n=e.x,t=e.y,r=window,o=r.devicePixelRatio||1;return{x:jt(n*o)/o||0,y:jt(t*o)/o||0}}function Za(e){var n,t=e.popper,r=e.popperRect,o=e.placement,a=e.variation,s=e.offsets,l=e.position,c=e.gpuAcceleration,u=e.adaptive,d=e.roundOffsets,p=e.isFixed,m=s.x,f=m===void 0?0:m,b=s.y,v=b===void 0?0:b,h=typeof d=="function"?d({x:f,y:v}):{x:f,y:v};f=h.x,v=h.y;var x=s.hasOwnProperty("x"),w=s.hasOwnProperty("y"),k=Cn,T=wn,R=window;if(u){var A=Tr(t),$="clientHeight",D="clientWidth";if(A===Vn(t)&&(A=yt(t),tt(A).position!=="static"&&l==="absolute"&&($="scrollHeight",D="scrollWidth")),A=A,o===wn||(o===Cn||o===En)&&a===br){T=Ln;var E=p&&A===R&&R.visualViewport?R.visualViewport.height:A[$];v-=E-r.height,v*=c?1:-1}if(o===Cn||(o===wn||o===Ln)&&a===br){k=En;var S=p&&A===R&&R.visualViewport?R.visualViewport.width:A[D];f-=S-r.width,f*=c?1:-1}}var P=Object.assign({position:l},u&&pm),B=d===!0?fm({x:f,y:v}):{x:f,y:v};if(f=B.x,v=B.y,c){var I;return Object.assign({},P,(I={},I[T]=w?"0":"",I[k]=x?"0":"",I.transform=(R.devicePixelRatio||1)<=1?"translate("+f+"px, "+v+"px)":"translate3d("+f+"px, "+v+"px, 0)",I))}return Object.assign({},P,(n={},n[T]=w?v+"px":"",n[k]=x?f+"px":"",n.transform="",n))}function mm(e){var n=e.state,t=e.options,r=t.gpuAcceleration,o=r===void 0?!0:r,a=t.adaptive,s=a===void 0?!0:a,l=t.roundOffsets,c=l===void 0?!0:l,u={placement:Gn(n.placement),variation:qt(n.placement),popper:n.elements.popper,popperRect:n.rects.popper,gpuAcceleration:o,isFixed:n.options.strategy==="fixed"};n.modifiersData.popperOffsets!=null&&(n.styles.popper=Object.assign({},n.styles.popper,Za(Object.assign({},u,{offsets:n.modifiersData.popperOffsets,position:n.options.strategy,adaptive:s,roundOffsets:c})))),n.modifiersData.arrow!=null&&(n.styles.arrow=Object.assign({},n.styles.arrow,Za(Object.assign({},u,{offsets:n.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),n.attributes.popper=Object.assign({},n.attributes.popper,{"data-popper-placement":n.placement})}var hm={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:mm,data:{}},Mr={passive:!0};function gm(e){var n=e.state,t=e.instance,r=e.options,o=r.scroll,a=o===void 0?!0:o,s=r.resize,l=s===void 0?!0:s,c=Vn(n.elements.popper),u=[].concat(n.scrollParents.reference,n.scrollParents.popper);return a&&u.forEach(function(d){d.addEventListener("scroll",t.update,Mr)}),l&&c.addEventListener("resize",t.update,Mr),function(){a&&u.forEach(function(d){d.removeEventListener("scroll",t.update,Mr)}),l&&c.removeEventListener("resize",t.update,Mr)}}var bm={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:gm,data:{}},vm={left:"right",right:"left",bottom:"top",top:"bottom"};function Gr(e){return e.replace(/left|right|bottom|top/g,function(n){return vm[n]})}var xm={start:"end",end:"start"};function es(e){return e.replace(/start|end/g,function(n){return xm[n]})}function Ii(e){var n=Vn(e),t=n.pageXOffset,r=n.pageYOffset;return{scrollLeft:t,scrollTop:r}}function Li(e){return Ut(yt(e)).left+Ii(e).scrollLeft}function ym(e){var n=Vn(e),t=yt(e),r=n.visualViewport,o=t.clientWidth,a=t.clientHeight,s=0,l=0;return r&&(o=r.width,a=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,l=r.offsetTop)),{width:o,height:a,x:s+Li(e),y:l}}function wm(e){var n,t=yt(e),r=Ii(e),o=(n=e.ownerDocument)==null?void 0:n.body,a=Pt(t.scrollWidth,t.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=Pt(t.scrollHeight,t.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),l=-r.scrollLeft+Li(e),c=-r.scrollTop;return tt(o||t).direction==="rtl"&&(l+=Pt(t.clientWidth,o?o.clientWidth:0)-a),{width:a,height:s,x:l,y:c}}function Ei(e){var n=tt(e),t=n.overflow,r=n.overflowX,o=n.overflowY;return/auto|scroll|overlay|hidden/.test(t+o+r)}function xc(e){return["html","body","#document"].indexOf(Qn(e))>=0?e.ownerDocument.body:In(e)&&Ei(e)?e:xc(vo(e))}function mr(e,n){var t;n===void 0&&(n=[]);var r=xc(e),o=r===((t=e.ownerDocument)==null?void 0:t.body),a=Vn(r),s=o?[a].concat(a.visualViewport||[],Ei(r)?r:[]):r,l=n.concat(s);return o?l:l.concat(mr(vo(s)))}function ri(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Cm(e){var n=Ut(e);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function ns(e,n){return n===fc?ri(ym(e)):Vt(n)?Cm(n):ri(wm(yt(e)))}function Sm(e){var n=mr(vo(e)),t=["absolute","fixed"].indexOf(tt(e).position)>=0,r=t&&In(e)?Tr(e):e;return Vt(r)?n.filter(function(o){return Vt(o)&&hc(o,r)&&Qn(o)!=="body"}):[]}function km(e,n,t){var r=n==="clippingParents"?Sm(e):[].concat(n),o=[].concat(r,[t]),a=o[0],s=o.reduce(function(l,c){var u=ns(e,c);return l.top=Pt(u.top,l.top),l.right=ro(u.right,l.right),l.bottom=ro(u.bottom,l.bottom),l.left=Pt(u.left,l.left),l},ns(e,a));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function yc(e){var n=e.reference,t=e.element,r=e.placement,o=r?Gn(r):null,a=r?qt(r):null,s=n.x+n.width/2-t.width/2,l=n.y+n.height/2-t.height/2,c;switch(o){case wn:c={x:s,y:n.y-t.height};break;case Ln:c={x:s,y:n.y+n.height};break;case En:c={x:n.x+n.width,y:l};break;case Cn:c={x:n.x-t.width,y:l};break;default:c={x:n.x,y:n.y}}var u=o?$i(o):null;if(u!=null){var d=u==="y"?"height":"width";switch(a){case Wt:c[u]=c[u]-(n[d]/2-t[d]/2);break;case br:c[u]=c[u]+(n[d]/2-t[d]/2);break}}return c}function vr(e,n){n===void 0&&(n={});var t=n,r=t.placement,o=r===void 0?e.placement:r,a=t.boundary,s=a===void 0?jf:a,l=t.rootBoundary,c=l===void 0?fc:l,u=t.elementContext,d=u===void 0?tr:u,p=t.altBoundary,m=p===void 0?!1:p,f=t.padding,b=f===void 0?0:f,v=bc(typeof b!="number"?b:vc(b,Pr)),h=d===tr?Uf:tr,x=e.rects.popper,w=e.elements[m?h:d],k=km(Vt(w)?w:w.contextElement||yt(e.elements.popper),s,c),T=Ut(e.elements.reference),R=yc({reference:T,element:x,strategy:"absolute",placement:o}),A=ri(Object.assign({},x,R)),$=d===tr?A:T,D={top:k.top-$.top+v.top,bottom:$.bottom-k.bottom+v.bottom,left:k.left-$.left+v.left,right:$.right-k.right+v.right},E=e.modifiersData.offset;if(d===tr&&E){var S=E[o];Object.keys(D).forEach(function(P){var B=[En,Ln].indexOf(P)>=0?1:-1,I=[wn,Ln].indexOf(P)>=0?"y":"x";D[P]+=S[I]*B})}return D}function Pm(e,n){n===void 0&&(n={});var t=n,r=t.placement,o=t.boundary,a=t.rootBoundary,s=t.padding,l=t.flipVariations,c=t.allowedAutoPlacements,u=c===void 0?mc:c,d=qt(r),p=d?l?Ja:Ja.filter(function(b){return qt(b)===d}):Pr,m=p.filter(function(b){return u.indexOf(b)>=0});m.length===0&&(m=p);var f=m.reduce(function(b,v){return b[v]=vr(e,{placement:v,boundary:o,rootBoundary:a,padding:s})[Gn(v)],b},{});return Object.keys(f).sort(function(b,v){return f[b]-f[v]})}function Tm(e){if(Gn(e)===Ri)return[];var n=Gr(e);return[es(e),n,es(n)]}function Rm(e){var n=e.state,t=e.options,r=e.name;if(!n.modifiersData[r]._skip){for(var o=t.mainAxis,a=o===void 0?!0:o,s=t.altAxis,l=s===void 0?!0:s,c=t.fallbackPlacements,u=t.padding,d=t.boundary,p=t.rootBoundary,m=t.altBoundary,f=t.flipVariations,b=f===void 0?!0:f,v=t.allowedAutoPlacements,h=n.options.placement,x=Gn(h),w=x===h,k=c||(w||!b?[Gr(h)]:Tm(h)),T=[h].concat(k).reduce(function(de,ce){return de.concat(Gn(ce)===Ri?Pm(n,{placement:ce,boundary:d,rootBoundary:p,padding:u,flipVariations:b,allowedAutoPlacements:v}):ce)},[]),R=n.rects.reference,A=n.rects.popper,$=new Map,D=!0,E=T[0],S=0;S<T.length;S++){var P=T[S],B=Gn(P),I=qt(P)===Wt,O=[wn,Ln].indexOf(B)>=0,z=O?"width":"height",_=vr(n,{placement:P,boundary:d,rootBoundary:p,altBoundary:m,padding:u}),H=O?I?En:Cn:I?Ln:wn;R[z]>A[z]&&(H=Gr(H));var G=Gr(H),W=[];if(a&&W.push(_[B]<=0),l&&W.push(_[H]<=0,_[G]<=0),W.every(function(de){return de})){E=P,D=!1;break}$.set(P,W)}if(D)for(var U=b?3:1,te=function(ce){var K=T.find(function(me){var be=$.get(me);if(be)return be.slice(0,ce).every(function(oe){return oe})});if(K)return E=K,"break"},Z=U;Z>0;Z--){var re=te(Z);if(re==="break")break}n.placement!==E&&(n.modifiersData[r]._skip=!0,n.placement=E,n.reset=!0)}}var Am={name:"flip",enabled:!0,phase:"main",fn:Rm,requiresIfExists:["offset"],data:{_skip:!1}};function ts(e,n,t){return t===void 0&&(t={x:0,y:0}),{top:e.top-n.height-t.y,right:e.right-n.width+t.x,bottom:e.bottom-n.height+t.y,left:e.left-n.width-t.x}}function rs(e){return[wn,En,Ln,Cn].some(function(n){return e[n]>=0})}function Dm(e){var n=e.state,t=e.name,r=n.rects.reference,o=n.rects.popper,a=n.modifiersData.preventOverflow,s=vr(n,{elementContext:"reference"}),l=vr(n,{altBoundary:!0}),c=ts(s,r),u=ts(l,o,a),d=rs(c),p=rs(u);n.modifiersData[t]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:d,hasPopperEscaped:p},n.attributes.popper=Object.assign({},n.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":p})}var $m={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Dm};function Im(e,n,t){var r=Gn(e),o=[Cn,wn].indexOf(r)>=0?-1:1,a=typeof t=="function"?t(Object.assign({},n,{placement:e})):t,s=a[0],l=a[1];return s=s||0,l=(l||0)*o,[Cn,En].indexOf(r)>=0?{x:l,y:s}:{x:s,y:l}}function Lm(e){var n=e.state,t=e.options,r=e.name,o=t.offset,a=o===void 0?[0,0]:o,s=mc.reduce(function(d,p){return d[p]=Im(p,n.rects,a),d},{}),l=s[n.placement],c=l.x,u=l.y;n.modifiersData.popperOffsets!=null&&(n.modifiersData.popperOffsets.x+=c,n.modifiersData.popperOffsets.y+=u),n.modifiersData[r]=s}var Em={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Lm};function Mm(e){var n=e.state,t=e.name;n.modifiersData[t]=yc({reference:n.rects.reference,element:n.rects.popper,strategy:"absolute",placement:n.placement})}var Bm={name:"popperOffsets",enabled:!0,phase:"read",fn:Mm,data:{}};function Om(e){return e==="x"?"y":"x"}function Nm(e){var n=e.state,t=e.options,r=e.name,o=t.mainAxis,a=o===void 0?!0:o,s=t.altAxis,l=s===void 0?!1:s,c=t.boundary,u=t.rootBoundary,d=t.altBoundary,p=t.padding,m=t.tether,f=m===void 0?!0:m,b=t.tetherOffset,v=b===void 0?0:b,h=vr(n,{boundary:c,rootBoundary:u,padding:p,altBoundary:d}),x=Gn(n.placement),w=qt(n.placement),k=!w,T=$i(x),R=Om(T),A=n.modifiersData.popperOffsets,$=n.rects.reference,D=n.rects.popper,E=typeof v=="function"?v(Object.assign({},n.rects,{placement:n.placement})):v,S=typeof E=="number"?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),P=n.modifiersData.offset?n.modifiersData.offset[n.placement]:null,B={x:0,y:0};if(!!A){if(a){var I,O=T==="y"?wn:Cn,z=T==="y"?Ln:En,_=T==="y"?"height":"width",H=A[T],G=H+h[O],W=H-h[z],U=f?-D[_]/2:0,te=w===Wt?$[_]:D[_],Z=w===Wt?-D[_]:-$[_],re=n.elements.arrow,de=f&&re?Di(re):{width:0,height:0},ce=n.modifiersData["arrow#persistent"]?n.modifiersData["arrow#persistent"].padding:gc(),K=ce[O],me=ce[z],be=fr(0,$[_],de[_]),oe=k?$[_]/2-U-be-K-S.mainAxis:te-be-K-S.mainAxis,ae=k?-$[_]/2+U+be+me+S.mainAxis:Z+be+me+S.mainAxis,Ie=n.elements.arrow&&Tr(n.elements.arrow),We=Ie?T==="y"?Ie.clientTop||0:Ie.clientLeft||0:0,se=(I=P==null?void 0:P[T])!=null?I:0,tn=H+oe-se-We,Te=H+ae-se,an=fr(f?ro(G,tn):G,H,f?Pt(W,Te):W);A[T]=an,B[T]=an-H}if(l){var rn,Me=T==="x"?wn:Cn,Be=T==="x"?Ln:En,Re=A[R],Fe=R==="y"?"height":"width",on=Re+h[Me],Qe=Re-h[Be],F=[wn,Cn].indexOf(x)!==-1,ee=(rn=P==null?void 0:P[R])!=null?rn:0,ne=F?on:Re-$[Fe]-D[Fe]-ee+S.altAxis,le=F?Re+$[Fe]+D[Fe]-ee-S.altAxis:Qe,_e=f&&F?sm(ne,Re,le):fr(f?ne:on,Re,f?le:Qe);A[R]=_e,B[R]=_e-Re}n.modifiersData[r]=B}}var zm={name:"preventOverflow",enabled:!0,phase:"main",fn:Nm,requiresIfExists:["offset"]};function Fm(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function _m(e){return e===Vn(e)||!In(e)?Ii(e):Fm(e)}function Hm(e){var n=e.getBoundingClientRect(),t=jt(n.width)/e.offsetWidth||1,r=jt(n.height)/e.offsetHeight||1;return t!==1||r!==1}function Wm(e,n,t){t===void 0&&(t=!1);var r=In(n),o=In(n)&&Hm(n),a=yt(n),s=Ut(e,o),l={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!t)&&((Qn(n)!=="body"||Ei(a))&&(l=_m(n)),In(n)?(c=Ut(n,!0),c.x+=n.clientLeft,c.y+=n.clientTop):a&&(c.x=Li(a))),{x:s.left+l.scrollLeft-c.x,y:s.top+l.scrollTop-c.y,width:s.width,height:s.height}}function Vm(e){var n=new Map,t=new Set,r=[];e.forEach(function(a){n.set(a.name,a)});function o(a){t.add(a.name);var s=[].concat(a.requires||[],a.requiresIfExists||[]);s.forEach(function(l){if(!t.has(l)){var c=n.get(l);c&&o(c)}}),r.push(a)}return e.forEach(function(a){t.has(a.name)||o(a)}),r}function jm(e){var n=Vm(e);return nm.reduce(function(t,r){return t.concat(n.filter(function(o){return o.phase===r}))},[])}function Um(e){var n;return function(){return n||(n=new Promise(function(t){Promise.resolve().then(function(){n=void 0,t(e())})})),n}}function qm(e){var n=e.reduce(function(t,r){var o=t[r.name];return t[r.name]=o?Object.assign({},o,r,{options:Object.assign({},o.options,r.options),data:Object.assign({},o.data,r.data)}):r,t},{});return Object.keys(n).map(function(t){return n[t]})}var os={placement:"bottom",modifiers:[],strategy:"absolute"};function is(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return!n.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function Gm(e){e===void 0&&(e={});var n=e,t=n.defaultModifiers,r=t===void 0?[]:t,o=n.defaultOptions,a=o===void 0?os:o;return function(l,c,u){u===void 0&&(u=a);var d={placement:"bottom",orderedModifiers:[],options:Object.assign({},os,a),modifiersData:{},elements:{reference:l,popper:c},attributes:{},styles:{}},p=[],m=!1,f={state:d,setOptions:function(x){var w=typeof x=="function"?x(d.options):x;v(),d.options=Object.assign({},a,d.options,w),d.scrollParents={reference:Vt(l)?mr(l):l.contextElement?mr(l.contextElement):[],popper:mr(c)};var k=jm(qm([].concat(r,d.options.modifiers)));return d.orderedModifiers=k.filter(function(T){return T.enabled}),b(),f.update()},forceUpdate:function(){if(!m){var x=d.elements,w=x.reference,k=x.popper;if(!!is(w,k)){d.rects={reference:Wm(w,Tr(k),d.options.strategy==="fixed"),popper:Di(k)},d.reset=!1,d.placement=d.options.placement,d.orderedModifiers.forEach(function(S){return d.modifiersData[S.name]=Object.assign({},S.data)});for(var T=0;T<d.orderedModifiers.length;T++){if(d.reset===!0){d.reset=!1,T=-1;continue}var R=d.orderedModifiers[T],A=R.fn,$=R.options,D=$===void 0?{}:$,E=R.name;typeof A=="function"&&(d=A({state:d,options:D,name:E,instance:f})||d)}}}},update:Um(function(){return new Promise(function(h){f.forceUpdate(),h(d)})}),destroy:function(){v(),m=!0}};if(!is(l,c))return f;f.setOptions(u).then(function(h){!m&&u.onFirstUpdate&&u.onFirstUpdate(h)});function b(){d.orderedModifiers.forEach(function(h){var x=h.name,w=h.options,k=w===void 0?{}:w,T=h.effect;if(typeof T=="function"){var R=T({state:d,name:x,instance:f,options:k}),A=function(){};p.push(R||A)}})}function v(){p.forEach(function(h){return h()}),p=[]}return f}}var Ym=[bm,Bm,hm,om,Em,Am,zm,dm,$m],Km=Gm({defaultModifiers:Ym});const Qm=["anchorEl","children","direction","disablePortal","modifiers","open","ownerState","placement","popperOptions","popperRef","TransitionProps"],Jm=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function Xm(e,n){if(n==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function oi(e){return typeof e=="function"?e():e}const Zm={},eh=C.exports.forwardRef(function(n,t){const{anchorEl:r,children:o,direction:a,disablePortal:s,modifiers:l,open:c,placement:u,popperOptions:d,popperRef:p,TransitionProps:m}=n,f=fe(n,Qm),b=C.exports.useRef(null),v=Rn(b,t),h=C.exports.useRef(null),x=Rn(h,p),w=C.exports.useRef(x);At(()=>{w.current=x},[x]),C.exports.useImperativeHandle(p,()=>h.current,[]);const k=Xm(u,a),[T,R]=C.exports.useState(k);C.exports.useEffect(()=>{h.current&&h.current.forceUpdate()}),At(()=>{if(!r||!c)return;const $=S=>{R(S.placement)};oi(r);let D=[{name:"preventOverflow",options:{altBoundary:s}},{name:"flip",options:{altBoundary:s}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:S})=>{$(S)}}];l!=null&&(D=D.concat(l)),d&&d.modifiers!=null&&(D=D.concat(d.modifiers));const E=Km(oi(r),b.current,g({placement:k},d,{modifiers:D}));return w.current(E),()=>{E.destroy(),w.current(null)}},[r,s,l,c,d,k]);const A={placement:T};return m!==null&&(A.TransitionProps=m),i("div",g({ref:v,role:"tooltip"},f,{children:typeof o=="function"?o(A):o}))}),nh=C.exports.forwardRef(function(n,t){const{anchorEl:r,children:o,container:a,direction:s="ltr",disablePortal:l=!1,keepMounted:c=!1,modifiers:u,open:d,placement:p="bottom",popperOptions:m=Zm,popperRef:f,style:b,transition:v=!1}=n,h=fe(n,Jm),[x,w]=C.exports.useState(!0),k=()=>{w(!1)},T=()=>{w(!0)};if(!c&&!d&&(!v||x))return null;const R=a||(r?Tn(oi(r)).body:void 0);return i(yd,{disablePortal:l,container:R,children:i(eh,g({anchorEl:r,direction:s,disablePortal:l,modifiers:u,ref:t,open:v?!x:d,placement:p,popperOptions:m,popperRef:f},h,{style:g({position:"fixed",top:0,left:0,display:!d&&c&&(!v||x)?"none":null},b),TransitionProps:v?{in:d,onEnter:k,onExited:T}:null,children:o}))})});var th=nh;function rh(e){const{children:n,defer:t=!1,fallback:r=null}=e,[o,a]=C.exports.useState(!1);return At(()=>{t||a(!0)},[t]),C.exports.useEffect(()=>{t&&a(!0)},[t]),i(C.exports.Fragment,{children:o?n:r})}function sr(e){return Pe("MuiSlider",e)}const oh=we("MuiSlider",["root","active","focusVisible","disabled","dragging","marked","vertical","trackInverted","trackFalse","rail","track","mark","markActive","markLabel","markLabelActive","thumb","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel"]);var Yr=oh;const ih=e=>{const{open:n}=e;return{offset:Q(n&&Yr.valueLabelOpen),circle:Yr.valueLabelCircle,label:Yr.valueLabelLabel}};function wc(e){const{children:n,className:t,value:r,theme:o}=e,a=ih(e);return C.exports.cloneElement(n,{className:Q(n.props.className)},y(C.exports.Fragment,{children:[n.props.children,i("span",{className:Q(a.offset,t),theme:o,"aria-hidden":!0,children:i("span",{className:a.circle,children:i("span",{className:a.label,children:r})})})]}))}const ah=2;function Cc(e,n){return e-n}function rr(e,n,t){return e==null?n:Math.min(Math.max(n,e),t)}function as(e,n){var t;const{index:r}=(t=e.reduce((o,a,s)=>{const l=Math.abs(n-a);return o===null||l<o.distance||l===o.distance?{distance:l,index:s}:o},null))!=null?t:{};return r}function Br(e,n){if(n.current!==void 0&&e.changedTouches){const t=e;for(let r=0;r<t.changedTouches.length;r+=1){const o=t.changedTouches[r];if(o.identifier===n.current)return{x:o.clientX,y:o.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function oo(e,n,t){return(e-n)*100/(t-n)}function sh(e,n,t){return(t-n)*e+n}function lh(e){if(Math.abs(e)<1){const t=e.toExponential().split("e-"),r=t[0].split(".")[1];return(r?r.length:0)+parseInt(t[1],10)}const n=e.toString().split(".")[1];return n?n.length:0}function ch(e,n,t){const r=Math.round((e-t)/n)*n+t;return Number(r.toFixed(lh(n)))}function ss({values:e,newValue:n,index:t}){const r=e.slice();return r[t]=n,r.sort(Cc)}function Or({sliderRef:e,activeIndex:n,setActive:t}){var r,o;const a=Tn(e.current);if(!((r=e.current)!=null&&r.contains(a.activeElement))||Number(a==null||(o=a.activeElement)==null?void 0:o.getAttribute("data-index"))!==n){var s;(s=e.current)==null||s.querySelector(`[type="range"][data-index="${n}"]`).focus()}t&&t(n)}const uh={horizontal:{offset:e=>({left:`${e}%`}),leap:e=>({width:`${e}%`})},"horizontal-reverse":{offset:e=>({right:`${e}%`}),leap:e=>({width:`${e}%`})},vertical:{offset:e=>({bottom:`${e}%`}),leap:e=>({height:`${e}%`})}},dh=e=>e;let Nr;function No(){return Nr===void 0&&(typeof CSS!="undefined"&&typeof CSS.supports=="function"?Nr=CSS.supports("touch-action","none"):Nr=!0),Nr}function ph(e){const{ref:n,"aria-labelledby":t,defaultValue:r,disableSwap:o=!1,disabled:a=!1,marks:s=!1,max:l=100,min:c=0,name:u,onChange:d,onChangeCommitted:p,orientation:m="horizontal",scale:f=dh,step:b=1,tabIndex:v,value:h,isRtl:x=!1}=e,w=C.exports.useRef(),[k,T]=C.exports.useState(-1),[R,A]=C.exports.useState(-1),[$,D]=C.exports.useState(!1),E=C.exports.useRef(0),[S,P]=St({controlled:h,default:r!=null?r:c,name:"Slider"}),B=d&&((F,ee,ne)=>{const le=F.nativeEvent||F,_e=new le.constructor(le.type,le);Object.defineProperty(_e,"target",{writable:!0,value:{value:ee,name:u}}),d(_e,ee,ne)}),I=Array.isArray(S);let O=I?S.slice().sort(Cc):[S];O=O.map(F=>rr(F,c,l));const z=s===!0&&b!==null?[...Array(Math.floor((l-c)/b)+1)].map((F,ee)=>({value:c+b*ee})):s||[],_=z.map(F=>F.value),{isFocusVisibleRef:H,onBlur:G,onFocus:W,ref:U}=vi(),[te,Z]=C.exports.useState(-1),re=C.exports.useRef(),de=Rn(U,re),ce=Rn(n,de),K=F=>ee=>{var ne;const le=Number(ee.currentTarget.getAttribute("data-index"));W(ee),H.current===!0&&Z(le),A(le),F==null||(ne=F.onFocus)==null||ne.call(F,ee)},me=F=>ee=>{var ne;G(ee),H.current===!1&&Z(-1),A(-1),F==null||(ne=F.onBlur)==null||ne.call(F,ee)};At(()=>{if(a&&re.current.contains(document.activeElement)){var F;(F=document.activeElement)==null||F.blur()}},[a]),a&&k!==-1&&T(-1),a&&te!==-1&&Z(-1);const be=F=>ee=>{var ne;(ne=F.onChange)==null||ne.call(F,ee);const le=Number(ee.currentTarget.getAttribute("data-index")),_e=O[le],Ue=_.indexOf(_e);let ke=ee.target.valueAsNumber;if(z&&b==null&&(ke=ke<_e?_[Ue-1]:_[Ue+1]),ke=rr(ke,c,l),z&&b==null){const De=_.indexOf(O[le]);ke=ke<O[le]?_[De-1]:_[De+1]}if(I){o&&(ke=rr(ke,O[le-1]||-1/0,O[le+1]||1/0));const De=ke;ke=ss({values:O,newValue:ke,index:le});let xe=le;o||(xe=ke.indexOf(De)),Or({sliderRef:re,activeIndex:xe})}P(ke),Z(le),B&&B(ee,ke,le),p&&p(ee,ke)},oe=C.exports.useRef();let ae=m;x&&m==="horizontal"&&(ae+="-reverse");const Ie=({finger:F,move:ee=!1,values:ne})=>{const{current:le}=re,{width:_e,height:Ue,bottom:ke,left:De}=le.getBoundingClientRect();let xe;ae.indexOf("vertical")===0?xe=(ke-F.y)/Ue:xe=(F.x-De)/_e,ae.indexOf("-reverse")!==-1&&(xe=1-xe);let Ve;if(Ve=sh(xe,c,l),b)Ve=ch(Ve,b,c);else{const He=as(_,Ve);Ve=_[He]}Ve=rr(Ve,c,l);let sn=0;if(I){ee?sn=oe.current:sn=as(ne,Ve),o&&(Ve=rr(Ve,ne[sn-1]||-1/0,ne[sn+1]||1/0));const He=Ve;Ve=ss({values:ne,newValue:Ve,index:sn}),o&&ee||(sn=Ve.indexOf(He),oe.current=sn)}return{newValue:Ve,activeIndex:sn}},We=xn(F=>{const ee=Br(F,w);if(!ee)return;if(E.current+=1,F.type==="mousemove"&&F.buttons===0){se(F);return}const{newValue:ne,activeIndex:le}=Ie({finger:ee,move:!0,values:O});Or({sliderRef:re,activeIndex:le,setActive:T}),P(ne),!$&&E.current>ah&&D(!0),B&&B(F,ne,le)}),se=xn(F=>{const ee=Br(F,w);if(D(!1),!ee)return;const{newValue:ne}=Ie({finger:ee,values:O});T(-1),F.type==="touchend"&&A(-1),p&&p(F,ne),w.current=void 0,Te()}),tn=xn(F=>{if(a)return;No()||F.preventDefault();const ee=F.changedTouches[0];ee!=null&&(w.current=ee.identifier);const ne=Br(F,w);if(ne!==!1){const{newValue:_e,activeIndex:Ue}=Ie({finger:ne,values:O});Or({sliderRef:re,activeIndex:Ue,setActive:T}),P(_e),B&&B(F,_e,Ue)}E.current=0;const le=Tn(re.current);le.addEventListener("touchmove",We),le.addEventListener("touchend",se)}),Te=C.exports.useCallback(()=>{const F=Tn(re.current);F.removeEventListener("mousemove",We),F.removeEventListener("mouseup",se),F.removeEventListener("touchmove",We),F.removeEventListener("touchend",se)},[se,We]);C.exports.useEffect(()=>{const{current:F}=re;return F.addEventListener("touchstart",tn,{passive:No()}),()=>{F.removeEventListener("touchstart",tn,{passive:No()}),Te()}},[Te,tn]),C.exports.useEffect(()=>{a&&Te()},[a,Te]);const an=F=>ee=>{var ne;if((ne=F.onMouseDown)==null||ne.call(F,ee),a||ee.defaultPrevented||ee.button!==0)return;ee.preventDefault();const le=Br(ee,w);if(le!==!1){const{newValue:Ue,activeIndex:ke}=Ie({finger:le,values:O});Or({sliderRef:re,activeIndex:ke,setActive:T}),P(Ue),B&&B(ee,Ue,ke)}E.current=0;const _e=Tn(re.current);_e.addEventListener("mousemove",We),_e.addEventListener("mouseup",se)},rn=oo(I?O[0]:c,c,l),Me=oo(O[O.length-1],c,l)-rn,Be=F=>{const ee={onMouseDown:an(F||{})},ne=g({},F,ee);return g({ref:ce},ne)},Re=F=>ee=>{var ne;(ne=F.onMouseOver)==null||ne.call(F,ee);const le=Number(ee.currentTarget.getAttribute("data-index"));A(le)},Fe=F=>ee=>{var ne;(ne=F.onMouseLeave)==null||ne.call(F,ee),A(-1)};return{axis:ae,axisProps:uh,getRootProps:Be,getHiddenInputProps:F=>{const ee={onChange:be(F||{}),onFocus:K(F||{}),onBlur:me(F||{})},ne=g({},F,ee);return g({tabIndex:v,"aria-labelledby":t,"aria-orientation":m,"aria-valuemax":f(l),"aria-valuemin":f(c),name:u,type:"range",min:e.min,max:e.max,step:e.step,disabled:a},ne,{style:g({},Ff,{direction:x?"rtl":"ltr",width:"100%",height:"100%"})})},getThumbProps:F=>{const ee={onMouseOver:Re(F||{}),onMouseLeave:Fe(F||{})},ne=g({},F,ee);return g({},ne)},dragging:$,marks:z,values:O,active:k,focusVisible:te,open:R,range:I,trackOffset:rn,trackLeap:Me}}const fh=["aria-label","aria-valuetext","className","component","classes","disableSwap","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","onMouseDown","orientation","scale","step","tabIndex","track","value","valueLabelDisplay","valueLabelFormat","isRtl","components","componentsProps"],ls=e=>e,mh=e=>{const{disabled:n,dragging:t,marked:r,orientation:o,track:a,classes:s}=e;return Ce({root:["root",n&&"disabled",t&&"dragging",r&&"marked",o==="vertical"&&"vertical",a==="inverted"&&"trackInverted",a===!1&&"trackFalse"],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",n&&"disabled"],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]},sr,s)},hh=({children:e})=>e,gh=C.exports.forwardRef(function(n,t){var r,o,a,s,l,c,u;const{"aria-label":d,"aria-valuetext":p,className:m,component:f,classes:b,disableSwap:v=!1,disabled:h=!1,getAriaLabel:x,getAriaValueText:w,marks:k=!1,max:T=100,min:R=0,onMouseDown:A,orientation:$="horizontal",scale:D=ls,step:E=1,track:S="normal",valueLabelDisplay:P="off",valueLabelFormat:B=ls,isRtl:I=!1,components:O={},componentsProps:z={}}=n,_=fe(n,fh),H=g({},n,{mark:k,classes:b,disabled:h,isRtl:I,max:T,min:R,orientation:$,scale:D,step:E,track:S,valueLabelDisplay:P,valueLabelFormat:B}),{axisProps:G,getRootProps:W,getHiddenInputProps:U,getThumbProps:te,open:Z,active:re,axis:de,range:ce,focusVisible:K,dragging:me,marks:be,values:oe,trackOffset:ae,trackLeap:Ie}=ph(g({},H,{ref:t}));H.marked=be.length>0&&be.some(De=>De.label),H.dragging=me;const We=(r=f!=null?f:O.Root)!=null?r:"span",se=lt(We,g({},_,z.root),H),tn=(o=O.Rail)!=null?o:"span",Te=lt(tn,z.rail,H),an=(a=O.Track)!=null?a:"span",rn=lt(an,z.track,H),Me=g({},G[de].offset(ae),G[de].leap(Ie)),Be=(s=O.Thumb)!=null?s:"span",Re=lt(Be,z.thumb,H),Fe=(l=O.ValueLabel)!=null?l:wc,on=lt(Fe,z.valueLabel,H),Qe=(c=O.Mark)!=null?c:"span",F=lt(Qe,z.mark,H),ee=(u=O.MarkLabel)!=null?u:"span",ne=lt(ee,z.markLabel,H),le=O.Input||"input",_e=lt(le,z.input,H),Ue=U(),ke=mh(H);return y(We,g({},se,W({onMouseDown:A}),{className:Q(ke.root,se.className,m),children:[i(tn,g({},Te,{className:Q(ke.rail,Te.className)})),i(an,g({},rn,{className:Q(ke.track,rn.className),style:g({},Me,rn.style)})),be.map((De,xe)=>{const Ve=oo(De.value,R,T),sn=G[de].offset(Ve);let He;return S===!1?He=oe.indexOf(De.value)!==-1:He=S==="normal"&&(ce?De.value>=oe[0]&&De.value<=oe[oe.length-1]:De.value<=oe[0])||S==="inverted"&&(ce?De.value<=oe[0]||De.value>=oe[oe.length-1]:De.value>=oe[0]),y(C.exports.Fragment,{children:[i(Qe,g({"data-index":xe},F,!Zn(Qe)&&{markActive:He},{style:g({},sn,F.style),className:Q(ke.mark,F.className,He&&ke.markActive)})),De.label!=null?i(ee,g({"aria-hidden":!0,"data-index":xe},ne,!Zn(ee)&&{markLabelActive:He},{style:g({},sn,ne.style),className:Q(ke.markLabel,ne.className,He&&ke.markLabelActive),children:De.label})):null]},De.value)}),oe.map((De,xe)=>{const Ve=oo(De,R,T),sn=G[de].offset(Ve),He=P==="off"?hh:Fe;return i(C.exports.Fragment,{children:i(He,g({},!Zn(He)&&{valueLabelFormat:B,valueLabelDisplay:P,value:typeof B=="function"?B(D(De),xe):B,index:xe,open:Z===xe||re===xe||P==="on",disabled:h},on,{className:Q(ke.valueLabel,on.className),children:i(Be,g({"data-index":xe},Re,te(),{className:Q(ke.thumb,Re.className,re===xe&&ke.active,K===xe&&ke.focusVisible)},!Zn(Be)&&{ownerState:g({},H,Re.ownerState)},{style:g({},sn,{pointerEvents:v&&re!==xe?"none":void 0},Re.style),children:i(le,g({},Ue,{"data-index":xe,"aria-label":x?x(xe):d,"aria-valuenow":D(De),"aria-valuetext":w?w(D(De),xe):p,value:oe[xe]},!Zn(le)&&{ownerState:g({},H,_e.ownerState)},_e,{style:g({},Ue.style,_e.style)}))}))}))},xe)})]}))});var bh=gh;const vh={configure:e=>{console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)),wd.configure(e)}};var xh=Object.freeze(Object.defineProperty({__proto__:null,unstable_ClassNameGenerator:vh,capitalize:L,createChainedFunction:Ll,createSvgIcon:Mn,debounce:xi,deprecatedPropType:Mf,isMuiElement:El,ownerDocument:Tn,ownerWindow:kt,requirePropFactory:Bf,setRef:Il,unstable_useEnhancedEffect:At,unstable_useId:kr,unsupportedProp:Nf,useControlled:St,useEventCallback:xn,useForkRef:Rn,useIsFocusVisible:vi},Symbol.toStringTag,{value:"Module"}));function yh(e){return Pe("MuiCollapse",e)}we("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const wh=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],Ch=e=>{const{orientation:n,classes:t}=e,r={root:["root",`${n}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${n}`],wrapperInner:["wrapperInner",`${n}`]};return Ce(r,yh,t)},Sh=V("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[t.orientation],t.state==="entered"&&n.entered,t.state==="exited"&&!t.in&&t.collapsedSize==="0px"&&n.hidden]}})(({theme:e,ownerState:n})=>g({height:0,overflow:"hidden",transition:e.transitions.create("height")},n.orientation==="horizontal"&&{height:"auto",width:0,transition:e.transitions.create("width")},n.state==="entered"&&g({height:"auto",overflow:"visible"},n.orientation==="horizontal"&&{width:"auto"}),n.state==="exited"&&!n.in&&n.collapsedSize==="0px"&&{visibility:"hidden"})),kh=V("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,n)=>n.wrapper})(({ownerState:e})=>g({display:"flex",width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),Ph=V("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,n)=>n.wrapperInner})(({ownerState:e})=>g({width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),Sc=C.exports.forwardRef(function(n,t){const r=ye({props:n,name:"MuiCollapse"}),{addEndListener:o,children:a,className:s,collapsedSize:l="0px",component:c,easing:u,in:d,onEnter:p,onEntered:m,onEntering:f,onExit:b,onExited:v,onExiting:h,orientation:x="vertical",style:w,timeout:k=Cd.standard,TransitionComponent:T=Ml}=r,R=fe(r,wh),A=g({},r,{orientation:x,collapsedSize:l}),$=Ch(A),D=Dt(),E=C.exports.useRef(),S=C.exports.useRef(null),P=C.exports.useRef(),B=typeof l=="number"?`${l}px`:l,I=x==="horizontal",O=I?"width":"height";C.exports.useEffect(()=>()=>{clearTimeout(E.current)},[]);const z=C.exports.useRef(null),_=Rn(t,z),H=K=>me=>{if(K){const be=z.current;me===void 0?K(be):K(be,me)}},G=()=>S.current?S.current[I?"clientWidth":"clientHeight"]:0,W=H((K,me)=>{S.current&&I&&(S.current.style.position="absolute"),K.style[O]=B,p&&p(K,me)}),U=H((K,me)=>{const be=G();S.current&&I&&(S.current.style.position="");const{duration:oe,easing:ae}=hr({style:w,timeout:k,easing:u},{mode:"enter"});if(k==="auto"){const Ie=D.transitions.getAutoHeightDuration(be);K.style.transitionDuration=`${Ie}ms`,P.current=Ie}else K.style.transitionDuration=typeof oe=="string"?oe:`${oe}ms`;K.style[O]=`${be}px`,K.style.transitionTimingFunction=ae,f&&f(K,me)}),te=H((K,me)=>{K.style[O]="auto",m&&m(K,me)}),Z=H(K=>{K.style[O]=`${G()}px`,b&&b(K)}),re=H(v),de=H(K=>{const me=G(),{duration:be,easing:oe}=hr({style:w,timeout:k,easing:u},{mode:"exit"});if(k==="auto"){const ae=D.transitions.getAutoHeightDuration(me);K.style.transitionDuration=`${ae}ms`,P.current=ae}else K.style.transitionDuration=typeof be=="string"?be:`${be}ms`;K.style[O]=B,K.style.transitionTimingFunction=oe,h&&h(K)});return i(T,g({in:d,onEnter:W,onEntered:te,onEntering:U,onExit:Z,onExited:re,onExiting:de,addEndListener:K=>{k==="auto"&&(E.current=setTimeout(K,P.current||0)),o&&o(z.current,K)},nodeRef:z,timeout:k==="auto"?null:k},R,{children:(K,me)=>i(Sh,g({as:c,className:Q($.root,s,{entered:$.entered,exited:!d&&B==="0px"&&$.hidden}[K]),style:g({[I?"minWidth":"minHeight"]:B},w),ownerState:g({},A,{state:K}),ref:_},me,{children:i(kh,{ownerState:g({},A,{state:K}),className:$.wrapper,ref:S,children:i(Ph,{ownerState:g({},A,{state:K}),className:$.wrapperInner,children:a})})}))}))});Sc.muiSupportAuto=!0;var Th=Sc;const Rh=C.exports.createContext({});var kc=Rh;function Ah(e){return Pe("MuiAccordion",e)}const Dh=we("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]);var zr=Dh;const $h=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],Ih=e=>{const{classes:n,square:t,expanded:r,disabled:o,disableGutters:a}=e;return Ce({root:["root",!t&&"rounded",r&&"expanded",o&&"disabled",!a&&"gutters"],region:["region"]},Ah,n)},Lh=V(Bn,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[{[`& .${zr.region}`]:n.region},n.root,!t.square&&n.rounded,!t.disableGutters&&n.gutters]}})(({theme:e})=>{const n={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],n),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],n)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${zr.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${zr.disabled}`]:{backgroundColor:e.palette.action.disabledBackground}}},({theme:e,ownerState:n})=>g({},!n.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!n.disableGutters&&{[`&.${zr.expanded}`]:{margin:"16px 0"}})),Eh=C.exports.forwardRef(function(n,t){const r=ye({props:n,name:"MuiAccordion"}),{children:o,className:a,defaultExpanded:s=!1,disabled:l=!1,disableGutters:c=!1,expanded:u,onChange:d,square:p=!1,TransitionComponent:m=Th,TransitionProps:f}=r,b=fe(r,$h),[v,h]=St({controlled:u,default:s,name:"Accordion",state:"expanded"}),x=C.exports.useCallback($=>{h(!v),d&&d($,!v)},[v,d,h]),[w,...k]=C.exports.Children.toArray(o),T=C.exports.useMemo(()=>({expanded:v,disabled:l,disableGutters:c,toggle:x}),[v,l,c,x]),R=g({},r,{square:p,disabled:l,disableGutters:c,expanded:v}),A=Ih(R);return y(Lh,g({className:Q(A.root,a),ref:t,ownerState:R,square:p},b,{children:[i(kc.Provider,{value:T,children:w}),i(m,g({in:v,timeout:"auto"},f,{children:i("div",{"aria-labelledby":w.props.id,id:w.props["aria-controls"],role:"region",className:A.region,children:k})}))]}))});var Yt=Eh;function Mh(e){return Pe("MuiAccordionDetails",e)}we("MuiAccordionDetails",["root"]);const Bh=["className"],Oh=e=>{const{classes:n}=e;return Ce({root:["root"]},Mh,n)},Nh=V("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,n)=>n.root})(({theme:e})=>({padding:e.spacing(1,2,2)})),zh=C.exports.forwardRef(function(n,t){const r=ye({props:n,name:"MuiAccordionDetails"}),{className:o}=r,a=fe(r,Bh),s=r,l=Oh(s);return i(Nh,g({className:Q(l.root,o),ref:t,ownerState:s},a))});var Kt=zh;function Fh(e){return Pe("MuiAccordionSummary",e)}const _h=we("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]);var Ot=_h;const Hh=["children","className","expandIcon","focusVisibleClassName","onClick"],Wh=e=>{const{classes:n,expanded:t,disabled:r,disableGutters:o}=e;return Ce({root:["root",t&&"expanded",r&&"disabled",!o&&"gutters"],focusVisible:["focusVisible"],content:["content",t&&"expanded",!o&&"contentGutters"],expandIconWrapper:["expandIconWrapper",t&&"expanded"]},Fh,n)},Vh=V(Ht,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,n)=>n.root})(({theme:e,ownerState:n})=>{const t={duration:e.transitions.duration.shortest};return g({display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],t),[`&.${Ot.focusVisible}`]:{backgroundColor:e.palette.action.focus},[`&.${Ot.disabled}`]:{opacity:e.palette.action.disabledOpacity},[`&:hover:not(.${Ot.disabled})`]:{cursor:"pointer"}},!n.disableGutters&&{[`&.${Ot.expanded}`]:{minHeight:64}})}),jh=V("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,n)=>n.content})(({theme:e,ownerState:n})=>g({display:"flex",flexGrow:1,margin:"12px 0"},!n.disableGutters&&{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${Ot.expanded}`]:{margin:"20px 0"}})),Uh=V("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,n)=>n.expandIconWrapper})(({theme:e})=>({display:"flex",color:e.palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${Ot.expanded}`]:{transform:"rotate(180deg)"}})),qh=C.exports.forwardRef(function(n,t){const r=ye({props:n,name:"MuiAccordionSummary"}),{children:o,className:a,expandIcon:s,focusVisibleClassName:l,onClick:c}=r,u=fe(r,Hh),{disabled:d=!1,disableGutters:p,expanded:m,toggle:f}=C.exports.useContext(kc),b=x=>{f&&f(x),c&&c(x)},v=g({},r,{expanded:m,disabled:d,disableGutters:p}),h=Wh(v);return y(Vh,g({focusRipple:!1,disableRipple:!0,disabled:d,component:"div","aria-expanded":m,className:Q(h.root,a),focusVisibleClassName:Q(h.focusVisible,l),onClick:b,ref:t,ownerState:v},u,{children:[i(jh,{className:h.content,ownerState:v,children:o}),s&&i(Uh,{className:h.expandIconWrapper,ownerState:v,children:s})]}))});var Qt=qh;function Gh(e){return Pe("MuiAlert",e)}const Yh=we("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]);var cs=Yh;function Kh(e){return Pe("MuiIconButton",e)}const Qh=we("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]);var Jh=Qh;const Xh=["edge","children","className","color","disabled","disableFocusRipple","size"],Zh=e=>{const{classes:n,disabled:t,color:r,edge:o,size:a}=e,s={root:["root",t&&"disabled",r!=="default"&&`color${L(r)}`,o&&`edge${L(o)}`,`size${L(a)}`]};return Ce(s,Kh,n)},eg=V(Ht,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.color!=="default"&&n[`color${L(t.color)}`],t.edge&&n[`edge${L(t.edge)}`],n[`size${L(t.size)}`]]}})(({theme:e,ownerState:n})=>g({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!n.disableRipple&&{"&:hover":{backgroundColor:$e(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},n.edge==="start"&&{marginLeft:n.size==="small"?-3:-12},n.edge==="end"&&{marginRight:n.size==="small"?-3:-12}),({theme:e,ownerState:n})=>g({},n.color==="inherit"&&{color:"inherit"},n.color!=="inherit"&&n.color!=="default"&&g({color:e.palette[n.color].main},!n.disableRipple&&{"&:hover":{backgroundColor:$e(e.palette[n.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),n.size==="small"&&{padding:5,fontSize:e.typography.pxToRem(18)},n.size==="large"&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${Jh.disabled}`]:{backgroundColor:"transparent",color:e.palette.action.disabled}})),ng=C.exports.forwardRef(function(n,t){const r=ye({props:n,name:"MuiIconButton"}),{edge:o=!1,children:a,className:s,color:l="default",disabled:c=!1,disableFocusRipple:u=!1,size:d="medium"}=r,p=fe(r,Xh),m=g({},r,{edge:o,color:l,disabled:c,disableFocusRipple:u,size:d}),f=Zh(m);return i(eg,g({className:Q(f.root,s),centerRipple:!0,focusRipple:!u,disabled:c,ref:t,ownerState:m},p,{children:a}))});var Hn=ng,tg=Mn(i("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),rg=Mn(i("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),og=Mn(i("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),ig=Mn(i("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),Pc=Mn(i("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),us;const ag=["action","children","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"],sg=e=>{const{variant:n,color:t,severity:r,classes:o}=e,a={root:["root",`${n}${L(t||r)}`,`${n}`],icon:["icon"],message:["message"],action:["action"]};return Ce(a,Gh,o)},lg=V(Bn,{name:"MuiAlert",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[t.variant],n[`${t.variant}${L(t.color||t.severity)}`]]}})(({theme:e,ownerState:n})=>{const t=e.palette.mode==="light"?Xr:Zr,r=e.palette.mode==="light"?Zr:Xr,o=n.color||n.severity;return g({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},o&&n.variant==="standard"&&{color:t(e.palette[o].light,.6),backgroundColor:r(e.palette[o].light,.9),[`& .${cs.icon}`]:{color:e.palette.mode==="dark"?e.palette[o].main:e.palette[o].light}},o&&n.variant==="outlined"&&{color:t(e.palette[o].light,.6),border:`1px solid ${e.palette[o].light}`,[`& .${cs.icon}`]:{color:e.palette.mode==="dark"?e.palette[o].main:e.palette[o].light}},o&&n.variant==="filled"&&{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.mode==="dark"?e.palette[o].dark:e.palette[o].main})}),cg=V("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,n)=>n.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),ug=V("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,n)=>n.message})({padding:"8px 0"}),ds=V("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,n)=>n.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),ps={success:i(tg,{fontSize:"inherit"}),warning:i(rg,{fontSize:"inherit"}),error:i(og,{fontSize:"inherit"}),info:i(ig,{fontSize:"inherit"})},dg=C.exports.forwardRef(function(n,t){const r=ye({props:n,name:"MuiAlert"}),{action:o,children:a,className:s,closeText:l="Close",color:c,icon:u,iconMapping:d=ps,onClose:p,role:m="alert",severity:f="success",variant:b="standard"}=r,v=fe(r,ag),h=g({},r,{color:c,severity:f,variant:b}),x=sg(h);return y(lg,g({role:m,elevation:0,ownerState:h,className:Q(x.root,s),ref:t},v,{children:[u!==!1?i(cg,{ownerState:h,className:x.icon,children:u||d[f]||ps[f]}):null,i(ug,{ownerState:h,className:x.message,children:a}),o!=null?i(ds,{className:x.action,children:o}):null,o==null&&p?i(ds,{ownerState:h,className:x.action,children:i(Hn,{size:"small","aria-label":l,title:l,color:"inherit",onClick:p,children:us||(us=i(Pc,{fontSize:"small"}))})}):null]}))});var xo=dg;function pg(e){return Pe("MuiAppBar",e)}we("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);const fg=["className","color","enableColorOnDark","position"],mg=e=>{const{color:n,position:t,classes:r}=e,o={root:["root",`color${L(n)}`,`position${L(t)}`]};return Ce(o,pg,r)},hg=V(Bn,{name:"MuiAppBar",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[`position${L(t.position)}`],n[`color${L(t.color)}`]]}})(({theme:e,ownerState:n})=>{const t=e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[900];return g({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},n.position==="fixed"&&{position:"fixed",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},n.position==="absolute"&&{position:"absolute",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0},n.position==="sticky"&&{position:"sticky",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0},n.position==="static"&&{position:"static"},n.position==="relative"&&{position:"relative"},n.color==="default"&&{backgroundColor:t,color:e.palette.getContrastText(t)},n.color&&n.color!=="default"&&n.color!=="inherit"&&n.color!=="transparent"&&{backgroundColor:e.palette[n.color].main,color:e.palette[n.color].contrastText},n.color==="inherit"&&{color:"inherit"},e.palette.mode==="dark"&&!n.enableColorOnDark&&{backgroundColor:null,color:null},n.color==="transparent"&&g({backgroundColor:"transparent",color:"inherit"},e.palette.mode==="dark"&&{backgroundImage:"none"}))}),gg=C.exports.forwardRef(function(n,t){const r=ye({props:n,name:"MuiAppBar"}),{className:o,color:a="primary",enableColorOnDark:s=!1,position:l="fixed"}=r,c=fe(r,fg),u=g({},r,{color:a,position:l,enableColorOnDark:s}),d=mg(u);return i(hg,g({square:!0,component:"header",ownerState:u,elevation:4,className:Q(d.root,o,l==="fixed"&&"mui-fixed"),ref:t},c))});var bg=gg;const vg=V(th,{name:"MuiPopper",slot:"Root",overridesResolver:(e,n)=>n.root})({}),xg=C.exports.forwardRef(function(n,t){const r=Sd(),o=ye({props:n,name:"MuiPopper"});return i(vg,g({direction:r==null?void 0:r.direction},o,{ref:t}))});var Mi=xg;function yg(e){return Pe("MuiListSubheader",e)}we("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);const wg=["className","color","component","disableGutters","disableSticky","inset"],Cg=e=>{const{classes:n,color:t,disableGutters:r,inset:o,disableSticky:a}=e,s={root:["root",t!=="default"&&`color${L(t)}`,!r&&"gutters",o&&"inset",!a&&"sticky"]};return Ce(s,yg,n)},Sg=V("li",{name:"MuiListSubheader",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.color!=="default"&&n[`color${L(t.color)}`],!t.disableGutters&&n.gutters,t.inset&&n.inset,!t.disableSticky&&n.sticky]}})(({theme:e,ownerState:n})=>g({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:e.palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14)},n.color==="primary"&&{color:e.palette.primary.main},n.color==="inherit"&&{color:"inherit"},!n.disableGutters&&{paddingLeft:16,paddingRight:16},n.inset&&{paddingLeft:72},!n.disableSticky&&{position:"sticky",top:0,zIndex:1,backgroundColor:e.palette.background.paper})),kg=C.exports.forwardRef(function(n,t){const r=ye({props:n,name:"MuiListSubheader"}),{className:o,color:a="default",component:s="li",disableGutters:l=!1,disableSticky:c=!1,inset:u=!1}=r,d=fe(r,wg),p=g({},r,{color:a,component:s,disableGutters:l,disableSticky:c,inset:u}),m=Cg(p);return i(Sg,g({as:s,className:Q(m.root,o),ref:t,ownerState:p},d))});var Pg=kg,Tg=Mn(i("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function Rg(e){return Pe("MuiChip",e)}const Ag=we("MuiChip",["root","sizeSmall","sizeMedium","colorPrimary","colorSecondary","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","focusVisible"]);var Le=Ag;const Dg=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"],$g=e=>{const{classes:n,disabled:t,size:r,color:o,onDelete:a,clickable:s,variant:l}=e,c={root:["root",l,t&&"disabled",`size${L(r)}`,`color${L(o)}`,s&&"clickable",s&&`clickableColor${L(o)}`,a&&"deletable",a&&`deletableColor${L(o)}`,`${l}${L(o)}`],label:["label",`label${L(r)}`],avatar:["avatar",`avatar${L(r)}`,`avatarColor${L(o)}`],icon:["icon",`icon${L(r)}`,`iconColor${L(o)}`],deleteIcon:["deleteIcon",`deleteIcon${L(r)}`,`deleteIconColor${L(o)}`,`deleteIconOutlinedColor${L(o)}`]};return Ce(c,Rg,n)},Ig=V("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e,{color:r,clickable:o,onDelete:a,size:s,variant:l}=t;return[{[`& .${Le.avatar}`]:n.avatar},{[`& .${Le.avatar}`]:n[`avatar${L(s)}`]},{[`& .${Le.avatar}`]:n[`avatarColor${L(r)}`]},{[`& .${Le.icon}`]:n.icon},{[`& .${Le.icon}`]:n[`icon${L(s)}`]},{[`& .${Le.icon}`]:n[`iconColor${L(r)}`]},{[`& .${Le.deleteIcon}`]:n.deleteIcon},{[`& .${Le.deleteIcon}`]:n[`deleteIcon${L(s)}`]},{[`& .${Le.deleteIcon}`]:n[`deleteIconColor${L(r)}`]},{[`& .${Le.deleteIcon}`]:n[`deleteIconOutlinedColor${L(r)}`]},n.root,n[`size${L(s)}`],n[`color${L(r)}`],o&&n.clickable,o&&r!=="default"&&n[`clickableColor${L(r)})`],a&&n.deletable,a&&r!=="default"&&n[`deletableColor${L(r)}`],n[l],l==="outlined"&&n[`outlined${L(r)}`]]}})(({theme:e,ownerState:n})=>{const t=$e(e.palette.text.primary,.26);return g({maxWidth:"100%",fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.text.primary,backgroundColor:e.palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${Le.disabled}`]:{opacity:e.palette.action.disabledOpacity,pointerEvents:"none"},[`& .${Le.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:e.palette.mode==="light"?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},[`& .${Le.avatarColorPrimary}`]:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},[`& .${Le.avatarColorSecondary}`]:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},[`& .${Le.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${Le.icon}`]:g({color:e.palette.mode==="light"?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},n.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4},n.color!=="default"&&{color:"inherit"}),[`& .${Le.deleteIcon}`]:g({WebkitTapHighlightColor:"transparent",color:t,fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:$e(t,.4)}},n.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4},n.color!=="default"&&{color:$e(e.palette[n.color].contrastText,.7),"&:hover, &:active":{color:e.palette[n.color].contrastText}})},n.size==="small"&&{height:24},n.color!=="default"&&{backgroundColor:e.palette[n.color].main,color:e.palette[n.color].contrastText},n.onDelete&&{[`&.${Le.focusVisible}`]:{backgroundColor:$e(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},n.onDelete&&n.color!=="default"&&{[`&.${Le.focusVisible}`]:{backgroundColor:e.palette[n.color].dark}})},({theme:e,ownerState:n})=>g({},n.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:$e(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)},[`&.${Le.focusVisible}`]:{backgroundColor:$e(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},"&:active":{boxShadow:e.shadows[1]}},n.clickable&&n.color!=="default"&&{[`&:hover, &.${Le.focusVisible}`]:{backgroundColor:e.palette[n.color].dark}}),({theme:e,ownerState:n})=>g({},n.variant==="outlined"&&{backgroundColor:"transparent",border:`1px solid ${e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${Le.clickable}:hover`]:{backgroundColor:e.palette.action.hover},[`&.${Le.focusVisible}`]:{backgroundColor:e.palette.action.focus},[`& .${Le.avatar}`]:{marginLeft:4},[`& .${Le.avatarSmall}`]:{marginLeft:2},[`& .${Le.icon}`]:{marginLeft:4},[`& .${Le.iconSmall}`]:{marginLeft:2},[`& .${Le.deleteIcon}`]:{marginRight:5},[`& .${Le.deleteIconSmall}`]:{marginRight:3}},n.variant==="outlined"&&n.color!=="default"&&{color:e.palette[n.color].main,border:`1px solid ${$e(e.palette[n.color].main,.7)}`,[`&.${Le.clickable}:hover`]:{backgroundColor:$e(e.palette[n.color].main,e.palette.action.hoverOpacity)},[`&.${Le.focusVisible}`]:{backgroundColor:$e(e.palette[n.color].main,e.palette.action.focusOpacity)},[`& .${Le.deleteIcon}`]:{color:$e(e.palette[n.color].main,.7),"&:hover, &:active":{color:e.palette[n.color].main}}})),Lg=V("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,n)=>{const{ownerState:t}=e,{size:r}=t;return[n.label,n[`label${L(r)}`]]}})(({ownerState:e})=>g({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},e.size==="small"&&{paddingLeft:8,paddingRight:8}));function fs(e){return e.key==="Backspace"||e.key==="Delete"}const Eg=C.exports.forwardRef(function(n,t){const r=ye({props:n,name:"MuiChip"}),{avatar:o,className:a,clickable:s,color:l="default",component:c,deleteIcon:u,disabled:d=!1,icon:p,label:m,onClick:f,onDelete:b,onKeyDown:v,onKeyUp:h,size:x="medium",variant:w="filled"}=r,k=fe(r,Dg),T=C.exports.useRef(null),R=Rn(T,t),A=G=>{G.stopPropagation(),b&&b(G)},$=G=>{G.currentTarget===G.target&&fs(G)&&G.preventDefault(),v&&v(G)},D=G=>{G.currentTarget===G.target&&(b&&fs(G)?b(G):G.key==="Escape"&&T.current&&T.current.blur()),h&&h(G)},E=s!==!1&&f?!0:s,S=x==="small",P=E||b?Ht:c||"div",B=g({},r,{component:P,disabled:d,size:x,color:l,onDelete:!!b,clickable:E,variant:w}),I=$g(B),O=P===Ht?g({component:c||"div",focusVisibleClassName:I.focusVisible},b&&{disableRipple:!0}):{};let z=null;if(b){const G=Q(l!=="default"&&(w==="outlined"?I[`deleteIconOutlinedColor${L(l)}`]:I[`deleteIconColor${L(l)}`]),S&&I.deleteIconSmall);z=u&&C.exports.isValidElement(u)?C.exports.cloneElement(u,{className:Q(u.props.className,I.deleteIcon,G),onClick:A}):i(Tg,{className:Q(I.deleteIcon,G),onClick:A})}let _=null;o&&C.exports.isValidElement(o)&&(_=C.exports.cloneElement(o,{className:Q(I.avatar,o.props.className)}));let H=null;return p&&C.exports.isValidElement(p)&&(H=C.exports.cloneElement(p,{className:Q(I.icon,p.props.className)})),y(Ig,g({as:P,className:Q(I.root,a),disabled:E&&d?!0:void 0,onClick:f,onKeyDown:$,onKeyUp:D,ref:R,ownerState:B},O,k,{children:[_||H,i(Lg,{className:Q(I.label),ownerState:B,children:m}),z]}))});var ht=Eg;function Mg(e){return Pe("MuiAutocomplete",e)}const Bg=we("MuiAutocomplete",["root","fullWidth","focused","focusVisible","tag","tagSizeSmall","tagSizeMedium","hasPopupIcon","hasClearIcon","inputRoot","input","inputFocused","endAdornment","clearIndicator","popupIndicator","popupIndicatorOpen","popper","popperDisablePortal","paper","listbox","loading","noOptions","option","groupLabel","groupUl"]);var Ae=Bg,ms,hs;const Og=["autoComplete","autoHighlight","autoSelect","blurOnSelect","ChipProps","className","clearIcon","clearOnBlur","clearOnEscape","clearText","closeText","componentsProps","defaultValue","disableClearable","disableCloseOnSelect","disabled","disabledItemsFocusable","disableListWrap","disablePortal","filterOptions","filterSelectedOptions","forcePopupIcon","freeSolo","fullWidth","getLimitTagsText","getOptionDisabled","getOptionLabel","isOptionEqualToValue","groupBy","handleHomeEndKeys","id","includeInputInList","inputValue","limitTags","ListboxComponent","ListboxProps","loading","loadingText","multiple","noOptionsText","onChange","onClose","onHighlightChange","onInputChange","onOpen","open","openOnFocus","openText","options","PaperComponent","PopperComponent","popupIcon","readOnly","renderGroup","renderInput","renderOption","renderTags","selectOnFocus","size","value"],Ng=e=>{const{classes:n,disablePortal:t,focused:r,fullWidth:o,hasClearIcon:a,hasPopupIcon:s,inputFocused:l,popupOpen:c,size:u}=e,d={root:["root",r&&"focused",o&&"fullWidth",a&&"hasClearIcon",s&&"hasPopupIcon"],inputRoot:["inputRoot"],input:["input",l&&"inputFocused"],tag:["tag",`tagSize${L(u)}`],endAdornment:["endAdornment"],clearIndicator:["clearIndicator"],popupIndicator:["popupIndicator",c&&"popupIndicatorOpen"],popper:["popper",t&&"popperDisablePortal"],paper:["paper"],listbox:["listbox"],loading:["loading"],noOptions:["noOptions"],option:["option"],groupLabel:["groupLabel"],groupUl:["groupUl"]};return Ce(d,Mg,n)},zg=V("div",{name:"MuiAutocomplete",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e,{fullWidth:r,hasClearIcon:o,hasPopupIcon:a,inputFocused:s,size:l}=t;return[{[`& .${Ae.tag}`]:n.tag},{[`& .${Ae.tag}`]:n[`tagSize${L(l)}`]},{[`& .${Ae.inputRoot}`]:n.inputRoot},{[`& .${Ae.input}`]:n.input},{[`& .${Ae.input}`]:s&&n.inputFocused},n.root,r&&n.fullWidth,a&&n.hasPopupIcon,o&&n.hasClearIcon]}})(({ownerState:e})=>g({[`&.${Ae.focused} .${Ae.clearIndicator}`]:{visibility:"visible"},"@media (pointer: fine)":{[`&:hover .${Ae.clearIndicator}`]:{visibility:"visible"}}},e.fullWidth&&{width:"100%"},{[`& .${Ae.tag}`]:g({margin:3,maxWidth:"calc(100% - 6px)"},e.size==="small"&&{margin:2,maxWidth:"calc(100% - 4px)"}),[`& .${Ae.inputRoot}`]:{flexWrap:"wrap",[`.${Ae.hasPopupIcon}&, .${Ae.hasClearIcon}&`]:{paddingRight:26+4},[`.${Ae.hasPopupIcon}.${Ae.hasClearIcon}&`]:{paddingRight:52+4},[`& .${Ae.input}`]:{width:0,minWidth:30}},[`& .${Io.root}`]:{paddingBottom:1,"& .MuiInput-input":{padding:"4px 4px 4px 0px"}},[`& .${Io.root}.${Lr.sizeSmall}`]:{[`& .${Io.input}`]:{padding:"2px 4px 3px 0"}},[`& .${Da.root}`]:{padding:9,[`.${Ae.hasPopupIcon}&, .${Ae.hasClearIcon}&`]:{paddingRight:26+4+9},[`.${Ae.hasPopupIcon}.${Ae.hasClearIcon}&`]:{paddingRight:52+4+9},[`& .${Ae.input}`]:{padding:"7.5px 4px 7.5px 6px"},[`& .${Ae.endAdornment}`]:{right:9}},[`& .${Da.root}.${Lr.sizeSmall}`]:{padding:6,[`& .${Ae.input}`]:{padding:"2.5px 4px 2.5px 6px"}},[`& .${Er.root}`]:{paddingTop:19,paddingLeft:8,[`.${Ae.hasPopupIcon}&, .${Ae.hasClearIcon}&`]:{paddingRight:26+4+9},[`.${Ae.hasPopupIcon}.${Ae.hasClearIcon}&`]:{paddingRight:52+4+9},[`& .${Er.input}`]:{padding:"7px 4px"},[`& .${Ae.endAdornment}`]:{right:9}},[`& .${Er.root}.${Lr.sizeSmall}`]:{paddingBottom:1,[`& .${Er.input}`]:{padding:"2.5px 4px"}},[`& .${Lr.hiddenLabel}`]:{paddingTop:8},[`& .${Ae.input}`]:g({flexGrow:1,textOverflow:"ellipsis",opacity:0},e.inputFocused&&{opacity:1})})),Fg=V("div",{name:"MuiAutocomplete",slot:"EndAdornment",overridesResolver:(e,n)=>n.endAdornment})({position:"absolute",right:0,top:"calc(50% - 14px)"}),_g=V(Hn,{name:"MuiAutocomplete",slot:"ClearIndicator",overridesResolver:(e,n)=>n.clearIndicator})({marginRight:-2,padding:4,visibility:"hidden"}),Hg=V(Hn,{name:"MuiAutocomplete",slot:"PopupIndicator",overridesResolver:({ownerState:e},n)=>g({},n.popupIndicator,e.popupOpen&&n.popupIndicatorOpen)})(({ownerState:e})=>g({padding:2,marginRight:-2},e.popupOpen&&{transform:"rotate(180deg)"})),Wg=V(Mi,{name:"MuiAutocomplete",slot:"Popper",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[{[`& .${Ae.option}`]:n.option},n.popper,t.disablePortal&&n.popperDisablePortal]}})(({theme:e,ownerState:n})=>g({zIndex:e.zIndex.modal},n.disablePortal&&{position:"absolute"})),Vg=V(Bn,{name:"MuiAutocomplete",slot:"Paper",overridesResolver:(e,n)=>n.paper})(({theme:e})=>g({},e.typography.body1,{overflow:"auto"})),jg=V("div",{name:"MuiAutocomplete",slot:"Loading",overridesResolver:(e,n)=>n.loading})(({theme:e})=>({color:e.palette.text.secondary,padding:"14px 16px"})),Ug=V("div",{name:"MuiAutocomplete",slot:"NoOptions",overridesResolver:(e,n)=>n.noOptions})(({theme:e})=>({color:e.palette.text.secondary,padding:"14px 16px"})),qg=V("div",{name:"MuiAutocomplete",slot:"Listbox",overridesResolver:(e,n)=>n.listbox})(({theme:e})=>({listStyle:"none",margin:0,padding:"8px 0",maxHeight:"40vh",overflow:"auto",[`& .${Ae.option}`]:{minHeight:48,display:"flex",overflow:"hidden",justifyContent:"flex-start",alignItems:"center",cursor:"pointer",paddingTop:6,boxSizing:"border-box",outline:"0",WebkitTapHighlightColor:"transparent",paddingBottom:6,paddingLeft:16,paddingRight:16,[e.breakpoints.up("sm")]:{minHeight:"auto"},[`&.${Ae.focused}`]:{backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},'&[aria-disabled="true"]':{opacity:e.palette.action.disabledOpacity,pointerEvents:"none"},[`&.${Ae.focusVisible}`]:{backgroundColor:e.palette.action.focus},'&[aria-selected="true"]':{backgroundColor:$e(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${Ae.focused}`]:{backgroundColor:$e(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.palette.action.selected}},[`&.${Ae.focusVisible}`]:{backgroundColor:$e(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}}}})),Gg=V(Pg,{name:"MuiAutocomplete",slot:"GroupLabel",overridesResolver:(e,n)=>n.groupLabel})(({theme:e})=>({backgroundColor:e.palette.background.paper,top:-8})),Yg=V("ul",{name:"MuiAutocomplete",slot:"GroupUl",overridesResolver:(e,n)=>n.groupUl})({padding:0,[`& .${Ae.option}`]:{paddingLeft:24}}),Kg=C.exports.forwardRef(function(n,t){var r,o;const a=ye({props:n,name:"MuiAutocomplete"}),{autoComplete:s=!1,autoHighlight:l=!1,autoSelect:c=!1,blurOnSelect:u=!1,ChipProps:d,className:p,clearIcon:m=ms||(ms=i(Pc,{fontSize:"small"})),clearOnBlur:f=!a.freeSolo,clearOnEscape:b=!1,clearText:v="Clear",closeText:h="Close",componentsProps:x={},defaultValue:w=a.multiple?[]:null,disableClearable:k=!1,disableCloseOnSelect:T=!1,disabled:R=!1,disabledItemsFocusable:A=!1,disableListWrap:$=!1,disablePortal:D=!1,filterSelectedOptions:E=!1,forcePopupIcon:S="auto",freeSolo:P=!1,fullWidth:B=!1,getLimitTagsText:I=Oe=>`+${Oe}`,getOptionLabel:O=Oe=>{var bn;return(bn=Oe.label)!=null?bn:Oe},groupBy:z,handleHomeEndKeys:_=!a.freeSolo,includeInputInList:H=!1,limitTags:G=-1,ListboxComponent:W="ul",ListboxProps:U,loading:te=!1,loadingText:Z="Loading\u2026",multiple:re=!1,noOptionsText:de="No options",openOnFocus:ce=!1,openText:K="Open",PaperComponent:me=Bn,PopperComponent:be=Mi,popupIcon:oe=hs||(hs=i(kd,{})),readOnly:ae=!1,renderGroup:Ie,renderInput:We,renderOption:se,renderTags:tn,selectOnFocus:Te=!a.freeSolo,size:an="medium"}=a,rn=fe(a,Og),{getRootProps:Me,getInputProps:Be,getInputLabelProps:Re,getPopupIndicatorProps:Fe,getClearProps:on,getTagProps:Qe,getListboxProps:F,getOptionProps:ee,value:ne,dirty:le,id:_e,popupOpen:Ue,focused:ke,focusedTag:De,anchorEl:xe,setAnchorEl:Ve,inputValue:sn,groupedOptions:He}=Wf(g({},a,{componentName:"Autocomplete"})),it=!k&&!R&&le&&!ae,at=(!P||S===!0)&&S!==!1,ln=g({},a,{disablePortal:D,focused:ke,fullWidth:B,hasClearIcon:it,hasPopupIcon:at,inputFocused:De===-1,popupOpen:Ue,size:an}),Ye=Ng(ln);let On;if(re&&ne.length>0){const Oe=bn=>g({className:Q(Ye.tag),disabled:R},Qe(bn));tn?On=tn(ne,Oe):On=ne.map((bn,st)=>i(ht,g({label:O(bn),size:an},Oe({index:st}),d)))}if(G>-1&&Array.isArray(On)){const Oe=On.length-G;!ke&&Oe>0&&(On=On.splice(0,G),On.push(i("span",{className:Ye.tag,children:I(Oe)},On.length)))}const Dr=Ie||(Oe=>y("li",{children:[i(Gg,{className:Ye.groupLabel,ownerState:ln,component:"div",children:Oe.group}),i(Yg,{className:Ye.groupUl,ownerState:ln,children:Oe.children})]},Oe.key)),Ao=se||((Oe,bn)=>i("li",g({},Oe,{children:O(bn)}))),Zt=(Oe,bn)=>{const st=ee({option:Oe,index:bn});return Ao(g({},st,{className:Ye.option}),Oe,{selected:st["aria-selected"],inputValue:sn})};return y(C.exports.Fragment,{children:[i(zg,g({ref:t,className:Q(Ye.root,p),ownerState:ln},Me(rn),{children:We({id:_e,disabled:R,fullWidth:!0,size:an==="small"?"small":void 0,InputLabelProps:Re(),InputProps:{ref:Ve,className:Ye.inputRoot,startAdornment:On,endAdornment:y(Fg,{className:Ye.endAdornment,ownerState:ln,children:[it?i(_g,g({},on(),{"aria-label":v,title:v,ownerState:ln},x.clearIndicator,{className:Q(Ye.clearIndicator,(r=x.clearIndicator)==null?void 0:r.className),children:m})):null,at?i(Hg,g({},Fe(),{disabled:R,"aria-label":Ue?h:K,title:Ue?h:K,className:Q(Ye.popupIndicator),ownerState:ln,children:oe})):null]})},inputProps:g({className:Q(Ye.input),disabled:R,readOnly:ae},Be())})})),Ue&&xe?i(Wg,{as:be,className:Q(Ye.popper),disablePortal:D,style:{width:xe?xe.clientWidth:null},ownerState:ln,role:"presentation",anchorEl:xe,open:!0,children:y(Vg,g({ownerState:ln,as:me},x.paper,{className:Q(Ye.paper,(o=x.paper)==null?void 0:o.className),children:[te&&He.length===0?i(jg,{className:Ye.loading,ownerState:ln,children:Z}):null,He.length===0&&!P&&!te?i(Ug,{className:Ye.noOptions,ownerState:ln,role:"presentation",onMouseDown:Oe=>{Oe.preventDefault()},children:de}):null,He.length>0?i(qg,g({as:W,className:Ye.listbox,ownerState:ln},F(),U,{children:He.map((Oe,bn)=>z?Dr({key:Oe.key,group:Oe.group,children:Oe.options.map((st,Do)=>Zt(st,Oe.index+Do))}):Zt(Oe,bn))})):null]}))}):null]})});var yo=Kg;const Qg=e=>!e||!Zn(e);var Fr=Qg;function Jg(e){return Pe("MuiButton",e)}const Xg=we("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var _r=Xg;const Zg=C.exports.createContext({});var Tc=Zg;const eb=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],nb=e=>{const{color:n,disableElevation:t,fullWidth:r,size:o,variant:a,classes:s}=e,l={root:["root",a,`${a}${L(n)}`,`size${L(o)}`,`${a}Size${L(o)}`,n==="inherit"&&"colorInherit",t&&"disableElevation",r&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${L(o)}`],endIcon:["endIcon",`iconSize${L(o)}`]},c=Ce(l,Jg,s);return g({},s,c)},Rc=e=>g({},e.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},e.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},e.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),tb=V(Ht,{shouldForwardProp:e=>mo(e)||e==="classes",name:"MuiButton",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[t.variant],n[`${t.variant}${L(t.color)}`],n[`size${L(t.size)}`],n[`${t.variant}Size${L(t.size)}`],t.color==="inherit"&&n.colorInherit,t.disableElevation&&n.disableElevation,t.fullWidth&&n.fullWidth]}})(({theme:e,ownerState:n})=>g({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":g({textDecoration:"none",backgroundColor:$e(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},n.variant==="text"&&n.color!=="inherit"&&{backgroundColor:$e(e.palette[n.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},n.variant==="outlined"&&n.color!=="inherit"&&{border:`1px solid ${e.palette[n.color].main}`,backgroundColor:$e(e.palette[n.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},n.variant==="contained"&&{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]}},n.variant==="contained"&&n.color!=="inherit"&&{backgroundColor:e.palette[n.color].dark,"@media (hover: none)":{backgroundColor:e.palette[n.color].main}}),"&:active":g({},n.variant==="contained"&&{boxShadow:e.shadows[8]}),[`&.${_r.focusVisible}`]:g({},n.variant==="contained"&&{boxShadow:e.shadows[6]}),[`&.${_r.disabled}`]:g({color:e.palette.action.disabled},n.variant==="outlined"&&{border:`1px solid ${e.palette.action.disabledBackground}`},n.variant==="outlined"&&n.color==="secondary"&&{border:`1px solid ${e.palette.action.disabled}`},n.variant==="contained"&&{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground})},n.variant==="text"&&{padding:"6px 8px"},n.variant==="text"&&n.color!=="inherit"&&{color:e.palette[n.color].main},n.variant==="outlined"&&{padding:"5px 15px",border:`1px solid ${e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`},n.variant==="outlined"&&n.color!=="inherit"&&{color:e.palette[n.color].main,border:`1px solid ${$e(e.palette[n.color].main,.5)}`},n.variant==="contained"&&{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2]},n.variant==="contained"&&n.color!=="inherit"&&{color:e.palette[n.color].contrastText,backgroundColor:e.palette[n.color].main},n.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},n.size==="small"&&n.variant==="text"&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},n.size==="large"&&n.variant==="text"&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},n.size==="small"&&n.variant==="outlined"&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},n.size==="large"&&n.variant==="outlined"&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},n.size==="small"&&n.variant==="contained"&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},n.size==="large"&&n.variant==="contained"&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},n.fullWidth&&{width:"100%"}),({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${_r.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${_r.disabled}`]:{boxShadow:"none"}}),rb=V("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.startIcon,n[`iconSize${L(t.size)}`]]}})(({ownerState:e})=>g({display:"inherit",marginRight:8,marginLeft:-4},e.size==="small"&&{marginLeft:-2},Rc(e))),ob=V("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.endIcon,n[`iconSize${L(t.size)}`]]}})(({ownerState:e})=>g({display:"inherit",marginRight:-4,marginLeft:8},e.size==="small"&&{marginRight:-2},Rc(e))),ib=C.exports.forwardRef(function(n,t){const r=C.exports.useContext(Tc),o=Pd(r,n),a=ye({props:o,name:"MuiButton"}),{children:s,color:l="primary",component:c="button",className:u,disabled:d=!1,disableElevation:p=!1,disableFocusRipple:m=!1,endIcon:f,focusVisibleClassName:b,fullWidth:v=!1,size:h="medium",startIcon:x,type:w,variant:k="text"}=a,T=fe(a,eb),R=g({},a,{color:l,component:c,disabled:d,disableElevation:p,disableFocusRipple:m,fullWidth:v,size:h,type:w,variant:k}),A=nb(R),$=x&&i(rb,{className:A.startIcon,ownerState:R,children:x}),D=f&&i(ob,{className:A.endIcon,ownerState:R,children:f});return y(tb,g({ownerState:R,className:Q(u,r.className),component:c,disabled:d,focusRipple:!m,focusVisibleClassName:Q(A.focusVisible,b),ref:t,type:w},T,{classes:A,children:[$,s,D]}))});var Yn=ib;function ab(e){return Pe("MuiButtonGroup",e)}const sb=we("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary"]);var ut=sb;const lb=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],cb=(e,n)=>{const{ownerState:t}=e;return[{[`& .${ut.grouped}`]:n.grouped},{[`& .${ut.grouped}`]:n[`grouped${L(t.orientation)}`]},{[`& .${ut.grouped}`]:n[`grouped${L(t.variant)}`]},{[`& .${ut.grouped}`]:n[`grouped${L(t.variant)}${L(t.orientation)}`]},{[`& .${ut.grouped}`]:n[`grouped${L(t.variant)}${L(t.color)}`]},n.root,n[t.variant],t.disableElevation===!0&&n.disableElevation,t.fullWidth&&n.fullWidth,t.orientation==="vertical"&&n.vertical]},ub=e=>{const{classes:n,color:t,disabled:r,disableElevation:o,fullWidth:a,orientation:s,variant:l}=e,c={root:["root",l,s==="vertical"&&"vertical",a&&"fullWidth",o&&"disableElevation"],grouped:["grouped",`grouped${L(s)}`,`grouped${L(l)}`,`grouped${L(l)}${L(s)}`,`grouped${L(l)}${L(t)}`,r&&"disabled"]};return Ce(c,ab,n)},db=V("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:cb})(({theme:e,ownerState:n})=>g({display:"inline-flex",borderRadius:e.shape.borderRadius},n.variant==="contained"&&{boxShadow:e.shadows[2]},n.disableElevation&&{boxShadow:"none"},n.fullWidth&&{width:"100%"},n.orientation==="vertical"&&{flexDirection:"column"},{[`& .${ut.grouped}`]:g({minWidth:40,"&:not(:first-of-type)":g({},n.orientation==="horizontal"&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},n.orientation==="vertical"&&{borderTopRightRadius:0,borderTopLeftRadius:0},n.variant==="outlined"&&n.orientation==="horizontal"&&{marginLeft:-1},n.variant==="outlined"&&n.orientation==="vertical"&&{marginTop:-1}),"&:not(:last-of-type)":g({},n.orientation==="horizontal"&&{borderTopRightRadius:0,borderBottomRightRadius:0},n.orientation==="vertical"&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},n.variant==="text"&&n.orientation==="horizontal"&&{borderRight:`1px solid ${e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`},n.variant==="text"&&n.orientation==="vertical"&&{borderBottom:`1px solid ${e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`},n.variant==="text"&&n.color!=="inherit"&&{borderColor:$e(e.palette[n.color].main,.5)},n.variant==="outlined"&&n.orientation==="horizontal"&&{borderRightColor:"transparent"},n.variant==="outlined"&&n.orientation==="vertical"&&{borderBottomColor:"transparent"},n.variant==="contained"&&n.orientation==="horizontal"&&{borderRight:`1px solid ${e.palette.grey[400]}`,[`&.${ut.disabled}`]:{borderRight:`1px solid ${e.palette.action.disabled}`}},n.variant==="contained"&&n.orientation==="vertical"&&{borderBottom:`1px solid ${e.palette.grey[400]}`,[`&.${ut.disabled}`]:{borderBottom:`1px solid ${e.palette.action.disabled}`}},n.variant==="contained"&&n.color!=="inherit"&&{borderColor:e.palette[n.color].dark},{"&:hover":g({},n.variant==="outlined"&&n.orientation==="horizontal"&&{borderRightColor:"currentColor"},n.variant==="outlined"&&n.orientation==="vertical"&&{borderBottomColor:"currentColor"})}),"&:hover":g({},n.variant==="contained"&&{boxShadow:"none"})},n.variant==="contained"&&{boxShadow:"none"})})),pb=C.exports.forwardRef(function(n,t){const r=ye({props:n,name:"MuiButtonGroup"}),{children:o,className:a,color:s="primary",component:l="div",disabled:c=!1,disableElevation:u=!1,disableFocusRipple:d=!1,disableRipple:p=!1,fullWidth:m=!1,orientation:f="horizontal",size:b="medium",variant:v="outlined"}=r,h=fe(r,lb),x=g({},r,{color:s,component:l,disabled:c,disableElevation:u,disableFocusRipple:d,disableRipple:p,fullWidth:m,orientation:f,size:b,variant:v}),w=ub(x),k=C.exports.useMemo(()=>({className:w.grouped,color:s,disabled:c,disableElevation:u,disableFocusRipple:d,disableRipple:p,fullWidth:m,size:b,variant:v}),[s,c,u,d,p,m,b,v,w.grouped]);return i(db,g({as:l,role:"group",className:Q(w.root,a),ref:t,ownerState:x},h,{children:i(Tc.Provider,{value:k,children:o})}))});var fb=pb,mb=Mn(i("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),hb=Mn(i("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),gb=Mn(i("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function bb(e){return Pe("MuiCheckbox",e)}const vb=we("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]);var zo=vb;const xb=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],yb=e=>{const{classes:n,indeterminate:t,color:r}=e,o={root:["root",t&&"indeterminate",`color${L(r)}`]},a=Ce(o,bb,n);return g({},n,a)},wb=V(Bl,{shouldForwardProp:e=>mo(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.indeterminate&&n.indeterminate,t.color!=="default"&&n[`color${L(t.color)}`]]}})(({theme:e,ownerState:n})=>g({color:e.palette.text.secondary},!n.disableRipple&&{"&:hover":{backgroundColor:$e(n.color==="default"?e.palette.action.active:e.palette[n.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},n.color!=="default"&&{[`&.${zo.checked}, &.${zo.indeterminate}`]:{color:e.palette[n.color].main},[`&.${zo.disabled}`]:{color:e.palette.action.disabled}})),Cb=i(hb,{}),Sb=i(mb,{}),kb=i(gb,{}),Pb=C.exports.forwardRef(function(n,t){var r,o;const a=ye({props:n,name:"MuiCheckbox"}),{checkedIcon:s=Cb,color:l="primary",icon:c=Sb,indeterminate:u=!1,indeterminateIcon:d=kb,inputProps:p,size:m="medium"}=a,f=fe(a,xb),b=u?d:c,v=u?d:s,h=g({},a,{color:l,indeterminate:u,size:m}),x=yb(h);return i(wb,g({type:"checkbox",inputProps:g({"data-indeterminate":u},p),icon:C.exports.cloneElement(b,{fontSize:(r=b.props.fontSize)!=null?r:m}),checkedIcon:C.exports.cloneElement(v,{fontSize:(o=v.props.fontSize)!=null?o:m}),ownerState:h,ref:t},f,{classes:x}))});var Ac=Pb;function Tb(e){return Pe("MuiCircularProgress",e)}we("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const Rb=["className","color","disableShrink","size","style","thickness","value","variant"];let wo=e=>e,gs,bs,vs,xs;const ct=44,Ab=Ol(gs||(gs=wo`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),Db=Ol(bs||(bs=wo`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),$b=e=>{const{classes:n,variant:t,color:r,disableShrink:o}=e,a={root:["root",t,`color${L(r)}`],svg:["svg"],circle:["circle",`circle${L(t)}`,o&&"circleDisableShrink"]};return Ce(a,Tb,n)},Ib=V("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[t.variant],n[`color${L(t.color)}`]]}})(({ownerState:e,theme:n})=>g({display:"inline-block"},e.variant==="determinate"&&{transition:n.transitions.create("transform")},e.color!=="inherit"&&{color:n.palette[e.color].main}),({ownerState:e})=>e.variant==="indeterminate"&&Nl(vs||(vs=wo`
      animation: ${0} 1.4s linear infinite;
    `),Ab)),Lb=V("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,n)=>n.svg})({display:"block"}),Eb=V("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.circle,n[`circle${L(t.variant)}`],t.disableShrink&&n.circleDisableShrink]}})(({ownerState:e,theme:n})=>g({stroke:"currentColor"},e.variant==="determinate"&&{transition:n.transitions.create("stroke-dashoffset")},e.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:e})=>e.variant==="indeterminate"&&!e.disableShrink&&Nl(xs||(xs=wo`
      animation: ${0} 1.4s ease-in-out infinite;
    `),Db)),Mb=C.exports.forwardRef(function(n,t){const r=ye({props:n,name:"MuiCircularProgress"}),{className:o,color:a="primary",disableShrink:s=!1,size:l=40,style:c,thickness:u=3.6,value:d=0,variant:p="indeterminate"}=r,m=fe(r,Rb),f=g({},r,{color:a,disableShrink:s,size:l,thickness:u,value:d,variant:p}),b=$b(f),v={},h={},x={};if(p==="determinate"){const w=2*Math.PI*((ct-u)/2);v.strokeDasharray=w.toFixed(3),x["aria-valuenow"]=Math.round(d),v.strokeDashoffset=`${((100-d)/100*w).toFixed(3)}px`,h.transform="rotate(-90deg)"}return i(Ib,g({className:Q(b.root,o),style:g({width:l,height:l},h,c),ownerState:f,ref:t,role:"progressbar"},x,m,{children:i(Lb,{className:b.svg,ownerState:f,viewBox:`${ct/2} ${ct/2} ${ct} ${ct}`,children:i(Eb,{className:b.circle,style:v,ownerState:f,cx:ct,cy:ct,r:(ct-u)/2,fill:"none",strokeWidth:u})})}))});var Bb=Mb;function Ob(e){return Pe("MuiDialog",e)}const Nb=we("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]);var Fo=Nb;const zb=C.exports.createContext({});var Dc=zb;const Fb=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],_b=V(Td,{name:"MuiDialog",slot:"Backdrop",overrides:(e,n)=>n.backdrop})({zIndex:-1}),Hb=e=>{const{classes:n,scroll:t,maxWidth:r,fullWidth:o,fullScreen:a}=e,s={root:["root"],container:["container",`scroll${L(t)}`],paper:["paper",`paperScroll${L(t)}`,`paperWidth${L(String(r))}`,o&&"paperFullWidth",a&&"paperFullScreen"]};return Ce(s,Ob,n)},Wb=V(yi,{name:"MuiDialog",slot:"Root",overridesResolver:(e,n)=>n.root})({"@media print":{position:"absolute !important"}}),Vb=V("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.container,n[`scroll${L(t.scroll)}`]]}})(({ownerState:e})=>g({height:"100%","@media print":{height:"auto"},outline:0},e.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},e.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),jb=V(Bn,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.paper,n[`scrollPaper${L(t.scroll)}`],n[`paperWidth${L(String(t.maxWidth))}`],t.fullWidth&&n.paperFullWidth,t.fullScreen&&n.paperFullScreen]}})(({theme:e,ownerState:n})=>g({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},n.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},n.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!n.maxWidth&&{maxWidth:"calc(100% - 64px)"},n.maxWidth==="xs"&&{maxWidth:e.breakpoints.unit==="px"?Math.max(e.breakpoints.values.xs,444):`${e.breakpoints.values.xs}${e.breakpoints.unit}`,[`&.${Fo.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},n.maxWidth!=="xs"&&{maxWidth:`${e.breakpoints.values[n.maxWidth]}${e.breakpoints.unit}`,[`&.${Fo.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[n.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},n.fullWidth&&{width:"calc(100% - 64px)"},n.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${Fo.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),Ub=C.exports.forwardRef(function(n,t){const r=ye({props:n,name:"MuiDialog"}),o=Dt(),a={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{"aria-describedby":s,"aria-labelledby":l,BackdropComponent:c,BackdropProps:u,children:d,className:p,disableEscapeKeyDown:m=!1,fullScreen:f=!1,fullWidth:b=!1,maxWidth:v="sm",onBackdropClick:h,onClose:x,open:w,PaperComponent:k=Bn,PaperProps:T={},scroll:R="paper",TransitionComponent:A=wi,transitionDuration:$=a,TransitionProps:D}=r,E=fe(r,Fb),S=g({},r,{disableEscapeKeyDown:m,fullScreen:f,fullWidth:b,maxWidth:v,scroll:R}),P=Hb(S),B=C.exports.useRef(),I=H=>{B.current=H.target===H.currentTarget},O=H=>{!B.current||(B.current=null,h&&h(H),x&&x(H,"backdropClick"))},z=kr(l),_=C.exports.useMemo(()=>({titleId:z}),[z]);return i(Wb,g({className:Q(P.root,p),BackdropProps:g({transitionDuration:$,as:c},u),closeAfterTransition:!0,BackdropComponent:_b,disableEscapeKeyDown:m,onClose:x,open:w,ref:t,onClick:O,ownerState:S},E,{children:i(A,g({appear:!0,in:w,timeout:$,role:"presentation"},D,{children:i(Vb,{className:Q(P.container),onMouseDown:I,ownerState:S,children:i(jb,g({as:k,elevation:24,role:"dialog","aria-describedby":s,"aria-labelledby":z},T,{className:Q(P.paper,T.className),ownerState:S,children:i(Dc.Provider,{value:_,children:d})}))})}))}))});var qb=Ub;function Gb(e){return Pe("MuiDialogActions",e)}we("MuiDialogActions",["root","spacing"]);const Yb=["className","disableSpacing"],Kb=e=>{const{classes:n,disableSpacing:t}=e;return Ce({root:["root",!t&&"spacing"]},Gb,n)},Qb=V("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,!t.disableSpacing&&n.spacing]}})(({ownerState:e})=>g({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),Jb=C.exports.forwardRef(function(n,t){const r=ye({props:n,name:"MuiDialogActions"}),{className:o,disableSpacing:a=!1}=r,s=fe(r,Yb),l=g({},r,{disableSpacing:a}),c=Kb(l);return i(Qb,g({className:Q(c.root,o),ownerState:l,ref:t},s))});var Xb=Jb;function Zb(e){return Pe("MuiDialogContent",e)}we("MuiDialogContent",["root","dividers"]);function ev(e){return Pe("MuiDialogTitle",e)}const nv=we("MuiDialogTitle",["root"]),tv=["className","dividers"],rv=e=>{const{classes:n,dividers:t}=e;return Ce({root:["root",t&&"dividers"]},Zb,n)},ov=V("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.dividers&&n.dividers]}})(({theme:e,ownerState:n})=>g({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},n.dividers?{padding:"16px 24px",borderTop:`1px solid ${e.palette.divider}`,borderBottom:`1px solid ${e.palette.divider}`}:{[`.${nv.root} + &`]:{paddingTop:0}})),iv=C.exports.forwardRef(function(n,t){const r=ye({props:n,name:"MuiDialogContent"}),{className:o,dividers:a=!1}=r,s=fe(r,tv),l=g({},r,{dividers:a}),c=rv(l);return i(ov,g({className:Q(c.root,o),ownerState:l,ref:t},s))});var av=iv;const sv=["className","id"],lv=e=>{const{classes:n}=e;return Ce({root:["root"]},ev,n)},cv=V(j,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,n)=>n.root})({padding:"16px 24px",flex:"0 0 auto"}),uv=C.exports.forwardRef(function(n,t){const r=ye({props:n,name:"MuiDialogTitle"}),{className:o,id:a}=r,s=fe(r,sv),l=r,c=lv(l),{titleId:u=a}=C.exports.useContext(Dc);return i(cv,g({component:"h2",className:Q(c.root,o),ownerState:l,ref:t,variant:"h6",id:u},s))});var dv=uv;const pv=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],fv=e=>{const{absolute:n,children:t,classes:r,flexItem:o,light:a,orientation:s,textAlign:l,variant:c}=e;return Ce({root:["root",n&&"absolute",c,a&&"light",s==="vertical"&&"vertical",o&&"flexItem",t&&"withChildren",t&&s==="vertical"&&"withChildrenVertical",l==="right"&&s!=="vertical"&&"textAlignRight",l==="left"&&s!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",s==="vertical"&&"wrapperVertical"]},Rd,r)},mv=V("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.absolute&&n.absolute,n[t.variant],t.light&&n.light,t.orientation==="vertical"&&n.vertical,t.flexItem&&n.flexItem,t.children&&n.withChildren,t.children&&t.orientation==="vertical"&&n.withChildrenVertical,t.textAlign==="right"&&t.orientation!=="vertical"&&n.textAlignRight,t.textAlign==="left"&&t.orientation!=="vertical"&&n.textAlignLeft]}})(({theme:e,ownerState:n})=>g({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:e.palette.divider,borderBottomWidth:"thin"},n.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},n.light&&{borderColor:$e(e.palette.divider,.08)},n.variant==="inset"&&{marginLeft:72},n.variant==="middle"&&n.orientation==="horizontal"&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},n.variant==="middle"&&n.orientation==="vertical"&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},n.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},n.flexItem&&{alignSelf:"stretch",height:"auto"}),({theme:e,ownerState:n})=>g({},n.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${e.palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}}),({theme:e,ownerState:n})=>g({},n.children&&n.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${e.palette.divider}`,transform:"translateX(0%)"}}),({ownerState:e})=>g({},e.textAlign==="right"&&e.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},e.textAlign==="left"&&e.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),hv=V("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.wrapper,t.orientation==="vertical"&&n.wrapperVertical]}})(({theme:e,ownerState:n})=>g({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},n.orientation==="vertical"&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})),gv=C.exports.forwardRef(function(n,t){const r=ye({props:n,name:"MuiDivider"}),{absolute:o=!1,children:a,className:s,component:l=a?"div":"hr",flexItem:c=!1,light:u=!1,orientation:d="horizontal",role:p=l!=="hr"?"separator":void 0,textAlign:m="center",variant:f="fullWidth"}=r,b=fe(r,pv),v=g({},r,{absolute:o,component:l,flexItem:c,light:u,orientation:d,role:p,textAlign:m,variant:f}),h=fv(v);return i(mv,g({as:l,className:Q(h.root,s),role:p,ref:t,ownerState:v},b,{children:a?i(hv,{className:h.wrapper,ownerState:v,children:a}):null}))});var Bi=gv;const bv=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function vv(e,n,t){const r=n.getBoundingClientRect(),o=t&&t.getBoundingClientRect(),a=kt(n);let s;if(n.fakeTransform)s=n.fakeTransform;else{const u=a.getComputedStyle(n);s=u.getPropertyValue("-webkit-transform")||u.getPropertyValue("transform")}let l=0,c=0;if(s&&s!=="none"&&typeof s=="string"){const u=s.split("(")[1].split(")")[0].split(",");l=parseInt(u[4],10),c=parseInt(u[5],10)}return e==="left"?o?`translateX(${o.right+l-r.left}px)`:`translateX(${a.innerWidth+l-r.left}px)`:e==="right"?o?`translateX(-${r.right-o.left-l}px)`:`translateX(-${r.left+r.width-l}px)`:e==="up"?o?`translateY(${o.bottom+c-r.top}px)`:`translateY(${a.innerHeight+c-r.top}px)`:o?`translateY(-${r.top-o.top+r.height-c}px)`:`translateY(-${r.top+r.height-c}px)`}function xv(e){return typeof e=="function"?e():e}function Hr(e,n,t){const r=xv(t),o=vv(e,n,r);o&&(n.style.webkitTransform=o,n.style.transform=o)}const yv=C.exports.forwardRef(function(n,t){const r=Dt(),o={enter:r.transitions.easing.easeOut,exit:r.transitions.easing.sharp},a={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:s,appear:l=!0,children:c,container:u,direction:d="down",easing:p=o,in:m,onEnter:f,onEntered:b,onEntering:v,onExit:h,onExited:x,onExiting:w,style:k,timeout:T=a,TransitionComponent:R=Ml}=n,A=fe(n,bv),$=C.exports.useRef(null),D=Rn(c.ref,$),E=Rn(D,t),S=W=>U=>{W&&(U===void 0?W($.current):W($.current,U))},P=S((W,U)=>{Hr(d,W,u),Ad(W),f&&f(W,U)}),B=S((W,U)=>{const te=hr({timeout:T,style:k,easing:p},{mode:"enter"});W.style.webkitTransition=r.transitions.create("-webkit-transform",g({},te)),W.style.transition=r.transitions.create("transform",g({},te)),W.style.webkitTransform="none",W.style.transform="none",v&&v(W,U)}),I=S(b),O=S(w),z=S(W=>{const U=hr({timeout:T,style:k,easing:p},{mode:"exit"});W.style.webkitTransition=r.transitions.create("-webkit-transform",U),W.style.transition=r.transitions.create("transform",U),Hr(d,W,u),h&&h(W)}),_=S(W=>{W.style.webkitTransition="",W.style.transition="",x&&x(W)}),H=W=>{s&&s($.current,W)},G=C.exports.useCallback(()=>{$.current&&Hr(d,$.current,u)},[d,u]);return C.exports.useEffect(()=>{if(m||d==="down"||d==="right")return;const W=xi(()=>{$.current&&Hr(d,$.current,u)}),U=kt($.current);return U.addEventListener("resize",W),()=>{W.clear(),U.removeEventListener("resize",W)}},[d,m,u]),C.exports.useEffect(()=>{m||G()},[m,G]),i(R,g({nodeRef:$,onEnter:P,onEntered:I,onEntering:B,onExit:z,onExited:_,onExiting:O,addEndListener:H,appear:l,in:m,timeout:T},A,{children:(W,U)=>C.exports.cloneElement(c,g({ref:E,style:g({visibility:W==="exited"&&!m?"hidden":void 0},k,c.props.style)},U))}))});var wv=yv;function Cv(e){return Pe("MuiDrawer",e)}we("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const Sv=["BackdropProps"],kv=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],$c=(e,n)=>{const{ownerState:t}=e;return[n.root,(t.variant==="permanent"||t.variant==="persistent")&&n.docked,n.modal]},Pv=e=>{const{classes:n,anchor:t,variant:r}=e,o={root:["root"],docked:[(r==="permanent"||r==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${L(t)}`,r!=="temporary"&&`paperAnchorDocked${L(t)}`]};return Ce(o,Cv,n)},Tv=V(yi,{name:"MuiDrawer",slot:"Root",overridesResolver:$c})(({theme:e})=>({zIndex:e.zIndex.drawer})),ys=V("div",{shouldForwardProp:mo,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:$c})({flex:"0 0 auto"}),Rv=V(Bn,{name:"MuiDrawer",slot:"Paper",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.paper,n[`paperAnchor${L(t.anchor)}`],t.variant!=="temporary"&&n[`paperAnchorDocked${L(t.anchor)}`]]}})(({theme:e,ownerState:n})=>g({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:e.zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},n.anchor==="left"&&{left:0},n.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},n.anchor==="right"&&{right:0},n.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},n.anchor==="left"&&n.variant!=="temporary"&&{borderRight:`1px solid ${e.palette.divider}`},n.anchor==="top"&&n.variant!=="temporary"&&{borderBottom:`1px solid ${e.palette.divider}`},n.anchor==="right"&&n.variant!=="temporary"&&{borderLeft:`1px solid ${e.palette.divider}`},n.anchor==="bottom"&&n.variant!=="temporary"&&{borderTop:`1px solid ${e.palette.divider}`})),Ic={left:"right",right:"left",top:"down",bottom:"up"};function Nt(e){return["left","right"].indexOf(e)!==-1}function lr(e,n){return e.direction==="rtl"&&Nt(n)?Ic[n]:n}const Av=C.exports.forwardRef(function(n,t){const r=ye({props:n,name:"MuiDrawer"}),o=Dt(),a={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{anchor:s="left",BackdropProps:l,children:c,className:u,elevation:d=16,hideBackdrop:p=!1,ModalProps:{BackdropProps:m}={},onClose:f,open:b=!1,PaperProps:v={},SlideProps:h,TransitionComponent:x=wv,transitionDuration:w=a,variant:k="temporary"}=r,T=fe(r.ModalProps,Sv),R=fe(r,kv),A=C.exports.useRef(!1);C.exports.useEffect(()=>{A.current=!0},[]);const $=lr(o,s),E=g({},r,{anchor:s,elevation:d,open:b,variant:k},R),S=Pv(E),P=i(Rv,g({elevation:k==="temporary"?d:0,square:!0},v,{className:Q(S.paper,v.className),ownerState:E,children:c}));if(k==="permanent")return i(ys,g({className:Q(S.root,S.docked,u),ownerState:E,ref:t},R,{children:P}));const B=i(x,g({in:b,direction:Ic[$],timeout:w,appear:A.current},h,{children:P}));return k==="persistent"?i(ys,g({className:Q(S.root,S.docked,u),ownerState:E,ref:t},R,{children:B})):i(Tv,g({BackdropProps:g({},l,m,{transitionDuration:w}),className:Q(S.root,S.modal,u),open:b,ownerState:E,onClose:f,hideBackdrop:p,ref:t},R,T,{children:B}))});var Dv=Av;function $v(e){return Pe("MuiFormGroup",e)}we("MuiFormGroup",["root","row","error"]);const Iv=["className","row"],Lv=e=>{const{classes:n,row:t,error:r}=e;return Ce({root:["root",t&&"row",r&&"error"]},$v,n)},Ev=V("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.row&&n.row]}})(({ownerState:e})=>g({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})),Mv=C.exports.forwardRef(function(n,t){const r=ye({props:n,name:"MuiFormGroup"}),{className:o,row:a=!1}=r,s=fe(r,Iv),l=Ci(),c=zl({props:r,muiFormControl:l,states:["error"]}),u=g({},r,{row:a,error:c.error}),d=Lv(u);return i(Ev,g({className:Q(d.root,o),ownerState:u,ref:t},s))});var Oi=Mv;function Bv(e){return Pe("MuiFormHelperText",e)}const Ov=we("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]);var ws=Ov,Cs;const Nv=["children","className","component","disabled","error","filled","focused","margin","required","variant"],zv=e=>{const{classes:n,contained:t,size:r,disabled:o,error:a,filled:s,focused:l,required:c}=e,u={root:["root",o&&"disabled",a&&"error",r&&`size${L(r)}`,t&&"contained",l&&"focused",s&&"filled",c&&"required"]};return Ce(u,Bv,n)},Fv=V("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.size&&n[`size${L(t.size)}`],t.contained&&n.contained,t.filled&&n.filled]}})(({theme:e,ownerState:n})=>g({color:e.palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${ws.disabled}`]:{color:e.palette.text.disabled},[`&.${ws.error}`]:{color:e.palette.error.main}},n.size==="small"&&{marginTop:4},n.contained&&{marginLeft:14,marginRight:14})),_v=C.exports.forwardRef(function(n,t){const r=ye({props:n,name:"MuiFormHelperText"}),{children:o,className:a,component:s="p"}=r,l=fe(r,Nv),c=Ci(),u=zl({props:r,muiFormControl:c,states:["variant","size","disabled","error","filled","focused","required"]}),d=g({},r,{component:s,contained:u.variant==="filled"||u.variant==="outlined",variant:u.variant,size:u.size,disabled:u.disabled,error:u.error,filled:u.filled,focused:u.focused,required:u.required}),p=zv(d);return i(Fv,g({as:s,ownerState:d,className:Q(p.root,a),ref:t},l,{children:o===" "?Cs||(Cs=i("span",{className:"notranslate",children:"\u200B"})):o}))});var Lc=_v;function Hv(e){return Pe("MuiInputAdornment",e)}const Wv=we("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var Ss=Wv,ks;const Vv=["children","className","component","disablePointerEvents","disableTypography","position","variant"],jv=(e,n)=>{const{ownerState:t}=e;return[n.root,n[`position${L(t.position)}`],t.disablePointerEvents===!0&&n.disablePointerEvents,n[t.variant]]},Uv=e=>{const{classes:n,disablePointerEvents:t,hiddenLabel:r,position:o,size:a,variant:s}=e,l={root:["root",t&&"disablePointerEvents",o&&`position${L(o)}`,s,r&&"hiddenLabel",a&&`size${L(a)}`]};return Ce(l,Hv,n)},qv=V("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:jv})(({theme:e,ownerState:n})=>g({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:e.palette.action.active},n.variant==="filled"&&{[`&.${Ss.positionStart}&:not(.${Ss.hiddenLabel})`]:{marginTop:16}},n.position==="start"&&{marginRight:8},n.position==="end"&&{marginLeft:8},n.disablePointerEvents===!0&&{pointerEvents:"none"})),Gv=C.exports.forwardRef(function(n,t){const r=ye({props:n,name:"MuiInputAdornment"}),{children:o,className:a,component:s="div",disablePointerEvents:l=!1,disableTypography:c=!1,position:u,variant:d}=r,p=fe(r,Vv),m=Ci()||{};let f=d;d&&m.variant,m&&!f&&(f=m.variant);const b=g({},r,{hiddenLabel:m.hiddenLabel,size:m.size,disablePointerEvents:l,position:u,variant:f}),v=Uv(b);return i(Dd.Provider,{value:null,children:i(qv,g({as:s,ownerState:b,className:Q(v.root,a),ref:t},p,{children:typeof o=="string"&&!c?i(j,{color:"text.secondary",children:o}):y(C.exports.Fragment,{children:[u==="start"?ks||(ks=i("span",{className:"notranslate",children:"\u200B"})):null,o]})}))})});var io=Gv;function Yv(e){return Pe("MuiLink",e)}const Kv=we("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var Qv=Kv;const Jv=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],Xv={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Zv=e=>Xv[e]||e,e1=e=>{const{classes:n,component:t,focusVisible:r,underline:o}=e,a={root:["root",`underline${L(o)}`,t==="button"&&"button",r&&"focusVisible"]};return Ce(a,Yv,n)},n1=V(j,{name:"MuiLink",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[`underline${L(t.underline)}`],t.component==="button"&&n.button]}})(({theme:e,ownerState:n})=>{const t=$d(e,`palette.${Zv(n.color)}`)||n.color;return g({},n.underline==="none"&&{textDecoration:"none"},n.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},n.underline==="always"&&{textDecoration:"underline",textDecorationColor:t!=="inherit"?$e(t,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},n.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Qv.focusVisible}`]:{outline:"auto"}})}),t1=C.exports.forwardRef(function(n,t){const r=ye({props:n,name:"MuiLink"}),{className:o,color:a="primary",component:s="a",onBlur:l,onFocus:c,TypographyClasses:u,underline:d="always",variant:p="inherit"}=r,m=fe(r,Jv),{isFocusVisibleRef:f,onBlur:b,onFocus:v,ref:h}=vi(),[x,w]=C.exports.useState(!1),k=Rn(t,h),T=D=>{b(D),f.current===!1&&w(!1),l&&l(D)},R=D=>{v(D),f.current===!0&&w(!0),c&&c(D)},A=g({},r,{color:a,component:s,focusVisible:x,underline:d,variant:p}),$=e1(A);return i(n1,g({className:Q($.root,o),classes:u,color:a,component:s,onBlur:T,onFocus:R,ref:k,ownerState:A,variant:p},m))});var ao=t1;function r1(e){return Pe("MuiListItem",e)}const o1=we("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var Mt=o1;const i1=we("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);var a1=i1;function s1(e){return Pe("MuiListItemSecondaryAction",e)}we("MuiListItemSecondaryAction",["root","disableGutters"]);const l1=["className"],c1=e=>{const{disableGutters:n,classes:t}=e;return Ce({root:["root",n&&"disableGutters"]},s1,t)},u1=V("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.disableGutters&&n.disableGutters]}})(({ownerState:e})=>g({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0})),Ec=C.exports.forwardRef(function(n,t){const r=ye({props:n,name:"MuiListItemSecondaryAction"}),{className:o}=r,a=fe(r,l1),s=C.exports.useContext(ur),l=g({},r,{disableGutters:s.disableGutters}),c=c1(l);return i(u1,g({className:Q(c.root,o),ownerState:l,ref:t},a))});Ec.muiName="ListItemSecondaryAction";var d1=Ec;const p1=["className"],f1=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected"],m1=(e,n)=>{const{ownerState:t}=e;return[n.root,t.dense&&n.dense,t.alignItems==="flex-start"&&n.alignItemsFlexStart,t.divider&&n.divider,!t.disableGutters&&n.gutters,!t.disablePadding&&n.padding,t.button&&n.button,t.hasSecondaryAction&&n.secondaryAction]},h1=e=>{const{alignItems:n,button:t,classes:r,dense:o,disabled:a,disableGutters:s,disablePadding:l,divider:c,hasSecondaryAction:u,selected:d}=e;return Ce({root:["root",o&&"dense",!s&&"gutters",!l&&"padding",c&&"divider",a&&"disabled",t&&"button",n==="flex-start"&&"alignItemsFlexStart",u&&"secondaryAction",d&&"selected"],container:["container"]},r1,r)},g1=V("div",{name:"MuiListItem",slot:"Root",overridesResolver:m1})(({theme:e,ownerState:n})=>g({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!n.disablePadding&&g({paddingTop:8,paddingBottom:8},n.dense&&{paddingTop:4,paddingBottom:4},!n.disableGutters&&{paddingLeft:16,paddingRight:16},!!n.secondaryAction&&{paddingRight:48}),!!n.secondaryAction&&{[`& > .${a1.root}`]:{paddingRight:48}},{[`&.${Mt.focusVisible}`]:{backgroundColor:e.palette.action.focus},[`&.${Mt.selected}`]:{backgroundColor:$e(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${Mt.focusVisible}`]:{backgroundColor:$e(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${Mt.disabled}`]:{opacity:e.palette.action.disabledOpacity}},n.alignItems==="flex-start"&&{alignItems:"flex-start"},n.divider&&{borderBottom:`1px solid ${e.palette.divider}`,backgroundClip:"padding-box"},n.button&&{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Mt.selected}:hover`]:{backgroundColor:$e(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:$e(e.palette.primary.main,e.palette.action.selectedOpacity)}}},n.hasSecondaryAction&&{paddingRight:48})),b1=V("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,n)=>n.container})({position:"relative"}),v1=C.exports.forwardRef(function(n,t){const r=ye({props:n,name:"MuiListItem"}),{alignItems:o="center",autoFocus:a=!1,button:s=!1,children:l,className:c,component:u,components:d={},componentsProps:p={},ContainerComponent:m="li",ContainerProps:{className:f}={},dense:b=!1,disabled:v=!1,disableGutters:h=!1,disablePadding:x=!1,divider:w=!1,focusVisibleClassName:k,secondaryAction:T,selected:R=!1}=r,A=fe(r.ContainerProps,p1),$=fe(r,f1),D=C.exports.useContext(ur),E={dense:b||D.dense||!1,alignItems:o,disableGutters:h},S=C.exports.useRef(null);At(()=>{a&&S.current&&S.current.focus()},[a]);const P=C.exports.Children.toArray(l),B=P.length&&El(P[P.length-1],["ListItemSecondaryAction"]),I=g({},r,{alignItems:o,autoFocus:a,button:s,dense:E.dense,disabled:v,disableGutters:h,disablePadding:x,divider:w,hasSecondaryAction:B,selected:R}),O=h1(I),z=Rn(S,t),_=d.Root||g1,H=p.root||{},G=g({className:Q(O.root,H.className,c),disabled:v},$);let W=u||"li";return s&&(G.component=u||"div",G.focusVisibleClassName=Q(Mt.focusVisible,k),W=Ht),B?(W=!G.component&&!u?"div":W,m==="li"&&(W==="li"?W="div":G.component==="li"&&(G.component="div")),i(ur.Provider,{value:E,children:y(b1,g({as:m,className:Q(O.container,f),ref:z,ownerState:I},A,{children:[i(_,g({},H,!Zn(_)&&{as:W,ownerState:g({},I,H.ownerState)},G,{children:P})),P.pop()]}))})):i(ur.Provider,{value:E,children:y(_,g({},H,{as:W,ref:z,ownerState:I},!Zn(_)&&{ownerState:g({},I,H.ownerState)},G,{children:[P,T&&i(d1,{children:T})]}))})});var Ps=v1;const x1=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],y1=e=>{const{classes:n,inset:t,primary:r,secondary:o,dense:a}=e;return Ce({root:["root",t&&"inset",a&&"dense",r&&o&&"multiline"],primary:["primary"],secondary:["secondary"]},Id,n)},w1=V("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[{[`& .${$a.primary}`]:n.primary},{[`& .${$a.secondary}`]:n.secondary},n.root,t.inset&&n.inset,t.primary&&t.secondary&&n.multiline,t.dense&&n.dense]}})(({ownerState:e})=>g({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},e.primary&&e.secondary&&{marginTop:6,marginBottom:6},e.inset&&{paddingLeft:56})),C1=C.exports.forwardRef(function(n,t){const r=ye({props:n,name:"MuiListItemText"}),{children:o,className:a,disableTypography:s=!1,inset:l=!1,primary:c,primaryTypographyProps:u,secondary:d,secondaryTypographyProps:p}=r,m=fe(r,x1),{dense:f}=C.exports.useContext(ur);let b=c!=null?c:o,v=d;const h=g({},r,{disableTypography:s,inset:l,primary:!!b,secondary:!!v,dense:f}),x=y1(h);return b!=null&&b.type!==j&&!s&&(b=i(j,g({variant:f?"body2":"body1",className:x.primary,component:"span",display:"block"},u,{children:b}))),v!=null&&v.type!==j&&!s&&(v=i(j,g({variant:"body2",className:x.secondary,color:"text.secondary",display:"block"},p,{children:v}))),y(w1,g({className:Q(x.root,a),ownerState:h,ref:t},m,{children:[b,v]}))});var Ts=C1,S1=Object.freeze(Object.defineProperty({__proto__:null,default:Ld,menuClasses:Ed,getMenuUtilityClass:Md},Symbol.toStringTag,{value:"Module"})),k1=Mn(i("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),P1=Mn(i("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked");const T1=V("span")({position:"relative",display:"flex"}),R1=V(k1)({transform:"scale(1)"}),A1=V(P1)(({theme:e,ownerState:n})=>g({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},n.checked&&{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}));function Mc(e){const{checked:n=!1,classes:t={},fontSize:r}=e,o=g({},e,{checked:n});return y(T1,{className:t.root,ownerState:o,children:[i(R1,{fontSize:r,className:t.background,ownerState:o}),i(A1,{fontSize:r,className:t.dot,ownerState:o})]})}const D1=C.exports.createContext(void 0);var Bc=D1;function $1(){return C.exports.useContext(Bc)}function I1(e){return Pe("MuiRadio",e)}const L1=we("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]);var Rs=L1;const E1=["checked","checkedIcon","color","icon","name","onChange","size"],M1=e=>{const{classes:n,color:t}=e,r={root:["root",`color${L(t)}`]};return g({},n,Ce(r,I1,n))},B1=V(Bl,{shouldForwardProp:e=>mo(e)||e==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[`color${L(t.color)}`]]}})(({theme:e,ownerState:n})=>g({color:e.palette.text.secondary,"&:hover":{backgroundColor:$e(n.color==="default"?e.palette.action.active:e.palette[n.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},n.color!=="default"&&{[`&.${Rs.checked}`]:{color:e.palette[n.color].main}},{[`&.${Rs.disabled}`]:{color:e.palette.action.disabled}}));function O1(e,n){return typeof n=="object"&&n!==null?e===n:String(e)===String(n)}const As=i(Mc,{checked:!0}),Ds=i(Mc,{}),N1=C.exports.forwardRef(function(n,t){var r,o;const a=ye({props:n,name:"MuiRadio"}),{checked:s,checkedIcon:l=As,color:c="primary",icon:u=Ds,name:d,onChange:p,size:m="medium"}=a,f=fe(a,E1),b=g({},a,{color:c,size:m}),v=M1(b),h=$1();let x=s;const w=Ll(p,h&&h.onChange);let k=d;return h&&(typeof x=="undefined"&&(x=O1(h.value,a.value)),typeof k=="undefined"&&(k=h.name)),i(B1,g({type:"radio",icon:C.exports.cloneElement(u,{fontSize:(r=Ds.props.fontSize)!=null?r:m}),checkedIcon:C.exports.cloneElement(l,{fontSize:(o=As.props.fontSize)!=null?o:m}),ownerState:b,classes:v,name:k,checked:x,onChange:w,ref:t},f))});var Kr=N1;const z1=["actions","children","defaultValue","name","onChange","value"],F1=C.exports.forwardRef(function(n,t){const{actions:r,children:o,defaultValue:a,name:s,onChange:l,value:c}=n,u=fe(n,z1),d=C.exports.useRef(null),[p,m]=St({controlled:c,default:a,name:"RadioGroup"});C.exports.useImperativeHandle(r,()=>({focus:()=>{let h=d.current.querySelector("input:not(:disabled):checked");h||(h=d.current.querySelector("input:not(:disabled)")),h&&h.focus()}}),[]);const f=Rn(t,d),b=h=>{m(h.target.value),l&&l(h,h.target.value)},v=kr(s);return i(Bc.Provider,{value:{name:v,onChange:b,value:p},children:i(Oi,g({role:"radiogroup",ref:f},u,{children:o}))})});var ii=F1;const _1=["component","components","componentsProps","color","size"],ft=g({},Yr,we("MuiSlider",["colorPrimary","colorSecondary","thumbColorPrimary","thumbColorSecondary","sizeSmall","thumbSizeSmall"])),H1=V("span",{name:"MuiSlider",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e,r=t.marksProp===!0&&t.step!==null?[...Array(Math.floor((t.max-t.min)/t.step)+1)].map((a,s)=>({value:t.min+t.step*s})):t.marksProp||[],o=r.length>0&&r.some(a=>a.label);return[n.root,n[`color${L(t.color)}`],t.size!=="medium"&&n[`size${L(t.size)}`],o&&n.marked,t.orientation==="vertical"&&n.vertical,t.track==="inverted"&&n.trackInverted,t.track===!1&&n.trackFalse]}})(({theme:e,ownerState:n})=>g({borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",color:e.palette[n.color].main,WebkitTapHighlightColor:"transparent"},n.orientation==="horizontal"&&g({height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}},n.size==="small"&&{height:2},n.marked&&{marginBottom:20}),n.orientation==="vertical"&&g({height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}},n.size==="small"&&{width:2},n.marked&&{marginRight:44}),{"@media print":{colorAdjust:"exact"},[`&.${ft.disabled}`]:{pointerEvents:"none",cursor:"default",color:e.palette.grey[400]},[`&.${ft.dragging}`]:{[`& .${ft.thumb}, & .${ft.track}`]:{transition:"none"}}})),W1=V("span",{name:"MuiSlider",slot:"Rail",overridesResolver:(e,n)=>n.rail})(({ownerState:e})=>g({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38},e.orientation==="horizontal"&&{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"},e.orientation==="vertical"&&{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"},e.track==="inverted"&&{opacity:1})),V1=V("span",{name:"MuiSlider",slot:"Track",overridesResolver:(e,n)=>n.track})(({theme:e,ownerState:n})=>{const t=e.palette.mode==="light"?Zr(e.palette[n.color].main,.62):Xr(e.palette[n.color].main,.5);return g({display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:e.transitions.create(["left","width","bottom","height"],{duration:e.transitions.duration.shortest})},n.size==="small"&&{border:"none"},n.orientation==="horizontal"&&{height:"inherit",top:"50%",transform:"translateY(-50%)"},n.orientation==="vertical"&&{width:"inherit",left:"50%",transform:"translateX(-50%)"},n.track===!1&&{display:"none"},n.track==="inverted"&&{backgroundColor:t,borderColor:t})}),j1=V("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.thumb,n[`thumbColor${L(t.color)}`],t.size!=="medium"&&n[`thumbSize${L(t.size)}`]]}})(({theme:e,ownerState:n})=>g({position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow","left","bottom"],{duration:e.transitions.duration.shortest})},n.size==="small"&&{width:12,height:12},n.orientation==="horizontal"&&{top:"50%",transform:"translate(-50%, -50%)"},n.orientation==="vertical"&&{left:"50%",transform:"translate(-50%, 50%)"},{"&:before":g({position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:e.shadows[2]},n.size==="small"&&{boxShadow:"none"}),"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},[`&:hover, &.${ft.focusVisible}`]:{boxShadow:`0px 0px 0px 8px ${$e(e.palette[n.color].main,.16)}`,"@media (hover: none)":{boxShadow:"none"}},[`&.${ft.active}`]:{boxShadow:`0px 0px 0px 14px ${$e(e.palette[n.color].main,.16)}`},[`&.${ft.disabled}`]:{"&:hover":{boxShadow:"none"}}})),U1=V(wc,{name:"MuiSlider",slot:"ValueLabel",overridesResolver:(e,n)=>n.valueLabel})(({theme:e,ownerState:n})=>g({[`&.${ft.valueLabelOpen}`]:{transform:"translateY(-100%) scale(1)"},zIndex:1,whiteSpace:"nowrap"},e.typography.body2,{fontWeight:500,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),top:-10,transformOrigin:"bottom center",transform:"translateY(-100%) scale(0)",position:"absolute",backgroundColor:e.palette.grey[600],borderRadius:2,color:e.palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem"},n.size==="small"&&{fontSize:e.typography.pxToRem(12),padding:"0.25rem 0.5rem"},{"&:before":{position:"absolute",content:'""',width:8,height:8,bottom:0,left:"50%",transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit"}})),q1=V("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:e=>Fl(e)&&e!=="markActive",overridesResolver:(e,n)=>n.mark})(({theme:e,ownerState:n,markActive:t})=>g({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor"},n.orientation==="horizontal"&&{top:"50%",transform:"translate(-1px, -50%)"},n.orientation==="vertical"&&{left:"50%",transform:"translate(-50%, 1px)"},t&&{backgroundColor:e.palette.background.paper,opacity:.8})),G1=V("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:e=>Fl(e)&&e!=="markLabelActive",overridesResolver:(e,n)=>n.markLabel})(({theme:e,ownerState:n,markLabelActive:t})=>g({},e.typography.body2,{color:e.palette.text.secondary,position:"absolute",whiteSpace:"nowrap"},n.orientation==="horizontal"&&{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}},n.orientation==="vertical"&&{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}},t&&{color:e.palette.text.primary})),Y1=e=>{const{color:n,size:t,classes:r={}}=e;return g({},r,{root:Q(r.root,sr(`color${L(n)}`),r[`color${L(n)}`],t&&[sr(`size${L(t)}`),r[`size${L(t)}`]]),thumb:Q(r.thumb,sr(`thumbColor${L(n)}`),r[`thumbColor${L(n)}`],t&&[sr(`thumbSize${L(t)}`),r[`thumbSize${L(t)}`]])})},K1=C.exports.forwardRef(function(n,t){var r,o,a,s;const l=ye({props:n,name:"MuiSlider"}),u=Dt().direction==="rtl",{component:d="span",components:p={},componentsProps:m={},color:f="primary",size:b="medium"}=l,v=fe(l,_1),h=g({},l,{color:f,size:b}),x=Y1(h);return i(bh,g({},v,{isRtl:u,components:g({Root:H1,Rail:W1,Track:V1,Thumb:j1,ValueLabel:U1,Mark:q1,MarkLabel:G1},p),componentsProps:g({},m,{root:g({},m.root,Fr(p.Root)&&{as:d,ownerState:g({},(r=m.root)==null?void 0:r.ownerState,{color:f,size:b})}),thumb:g({},m.thumb,Fr(p.Thumb)&&{ownerState:g({},(o=m.thumb)==null?void 0:o.ownerState,{color:f,size:b})}),track:g({},m.track,Fr(p.Track)&&{ownerState:g({},(a=m.track)==null?void 0:a.ownerState,{color:f,size:b})}),valueLabel:g({},m.valueLabel,Fr(p.ValueLabel)&&{ownerState:g({},(s=m.valueLabel)==null?void 0:s.ownerState,{color:f,size:b})})}),classes:x,ref:t}))});var Xn=K1;function Q1(e){return Pe("MuiSnackbarContent",e)}we("MuiSnackbarContent",["root","message","action"]);const J1=["action","className","message","role"],X1=e=>{const{classes:n}=e;return Ce({root:["root"],action:["action"],message:["message"]},Q1,n)},Z1=V(Bn,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(e,n)=>n.root})(({theme:e})=>{const n=e.palette.mode==="light"?.8:.98,t=Bd(e.palette.background.default,n);return g({},e.typography.body2,{color:e.palette.getContrastText(t),backgroundColor:t,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:e.shape.borderRadius,flexGrow:1,[e.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),e0=V("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(e,n)=>n.message})({padding:"8px 0"}),n0=V("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(e,n)=>n.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),t0=C.exports.forwardRef(function(n,t){const r=ye({props:n,name:"MuiSnackbarContent"}),{action:o,className:a,message:s,role:l="alert"}=r,c=fe(r,J1),u=r,d=X1(u);return y(Z1,g({role:l,square:!0,elevation:6,className:Q(d.root,a),ownerState:u,ref:t},c,{children:[i(e0,{className:d.message,ownerState:u,children:s}),o?i(n0,{className:d.action,ownerState:u,children:o}):null]}))});var r0=t0;function o0(e){return Pe("MuiSnackbar",e)}we("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const i0=["onEnter","onExited"],a0=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],s0=e=>{const{classes:n,anchorOrigin:t}=e,r={root:["root",`anchorOrigin${L(t.vertical)}${L(t.horizontal)}`]};return Ce(r,o0,n)},l0=V("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[`anchorOrigin${L(t.anchorOrigin.vertical)}${L(t.anchorOrigin.horizontal)}`]]}})(({theme:e,ownerState:n})=>{const t=g({},!n.isRtl&&{left:"50%",right:"auto",transform:"translateX(-50%)"},n.isRtl&&{right:"50%",left:"auto",transform:"translateX(50%)"});return g({zIndex:e.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},n.anchorOrigin.vertical==="top"?{top:8}:{bottom:8},n.anchorOrigin.horizontal==="left"&&{justifyContent:"flex-start"},n.anchorOrigin.horizontal==="right"&&{justifyContent:"flex-end"},{[e.breakpoints.up("sm")]:g({},n.anchorOrigin.vertical==="top"?{top:24}:{bottom:24},n.anchorOrigin.horizontal==="center"&&t,n.anchorOrigin.horizontal==="left"&&g({},!n.isRtl&&{left:24,right:"auto"},n.isRtl&&{right:24,left:"auto"}),n.anchorOrigin.horizontal==="right"&&g({},!n.isRtl&&{right:24,left:"auto"},n.isRtl&&{left:24,right:"auto"}))})}),c0=C.exports.forwardRef(function(n,t){const r=ye({props:n,name:"MuiSnackbar"}),o=Dt(),a={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{action:s,anchorOrigin:{vertical:l,horizontal:c}={vertical:"bottom",horizontal:"left"},autoHideDuration:u=null,children:d,className:p,ClickAwayListenerProps:m,ContentProps:f,disableWindowBlurListener:b=!1,message:v,onBlur:h,onClose:x,onFocus:w,onMouseEnter:k,onMouseLeave:T,open:R,resumeHideDuration:A,TransitionComponent:$=_l,transitionDuration:D=a,TransitionProps:{onEnter:E,onExited:S}={}}=r,P=fe(r.TransitionProps,i0),B=fe(r,a0),I=o.direction==="rtl",O=g({},r,{anchorOrigin:{vertical:l,horizontal:c},isRtl:I}),z=s0(O),_=C.exports.useRef(),[H,G]=C.exports.useState(!0),W=xn((...ae)=>{x&&x(...ae)}),U=xn(ae=>{!x||ae==null||(clearTimeout(_.current),_.current=setTimeout(()=>{W(null,"timeout")},ae))});C.exports.useEffect(()=>(R&&U(u),()=>{clearTimeout(_.current)}),[R,u,U]);const te=()=>{clearTimeout(_.current)},Z=C.exports.useCallback(()=>{u!=null&&U(A!=null?A:u*.5)},[u,A,U]),re=ae=>{w&&w(ae),te()},de=ae=>{k&&k(ae),te()},ce=ae=>{h&&h(ae),Z()},K=ae=>{T&&T(ae),Z()},me=ae=>{x&&x(ae,"clickaway")},be=ae=>{G(!0),S&&S(ae)},oe=(ae,Ie)=>{G(!1),E&&E(ae,Ie)};return C.exports.useEffect(()=>{if(!b&&R)return window.addEventListener("focus",Z),window.addEventListener("blur",te),()=>{window.removeEventListener("focus",Z),window.removeEventListener("blur",te)}},[b,Z,R]),C.exports.useEffect(()=>{if(!R)return;function ae(Ie){Ie.defaultPrevented||(Ie.key==="Escape"||Ie.key==="Esc")&&x&&x(Ie,"escapeKeyDown")}return document.addEventListener("keydown",ae),()=>{document.removeEventListener("keydown",ae)}},[H,R,x]),!R&&H?null:i(pc,g({onClickAway:me},m,{children:i(l0,g({className:Q(z.root,p),onBlur:ce,onFocus:re,onMouseEnter:de,onMouseLeave:K,ownerState:O,ref:t,role:"presentation"},B,{children:i($,g({appear:!0,in:R,timeout:D,direction:l==="top"?"down":"up",onEnter:oe,onExited:be},P,{children:d||i(r0,g({message:v,action:s},f))}))}))}))});var u0=c0;const d0=["anchor","classes","className","width","style"],p0=V("div")(({theme:e,ownerState:n})=>g({position:"fixed",top:0,left:0,bottom:0,zIndex:e.zIndex.drawer-1},n.anchor==="left"&&{right:"auto"},n.anchor==="right"&&{left:"auto",right:0},n.anchor==="top"&&{bottom:"auto",right:0},n.anchor==="bottom"&&{top:"auto",bottom:0,right:0})),f0=C.exports.forwardRef(function(n,t){const{anchor:r,classes:o={},className:a,width:s,style:l}=n,c=fe(n,d0),u=n;return i(p0,g({className:Q("PrivateSwipeArea-root",o.root,o[`anchor${L(r)}`],a),ref:t,style:g({[Nt(r)?"width":"height"]:s},l),ownerState:u},c))});var m0=f0;const h0=["BackdropProps"],g0=["anchor","disableBackdropTransition","disableDiscovery","disableSwipeToOpen","hideBackdrop","hysteresis","minFlingVelocity","ModalProps","onClose","onOpen","open","PaperProps","SwipeAreaProps","swipeAreaWidth","transitionDuration","variant"],Wr=3,_o=20;let Jn=null;function Ho(e,n,t){return e==="right"?t.body.offsetWidth-n[0].pageX:n[0].pageX}function Wo(e,n,t){return e==="bottom"?t.innerHeight-n[0].clientY:n[0].clientY}function or(e,n){return e?n.clientWidth:n.clientHeight}function $s(e,n,t,r){return Math.min(Math.max(t?n-e:r+n-e,0),r)}function b0(e,n){const t=[];for(;e&&e!==n.parentElement;){const r=kt(n).getComputedStyle(e);r.getPropertyValue("position")==="absolute"||r.getPropertyValue("overflow-x")==="hidden"||(e.clientWidth>0&&e.scrollWidth>e.clientWidth||e.clientHeight>0&&e.scrollHeight>e.clientHeight)&&t.push(e),e=e.parentElement}return t}function v0({domTreeShapes:e,start:n,current:t,anchor:r}){const o={scrollPosition:{x:"scrollLeft",y:"scrollTop"},scrollLength:{x:"scrollWidth",y:"scrollHeight"},clientLength:{x:"clientWidth",y:"clientHeight"}};return e.some(a=>{let s=t>=n;(r==="top"||r==="left")&&(s=!s);const l=r==="left"||r==="right"?"x":"y",c=Math.round(a[o.scrollPosition[l]]),u=c>0,d=c+a[o.clientLength[l]]<a[o.scrollLength[l]];return!!(s&&d||!s&&u)})}const x0=typeof navigator!="undefined"&&/iPad|iPhone|iPod/.test(navigator.userAgent),y0=C.exports.forwardRef(function(n,t){const r=Od({name:"MuiSwipeableDrawer",props:n}),o=Dt(),a={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{anchor:s="left",disableBackdropTransition:l=!1,disableDiscovery:c=!1,disableSwipeToOpen:u=x0,hideBackdrop:d,hysteresis:p=.52,minFlingVelocity:m=450,ModalProps:{BackdropProps:f}={},onClose:b,onOpen:v,open:h,PaperProps:x={},SwipeAreaProps:w,swipeAreaWidth:k=20,transitionDuration:T=a,variant:R="temporary"}=r,A=fe(r.ModalProps,h0),$=fe(r,g0),[D,E]=C.exports.useState(!1),S=C.exports.useRef({isSwiping:null}),P=C.exports.useRef(),B=C.exports.useRef(),I=C.exports.useRef(),O=C.exports.useRef(!1),z=C.exports.useRef();At(()=>{z.current=null},[h]);const _=C.exports.useCallback((U,te={})=>{const{mode:Z=null,changeTransition:re=!0}=te,de=lr(o,s),ce=["right","bottom"].indexOf(de)!==-1?1:-1,K=Nt(s),me=K?`translate(${ce*U}px, 0)`:`translate(0, ${ce*U}px)`,be=I.current.style;be.webkitTransform=me,be.transform=me;let oe="";if(Z&&(oe=o.transitions.create("all",hr({easing:void 0,style:void 0,timeout:T},{mode:Z}))),re&&(be.webkitTransition=oe,be.transition=oe),!l&&!d){const ae=B.current.style;ae.opacity=1-U/or(K,I.current),re&&(ae.webkitTransition=oe,ae.transition=oe)}},[s,l,d,o,T]),H=xn(U=>{if(!O.current)return;if(Jn=null,O.current=!1,E(!1),!S.current.isSwiping){S.current.isSwiping=null;return}S.current.isSwiping=null;const te=lr(o,s),Z=Nt(s);let re;Z?re=Ho(te,U.changedTouches,Tn(U.currentTarget)):re=Wo(te,U.changedTouches,kt(U.currentTarget));const de=Z?S.current.startX:S.current.startY,ce=or(Z,I.current),K=$s(re,de,h,ce),me=K/ce;if(Math.abs(S.current.velocity)>m&&(z.current=Math.abs((ce-K)/S.current.velocity)*1e3),h){S.current.velocity>m||me>p?b():_(0,{mode:"exit"});return}S.current.velocity<-m||1-me>p?v():_(or(Z,I.current),{mode:"enter"})}),G=xn(U=>{if(!I.current||!O.current||Jn!==null&&Jn!==S.current)return;const te=lr(o,s),Z=Nt(s),re=Ho(te,U.touches,Tn(U.currentTarget)),de=Wo(te,U.touches,kt(U.currentTarget));if(h&&I.current.contains(U.target)&&Jn===null){const oe=b0(U.target,I.current);if(v0({domTreeShapes:oe,start:Z?S.current.startX:S.current.startY,current:Z?re:de,anchor:s})){Jn=!0;return}Jn=S.current}if(S.current.isSwiping==null){const oe=Math.abs(re-S.current.startX),ae=Math.abs(de-S.current.startY),Ie=Z?oe>ae&&oe>Wr:ae>oe&&ae>Wr;if(Ie&&U.cancelable&&U.preventDefault(),Ie===!0||(Z?ae>Wr:oe>Wr)){if(S.current.isSwiping=Ie,!Ie){H(U);return}S.current.startX=re,S.current.startY=de,!c&&!h&&(Z?S.current.startX-=_o:S.current.startY-=_o)}}if(!S.current.isSwiping)return;const ce=or(Z,I.current);let K=Z?S.current.startX:S.current.startY;h&&!S.current.paperHit&&(K=Math.min(K,ce));const me=$s(Z?re:de,K,h,ce);if(h)if(S.current.paperHit)me===0&&(S.current.startX=re,S.current.startY=de);else if(Z?re<ce:de<ce)S.current.paperHit=!0,S.current.startX=re,S.current.startY=de;else return;S.current.lastTranslate===null&&(S.current.lastTranslate=me,S.current.lastTime=performance.now()+1);const be=(me-S.current.lastTranslate)/(performance.now()-S.current.lastTime)*1e3;S.current.velocity=S.current.velocity*.4+be*.6,S.current.lastTranslate=me,S.current.lastTime=performance.now(),U.cancelable&&U.preventDefault(),_(me)}),W=xn(U=>{if(U.defaultPrevented||U.defaultMuiPrevented||h&&(d||!B.current.contains(U.target))&&!I.current.contains(U.target))return;const te=lr(o,s),Z=Nt(s),re=Ho(te,U.touches,Tn(U.currentTarget)),de=Wo(te,U.touches,kt(U.currentTarget));if(!h){if(u||U.target!==P.current)return;if(Z){if(re>k)return}else if(de>k)return}U.defaultMuiPrevented=!0,Jn=null,S.current.startX=re,S.current.startY=de,E(!0),!h&&I.current&&_(or(Z,I.current)+(c?15:-_o),{changeTransition:!1}),S.current.velocity=0,S.current.lastTime=null,S.current.lastTranslate=null,S.current.paperHit=!1,O.current=!0});return C.exports.useEffect(()=>{if(R==="temporary"){const U=Tn(I.current);return U.addEventListener("touchstart",W),U.addEventListener("touchmove",G,{passive:!h}),U.addEventListener("touchend",H),()=>{U.removeEventListener("touchstart",W),U.removeEventListener("touchmove",G,{passive:!h}),U.removeEventListener("touchend",H)}}},[R,h,W,G,H]),C.exports.useEffect(()=>()=>{Jn===S.current&&(Jn=null)},[]),C.exports.useEffect(()=>{h||E(!1)},[h]),y(C.exports.Fragment,{children:[i(Dv,g({open:R==="temporary"&&D?!0:h,variant:R,ModalProps:g({BackdropProps:g({},f,{ref:B})},A),hideBackdrop:d,PaperProps:g({},x,{style:g({pointerEvents:R==="temporary"&&!h?"none":""},x.style),ref:I}),anchor:s,transitionDuration:z.current||T,onClose:b,ref:t},$)),!u&&R==="temporary"&&i(rh,{children:i(m0,g({anchor:s,ref:P,width:k},w))})]})});var w0=y0;const C0=C.exports.createContext();var Oc=C0;function S0(e){return Pe("MuiTable",e)}we("MuiTable",["root","stickyHeader"]);const k0=["className","component","padding","size","stickyHeader"],P0=e=>{const{classes:n,stickyHeader:t}=e;return Ce({root:["root",t&&"stickyHeader"]},S0,n)},T0=V("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.stickyHeader&&n.stickyHeader]}})(({theme:e,ownerState:n})=>g({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":g({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},n.stickyHeader&&{borderCollapse:"separate"})),Is="table",R0=C.exports.forwardRef(function(n,t){const r=ye({props:n,name:"MuiTable"}),{className:o,component:a=Is,padding:s="normal",size:l="medium",stickyHeader:c=!1}=r,u=fe(r,k0),d=g({},r,{component:a,padding:s,size:l,stickyHeader:c}),p=P0(d),m=C.exports.useMemo(()=>({padding:s,size:l,stickyHeader:c}),[s,l,c]);return i(Oc.Provider,{value:m,children:i(T0,g({as:a,role:a===Is?null:"table",ref:t,className:Q(p.root,o),ownerState:d},u))})});var gt=R0;const A0=C.exports.createContext();var Co=A0;function D0(e){return Pe("MuiTableBody",e)}we("MuiTableBody",["root"]);const $0=["className","component"],I0=e=>{const{classes:n}=e;return Ce({root:["root"]},D0,n)},L0=V("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,n)=>n.root})({display:"table-row-group"}),E0={variant:"body"},Ls="tbody",M0=C.exports.forwardRef(function(n,t){const r=ye({props:n,name:"MuiTableBody"}),{className:o,component:a=Ls}=r,s=fe(r,$0),l=g({},r,{component:a}),c=I0(l);return i(Co.Provider,{value:E0,children:i(L0,g({className:Q(c.root,o),as:a,ref:t,role:a===Ls?null:"rowgroup",ownerState:l},s))})});var bt=M0;function B0(e){return Pe("MuiTableCell",e)}const O0=we("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]);var N0=O0;const z0=["align","className","component","padding","scope","size","sortDirection","variant"],F0=e=>{const{classes:n,variant:t,align:r,padding:o,size:a,stickyHeader:s}=e,l={root:["root",t,s&&"stickyHeader",r!=="inherit"&&`align${L(r)}`,o!=="normal"&&`padding${L(o)}`,`size${L(a)}`]};return Ce(l,B0,n)},_0=V("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[t.variant],n[`size${L(t.size)}`],t.padding!=="normal"&&n[`padding${L(t.padding)}`],t.align!=="inherit"&&n[`align${L(t.align)}`],t.stickyHeader&&n.stickyHeader]}})(({theme:e,ownerState:n})=>g({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:`1px solid
    ${e.palette.mode==="light"?Zr($e(e.palette.divider,1),.88):Xr($e(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},n.variant==="head"&&{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},n.variant==="body"&&{color:e.palette.text.primary},n.variant==="footer"&&{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},n.size==="small"&&{padding:"6px 16px",[`&.${N0.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},n.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},n.padding==="none"&&{padding:0},n.align==="left"&&{textAlign:"left"},n.align==="center"&&{textAlign:"center"},n.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},n.align==="justify"&&{textAlign:"justify"},n.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:e.palette.background.default})),H0=C.exports.forwardRef(function(n,t){const r=ye({props:n,name:"MuiTableCell"}),{align:o="inherit",className:a,component:s,padding:l,scope:c,size:u,sortDirection:d,variant:p}=r,m=fe(r,z0),f=C.exports.useContext(Oc),b=C.exports.useContext(Co),v=b&&b.variant==="head";let h;s?h=s:h=v?"th":"td";let x=c;!x&&v&&(x="col");const w=p||b&&b.variant,k=g({},r,{align:o,component:h,padding:l||(f&&f.padding?f.padding:"normal"),size:u||(f&&f.size?f.size:"medium"),sortDirection:d,stickyHeader:w==="head"&&f&&f.stickyHeader,variant:w}),T=F0(k);let R=null;return d&&(R=d==="asc"?"ascending":"descending"),i(_0,g({as:h,ref:t,className:Q(T.root,a),"aria-sort":R,scope:x,ownerState:k},m))});var ze=H0;function W0(e){return Pe("MuiTableContainer",e)}we("MuiTableContainer",["root"]);const V0=["className","component"],j0=e=>{const{classes:n}=e;return Ce({root:["root"]},W0,n)},U0=V("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,n)=>n.root})({width:"100%",overflowX:"auto"}),q0=C.exports.forwardRef(function(n,t){const r=ye({props:n,name:"MuiTableContainer"}),{className:o,component:a="div"}=r,s=fe(r,V0),l=g({},r,{component:a}),c=j0(l);return i(U0,g({ref:t,as:a,className:Q(c.root,o),ownerState:l},s))});var Es=q0;function G0(e){return Pe("MuiTableHead",e)}we("MuiTableHead",["root"]);const Y0=["className","component"],K0=e=>{const{classes:n}=e;return Ce({root:["root"]},G0,n)},Q0=V("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,n)=>n.root})({display:"table-header-group"}),J0={variant:"head"},Ms="thead",X0=C.exports.forwardRef(function(n,t){const r=ye({props:n,name:"MuiTableHead"}),{className:o,component:a=Ms}=r,s=fe(r,Y0),l=g({},r,{component:a}),c=K0(l);return i(Co.Provider,{value:J0,children:i(Q0,g({as:a,className:Q(c.root,o),ref:t,role:a===Ms?null:"rowgroup",ownerState:l},s))})});var Bs=X0;function Z0(e){return Pe("MuiToolbar",e)}we("MuiToolbar",["root","gutters","regular","dense"]);const ex=["className","component","disableGutters","variant"],nx=e=>{const{classes:n,disableGutters:t,variant:r}=e;return Ce({root:["root",!t&&"gutters",r]},Z0,n)},tx=V("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,!t.disableGutters&&n.gutters,n[t.variant]]}})(({theme:e,ownerState:n})=>g({position:"relative",display:"flex",alignItems:"center"},!n.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}},n.variant==="dense"&&{minHeight:48}),({theme:e,ownerState:n})=>n.variant==="regular"&&e.mixins.toolbar),rx=C.exports.forwardRef(function(n,t){const r=ye({props:n,name:"MuiToolbar"}),{className:o,component:a="div",disableGutters:s=!1,variant:l="regular"}=r,c=fe(r,ex),u=g({},r,{component:a,disableGutters:s,variant:l}),d=nx(u);return i(tx,g({as:a,className:Q(d.root,o),ref:t,ownerState:u},c))});var Os=rx;function ox(e){return Pe("MuiTableRow",e)}const ix=we("MuiTableRow",["root","selected","hover","head","footer"]);var Ns=ix;const ax=["className","component","hover","selected"],sx=e=>{const{classes:n,selected:t,hover:r,head:o,footer:a}=e;return Ce({root:["root",t&&"selected",r&&"hover",o&&"head",a&&"footer"]},ox,n)},lx=V("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.head&&n.head,t.footer&&n.footer]}})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${Ns.hover}:hover`]:{backgroundColor:e.palette.action.hover},[`&.${Ns.selected}`]:{backgroundColor:$e(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:$e(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),zs="tr",cx=C.exports.forwardRef(function(n,t){const r=ye({props:n,name:"MuiTableRow"}),{className:o,component:a=zs,hover:s=!1,selected:l=!1}=r,c=fe(r,ax),u=C.exports.useContext(Co),d=g({},r,{component:a,hover:s,selected:l,head:u&&u.variant==="head",footer:u&&u.variant==="footer"}),p=sx(d);return i(lx,g({as:a,ref:t,className:Q(p.root,o),role:a===zs?null:"row",ownerState:d},c))});var rt=cx;function ux(e){return Pe("MuiTextField",e)}we("MuiTextField",["root"]);const dx=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],px={standard:zn,filled:Nd,outlined:zd},fx=e=>{const{classes:n}=e;return Ce({root:["root"]},ux,n)},mx=V(mn,{name:"MuiTextField",slot:"Root",overridesResolver:(e,n)=>n.root})({}),hx=C.exports.forwardRef(function(n,t){const r=ye({props:n,name:"MuiTextField"}),{autoComplete:o,autoFocus:a=!1,children:s,className:l,color:c="primary",defaultValue:u,disabled:d=!1,error:p=!1,FormHelperTextProps:m,fullWidth:f=!1,helperText:b,id:v,InputLabelProps:h,inputProps:x,InputProps:w,inputRef:k,label:T,maxRows:R,minRows:A,multiline:$=!1,name:D,onBlur:E,onChange:S,onFocus:P,placeholder:B,required:I=!1,rows:O,select:z=!1,SelectProps:_,type:H,value:G,variant:W="outlined"}=r,U=fe(r,dx),te=g({},r,{autoFocus:a,color:c,disabled:d,error:p,fullWidth:f,multiline:$,required:I,select:z,variant:W}),Z=fx(te),re={};W==="outlined"&&(h&&typeof h.shrink!="undefined"&&(re.notched=h.shrink),re.label=T),z&&((!_||!_.native)&&(re.id=void 0),re["aria-describedby"]=void 0);const de=kr(v),ce=b&&de?`${de}-helper-text`:void 0,K=T&&de?`${de}-label`:void 0,me=px[W],be=i(me,g({"aria-describedby":ce,autoComplete:o,autoFocus:a,defaultValue:u,fullWidth:f,multiline:$,name:D,rows:O,maxRows:R,minRows:A,type:H,value:G,id:de,inputRef:k,onBlur:E,onChange:S,onFocus:P,placeholder:B,inputProps:x},re,w));return y(mx,g({className:Q(Z.root,l),disabled:d,error:p,fullWidth:f,ref:t,required:I,color:c,variant:W,ownerState:te},U,{children:[T!=null&&T!==""&&i(Nn,g({htmlFor:de,id:K},h,{children:T})),z?i(dt,g({"aria-describedby":ce,id:de,labelId:K,value:G,input:be},_,{children:s})):be,b&&i(Lc,g({id:ce},m,{children:b}))]}))});var _n=hx,Ni={},qe={exports:{}};(function(e){function n(t){return t&&t.__esModule?t:{default:t}}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports})(qe);var Ge={},gx=Hl(xh);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=gx})(Ge);var bx=qe.exports;Object.defineProperty(Ni,"__esModule",{value:!0});var Nc=Ni.default=void 0;yx(C.exports);var vx=bx(Ge),xx=Ke;function zc(e){if(typeof WeakMap!="function")return null;var n=new WeakMap,t=new WeakMap;return(zc=function(r){return r?t:n})(e)}function yx(e,n){if(!n&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var t=zc(n);if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)){var s=o?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}var wx=(0,vx.default)((0,xx.jsx)("path",{d:"M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"}),"GitHub");Nc=Ni.default=wx;var zi={},Cx=qe.exports;Object.defineProperty(zi,"__esModule",{value:!0});var ai=zi.default=void 0,Sx=Cx(Ge),kx=Ke,Px=(0,Sx.default)((0,kx.jsx)("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");ai=zi.default=Px;const Tx={"GraphQL ID":"presetAffixes",list:[{name:"Power DPS",value:`{
  "affixes": ["Berserker", "Assassin", "Dragon"],
  "optimizeFor": "Damage",
  "minBoonDuration": 0
}`},{name:"Condi DPS",value:`{
  "affixes": ["Viper", "Sinister"],
  "optimizeFor": "Damage",
  "minBoonDuration": 0
}`},{name:"Hybrid DPS",value:`{
  "affixes": ["Viper", "Sinister", "Grieving"],
  "optimizeFor": "Damage",
  "minBoonDuration": 0
}`},{name:"Power Boon",value:`{
  "affixes": ["Berserker", "Assassin", "Diviner"],
  "optimizeFor": "Damage",
  "minBoonDuration": 79
}`},{name:"Condi Boon",value:`{
  "affixes": ["Viper", "Sinister", "Ritualist"],
  "optimizeFor": "Damage",
  "minBoonDuration": 79
}`},{name:"Condi Boon/Support",value:`{
  "affixes": ["Viper", "Seraph", "Celestial"],
  "optimizeFor": "Damage",
  "minBoonDuration": 79
}`},{name:"Heal",value:`{
  "affixes": ["Harrier", "Minstrel", "Cleric"],
  "optimizeFor": "Healing",
  "minBoonDuration": 100
}`},{name:"Viper Only",hidden:!0,value:`{
  "affixes": ["Viper"],
  "optimizeFor": "Damage",
  "minBoonDuration": 0
}`},{name:"Power Quickbrand 25%",hidden:!0,value:`{
  "affixes": ["Berserker", "Assassin", "Diviner"],
  "optimizeFor": "Damage",
  "minBoonDuration": 25
}`},{name:"Power Quickness Scrapper 33.3%",hidden:!0,value:`{
  "affixes": ["Berserker", "Assassin", "Diviner"],
  "optimizeFor": "Damage",
  "minBoonDuration": 33.3
}`},{name:"Power Boon Daredevil 99.7%",hidden:!0,value:`{
  "affixes": ["Berserker", "Assassin", "Diviner"],
  "optimizeFor": "Damage",
  "minBoonDuration": 99.7
}`},{name:"Condi Hybrid Firebrand 40%",hidden:!0,value:`{
  "affixes": ["Viper", "Seraph", "Celestial"],
  "optimizeFor": "Damage",
  "minBoonDuration": 40
}`},{name:"Condi Quickness Harbinger 23%",hidden:!0,value:`{
  "affixes": ["Viper", "Ritualist"],
  "optimizeFor": "Damage",
  "minBoonDuration": 23
}`},{name:"Condi Hybrid Druid 52%",hidden:!0,value:`{
  "affixes": ["Viper", "Seraph", "Celestial"],
  "optimizeFor": "Damage",
  "minBoonDuration": 52
}`},{name:"Condi Boon Daredevil 62%",hidden:!0,value:`{
  "affixes": ["Viper", "Sinister", "Ritualist"],
  "optimizeFor": "Damage",
  "minBoonDuration": 62
}`},{name:"Condi Alacrity Renegade 78%",hidden:!0,value:`{
  "affixes": ["Viper", "Ritualist"],
  "optimizeFor": "Damage",
  "minBoonDuration": 78
}`},{name:"Condi Quickbrand 35%",hidden:!0,value:`{
  "affixes": ["Viper", "Sinister", "Ritualist"],
  "optimizeFor": "Damage",
  "minBoonDuration": 35
}`},{name:"Condi Quickbrand 49",hidden:!0,value:`{
  "affixes": ["Viper", "Sinister", "Ritualist"],
  "optimizeFor": "Damage",
  "minBoonDuration": 18.8
}`},{name:"Condi Alacrity Specter 57%",hidden:!0,value:`{
  "affixes": ["Viper", "Ritualist"],
  "optimizeFor": "Damage",
  "minBoonDuration": 56.7
}`},{name:"Condi Alacrity Willbender 19%",hidden:!0,value:`{
  "affixes": ["Viper", "Grieving", "Celestial"],
  "optimizeFor": "Damage",
  "minBoonDuration": 19
}`},{name:"Condi DPS Rampager",value:`{
  "affixes": ["Viper", "Sinister", "Rampager"],
  "optimizeFor": "Damage",
  "minBoonDuration": 0
}`}]},Rx={"GraphQL ID":"presetBuffs",list:[{name:"None",value:"{ }"},{name:"Condi",value:`{
  "might": true,
  "fury": true,
  "protection": true,
  "vulnerability": true,
  "assassinsPresence": true,
  "jade-bot-base": true,
  "jade-bot-per-tier": true
}`},{name:"Power (no spotter)",value:`{
  "might": true,
  "fury": true,
  "protection": true,
  "vulnerability": true,
  "frostSpirit": true,
  "assassinsPresence": true,
  "jade-bot-base": true,
  "jade-bot-per-tier": true
}`},{name:"Power (spotter)",value:`{
  "might": true,
  "fury": true,
  "protection": true,
  "vulnerability": true,
  "spotter": true,
  "frostSpirit": true,
  "assassinsPresence": true,
  "jade-bot-base": true,
  "jade-bot-per-tier": true
}`},{name:"Benchmark",value:`{
  "might": true,
  "fury": true,
  "protection": true,
  "vulnerability": true,
  "bannerOfStrength": true,
  "bannerOfDiscipline": true,
  "empowerAllies": true,
  "frostSpirit": true,
  "spotter": true,
  "jade-bot-base": true,
  "jade-bot-per-tier": true
}`}]},Ax={"GraphQL ID":"presetDistribution",list:[{name:"None",value:`{
  "values2": { "Power": 0, "Burning": 0, "Bleeding": 0, "Poisoned": 0, "Torment": 0, "Confusion": 0 }
}`},{name:"100% Power",value:`{
  "values2": { "Power": 3000, "Burning": 0, "Bleeding": 0, "Poisoned": 0, "Torment": 0, "Confusion": 0 }
}`},{name:"Power Banner Bers Strength",profession:"Berserker",value:`{
  "values2": { "Power": 3079, "Burning": 0.73, "Bleeding": 0, "Poisoned": 0, "Torment": 0, "Confusion": 0 }
}`},{name:"Condi Banner Bers",profession:"Berserker",value:`{
  "values2": { "Power": 1739, "Burning": 10.28, "Bleeding": 15.12, "Poisoned": 1.95, "Torment": 1.2, "Confusion": 0 }
}`},{name:"Power Banner Spellbreaker",profession:"Spellbreaker",value:`{
  "values2": { "Power": 2617, "Burning": 0.59, "Bleeding": 0, "Poisoned": 0, "Torment": 0, "Confusion": 0 }
}`},{name:"Bladesworn",profession:"Bladesworn",value:`{
  "values2": { "Power": 3775, "Burning": 0.54, "Bleeding": 0, "Poisoned": 0, "Torment": 0, "Confusion": 0 }
}`},{name:"DH Radiance",profession:"Dragonhunter",value:`{
  "values2": { "Power": 3361, "Burning": 1.92, "Bleeding": 0, "Poisoned": 0, "Torment": 0, "Confusion": 0 }
}`},{name:"DH Virtues",profession:"Dragonhunter",value:`{
  "values2": { "Power": 3320, "Burning": 2.15, "Bleeding": 0, "Poisoned": 0, "Torment": 0, "Confusion": 0 }
}`},{name:"Core Guardian",profession:"Guardian",value:`{
  "values2": { "Power": 3340, "Burning": 1.1, "Bleeding": 0, "Poisoned": 0, "Torment": 0, "Confusion": 0 }
}`},{name:"Power Quickbrand (approx.)",profession:"Firebrand",value:`{
  "values2": { "Power": 3390, "Burning": 1.1, "Bleeding": 0, "Poisoned": 0, "Torment": 0, "Confusion": 0 }
}`},{name:"Condi Willbender Sword",profession:"Willbender",value:`{
  "values2": { "Power": 2734, "Burning": 14.18, "Bleeding": 0, "Poisoned": 0, "Torment": 0, "Confusion": 0 }
}`},{name:"Condi Willbender GS",profession:"Willbender",value:`{
  "values2": { "Power": 3010, "Burning": 13.38, "Bleeding": 0, "Poisoned": 0, "Torment": 0, "Confusion": 0 }
}`},{name:"CFB (5 page RF, allies)",profession:"Firebrand",value:`{
  "values2": { "Power": 2157, "Burning": 16.22, "Bleeding": 3.46, "Poisoned": 0, "Torment": 0, "Confusion": 0 }
}`},{name:"CFB (5 page RF, no allies)",profession:"Firebrand",value:`{
  "values2": { "Power": 2157, "Burning": 14.09, "Bleeding": 3.46, "Poisoned": 0, "Torment": 0, "Confusion": 0 }
}`},{name:"CFB (8 page, allies)",profession:"Firebrand",value:`{
  "values2": { "Power": 2094, "Burning": 16.32, "Bleeding": 2.41, "Poisoned": 0, "Torment": 0, "Confusion": 0 }
}`},{name:"CFB (8 page, no allies)",profession:"Firebrand",value:`{
  "values2": { "Power": 2094, "Burning": 13.88, "Bleeding": 2.41, "Poisoned": 0, "Torment": 0, "Confusion": 0 }
}`},{name:"Condi Quickbrand (allies)",profession:"Firebrand",value:`{
  "values2": { "Power": 2219, "Burning": 13.55, "Bleeding": 2.27, "Poisoned": 0, "Torment": 0, "Confusion": 0 }
}`},{name:"Condi Quickbrand (no allies)",profession:"Firebrand",value:`{
  "values2": { "Power": 2219, "Burning": 12.02, "Bleeding": 2.27, "Poisoned": 0, "Torment": 0, "Confusion": 0 }
}`},{name:"Hybrid FB Virtues",profession:"Firebrand",value:`{
  "values2": { "Power": 1864, "Burning": 13.8, "Bleeding": 3.0, "Poisoned": 0, "Torment": 0, "Confusion": 0 }
}`},{name:"Hybrid FB Honor",profession:"Firebrand",value:`{
  "values2": { "Power": 2242, "Burning": 12.2, "Bleeding": 3.7, "Poisoned": 0, "Torment": 0, "Confusion": 0 }
}`},{name:"Power Willbender Radiance",profession:"Willbender",value:`{
  "values2": { "Power": 3289, "Burning": 2.9, "Bleeding": 0, "Poisoned": 0, "Torment": 0, "Confusion": 0 }
}`},{name:"Power Willbender Virtues",profession:"Willbender",value:`{
  "values2": { "Power": 3734, "Burning": 5.43, "Bleeding": 0, "Poisoned": 0, "Torment": 0, "Confusion": 0 }
}`},{name:"Condi Alacrity Willbender",profession:"Willbender",value:`{
  "values2": { "Power": 2678, "Burning": 10.14, "Bleeding": 0, "Poisoned": 0, "Torment": 0, "Confusion": 0 }
}`},{name:"Power Alacrity Willbender",profession:"Willbender",value:`{
  "values2": { "Power": 3439, "Burning": 2.33, "Bleeding": 0, "Poisoned": 0, "Torment": 0, "Confusion": 0 }
}`},{name:"Power Weaver (BTTH, small)",profession:"Weaver",value:`{
  "values2": { "Power": 3604, "Burning": 1.09, "Bleeding": 0, "Poisoned": 0, "Torment": 0, "Confusion": 0 }
}`},{name:"Condi Weaver Sword",profession:"Weaver",value:`{
  "values2": { "Power": 2728, "Burning": 9.04, "Bleeding": 16.3, "Poisoned": 0, "Torment": 0, "Confusion": 0 }
}`},{name:"Condi Weaver (Dagger)",profession:"Weaver",value:`{
  "values2": { "Power": 2172, "Burning": 10.13, "Bleeding": 19.41, "Poisoned": 0, "Torment": 0, "Confusion": 0 }
}`},{name:"Hybrid Weaver",profession:"Weaver",value:`{
  "values2": { "Power": 3235, "Burning": 9.13, "Bleeding": 1.02, "Poisoned": 0, "Torment": 0, "Confusion": 0 }
}`},{name:"Condi Tempest",profession:"Tempest",value:`{
  "values2": { "Power": 3529, "Burning": 8.32, "Bleeding": 16.29, "Poisoned": 0, "Torment": 0, "Confusion": 0 }
}`},{name:"Power Tempest",profession:"Tempest",value:`{
  "values2": { "Power": 4408, "Burning": 4.4, "Bleeding": 4.4, "Poisoned": 0, "Torment": 0, "Confusion": 0 }
}`},{name:"[beta2] Power Catalyst",profession:"Catalyst",value:`{
  "values2": { "Power": 3804, "Burning": 6.67, "Bleeding": 5.78, "Poisoned": 0, "Torment": 0, "Confusion": 0 }
}`},{name:"[beta1] Condi Catalyst",profession:"Catalyst",value:`{
  "values2": { "Power": 3559, "Burning": 10.41, "Bleeding": 19.43, "Poisoned": 0, "Torment": 0, "Confusion": 0 }
}`},{name:"Alacrity Renegade",profession:"Renegade",value:`{
  "values2": { "Power": 3861, "Burning": 1.7, "Bleeding": 0, "Poisoned": 0, "Torment": 0, "Confusion": 0 }
}`},{name:"Condi Alac Invocation",profession:"Renegade",value:`{
  "values2": { "Power": 1928, "Burning": 5.15, "Bleeding": 14.69, "Poisoned": 1.97, "Torment": 16.64, "Confusion": 0 }
}`},{name:"Condi Alac Invocation (no allies)",profession:"Renegade",value:`{
  "values2": { "Power": 1928, "Burning": 5.15, "Bleeding": 10.69, "Poisoned": 1.97, "Torment": 16.64, "Confusion": 0 }
}`},{name:"Condi Renegade Devastation",profession:"Renegade",value:`{
  "values2": { "Power": 2092, "Burning": 4.21, "Bleeding": 14.13, "Poisoned": 2.23, "Torment": 16.34, "Confusion": 0 }
}`},{name:"Condi Renegade Devastation (no allies)",profession:"Renegade",value:`{
  "values2": { "Power": 2092, "Burning": 4.21, "Bleeding": 10.13, "Poisoned": 2.23, "Torment": 16.34, "Confusion": 0 }
}`},{name:"Condi Renegade Invocation",profession:"Renegade",value:`{
  "values2": { "Power": 2122, "Burning": 5.24, "Bleeding": 14.2, "Poisoned": 1.83, "Torment": 17.87, "Confusion": 0 }
}`},{name:"Condi Renegade Invocation (no allies)",profession:"Renegade",value:`{
  "values2": { "Power": 2122, "Burning": 5.24, "Bleeding": 10.2, "Poisoned": 1.83, "Torment": 17.87, "Confusion": 0 }
}`},{name:"Power Herald DE",profession:"Herald",value:`{
  "values2": { "Power": 2964, "Burning": 1.4, "Bleeding": 0, "Poisoned": 0, "Torment": 0, "Confusion": 0 }
}`},{name:"Condi Herald",profession:"Herald",value:`{
  "values2": { "Power": 1900, "Burning": 5.1, "Bleeding": 2.2, "Poisoned": 6, "Torment": 17.1, "Confusion": 0 }
}`},{name:"DPS Vindicator",profession:"Vindicator",value:`{
  "values2": { "Power": 3450, "Burning": 0.61, "Bleeding": 0, "Poisoned": 0, "Torment": 1.86, "Confusion": 0 }
}`},{name:"Power Slb Skirm",profession:"Soulbeast",value:`{
  "values2": { "Power": 2797, "Burning": 0.6, "Bleeding": 4.5, "Poisoned": 2.4, "Torment": 0, "Confusion": 0 }
}`},{name:"Condi Slb (D/T SB)",profession:"Soulbeast",value:`{
  "values2": { "Power": 1591, "Burning": 2.42, "Bleeding": 21.69, "Poisoned": 16.25, "Torment": 0, "Confusion": 0 }
}`},{name:"Condi Slb (D/T A/D)",profession:"Soulbeast",value:`{
  "values2": { "Power": 1664, "Burning": 3.54, "Bleeding": 19.95, "Poisoned": 13.86, "Torment": 0, "Confusion": 0 }
}`},{name:"Hybrid Slb (A/T D/A)",profession:"Soulbeast",value:`{
  "values2": { "Power": 2315, "Burning": 2.76, "Bleeding": 22.67, "Poisoned": 6.89, "Torment": 0, "Confusion": 0 }
}`},{name:"Pure Shortbow Slb BM",profession:"Soulbeast",value:`{
  "values2": { "Power": 1661, "Burning": 0.54, "Bleeding": 25.48, "Poisoned": 11.45, "Torment": 0, "Confusion": 0 }
}`},{name:"Condi Druid (approx.)",profession:"Druid",value:`{
  "values2": { "Power": 1610, "Burning": 2.3, "Bleeding": 19.5, "Poisoned": 4.9, "Torment": 0, "Confusion": 0 }
}`},{name:"Power Holo ECSU",profession:"Holosmith",value:`{
  "values2": { "Power": 3153, "Burning": 3.09, "Bleeding": 8.57, "Poisoned": 2.75, "Torment": 0, "Confusion": 0 }
}`},{name:"Condi Holo",profession:"Holosmith",value:`{
  "values2": { "Power": 2363, "Burning": 11.26, "Bleeding": 10.33, "Poisoned": 8.03, "Torment": 0, "Confusion": 4.6 }
}`},{name:"Condi Mechanist J-Drive Mace (approx.)",profession:"Mechanist",value:`{
  "values2": { "Power": 3597, "Burning": 7.55, "Bleeding": 13.29, "Poisoned": 3.57, "Torment": 0, "Confusion": 15.46 }
}`},{name:"Condi Mechanist Jade Dynamo Pistol (approx.)",profession:"Mechanist",value:`{
  "values2": { "Power": 3566, "Burning": 7.42, "Bleeding": 17.54, "Poisoned": 10.05, "Torment": 0, "Confusion": 9.18 }
}`},{name:"Power Scrapper",profession:"Scrapper",value:`{
  "values2": { "Power": 2713, "Burning": 0.74, "Bleeding": 8.17, "Poisoned": 4.03, "Torment": 0, "Confusion": 0 }
}`},{name:"Quickness Scrapper",profession:"Scrapper",value:`{
  "values2": { "Power": 2683, "Burning": 0.62, "Bleeding": 4.57, "Poisoned": 4.17, "Torment": 0, "Confusion": 0 }
}`},{name:"Power Chrono IA",profession:"Chronomancer",value:`{
  "values2": { "Power": 3849, "Burning": 0.63, "Bleeding": 0, "Poisoned": 0, "Torment": 0, "Confusion": 0.09 }
}`},{name:"Staff Mirage",profession:"Mirage",value:`{
  "values2": { "Power": 1257, "Burning": 0.54, "Bleeding": 10.51, "Poisoned": 0.81, "Torment": 15.06, "Confusion": 17.32 }
}`},{name:"Axe Mirage (Deception Torch)",profession:"Mirage",value:`{
  "values2": { "Power": 2307, "Burning": 1.63, "Bleeding": 5.71, "Poisoned": 0.16, "Torment": 23.79, "Confusion": 12.47 }
}`},{name:"Condi Chrono STM",profession:"Chronomancer",value:`{
  "values2": { "Power": 1980, "Burning": 2.26, "Bleeding": 3.94, "Poisoned": 0, "Torment": 6.39, "Confusion": 17.07 }
}`},{name:"Condi Virtuoso",profession:"Virtuoso",value:`{
  "values2": { "Power": 3540, "Burning": 0.52, "Bleeding": 2.03, "Poisoned": 0, "Torment": 8.3, "Confusion": 3.3 }
}`},{name:"Condi Virtuoso (sharpening sorrow)",profession:"Virtuoso",value:`{
  "values2": { "Power": 3219, "Burning": 0.52, "Bleeding": 2.03, "Poisoned": 0, "Torment": 8.3, "Confusion": 3.3 }
}`},{name:"Power Virtuoso",profession:"Virtuoso",value:`{
  "values2": { "Power": 3535, "Burning": 0.53, "Bleeding": 0.53, "Poisoned": 0, "Torment": 0, "Confusion": 0.59 }
}`},{name:"Condi Scourge",profession:"Scourge",value:`{
  "values2": { "Power": 1405, "Burning": 3.4, "Bleeding": 18.11, "Poisoned": 3.71, "Torment": 12.37, "Confusion": 0 }
}`},{name:"Power Reaper (inaccurate)",profession:"Reaper",value:`{
  "values2": { "Power": 2990, "Burning": 0.6, "Bleeding": 0, "Poisoned": 1, "Torment": 0, "Confusion": 0 }
}`},{name:"Condi Reaper",profession:"Reaper",value:`{
  "values2": { "Power": 2378, "Burning": 2.04, "Bleeding": 40.85, "Poisoned": 2.82, "Torment": 4.16, "Confusion": 0 }
}`},{name:"DPS Harbinger",profession:"Harbinger",value:`{
  "values2": { "Power": 2264, "Burning": 1.77, "Bleeding": 8.67, "Poisoned": 5.83, "Torment": 20.97, "Confusion": 0 }
}`},{name:"Quickness Harbinger",profession:"Harbinger",value:`{
  "values2": { "Power": 2202, "Burning": 1.67, "Bleeding": 9.33, "Poisoned": 5.97, "Torment": 17.13, "Confusion": 0 }
}`},{name:"Condi Deadeye",profession:"Deadeye",value:`{
  "values2": { "Power": 1690, "Burning": 0.5, "Bleeding": 19, "Poisoned": 14.6, "Torment": 9.5, "Confusion": 0 }
}`},{name:"Staff Daredevil",profession:"Daredevil",value:`{
  "values2": { "Power": 2712, "Burning": 0.62, "Bleeding": 0, "Poisoned": 0.96, "Torment": 0, "Confusion": 0 }
}`},{name:"Condi Daredevil",profession:"Daredevil",value:`{
  "values2": { "Power": 1323, "Burning": 0.6, "Bleeding": 21.07, "Poisoned": 14.52, "Torment": 5.88, "Confusion": 0 }
}`},{name:"Rifle Deadeye",profession:"Deadeye",value:`{
  "values2": { "Power": 3383, "Burning": 0.53, "Bleeding": 0.39, "Poisoned": 1.8, "Torment": 0, "Confusion": 0 }
}`},{name:"DPS Specter (allies)",profession:"Specter",value:`{
  "values2": { "Power": 2131, "Burning": 0.52, "Bleeding": 2.59, "Poisoned": 17.55, "Torment": 20.25, "Confusion": 0 }
}`},{name:"Alacrity Specter (allies)",profession:"Specter",value:`{
  "values2": { "Power": 1878, "Burning": 0.57, "Bleeding": 0, "Poisoned": 14.87, "Torment": 18.34, "Confusion": 0 }
}`},{name:"[beta1] DPS Specter Endless Night",profession:"Specter",value:`{
  "values2": { "Power": 556, "Burning": 0.5, "Bleeding": 0, "Poisoned": 12.5, "Torment": 38.9, "Confusion": 0 }
}`}]},Dx={"GraphQL ID":"presetExtras",list:[{name:"Power (Fractal)",value:`{
  "extras": {
    "Runes": {
      "scholar": {}
    },
    "Sigil1": {
      "force": {}
    },
    "Sigil2": {
      "impact/night/slaying-both": {}
    },
    "Enhancement": {
      "slaying-potion": {}
    },
    "Nourishment": {
      "cilantro-lime-sous-vide-steak": {}
    }
  }
}`},{name:"Power (Raid)",value:`{
  "extras": {
    "Runes": {
      "scholar": {}
    },
    "Sigil1": {
      "force": {}
    },
    "Sigil2": {
      "impact/night/slaying-only-3": {}
    },
    "Enhancement": {
      "superior-sharpening-stone": {}
    },
    "Nourishment": {
      "cilantro-lime-sous-vide-steak": {}
    }
  }
}`},{name:"Heal",value:`{
  "extras": {
    "Runes": {
      "monk": {}
    },
    "Sigil1": {
      "concentration": {}
    },
    "Sigil2": {
      "transference": {}
    },
    "Enhancement": {
      "bountiful-maintenance-oil": {}
    },
    "Nourishment": {
      "fruit-salad-mint-garnish": {}
    }
  }
}`},{name:"Alacrity Mirage (Raid)",profession:"Mirage",value:`{
  "extras": {
    "Runes": {
      "nightmare": {}
    },
    "Sigil1": {
      "bursting": {}
    },
    "Sigil2": {},
    "Enhancement": {
      "toxic-maintenance-oil": {}
    },
    "Nourishment": {
      "cilantro-and-cured-meat-flatbread": {}
    }
  }
}`},{name:"DPS Mirage (Raid)",profession:"Mirage",value:`{
  "extras": {
    "Runes": {
      "nightmare": {}
    },
    "Sigil1": {
      "bursting": {}
    },
    "Sigil2": {},
    "Enhancement": {
      "master-tuning-crystal": {}
    },
    "Nourishment": {
      "cilantro-and-cured-meat-flatbread": {}
    }
  }
}`},{name:"Condi Chrono STM",profession:"Chronomancer",value:`{
  "extras": {
    "Sigil1": {
      "bursting": {}
    },
    "Sigil2": {
      "mischief-ineptitude": {
        "amount": "0.9"
      }
    },
    "Runes": {
      "perplexity": {}
    },
    "Nourishment": {
      "salsa-topped-veggie-flatbread": {}
    },
    "Enhancement": {
      "toxic-focusing-crystal": {}
    }
  }
}`},{name:"Condi Chrono DPS",profession:"Chronomancer",value:`{
  "extras": {
    "Sigil1": {
      "bursting": {}
    },
    "Sigil2": {
      "mischief-ineptitude": {
        "amount": "0.9"
      }
    },
    "Runes": {
      "perplexity": {}
    },
    "Nourishment": {
      "salsa-topped-veggie-flatbread": {}
    },
    "Enhancement": {
      "toxic-focusing-crystal": {}
    }
  }
}`},{name:"Condi Virtuoso",profession:"Virtuoso",value:`{
  "extras": {
    "Sigil1": {
      "bursting": {},
      "agony": {}
    },
    "Sigil2": {
      "earth": {
        "amount": "4.3"
      }
    },
    "Runes": {
      "krait": {}
    },
    "Nourishment": {
      "plate-of-kimchi-pancakes": {},
      "fancy-potato-and-leek-soup": {}
    },
    "Enhancement": {
      "writ-of-masterful-accuracy": {}
    }
  }
}`},{name:"Power Virtuoso (Raid spotter)",profession:"Virtuoso",value:`{
  "extras": {
    "Runes": {
      "scholar": {}
    },
    "Sigil1": {
      "force": {}
    },
    "Sigil2": {
      "accuracy": {}
    },
    "Enhancement": {
      "superior-sharpening-stone": {}
    },
    "Nourishment": {
      "cilantro-lime-sous-vide-steak": {}
    }
  }
}`},{name:"DH Virtues (Fractal)",profession:"Dragonhunter",value:`{
  "extras": {
    "Runes": {
      "thief": {}
    },
    "Sigil1": {
      "force": {}
    },
    "Sigil2": {
      "impact/night/slaying-both": {}
    },
    "Enhancement": {
      "slaying-potion": {}
    },
    "Nourishment": {
      "cilantro-lime-sous-vide-steak": {}
    }
  }
}`},{name:"Power Willbender Virtues (Fractal)",profession:"Willbender",value:`{
  "extras": {
    "Runes": {
      "thief": {}
    },
    "Sigil1": {
      "force": {}
    },
    "Sigil2": {
      "impact/night/slaying-both": {}
    },
    "Enhancement": {
      "slaying-potion": {}
    },
    "Nourishment": {
      "cilantro-lime-sous-vide-steak": {}
    }
  }
}`},{name:"DH Virtues (Raid)",profession:"Dragonhunter",value:`{
  "extras": {
    "Runes": {
      "thief": {}
    },
    "Sigil1": {
      "force": {}
    },
    "Sigil2": {
      "accuracy": {}
    },
    "Enhancement": {
      "furious-sharpening-stone": {}
    },
    "Nourishment": {
      "cilantro-lime-sous-vide-steak": {}
    }
  }
}`},{name:"Power Willbender Virtues (Raid)",profession:"Willbender",value:`{
  "extras": {
    "Runes": {
      "thief": {}
    },
    "Sigil1": {
      "force": {}
    },
    "Sigil2": {
      "accuracy": {}
    },
    "Enhancement": {
      "furious-sharpening-stone": {}
    },
    "Nourishment": {
      "cilantro-lime-sous-vide-steak": {}
    }
  }
}`},{name:"Condi Willbender",profession:"Willbender",value:`{
  "extras": {
    "Sigil1": {
      "bursting": {}
    },
    "Sigil2": {
      "geomancy-torment-cwb": {}
    },
    "Runes": {
      "balthazar": {},
      "flame-legion-2": {}
    },
    "Nourishment": {
      "fishy-rice-bowl": {}
    },
    "Enhancement": {
      "toxic-focusing-crystal": {}
    }
  }
}`},{name:"Condi Alacrity Willbender",profession:"Willbender",value:`{
  "extras": {
    "Sigil1": {
      "bursting": {}
    },
    "Sigil2": {
      "geomancy-torment-cwb-alac": {}
    },
    "Runes": {
      "flame-legion-2": {}
    },
    "Nourishment": {
      "fishy-rice-bowl": {},
      "spherified-cilantro-oyster-soup": {}
    },
    "Enhancement": {
      "toxic-maintenance-oil": {}
    }
  },
  "lifestealAmount": ""
}`},{name:"CFB w/ Quickness (balthazar)",profession:"Firebrand",value:`{
  "extras": {
    "Runes": {
      "balthazar": {}
    },
    "Sigil1": {
      "bursting": {}
    },
    "Sigil2": {
      "geomancy-torment-cfb5-virtues": {}
    },
    "Enhancement": {
      "toxic-maintenance-oil": {}
    },
    "Nourishment": {
      "cilantro-and-cured-meat-flatbread": {}
    }
  }
}`},{name:"CFB w/ Quickness (renegade)",profession:"Firebrand",value:`{
  "extras": {
    "Runes": {
      "renegade": {}
    },
    "Sigil1": {
      "bursting": {}
    },
    "Sigil2": {
      "smoldering": {}
    },
    "Enhancement": {
      "toxic-maintenance-oil": {}
    },
    "Nourishment": {
      "fishy-rice-bowl": {}
    }
  }
}`},{name:"CFB DPS (5 page, balthazar)",profession:"Firebrand",value:`{
  "extras": {
    "Runes": {
      "balthazar": {}
    },
    "Sigil1": {
      "bursting": {}
    },
    "Sigil2": {
      "geomancy-torment-cfb5-virtues": {}
    },
    "Enhancement": {
      "toxic-focusing-crystal": {}
    },
    "Nourishment": {
      "cilantro-and-cured-meat-flatbread": {}
    }
  }
}`},{name:"CFB DPS (8 page, balthazar)",profession:"Firebrand",value:`{
  "extras": {
    "Runes": {
      "balthazar": {}
    },
    "Sigil1": {
      "bursting": {}
    },
    "Sigil2": {
      "geomancy-torment-cfb8-virtues": {}
    },
    "Enhancement": {
      "toxic-focusing-crystal": {}
    },
    "Nourishment": {
      "cilantro-and-cured-meat-flatbread": {}
    }
  }
}`},{name:"CFB DPS (renegade)",profession:"Firebrand",value:`{
  "extras": {
    "Runes": {
      "renegade": {}
    },
    "Sigil1": {
      "bursting": {}
    },
    "Sigil2": {
      "smoldering": {}
    },
    "Enhancement": {
      "toxic-focusing-crystal": {}
    },
    "Nourishment": {
      "fishy-rice-bowl": {}
    }
  }
}`},{name:"Condi Quickbrand",profession:"Firebrand",value:`{
  "extras": {
    "Sigil1": {
      "bursting": {}
    },
    "Sigil2": {
      "smoldering": {}
    },
    "Runes": {
      "firebrand-firebrand": {}
    },
    "Nourishment": {
      "fishy-rice-bowl": {}
    },
    "Enhancement": {
      "toxic-focusing-crystal": {}
    }
  }
}`},{name:"Hybrid FB Traveler",profession:"Firebrand",value:`{
  "extras": {
    "Runes": {
      "traveler": {}
    },
    "Sigil1": {
      "bursting": {}
    },
    "Sigil2": {
      "smoldering": {}
    },
    "Enhancement": {
      "master-tuning-crystal": {}
    },
    "Nourishment": {
      "cilantro-and-cured-meat-flatbread": {}
    }
  }
}`},{name:"Condi Bers",profession:"Berserker",value:`{
  "extras": {
    "Runes": {
      "renegade": {}
    },
    "Sigil1": {},
    "Sigil2": {},
    "Enhancement": {
      "master-tuning-crystal": {}
    },
    "Nourishment": {
      "salsa-topped-veggie-flatbread": {}
    }
  }
}`},{name:"Power Bers (Raid spotter)",profession:"Berserker",value:`{
  "extras": {
    "Runes": {
      "thief": {}
    },
    "Sigil1": {
      "force": {}
    },
    "Sigil2": {
      "impact/night/slaying-only-3": {}
    },
    "Enhancement": {
      "superior-sharpening-stone": {}
    },
    "Nourishment": {
      "cilantro-lime-sous-vide-steak": {}
    }
  }
}`},{name:"Banner Bladesworn (Raid spotter)",profession:"Bladesworn",value:`{
  "extras": {
    "Runes": {
      "thief": {}
    },
    "Sigil1": {
      "force": {}
    },
    "Sigil2": {
      "impact/night/slaying-only-3": {}
    },
    "Enhancement": {
      "superior-sharpening-stone": {}
    },
    "Nourishment": {
      "cilantro-lime-sous-vide-steak": {}
    }
  }
}`},{name:"DPS Bladesworn (Raid spotter)",profession:"Bladesworn",value:`{
  "extras": {
    "Sigil1": {
      "force": {}
    },
    "Sigil2": {
      "accuracy": {}
    },
    "Runes": {
      "scholar": {}
    },
    "Nourishment": {
      "cilantro-lime-sous-vide-steak": {}
    },
    "Enhancement": {
      "superior-sharpening-stone": {}
    }
  }
}`},{name:"Flame Legion Power Weaver (Raid)",profession:"Weaver",value:`{
  "extras": {
    "Runes": {
      "flame-legion": {}
    },
    "Sigil1": {
      "force": {}
    },
    "Sigil2": {
      "impact/night/slaying-only-3": {}
    },
    "Enhancement": {
      "superior-sharpening-stone": {}
    },
    "Nourishment": {
      "cilantro-lime-sous-vide-steak": {}
    }
  }
}`},{name:"Condi Weaver Sword",profession:"Weaver",value:`{
  "extras": {
    "Runes": {
      "elementalist": {}
    },
    "Sigil1": {},
    "Sigil2": {},
    "Enhancement": {
      "toxic-focusing-crystal": {}
    },
    "Nourishment": {
      "salsa-topped-veggie-flatbread": {}
    }
  }
}`},{name:"Condi Weaver Dagger",profession:"Weaver",value:`{
  "extras": {
    "Sigil1": {
      "earth": {}
    },
    "Sigil2": {
      "bursting": {}
    },
    "Runes": {
      "elementalist": {}
    },
    "Nourishment": {
      "salsa-topped-veggie-flatbread": {}
    },
    "Enhancement": {
      "toxic-focusing-crystal": {}
    }
  }
}`},{name:"Hybrid Weaver (Fractal)",profession:"Weaver",value:`{
  "extras": {
    "Runes": {
      "flame-legion": {}
    },
    "Sigil1": {
      "impact/night/slaying-both": {}
    },
    "Sigil2": {
      "bursting": {}
    },
    "Enhancement": {
      "toxic-focusing-crystal": {}
    },
    "Nourishment": {
      "spherified-cilantro-oyster-soup": {}
    }
  }
}`},{name:"Hybrid Weaver (Raid)",profession:"Weaver",value:`{
  "extras": {
    "Runes": {
      "flame-legion": {}
    },
    "Sigil1": {
      "force": {}
    },
    "Sigil2": {
      "bursting": {}
    },
    "Enhancement": {
      "toxic-focusing-crystal": {}
    },
    "Nourishment": {
      "spherified-cilantro-oyster-soup": {}
    }
  }
}`},{name:"Condi Tempest",profession:"Tempest",value:`{
  "extras": {
    "Runes": {
      "elementalist": {}
    },
    "Sigil1": {
      "bursting": {}
    },
    "Sigil2": {
      "smoldering": {}
    },
    "Enhancement": {
      "toxic-focusing-crystal": {}
    },
    "Nourishment": {
      "salsa-topped-veggie-flatbread": {}
    }
  }
}`},{name:"Power Tempest (Raid)",profession:"Tempest",value:`{
  "extras": {
    "Runes": {
      "scholar": {}
    },
    "Sigil1": {
      "force": {}
    },
    "Sigil2": {
      "accuracy": {}
    },
    "Enhancement": {
      "superior-sharpening-stone": {}
    },
    "Nourishment": {
      "plate-of-coq-au-vin-with-salsa": {}
    }
  }
}`},{name:"[beta1] Condi Catalyst",profession:"Catalyst",value:`{
  "extras": {
    "Runes": {
      "nightmare": {}
    },
    "Sigil1": {
      "bursting": {}
    },
    "Sigil2": {},
    "Enhancement": {
      "toxic-focusing-crystal": {}
    },
    "Nourishment": {
      "salsa-topped-veggie-flatbread": {}
    }
  }
}`},{name:"Power Slb Skirm (Raid)",profession:"Soulbeast",value:`{
  "extras": {
    "Runes": {
      "scholar": {}
    },
    "Sigil1": {
      "force": {}
    },
    "Sigil2": {
      "impact/night/slaying-only-3": {}
    },
    "Enhancement": {
      "superior-sharpening-stone": {}
    },
    "Nourishment": {
      "cilantro-lime-sous-vide-steak": {}
    }
  }
}`},{name:"Condi Slb",profession:"Soulbeast",value:`{
  "extras": {
    "Sigil1": {
      "bursting": {}
    },
    "Sigil2": {
      "earth": {}
    },
    "Runes": {
      "krait": {}
    },
    "Nourishment": {
      "cilantro-and-cured-meat-flatbread": {},
      "bowl-of-kimchi-tofu-stew": {}
    },
    "Enhancement": {
      "toxic-focusing-crystal": {}
    }
  }
}`},{name:"Hybrid Slb",profession:"Soulbeast",value:`{
  "extras": {
    "Sigil1": {
      "bursting": {}
    },
    "Sigil2": {},
    "Runes": {
      "krait": {}
    },
    "Nourishment": {
      "cilantro-and-cured-meat-flatbread": {},
      "plate-of-kimchi-pancakes": {}
    },
    "Enhancement": {
      "toxic-focusing-crystal": {}
    }
  }
}`},{name:"Pure Shortbow Slb BM",profession:"Soulbeast",value:`{
  "extras": {
    "Sigil1": {
      "bursting": {}
    },
    "Sigil2": {
      "earth": {}
    },
    "Runes": {
      "krait": {}
    },
    "Nourishment": {
      "salsa-topped-veggie-flatbread": {}
    },
    "Enhancement": {
      "toxic-focusing-crystal": {}
    }
  }
}`},{name:"Condi Druid",profession:"Druid",value:`{
  "extras": {
    "Runes": {
      "lich": {}
    },
    "Sigil1": {
      "malice": {}
    },
    "Sigil2": {},
    "Enhancement": {
      "toxic-maintenance-oil": {}
    },
    "Nourishment": {
      "salsa-topped-veggie-flatbread": {}
    }
  }
}`},{name:"Condi Holo",profession:"Holosmith",value:`{
  "extras": {
    "Runes": {
      "renegade": {}
    },
    "Sigil1": {
      "malice": {}
    },
    "Sigil2": {
      "bursting": {}
    },
    "Enhancement": {
      "master-tuning-crystal": {}
    },
    "Nourishment": {
      "cilantro-and-cured-meat-flatbread": {}
    }
  }
}`},{name:"Condi Alac Ren",profession:"Renegade",value:`{
  "extras": {
    "Sigil1": {},
    "Sigil2": {},
    "Runes": {
      "leadership": {}
    },
    "Nourishment": {
      "meaty-asparagus-skewer": {},
      "salsa-eggs-benedict": {},
      "spherified-cilantro-oyster-soup": {},
      "cilantro-and-cured-meat-flatbread": {}
    },
    "Enhancement": {
      "toxic-maintenance-oil": {}
    }
  }
}`},{name:"Condi Ren",profession:"Renegade",value:`{
  "extras": {
    "Sigil1": {},
    "Sigil2": {},
    "Runes": {
      "nightmare": {}
    },
    "Nourishment": {
      "cilantro-and-cured-meat-flatbread": {},
      "meaty-asparagus-skewer": {}
    },
    "Enhancement": {
      "toxic-focusing-crystal": {}
    }
  }
}`},{name:"Condi Herald",profession:"Herald",value:`{
  "extras": {
    "Runes": {
      "nightmare": {}
    },
    "Sigil1": {},
    "Sigil2": {},
    "Enhancement": {
      "master-tuning-crystal": {}
    },
    "Nourishment": {
      "salsa-topped-veggie-flatbread": {}
    }
  }
}`},{name:"DPS Vindicator",profession:"Vindicator",value:`{
  "extras": {
    "Runes": {
      "scholar": {}
    },
    "Sigil1": {
      "force": {}
    },
    "Sigil2": {},
    "Enhancement": {
      "superior-sharpening-stone": {}
    },
    "Nourishment": {
      "cilantro-lime-sous-vide-steak": {}
    }
  }
}`},{name:"Condi Mechanist",profession:"Mechanist",value:`{
  "extras": {
    "Runes": {
      "elementalist": {}
    },
    "Sigil1": {
      "bursting": {}
    },
    "Sigil2": {
      "earth": {}
    },
    "Enhancement": {
      "toxic-focusing-crystal": {}
    },
    "Nourishment": {
      "cilantro-and-cured-meat-flatbread": {}
    }
  },
  "lifestealAmount": "3.4"
}`},{name:"DPS Scourge",profession:"Scourge",value:`{
  "extras": {
    "Runes": {
      "nightmare": {}
    },
    "Sigil1": {
      "bursting": {}
    },
    "Sigil2": {
      "torment": {
        "amount": "1.85"
      }
    },
    "Enhancement": {
      "master-tuning-crystal": {}
    },
    "Nourishment": {
      "cilantro-and-cured-meat-flatbread": {}
    }
  },
  "lifestealAmount": ""
}`},{name:"Condi Reaper",profession:"Reaper",value:`{
  "extras": {
    "Runes": {
      "krait": {}
    },
    "Sigil1": {},
    "Sigil2": {},
    "Enhancement": {
      "toxic-focusing-crystal": {}
    },
    "Nourishment": {
      "cilantro-and-cured-meat-flatbread": {}
    }
  }
}`},{name:"DPS Harbinger",profession:"Harbinger",value:`{
  "extras": {
    "Sigil1": {
      "bursting": {},
      "demons": {}
    },
    "Sigil2": {
      "geomancy-torment-harb": {},
      "torment": {
        "amount": "1.85"
      }
    },
    "Runes": {
      "nightmare": {},
      "tormenting": {}
    },
    "Nourishment": {
      "meaty-asparagus-skewer": {},
      "cilantro-and-cured-meat-flatbread": {}
    },
    "Enhancement": {
      "toxic-focusing-crystal": {}
    }
  },
  "lifestealAmount": ""
}`},{name:"Quickness Harbinger",profession:"Harbinger",value:`{
  "extras": {
    "Sigil1": {
      "bursting": {},
      "demons": {}
    },
    "Sigil2": {
      "torment": {
        "amount": "1.85"
      },
      "geomancy-torment-cwb-alac": {}
    },
    "Runes": {
      "tormenting": {},
      "nightmare": {}
    },
    "Nourishment": {
      "cilantro-and-cured-meat-flatbread": {},
      "salsa-topped-veggie-flatbread": {},
      "meaty-asparagus-skewer": {}
    },
    "Enhancement": {
      "master-tuning-crystal": {}
    }
  },
  "lifestealAmount": ""
}`},{name:"[beta1] Quickness Harbinger (Cele)",profession:"Harbinger",value:`{
  "extras": {
    "Runes": {
      "tormenting": {}
    },
    "Sigil1": {
      "bursting": {}
    },
    "Sigil2": {},
    "Enhancement": {
      "master-tuning-crystal": {}
    },
    "Nourishment": {
      "salsa-topped-veggie-flatbread": {}
    }
  }
}`},{name:"Condi Deadeye",profession:"Deadeye",value:`{
  "extras": {
    "Runes": {
      "nightmare": {}
    },
    "Sigil1": {
      "bursting": {}
    },
    "Sigil2": {},
    "Enhancement": {
      "master-tuning-crystal": {}
    },
    "Nourishment": {
      "cilantro-and-cured-meat-flatbread": {}
    }
  }
}`},{name:"Power Boon Daredevil",profession:"Daredevil",value:`{
  "extras": {
    "Runes": {
      "thief": {}
    },
    "Sigil1": {
      "force": {}
    },
    "Sigil2": {
      "concentration": {}
    },
    "Enhancement": {
      "potent-lucent-oil": {}
    },
    "Nourishment": {
      "cilantro-lime-sous-vide-steak": {}
    }
  }
}`},{name:"Condi Daredevil",profession:"Daredevil",value:`{
  "extras": {
    "Sigil1": {
      "earth": {}
    },
    "Sigil2": {
      "doom": {}
    },
    "Runes": {
      "afflicted": {},
      "krait-no-elite": {}
    },
    "Nourishment": {
      "cilantro-and-cured-meat-flatbread": {},
      "plate-of-kimchi-pancakes": {},
      "bowl-of-kimchi-tofu-stew": {}
    },
    "Enhancement": {
      "master-tuning-crystal": {},
      "toxic-focusing-crystal": {}
    }
  }
}`},{name:"Condi Boon Daredevil",profession:"Daredevil",value:`{
  "extras": {
    "Runes": {
      "firebrand": {}
    },
    "Sigil1": {
      "concentration": {}
    },
    "Sigil2": {
      "malice": {}
    },
    "Enhancement": {
      "master-tuning-crystal": {}
    },
    "Nourishment": {
      "salsa-topped-veggie-flatbread": {}
    }
  }
}`},{name:"DPS Specter",profession:"Specter",value:`{
  "extras": {
    "Sigil1": {
      "bursting": {}
    },
    "Sigil2": {
      "doom": {
        "amount": "0.93"
      }
    },
    "Runes": {
      "tormenting": {}
    },
    "Nourishment": {
      "bowl-of-kimchi-tofu-stew": {}
    },
    "Enhancement": {
      "toxic-focusing-crystal": {}
    }
  }
}`},{name:"Alacrity Specter",profession:"Specter",value:`{
  "extras": {
    "Sigil1": {
      "demons": {},
      "concentration": {}
    },
    "Sigil2": {
      "doom": {
        "amount": "0.93"
      }
    },
    "Runes": {
      "renegade": {}
    },
    "Nourishment": {
      "salsa-eggs-benedict": {},
      "meaty-asparagus-skewer": {}
    },
    "Enhancement": {
      "toxic-maintenance-oil": {}
    }
  }
}`}]},$x={"GraphQL ID":"presetInfusions",list:[{name:"None",value:`{
  "primaryInfusion": "",
  "secondaryInfusion": "",
  "primaryMaxInfusions": "",
  "secondaryMaxInfusions": ""
}`},{name:"Power + Precision",value:`{
  "primaryInfusion": "Power",
  "secondaryInfusion": "Precision",
  "primaryMaxInfusions": "",
  "secondaryMaxInfusions": ""
}`},{name:"Condition Damage + Expertise",value:`{
  "primaryInfusion": "Condition Damage",
  "secondaryInfusion": "Expertise",
  "primaryMaxInfusions": "",
  "secondaryMaxInfusions": ""
}`},{name:"Condition Damage + Precision",value:`{
  "primaryInfusion": "Condition Damage",
  "secondaryInfusion": "Precision",
  "primaryMaxInfusions": "",
  "secondaryMaxInfusions": ""
}`},{name:"Healing Power + Concentration",value:`{
  "primaryInfusion": "Healing Power",
  "secondaryInfusion": "Concentration",
  "primaryMaxInfusions": "",
  "secondaryMaxInfusions": ""
}`}]},Ix={"GraphQL ID":"presetTraits",list:[{name:"Power Chrono IA",profession:"Chronomancer",traits:`{
  "showAll": false,
  "selectedLines": [
    "10",
    "1",
    "40"
  ],
  "selectedTraits": [
    [
      682,
      713,
      681
    ],
    [
      701,
      708,
      692
    ],
    [
      1995,
      1978,
      1890
    ]
  ],
  "items": [
    {
      "fragility": {
        "amount": ""
      },
      "egotism": {
        "amount": ""
      },
      "vicious-expression": {
        "amount": ""
      }
    },
    {
      "fencers-finesse": {
        "amount": ""
      },
      "superiority-complex-base": {},
      "superiority-complex": {
        "amount": ""
      },
      "sharper-images": {
        "amount": "4.01"
      },
      "sharper-images-minus-fury": {
        "amount": "1.02"
      }
    },
    {
      "danger-time": {}
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Axe Mirage",profession:"Mirage",traits:`{
  "showAll": false,
  "selectedLines": [
    "45",
    "1",
    "59"
  ],
  "selectedTraits": [
    [
      670,
      669,
      671
    ],
    [
      700,
      1889,
      1950
    ],
    [
      2141,
      2098,
      2070
    ]
  ],
  "items": [
    {
      "illusionary-defense": {
        "amount": ""
      },
      "illusionary-membrane": {
        "amount": ""
      },
      "chaotic-potency": {},
      "chaotic-persistence": {}
    },
    {
      "fencers-finesse": {
        "amount": ""
      },
      "superiority-complex-base": {},
      "superiority-complex": {
        "amount": ""
      },
      "sharper-images-minus-fury": {
        "amount": "4.43"
      }
    },
    {
      "nomads-endurance": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {
    "signet-of-domination": {},
    "signet-of-midnight": {}
  }
}`},{name:"Staff Mirage",profession:"Mirage",traits:`{
  "showAll": false,
  "selectedLines": [
    "45",
    "1",
    "59"
  ],
  "selectedTraits": [
    [
      670,
      669,
      1687
    ],
    [
      701,
      1889,
      1950
    ],
    [
      2141,
      2178,
      2070
    ]
  ],
  "items": [
    {
      "illusionary-defense": {
        "amount": ""
      },
      "illusionary-membrane": {
        "amount": ""
      },
      "chaotic-potency": {},
      "chaotic-potency-2": {
        "amount": ""
      },
      "chaotic-persistence": {}
    },
    {
      "fencers-finesse": {
        "amount": ""
      },
      "superiority-complex-base": {},
      "superiority-complex": {
        "amount": ""
      },
      "sharper-images-minus-fury": {
        "amount": "2.68"
      }
    },
    {
      "nomads-endurance": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {
    "signet-of-domination": {},
    "signet-of-midnight": {}
  }
}`},{name:"Condi Chrono STM",profession:"Chronomancer",traits:`{
  "showAll": false,
  "selectedLines": [
    "24",
    "1",
    "40"
  ],
  "selectedTraits": [
    [
      691,
      1690,
      753
    ],
    [
      700,
      1889,
      1950
    ],
    [
      1995,
      1978,
      2022
    ]
  ],
  "items": [
    {
      "compounding-power": {
        "amount": ""
      }
    },
    {
      "fencers-finesse": {
        "amount": ""
      },
      "superiority-complex-base": {},
      "superiority-complex": {
        "amount": ""
      },
      "sharper-images-minus-fury": {
        "amount": "1.51"
      }
    },
    {
      "danger-time": {}
    }
  ]
}`,skills:`{
  "skills": {
    "signet-of-domination": {}
  }
}`},{name:"Condi Virtuoso",profession:"Virtuoso",traits:`{
  "showAll": false,
  "selectedLines": [
    "24",
    "1",
    "66"
  ],
  "selectedTraits": [
    [
      721,
      1690,
      733
    ],
    [
      701,
      708,
      692
    ],
    [
      2202,
      2205,
      2223
    ]
  ],
  "items": [
    {
      "compounding-power": {
        "amount": ""
      }
    },
    {
      "fencers-finesse": {
        "amount": "5.3"
      },
      "superiority-complex-base": {},
      "superiority-complex": {
        "amount": ""
      },
      "sharper-images": {
        "amount": "1.73"
      }
    },
    {
      "mental-focus": {
        "amount": ""
      },
      "deadly-blades": {
        "amount": "98"
      },
      "sharpening-sorrow": {},
      "quiet-intensity": {},
      "bloodsong": {},
      "jagged-mind": {
        "amount": "5"
      }
    }
  ]
}`,skills:`{
  "skills": {
    "signet-of-domination": {},
    "signet-of-midnight": {}
  }
}`},{name:"Condi Virtuoso (sharpening sorrow)",profession:"Virtuoso",traits:`{
  "showAll": false,
  "selectedLines": [
    "24",
    "1",
    "66"
  ],
  "selectedTraits": [
    [
      721,
      1690,
      733
    ],
    [
      701,
      708,
      692
    ],
    [
      2202,
      2207,
      2223
    ]
  ],
  "items": [
    {
      "compounding-power": {
        "amount": ""
      }
    },
    {
      "fencers-finesse": {
        "amount": "5.3"
      },
      "superiority-complex-base": {},
      "superiority-complex": {
        "amount": ""
      },
      "sharper-images": {
        "amount": "1.73"
      }
    },
    {
      "mental-focus": {
        "amount": ""
      },
      "deadly-blades": {
        "amount": "98"
      },
      "sharpening-sorrow": {},
      "quiet-intensity": {},
      "bloodsong": {},
      "jagged-mind": {
        "amount": "4.82"
      }
    }
  ]
}`,skills:`{
  "skills": {
    "signet-of-domination": {},
    "signet-of-midnight": {}
  }
}`},{name:"Power Virtuoso (accuracy)",profession:"Virtuoso",traits:`{
  "showAll": false,
  "selectedLines": [
    "10",
    "1",
    "66"
  ],
  "selectedTraits": [
    [
      0,
      713,
      681
    ],
    [
      701,
      708,
      692
    ],
    [
      2208,
      2205,
      2223
    ]
  ],
  "items": [
    {
      "fragility": {
        "amount": ""
      },
      "egotism": {
        "amount": ""
      },
      "vicious-expression": {
        "amount": ""
      }
    },
    {
      "fencers-finesse": {
        "amount": ""
      },
      "superiority-complex-base": {},
      "superiority-complex": {
        "amount": ""
      },
      "sharper-images-minus-7": {
        "amount": "1.75"
      }
    },
    {
      "mental-focus": {
        "amount": ""
      },
      "deadly-blades": {
        "amount": ""
      },
      "sharpening-sorrow": {},
      "quiet-intensity": {},
      "bloodsong": {}
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Power Virtuoso (no accuracy)",profession:"Virtuoso",traits:`{
  "showAll": false,
  "selectedLines": [
    "10",
    "1",
    "66"
  ],
  "selectedTraits": [
    [
      0,
      713,
      681
    ],
    [
      701,
      708,
      692
    ],
    [
      2208,
      2205,
      2223
    ]
  ],
  "items": [
    {
      "fragility": {
        "amount": ""
      },
      "egotism": {
        "amount": ""
      },
      "vicious-expression": {
        "amount": ""
      }
    },
    {
      "fencers-finesse": {
        "amount": ""
      },
      "superiority-complex-base": {},
      "superiority-complex": {
        "amount": ""
      },
      "sharper-images": {
        "amount": "1.75"
      }
    },
    {
      "mental-focus": {
        "amount": ""
      },
      "deadly-blades": {
        "amount": ""
      },
      "sharpening-sorrow": {},
      "quiet-intensity": {},
      "bloodsong": {}
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"DH Radiance w/ PI",profession:"Dragonhunter",traits:`{
  "showAll": false,
  "selectedLines": [
    "16",
    "42",
    "27"
  ],
  "selectedTraits": [
    [
      574,
      565,
      579
    ],
    [
      634,
      653,
      2017
    ],
    [
      1898,
      1835,
      1955
    ]
  ],
  "items": [
    {
      "right-hand-strength": {},
      "right-hand-strength-1h": {
        "amount": ""
      },
      "radiant-fire": {},
      "retribution": {
        "amount": ""
      },
      "radiant-power": {},
      "amplified-wrath": {},
      "righteous-instincts": {}
    },
    {
      "fiery-wrath": {},
      "symbolic-exposure": {},
      "zealous-blade-base": {},
      "zealous-blade-gs": {
        "amount": ""
      },
      "kindled-zeal": {},
      "symbolic-avenger": {}
    },
    {
      "zealots-aggression": {},
      "pure-of-sight": {},
      "hunters-fortification": {},
      "big-game-hunter": {}
    }
  ]
}`,skills:`{
  "skills": {
    "bane-signet-2": {
      "amount": ""
    }
  }
}`},{name:"DH Radiance",profession:"Dragonhunter",traits:`{
  "showAll": false,
  "selectedLines": [
    "16",
    "42",
    "27"
  ],
  "selectedTraits": [
    [
      574,
      565,
      1683
    ],
    [
      634,
      653,
      2017
    ],
    [
      1898,
      1835,
      1955
    ]
  ],
  "items": [
    {
      "right-hand-strength": {},
      "right-hand-strength-1h": {
        "amount": ""
      },
      "radiant-fire": {},
      "retribution": {
        "amount": ""
      },
      "radiant-power": {},
      "amplified-wrath": {},
      "righteous-instincts": {}
    },
    {
      "fiery-wrath": {},
      "symbolic-exposure": {},
      "zealous-blade-base": {},
      "zealous-blade-gs": {
        "amount": ""
      },
      "kindled-zeal": {},
      "symbolic-avenger": {}
    },
    {
      "zealots-aggression": {},
      "pure-of-sight": {},
      "hunters-fortification": {},
      "big-game-hunter": {}
    }
  ]
}`,skills:`{
  "skills": {
    "bane-signet": {
      "amount": ""
    }
  }
}`},{name:"DH Virtues",profession:"Dragonhunter",traits:`{
  "showAll": false,
  "selectedLines": [
    "46",
    "42",
    "27"
  ],
  "selectedTraits": [
    [
      624,
      603,
      622
    ],
    [
      634,
      653,
      2017
    ],
    [
      1898,
      1835,
      1955
    ]
  ],
  "items": [
    {
      "inspired-virtue": {
        "amount": ""
      },
      "unscathed-contender": {
        "amount": ""
      },
      "virtue-of-retribution": {},
      "inspiring-virtue": {
        "amount": ""
      },
      "power-of-the-virtuous": {}
    },
    {
      "fiery-wrath": {},
      "symbolic-exposure": {},
      "zealous-blade-base": {},
      "zealous-blade-gs": {
        "amount": ""
      },
      "kindled-zeal": {},
      "symbolic-avenger": {}
    },
    {
      "zealots-aggression": {},
      "pure-of-sight": {},
      "hunters-fortification": {},
      "big-game-hunter": {}
    }
  ]
}`,skills:`{
  "skills": {
    "bane-signet": {
      "amount": ""
    }
  }
}`},{name:"Core Guardian",profession:"Guardian",traits:`{
  "showAll": false,
  "selectedLines": [
    "16",
    "42",
    "46"
  ],
  "selectedTraits": [
    [
      566,
      565,
      1683
    ],
    [
      634,
      653,
      2017
    ],
    [
      624,
      603,
      622
    ]
  ],
  "items": [
    {
      "right-hand-strength": {},
      "right-hand-strength-1h": {
        "amount": ""
      },
      "radiant-fire": {},
      "retribution": {
        "amount": ""
      },
      "radiant-power": {},
      "amplified-wrath": {},
      "righteous-instincts": {}
    },
    {
      "fiery-wrath": {},
      "symbolic-exposure": {},
      "zealous-blade-base": {},
      "zealous-blade-gs": {
        "amount": ""
      },
      "kindled-zeal": {},
      "symbolic-avenger": {}
    },
    {
      "inspired-virtue": {
        "amount": ""
      },
      "unscathed-contender": {
        "amount": ""
      },
      "virtue-of-retribution": {},
      "inspiring-virtue": {
        "amount": "80"
      },
      "power-of-the-virtuous": {}
    }
  ]
}`,skills:`{
  "skills": {
    "bane-signet": {
      "amount": ""
    }
  }
}`},{name:"Power Quickbrand",profession:"Firebrand",traits:`{
  "showAll": false,
  "selectedLines": [
    "16",
    "42",
    "62"
  ],
  "selectedTraits": [
    [
      574,
      565,
      579
    ],
    [
      634,
      653,
      2017
    ],
    [
      2101,
      2076,
      2159
    ]
  ],
  "items": [
    {
      "right-hand-strength": {},
      "right-hand-strength-1h": {
        "amount": ""
      },
      "radiant-fire": {},
      "retribution": {
        "amount": ""
      },
      "radiant-power": {},
      "amplified-wrath": {},
      "righteous-instincts": {}
    },
    {
      "fiery-wrath": {},
      "symbolic-exposure": {},
      "zealous-blade-base": {},
      "zealous-blade-gs": {
        "amount": ""
      },
      "kindled-zeal": {},
      "symbolic-avenger": {}
    },
    {
      "imbued-haste": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {
    "bane-signet-2": {
      "amount": ""
    }
  }
}`},{name:"Condi Willbender",profession:"Willbender",traits:`{
  "showAll": false,
  "selectedLines": [
    "16",
    "46",
    "65"
  ],
  "selectedTraits": [
    [
      566,
      567,
      1686
    ],
    [
      617,
      603,
      622
    ],
    [
      2191,
      2197,
      2201
    ]
  ],
  "items": [
    {
      "right-hand-strength": {},
      "right-hand-strength-1h": {
        "amount": "100"
      },
      "radiant-fire": {},
      "retribution": {
        "amount": ""
      },
      "radiant-power": {},
      "amplified-wrath": {},
      "righteous-instincts": {}
    },
    {
      "inspired-virtue": {
        "amount": ""
      },
      "unscathed-contender": {
        "amount": ""
      },
      "virtue-of-retribution": {},
      "inspiring-virtue": {
        "amount": ""
      },
      "power-of-the-virtuous": {}
    },
    {
      "searing-pact": {},
      "lethal-tempo": {
        "amount": ""
      },
      "tyrants-momentum": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {
    "signet-of-wrath": {
      "amount": ""
    }
  }
}`},{name:"Condi Quickbrand",profession:"Firebrand",traits:`{
  "showAll": false,
  "selectedLines": [
    "16",
    "46",
    "62"
  ],
  "selectedTraits": [
    [
      566,
      567,
      1686
    ],
    [
      617,
      587,
      622
    ],
    [
      2101,
      2063,
      2159
    ]
  ],
  "items": [
    {
      "right-hand-strength": {},
      "right-hand-strength-1h": {
        "amount": "100"
      },
      "radiant-fire": {},
      "retribution": {
        "amount": ""
      },
      "radiant-power": {},
      "amplified-wrath": {},
      "righteous-instincts": {}
    },
    {
      "inspired-virtue": {
        "amount": ""
      },
      "unscathed-contender": {
        "amount": ""
      },
      "virtue-of-retribution": {},
      "inspiring-virtue": {
        "amount": ""
      },
      "power-of-the-virtuous": {}
    },
    {
      "imbued-haste": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {
    "signet-of-wrath": {
      "amount": ""
    },
    "mantra-of-flame": {}
  }
}`},{name:"CFB DPS 5 page",profession:"Firebrand",traits:`{
  "showAll": false,
  "selectedLines": [
    "16",
    "46",
    "62"
  ],
  "selectedTraits": [
    [
      566,
      567,
      1686
    ],
    [
      617,
      587,
      622
    ],
    [
      2075,
      2116,
      2159
    ]
  ],
  "items": [
    {
      "right-hand-strength": {},
      "right-hand-strength-1h": {
        "amount": "100"
      },
      "radiant-fire": {},
      "retribution": {
        "amount": ""
      },
      "radiant-power": {},
      "amplified-wrath": {},
      "righteous-instincts": {}
    },
    {
      "inspired-virtue": {
        "amount": ""
      },
      "unscathed-contender": {
        "amount": ""
      },
      "virtue-of-retribution": {},
      "inspiring-virtue": {
        "amount": ""
      },
      "power-of-the-virtuous": {}
    },
    {
      "imbued-haste": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {
    "signet-of-wrath": {
      "amount": ""
    }
  }
}`},{name:"CFB DPS 8 page",profession:"Firebrand",traits:`{
  "showAll": false,
  "selectedLines": [
    "16",
    "46",
    "62"
  ],
  "selectedTraits": [
    [
      566,
      567,
      1686
    ],
    [
      617,
      587,
      622
    ],
    [
      2086,
      2116,
      2159
    ]
  ],
  "items": [
    {
      "right-hand-strength": {},
      "right-hand-strength-1h": {
        "amount": "100"
      },
      "radiant-fire": {},
      "retribution": {
        "amount": ""
      },
      "radiant-power": {},
      "amplified-wrath": {},
      "righteous-instincts": {}
    },
    {
      "inspired-virtue": {
        "amount": ""
      },
      "unscathed-contender": {
        "amount": ""
      },
      "virtue-of-retribution": {},
      "inspiring-virtue": {
        "amount": ""
      },
      "power-of-the-virtuous": {}
    },
    {
      "imbued-haste": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {
    "signet-of-wrath": {
      "amount": ""
    }
  }
}`},{name:"Hybrid FB Virtues",profession:"Firebrand",traits:`{
  "showAll": false,
  "selectedLines": [
    "16",
    "46",
    "62"
  ],
  "selectedTraits": [
    [
      566,
      567,
      1686
    ],
    [
      617,
      587,
      622
    ],
    [
      2101,
      2116,
      2159
    ]
  ],
  "items": [
    {
      "right-hand-strength": {},
      "right-hand-strength-1h": {
        "amount": "100"
      },
      "radiant-fire": {},
      "retribution": {
        "amount": ""
      },
      "radiant-power": {},
      "amplified-wrath": {},
      "righteous-instincts": {}
    },
    {
      "inspired-virtue": {
        "amount": ""
      },
      "unscathed-contender": {
        "amount": ""
      },
      "virtue-of-retribution": {},
      "inspiring-virtue": {
        "amount": ""
      },
      "power-of-the-virtuous": {}
    },
    {
      "imbued-haste": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Hybrid FB Honor",profession:"Firebrand",traits:`{
  "showAll": false,
  "selectedLines": [
    "16",
    "49",
    "62"
  ],
  "selectedTraits": [
    [
      566,
      567,
      1686
    ],
    [
      654,
      562,
      558
    ],
    [
      2101,
      2116,
      2159
    ]
  ],
  "items": [
    {
      "right-hand-strength": {},
      "right-hand-strength-1h": {
        "amount": "100"
      },
      "radiant-fire": {},
      "retribution": {
        "amount": ""
      },
      "radiant-power": {},
      "amplified-wrath": {},
      "righteous-instincts": {}
    },
    {
      "invigorating-bulwark": {
        "amount": ""
      },
      "honorable-staff": {},
      "honorable-staff-2": {},
      "force-of-will": {}
    },
    {
      "imbued-haste": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Healbrand",profession:"Firebrand",traits:`{
  "showAll": false,
  "selectedLines": [
    "16",
    "49",
    "62"
  ],
  "selectedTraits": [
    [
      574,
      578,
      579
    ],
    [
      1899,
      557,
      558
    ],
    [
      2101,
      2063,
      2159
    ]
  ],
  "items": [
    {
      "right-hand-strength": {},
      "right-hand-strength-1h": {
        "amount": ""
      },
      "radiant-fire": {},
      "retribution": {
        "amount": ""
      },
      "radiant-power": {},
      "amplified-wrath": {},
      "righteous-instincts": {}
    },
    {
      "invigorating-bulwark": {
        "amount": ""
      },
      "honorable-staff": {},
      "force-of-will": {}
    },
    {
      "imbued-haste": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {
    "bane-signet-2": {
      "amount": ""
    }
  }
}`},{name:"Power Willbender Radiance",profession:"Willbender",traits:`{
  "showAll": false,
  "selectedLines": [
    "16",
    "42",
    "65"
  ],
  "selectedTraits": [
    [
      566,
      565,
      1683
    ],
    [
      634,
      653,
      2017
    ],
    [
      2190,
      2197,
      2201
    ]
  ],
  "items": [
    {
      "right-hand-strength": {},
      "right-hand-strength-1h": {
        "amount": ""
      },
      "radiant-fire": {},
      "retribution": {
        "amount": ""
      },
      "radiant-power": {},
      "amplified-wrath": {},
      "righteous-instincts": {}
    },
    {
      "fiery-wrath": {},
      "symbolic-exposure": {},
      "zealous-blade-base": {},
      "zealous-blade-gs": {
        "amount": ""
      },
      "kindled-zeal": {},
      "symbolic-avenger": {}
    },
    {
      "power-for-power": {},
      "lethal-tempo": {
        "amount": ""
      },
      "tyrants-momentum": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {
    "bane-signet": {
      "amount": ""
    }
  }
}`},{name:"Power Willbender Virtues",profession:"Willbender",traits:`{
  "showAll": false,
  "selectedLines": [
    "46",
    "42",
    "65"
  ],
  "selectedTraits": [
    [
      624,
      603,
      622
    ],
    [
      634,
      653,
      2017
    ],
    [
      2190,
      2197,
      2201
    ]
  ],
  "items": [
    {
      "inspired-virtue": {
        "amount": ""
      },
      "unscathed-contender": {
        "amount": ""
      },
      "virtue-of-retribution": {},
      "inspiring-virtue": {
        "amount": ""
      },
      "power-of-the-virtuous": {}
    },
    {
      "fiery-wrath": {},
      "symbolic-exposure": {},
      "zealous-blade-base": {},
      "zealous-blade-gs": {
        "amount": ""
      },
      "kindled-zeal": {},
      "symbolic-avenger": {}
    },
    {
      "power-for-power": {},
      "lethal-tempo": {
        "amount": ""
      },
      "tyrants-momentum": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {
    "bane-signet": {
      "amount": ""
    }
  }
}`},{name:"Condi Alacrity Willbender",profession:"Willbender",traits:`{
  "showAll": false,
  "selectedLines": [
    "16",
    "46",
    "65"
  ],
  "selectedTraits": [
    [
      566,
      567,
      1686
    ],
    [
      617,
      603,
      554
    ],
    [
      2191,
      2197,
      2195
    ]
  ],
  "items": [
    {
      "right-hand-strength": {},
      "right-hand-strength-1h": {
        "amount": "100"
      },
      "radiant-fire": {},
      "retribution": {
        "amount": ""
      },
      "radiant-power": {},
      "amplified-wrath": {},
      "righteous-instincts": {}
    },
    {
      "inspired-virtue": {
        "amount": ""
      },
      "unscathed-contender": {
        "amount": ""
      },
      "virtue-of-retribution": {},
      "inspiring-virtue": {
        "amount": ""
      },
      "power-of-the-virtuous": {}
    },
    {
      "searing-pact": {},
      "power-for-power": {},
      "lethal-tempo": {
        "amount": ""
      },
      "tyrants-momentum": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {
    "signet-of-wrath": {
      "amount": ""
    }
  }
}`},{name:"Power Alacrity Willbender",profession:"Willbender",traits:`{
  "showAll": false,
  "selectedLines": [
    "46",
    "42",
    "65"
  ],
  "selectedTraits": [
    [
      624,
      603,
      554
    ],
    [
      634,
      653,
      2017
    ],
    [
      2190,
      2197,
      2195
    ]
  ],
  "items": [
    {
      "inspired-virtue": {
        "amount": ""
      },
      "unscathed-contender": {
        "amount": ""
      },
      "virtue-of-retribution": {},
      "inspiring-virtue": {
        "amount": ""
      },
      "power-of-the-virtuous": {}
    },
    {
      "fiery-wrath": {},
      "symbolic-exposure": {},
      "zealous-blade-base": {},
      "zealous-blade-gs": {
        "amount": ""
      },
      "kindled-zeal": {},
      "symbolic-avenger": {}
    },
    {
      "power-for-power": {},
      "lethal-tempo": {
        "amount": ""
      },
      "tyrants-momentum": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {
    "bane-signet": {
      "amount": ""
    }
  }
}`},{name:"Power Banner Bers Strength",profession:"Berserker",traits:`{
  "showAll": false,
  "selectedLines": [
    "4",
    "51",
    "18"
  ],
  "selectedTraits": [
    [
      1444,
      1449,
      1437
    ],
    [
      1413,
      1484,
      1369
    ],
    [
      1977,
      2011,
      1928
    ]
  ],
  "items": [
    {
      "peak-performance": {},
      "forceful-greatsword": {},
      "great-fortitude": {},
      "pinnacle-of-strength": {
        "amount": ""
      },
      "berserkers-power": {
        "amount": ""
      }
    },
    {
      "warriors-sprint": {
        "amount": ""
      },
      "double-standards-str": {},
      "double-standards-disc": {},
      "axe-mastery-one": {},
      "axe-mastery-axe": {
        "amount": ""
      }
    },
    {
      "blood-reaction-base": {},
      "blood-reaction-with": {
        "amount": ""
      },
      "heat-the-soul": {},
      "heat-the-soul-with": {
        "amount": ""
      },
      "fatal-frenzy-power-condi": {
        "amount": ""
      },
      "fatal-frenzy-toughness": {},
      "bloody-roar": {
        "amount": ""
      },
      "king-of-fires": {},
      "eternal-champion": {}
    }
  ]
}`,skills:`{
  "skills": {
    "signet-of-might": {}
  }
}`},{name:"Condi Bers",profession:"Berserker",traits:`{
  "showAll": false,
  "selectedLines": [
    "36",
    "51",
    "18"
  ],
  "selectedTraits": [
    [
      1455,
      1333,
      1346
    ],
    [
      1329,
      1484,
      1657
    ],
    [
      2039,
      2042,
      2038
    ]
  ],
  "items": [
    {
      "wounding-precision": {},
      "signet-mastery": {
        "amount": ""
      },
      "deep-strikes": {
        "amount": ""
      },
      "blade-master": {},
      "blade-master-2": {
        "amount": ""
      },
      "bloodlust": {},
      "furious": {
        "amount": ""
      },
      "bloodlust-on-crit": {
        "amount": "3.17"
      }
    },
    {
      "warriors-sprint": {
        "amount": ""
      },
      "double-standards-str": {},
      "double-standards-disc": {},
      "axe-mastery-one": {},
      "axe-mastery-axe": {
        "amount": ""
      }
    },
    {
      "blood-reaction-base": {},
      "blood-reaction-with": {
        "amount": ""
      },
      "heat-the-soul": {},
      "heat-the-soul-with": {
        "amount": ""
      },
      "fatal-frenzy-power-condi": {
        "amount": ""
      },
      "fatal-frenzy-toughness": {},
      "bloody-roar": {
        "amount": ""
      },
      "king-of-fires": {},
      "eternal-champion": {}
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Power Banner SPB",profession:"Spellbreaker",traits:`{
  "showAll": false,
  "selectedLines": [
    "4",
    "51",
    "61"
  ],
  "selectedTraits": [
    [
      1444,
      1449,
      1437
    ],
    [
      1413,
      1484,
      1369
    ],
    [
      2107,
      2095,
      2060
    ]
  ],
  "items": [
    {
      "peak-performance": {},
      "forceful-greatsword": {},
      "great-fortitude": {},
      "pinnacle-of-strength": {
        "amount": ""
      },
      "berserkers-power": {
        "amount": ""
      }
    },
    {
      "warriors-sprint": {
        "amount": ""
      },
      "double-standards-str": {},
      "double-standards-disc": {},
      "axe-mastery-one": {},
      "axe-mastery-axe": {
        "amount": ""
      }
    },
    {
      "pure-strike-base": {},
      "pure-strike-boonless": {
        "amount": ""
      },
      "attackers-insight": {
        "amount": "4"
      },
      "magebane-tether": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {
    "signet-of-might": {}
  }
}`},{name:"Banner Bladesworn",profession:"Bladesworn",traits:`{
  "showAll": false,
  "selectedLines": [
    "4",
    "51",
    "68"
  ],
  "selectedTraits": [
    [
      1444,
      1449,
      1437
    ],
    [
      1413,
      1484,
      1369
    ],
    [
      2225,
      2302,
      2239
    ]
  ],
  "items": [
    {
      "peak-performance": {},
      "forceful-greatsword": {},
      "great-fortitude": {},
      "pinnacle-of-strength": {
        "amount": ""
      },
      "berserkers-power": {
        "amount": "2.8"
      }
    },
    {
      "warriors-sprint": {
        "amount": ""
      },
      "double-standards-str": {},
      "double-standards-disc": {},
      "axe-mastery-one": {},
      "axe-mastery-axe": {
        "amount": ""
      }
    },
    {
      "fierce-as-fire": {
        "amount": "9.6"
      },
      "guns-and-glory": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {
    "signet-of-might": {}
  }
}`},{name:"DPS Bladesworn",profession:"Bladesworn",traits:`{
  "showAll": false,
  "selectedLines": [
    "4",
    "51",
    "68"
  ],
  "selectedTraits": [
    [
      1444,
      1449,
      1437
    ],
    [
      1413,
      1484,
      1369
    ],
    [
      2225,
      2302,
      2239
    ]
  ],
  "items": [
    {
      "peak-performance": {},
      "forceful-greatsword": {},
      "great-fortitude": {},
      "pinnacle-of-strength": {
        "amount": ""
      },
      "berserkers-power": {
        "amount": "2.8"
      }
    },
    {
      "warriors-sprint": {
        "amount": ""
      },
      "double-standards-str": {},
      "double-standards-disc": {},
      "axe-mastery-one": {},
      "axe-mastery-axe": {
        "amount": ""
      }
    },
    {
      "fierce-as-fire": {
        "amount": "10"
      },
      "guns-and-glory": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {
    "signet-of-might": {},
    "signet-of-fury": {}
  }
}`},{name:"Might Bladesworn",profession:"Bladesworn",traits:`{
  "showAll": false,
  "selectedLines": [
    "11",
    "51",
    "68"
  ],
  "selectedTraits": [
    [
      1469,
      1482,
      1711
    ],
    [
      1413,
      1484,
      1369
    ],
    [
      2225,
      2302,
      2239
    ]
  ],
  "items": [
    {
      "leg-specialist": {
        "amount": ""
      },
      "roaring-reveille": {},
      "empowered": {
        "amount": "7"
      },
      "warriors-cunning": {
        "amount": ""
      },
      "vigorous-shouts": {}
    },
    {
      "warriors-sprint": {
        "amount": ""
      },
      "double-standards-str": {},
      "double-standards-disc": {},
      "axe-mastery-one": {},
      "axe-mastery-axe": {
        "amount": ""
      }
    },
    {
      "fierce-as-fire": {
        "amount": "9.6"
      },
      "guns-and-glory": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Power Weaver Stormsoul",profession:"Weaver",traits:`{
  "showAll": false,
  "selectedLines": [
    "31",
    "41",
    "56"
  ],
  "selectedTraits": [
    [
      296,
      334,
      1510
    ],
    [
      232,
      1502,
      226
    ],
    [
      2115,
      2061,
      2131
    ]
  ],
  "items": [
    {
      "empowering-flame": {
        "amount": "51"
      },
      "burning-precision": {},
      "burning-rage": {},
      "power-overwhelming": {},
      "power-overwhelming-2": {
        "amount": "51"
      },
      "pyromancers-training": {},
      "persisting-flames": {
        "amount": ""
      },
      "burning-precision-on-crit": {
        "amount": "5.61"
      }
    },
    {
      "ferocious-winds": {},
      "raging-storm": {
        "amount": ""
      },
      "stormsoul": {
        "amount": ""
      },
      "aeromancers-training": {},
      "aeromancers-training-2": {
        "amount": "49"
      },
      "bolt-to-the-heart": {
        "amount": ""
      },
      "fresh-air": {
        "amount": ""
      }
    },
    {
      "superior-elements": {},
      "masters-fortitude": {},
      "masters-fortitude-sword": {},
      "weavers-prowess": {},
      "swift-revenge": {
        "amount": ""
      },
      "elemental-polyphony-fire": {
        "amount": "76"
      },
      "elemental-polyphony-air": {
        "amount": "74"
      },
      "elements-of-rage-base": {},
      "elements-of-rage-buff": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Condi Weaver Sword",profession:"Weaver",traits:`{
  "showAll": false,
  "selectedLines": [
    "31",
    "26",
    "56"
  ],
  "selectedTraits": [
    [
      296,
      325,
      1510
    ],
    [
      1507,
      275,
      287
    ],
    [
      2177,
      2180,
      2131
    ]
  ],
  "items": [
    {
      "empowering-flame": {
        "amount": ""
      },
      "burning-precision": {},
      "burning-rage": {},
      "power-overwhelming": {},
      "power-overwhelming-2": {
        "amount": ""
      },
      "pyromancers-training": {},
      "persisting-flames": {
        "amount": ""
      },
      "burning-precision-on-crit": {
        "amount": "4.74"
      }
    },
    {
      "serrated-stones": {},
      "strength-of-stone": {},
      "geomancers-training": {}
    },
    {
      "superior-elements": {},
      "masters-fortitude": {},
      "masters-fortitude-sword": {},
      "weavers-prowess": {},
      "swift-revenge": {
        "amount": ""
      },
      "elemental-polyphony-fire": {
        "amount": "83"
      },
      "elemental-polyphony-air": {
        "amount": "29"
      },
      "elements-of-rage-base": {},
      "elements-of-rage-buff": {
        "amount": "80"
      }
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Condi Weaver Dagger",profession:"Weaver",traits:`{
  "showAll": false,
  "selectedLines": [
    "31",
    "26",
    "56"
  ],
  "selectedTraits": [
    [
      296,
      325,
      1510
    ],
    [
      1507,
      275,
      287
    ],
    [
      2177,
      2180,
      2131
    ]
  ],
  "items": [
    {
      "empowering-flame": {
        "amount": ""
      },
      "burning-precision": {},
      "burning-rage": {},
      "power-overwhelming": {},
      "power-overwhelming-2": {
        "amount": ""
      },
      "pyromancers-training": {},
      "persisting-flames": {
        "amount": ""
      },
      "burning-precision-on-crit": {
        "amount": "3.69"
      }
    },
    {
      "serrated-stones": {},
      "strength-of-stone": {},
      "geomancers-training": {}
    },
    {
      "superior-elements": {},
      "masters-fortitude": {},
      "masters-fortitude-sword": {},
      "weavers-prowess": {},
      "swift-revenge": {
        "amount": ""
      },
      "elemental-polyphony-fire": {
        "amount": "83"
      },
      "elemental-polyphony-air": {
        "amount": "29"
      },
      "elements-of-rage-base": {},
      "elements-of-rage-buff": {
        "amount": "80"
      }
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Hybrid Weaver",profession:"Weaver",traits:`{
  "showAll": false,
  "selectedLines": [
    "31",
    "41",
    "56"
  ],
  "selectedTraits": [
    [
      296,
      325,
      1510
    ],
    [
      232,
      214,
      1503
    ],
    [
      2177,
      2180,
      2131
    ]
  ],
  "items": [
    {
      "empowering-flame": {
        "amount": "57"
      },
      "burning-precision": {},
      "burning-rage": {},
      "power-overwhelming": {},
      "power-overwhelming-2": {
        "amount": ""
      },
      "pyromancers-training": {},
      "persisting-flames": {
        "amount": ""
      },
      "burning-precision-on-crit": {
        "amount": "5.81"
      }
    },
    {
      "ferocious-winds": {},
      "raging-storm": {
        "amount": ""
      },
      "stormsoul": {
        "amount": ""
      },
      "aeromancers-training": {},
      "aeromancers-training-2": {
        "amount": "33"
      },
      "bolt-to-the-heart": {
        "amount": ""
      },
      "fresh-air": {
        "amount": "48"
      }
    },
    {
      "superior-elements": {},
      "masters-fortitude": {},
      "masters-fortitude-sword": {},
      "weavers-prowess": {},
      "swift-revenge": {
        "amount": ""
      },
      "elemental-polyphony-fire": {
        "amount": "67"
      },
      "elemental-polyphony-air": {
        "amount": "60"
      },
      "elements-of-rage-base": {},
      "elements-of-rage-buff": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Condi Tempest",profession:"Tempest",traits:`{
  "showAll": false,
  "selectedLines": [
    "31",
    "26",
    "48"
  ],
  "selectedTraits": [
    [
      296,
      325,
      1510
    ],
    [
      1507,
      275,
      287
    ],
    [
      1886,
      1891,
      1839
    ]
  ],
  "items": [
    {
      "empowering-flame": {
        "amount": "59"
      },
      "burning-precision": {},
      "burning-rage": {},
      "power-overwhelming": {},
      "power-overwhelming-2": {
        "amount": ""
      },
      "pyromancers-training": {},
      "persisting-flames": {
        "amount": "9.5"
      },
      "burning-precision-on-crit": {
        "amount": "5.94"
      }
    },
    {
      "serrated-stones": {},
      "strength-of-stone": {},
      "geomancers-training": {}
    },
    {
      "gathered-focus": {},
      "hardy-conduit": {},
      "transcendent-tempest": {
        "amount": "62"
      }
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Power Tempest",profession:"Tempest",traits:`{
  "showAll": false,
  "selectedLines": [
    "31",
    "41",
    "48"
  ],
  "selectedTraits": [
    [
      296,
      334,
      1510
    ],
    [
      232,
      214,
      1503
    ],
    [
      1886,
      1891,
      1839
    ]
  ],
  "items": [
    {
      "empowering-flame": {
        "amount": "13"
      },
      "burning-precision": {},
      "burning-rage": {},
      "power-overwhelming": {},
      "power-overwhelming-2": {
        "amount": "13"
      },
      "pyromancers-training": {},
      "persisting-flames": {
        "amount": "7.5"
      }
    },
    {
      "ferocious-winds": {},
      "raging-storm": {
        "amount": ""
      },
      "stormsoul": {
        "amount": ""
      },
      "aeromancers-training": {},
      "aeromancers-training-2": {
        "amount": "80"
      },
      "bolt-to-the-heart": {
        "amount": ""
      },
      "fresh-air": {
        "amount": "60"
      }
    },
    {
      "gathered-focus": {},
      "hardy-conduit": {},
      "transcendent-tempest": {
        "amount": "71"
      }
    }
  ]
}`,skills:`{
  "skills": {
    "signet-of-fire": {}
  }
}`},{name:"[beta2] Power Catalyst",profession:"Catalyst",traits:`{
  "showAll": false,
  "selectedLines": [
    "31",
    "41",
    "67"
  ],
  "selectedTraits": [
    [
      296,
      334,
      1510
    ],
    [
      232,
      214,
      226
    ],
    [
      2252,
      2247,
      2241
    ]
  ],
  "items": [
    {
      "empowering-flame": {
        "amount": "40"
      },
      "burning-precision": {},
      "burning-rage": {},
      "power-overwhelming": {},
      "power-overwhelming-2": {
        "amount": "40"
      },
      "pyromancers-training": {},
      "persisting-flames": {
        "amount": ""
      }
    },
    {
      "ferocious-winds": {},
      "raging-storm": {
        "amount": ""
      },
      "stormsoul": {
        "amount": ""
      },
      "aeromancers-training": {},
      "aeromancers-training-2": {
        "amount": "32"
      },
      "bolt-to-the-heart": {
        "amount": ""
      },
      "fresh-air": {
        "amount": ""
      }
    },
    {
      "hardened-auras": {
        "amount": ""
      },
      "elemental-empowerment": {},
      "empowering-auras": {
        "amount": "5"
      },
      "empowered-empowerment": {}
    }
  ]
}`,skills:`{
  "skills": {
    "flame-wheel": {
      "amount": "79"
    },
    "crescent-wind": {},
    "relentless-fire": {
      "amount": "50"
    }
  }
}`},{name:"[beta2] Power Quickness Catalyst",profession:"Catalyst",traits:`{
  "showAll": false,
  "selectedLines": [
    "31",
    "41",
    "67"
  ],
  "selectedTraits": [
    [
      296,
      334,
      1510
    ],
    [
      232,
      214,
      226
    ],
    [
      2252,
      2247,
      2251
    ]
  ],
  "items": [
    {
      "empowering-flame": {
        "amount": "40"
      },
      "burning-precision": {},
      "burning-rage": {},
      "power-overwhelming": {},
      "power-overwhelming-2": {
        "amount": "40"
      },
      "pyromancers-training": {},
      "persisting-flames": {
        "amount": ""
      }
    },
    {
      "ferocious-winds": {},
      "raging-storm": {
        "amount": ""
      },
      "stormsoul": {
        "amount": ""
      },
      "aeromancers-training": {},
      "aeromancers-training-2": {
        "amount": "32"
      },
      "bolt-to-the-heart": {
        "amount": ""
      },
      "fresh-air": {
        "amount": ""
      }
    },
    {
      "hardened-auras": {
        "amount": ""
      },
      "elemental-empowerment": {},
      "empowering-auras": {
        "amount": "5"
      },
      "empowered-empowerment": {}
    }
  ]
}`,skills:`{
  "skills": {
    "flame-wheel": {
      "amount": "79"
    },
    "crescent-wind": {},
    "relentless-fire": {
      "amount": "50"
    }
  }
}`},{name:"[beta1] Condi Catalyst",profession:"Catalyst",traits:`{
  "showAll": false,
  "selectedLines": [
    "31",
    "26",
    "67"
  ],
  "selectedTraits": [
    [
      296,
      325,
      1510
    ],
    [
      1507,
      275,
      287
    ],
    [
      2252,
      2247,
      2241
    ]
  ],
  "items": [
    {
      "empowering-flame": {
        "amount": "45"
      },
      "burning-precision": {},
      "burning-rage": {},
      "power-overwhelming": {},
      "power-overwhelming-2": {
        "amount": ""
      },
      "pyromancers-training": {},
      "persisting-flames": {
        "amount": ""
      }
    },
    {
      "serrated-stones": {},
      "strength-of-stone": {},
      "geomancers-training": {}
    },
    {
      "hardened-auras": {
        "amount": ""
      },
      "elemental-empowerment": {},
      "empowering-auras": {
        "amount": "2.5"
      },
      "empowered-empowerment": {}
    }
  ]
}`,skills:`{
  "skills": {
    "flame-wheel": {
      "amount": "92"
    },
    "crescent-wind": {}
  }
}`},{name:"Heal Tempest",profession:"Tempest",traits:`{
  "showAll": false,
  "selectedLines": [
    "",
    "17",
    "48"
  ],
  "selectedTraits": [
    [
      0,
      0,
      0
    ],
    [
      363,
      358,
      361
    ],
    [
      1886,
      2015,
      1986
    ]
  ],
  "items": [
    {},
    {
      "piercing-blades": {},
      "flow-like-water": {
        "amount": ""
      },
      "aquamancers-training": {}
    },
    {
      "gathered-focus": {},
      "hardy-conduit": {},
      "transcendent-tempest": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Power Slb Marks",profession:"Soulbeast",traits:`{
  "showAll": false,
  "selectedLines": [
    "8",
    "32",
    "55"
  ],
  "selectedTraits": [
    [
      1014,
      1000,
      996
    ],
    [
      1606,
      970,
      1066
    ],
    [
      2071,
      2085,
      2128
    ]
  ],
  "items": [
    {
      "farsighted": {},
      "predators-onslaught": {
        "amount": ""
      }
    },
    {
      "honed-axes": {},
      "honed-axes-axe": {
        "amount": ""
      }
    },
    {
      "furious-strength": {
        "amount": ""
      },
      "twice-as-vicious": {
        "amount": ""
      },
      "oppressive-superiority": {},
      "archetype-ferocious": {},
      "pack-alpha-merged": {},
      "loud-whistle-merged": {},
      "pets-prowess-merged": {},
      "honed-axes-merged": {}
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Power Slb Skirm",profession:"Soulbeast",traits:`{
  "showAll": false,
  "selectedLines": [
    "30",
    "32",
    "55"
  ],
  "selectedTraits": [
    [
      0,
      1016,
      1888
    ],
    [
      1606,
      970,
      1066
    ],
    [
      2071,
      2085,
      2128
    ]
  ],
  "items": [
    {
      "hidden-barbs": {},
      "hunters-tactics": {},
      "vicious-quarry": {}
    },
    {
      "honed-axes": {},
      "honed-axes-axe": {
        "amount": ""
      }
    },
    {
      "furious-strength": {
        "amount": ""
      },
      "twice-as-vicious": {
        "amount": ""
      },
      "oppressive-superiority": {},
      "archetype-ferocious": {},
      "pack-alpha-merged": {},
      "loud-whistle-merged": {},
      "pets-prowess-merged": {},
      "honed-axes-merged": {}
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Condi Slb SB",profession:"Soulbeast",traits:`{
  "showAll": false,
  "selectedLines": [
    "30",
    "33",
    "55"
  ],
  "selectedTraits": [
    [
      1069,
      1846,
      1912
    ],
    [
      1099,
      1101,
      1701
    ],
    [
      2071,
      2161,
      2128
    ]
  ],
  "items": [
    {
      "hidden-barbs": {},
      "hunters-tactics": {},
      "vicious-quarry": {},
      "sharpened-edges": {
        "amount": "4.17"
      }
    },
    {
      "oakheart-salve": {},
      "taste-for-danger": {},
      "ambidexterity": {},
      "ambidexterity-2": {
        "amount": ""
      },
      "poison-master": {}
    },
    {
      "furious-strength": {
        "amount": ""
      },
      "twice-as-vicious": {
        "amount": "45"
      },
      "oppressive-superiority": {},
      "archetype-deadly": {}
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Condi Slb D/T A/D",profession:"Soulbeast",traits:`{
  "showAll": false,
  "selectedLines": [
    "30",
    "33",
    "55"
  ],
  "selectedTraits": [
    [
      1069,
      1846,
      1064
    ],
    [
      1099,
      1101,
      1701
    ],
    [
      2071,
      2161,
      2128
    ]
  ],
  "items": [
    {
      "hidden-barbs": {},
      "hunters-tactics": {},
      "vicious-quarry": {},
      "sharpened-edges": {
        "amount": "4.17"
      }
    },
    {
      "oakheart-salve": {},
      "taste-for-danger": {},
      "ambidexterity": {},
      "ambidexterity-2": {
        "amount": "100"
      },
      "poison-master": {}
    },
    {
      "furious-strength": {
        "amount": ""
      },
      "twice-as-vicious": {
        "amount": "45"
      },
      "oppressive-superiority": {},
      "archetype-deadly": {}
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Hybrid Slb",profession:"Soulbeast",traits:`{
  "showAll": false,
  "selectedLines": [
    "30",
    "32",
    "55"
  ],
  "selectedTraits": [
    [
      1069,
      1846,
      1888
    ],
    [
      1606,
      970,
      1066
    ],
    [
      2071,
      2161,
      2128
    ]
  ],
  "items": [
    {
      "hidden-barbs": {},
      "hunters-tactics": {},
      "vicious-quarry": {},
      "sharpened-edges": {
        "amount": "4.2"
      }
    },
    {
      "honed-axes": {},
      "honed-axes-axe": {
        "amount": "100"
      }
    },
    {
      "furious-strength": {
        "amount": ""
      },
      "twice-as-vicious": {
        "amount": "82"
      },
      "oppressive-superiority": {},
      "archetype-deadly": {},
      "pack-alpha-merged": {},
      "loud-whistle-merged": {},
      "pets-prowess-merged": {},
      "honed-axes-merged": {}
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Pure Shortbow Slb BM",profession:"Soulbeast",traits:`{
  "showAll": false,
  "selectedLines": [
    "30",
    "32",
    "55"
  ],
  "selectedTraits": [
    [
      1069,
      1846,
      1912
    ],
    [
      1606,
      970,
      1945
    ],
    [
      2071,
      2161,
      2128
    ]
  ],
  "items": [
    {
      "hidden-barbs": {},
      "hunters-tactics": {},
      "vicious-quarry": {}
    },
    {
      "honed-axes": {},
      "honed-axes-axe": {
        "amount": ""
      }
    },
    {
      "furious-strength": {
        "amount": ""
      },
      "twice-as-vicious": {
        "amount": ""
      },
      "oppressive-superiority": {},
      "archetype-deadly": {},
      "pack-alpha-merged": {},
      "loud-whistle-merged": {},
      "pets-prowess-merged": {}
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Condi Druid",profession:"Druid",traits:`{
  "showAll": false,
  "selectedLines": [
    "30",
    "25",
    "5"
  ],
  "selectedTraits": [
    [
      1069,
      1016,
      1912
    ],
    [
      1062,
      965,
      1038
    ],
    [
      0,
      0,
      2057
    ]
  ],
  "items": [
    {
      "hidden-barbs": {},
      "hunters-tactics": {},
      "light-on-your-feet": {},
      "vicious-quarry": {}
    },
    {
      "bountiful-hunter": {
        "amount": ""
      },
      "instinctive-reaction": {},
      "lingering-magic": {}
    },
    {
      "natural-mender": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Heal Druid",profession:"Druid",traits:`{
  "showAll": false,
  "selectedLines": [
    "30",
    "25",
    "5"
  ],
  "selectedTraits": [
    [
      0,
      1016,
      0
    ],
    [
      0,
      0,
      0
    ],
    [
      0,
      0,
      2057
    ]
  ],
  "items": [
    {
      "hidden-barbs": {},
      "hunters-tactics": {},
      "vicious-quarry": {}
    },
    {
      "bountiful-hunter": {
        "amount": ""
      },
      "instinctive-reaction": {},
      "lingering-magic": {}
    },
    {
      "natural-mender": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"[beta2] Condi Untamed",profession:"Untamed",traits:`{
  "showAll": false,
  "selectedLines": [
    "30",
    "33",
    "72"
  ],
  "selectedTraits": [
    [
      1069,
      1846,
      1912
    ],
    [
      1099,
      1101,
      1701
    ],
    [
      2297,
      2263,
      2271
    ]
  ],
  "items": [
    {
      "hidden-barbs": {},
      "hunters-tactics": {},
      "vicious-quarry": {}
    },
    {
      "oakheart-salve": {},
      "taste-for-danger": {},
      "ambidexterity": {},
      "ambidexterity-2": {
        "amount": ""
      },
      "poison-master": {}
    },
    {
      "natural-fortitude": {},
      "vow-of-the-untamed-you": {},
      "ferocious-symbiosis": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"[beta2] Power Untamed",profession:"Untamed",traits:`{
  "showAll": false,
  "selectedLines": [
    "8",
    "30",
    "72"
  ],
  "selectedTraits": [
    [
      1014,
      1000,
      996
    ],
    [
      1075,
      1016,
      1888
    ],
    [
      2301,
      2263,
      2271
    ]
  ],
  "items": [
    {
      "farsighted": {},
      "predators-onslaught": {
        "amount": ""
      }
    },
    {
      "hidden-barbs": {},
      "hunters-tactics": {},
      "vicious-quarry": {}
    },
    {
      "natural-fortitude": {},
      "vow-of-the-untamed-you": {},
      "ferocious-symbiosis": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {
    "signet-of-the-wild": {}
  }
}`},{name:"Power Alac Ren",profession:"Renegade",traits:`{
  "showAll": false,
  "selectedLines": [
    "15",
    "3",
    "63"
  ],
  "selectedTraits": [
    [
      1767,
      1786,
      1754
    ],
    [
      1761,
      1774,
      1791
    ],
    [
      2166,
      2108,
      2182
    ]
  ],
  "items": [
    {
      "unsuspecting-strikes": {
        "amount": ""
      },
      "destructive-impulses-base": {},
      "destructive-impulses-dual": {
        "amount": "100"
      },
      "notoriety": {
        "amount": ""
      },
      "targeted-destruction": {
        "amount": ""
      },
      "swift-termination": {
        "amount": ""
      }
    },
    {
      "rising-tide": {
        "amount": ""
      },
      "ferocious-aggression": {
        "amount": ""
      },
      "roiling-mists": {}
    },
    {
      "ambush-commander": {
        "amount": ""
      },
      "blood-fury": {},
      "heartpiercer": {},
      "brutal-momentum": {},
      "lasting-legacy": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Condi Alac Ren Invo",profession:"Renegade",traits:`{
  "showAll": false,
  "selectedLines": [
    "14",
    "3",
    "63"
  ],
  "selectedTraits": [
    [
      1793,
      1714,
      1795
    ],
    [
      1761,
      1781,
      1791
    ],
    [
      2079,
      2092,
      2182
    ]
  ],
  "items": [
    {
      "acolyte-of-torment": {},
      "seething-malice": {},
      "demonic-resistance": {},
      "pact-of-pain": {},
      "yearning-empowerment": {}
    },
    {
      "rising-tide": {
        "amount": ""
      },
      "ferocious-aggression": {
        "amount": ""
      },
      "roiling-mists": {}
    },
    {
      "ambush-commander": {
        "amount": ""
      },
      "blood-fury": {},
      "heartpiercer": {},
      "brutal-momentum": {},
      "lasting-legacy": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Condi Alac Ren Deva",profession:"Renegade",traits:`{
  "showAll": false,
  "selectedLines": [
    "14",
    "15",
    "63"
  ],
  "selectedTraits": [
    [
      1793,
      1714,
      1795
    ],
    [
      1767,
      1786,
      1800
    ],
    [
      2079,
      2092,
      2182
    ]
  ],
  "items": [
    {
      "acolyte-of-torment": {},
      "seething-malice": {},
      "demonic-resistance": {},
      "pact-of-pain": {},
      "yearning-empowerment": {}
    },
    {
      "unsuspecting-strikes": {
        "amount": ""
      },
      "destructive-impulses-base": {},
      "destructive-impulses-dual": {
        "amount": ""
      },
      "notoriety": {
        "amount": ""
      },
      "targeted-destruction": {
        "amount": ""
      },
      "swift-termination": {
        "amount": ""
      }
    },
    {
      "ambush-commander": {
        "amount": ""
      },
      "blood-fury": {},
      "heartpiercer": {},
      "brutal-momentum": {},
      "lasting-legacy": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Condi DPS Ren Deva",profession:"Renegade",traits:`{
  "showAll": false,
  "selectedLines": [
    "14",
    "15",
    "63"
  ],
  "selectedTraits": [
    [
      1793,
      1714,
      1795
    ],
    [
      1767,
      1786,
      1800
    ],
    [
      2079,
      2092,
      2100
    ]
  ],
  "items": [
    {
      "acolyte-of-torment": {},
      "seething-malice": {},
      "demonic-resistance": {},
      "pact-of-pain": {},
      "yearning-empowerment": {}
    },
    {
      "unsuspecting-strikes": {
        "amount": ""
      },
      "destructive-impulses-base": {},
      "destructive-impulses-dual": {
        "amount": ""
      },
      "notoriety": {
        "amount": ""
      },
      "targeted-destruction": {
        "amount": ""
      },
      "swift-termination": {
        "amount": ""
      }
    },
    {
      "ambush-commander": {
        "amount": ""
      },
      "blood-fury": {},
      "heartpiercer": {},
      "brutal-momentum": {},
      "lasting-legacy": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Condi DPS Ren Invo",profession:"Renegade",traits:`{
  "showAll": false,
  "selectedLines": [
    "14",
    "3",
    "63"
  ],
  "selectedTraits": [
    [
      1793,
      1714,
      1795
    ],
    [
      1761,
      1781,
      1791
    ],
    [
      2079,
      2092,
      2100
    ]
  ],
  "items": [
    {
      "acolyte-of-torment": {},
      "seething-malice": {},
      "demonic-resistance": {},
      "pact-of-pain": {},
      "yearning-empowerment": {}
    },
    {
      "rising-tide": {
        "amount": ""
      },
      "ferocious-aggression": {
        "amount": ""
      },
      "roiling-mists": {}
    },
    {
      "ambush-commander": {
        "amount": ""
      },
      "blood-fury": {},
      "heartpiercer": {},
      "brutal-momentum": {},
      "lasting-legacy": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Power Herald DE",profession:"Herald",traits:`{
  "showAll": false,
  "selectedLines": [
    "15",
    "3",
    "52"
  ],
  "selectedTraits": [
    [
      1767,
      1786,
      1800
    ],
    [
      1761,
      1774,
      1719
    ],
    [
      1813,
      1738,
      1772
    ]
  ],
  "items": [
    {
      "unsuspecting-strikes": {
        "amount": ""
      },
      "destructive-impulses-base": {},
      "destructive-impulses-dual": {
        "amount": "100"
      },
      "notoriety": {
        "amount": ""
      },
      "targeted-destruction": {
        "amount": ""
      },
      "swift-termination": {
        "amount": ""
      }
    },
    {
      "rising-tide": {
        "amount": ""
      },
      "ferocious-aggression": {
        "amount": ""
      },
      "roiling-mists": {}
    },
    {
      "draconic-fortitude": {},
      "reinforced-potency-base": {},
      "reinforced-potency-boons": {
        "amount": ""
      },
      "forceful-persistence-nonherald": {
        "amount": ""
      },
      "forceful-persistence-herald": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Condi Herald",profession:"Herald",traits:`{
  "showAll": false,
  "selectedLines": [
    "14",
    "15",
    "52"
  ],
  "selectedTraits": [
    [
      1793,
      1714,
      1795
    ],
    [
      1767,
      1786,
      1754
    ],
    [
      1813,
      1738,
      1772
    ]
  ],
  "items": [
    {
      "acolyte-of-torment": {},
      "seething-malice": {},
      "demonic-resistance": {},
      "pact-of-pain": {},
      "yearning-empowerment": {}
    },
    {
      "unsuspecting-strikes": {
        "amount": ""
      },
      "destructive-impulses-base": {},
      "destructive-impulses-dual": {
        "amount": "100"
      },
      "notoriety": {
        "amount": ""
      },
      "targeted-destruction": {
        "amount": ""
      },
      "swift-termination": {
        "amount": ""
      }
    },
    {
      "draconic-fortitude": {},
      "reinforced-potency-base": {},
      "reinforced-potency-boons": {
        "amount": ""
      },
      "forceful-persistence-nonherald": {
        "amount": ""
      },
      "forceful-persistence-herald": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Power DPS Ren",profession:"Renegade",traits:`{
  "showAll": false,
  "selectedLines": [
    "15",
    "3",
    "63"
  ],
  "selectedTraits": [
    [
      1767,
      1765,
      1754
    ],
    [
      1761,
      1774,
      1791
    ],
    [
      2166,
      2108,
      2094
    ]
  ],
  "items": [
    {
      "unsuspecting-strikes": {
        "amount": ""
      },
      "destructive-impulses-base": {},
      "destructive-impulses-dual": {
        "amount": "100"
      },
      "notoriety": {
        "amount": ""
      },
      "targeted-destruction": {
        "amount": ""
      },
      "swift-termination": {
        "amount": ""
      }
    },
    {
      "rising-tide": {
        "amount": ""
      },
      "ferocious-aggression": {
        "amount": ""
      },
      "roiling-mists": {}
    },
    {
      "ambush-commander": {
        "amount": ""
      },
      "blood-fury": {},
      "heartpiercer": {},
      "brutal-momentum": {},
      "lasting-legacy": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Heal Ren",profession:"Renegade",traits:`{
  "showAll": false,
  "selectedLines": [
    "12",
    "15",
    "63"
  ],
  "selectedTraits": [
    [
      1822,
      1818,
      1815
    ],
    [
      1767,
      1786,
      1754
    ],
    [
      2120,
      2108,
      2182
    ]
  ],
  "items": [
    {
      "tranquil-balance": {
        "amount": ""
      },
      "life-attunement": {},
      "invoking-harmony": {
        "amount": ""
      }
    },
    {
      "unsuspecting-strikes": {
        "amount": ""
      },
      "destructive-impulses-base": {},
      "destructive-impulses-dual": {
        "amount": ""
      },
      "notoriety": {
        "amount": ""
      },
      "targeted-destruction": {
        "amount": ""
      },
      "swift-termination": {
        "amount": ""
      }
    },
    {
      "ambush-commander": {
        "amount": ""
      },
      "blood-fury": {},
      "heartpiercer": {},
      "brutal-momentum": {},
      "lasting-legacy": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"DPS Vindicator",profession:"Vindicator",traits:`{
  "showAll": false,
  "selectedLines": [
    "15",
    "3",
    "69"
  ],
  "selectedTraits": [
    [
      1767,
      1786,
      1800
    ],
    [
      1761,
      1781,
      1719
    ],
    [
      2258,
      2255,
      2257
    ]
  ],
  "items": [
    {
      "unsuspecting-strikes": {
        "amount": ""
      },
      "destructive-impulses-base": {},
      "destructive-impulses-dual": {
        "amount": ""
      },
      "notoriety": {
        "amount": ""
      },
      "targeted-destruction": {
        "amount": ""
      },
      "swift-termination": {
        "amount": ""
      }
    },
    {
      "rising-tide": {
        "amount": ""
      },
      "ferocious-aggression": {
        "amount": ""
      },
      "roiling-mists": {}
    },
    {
      "leviathan-strength": {
        "amount": ""
      },
      "empire-divided-above": {
        "amount": ""
      },
      "empire-divided-below": {
        "amount": ""
      },
      "forerunner-of-death": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Power Holo ECSU",profession:"Holosmith",traits:`{
  "showAll": false,
  "selectedLines": [
    "38",
    "6",
    "57"
  ],
  "selectedTraits": [
    [
      1914,
      1923,
      526
    ],
    [
      1882,
      1892,
      1947
    ],
    [
      2106,
      2152,
      2137
    ]
  ],
  "items": [
    {
      "chemical-rounds": {},
      "high-caliber": {},
      "hematic-focus": {},
      "thermal-vision": {},
      "no-scope": {
        "amount": ""
      },
      "serrated-steel": {},
      "modified-ammunition": {
        "amount": ""
      },
      "incendiary-powder": {},
      "sharpshooter": {
        "amount": "4.82"
      }
    },
    {
      "glass-cannon": {
        "amount": ""
      },
      "explosive-temper": {
        "amount": ""
      },
      "blast-shield": {},
      "shaped-charge": {
        "amount": ""
      },
      "big-boomer": {}
    },
    {
      "lasers-edge": {
        "amount": "112"
      }
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Condi Holo",profession:"Holosmith",traits:`{
  "showAll": false,
  "selectedLines": [
    "38",
    "6",
    "57"
  ],
  "selectedTraits": [
    [
      1878,
      2006,
      433
    ],
    [
      1882,
      1892,
      505
    ],
    [
      2106,
      2103,
      2064
    ]
  ],
  "items": [
    {
      "chemical-rounds": {},
      "high-caliber": {},
      "hematic-focus": {},
      "thermal-vision": {},
      "no-scope": {
        "amount": ""
      },
      "serrated-steel": {},
      "modified-ammunition": {
        "amount": ""
      },
      "incendiary-powder": {},
      "sharpshooter": {
        "amount": "4.51"
      }
    },
    {
      "glass-cannon": {
        "amount": ""
      },
      "explosive-temper": {
        "amount": ""
      },
      "blast-shield": {},
      "shaped-charge": {
        "amount": ""
      },
      "big-boomer": {}
    },
    {
      "lasers-edge": {
        "amount": "50"
      }
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Condi Mechanist J-Drive",profession:"Mechanist",traits:`{
  "showAll": false,
  "selectedLines": [
    "38",
    "6",
    "70"
  ],
  "selectedTraits": [
    [
      1878,
      2006,
      433
    ],
    [
      1882,
      1892,
      505
    ],
    [
      2282,
      2270,
      2298
    ]
  ],
  "items": [
    {
      "chemical-rounds": {},
      "high-caliber": {},
      "hematic-focus": {},
      "thermal-vision": {},
      "no-scope": {
        "amount": ""
      },
      "serrated-steel": {},
      "modified-ammunition": {
        "amount": ""
      },
      "incendiary-powder": {},
      "sharpshooter": {
        "amount": "2.29"
      }
    },
    {
      "glass-cannon": {
        "amount": ""
      },
      "explosive-temper": {
        "amount": ""
      },
      "blast-shield": {},
      "shaped-charge": {
        "amount": ""
      },
      "big-boomer": {}
    },
    {}
  ]
}`,skills:`{
  "skills": {
    "superconducting-signet-traited": {}
  }
}`},{name:"Condi Mechanist Jade Dynamo",profession:"Mechanist",traits:`{
  "showAll": false,
  "selectedLines": [
    "38",
    "6",
    "70"
  ],
  "selectedTraits": [
    [
      1878,
      2006,
      433
    ],
    [
      1882,
      1892,
      505
    ],
    [
      2282,
      2270,
      2292
    ]
  ],
  "items": [
    {
      "chemical-rounds": {},
      "high-caliber": {},
      "hematic-focus": {},
      "thermal-vision": {},
      "no-scope": {
        "amount": ""
      },
      "serrated-steel": {},
      "modified-ammunition": {
        "amount": ""
      },
      "incendiary-powder": {},
      "sharpshooter": {
        "amount": "4.01"
      }
    },
    {
      "glass-cannon": {
        "amount": ""
      },
      "explosive-temper": {
        "amount": ""
      },
      "blast-shield": {},
      "shaped-charge": {
        "amount": ""
      },
      "big-boomer": {}
    },
    {}
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Power Scrapper",profession:"Scrapper",traits:`{
  "showAll": false,
  "selectedLines": [
    "38",
    "6",
    "43"
  ],
  "selectedTraits": [
    [
      1914,
      1923,
      526
    ],
    [
      1882,
      1892,
      1947
    ],
    [
      1917,
      1860,
      1849
    ]
  ],
  "items": [
    {
      "chemical-rounds": {},
      "high-caliber": {},
      "hematic-focus": {},
      "thermal-vision": {},
      "no-scope": {
        "amount": ""
      },
      "serrated-steel": {},
      "modified-ammunition": {
        "amount": ""
      },
      "incendiary-powder": {},
      "sharpshooter": {
        "amount": "3.6"
      }
    },
    {
      "glass-cannon": {
        "amount": ""
      },
      "explosive-temper": {
        "amount": ""
      },
      "blast-shield": {},
      "shaped-charge": {
        "amount": ""
      },
      "big-boomer": {}
    },
    {
      "object-in-motion": {
        "amount": ""
      },
      "impact-savant": {},
      "kinetic-accelerators": {},
      "applied-force": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Quickness Scrapper",profession:"Scrapper",traits:`{
  "showAll": false,
  "selectedLines": [
    "38",
    "6",
    "43"
  ],
  "selectedTraits": [
    [
      1914,
      1923,
      526
    ],
    [
      1882,
      1892,
      1947
    ],
    [
      1917,
      1860,
      2052
    ]
  ],
  "items": [
    {
      "chemical-rounds": {},
      "high-caliber": {},
      "hematic-focus": {},
      "thermal-vision": {},
      "no-scope": {
        "amount": ""
      },
      "serrated-steel": {},
      "modified-ammunition": {
        "amount": ""
      },
      "incendiary-powder": {},
      "sharpshooter": {
        "amount": "3.54"
      }
    },
    {
      "glass-cannon": {
        "amount": ""
      },
      "explosive-temper": {
        "amount": ""
      },
      "blast-shield": {},
      "shaped-charge": {
        "amount": ""
      },
      "big-boomer": {}
    },
    {
      "object-in-motion": {
        "amount": ""
      },
      "impact-savant": {},
      "kinetic-accelerators": {},
      "applied-force": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Heal Scrapper",profession:"Scrapper",traits:`{
  "showAll": false,
  "selectedLines": [
    "47",
    "29",
    "43"
  ],
  "selectedTraits": [
    [
      394,
      1834,
      1916
    ],
    [
      521,
      520,
      473
    ],
    [
      1917,
      1954,
      2052
    ]
  ],
  "items": [
    {
      "over-shield": {},
      "energy-amplifier": {}
    },
    {
      "compounding-chemicals": {}
    },
    {
      "object-in-motion": {
        "amount": ""
      },
      "impact-savant": {},
      "kinetic-accelerators": {},
      "applied-force": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"DPS Scourge",profession:"Scourge",traits:`{
  "showAll": false,
  "selectedLines": [
    "39",
    "50",
    "60"
  ],
  "selectedTraits": [
    [
      2013,
      816,
      801
    ],
    [
      875,
      894,
      905
    ],
    [
      2074,
      2067,
      2164
    ]
  ],
  "items": [
    {
      "barbed-precision": {},
      "furious-demise": {},
      "target-the-weak-base": {},
      "target-the-weak": {
        "amount": ""
      },
      "lingering-curse": {},
      "barbed-precision-on-crit": {
        "amount": "2.7"
      }
    },
    {
      "soul-barbs": {
        "amount": ""
      },
      "vital-persistence": {},
      "death-perception": {}
    },
    {
      "fell-beacon": {},
      "sand-sage-3x": {},
      "demonic-lore": {}
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Power Reaper",profession:"Reaper",traits:`{
  "showAll": false,
  "selectedLines": [
    "53",
    "50",
    "34"
  ],
  "selectedTraits": [
    [
      914,
      829,
      853
    ],
    [
      875,
      894,
      893
    ],
    [
      2020,
      1969,
      2021
    ]
  ],
  "items": [
    {
      "spiteful-talisman": {
        "amount": ""
      },
      "awaken-the-pain": {
        "amount": ""
      },
      "close-to-death": {
        "amount": ""
      }
    },
    {
      "soul-barbs": {
        "amount": ""
      },
      "vital-persistence": {},
      "death-perception": {}
    },
    {
      "soul-eater": {
        "amount": ""
      },
      "decimate-defenses-25x": {},
      "cold-shoulder": {
        "amount": ""
      },
      "reapers-onslaught": {}
    }
  ]
}`,skills:`{
  "skills": {
    "signet-of-spite": {
      "amount": ""
    }
  }
}`},{name:"Condi Reaper",profession:"Reaper",traits:`{
  "showAll": false,
  "selectedLines": [
    "39",
    "50",
    "34"
  ],
  "selectedTraits": [
    [
      2013,
      816,
      801
    ],
    [
      875,
      894,
      905
    ],
    [
      2020,
      1969,
      1919
    ]
  ],
  "items": [
    {
      "barbed-precision": {},
      "furious-demise": {},
      "target-the-weak-base": {},
      "target-the-weak": {
        "amount": ""
      },
      "lingering-curse": {},
      "barbed-precision-on-crit": {
        "amount": "2.74"
      }
    },
    {
      "soul-barbs": {
        "amount": "85"
      },
      "vital-persistence": {},
      "death-perception": {}
    },
    {
      "soul-eater": {
        "amount": ""
      },
      "decimate-defenses-25x": {},
      "cold-shoulder": {
        "amount": ""
      },
      "reapers-onslaught": {}
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"DPS Harbinger",profession:"Harbinger",traits:`{
  "showAll": false,
  "selectedLines": [
    "39",
    "50",
    "64"
  ],
  "selectedTraits": [
    [
      2013,
      816,
      801
    ],
    [
      875,
      894,
      905
    ],
    [
      2185,
      2209,
      2203
    ]
  ],
  "items": [
    {
      "barbed-precision": {},
      "furious-demise": {},
      "target-the-weak-base": {},
      "target-the-weak": {
        "amount": ""
      },
      "lingering-curse": {},
      "barbed-precision-on-crit": {
        "amount": "3.39"
      }
    },
    {
      "soul-barbs": {
        "amount": ""
      },
      "vital-persistence": {},
      "death-perception": {}
    },
    {
      "wicked-corruption": {
        "amount": ""
      },
      "septic-corruption": {
        "amount": "11.6"
      },
      "alchemic-vigor": {},
      "implacable-foe": {},
      "dark-gunslinger": {},
      "cascading-corruption": {},
      "doom-approaches": {}
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Quickness Harbinger",profession:"Harbinger",traits:`{
  "showAll": false,
  "selectedLines": [
    "39",
    "50",
    "64"
  ],
  "selectedTraits": [
    [
      2013,
      816,
      801
    ],
    [
      875,
      894,
      905
    ],
    [
      2185,
      2220,
      2194
    ]
  ],
  "items": [
    {
      "barbed-precision": {},
      "furious-demise": {},
      "target-the-weak-base": {},
      "target-the-weak": {
        "amount": ""
      },
      "lingering-curse": {},
      "barbed-precision-on-crit": {
        "amount": "3.21"
      }
    },
    {
      "soul-barbs": {
        "amount": ""
      },
      "vital-persistence": {},
      "death-perception": {}
    },
    {
      "wicked-corruption": {
        "amount": ""
      },
      "septic-corruption": {
        "amount": "11.6"
      },
      "alchemic-vigor": {},
      "implacable-foe": {},
      "dark-gunslinger": {},
      "cascading-corruption": {},
      "doom-approaches": {},
      "twisted-medicine": {}
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Condi Deadeye",profession:"Deadeye",traits:`{
  "showAll": false,
  "selectedLines": [
    "28",
    "44",
    "58"
  ],
  "selectedTraits": [
    [
      1164,
      1292,
      1291
    ],
    [
      1252,
      1190,
      1706
    ],
    [
      2136,
      2160,
      2111
    ]
  ],
  "items": [
    {
      "dagger-training-base": {},
      "deadly-ambition": {},
      "revealed-training-base": {},
      "exposed-weakness": {
        "amount": ""
      },
      "potent-poison": {},
      "executioner": {
        "amount": ""
      }
    },
    {
      "preparedness": {},
      "lead-attacks": {
        "amount": ""
      },
      "deadly-ambush": {}
    },
    {
      "silent-scope-base": {},
      "silent-scope-rifle": {},
      "premeditation-base": {},
      "premeditation": {
        "amount": ""
      },
      "iron-sight": {},
      "be-quick-or-be-killed": {}
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Staff Daredevil",profession:"Daredevil",traits:`{
  "showAll": false,
  "selectedLines": [
    "28",
    "35",
    "7"
  ],
  "selectedTraits": [
    [
      1245,
      1704,
      1269
    ],
    [
      1268,
      1272,
      1904
    ],
    [
      1933,
      1893,
      2047
    ]
  ],
  "items": [
    {
      "dagger-training-base": {},
      "deadly-ambition": {},
      "revealed-training-base": {},
      "exposed-weakness": {
        "amount": ""
      },
      "potent-poison": {},
      "executioner": {
        "amount": ""
      }
    },
    {
      "keen-observer": {},
      "twin-fangs-scholar": {},
      "twin-fangs-flank": {},
      "practiced-tolerance": {},
      "ferocious-strikes": {
        "amount": ""
      },
      "no-quarter": {
        "amount": ""
      }
    },
    {
      "marauders-resilience": {},
      "weakening-strikes": {},
      "staff-master-base": {},
      "staff-master-staff": {},
      "havoc-specialist": {
        "amount": ""
      },
      "bounding-dodger": {},
      "lotus-training": {}
    }
  ]
}`,skills:`{
  "skills": {
    "signet-of-agility": {},
    "assassins-signet": {}
  }
}`},{name:"Power Boon Daredevil",profession:"Daredevil",traits:`{
  "showAll": false,
  "selectedLines": [
    "28",
    "44",
    "7"
  ],
  "selectedTraits": [
    [
      1245,
      1704,
      1167
    ],
    [
      1163,
      1190,
      1158
    ],
    [
      1949,
      1893,
      2047
    ]
  ],
  "items": [
    {
      "dagger-training-base": {},
      "deadly-ambition": {},
      "revealed-training-base": {},
      "exposed-weakness": {
        "amount": ""
      },
      "potent-poison": {},
      "executioner": {
        "amount": ""
      }
    },
    {
      "preparedness": {},
      "lead-attacks": {
        "amount": ""
      },
      "deadly-ambush": {}
    },
    {
      "marauders-resilience": {},
      "weakening-strikes": {},
      "staff-master-base": {},
      "staff-master-staff": {},
      "havoc-specialist": {
        "amount": ""
      },
      "bounding-dodger": {},
      "lotus-training": {}
    }
  ]
}`,skills:`{
  "skills": {
    "signet-of-agility": {}
  }
}`},{name:"Condi Daredevil",profession:"Daredevil",traits:`{
  "showAll": false,
  "selectedLines": [
    "28",
    "44",
    "7"
  ],
  "selectedTraits": [
    [
      1164,
      1292,
      1291
    ],
    [
      1159,
      1277,
      1706
    ],
    [
      1933,
      1893,
      1833
    ]
  ],
  "items": [
    {
      "dagger-training-base": {},
      "deadly-ambition": {},
      "revealed-training-base": {},
      "exposed-weakness": {
        "amount": ""
      },
      "potent-poison": {},
      "executioner": {
        "amount": ""
      }
    },
    {
      "preparedness": {},
      "lead-attacks": {
        "amount": "11.5"
      },
      "deadly-ambush": {}
    },
    {
      "marauders-resilience": {},
      "weakening-strikes": {},
      "staff-master-base": {},
      "staff-master-staff": {},
      "havoc-specialist": {
        "amount": ""
      },
      "bounding-dodger": {},
      "lotus-training": {}
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Condi Boon Daredevil",profession:"Daredevil",traits:`{
  "showAll": false,
  "selectedLines": [
    "28",
    "44",
    "7"
  ],
  "selectedTraits": [
    [
      1164,
      1292,
      1167
    ],
    [
      1159,
      1277,
      1158
    ],
    [
      1933,
      1893,
      1833
    ]
  ],
  "items": [
    {
      "dagger-training-base": {},
      "deadly-ambition": {},
      "revealed-training-base": {},
      "exposed-weakness": {
        "amount": ""
      },
      "potent-poison": {},
      "executioner": {
        "amount": ""
      }
    },
    {
      "preparedness": {},
      "lead-attacks": {
        "amount": ""
      },
      "deadly-ambush": {}
    },
    {
      "marauders-resilience": {},
      "weakening-strikes": {},
      "staff-master-base": {},
      "staff-master-staff": {},
      "havoc-specialist": {
        "amount": ""
      },
      "bounding-dodger": {},
      "lotus-training": {}
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Rifle Deadeye",profession:"Deadeye",traits:`{
  "showAll": false,
  "selectedLines": [
    "28",
    "35",
    "58"
  ],
  "selectedTraits": [
    [
      1245,
      1704,
      1269
    ],
    [
      1268,
      1272,
      1904
    ],
    [
      2145,
      2160,
      2111
    ]
  ],
  "items": [
    {
      "dagger-training-base": {},
      "deadly-ambition": {},
      "revealed-training-base": {},
      "revealed-training-revealed": {
        "amount": "61"
      },
      "exposed-weakness": {
        "amount": ""
      },
      "potent-poison": {},
      "executioner": {
        "amount": ""
      }
    },
    {
      "keen-observer": {},
      "twin-fangs-scholar": {},
      "twin-fangs-flank": {},
      "practiced-tolerance": {},
      "ferocious-strikes": {
        "amount": ""
      },
      "no-quarter": {
        "amount": ""
      }
    },
    {
      "silent-scope-base": {},
      "silent-scope-rifle": {},
      "premeditation-base": {},
      "premeditation": {
        "amount": ""
      },
      "iron-sight": {},
      "be-quick-or-be-killed": {}
    }
  ]
}`,skills:`{
  "skills": {
    "assassins-signet": {}
  }
}`},{name:"DPS Specter",profession:"Specter",traits:`{
  "showAll": false,
  "selectedLines": [
    "28",
    "44",
    "71"
  ],
  "selectedTraits": [
    [
      1164,
      1292,
      1291
    ],
    [
      1163,
      1190,
      1187
    ],
    [
      2275,
      2290,
      2264
    ]
  ],
  "items": [
    {
      "dagger-training-base": {},
      "deadly-ambition": {},
      "revealed-training-base": {},
      "exposed-weakness": {
        "amount": ""
      },
      "potent-poison": {},
      "executioner": {
        "amount": ""
      }
    },
    {
      "preparedness": {},
      "lead-attacks": {
        "amount": "13.6"
      },
      "deadly-ambush": {}
    },
    {
      "second-opinion-base": {},
      "second-opinion-scepter": {
        "amount": ""
      },
      "dark-sentry": {},
      "larcenous-torment": {},
      "strength-of-shadows-base": {},
      "strength-of-shadows-condis": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"Alacrity Specter",profession:"Specter",traits:`{
  "showAll": false,
  "selectedLines": [
    "28",
    "44",
    "71"
  ],
  "selectedTraits": [
    [
      1164,
      1292,
      1291
    ],
    [
      1163,
      1277,
      1187
    ],
    [
      2275,
      2285,
      2264
    ]
  ],
  "items": [
    {
      "dagger-training-base": {},
      "deadly-ambition": {},
      "revealed-training-base": {},
      "exposed-weakness": {
        "amount": ""
      },
      "potent-poison": {},
      "executioner": {
        "amount": ""
      }
    },
    {
      "preparedness": {},
      "lead-attacks": {
        "amount": "13.6"
      },
      "deadly-ambush": {}
    },
    {
      "second-opinion-base": {},
      "second-opinion-scepter": {
        "amount": ""
      },
      "dark-sentry": {},
      "larcenous-torment": {},
      "strength-of-shadows-base": {},
      "strength-of-shadows-condis": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {}
}`},{name:"[beta1] DPS Specter Endless Night",profession:"Specter",traits:`{
  "showAll": false,
  "selectedLines": [
    "28",
    "44",
    "71"
  ],
  "selectedTraits": [
    [
      1164,
      1292,
      1291
    ],
    [
      1252,
      1286,
      1187
    ],
    [
      2275,
      2290,
      2264
    ]
  ],
  "items": [
    {
      "dagger-training-base": {},
      "deadly-ambition": {},
      "revealed-training-base": {},
      "exposed-weakness": {
        "amount": ""
      },
      "potent-poison": {},
      "executioner": {
        "amount": ""
      }
    },
    {
      "preparedness": {},
      "lead-attacks": {
        "amount": ""
      },
      "deadly-ambush": {}
    },
    {
      "second-opinion-base": {},
      "second-opinion-scepter": {
        "amount": ""
      },
      "dark-sentry": {},
      "larcenous-torment": {},
      "strength-of-shadows-base": {},
      "strength-of-shadows-condis": {
        "amount": ""
      }
    }
  ]
}`,skills:`{
  "skills": {}
}`}]},Lx={"GraphQL ID":"templates",list:[{class:"Mesmer",builds:[{name:"Power Chrono IA",id:"pchrono",specialization:"Chronomancer",boons:"Power (spotter)",priority:"Power DPS",distribution:"Power Chrono IA",traits:"Power Chrono IA",extras:"Power (Fractal)",weaponType:"unset"},{name:"Alacrity Mirage",id:"alacmirage",specialization:"Mirage",boons:"Condi",priority:"Condi DPS",distribution:"Staff Mirage",traits:"Staff Mirage",extras:"Alacrity Mirage (Raid)",weaponType:"Two-handed"},{name:"Axe Mirage",id:"axe-mirage-deception-torch",specialization:"Mirage",boons:"Condi",priority:"Condi DPS",distribution:"Axe Mirage (Deception Torch)",traits:"Axe Mirage",extras:"DPS Mirage (Raid)",weaponType:"Dual wield"},{name:"Condi Chrono STM",id:"condi-chrono-stm",specialization:"Chronomancer",boons:"Condi",priority:"Condi DPS",distribution:"Condi Chrono STM",traits:"Condi Chrono STM",extras:"Condi Chrono STM",weaponType:"Dual wield"},{name:"Power Virtuoso",id:"pvirt",specialization:"Virtuoso",boons:"Power (spotter)",priority:"Power DPS",distribution:"Power Virtuoso",traits:"Power Virtuoso (no accuracy)",extras:"Power (Fractal)",weaponType:"unset"},{name:"Condi Virtuoso",id:"cvirt",specialization:"Virtuoso",boons:"Condi",priority:"Condi DPS Rampager",distribution:"Condi Virtuoso",traits:"Condi Virtuoso",extras:"Condi Virtuoso",weaponType:"Dual wield"},{name:"Condi Virtuoso (sharpening sorrow)",id:"cvirt-sorrow",specialization:"Virtuoso",boons:"Condi",priority:"Condi DPS Rampager",distribution:"Condi Virtuoso (sharpening sorrow)",traits:"Condi Virtuoso (sharpening sorrow)",extras:"Condi Virtuoso",weaponType:"Dual wield"}]},{class:"Guardian",builds:[{name:"DH Radiance w/ PI",id:"dh-radiance-pi",specialization:"Dragonhunter",boons:"Power (spotter)",priority:"Power DPS",distribution:"DH Radiance",traits:"DH Radiance w/ PI",extras:"Power (Fractal)",weaponType:"Two-handed"},{name:"DH Radiance",id:"dh-radiance",specialization:"Dragonhunter",boons:"Power (spotter)",priority:"Power DPS",distribution:"DH Radiance",traits:"DH Radiance",extras:"Power (Fractal)",weaponType:"Two-handed"},{name:"DH Virtues",id:"dh-virtues",specialization:"Dragonhunter",boons:"Power (spotter)",priority:"Power DPS",distribution:"DH Virtues",traits:"DH Virtues",extras:"DH Virtues (Fractal)",weaponType:"Two-handed"},{name:"Core Guardian",id:"core-guard",specialization:"Guardian",boons:"Power (spotter)",priority:"Power DPS",distribution:"Core Guardian",traits:"Core Guardian",extras:"Power (Fractal)",weaponType:"Two-handed"},{name:"Power Willbender Virtues",id:"pwb-virtues",specialization:"Willbender",boons:"Power (spotter)",priority:"Power DPS",distribution:"Power Willbender Virtues",traits:"Power Willbender Virtues",extras:"Power Willbender Virtues (Fractal)",weaponType:"Two-handed"},{name:"Power Willbender Radiance",id:"pwb-radiance",specialization:"Willbender",boons:"Power (spotter)",priority:"Power DPS",distribution:"Power Willbender Radiance",traits:"Power Willbender Radiance",extras:"Power (Fractal)",weaponType:"Two-handed"},{name:"Power Alacrity Willbender",id:"pwb-alac",specialization:"Willbender",boons:"Power (spotter)",priority:"Power DPS",distribution:"Power Alacrity Willbender",traits:"Power Alacrity Willbender",extras:"Power Willbender Virtues (Fractal)",weaponType:"Two-handed"},{name:"Power Quickbrand",id:"pqfb",specialization:"Firebrand",boons:"Power (spotter)",priority:"Power Quickbrand 25%",distribution:"Power Quickbrand (approx.)",traits:"Power Quickbrand",extras:"Power (Fractal)",weaponType:"Two-handed"},{name:"Condi Willbender Sword",id:"cwb-sw",specialization:"Willbender",boons:"Condi",priority:"Hybrid DPS",distribution:"Condi Willbender Sword",traits:"Condi Willbender",extras:"Condi Willbender",weaponType:"Dual wield"},{name:"Condi Willbender GS",id:"cwb-gs",specialization:"Willbender",boons:"Condi",priority:"Hybrid DPS",distribution:"Condi Willbender GS",traits:"Condi Willbender",extras:"Condi Willbender",weaponType:"Two-handed"},{name:"Condi Alacrity Willbender",id:"cwb-alac",specialization:"Willbender",boons:"Condi",priority:"Condi Alacrity Willbender 19%",distribution:"Condi Alacrity Willbender",traits:"Condi Alacrity Willbender",extras:"Condi Alacrity Willbender",weaponType:"Dual wield"},{name:"CFB DPS 5 page (balthazar)",id:"cfb-geo",specialization:"Firebrand",boons:"Condi",priority:"Condi DPS",distribution:"CFB (5 page RF, allies)",traits:"CFB DPS 5 page",extras:"CFB DPS (5 page, balthazar)",weaponType:"Dual wield"},{name:"CFB DPS 5 page (renegade)",id:"cfb-smoldering",specialization:"Firebrand",boons:"Condi",priority:"Condi DPS",distribution:"CFB (5 page RF, allies)",traits:"CFB DPS 5 page",extras:"CFB DPS (renegade)",weaponType:"Dual wield"},{name:"CFB DPS 8 page (balthazar)",id:"cfb-8-balth",specialization:"Firebrand",boons:"Condi",priority:"Condi DPS",distribution:"CFB (8 page, allies)",traits:"CFB DPS 8 page",extras:"CFB DPS (8 page, balthazar)",weaponType:"Dual wield"},{name:"CFB DPS 8 page (renegade)",id:"cfb-8-ren",specialization:"Firebrand",boons:"Condi",priority:"Condi DPS",distribution:"CFB (8 page, allies)",traits:"CFB DPS 8 page",extras:"CFB DPS (renegade)",weaponType:"Dual wield"},{name:"Condi Quickbrand 49%",id:"cqfb-firebrand-49",specialization:"Firebrand",boons:"Condi",priority:"Condi Quickbrand 49",distribution:"Condi Quickbrand (allies)",traits:"Condi Quickbrand",extras:"Condi Quickbrand",weaponType:"Dual wield"},{name:"Hybrid FB Virtues",id:"hycfb-virtues-leadership",specialization:"Firebrand",boons:"Condi",priority:"Condi Hybrid Firebrand 40%",distribution:"Hybrid FB Virtues",traits:"Hybrid FB Virtues",extras:"Hybrid FB Traveler",weaponType:"unset"},{name:"Hybrid FB Honor",id:"hycfb-honor-leadership",specialization:"Firebrand",boons:"Condi",priority:"Condi Hybrid Firebrand 40%",distribution:"Hybrid FB Honor",traits:"Hybrid FB Honor",extras:"Hybrid FB Traveler",weaponType:"unset"},{name:"Healbrand",id:"hb",specialization:"Firebrand",boons:"Power (spotter)",priority:"Heal",distribution:"None",traits:"Healbrand",extras:"Heal",weaponType:"Two-handed"}]},{class:"Warrior",builds:[{name:"Power Banner Bers",id:"pbers",specialization:"Berserker",boons:"Power (spotter)",priority:"Power DPS",distribution:"Power Banner Bers Strength",traits:"Power Banner Bers Strength",extras:"Power (Fractal)",weaponType:"unset"},{name:"Condi Banner Bers",id:"cbers",specialization:"Berserker",boons:"Condi",priority:"Condi DPS",distribution:"Condi Banner Bers",traits:"Condi Bers",extras:"Condi Bers",weaponType:"Two-handed"},{name:"Banner Bladesworn",id:"bls-bs",specialization:"Bladesworn",boons:"Power (spotter)",priority:"Power DPS",distribution:"Bladesworn",traits:"Banner Bladesworn",extras:"Power (Fractal)",weaponType:"Dual wield"},{name:"DPS Bladesworn",id:"bls-dps",specialization:"Bladesworn",boons:"Power (spotter)",priority:"Power DPS",distribution:"Bladesworn",traits:"DPS Bladesworn",extras:"Power (Fractal)",weaponType:"Dual wield"},{name:"Might Bladesworn",id:"bls-might",specialization:"Bladesworn",boons:"Power (spotter)",priority:"Power DPS",distribution:"Bladesworn",traits:"Might Bladesworn",extras:"Power (Fractal)",weaponType:"Dual wield"},{name:"Power Banner SPB",id:"spb-bs",specialization:"Spellbreaker",boons:"Power (spotter)",priority:"Power DPS",distribution:"Power Banner Spellbreaker",traits:"Power Banner SPB",extras:"Power (Fractal)",weaponType:"unset"}]},{class:"Elementalist",builds:[{name:"Power Weaver",id:"pwea",specialization:"Weaver",boons:"Power (spotter)",priority:"Power DPS",distribution:"Power Weaver (BTTH, small)",traits:"Power Weaver Stormsoul",extras:"Power (Fractal)",weaponType:"Dual wield"},{name:"Condi Weaver Sword",id:"cwea-sw",specialization:"Weaver",boons:"Condi",priority:"Condi DPS",distribution:"Condi Weaver Sword",traits:"Condi Weaver Sword",extras:"Condi Weaver Sword",weaponType:"Dual wield"},{name:"Condi Weaver Dagger",id:"cwea-dg",specialization:"Weaver",boons:"Condi",priority:"Condi DPS",distribution:"Condi Weaver (Dagger)",traits:"Condi Weaver Dagger",extras:"Condi Weaver Dagger",weaponType:"Dual wield"},{name:"Hybrid Weaver",id:"hwea",specialization:"Weaver",boons:"Condi",priority:"Hybrid DPS",distribution:"Hybrid Weaver",traits:"Hybrid Weaver",extras:"Hybrid Weaver (Fractal)",weaponType:"Dual wield"},{name:"Condi Tempest",id:"ctemp",specialization:"Tempest",boons:"Condi",priority:"Condi DPS",distribution:"Condi Tempest",traits:"Condi Tempest",extras:"Condi Tempest",weaponType:"Dual wield"},{name:"Power Tempest (approx.)",id:"ptemp",specialization:"Tempest",boons:"Power (spotter)",priority:"Power DPS",distribution:"Power Tempest",traits:"Power Tempest",extras:"Power (Fractal)",weaponType:"Dual wield"},{name:"Heal Tempest",id:"healtemp",specialization:"Tempest",boons:"Power (spotter)",priority:"Heal",distribution:"None",traits:"Heal Tempest",extras:"Heal",weaponType:"unset"},{name:"[beta2] Power Catalyst",id:"power-cat",specialization:"Catalyst",boons:"Power (spotter)",priority:"Power DPS",distribution:"[beta2] Power Catalyst",traits:"[beta2] Power Catalyst",extras:"Power (Fractal)",weaponType:"Two-handed"},{name:"[beta2] Power Quickness Catalyst",id:"power-cat-quick",specialization:"Catalyst",boons:"Power (spotter)",priority:"Power DPS",distribution:"[beta2] Power Catalyst",traits:"[beta2] Power Quickness Catalyst",extras:"Power (Fractal)",weaponType:"Two-handed"},{name:"[beta1] Condi Catalyst",id:"condi-cat",specialization:"Catalyst",boons:"Condi",priority:"Condi DPS",distribution:"[beta1] Condi Catalyst",traits:"[beta1] Condi Catalyst",extras:"[beta1] Condi Catalyst",weaponType:"Two-handed"}]},{class:"Ranger",builds:[{name:"Power Slb Marks",id:"pslb",specialization:"Soulbeast",boons:"Power (spotter)",priority:"Power DPS",distribution:"Power Slb Skirm",traits:"Power Slb Marks",extras:"Power (Fractal)",weaponType:"Two-handed"},{name:"Condi Slb SB",id:"cslb-sb",specialization:"Soulbeast",boons:"Condi",priority:"Condi DPS",distribution:"Condi Slb (D/T SB)",traits:"Condi Slb SB",extras:"Condi Slb",weaponType:"Two-handed"},{name:"Condi Slb D/T A/D",id:"cslb-dtad",specialization:"Soulbeast",boons:"Condi",priority:"Condi DPS",distribution:"Condi Slb (D/T A/D)",traits:"Condi Slb D/T A/D",extras:"Condi Slb",weaponType:"Dual wield"},{name:"Hybrid Slb",id:"hslb",specialization:"Soulbeast",boons:"Condi",priority:"Hybrid DPS",distribution:"Hybrid Slb (A/T D/A)",traits:"Hybrid Slb",extras:"Hybrid Slb",weaponType:"Dual wield"},{name:"Condi Druid",id:"condidruid",specialization:"Druid",boons:"Power (spotter)",priority:"Condi Hybrid Druid 52%",distribution:"Condi Druid (approx.)",traits:"Condi Druid",extras:"Condi Druid",weaponType:"Two-handed"},{name:"Heal Druid",id:"druid",specialization:"Druid",boons:"Power (spotter)",priority:"Heal",distribution:"None",traits:"Heal Druid",extras:"Heal",weaponType:"Two-handed"}]},{class:"Revenant",builds:[{name:"Vindicator",id:"vindi",specialization:"Vindicator",boons:"Power (spotter)",priority:"Power DPS",distribution:"DPS Vindicator",traits:"DPS Vindicator",extras:"DPS Vindicator",weaponType:"Two-handed"},{name:"Condi DPS Ren Invo",id:"cren-invo",specialization:"Renegade",boons:"Condi",priority:"Condi DPS",distribution:"Condi Renegade Invocation",traits:"Condi DPS Ren Invo",extras:"Condi Ren",weaponType:"Two-handed"},{name:"Condi Alac Ren Invo",id:"cren-alac-invo",specialization:"Renegade",boons:"Condi",priority:"Condi Alacrity Renegade 78%",distribution:"Condi Alac Invocation",traits:"Condi Alac Ren Invo",extras:"Condi Alac Ren",weaponType:"Two-handed"},{name:"Power Alac Ren (outdated)",id:"pren",specialization:"Renegade",boons:"Power (spotter)",priority:"Power Boon",distribution:"Alacrity Renegade",traits:"Power Alac Ren",extras:"Power (Fractal)",weaponType:"Two-handed"},{name:"Power Herald DE (outdated)",id:"herald",specialization:"Herald",boons:"Power (spotter)",priority:"Power DPS",distribution:"Power Herald DE",traits:"Power Herald DE",extras:"Power (Fractal)",weaponType:"Dual wield"},{name:"Condi Herald (outdated)",id:"cherald",specialization:"Herald",boons:"Condi",priority:"Condi DPS",distribution:"Condi Herald",traits:"Condi Herald",extras:"Condi Herald",weaponType:"Dual wield"},{name:"Heal Ren",id:"healren",specialization:"Renegade",boons:"Power (spotter)",priority:"Heal",distribution:"None",traits:"Heal Ren",extras:"Heal",weaponType:"Two-handed"}]},{class:"Engineer",builds:[{name:"Power Holo ECSU",id:"pholo-ecsu",specialization:"Holosmith",boons:"Power (spotter)",priority:"Power DPS",distribution:"Power Holo ECSU",traits:"Power Holo ECSU",extras:"Power (Fractal)",weaponType:"unset"},{name:"Condi Holo",id:"cholo",specialization:"Holosmith",boons:"Condi",priority:"Condi DPS",distribution:"Condi Holo",traits:"Condi Holo",extras:"Condi Holo",weaponType:"Dual wield"},{name:"Power Scrapper",id:"pscrap",specialization:"Scrapper",boons:"Power (spotter)",priority:"Power DPS",distribution:"Power Scrapper",traits:"Power Scrapper",extras:"Power (Fractal)",weaponType:"Two-handed"},{name:"Quickness Scrapper",id:"qscrap",specialization:"Scrapper",boons:"Power (spotter)",priority:"Power Quickness Scrapper 33.3%",distribution:"Quickness Scrapper",traits:"Quickness Scrapper",extras:"Power (Fractal)",weaponType:"Two-handed"},{name:"Heal Scrapper",id:"healscrapper",specialization:"Scrapper",boons:"Power (spotter)",priority:"Heal",distribution:"None",traits:"Heal Scrapper",extras:"Heal",weaponType:"unset"},{name:"Condi Mechanist J-Drive (approx.)",id:"cmech-sig-mace",specialization:"Mechanist",boons:"Condi",priority:"Condi DPS",distribution:"Condi Mechanist J-Drive Mace (approx.)",traits:"Condi Mechanist J-Drive",extras:"Condi Mechanist",weaponType:"Dual wield"},{name:"Condi Mechanist Jade Dynamo (approx.)",id:"cmech-dynamo-pistol",specialization:"Mechanist",boons:"Condi",priority:"Condi DPS",distribution:"Condi Mechanist Jade Dynamo Pistol (approx.)",traits:"Condi Mechanist Jade Dynamo",extras:"Condi Mechanist",weaponType:"Dual wield"}]},{class:"Necromancer",builds:[{name:"DPS Scourge",id:"scourge",specialization:"Scourge",boons:"Condi",priority:"Condi DPS",distribution:"Condi Scourge",traits:"DPS Scourge",extras:"DPS Scourge",weaponType:"Dual wield"},{name:"Condi Reaper",id:"creaper",specialization:"Reaper",boons:"Condi",priority:"Hybrid DPS",distribution:"Condi Reaper",traits:"Condi Reaper",extras:"Condi Reaper",weaponType:"Two-handed"},{name:"DPS Harbinger",id:"charb",specialization:"Harbinger",boons:"Condi",priority:"Viper Only",distribution:"DPS Harbinger",traits:"DPS Harbinger",extras:"DPS Harbinger",weaponType:"Dual wield"},{name:"Quickness Harbinger",id:"qharb",specialization:"Harbinger",boons:"Condi",priority:"Condi Quickness Harbinger 23%",distribution:"Quickness Harbinger",traits:"Quickness Harbinger",extras:"Quickness Harbinger",weaponType:"Dual wield"}]},{class:"Thief",builds:[{name:"Condi Deadeye",id:"cded",specialization:"Deadeye",boons:"Condi",priority:"Condi DPS",distribution:"Condi Deadeye",traits:"Condi Deadeye",extras:"Condi Deadeye",weaponType:"Dual wield"},{name:"Staff Daredevil",id:"staffdd",specialization:"Daredevil",boons:"Power (spotter)",priority:"Power DPS",distribution:"Staff Daredevil",traits:"Staff Daredevil",extras:"Power (Fractal)",weaponType:"Two-handed"},{name:"Power Boon Daredevil",id:"boondd-power",specialization:"Daredevil",boons:"Power (spotter)",priority:"Power Boon Daredevil 99.7%",distribution:"Staff Daredevil",traits:"Power Boon Daredevil",extras:"Power Boon Daredevil",weaponType:"Two-handed"},{name:"Condi Daredevil",id:"cdd",specialization:"Daredevil",boons:"Condi",priority:"Condi DPS",distribution:"Condi Daredevil",traits:"Condi Daredevil",extras:"Condi Daredevil",weaponType:"Dual wield"},{name:"Condi Boon Daredevil",id:"boondd-condi",specialization:"Daredevil",boons:"Condi",priority:"Condi Boon Daredevil 62%",distribution:"None",traits:"Condi Boon Daredevil",extras:"Condi Boon Daredevil",weaponType:"Dual wield"},{name:"Rifle Deadeye",id:"rifleded",specialization:"Deadeye",boons:"Power (spotter)",priority:"Power DPS",distribution:"Rifle Deadeye",traits:"Rifle Deadeye",extras:"Power (Fractal)",weaponType:"Two-handed"},{name:"DPS Specter",id:"specter",specialization:"Specter",boons:"Condi",priority:"Condi DPS",distribution:"DPS Specter (allies)",traits:"DPS Specter",extras:"DPS Specter",weaponType:"Dual wield"},{name:"Alacrity Specter",id:"specter-alac",specialization:"Specter",boons:"Condi",priority:"Condi Alacrity Specter 57%",distribution:"Alacrity Specter (allies)",traits:"Alacrity Specter",extras:"Alacrity Specter",weaponType:"Dual wield"}]}]};var Fi={},Ex=qe.exports;Object.defineProperty(Fi,"__esModule",{value:!0});var Fc=Fi.default=void 0,Mx=Ex(Ge),Bx=Ke,Ox=(0,Mx.default)((0,Bx.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");Fc=Fi.default=Ox;var _i={},Nx=qe.exports;Object.defineProperty(_i,"__esModule",{value:!0});var Rr=_i.default=void 0,zx=Nx(Ge),Fx=Ke,_x=(0,zx.default)((0,Fx.jsx)("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"}),"Share");Rr=_i.default=_x;var $n={},Sn={};Object.defineProperty(Sn,"__esModule",{value:!0});Sn.createPopupState=jx;Sn.anchorRef=Ux;Sn.bindTrigger=qx;Sn.bindContextMenu=Gx;Sn.bindToggle=Yx;Sn.bindHover=Kx;Sn.bindFocus=Qx;Sn.bindPopover=Jx;Sn.bindMenu=Xx;Sn.bindPopper=Zx;Sn.initCoreState=void 0;Hx(C.exports);function _c(e){if(typeof WeakMap!="function")return null;var n=new WeakMap,t=new WeakMap;return(_c=function(r){return r?t:n})(e)}function Hx(e,n){if(!n&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var t=_c(n);if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)){var s=o?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}const Fs={};function Wx(e,n){Fs[e]||(Fs[e]=!0,console.error("[material-ui-popup-state] WARNING",n))}const Vx={isOpen:!1,setAnchorElUsed:!1,anchorEl:null,hovered:!1,focused:!1,_childPopupState:null,_deferNextOpen:!1,_deferNextClose:!1};Sn.initCoreState=Vx;function jx({state:e,setState:n,parentPopupState:t,popupId:r,variant:o,disableAutoFocus:a}){const{isOpen:s,setAnchorElUsed:l,anchorEl:c,hovered:u,focused:d,_childPopupState:p,_deferNextOpen:m,_deferNextClose:f}=e;let b=e;const v=D=>{ny(b,D)&&n(b=ue(ue({},b),D))},h=D=>{v({setAnchorElUsed:!0,anchorEl:D})},x=D=>{s?k(D):w(D)},w=D=>{const E=D&&D.type,S=D&&D.currentTarget;if(E==="touchstart"){v({_deferNextOpen:!0});return}const P=()=>{if(!D&&!l&&Wx("missingEventOrAnchorEl","eventOrAnchorEl should be defined if setAnchorEl is not used"),t){if(!t.isOpen)return;t._setChildPopupState($)}const B={isOpen:!0,hovered:E==="mouseover",focused:E==="focus"};S?l||(B.anchorEl=S):D&&(B.anchorEl=D),v(B)};m?(v({_deferNextOpen:!1}),setTimeout(P,0)):P()},k=D=>{switch(D&&D.type){case"touchstart":v({_deferNextClose:!0});return;case"blur":if(si(D==null?void 0:D.relatedTarget,$))return;break}const S=()=>{p&&p.close(),t&&t._setChildPopupState(null),v({isOpen:!1,hovered:!1,focused:!1})};f?(v({_deferNextClose:!1}),setTimeout(S,0)):S()},T=(D,E)=>{D?w(E):k(E)},R=D=>{const E=D.relatedTarget;u&&!si(E,$)&&k(D)},A=D=>v({_childPopupState:D}),$={anchorEl:c,setAnchorEl:h,setAnchorElUsed:l,popupId:r,variant:o,isOpen:s,open:w,close:k,toggle:x,setOpen:T,onMouseLeave:R,disableAutoFocus:a!=null?a:Boolean(u||d),_childPopupState:p,_setChildPopupState:A};return $}function Ux({setAnchorEl:e}){return n=>{n&&e(n)}}function qx({isOpen:e,open:n,popupId:t,variant:r}){return{[r==="popover"?"aria-controls":"aria-describedby"]:e?t:null,"aria-haspopup":r==="popover"?!0:void 0,onClick:n,onTouchStart:n}}function Gx({isOpen:e,open:n,popupId:t,variant:r}){return{[r==="popover"?"aria-controls":"aria-describedby"]:e?t:null,"aria-haspopup":r==="popover"?!0:void 0,onContextMenu:o=>{o.preventDefault(),n(o)}}}function Yx({isOpen:e,toggle:n,popupId:t,variant:r}){return{[r==="popover"?"aria-controls":"aria-describedby"]:e?t:null,"aria-haspopup":r==="popover"?!0:void 0,onClick:n,onTouchStart:n}}function Kx({isOpen:e,open:n,onMouseLeave:t,popupId:r,variant:o}){return{[o==="popover"?"aria-controls":"aria-describedby"]:e?r:null,"aria-haspopup":o==="popover"?!0:void 0,onTouchStart:n,onMouseOver:n,onMouseLeave:t}}function Qx({isOpen:e,open:n,close:t,popupId:r,variant:o}){return{[o==="popover"?"aria-controls":"aria-describedby"]:e?r:null,"aria-haspopup":o==="popover"?!0:void 0,onFocus:n,onBlur:t}}function Jx({isOpen:e,anchorEl:n,close:t,popupId:r,onMouseLeave:o,disableAutoFocus:a}){return ue({id:r,anchorEl:n,open:e,onClose:t,onMouseLeave:o},a&&{disableAutoFocus:!0,disableEnforceFocus:!0,disableRestoreFocus:!0})}function Xx({isOpen:e,anchorEl:n,close:t,popupId:r,onMouseLeave:o,disableAutoFocus:a}){return ue({id:r,anchorEl:n,open:e,onClose:t,onMouseLeave:o},a&&{autoFocus:!1,disableAutoFocusItem:!0,disableAutoFocus:!0,disableEnforceFocus:!0,disableRestoreFocus:!0})}function Zx({isOpen:e,anchorEl:n,popupId:t,onMouseLeave:r}){return{id:t,anchorEl:n,open:e,onMouseLeave:r}}function ey({popupId:e}){return e&&typeof document!="undefined"?document.getElementById(e):null}function si(e,n){const{anchorEl:t,_childPopupState:r}=n;return _s(t,e)||_s(ey(n),e)||r!=null&&si(e,r)}function _s(e,n){if(!e)return!1;for(;n;){if(n===e)return!0;n=n.parentElement}return!1}function ny(e,n){for(let t in n)if(Object.prototype.hasOwnProperty.call(e,t)&&e[t]!==n[t])return!0;return!1}(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.usePopupState=r,Object.defineProperty(e,"anchorRef",{enumerable:!0,get:function(){return t.anchorRef}}),Object.defineProperty(e,"bindTrigger",{enumerable:!0,get:function(){return t.bindTrigger}}),Object.defineProperty(e,"bindContextMenu",{enumerable:!0,get:function(){return t.bindContextMenu}}),Object.defineProperty(e,"bindToggle",{enumerable:!0,get:function(){return t.bindToggle}}),Object.defineProperty(e,"bindHover",{enumerable:!0,get:function(){return t.bindHover}}),Object.defineProperty(e,"bindFocus",{enumerable:!0,get:function(){return t.bindFocus}}),Object.defineProperty(e,"bindMenu",{enumerable:!0,get:function(){return t.bindMenu}}),Object.defineProperty(e,"bindPopover",{enumerable:!0,get:function(){return t.bindPopover}}),Object.defineProperty(e,"bindPopper",{enumerable:!0,get:function(){return t.bindPopper}});var n=C.exports,t=Sn;if(!n.useState)throw new Error("React.useState (added in 16.8.0) must be defined to use the hooks API");function r({parentPopupState:o,popupId:a,variant:s,disableAutoFocus:l}){const[c,u]=(0,n.useState)(t.initCoreState);return(0,n.useEffect)(()=>{if(!l&&a&&typeof document=="object"){const d=document.getElementById(a);d&&d.focus()}},[a,c.anchorEl]),(0,n.useMemo)(()=>(0,t.createPopupState)({state:c,setState:u,parentPopupState:o,popupId:a,variant:s,disableAutoFocus:l}),[c,u,o,a,s,l])}})($n);var Hi={},Wi={};Object.defineProperty(Wi,"__esModule",{value:!0});Wi.default=ry;var Hs=ty(C.exports);function Hc(e){if(typeof WeakMap!="function")return null;var n=new WeakMap,t=new WeakMap;return(Hc=function(r){return r?t:n})(e)}function ty(e,n){if(!n&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var t=Hc(n);if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)){var s=o?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}function li(){return li=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},li.apply(this,arguments)}function ry(e){return Hs.forwardRef((a,o)=>{var s=a,{PaperProps:n,style:t}=s,r=Ir(s,["PaperProps","style"]);return Hs.createElement(e,li({},r,{ref:o,style:ue({pointerEvents:"none"},t),PaperProps:Ne(ue({},n),{style:ue({pointerEvents:"auto"},n==null?void 0:n.style)})}))})}var oy=Hl(S1);Object.defineProperty(Hi,"__esModule",{value:!0});var Wc=Hi.default=void 0;sy(C.exports);var iy=Vc(Wi),ay=Vc(oy);function Vc(e){return e&&e.__esModule?e:{default:e}}function jc(e){if(typeof WeakMap!="function")return null;var n=new WeakMap,t=new WeakMap;return(jc=function(r){return r?t:n})(e)}function sy(e,n){if(!n&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var t=jc(n);if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)){var s=o?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}var ly=(0,iy.default)(ay.default);Wc=Hi.default=ly;const cy=Je()(e=>({accordionRoot:{border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},accordionSummaryRoot:{backgroundColor:"rgba(0, 0, 0, .03)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}},accordionSummaryContent:{"&$expanded":{margin:"12px 0"}},accordionDetailsRoot:{padding:e.spacing(2),flexDirection:"column"}}));function uy({data:e,buffPresets:n,prioritiesPresets:t,distributionPresets:r,extrasPresets:o,traitPresets:a}){const{classes:s}=cy(),[l,c]=Y.useState(""),u=Ee(),d=p=>(m,f)=>{c(f?p:!1)};return e.map(p=>y(Yt,{classes:{root:s.accordionRoot},square:!0,expanded:l===p.class,onChange:d(p.class),children:[i(Qt,{classes:{root:s.accordionSummaryRoot,content:s.accordionSummaryContent},"aria-controls":"panel1d-content",id:"panel1d-header",children:i(pt,{name:p.class,disableLink:!0,style:{fontSize:20}})}),i(Kt,{classes:{root:s.accordionDetailsRoot},children:p.builds.map(m=>i(J,{mb:1,children:i(ht,{variant:"outlined",label:i(pt,{name:m.specialization,text:m.name,disableLink:!0}),onClick:f=>{var b,v,h,x,w;u({type:Fn.Stop}),u(Wl({build:m,specialization:m.specialization,profession:p.class,buffPreset:JSON.parse(n.find(k=>k.name===m.boons).value),distributionPreset:JSON.parse(((b=r.find(k=>k.name===m.distribution))==null?void 0:b.value)||"null"),prioritiesPreset:JSON.parse((v=t.find(k=>k.name===m.priority))==null?void 0:v.value),extrasPreset:JSON.parse((h=o.find(k=>k.name===m.extras))==null?void 0:h.value),traitsPreset:JSON.parse((x=a.find(k=>k.name===m.traits))==null?void 0:x.traits),skillsPreset:JSON.parse((w=a.find(k=>k.name===m.traits))==null?void 0:w.skills)}))}})},`templateBuildMobile_${m.name}`))})]},`mobileTemplate_${p.class}`))}const dy=Je()(e=>({icon:{fontSize:"2rem"}})),py=({data:e,buffPresets:n,prioritiesPresets:t,distributionPresets:r,extrasPresets:o,traitPresets:a})=>{const{classes:s}=dy(),l=Ee(),c=q(ho),u=q(Vl),d=q(Fd),p=q(jl),{t:m}=Se(),[f,b]=C.exports.useState({mobileView:typeof window!="undefined"?window.innerWidth<900:!1,drawerOpen:!1,hover:[!1,!1,!1,!1,!1,!1,!1,!1,!1],anchor:null}),{mobileView:v,drawerOpen:h}=f;C.exports.useEffect(()=>{const $=xi(()=>{const D=window.innerWidth<900;D!==v&&b(E=>Ne(ue({},E),{mobileView:D}))},300);return window.addEventListener("resize",$),()=>{window.removeEventListener("resize",$)}},[v]);const x=()=>y(J,{children:[i(qn,{control:i(eo,{checked:u,onChange:A=>{l({type:Fn.Stop}),l(_d(A.target.checked))},name:"checked",color:"primary"}),label:m("Expert")}),i(Hn,{href:"#share",size:"large",onClick:()=>{const A=document.getElementById("#share");A&&A.scrollIntoView()},children:i(Rr,{})})]}),w=()=>{const A=()=>b(D=>Ne(ue({},D),{drawerOpen:!0}));return y(Os,{children:[i(J,{flexGrow:1,children:i(Hn,{edge:"start",color:"inherit","aria-label":"menu","aria-haspopup":"true",onClick:A,size:"large",children:i(Fc,{})})}),i(w0,{anchor:"left",open:h,onOpen:A,onClose:()=>b(D=>Ne(ue({},D),{drawerOpen:!1})),children:i("div",{children:i(uy,{data:e,buffPresets:n,prioritiesPresets:t,distributionPresets:r,extrasPresets:o,traitPresets:a})})}),x()]})},k=(A,$,D,E)=>{var S,P,B,I,O;l({type:Fn.Stop}),l(Wl({build:$,specialization:D,profession:E,buffPreset:JSON.parse(n.find(z=>z.name===$.boons).value),distributionPreset:JSON.parse(((S=r.find(z=>z.name===$.distribution))==null?void 0:S.value)||"null"),prioritiesPreset:JSON.parse((P=t.find(z=>z.name===$.priority))==null?void 0:P.value),extrasPreset:JSON.parse((B=o.find(z=>z.name===$.extras))==null?void 0:B.value),traitsPreset:JSON.parse((I=a.find(z=>z.name===$.traits))==null?void 0:I.traits),skillsPreset:JSON.parse((O=a.find(z=>z.name===$.traits))==null?void 0:O.skills)})),A.close()},T=[$n.usePopupState({variant:"popover",popupId:"warriorTemplates",disableAutoFocus:!0}),$n.usePopupState({variant:"popover",popupId:"revenantTemplates",disableAutoFocus:!0}),$n.usePopupState({variant:"popover",popupId:"guardianTemplates",disableAutoFocus:!0}),$n.usePopupState({variant:"popover",popupId:"rangerTemplates",disableAutoFocus:!0}),$n.usePopupState({variant:"popover",popupId:"engineerTemplates",disableAutoFocus:!0}),$n.usePopupState({variant:"popover",popupId:"elementalistTemplates",disableAutoFocus:!0}),$n.usePopupState({variant:"popover",popupId:"memsmerTemplates",disableAutoFocus:!0}),$n.usePopupState({variant:"popover",popupId:"necromancerTemplates",disableAutoFocus:!0}),$n.usePopupState({variant:"popover",popupId:"thiefTemplates",disableAutoFocus:!0})],R=()=>y(Os,{children:[i(J,{flexGrow:1,children:go.map((A,$)=>{var D,E;return y(Y.Fragment,{children:[i(Yn,Ne(ue({onClick:()=>{l({type:Fn.Stop}),u&&l(Hd(A.profession))},variant:A.profession===c?"contained":"text",color:"inherit"},$n.bindHover(T[$])),{children:i(pt,{name:A.profession,disableLink:!0,disableText:!0,className:s.icon})})),i(Wc,Ne(ue({},$n.bindMenu(T[$])),{anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},PaperProps:{style:{maxHeight:"calc(100vh - 340px)"}},children:(E=(D=e.find(S=>S.class===A.profession))==null?void 0:D.builds)==null?void 0:E.map(S=>i(et,{onClick:P=>k(T[$],S,S.specialization,A.profession),children:i(pt,{name:S.specialization,disableLink:!0,text:m("buildTemplateName",{context:S.name})})},S.name))}))]},A.profession)})}),(d||p)&&y(J,{flexGrow:1,children:[y(j,{children:[i(X,{children:"Selected"}),":"," "]}),p?i(pt,{name:d,text:m("buildTemplateName",{context:p}),disableLink:!0}):i(pt,{name:d,disableLink:!0})]}),x()]});return i(bg,{position:"sticky",sx:ue({boxShadow:4},c===""?{marginBottom:0}:{marginBottom:2}),color:"inherit",elevation:0,enableColorOnDark:!0,children:v?w():R()})};var fy=Y.memo(py),Vi={},my=qe.exports;Object.defineProperty(Vi,"__esModule",{value:!0});var Uc=Vi.default=void 0,hy=my(Ge),gy=Ke,by=(0,hy.default)((0,gy.jsx)("path",{d:"M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 16h-2v-2h2v2zm2.07-7.75-.9.92C13.45 11.9 13 12.5 13 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"}),"LiveHelp");Uc=Vi.default=by;const An=({first:e,title:n,helpText:t,extraInfo:r,content:o})=>y(he,{item:!0,container:!0,spacing:2,mb:2,sx:{borderColor:"primary.main"},children:[!e&&i(he,{item:!0,xs:12,children:i(Bi,{})}),y(he,{item:!0,xs:12,sm:3,children:[i(({children:s})=>y(ge,{children:[i(j,{variant:"h5",children:n})," ",s&&i(Bn,{sx:{mt:.5,mb:1},elevation:0,children:y(J,{p:1,children:[i("div",{children:i(Uc,{})}),i(j,{variant:"caption",paragraph:!0,sx:{mb:0},children:s})]})})]}),{children:t}),r]}),i(he,{item:!0,xs:12,sm:9,children:o})]}),vt=({className:e,placeholder:n,label:t,endLabel:r,handleAmountChange:o,value:a="",disabled:s=!1,maxWidth:l,useAutoComplete:c=!1,autoCompleteProps:u,parseFn:d=Ul})=>{const{error:p}=d(a);return c?i(yo,ue({className:e,freeSolo:!0,disableClearable:!0,renderInput:m=>i(_n,Ne(ue({},m),{error:p,label:t,variant:"standard",InputProps:Ne(ue({},m.InputProps),{endAdornment:i(io,{disablePointerEvents:!0,position:"end",disableTypography:!0,children:i(j,{sx:{fontSize:"0.9rem",color:"#b1b1b5"},children:r})})}),style:l?{maxWidth:l}:null})),value:a,onInputChange:o},u)):i(_n,{className:e,error:p,value:a,placeholder:String(n),label:t,variant:"standard",size:"small",sx:{height:26},InputProps:{endAdornment:i(io,{disablePointerEvents:!0,position:"end",disableTypography:!0,children:i(j,{sx:{fontSize:"0.9rem",color:"#b1b1b5"},children:r})}),inputProps:{style:l?{maxWidth:l}:null}},onChange:o,disabled:s})},Ws=Y.memo(Sr),qc={"0.000":"Golem","0.133":"Adina","0.184":"Deimos","0.207":"KC","0.249":"Dhuum","0.295":"Samarog","0.312":"Qadim","0.318":"Matthias","0.322":"Xera","0.326":"Sabetha","0.342":"Sloth","0.361":"Qadim 2","0.369":"Gorseval","0.392":"MO","0.457":"Sabir","0.481":"VG","0.565":"Cairn","0.714":"SH","0.769":"Nikare","0.826":"Kenut"},vy=Object.keys(qc),xy=[{value:0,label:"Golem"},{value:.318,label:"Matthias"},{value:.4,label:""},{value:.565,label:"Cairn"},{value:.714,label:"SH"},{value:.8,label:"Largos"}],yy=()=>{const e=Ee(),{t:n}=Se(),t=q(Wd),r=q(Vd),o=Ia(t).value,a=Ia(r).value;return y(ge,{children:[y(J,{display:"flex",flexWrap:"wrap",children:[i(J,{sx:{width:195},children:i(vt,{label:y(X,{children:[i(Ws,{name:"Torment",disableText:!0})," Movement Uptime"]}),endLabel:"%",handleAmountChange:(s,l)=>e(La(l)),value:r,maxWidth:180,useAutoComplete:!0,autoCompleteProps:{options:[]}})}),i(J,{mx:3,mb:4,flexGrow:1,alignSelf:"center",sx:{minWidth:200,md:{marginLeft:2}},children:i(Xn,{value:a,step:1,marks:[...Array(11).keys()].map(s=>({value:s*10,label:s*10})),min:0,max:100,onChange:(s,l)=>e(La(String(l))),valueLabelDisplay:"auto",valueLabelFormat:s=>`${s}%`})})]}),y(J,{display:"flex",flexWrap:"wrap",children:[i(J,{sx:{width:195},children:i(vt,{label:y(X,{children:[i(Ws,{name:"Confusion",disableText:!0})," Attack Rate"]}),endLabel:n("/s"),handleAmountChange:(s,l)=>e(Ea(l)),value:t,maxWidth:180,useAutoComplete:!0,autoCompleteProps:{options:vy,renderOption:(s,l)=>i("li",Ne(ue({},s),{children:`${l}: ${qc[l]}`}))}})}),i(J,{mx:3,mb:4,flexGrow:1,alignSelf:"center",sx:{minWidth:200,md:{marginLeft:2}},children:i(Xn,{value:o,step:.01,min:0,max:.83,marks:xy,onChange:(s,l)=>e(Ea(String(l))),valueLabelDisplay:"auto"})})]})]})},wy=()=>{const{t:e}=Se();return i(An,{title:e("Target settings"),helpText:e("Relevant for condi optimizations; enter boss attack rate and movement uptime for approximating confusion/torment condition damage."),content:i(yy,{})})};var Cy=Y.memo(wy);const Sy=7,Jt=({className:e,data:n=[],handleClick:t,presetCategory:r,maxChips:o=Sy})=>{const{t:a}=Se(),s=q(ho),l=q(jl),c=n.filter(u=>!(u!=null&&u.hidden));return i(J,{className:e,sx:{marginTop:1},children:c.length>o?i(yo,{options:c,getOptionLabel:u=>u.name,renderInput:u=>i(_n,Ne(ue({},u),{label:a("Presets"),variant:"standard"})),renderOption:(u,d)=>i("li",Ne(ue({},u),{children:d.profession?i(pt,{disableLink:!0,name:d.profession,text:a("preset",{context:`${r}_${d.name}`})}):i(j,{children:a("preset",{context:`${r}_${d.name}`})})})),blurOnSelect:!0,disableClearable:!0,clearOnBlur:!1,onChange:(u,d)=>t(d)},`${l||s}-presets`):c.map(u=>i(ht,{id:u.name,label:u.profession?i(pt,{disableLink:!0,name:u.profession,text:a("preset",{context:`${r}_${u.name}`})}):a("preset",{context:`${r}_${u.name}`}),variant:"outlined",onClick:()=>t(u),sx:{margin:.5}},u.name))})},Tt=s=>{var l=s,{className:e,checked:n,value:t,label:r,onChange:o}=l,a=Ir(l,["className","checked","value","label","onChange"]);return i(qn,{className:e,control:i(Ac,ue({color:"primary",checked:n,onChange:o,value:t},a)),label:r})},ky=Je()(e=>({boon:{fontSize:18},note:{fontSize:"1rem"},tinyNote:{fontWeight:200}})),Py=()=>{const{classes:e}=ky(),n=Ee(),{t}=Se(),r=q(jd),o=q(Ud),a=c=>u=>{n(qd({key:c.id,value:u.target.checked}))},s=c=>u=>{n(Gd({key:c.id,value:u.target.value}))},l={Boon:ql,Trait:Zo,Skill:dr,CommonEffect:Gl,Condition:Sr};return i(he,{container:!0,spacing:4,children:Si.map(c=>i(he,{item:!0,xs:12,sm:6,md:4,children:y(mn,{component:"fieldset",className:e.formControl,children:[i(gr,{component:"legend",children:t("buffSection",{context:c.section})}),i(Oi,{children:c.items.map(u=>{const{type:d,text:p,id:m,gw2id:f,subText:b,amountData:v}=u,h=l[d],x=["Boon","Condition","CommonEffect"].includes(d)?ki(m):void 0,w=d==="Text"?y(ge,{children:[i(j,{className:e.note,children:t("buffText",{context:p})}),i(j,{variant:"caption",className:e.tinyNote,children:b})]}):i(h,{id:f,name:x,disableLink:!0,className:e.boon});return y(J,{justifyContent:"space-between",display:"flex",children:[i(J,{display:"flex",children:i(Tt,{value:m,checked:Boolean(r[m]),label:w,onChange:a(u)},m)}),v?i(J,{display:"flex",children:i(vt,{placeholder:v.default,endLabel:v.label,handleAmountChange:s(u),value:o[m],disabled:!r[m],maxWidth:32})}):null]},m)})})]})},c.section))})},Ty=({data:e})=>{const n=Ee(),{t}=Se(),r=Y.useCallback(o=>{if(!o)return;const a=JSON.parse(o.value);n(Yd(a))},[n]);return i(An,{title:t("Buffs & Boons"),extraInfo:i(Jt,{data:e.presetBuffs.list,handleClick:r,presetCategory:"buff"}),content:i(Py,{})})};var Vs=Y.memo(Ty),ji={},Ry=qe.exports;Object.defineProperty(ji,"__esModule",{value:!0});var Gc=ji.default=void 0,Ay=Ry(Ge),Dy=Ke,$y=(0,Ay.default)((0,Dy.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");Gc=ji.default=$y;var Ui={},Iy=qe.exports;Object.defineProperty(Ui,"__esModule",{value:!0});var Yc=Ui.default=void 0,Ly=Iy(Ge),Ey=Ke,My=(0,Ly.default)((0,Ey.jsx)("path",{d:"m18 7-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41 6 19l1.41-1.41L1.83 12 .41 13.41z"}),"DoneAll");Yc=Ui.default=My;var qi={},By=qe.exports;Object.defineProperty(qi,"__esModule",{value:!0});var Kc=qi.default=void 0,Oy=By(Ge),Ny=Ke,zy=(0,Oy.default)((0,Ny.jsx)("path",{d:"M12 20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2s-2 .9-2 2v12c0 1.1.9 2 2 2zm-6 0c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2s-2 .9-2 2v4c0 1.1.9 2 2 2zm10-9v7c0 1.1.9 2 2 2s2-.9 2-2v-7c0-1.1-.9-2-2-2s-2 .9-2 2z"}),"EqualizerRounded");Kc=qi.default=zy;var Gi={},Fy=qe.exports;Object.defineProperty(Gi,"__esModule",{value:!0});var Qc=Gi.default=void 0,_y=Fy(Ge),Hy=Ke,Wy=(0,_y.default)((0,Hy.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"}),"Error");Qc=Gi.default=Wy;var Yi={},Vy=qe.exports;Object.defineProperty(Yi,"__esModule",{value:!0});var Jc=Yi.default=void 0,jy=Vy(Ge),Uy=Ke,qy=(0,jy.default)((0,Uy.jsx)("path",{d:"M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5-4-4V4h8v3.5l-4 4z"}),"HourglassEmpty");Jc=Yi.default=qy;function Gy(e){const{value:n}=e;return y(J,{position:"relative",display:"inline-flex",children:[i(Bb,ue({variant:"determinate"},e)),i(J,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",children:i(j,{variant:"caption",color:"textSecondary",children:`${Math.round(n)}%`})})]})}const js=({className:e})=>{const n=q(Kd);return i(Gy,{variant:"determinate",value:n,className:e})};var Ki={},Yy=qe.exports;Object.defineProperty(Ki,"__esModule",{value:!0});var Qi=Ki.default=void 0,Ky=Yy(Ge),Qy=Ke,Jy=(0,Ky.default)((0,Qy.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");Qi=Ki.default=Jy;var Ji={},Xy=qe.exports;Object.defineProperty(Ji,"__esModule",{value:!0});var Xc=Ji.default=void 0,Zy=Xy(Ge),e2=Ke,n2=(0,Zy.default)((0,e2.jsx)("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}),"Settings");Xc=Ji.default=n2;function t2({children:e,maxWidth:n="unset"}){const t=Y.useRef(),[r,o]=Y.useState(!1),a=()=>{o(l=>!l)},s=l=>{t.current&&t.current.contains(l.target)||o(!1)};return y(ge,{children:[i(Hn,{"aria-label":"settings",size:"medium",onClick:a,ref:t,children:i(Xc,{fontSize:"inherit"})}),i(Mi,{style:{zIndex:99},open:r,anchorEl:t.current,onClose:s,placement:"bottom-end",transition:!0,role:void 0,disablePortal:!0,children:({TransitionProps:l})=>i(_l,Ne(ue({},l),{children:i(Bn,{sx:{padding:2,maxWidth:n},elevation:6,children:i(pc,{onClickAway:s,children:i("div",{children:e})})})}))})]})}const r2=Je()(e=>({comparisonLabel:{fontSize:"1rem"}}));function o2(){const{classes:e}=r2(),{t:n}=Se(),t=Ee(),r=q(Yl),o=q(Kl),a=q(Ql),s=q(Jl);return y(t2,{maxWidth:360,children:[i(j,{sx:{fontWeight:700},children:i(X,{children:"Result Display Settings:"})}),i(J,{sx:{mt:1.5},children:i(qn,{control:i(eo,{checked:r,onChange:l=>t(Qd(l.target.checked)),name:"checked",color:"primary"}),label:n("Compare by percentage"),classes:{label:e.comparisonLabel}})}),i(J,{sx:{mt:1.5},children:i(qn,{control:i(eo,{checked:o,onChange:l=>t(Jd(l.target.checked)),name:"checked",color:"primary"}),label:n("Increase table height"),classes:{label:e.comparisonLabel}})}),i(J,{children:i(yo,{multiple:!0,disableCloseOnSelect:!0,value:s,options:["Toughness","Boon Duration","Health","Critical Chance"],onChange:(l,c)=>t(Xd(c)),renderInput:l=>i(_n,Ne(ue({},l),{variant:"standard",label:n("Show Attributes"),margin:"dense"})),renderOption:(l,c,{selected:u})=>y("li",Ne(ue({},l),{children:[i(J,{sx:{width:28},children:u&&i(Qi,{sx:{fontSize:"1rem"}})}),i(kn,{name:c,disableLink:!0})]})),renderTags:(l,c)=>l.map((u,d)=>i(ht,Ne(ue({variant:"outlined",label:i(kn,{name:u,disableLink:!0,disableText:!0})},c({index:d})),{onDelete:null})))})}),i(J,{sx:{mt:2},children:y(mn,{children:[i(gr,{id:"filter-button-group",children:i(X,{children:"Filter results:"})}),i(ii,{"aria-labelledby":"filter-button-group",value:a,onChange:l=>t(Zd(l.target.value)),name:"checked",color:"primary",children:[["None",n("No Filtering")],["Combinations",n("All Combinations")],["Sigils",n("Sigils")],["Runes",n("Runes")],["Nourishment",n("Food")],["Enhancement",n("Utility")]].map(([l,c])=>i(qn,{value:l,control:i(Kr,{}),label:c,classes:{label:e.comparisonLabel}},l))}),i(Lc,{children:i(X,{children:"Displays only the top result for each rune, sigil, food, or utility option or each combination of all of the above (up to 100 results)."})})]})})]})}const i2=Je()(e=>({errorText:{color:"red"},button:{margin:e.spacing(1)},label:{height:40},icon:{fontSize:40},chipIcon:{marginBottom:"-6px !important"}})),a2=({profession:e})=>{const{classes:n}=i2(),t=Ee(),{t:r}=Se(),o=q(ep),a=q(np),s=q(vn("affixes")),l=q(vn("weaponType")),c=d=>{if(s.length<1){t(Eo(r("Select at least one affix in the priorities section!"))),t(Oa(Lo));return}if(l==="unset"){t(Eo(r("Select a weapon type in the priorities section!"))),t(Oa(Lo));return}console.log("calculate"),t(Eo("")),t({type:Fn.Start})};let u;switch(o){case Ba:u=i(Yc,{fontSize:"small",classes:{root:n.chipIcon}});break;case Ma:case er:u=i(Jc,{fontSize:"small",classes:{root:n.chipIcon}});break;case Lo:u=i(Qc,{fontSize:"small",classes:{root:n.chipIcon}});break;default:u=null}return i(ge,{children:y(J,{display:"flex",flexWrap:"wrap",children:[i(J,{children:y(Yn,{variant:"outlined",color:"primary",className:n.button,onClick:c,classes:{label:n.label},disabled:o===er||e==="",children:[o===er?i(js,{className:n.icon}):i(Kc,{className:n.icon}),i(j,{children:i(X,{children:"Calculate"})})]})}),i(J,{children:y(Yn,{variant:"outlined",color:"primary",className:n.button,onClick:d=>t({type:Fn.Stop}),disabled:o!==er,children:[i(Gc,{className:nt(n.icon)}),i(j,{style:{marginLeft:8},children:i(X,{children:"Stop"})})]})}),i(J,{flexGrow:1,children:o===tp?y(Yn,{variant:"outlined",color:"primary",className:n.button,onClick:d=>t({type:Fn.Resume}),children:[i(js,{className:n.icon}),i(j,{style:{marginLeft:8},children:i(X,{children:"Resume"})})]}):null}),i(J,{alignSelf:"center",display:"flex",m:1,maxWidth:300,children:i(j,{variant:"caption",className:n.errorText,children:a})}),y(J,{alignSelf:"center",children:[i(ht,{sx:{marginRight:1},label:y(ge,{children:[i(X,{children:"Status:"})," ",ki(o)," ",u]}),color:[Ba,Ma,er].includes(o)?"primary":"secondary"}),i(o2,{})]})]})})},Us=Y.memo(kn),qs=Y.memo(Sr),s2=Je()(e=>({textbox:{maxWidth:195},slider:{margin:e.spacing(2),minWidth:200,[e.breakpoints.up("sm")]:{marginLeft:e.spacing(5)}},percentSliderRail:{opacity:1}})),l2=[{name:"Power",min:0,max:6e3,step:10,color:"#b1b1b5"},{name:"Burning",min:0,max:60,step:.1},{name:"Bleeding",min:0,max:60,step:.1},{name:"Poisoned",min:0,max:60,step:.1},{name:"Torment",min:0,max:60,step:.1},{name:"Confusion",min:0,max:60,step:.1}],c2=()=>{const{classes:e}=s2(),n=Ee(),t=q(rp),{t:r}=Se(),o=q(op),a=l=>(c,u)=>{n(Na({index:l,value:Math.round(u*100)/100})),n(za({index:l,value:Math.round(u*100)/100}))},s=l=>c=>{const{value:u}=c.target;n(Na({index:l,value:u}));const d=ei(u).value;n(za({index:l,value:d}))};return l2.map((l,c)=>y(J,{display:"flex",flexWrap:"wrap",children:[i(J,{children:y(mn,{mb:1,className:e.textbox,variant:"standard",children:[i(Nn,{htmlFor:`input-with-icon-adornment-${c}`,children:l.name==="Power"?i(Us,{name:"Power",disableLink:!0,text:r("Power Coefficient")}):i(qs,{name:l.name,disableLink:!0,text:r("avgStacks",{context:l.name})})}),i(zn,{id:`input-with-icon-adornment-${c}`,value:o[l.name],endAdornment:i(io,{position:"end",children:l.name==="Power"?i(Us,{name:"Power",disableLink:!0,disableText:!0}):i(qs,{name:l.name,disableLink:!0,disableText:!0})}),error:ei(o[l.name]).error,onChange:s(l.name),autoComplete:"off"})]})}),i(J,{flexGrow:1,alignSelf:"center",mx:3,mb:4,sx:{minWidth:200,md:{marginLeft:2}},children:i(Xn,{value:t[l.name],step:l.step,marks:[...Array(7).keys()].map(u=>u*((l.max-l.min)/6)).map(u=>({value:u,label:`${u}`})),min:l.min,max:l.max,onChange:a(l.name),valueLabelDisplay:"auto"})})]},`distriNew_${l.name}`))},u2=({profession:e,data:n})=>{const t=Ee(),{t:r}=Se();let o;if(e){const{eliteSpecializations:s}=go.find(l=>l.profession===e);o=n.presetDistribution.list.filter(l=>l.name==="None"?!1:!l.profession||l.profession===e||s.includes(l.profession))}const a=Y.useCallback(s=>{!s||t(ip(JSON.parse(s.value)))},[t]);return i(An,{title:r("Skill Coefficients"),content:i(c2,{}),extraInfo:i(ge,{children:e!==""&&i(Jt,{data:o,handleClick:a,presetCategory:"distribution"})}),helpText:y(ge,{children:[i(X,{children:`This data represents your rotation. If we don't supply a template for a build, you can calculate the correct coefficients so that a tested build matches a golem log using the tool under "development" below, or calculate them manually.`}),i(J,{component:"span",sx:{mt:1,display:"block"}}),y(X,{children:["For more information,"," ",i(ao,{href:"https://github.com/discretize/discretize-gear-optimizer/tree/staging/docs/Coefficients.md",target:"_blank",rel:"noopener",children:"see the coefficients documentation on Github"})," ","or ask in Discord!"]})]})})};var Xi={},d2=qe.exports;Object.defineProperty(Xi,"__esModule",{value:!0});var Xt=Xi.default=void 0,p2=d2(Ge),f2=Ke,m2=(0,p2.default)((0,f2.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");Xt=Xi.default=m2;/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Zc(e){return typeof e=="undefined"||e===null}function h2(e){return typeof e=="object"&&e!==null}function g2(e){return Array.isArray(e)?e:Zc(e)?[]:[e]}function b2(e,n){var t,r,o,a;if(n)for(a=Object.keys(n),t=0,r=a.length;t<r;t+=1)o=a[t],e[o]=n[o];return e}function v2(e,n){var t="",r;for(r=0;r<n;r+=1)t+=e;return t}function x2(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var y2=Zc,w2=h2,C2=g2,S2=v2,k2=x2,P2=b2,nn={isNothing:y2,isObject:w2,toArray:C2,repeat:S2,isNegativeZero:k2,extend:P2};function eu(e,n){var t="",r=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(t+='in "'+e.mark.name+'" '),t+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!n&&e.mark.snippet&&(t+=`

`+e.mark.snippet),r+" "+t):r}function xr(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=eu(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}xr.prototype=Object.create(Error.prototype);xr.prototype.constructor=xr;xr.prototype.toString=function(n){return this.name+": "+eu(this,n)};var gn=xr;function Vo(e,n,t,r,o){var a="",s="",l=Math.floor(o/2)-1;return r-n>l&&(a=" ... ",n=r-l+a.length),t-r>l&&(s=" ...",t=r+l-s.length),{str:a+e.slice(n,t).replace(/\t/g,"\u2192")+s,pos:r-n+a.length}}function jo(e,n){return nn.repeat(" ",n-e.length)+e}function T2(e,n){if(n=Object.create(n||null),!e.buffer)return null;n.maxLength||(n.maxLength=79),typeof n.indent!="number"&&(n.indent=1),typeof n.linesBefore!="number"&&(n.linesBefore=3),typeof n.linesAfter!="number"&&(n.linesAfter=2);for(var t=/\r?\n|\r|\0/g,r=[0],o=[],a,s=-1;a=t.exec(e.buffer);)o.push(a.index),r.push(a.index+a[0].length),e.position<=a.index&&s<0&&(s=r.length-2);s<0&&(s=r.length-1);var l="",c,u,d=Math.min(e.line+n.linesAfter,o.length).toString().length,p=n.maxLength-(n.indent+d+3);for(c=1;c<=n.linesBefore&&!(s-c<0);c++)u=Vo(e.buffer,r[s-c],o[s-c],e.position-(r[s]-r[s-c]),p),l=nn.repeat(" ",n.indent)+jo((e.line-c+1).toString(),d)+" | "+u.str+`
`+l;for(u=Vo(e.buffer,r[s],o[s],e.position,p),l+=nn.repeat(" ",n.indent)+jo((e.line+1).toString(),d)+" | "+u.str+`
`,l+=nn.repeat("-",n.indent+d+3+u.pos)+`^
`,c=1;c<=n.linesAfter&&!(s+c>=o.length);c++)u=Vo(e.buffer,r[s+c],o[s+c],e.position-(r[s]-r[s+c]),p),l+=nn.repeat(" ",n.indent)+jo((e.line+c+1).toString(),d)+" | "+u.str+`
`;return l.replace(/\n$/,"")}var R2=T2,A2=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],D2=["scalar","sequence","mapping"];function $2(e){var n={};return e!==null&&Object.keys(e).forEach(function(t){e[t].forEach(function(r){n[String(r)]=t})}),n}function I2(e,n){if(n=n||{},Object.keys(n).forEach(function(t){if(A2.indexOf(t)===-1)throw new gn('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.options=n,this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(t){return t},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=$2(n.styleAliases||null),D2.indexOf(this.kind)===-1)throw new gn('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var pn=I2;function Gs(e,n){var t=[];return e[n].forEach(function(r){var o=t.length;t.forEach(function(a,s){a.tag===r.tag&&a.kind===r.kind&&a.multi===r.multi&&(o=s)}),t[o]=r}),t}function L2(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,t;function r(o){o.multi?(e.multi[o.kind].push(o),e.multi.fallback.push(o)):e[o.kind][o.tag]=e.fallback[o.tag]=o}for(n=0,t=arguments.length;n<t;n+=1)arguments[n].forEach(r);return e}function ci(e){return this.extend(e)}ci.prototype.extend=function(n){var t=[],r=[];if(n instanceof pn)r.push(n);else if(Array.isArray(n))r=r.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(t=t.concat(n.implicit)),n.explicit&&(r=r.concat(n.explicit));else throw new gn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");t.forEach(function(a){if(!(a instanceof pn))throw new gn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(a.loadKind&&a.loadKind!=="scalar")throw new gn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(a.multi)throw new gn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),r.forEach(function(a){if(!(a instanceof pn))throw new gn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var o=Object.create(ci.prototype);return o.implicit=(this.implicit||[]).concat(t),o.explicit=(this.explicit||[]).concat(r),o.compiledImplicit=Gs(o,"implicit"),o.compiledExplicit=Gs(o,"explicit"),o.compiledTypeMap=L2(o.compiledImplicit,o.compiledExplicit),o};var nu=ci,tu=new pn("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),ru=new pn("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),ou=new pn("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),iu=new nu({explicit:[tu,ru,ou]});function E2(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function M2(){return null}function B2(e){return e===null}var au=new pn("tag:yaml.org,2002:null",{kind:"scalar",resolve:E2,construct:M2,predicate:B2,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function O2(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function N2(e){return e==="true"||e==="True"||e==="TRUE"}function z2(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var su=new pn("tag:yaml.org,2002:bool",{kind:"scalar",resolve:O2,construct:N2,predicate:z2,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function F2(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function _2(e){return 48<=e&&e<=55}function H2(e){return 48<=e&&e<=57}function W2(e){if(e===null)return!1;var n=e.length,t=0,r=!1,o;if(!n)return!1;if(o=e[t],(o==="-"||o==="+")&&(o=e[++t]),o==="0"){if(t+1===n)return!0;if(o=e[++t],o==="b"){for(t++;t<n;t++)if(o=e[t],o!=="_"){if(o!=="0"&&o!=="1")return!1;r=!0}return r&&o!=="_"}if(o==="x"){for(t++;t<n;t++)if(o=e[t],o!=="_"){if(!F2(e.charCodeAt(t)))return!1;r=!0}return r&&o!=="_"}if(o==="o"){for(t++;t<n;t++)if(o=e[t],o!=="_"){if(!_2(e.charCodeAt(t)))return!1;r=!0}return r&&o!=="_"}}if(o==="_")return!1;for(;t<n;t++)if(o=e[t],o!=="_"){if(!H2(e.charCodeAt(t)))return!1;r=!0}return!(!r||o==="_")}function V2(e){var n=e,t=1,r;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),r=n[0],(r==="-"||r==="+")&&(r==="-"&&(t=-1),n=n.slice(1),r=n[0]),n==="0")return 0;if(r==="0"){if(n[1]==="b")return t*parseInt(n.slice(2),2);if(n[1]==="x")return t*parseInt(n.slice(2),16);if(n[1]==="o")return t*parseInt(n.slice(2),8)}return t*parseInt(n,10)}function j2(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!nn.isNegativeZero(e)}var lu=new pn("tag:yaml.org,2002:int",{kind:"scalar",resolve:W2,construct:V2,predicate:j2,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),U2=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function q2(e){return!(e===null||!U2.test(e)||e[e.length-1]==="_")}function G2(e){var n,t;return n=e.replace(/_/g,"").toLowerCase(),t=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?t===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:t*parseFloat(n,10)}var Y2=/^[-+]?[0-9]+e/;function K2(e,n){var t;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(nn.isNegativeZero(e))return"-0.0";return t=e.toString(10),Y2.test(t)?t.replace("e",".e"):t}function Q2(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||nn.isNegativeZero(e))}var cu=new pn("tag:yaml.org,2002:float",{kind:"scalar",resolve:q2,construct:G2,predicate:Q2,represent:K2,defaultStyle:"lowercase"}),uu=iu.extend({implicit:[au,su,lu,cu]}),du=uu,pu=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),fu=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function J2(e){return e===null?!1:pu.exec(e)!==null||fu.exec(e)!==null}function X2(e){var n,t,r,o,a,s,l,c=0,u=null,d,p,m;if(n=pu.exec(e),n===null&&(n=fu.exec(e)),n===null)throw new Error("Date resolve error");if(t=+n[1],r=+n[2]-1,o=+n[3],!n[4])return new Date(Date.UTC(t,r,o));if(a=+n[4],s=+n[5],l=+n[6],n[7]){for(c=n[7].slice(0,3);c.length<3;)c+="0";c=+c}return n[9]&&(d=+n[10],p=+(n[11]||0),u=(d*60+p)*6e4,n[9]==="-"&&(u=-u)),m=new Date(Date.UTC(t,r,o,a,s,l,c)),u&&m.setTime(m.getTime()-u),m}function Z2(e){return e.toISOString()}var mu=new pn("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:J2,construct:X2,instanceOf:Date,represent:Z2});function ew(e){return e==="<<"||e===null}var hu=new pn("tag:yaml.org,2002:merge",{kind:"scalar",resolve:ew}),Zi=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function nw(e){if(e===null)return!1;var n,t,r=0,o=e.length,a=Zi;for(t=0;t<o;t++)if(n=a.indexOf(e.charAt(t)),!(n>64)){if(n<0)return!1;r+=6}return r%8===0}function tw(e){var n,t,r=e.replace(/[\r\n=]/g,""),o=r.length,a=Zi,s=0,l=[];for(n=0;n<o;n++)n%4===0&&n&&(l.push(s>>16&255),l.push(s>>8&255),l.push(s&255)),s=s<<6|a.indexOf(r.charAt(n));return t=o%4*6,t===0?(l.push(s>>16&255),l.push(s>>8&255),l.push(s&255)):t===18?(l.push(s>>10&255),l.push(s>>2&255)):t===12&&l.push(s>>4&255),new Uint8Array(l)}function rw(e){var n="",t=0,r,o,a=e.length,s=Zi;for(r=0;r<a;r++)r%3===0&&r&&(n+=s[t>>18&63],n+=s[t>>12&63],n+=s[t>>6&63],n+=s[t&63]),t=(t<<8)+e[r];return o=a%3,o===0?(n+=s[t>>18&63],n+=s[t>>12&63],n+=s[t>>6&63],n+=s[t&63]):o===2?(n+=s[t>>10&63],n+=s[t>>4&63],n+=s[t<<2&63],n+=s[64]):o===1&&(n+=s[t>>2&63],n+=s[t<<4&63],n+=s[64],n+=s[64]),n}function ow(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var gu=new pn("tag:yaml.org,2002:binary",{kind:"scalar",resolve:nw,construct:tw,predicate:ow,represent:rw}),iw=Object.prototype.hasOwnProperty,aw=Object.prototype.toString;function sw(e){if(e===null)return!0;var n=[],t,r,o,a,s,l=e;for(t=0,r=l.length;t<r;t+=1){if(o=l[t],s=!1,aw.call(o)!=="[object Object]")return!1;for(a in o)if(iw.call(o,a))if(!s)s=!0;else return!1;if(!s)return!1;if(n.indexOf(a)===-1)n.push(a);else return!1}return!0}function lw(e){return e!==null?e:[]}var bu=new pn("tag:yaml.org,2002:omap",{kind:"sequence",resolve:sw,construct:lw}),cw=Object.prototype.toString;function uw(e){if(e===null)return!0;var n,t,r,o,a,s=e;for(a=new Array(s.length),n=0,t=s.length;n<t;n+=1){if(r=s[n],cw.call(r)!=="[object Object]"||(o=Object.keys(r),o.length!==1))return!1;a[n]=[o[0],r[o[0]]]}return!0}function dw(e){if(e===null)return[];var n,t,r,o,a,s=e;for(a=new Array(s.length),n=0,t=s.length;n<t;n+=1)r=s[n],o=Object.keys(r),a[n]=[o[0],r[o[0]]];return a}var vu=new pn("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:uw,construct:dw}),pw=Object.prototype.hasOwnProperty;function fw(e){if(e===null)return!0;var n,t=e;for(n in t)if(pw.call(t,n)&&t[n]!==null)return!1;return!0}function mw(e){return e!==null?e:{}}var xu=new pn("tag:yaml.org,2002:set",{kind:"mapping",resolve:fw,construct:mw}),ea=du.extend({implicit:[mu,hu],explicit:[gu,bu,vu,xu]}),xt=Object.prototype.hasOwnProperty,so=1,yu=2,wu=3,lo=4,Uo=1,hw=2,Ys=3,gw=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,bw=/[\x85\u2028\u2029]/,vw=/[,\[\]\{\}]/,Cu=/^(?:!|!!|![a-z\-]+!)$/i,Su=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function Ks(e){return Object.prototype.toString.call(e)}function Kn(e){return e===10||e===13}function Rt(e){return e===9||e===32}function yn(e){return e===9||e===32||e===10||e===13}function zt(e){return e===44||e===91||e===93||e===123||e===125}function xw(e){var n;return 48<=e&&e<=57?e-48:(n=e|32,97<=n&&n<=102?n-97+10:-1)}function yw(e){return e===120?2:e===117?4:e===85?8:0}function ww(e){return 48<=e&&e<=57?e-48:-1}function Qs(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"\x85":e===95?"\xA0":e===76?"\u2028":e===80?"\u2029":""}function Cw(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}var ku=new Array(256),Pu=new Array(256);for(var It=0;It<256;It++)ku[It]=Qs(It)?1:0,Pu[It]=Qs(It);function Sw(e,n){this.input=e,this.filename=n.filename||null,this.schema=n.schema||ea,this.onWarning=n.onWarning||null,this.legacy=n.legacy||!1,this.json=n.json||!1,this.listener=n.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function Tu(e,n){var t={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return t.snippet=R2(t),new gn(n,t)}function ie(e,n){throw Tu(e,n)}function co(e,n){e.onWarning&&e.onWarning.call(null,Tu(e,n))}var Js={YAML:function(n,t,r){var o,a,s;n.version!==null&&ie(n,"duplication of %YAML directive"),r.length!==1&&ie(n,"YAML directive accepts exactly one argument"),o=/^([0-9]+)\.([0-9]+)$/.exec(r[0]),o===null&&ie(n,"ill-formed argument of the YAML directive"),a=parseInt(o[1],10),s=parseInt(o[2],10),a!==1&&ie(n,"unacceptable YAML version of the document"),n.version=r[0],n.checkLineBreaks=s<2,s!==1&&s!==2&&co(n,"unsupported YAML version of the document")},TAG:function(n,t,r){var o,a;r.length!==2&&ie(n,"TAG directive accepts exactly two arguments"),o=r[0],a=r[1],Cu.test(o)||ie(n,"ill-formed tag handle (first argument) of the TAG directive"),xt.call(n.tagMap,o)&&ie(n,'there is a previously declared suffix for "'+o+'" tag handle'),Su.test(a)||ie(n,"ill-formed tag prefix (second argument) of the TAG directive");try{a=decodeURIComponent(a)}catch{ie(n,"tag prefix is malformed: "+a)}n.tagMap[o]=a}};function mt(e,n,t,r){var o,a,s,l;if(n<t){if(l=e.input.slice(n,t),r)for(o=0,a=l.length;o<a;o+=1)s=l.charCodeAt(o),s===9||32<=s&&s<=1114111||ie(e,"expected valid JSON character");else gw.test(l)&&ie(e,"the stream contains non-printable characters");e.result+=l}}function Xs(e,n,t,r){var o,a,s,l;for(nn.isObject(t)||ie(e,"cannot merge mappings; the provided source object is unacceptable"),o=Object.keys(t),s=0,l=o.length;s<l;s+=1)a=o[s],xt.call(n,a)||(n[a]=t[a],r[a]=!0)}function Ft(e,n,t,r,o,a,s,l,c){var u,d;if(Array.isArray(o))for(o=Array.prototype.slice.call(o),u=0,d=o.length;u<d;u+=1)Array.isArray(o[u])&&ie(e,"nested arrays are not supported inside keys"),typeof o=="object"&&Ks(o[u])==="[object Object]"&&(o[u]="[object Object]");if(typeof o=="object"&&Ks(o)==="[object Object]"&&(o="[object Object]"),o=String(o),n===null&&(n={}),r==="tag:yaml.org,2002:merge")if(Array.isArray(a))for(u=0,d=a.length;u<d;u+=1)Xs(e,n,a[u],t);else Xs(e,n,a,t);else!e.json&&!xt.call(t,o)&&xt.call(n,o)&&(e.line=s||e.line,e.lineStart=l||e.lineStart,e.position=c||e.position,ie(e,"duplicated mapping key")),o==="__proto__"?Object.defineProperty(n,o,{configurable:!0,enumerable:!0,writable:!0,value:a}):n[o]=a,delete t[o];return n}function na(e){var n;n=e.input.charCodeAt(e.position),n===10?e.position++:n===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):ie(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function Xe(e,n,t){for(var r=0,o=e.input.charCodeAt(e.position);o!==0;){for(;Rt(o);)o===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),o=e.input.charCodeAt(++e.position);if(n&&o===35)do o=e.input.charCodeAt(++e.position);while(o!==10&&o!==13&&o!==0);if(Kn(o))for(na(e),o=e.input.charCodeAt(e.position),r++,e.lineIndent=0;o===32;)e.lineIndent++,o=e.input.charCodeAt(++e.position);else break}return t!==-1&&r!==0&&e.lineIndent<t&&co(e,"deficient indentation"),r}function So(e){var n=e.position,t;return t=e.input.charCodeAt(n),!!((t===45||t===46)&&t===e.input.charCodeAt(n+1)&&t===e.input.charCodeAt(n+2)&&(n+=3,t=e.input.charCodeAt(n),t===0||yn(t)))}function ta(e,n){n===1?e.result+=" ":n>1&&(e.result+=nn.repeat(`
`,n-1))}function kw(e,n,t){var r,o,a,s,l,c,u,d,p=e.kind,m=e.result,f;if(f=e.input.charCodeAt(e.position),yn(f)||zt(f)||f===35||f===38||f===42||f===33||f===124||f===62||f===39||f===34||f===37||f===64||f===96||(f===63||f===45)&&(o=e.input.charCodeAt(e.position+1),yn(o)||t&&zt(o)))return!1;for(e.kind="scalar",e.result="",a=s=e.position,l=!1;f!==0;){if(f===58){if(o=e.input.charCodeAt(e.position+1),yn(o)||t&&zt(o))break}else if(f===35){if(r=e.input.charCodeAt(e.position-1),yn(r))break}else{if(e.position===e.lineStart&&So(e)||t&&zt(f))break;if(Kn(f))if(c=e.line,u=e.lineStart,d=e.lineIndent,Xe(e,!1,-1),e.lineIndent>=n){l=!0,f=e.input.charCodeAt(e.position);continue}else{e.position=s,e.line=c,e.lineStart=u,e.lineIndent=d;break}}l&&(mt(e,a,s,!1),ta(e,e.line-c),a=s=e.position,l=!1),Rt(f)||(s=e.position+1),f=e.input.charCodeAt(++e.position)}return mt(e,a,s,!1),e.result?!0:(e.kind=p,e.result=m,!1)}function Pw(e,n){var t,r,o;if(t=e.input.charCodeAt(e.position),t!==39)return!1;for(e.kind="scalar",e.result="",e.position++,r=o=e.position;(t=e.input.charCodeAt(e.position))!==0;)if(t===39)if(mt(e,r,e.position,!0),t=e.input.charCodeAt(++e.position),t===39)r=e.position,e.position++,o=e.position;else return!0;else Kn(t)?(mt(e,r,o,!0),ta(e,Xe(e,!1,n)),r=o=e.position):e.position===e.lineStart&&So(e)?ie(e,"unexpected end of the document within a single quoted scalar"):(e.position++,o=e.position);ie(e,"unexpected end of the stream within a single quoted scalar")}function Tw(e,n){var t,r,o,a,s,l;if(l=e.input.charCodeAt(e.position),l!==34)return!1;for(e.kind="scalar",e.result="",e.position++,t=r=e.position;(l=e.input.charCodeAt(e.position))!==0;){if(l===34)return mt(e,t,e.position,!0),e.position++,!0;if(l===92){if(mt(e,t,e.position,!0),l=e.input.charCodeAt(++e.position),Kn(l))Xe(e,!1,n);else if(l<256&&ku[l])e.result+=Pu[l],e.position++;else if((s=yw(l))>0){for(o=s,a=0;o>0;o--)l=e.input.charCodeAt(++e.position),(s=xw(l))>=0?a=(a<<4)+s:ie(e,"expected hexadecimal character");e.result+=Cw(a),e.position++}else ie(e,"unknown escape sequence");t=r=e.position}else Kn(l)?(mt(e,t,r,!0),ta(e,Xe(e,!1,n)),t=r=e.position):e.position===e.lineStart&&So(e)?ie(e,"unexpected end of the document within a double quoted scalar"):(e.position++,r=e.position)}ie(e,"unexpected end of the stream within a double quoted scalar")}function Rw(e,n){var t=!0,r,o,a,s=e.tag,l,c=e.anchor,u,d,p,m,f,b=Object.create(null),v,h,x,w;if(w=e.input.charCodeAt(e.position),w===91)d=93,f=!1,l=[];else if(w===123)d=125,f=!0,l={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=l),w=e.input.charCodeAt(++e.position);w!==0;){if(Xe(e,!0,n),w=e.input.charCodeAt(e.position),w===d)return e.position++,e.tag=s,e.anchor=c,e.kind=f?"mapping":"sequence",e.result=l,!0;t?w===44&&ie(e,"expected the node content, but found ','"):ie(e,"missed comma between flow collection entries"),h=v=x=null,p=m=!1,w===63&&(u=e.input.charCodeAt(e.position+1),yn(u)&&(p=m=!0,e.position++,Xe(e,!0,n))),r=e.line,o=e.lineStart,a=e.position,Gt(e,n,so,!1,!0),h=e.tag,v=e.result,Xe(e,!0,n),w=e.input.charCodeAt(e.position),(m||e.line===r)&&w===58&&(p=!0,w=e.input.charCodeAt(++e.position),Xe(e,!0,n),Gt(e,n,so,!1,!0),x=e.result),f?Ft(e,l,b,h,v,x,r,o,a):p?l.push(Ft(e,null,b,h,v,x,r,o,a)):l.push(v),Xe(e,!0,n),w=e.input.charCodeAt(e.position),w===44?(t=!0,w=e.input.charCodeAt(++e.position)):t=!1}ie(e,"unexpected end of the stream within a flow collection")}function Aw(e,n){var t,r,o=Uo,a=!1,s=!1,l=n,c=0,u=!1,d,p;if(p=e.input.charCodeAt(e.position),p===124)r=!1;else if(p===62)r=!0;else return!1;for(e.kind="scalar",e.result="";p!==0;)if(p=e.input.charCodeAt(++e.position),p===43||p===45)Uo===o?o=p===43?Ys:hw:ie(e,"repeat of a chomping mode identifier");else if((d=ww(p))>=0)d===0?ie(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):s?ie(e,"repeat of an indentation width identifier"):(l=n+d-1,s=!0);else break;if(Rt(p)){do p=e.input.charCodeAt(++e.position);while(Rt(p));if(p===35)do p=e.input.charCodeAt(++e.position);while(!Kn(p)&&p!==0)}for(;p!==0;){for(na(e),e.lineIndent=0,p=e.input.charCodeAt(e.position);(!s||e.lineIndent<l)&&p===32;)e.lineIndent++,p=e.input.charCodeAt(++e.position);if(!s&&e.lineIndent>l&&(l=e.lineIndent),Kn(p)){c++;continue}if(e.lineIndent<l){o===Ys?e.result+=nn.repeat(`
`,a?1+c:c):o===Uo&&a&&(e.result+=`
`);break}for(r?Rt(p)?(u=!0,e.result+=nn.repeat(`
`,a?1+c:c)):u?(u=!1,e.result+=nn.repeat(`
`,c+1)):c===0?a&&(e.result+=" "):e.result+=nn.repeat(`
`,c):e.result+=nn.repeat(`
`,a?1+c:c),a=!0,s=!0,c=0,t=e.position;!Kn(p)&&p!==0;)p=e.input.charCodeAt(++e.position);mt(e,t,e.position,!1)}return!0}function Zs(e,n){var t,r=e.tag,o=e.anchor,a=[],s,l=!1,c;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=a),c=e.input.charCodeAt(e.position);c!==0&&(e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,ie(e,"tab characters must not be used in indentation")),!(c!==45||(s=e.input.charCodeAt(e.position+1),!yn(s))));){if(l=!0,e.position++,Xe(e,!0,-1)&&e.lineIndent<=n){a.push(null),c=e.input.charCodeAt(e.position);continue}if(t=e.line,Gt(e,n,wu,!1,!0),a.push(e.result),Xe(e,!0,-1),c=e.input.charCodeAt(e.position),(e.line===t||e.lineIndent>n)&&c!==0)ie(e,"bad indentation of a sequence entry");else if(e.lineIndent<n)break}return l?(e.tag=r,e.anchor=o,e.kind="sequence",e.result=a,!0):!1}function Dw(e,n,t){var r,o,a,s,l,c,u=e.tag,d=e.anchor,p={},m=Object.create(null),f=null,b=null,v=null,h=!1,x=!1,w;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=p),w=e.input.charCodeAt(e.position);w!==0;){if(!h&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,ie(e,"tab characters must not be used in indentation")),r=e.input.charCodeAt(e.position+1),a=e.line,(w===63||w===58)&&yn(r))w===63?(h&&(Ft(e,p,m,f,b,null,s,l,c),f=b=v=null),x=!0,h=!0,o=!0):h?(h=!1,o=!0):ie(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,w=r;else{if(s=e.line,l=e.lineStart,c=e.position,!Gt(e,t,yu,!1,!0))break;if(e.line===a){for(w=e.input.charCodeAt(e.position);Rt(w);)w=e.input.charCodeAt(++e.position);if(w===58)w=e.input.charCodeAt(++e.position),yn(w)||ie(e,"a whitespace character is expected after the key-value separator within a block mapping"),h&&(Ft(e,p,m,f,b,null,s,l,c),f=b=v=null),x=!0,h=!1,o=!1,f=e.tag,b=e.result;else if(x)ie(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=u,e.anchor=d,!0}else if(x)ie(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=u,e.anchor=d,!0}if((e.line===a||e.lineIndent>n)&&(h&&(s=e.line,l=e.lineStart,c=e.position),Gt(e,n,lo,!0,o)&&(h?b=e.result:v=e.result),h||(Ft(e,p,m,f,b,v,s,l,c),f=b=v=null),Xe(e,!0,-1),w=e.input.charCodeAt(e.position)),(e.line===a||e.lineIndent>n)&&w!==0)ie(e,"bad indentation of a mapping entry");else if(e.lineIndent<n)break}return h&&Ft(e,p,m,f,b,null,s,l,c),x&&(e.tag=u,e.anchor=d,e.kind="mapping",e.result=p),x}function $w(e){var n,t=!1,r=!1,o,a,s;if(s=e.input.charCodeAt(e.position),s!==33)return!1;if(e.tag!==null&&ie(e,"duplication of a tag property"),s=e.input.charCodeAt(++e.position),s===60?(t=!0,s=e.input.charCodeAt(++e.position)):s===33?(r=!0,o="!!",s=e.input.charCodeAt(++e.position)):o="!",n=e.position,t){do s=e.input.charCodeAt(++e.position);while(s!==0&&s!==62);e.position<e.length?(a=e.input.slice(n,e.position),s=e.input.charCodeAt(++e.position)):ie(e,"unexpected end of the stream within a verbatim tag")}else{for(;s!==0&&!yn(s);)s===33&&(r?ie(e,"tag suffix cannot contain exclamation marks"):(o=e.input.slice(n-1,e.position+1),Cu.test(o)||ie(e,"named tag handle cannot contain such characters"),r=!0,n=e.position+1)),s=e.input.charCodeAt(++e.position);a=e.input.slice(n,e.position),vw.test(a)&&ie(e,"tag suffix cannot contain flow indicator characters")}a&&!Su.test(a)&&ie(e,"tag name cannot contain such characters: "+a);try{a=decodeURIComponent(a)}catch{ie(e,"tag name is malformed: "+a)}return t?e.tag=a:xt.call(e.tagMap,o)?e.tag=e.tagMap[o]+a:o==="!"?e.tag="!"+a:o==="!!"?e.tag="tag:yaml.org,2002:"+a:ie(e,'undeclared tag handle "'+o+'"'),!0}function Iw(e){var n,t;if(t=e.input.charCodeAt(e.position),t!==38)return!1;for(e.anchor!==null&&ie(e,"duplication of an anchor property"),t=e.input.charCodeAt(++e.position),n=e.position;t!==0&&!yn(t)&&!zt(t);)t=e.input.charCodeAt(++e.position);return e.position===n&&ie(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(n,e.position),!0}function Lw(e){var n,t,r;if(r=e.input.charCodeAt(e.position),r!==42)return!1;for(r=e.input.charCodeAt(++e.position),n=e.position;r!==0&&!yn(r)&&!zt(r);)r=e.input.charCodeAt(++e.position);return e.position===n&&ie(e,"name of an alias node must contain at least one character"),t=e.input.slice(n,e.position),xt.call(e.anchorMap,t)||ie(e,'unidentified alias "'+t+'"'),e.result=e.anchorMap[t],Xe(e,!0,-1),!0}function Gt(e,n,t,r,o){var a,s,l,c=1,u=!1,d=!1,p,m,f,b,v,h;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,a=s=l=lo===t||wu===t,r&&Xe(e,!0,-1)&&(u=!0,e.lineIndent>n?c=1:e.lineIndent===n?c=0:e.lineIndent<n&&(c=-1)),c===1)for(;$w(e)||Iw(e);)Xe(e,!0,-1)?(u=!0,l=a,e.lineIndent>n?c=1:e.lineIndent===n?c=0:e.lineIndent<n&&(c=-1)):l=!1;if(l&&(l=u||o),(c===1||lo===t)&&(so===t||yu===t?v=n:v=n+1,h=e.position-e.lineStart,c===1?l&&(Zs(e,h)||Dw(e,h,v))||Rw(e,v)?d=!0:(s&&Aw(e,v)||Pw(e,v)||Tw(e,v)?d=!0:Lw(e)?(d=!0,(e.tag!==null||e.anchor!==null)&&ie(e,"alias node should not have any properties")):kw(e,v,so===t)&&(d=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):c===0&&(d=l&&Zs(e,h))),e.tag===null)e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);else if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&ie(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),p=0,m=e.implicitTypes.length;p<m;p+=1)if(b=e.implicitTypes[p],b.resolve(e.result)){e.result=b.construct(e.result),e.tag=b.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else if(e.tag!=="!"){if(xt.call(e.typeMap[e.kind||"fallback"],e.tag))b=e.typeMap[e.kind||"fallback"][e.tag];else for(b=null,f=e.typeMap.multi[e.kind||"fallback"],p=0,m=f.length;p<m;p+=1)if(e.tag.slice(0,f[p].tag.length)===f[p].tag){b=f[p];break}b||ie(e,"unknown tag !<"+e.tag+">"),e.result!==null&&b.kind!==e.kind&&ie(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+b.kind+'", not "'+e.kind+'"'),b.resolve(e.result,e.tag)?(e.result=b.construct(e.result,e.tag),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):ie(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||d}function Ew(e){var n=e.position,t,r,o,a=!1,s;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);(s=e.input.charCodeAt(e.position))!==0&&(Xe(e,!0,-1),s=e.input.charCodeAt(e.position),!(e.lineIndent>0||s!==37));){for(a=!0,s=e.input.charCodeAt(++e.position),t=e.position;s!==0&&!yn(s);)s=e.input.charCodeAt(++e.position);for(r=e.input.slice(t,e.position),o=[],r.length<1&&ie(e,"directive name must not be less than one character in length");s!==0;){for(;Rt(s);)s=e.input.charCodeAt(++e.position);if(s===35){do s=e.input.charCodeAt(++e.position);while(s!==0&&!Kn(s));break}if(Kn(s))break;for(t=e.position;s!==0&&!yn(s);)s=e.input.charCodeAt(++e.position);o.push(e.input.slice(t,e.position))}s!==0&&na(e),xt.call(Js,r)?Js[r](e,r,o):co(e,'unknown document directive "'+r+'"')}if(Xe(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,Xe(e,!0,-1)):a&&ie(e,"directives end mark is expected"),Gt(e,e.lineIndent-1,lo,!1,!0),Xe(e,!0,-1),e.checkLineBreaks&&bw.test(e.input.slice(n,e.position))&&co(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&So(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,Xe(e,!0,-1));return}if(e.position<e.length-1)ie(e,"end of the stream or a document separator is expected");else return}function Ru(e,n){e=String(e),n=n||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var t=new Sw(e,n),r=e.indexOf("\0");for(r!==-1&&(t.position=r,ie(t,"null byte is not allowed in input")),t.input+="\0";t.input.charCodeAt(t.position)===32;)t.lineIndent+=1,t.position+=1;for(;t.position<t.length-1;)Ew(t);return t.documents}function Mw(e,n,t){n!==null&&typeof n=="object"&&typeof t=="undefined"&&(t=n,n=null);var r=Ru(e,t);if(typeof n!="function")return r;for(var o=0,a=r.length;o<a;o+=1)n(r[o])}function Bw(e,n){var t=Ru(e,n);if(t.length!==0){if(t.length===1)return t[0];throw new gn("expected a single document in the stream, but found more")}}var Ow=Mw,Nw=Bw,Au={loadAll:Ow,load:Nw},Du=Object.prototype.toString,$u=Object.prototype.hasOwnProperty,ra=65279,zw=9,yr=10,Fw=13,_w=32,Hw=33,Ww=34,ui=35,Vw=37,jw=38,Uw=39,qw=42,Iu=44,Gw=45,uo=58,Yw=61,Kw=62,Qw=63,Jw=64,Lu=91,Eu=93,Xw=96,Mu=123,Zw=124,Bu=125,hn={};hn[0]="\\0";hn[7]="\\a";hn[8]="\\b";hn[9]="\\t";hn[10]="\\n";hn[11]="\\v";hn[12]="\\f";hn[13]="\\r";hn[27]="\\e";hn[34]='\\"';hn[92]="\\\\";hn[133]="\\N";hn[160]="\\_";hn[8232]="\\L";hn[8233]="\\P";var eC=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],nC=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function tC(e,n){var t,r,o,a,s,l,c;if(n===null)return{};for(t={},r=Object.keys(n),o=0,a=r.length;o<a;o+=1)s=r[o],l=String(n[s]),s.slice(0,2)==="!!"&&(s="tag:yaml.org,2002:"+s.slice(2)),c=e.compiledTypeMap.fallback[s],c&&$u.call(c.styleAliases,l)&&(l=c.styleAliases[l]),t[s]=l;return t}function rC(e){var n,t,r;if(n=e.toString(16).toUpperCase(),e<=255)t="x",r=2;else if(e<=65535)t="u",r=4;else if(e<=4294967295)t="U",r=8;else throw new gn("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+t+nn.repeat("0",r-n.length)+n}var oC=1,wr=2;function iC(e){this.schema=e.schema||ea,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=nn.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=tC(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType=e.quotingType==='"'?wr:oC,this.forceQuotes=e.forceQuotes||!1,this.replacer=typeof e.replacer=="function"?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function el(e,n){for(var t=nn.repeat(" ",n),r=0,o=-1,a="",s,l=e.length;r<l;)o=e.indexOf(`
`,r),o===-1?(s=e.slice(r),r=l):(s=e.slice(r,o+1),r=o+1),s.length&&s!==`
`&&(a+=t),a+=s;return a}function di(e,n){return`
`+nn.repeat(" ",e.indent*n)}function aC(e,n){var t,r,o;for(t=0,r=e.implicitTypes.length;t<r;t+=1)if(o=e.implicitTypes[t],o.resolve(n))return!0;return!1}function po(e){return e===_w||e===zw}function Cr(e){return 32<=e&&e<=126||161<=e&&e<=55295&&e!==8232&&e!==8233||57344<=e&&e<=65533&&e!==ra||65536<=e&&e<=1114111}function nl(e){return Cr(e)&&e!==ra&&e!==Fw&&e!==yr}function tl(e,n,t){var r=nl(e),o=r&&!po(e);return(t?r:r&&e!==Iu&&e!==Lu&&e!==Eu&&e!==Mu&&e!==Bu)&&e!==ui&&!(n===uo&&!o)||nl(n)&&!po(n)&&e===ui||n===uo&&o}function sC(e){return Cr(e)&&e!==ra&&!po(e)&&e!==Gw&&e!==Qw&&e!==uo&&e!==Iu&&e!==Lu&&e!==Eu&&e!==Mu&&e!==Bu&&e!==ui&&e!==jw&&e!==qw&&e!==Hw&&e!==Zw&&e!==Yw&&e!==Kw&&e!==Uw&&e!==Ww&&e!==Vw&&e!==Jw&&e!==Xw}function lC(e){return!po(e)&&e!==uo}function cr(e,n){var t=e.charCodeAt(n),r;return t>=55296&&t<=56319&&n+1<e.length&&(r=e.charCodeAt(n+1),r>=56320&&r<=57343)?(t-55296)*1024+r-56320+65536:t}function Ou(e){var n=/^\n* /;return n.test(e)}var Nu=1,pi=2,zu=3,Fu=4,Bt=5;function cC(e,n,t,r,o,a,s,l){var c,u=0,d=null,p=!1,m=!1,f=r!==-1,b=-1,v=sC(cr(e,0))&&lC(cr(e,e.length-1));if(n||s)for(c=0;c<e.length;u>=65536?c+=2:c++){if(u=cr(e,c),!Cr(u))return Bt;v=v&&tl(u,d,l),d=u}else{for(c=0;c<e.length;u>=65536?c+=2:c++){if(u=cr(e,c),u===yr)p=!0,f&&(m=m||c-b-1>r&&e[b+1]!==" ",b=c);else if(!Cr(u))return Bt;v=v&&tl(u,d,l),d=u}m=m||f&&c-b-1>r&&e[b+1]!==" "}return!p&&!m?v&&!s&&!o(e)?Nu:a===wr?Bt:pi:t>9&&Ou(e)?Bt:s?a===wr?Bt:pi:m?Fu:zu}function uC(e,n,t,r,o){e.dump=function(){if(n.length===0)return e.quotingType===wr?'""':"''";if(!e.noCompatMode&&(eC.indexOf(n)!==-1||nC.test(n)))return e.quotingType===wr?'"'+n+'"':"'"+n+"'";var a=e.indent*Math.max(1,t),s=e.lineWidth===-1?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-a),l=r||e.flowLevel>-1&&t>=e.flowLevel;function c(u){return aC(e,u)}switch(cC(n,l,e.indent,s,c,e.quotingType,e.forceQuotes&&!r,o)){case Nu:return n;case pi:return"'"+n.replace(/'/g,"''")+"'";case zu:return"|"+rl(n,e.indent)+ol(el(n,a));case Fu:return">"+rl(n,e.indent)+ol(el(dC(n,s),a));case Bt:return'"'+pC(n)+'"';default:throw new gn("impossible error: invalid scalar style")}}()}function rl(e,n){var t=Ou(e)?String(n):"",r=e[e.length-1]===`
`,o=r&&(e[e.length-2]===`
`||e===`
`),a=o?"+":r?"":"-";return t+a+`
`}function ol(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function dC(e,n){for(var t=/(\n+)([^\n]*)/g,r=function(){var u=e.indexOf(`
`);return u=u!==-1?u:e.length,t.lastIndex=u,il(e.slice(0,u),n)}(),o=e[0]===`
`||e[0]===" ",a,s;s=t.exec(e);){var l=s[1],c=s[2];a=c[0]===" ",r+=l+(!o&&!a&&c!==""?`
`:"")+il(c,n),o=a}return r}function il(e,n){if(e===""||e[0]===" ")return e;for(var t=/ [^ ]/g,r,o=0,a,s=0,l=0,c="";r=t.exec(e);)l=r.index,l-o>n&&(a=s>o?s:l,c+=`
`+e.slice(o,a),o=a+1),s=l;return c+=`
`,e.length-o>n&&s>o?c+=e.slice(o,s)+`
`+e.slice(s+1):c+=e.slice(o),c.slice(1)}function pC(e){for(var n="",t=0,r,o=0;o<e.length;t>=65536?o+=2:o++)t=cr(e,o),r=hn[t],!r&&Cr(t)?(n+=e[o],t>=65536&&(n+=e[o+1])):n+=r||rC(t);return n}function fC(e,n,t){var r="",o=e.tag,a,s,l;for(a=0,s=t.length;a<s;a+=1)l=t[a],e.replacer&&(l=e.replacer.call(t,String(a),l)),(ot(e,n,l,!1,!1)||typeof l=="undefined"&&ot(e,n,null,!1,!1))&&(r!==""&&(r+=","+(e.condenseFlow?"":" ")),r+=e.dump);e.tag=o,e.dump="["+r+"]"}function al(e,n,t,r){var o="",a=e.tag,s,l,c;for(s=0,l=t.length;s<l;s+=1)c=t[s],e.replacer&&(c=e.replacer.call(t,String(s),c)),(ot(e,n+1,c,!0,!0,!1,!0)||typeof c=="undefined"&&ot(e,n+1,null,!0,!0,!1,!0))&&((!r||o!=="")&&(o+=di(e,n)),e.dump&&yr===e.dump.charCodeAt(0)?o+="-":o+="- ",o+=e.dump);e.tag=a,e.dump=o||"[]"}function mC(e,n,t){var r="",o=e.tag,a=Object.keys(t),s,l,c,u,d;for(s=0,l=a.length;s<l;s+=1)d="",r!==""&&(d+=", "),e.condenseFlow&&(d+='"'),c=a[s],u=t[c],e.replacer&&(u=e.replacer.call(t,c,u)),ot(e,n,c,!1,!1)&&(e.dump.length>1024&&(d+="? "),d+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),ot(e,n,u,!1,!1)&&(d+=e.dump,r+=d));e.tag=o,e.dump="{"+r+"}"}function hC(e,n,t,r){var o="",a=e.tag,s=Object.keys(t),l,c,u,d,p,m;if(e.sortKeys===!0)s.sort();else if(typeof e.sortKeys=="function")s.sort(e.sortKeys);else if(e.sortKeys)throw new gn("sortKeys must be a boolean or a function");for(l=0,c=s.length;l<c;l+=1)m="",(!r||o!=="")&&(m+=di(e,n)),u=s[l],d=t[u],e.replacer&&(d=e.replacer.call(t,u,d)),ot(e,n+1,u,!0,!0,!0)&&(p=e.tag!==null&&e.tag!=="?"||e.dump&&e.dump.length>1024,p&&(e.dump&&yr===e.dump.charCodeAt(0)?m+="?":m+="? "),m+=e.dump,p&&(m+=di(e,n)),ot(e,n+1,d,!0,p)&&(e.dump&&yr===e.dump.charCodeAt(0)?m+=":":m+=": ",m+=e.dump,o+=m));e.tag=a,e.dump=o||"{}"}function sl(e,n,t){var r,o,a,s,l,c;for(o=t?e.explicitTypes:e.implicitTypes,a=0,s=o.length;a<s;a+=1)if(l=o[a],(l.instanceOf||l.predicate)&&(!l.instanceOf||typeof n=="object"&&n instanceof l.instanceOf)&&(!l.predicate||l.predicate(n))){if(t?l.multi&&l.representName?e.tag=l.representName(n):e.tag=l.tag:e.tag="?",l.represent){if(c=e.styleMap[l.tag]||l.defaultStyle,Du.call(l.represent)==="[object Function]")r=l.represent(n,c);else if($u.call(l.represent,c))r=l.represent[c](n,c);else throw new gn("!<"+l.tag+'> tag resolver accepts not "'+c+'" style');e.dump=r}return!0}return!1}function ot(e,n,t,r,o,a,s){e.tag=null,e.dump=t,sl(e,t,!1)||sl(e,t,!0);var l=Du.call(e.dump),c=r,u;r&&(r=e.flowLevel<0||e.flowLevel>n);var d=l==="[object Object]"||l==="[object Array]",p,m;if(d&&(p=e.duplicates.indexOf(t),m=p!==-1),(e.tag!==null&&e.tag!=="?"||m||e.indent!==2&&n>0)&&(o=!1),m&&e.usedDuplicates[p])e.dump="*ref_"+p;else{if(d&&m&&!e.usedDuplicates[p]&&(e.usedDuplicates[p]=!0),l==="[object Object]")r&&Object.keys(e.dump).length!==0?(hC(e,n,e.dump,o),m&&(e.dump="&ref_"+p+e.dump)):(mC(e,n,e.dump),m&&(e.dump="&ref_"+p+" "+e.dump));else if(l==="[object Array]")r&&e.dump.length!==0?(e.noArrayIndent&&!s&&n>0?al(e,n-1,e.dump,o):al(e,n,e.dump,o),m&&(e.dump="&ref_"+p+e.dump)):(fC(e,n,e.dump),m&&(e.dump="&ref_"+p+" "+e.dump));else if(l==="[object String]")e.tag!=="?"&&uC(e,e.dump,n,a,c);else{if(l==="[object Undefined]")return!1;if(e.skipInvalid)return!1;throw new gn("unacceptable kind of an object to dump "+l)}e.tag!==null&&e.tag!=="?"&&(u=encodeURI(e.tag[0]==="!"?e.tag.slice(1):e.tag).replace(/!/g,"%21"),e.tag[0]==="!"?u="!"+u:u.slice(0,18)==="tag:yaml.org,2002:"?u="!!"+u.slice(18):u="!<"+u+">",e.dump=u+" "+e.dump)}return!0}function gC(e,n){var t=[],r=[],o,a;for(fi(e,t,r),o=0,a=r.length;o<a;o+=1)n.duplicates.push(t[r[o]]);n.usedDuplicates=new Array(a)}function fi(e,n,t){var r,o,a;if(e!==null&&typeof e=="object")if(o=n.indexOf(e),o!==-1)t.indexOf(o)===-1&&t.push(o);else if(n.push(e),Array.isArray(e))for(o=0,a=e.length;o<a;o+=1)fi(e[o],n,t);else for(r=Object.keys(e),o=0,a=r.length;o<a;o+=1)fi(e[r[o]],n,t)}function bC(e,n){n=n||{};var t=new iC(n);t.noRefs||gC(e,t);var r=e;return t.replacer&&(r=t.replacer.call({"":r},"",r)),ot(t,0,r,!0,!0)?t.dump+`
`:""}var vC=bC,xC={dump:vC};function oa(e,n){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+n+" instead, which is now safe by default.")}}var yC=pn,wC=nu,CC=iu,SC=uu,kC=du,PC=ea,TC=Au.load,RC=Au.loadAll,AC=xC.dump,DC=gn,$C={binary:gu,float:cu,map:ou,null:au,pairs:vu,set:xu,timestamp:mu,bool:su,int:lu,merge:hu,omap:bu,seq:ru,str:tu},IC=oa("safeLoad","load"),LC=oa("safeLoadAll","loadAll"),EC=oa("safeDump","dump"),_u={Type:yC,Schema:wC,FAILSAFE_SCHEMA:CC,JSON_SCHEMA:SC,CORE_SCHEMA:kC,DEFAULT_SCHEMA:PC,load:TC,loadAll:RC,dump:AC,YAMLException:DC,types:$C,safeLoad:IC,safeLoadAll:LC,safeDump:EC};function MC(e){let n=[],t=!1;if(e)try{if(n=JSON.parse(e),typeof n!="object")throw new Error("invalid")}catch{try{if(n=_u.load(e),typeof n!="object")throw new Error("invalid")}catch{t=!0}}return t&&(n=[]),{data:Array.isArray(n)?n:[n],error:t}}const BC=()=>{const e=Ee(),{t:n}=Se(),t=q(ap),r=q(sp),o=a=>{const s=a.target.value;e(Fa({key:"textBox",value:s}));const{data:l,error:c}=MC(s);e(Fa({key:"extraModifiers",value:l})),e(up(c?n("Invalid Format."):""))};return y(ge,{children:[i(_n,{label:n("Extra Modifiers"),variant:"standard",sx:{width:"100%",marginBottom:1},multiline:!0,minRows:5,value:r,error:t!=="",helperText:t,onChange:o}),y(Yt,{children:[i(Qt,{expandIcon:i(Xt,{}),children:i(j,{children:i(X,{children:"Formatting examples"})})}),i(Kt,{children:y(he,{container:!0,children:[y(he,{item:!0,xs:6,children:[i(j,{children:"YAML"}),i("pre",{style:{overflow:"auto hidden"},children:lp})]}),y(he,{item:!0,xs:6,children:[i(j,{children:"JSON"}),i("pre",{style:{overflow:"auto hidden"},children:cp})]})]})})]})]})},OC=()=>{const{t:e}=Se();return i(An,{title:e("Extra Modifiers"),helpText:y(ge,{children:[i(X,{children:"Allows adding arbitrary extra modifiers. The textbox expects valid YAML or JSON formatting. Multiple modifiers can be entered as an array."}),i(J,{component:"span",sx:{mt:1,display:"block"}}),y(X,{children:["For more information,"," ",i(ao,{href:"https://github.com/discretize/discretize-gear-optimizer/tree/staging/docs/Contributing/Data%20Format",target:"_blank",rel:"noopener",children:"see the data format documentation on Github"})," ","or ask in Discord!"]})]}),content:i(BC,{})})};var NC=Y.memo(OC),ia={},zC=qe.exports;Object.defineProperty(ia,"__esModule",{value:!0});var Hu=ia.default=void 0,FC=zC(Ge),_C=Ke,HC=(0,FC.default)((0,_C.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");Hu=ia.default=HC;var aa={},WC=qe.exports;Object.defineProperty(aa,"__esModule",{value:!0});var Wu=aa.default=void 0,VC=WC(Ge),jC=Ke,UC=(0,VC.default)((0,jC.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");Wu=aa.default=UC;var sa={},qC=qe.exports;Object.defineProperty(sa,"__esModule",{value:!0});var la=sa.default=void 0,GC=qC(Ge),YC=Ke,KC=(0,GC.default)((0,YC.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");la=sa.default=KC;var ca={},QC=qe.exports;Object.defineProperty(ca,"__esModule",{value:!0});var Vu=ca.default=void 0,JC=QC(Ge),XC=Ke,ZC=(0,JC.default)((0,XC.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline");Vu=ca.default=ZC;var ua={},eS=qe.exports;Object.defineProperty(ua,"__esModule",{value:!0});var mi=ua.default=void 0,nS=eS(Ge),tS=Ke,rS=(0,nS.default)((0,tS.jsx)("path",{d:"M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"}),"SelectAll");mi=ua.default=rS;const oS=Je()(e=>({root:{fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeight,fontSize:e.typography.pxToRem(12),lineHeight:1,padding:`${e.spacing(.25)} ${e.spacing(.75)}`,borderRadius:e.shape.borderRadius,border:`1px solid ${e.palette.divider}`,color:e.palette.text.secondary,display:"inline-block",backgroundColor:e.palette.background.embossed,boxShadow:e.shadows[1]}}));function qo({className:e,children:n}){const{classes:t}=oS();return i("span",{className:nt(t.root,e),children:n})}const iS=Je()(e=>({root:{padding:e.spacing(4)},textfield:{minWidth:550,[e.breakpoints.down("sm")]:{minWidth:"unset"}},toggleAllLabel:{marginLeft:e.spacing(.5)}}));function aS(e,n){return e.reduce(function(t,r){return(t[r[n]]=t[r[n]]||[]).push(r),t},{})}function sS(e){const{type:n,modifierData:t,modifierDataById:r}=e,{classes:o}=iS(),{t:a}=Se(),s=Ee(),l=q(Pi)[n]||[],[c,u]=Y.useState(""),d=Y.useRef(),p=Y.useMemo(()=>aS(t.flatMap(({items:x})=>x.map(w=>w.id)).map(x=>ue({id:x},r[x])),"section"),[r,t]),m=Object.entries(p).map(([x,w])=>{const k=w.filter(({text:T,gw2id:R})=>T.toLowerCase().includes(c.toLowerCase())||`${R}`.includes(c));return[x,k]}),f=x=>{const w=[...l.filter(k=>k!==x.target.name||x.target.checked)];x.target.checked&&w.push(x.target.name),s(pr({type:n,ids:w}))},b=x=>{u(x.target.value)},v=()=>{const x=m.flatMap(w=>w[1]).map(({id:w})=>w);s(pr({type:n,ids:[...l,...x]}))},h=()=>{const x=m.flatMap(k=>k[1]).map(({id:k})=>k),w=l.filter(k=>!x.includes(k));s(pr({type:n,ids:w}))};return Y.useEffect(()=>(document.onkeydown=function(x){x.ctrlKey&&x.code==="KeyK"&&(d.current.focus(),x.preventDefault()),x.ctrlKey&&x.code==="KeyS"&&(v(),x.preventDefault()),x.ctrlKey&&x.code==="KeyD"&&(h(),x.preventDefault())},()=>{document.onkeydown=void 0})),y(av,{dividers:!0,className:o.root,children:[i(_n,{id:"outlined-basic",label:"Search",variant:"outlined",fullWidth:!0,autoFocus:!0,className:o.textfield,inputRef:d,value:c,onChange:b,InputProps:{endAdornment:i(io,{position:"end",children:i(qo,{children:a("Ctrl+k")})})}}),y(J,{display:"flex",children:[i(J,{flexGrow:1}),y(Yn,{sx:{textTransform:"unset"},startIcon:i(mi,{}),onClick:h,children:[a("Delete visible")," ",i(qo,{className:o.toggleAllLabel,children:a("Ctrl+d")})]}),y(Yn,{sx:{textTransform:"unset"},startIcon:i(mi,{}),onClick:v,children:[a("Select visible")," ",i(qo,{className:o.toggleAllLabel,children:a("Ctrl+s")})]})]}),m.map(([x,w])=>w.length===0?null:i("div",{children:y(mn,{sx:{margin:1},component:"fieldset",variant:"standard",children:[i(gr,{component:"legend",children:a("extraSection",{context:x})}),i(Oi,{children:w.map(({id:k,gw2id:T,subText:R,text:A})=>i(qn,{control:i(Ac,{name:k,checked:l.includes(k),onChange:f}),label:y(ge,{children:[i(Ze,{id:T,disableLink:!0,text:A.replace("Superior ","")}),R&&i(j,{variant:"caption",sx:{marginLeft:1,fontWeight:200},children:a("extraSubText",{context:R})})]})},k))})]})}))]})}const lS=Je()(e=>({list:{width:"100%",backgroundColor:e.palette.background.embossed,marginBottom:e.spacing(2)},subText:{marginLeft:e.spacing(1),fontWeight:200}}));function ir(e){const{type:n,label:t,modifierDataById:r,text:o}=e,{classes:a}=lS(),s=Ee(),{t:l}=Se(),[c,u]=Y.useState(!1),d=()=>u(!0),p=()=>u(!1),m=Y.useRef(null);Y.useEffect(()=>{if(c){const{current:w}=m;w!==null&&w.focus()}},[c]);const f=q(Pi)[n]||[],b=q(dp),v=w=>k=>{s(fp({type:n,id:w,amount:k.target.value}))},h=w=>()=>{s(pr({type:n,ids:f.filter(k=>k!==w)}))},x=()=>{s(pr({type:n,ids:[]}))};return y(ge,{children:[y(J,{display:"flex",mb:1,children:[i(j,{variant:"h6",component:"span",flexGrow:1,children:t}),y(Yn,{variant:"contained",size:"small",startIcon:i(Hu,{}),onClick:d,children:[l("Add")," ",o]})]}),i(pp,{className:a.list,disablePadding:!0,children:f.length>0?f.map(w=>{var R,A,$,D,E;const{amountData:k}=Pn[w],T=((R=b[n][w])==null?void 0:R.amount)||"";return i(Ps,{secondaryAction:i(Hn,{edge:"end","aria-label":"delete",onClick:h(w),children:i(Wu,{})}),children:i(Ts,{primary:y(J,{display:"flex",children:[i(Ze,{id:(A=r[w])==null?void 0:A.gw2id,disableLink:!0,text:($=r[w])==null?void 0:$.text.replace("Superior ","")}),((D=r[w])==null?void 0:D.subText)&&i(j,{variant:"caption",className:a.subText,children:l("extraSubText",{context:(E=r[w])==null?void 0:E.subText})}),i(J,{flexGrow:1}),k&&i(vt,{placeholder:k.default,endLabel:l("amountLabel",{context:k.label}),handleAmountChange:v(w),value:T,maxWidth:38})]})})},w)}):i(Ps,{children:i(Ts,{children:l("None")})})}),y(qb,{open:c,onClose:p,scroll:"paper","aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",TransitionComponent:wi,maxWidth:"md",PaperProps:{elevation:4},children:[y(dv,{id:"scroll-dialog-title",display:"flex",children:[i(j,{flexGrow:1,component:"span",alignSelf:"center",children:t}),i(Hn,{edge:"start",color:"inherit",onClick:p,"aria-label":"close",children:i(la,{})})]}),i(sS,ue({},e)),y(Xb,{children:[i(Yn,{startIcon:i(Vu,{}),onClick:x,children:l("Unselect all")}),i(Yn,{onClick:p,children:l("Okay")})]})]})]})}const cS=()=>{const{t:e}=Se(),n=Ee(),r=(q(Pi).Nourishment||[]).some(a=>{var s;return(s=Pn[a])==null?void 0:s.hasLifesteal}),o=q(mp);return y(ge,{children:[i(ir,{type:"Sigil1",text:e("Sigil 1"),label:i(Ze,{id:24615,disableLink:!0,disableTooltip:!0,text:e("Sigil 1")}),modifierData:nr.sigils,modifierDataById:Pn}),i(ir,{type:"Sigil2",text:e("Sigil 2"),label:i(Ze,{id:24868,disableLink:!0,disableTooltip:!0,text:e("Sigil 2")}),modifierData:nr.sigils,modifierDataById:Pn}),i(ir,{type:"Runes",text:e("Runes"),label:i(Ze,{id:24836,disableLink:!0,disableTooltip:!0,text:e("Runes")}),modifierData:nr.runes,modifierDataById:Pn}),i(ir,{type:"Nourishment",text:e("Nourishment"),label:i(no,{disableLink:!0,name:"Nourishment",text:e("Nourishment")}),modifierData:nr.food,modifierDataById:Pn}),r?y(J,{sx:{mt:-1,mb:2,display:"flex",justifyContent:"flex-end",alignItems:"center"},children:[i(j,{variant:"caption",sx:{mr:1,mt:1},children:i(X,{children:"Lifesteal frequency:"})}),i(vt,{placeholder:_a.amountData.default,endLabel:_a.amountData.label,handleAmountChange:a=>n(hp(a.target.value)),value:o,maxWidth:38})]}):null,i(ir,{type:"Enhancement",text:e("Enhancement"),label:i(no,{disableLink:!0,name:"Enhancement",text:e("Enhancement")}),modifierData:nr.utility,modifierDataById:Pn})]})};var uS=Y.memo(cS);const dS=({profession:e,data:n})=>{const{t}=Se(),r=Ee();let o;if(e){const{eliteSpecializations:s}=go.find(l=>l.profession===e);o=n.presetExtras.list.filter(l=>!l.profession||l.profession===e||s.includes(l.profession))}const a=Y.useCallback(s=>{if(!s)return;const l=JSON.parse(s.value);r(gp(l))},[r]);return i(An,{title:t("Runes & Sigils & Food"),content:i(uS,{}),helpText:t("Select multiple options if desired and every combination will be tested."),extraInfo:i(ge,{children:e!==""&&i(Jt,{data:o,handleClick:a,presetCategory:"extra"})})})};var ll=Y.memo(dS);const pS=80793,hi=e=>e.filter(n=>!!n).map(n=>({label:n,category:Xl[n].category})),cl=["Power DPS","Condi DPS","Support","Hybrid","Open World","Custom"],fS=hi(Object.keys(Xl)).sort((e,n)=>{const t=cl.indexOf(e.category),r=cl.indexOf(n.category);return t===r?0:t>r?1:-1}),mS=Je()(e=>({text:{color:"#ddd !important"},textfield:{minWidth:180},option:{paddingLeft:e.spacing(5)},group:{fontWeight:300,marginLeft:e.spacing(2)}})),ju=({name:e,multiple:n,onChange:t,value:r})=>{const{classes:o}=mS(),{t:a}=Se();return i(yo,Ne(ue({},n&&{multiple:!0,disableCloseOnSelect:!0}),{options:fS,isOptionEqualToValue:(s,l)=>s.label===l.label,getOptionLabel:s=>a("affix",{context:s.label}),groupBy:s=>s.category,value:n?hi(r):hi([r])[0]||null,onChange:t,renderInput:s=>i(_n,Ne(ue({},s),{variant:"standard",label:e||a("Affixes"),placeholder:a("Select Affixes"),margin:"dense"})),renderGroup:({group:s,children:l})=>y(Y.Fragment,{children:[i(j,{variant:"caption",className:o.group,children:s}),l,i(Bi,{})]},s),renderOption:(u,c)=>{var d=u,{className:s}=d,l=Ir(d,["className"]);return y("li",Ne(ue({},l),{className:nt({[o.option]:n,[s]:!0}),children:[n&&i(J,{sx:{width:32},children:r.find(p=>p===c.label)&&i(Qi,{sx:{fontSize:"1rem"}})}),c.label==="Custom"?i(Ze,{id:pS,disableIcon:!0,disableLink:!0,text:a("affix",{context:c.label}),className:o.text}):i(bp,{stat:c.label,type:"Ring",disableLink:!0,disableIcon:!0,text:a("affix",{context:c.label}),className:o.text})]}))},renderTags:(s,l)=>s.map((c,u)=>i(ht,ue({variant:"outlined",label:a("affix",{context:c.label})},l({index:u})),c.label))}))},hS=()=>{const e=Ee(),n=q(vp),t=q(vn("weaponType")),{t:r}=Se();let o=Ha;t!==ni.dualWield&&(o=Ha.slice(0,13));const a=s=>(l,c)=>{e(xp({index:s,value:(c==null?void 0:c.label)||null}))};return i(he,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"flex-start",spacing:1,children:o.map((s,l)=>i(he,{item:!0,xs:6,sm:4,md:2,children:i(ju,{name:r("slotName",{context:s.name}),onChange:a(l),value:n[l]})},l))})},gS=()=>{const{t:e}=Se(),n=yp(),t=Ee(),r=()=>{const s=bo(n.getState()),l=s==null?void 0:s.gear;l&&t(wp(l))},o=()=>{t(Cp())},a={margin:4};return i(An,{title:e("Forced Slots"),content:i(hS,{}),helpText:i(X,{children:"Lock any gear slots to a specific type to work with what you already have or share gear between multiple builds."}),extraInfo:y(ge,{children:[i(ht,{style:a,variant:"outlined",onClick:o,label:e("Clear")}),i(ht,{style:a,variant:"outlined",onClick:r,label:e("Copy from selected character")})]})})};var ul=Y.memo(gS);const Ct=Y.memo(Ze),bS=Y.memo(Gl),vS=Y.memo(Sp),xS=[{value:0,label:""},{value:5,label:"Impedence 1"},{value:10,label:"Impedence 2"},{value:15,label:"Impedence 3"},{value:20,label:"Impedence 4"}],yS=[{value:0,label:""},{value:5,label:"Savant"},{value:10,label:"Prodigy"},{value:15,label:"Champion"},{value:25,label:"God"}],wS=[{value:150,label:"150"},{value:222,label:"222"},{value:343,label:"343"}],CS=Je()(e=>({bigStyle:{fontSize:17},sliderMark:{transform:"translateX(-100%)",[e.breakpoints.down("lg")]:{display:"none"}}})),SS=()=>{const e=Ee(),{classes:n}=CS(),t=Zl(q(ec)).value,r=nc(q(tc)).value,o=q(rc),a=q(oc),{enabled:s,impedence:l,attunement:c,singularity:u,tear:d,slots:p,freeWvW:m,ownedMatrix:f}=q(kp),{error:b,resultText:v,resultArray:h,cost:x,maxRequiredMatrix:w}=q(Pp),k=Y.useCallback((S,P)=>e(Tp(P)),[e]),T=Y.useCallback((S,P)=>e(ic(String(P))),[e]),R=Y.useCallback((S,P)=>e(Rp(String(P))),[e]),A=Y.useCallback((S,P)=>e(Ap(P)),[e]),$=Y.useCallback((S,P)=>e(Dp(P)),[e]),D=Y.useCallback((S,P)=>e($p(P)),[e]),E=Y.useCallback((S,P)=>e(Ip(P)),[e]);return y(Yt,{expanded:s,onChange:k,TransitionProps:{unmountOnExit:!0},children:[i(Qt,{expandIcon:i(Xt,{}),children:i(j,{children:i(X,{children:"Infusion Helper (WIP)"})})}),y(Kt,{style:{flexDirection:"column",padding:32},children:[i(j,{children:i(X,{children:"Account AR"})}),i(Xn,{value:l,step:null,min:0,max:20,marks:xS,valueLabelDisplay:"auto",onChange:A,classes:{markLabel:n.sliderMark},mb:3.5}),i(Xn,{value:c,step:null,min:0,max:25,marks:yS,valueLabelDisplay:"auto",onChange:$,classes:{markLabel:n.sliderMark},mb:3.5}),i(Tt,{value:u,checked:u,label:i(j,{variant:"body2",children:y(X,{children:["+5 AR from ",i(bS,{name:"Rigorous Certainty",disableLink:!0})]})}),onChange:S=>e(Lp(S.target.checked))}),i(J,{mb:2,children:i(Tt,{value:d,checked:d,label:i(j,{variant:"body2",children:y(X,{children:["+15 AR from ",i(Ct,{id:70596,disableLink:!0})," w/ mastery"]})}),onChange:S=>e(Ep(S.target.checked))})}),i(j,{id:"target-ar",children:i(X,{children:"Target AR"})}),i(Xn,{value:t,step:1,min:0,max:409,marks:wS,valueLabelDisplay:"on",onChange:T,"aria-labelledby":"target-ar"}),i(j,{id:"stat-infusion-slots",children:i(X,{children:"Stat Infusion Slots"})}),i(Xn,{value:r,mb:2,step:1,min:0,max:18,marks:!0,valueLabelDisplay:"auto",onChange:R,"aria-labelledby":"total-infusion-slots"}),i(j,{id:"total-infusion-slots",children:i(X,{children:"Total Infusion Slots"})}),i(Xn,{value:p,step:1,min:0,max:18,marks:!0,valueLabelDisplay:"auto",onChange:D,"aria-labelledby":"total-infusion-slots"}),i(J,{mb:2,children:i(Tt,{value:m,checked:m,label:i(j,{variant:"body2",children:i(X,{children:"Enable free WvW stat infusions"})}),onChange:S=>e(Mp(S.target.checked))})}),w?y(ge,{children:[i(j,{id:"owned-matrix",children:y(X,{children:["Use Owned ",i(Ct,{id:79230,disableLink:!0}),":"]})}),i(Xn,{value:f,mb:2,step:5,min:0,max:360,marks:[{value:w,label:String(w)}],valueLabelDisplay:"auto",onChange:E,"aria-labelledby":"owned-matrix"})]}):null,b?i(xo,{variant:"outlined",severity:"error",children:b}):y(ge,{children:[i(Ti,{text:"Result"}),i(j,{style:{marginBottom:16},children:y(X,{children:["Estimated Cost: ",i(vS,{value:x*1e4})]})}),y(j,{children:[i(X,{children:"Infusions: "}),v]}),i(j,{variant:"body2",children:h.map((S,P)=>{var _,H;const B=Bp[S],I=(_=B==null?void 0:B[o])==null?void 0:_.id,O=(H=B==null?void 0:B[a])==null?void 0:H.id;let z;return I&&O?z=y(ge,{children:[i(Ct,{id:I,disableLink:!0,disableText:!0}),i(Ct,{id:O,disableLink:!0,disableText:!0})," ",i(Ct,{id:O,disableLink:!0,disableIcon:!0,disableTooltip:!0,text:S})]}):I||O||(B==null?void 0:B.id)?z=i(Ct,{id:I||O||(B==null?void 0:B.id),disableLink:!0,className:n.bigStyle}):S.includes("Agony Infusion")?z=i(Ct,{id:49447,disableLink:!0,disableTooltip:!0,className:n.bigStyle}):z=S,y(Y.Fragment,{children:[z,i("br",{})]},P)})}),i(j,{variant:"caption",children:y(X,{children:["Note: Not cost optimized for ",">","1 weapon set."]})})]})]})]})};var kS=Y.memo(SS);const Uu={"150":"150","162":"162","203":"203 (DH Radiance)","222":"222","244":"244 (Soulbeast)","245":"245 (Weaver)","343":"343 (DH Virtues)"},PS=Object.keys(Uu),TS=Je()(e=>({formControl:{width:200,marginRight:e.spacing(3)},formControl2:{width:80}})),RS=()=>{const{classes:e}=TS(),n=Ee(),{t}=Se(),r=q(ec),o=q(Op),a=q(tc),s=q(rc),l=q(oc),c=q(Np),u=q(zp),d=Y.useCallback((f,b)=>n(ic(b)),[n]),p=(f,b,v)=>y(mn,{className:e.formControl,variant:"standard",children:[i(Nn,{id:`dropdown_${f}`,children:f}),y(dt,{labelId:`dropdown_${f}`,value:typeof v=="undefined"?"":v.toString(),input:i(zn,{name:f,id:f}),onChange:h=>n(Wa({key:b,value:h.target.value})),renderValue:h=>i(Ze,{id:to[h],disableLink:!0}),children:[y(et,{value:"",children:[t("None")," "]}),Object.entries(to).map(([h,x])=>i(et,{value:h,children:i(Ze,{id:x,disableLink:!0})},h))]})]}),m=(f,b,v,h)=>{const{error:x}=nc(v);return y(mn,{className:h,variant:"standard",children:[i(Nn,{htmlFor:`${b}_input-with-icon-adornment`,children:f}),i(zn,{id:`${b}_input-with-icon-adornment`,value:v,onChange:w=>n(Wa({key:b,value:w.target.value})),autoComplete:"off",error:x})]})};return y(he,{container:!0,spacing:4,children:[y(he,{container:!0,item:!0,spacing:2,alignItems:"center",justifyContent:"flex-start",children:[i(he,{item:!0,xs:12,sm:!0,children:i(Tt,{value:o,checked:o,label:y(ge,{children:[i(X,{children:"Include "}),i(Ze,{id:79722,disableLink:!0}),i(Un,{text:t("Adds 150% of your Agony Resistance to Precision, Toughness, and Concentration."),size:"small"})]}),onChange:f=>n(Fp(f.target.checked))})}),i(he,{item:!0,xs:12,sm:!0,children:i(vt,{className:e.formControl,useAutoComplete:!0,parseFn:Zl,handleAmountChange:d,label:t("Agony Resistance"),endLabel:i(kn,{name:"Agony Resistance",disableLink:!0,disableText:!0}),autoCompleteProps:{options:PS,renderOption:(f,b)=>i("li",Ne(ue({},f),{children:Uu[b]}))},value:r})})]}),y(he,{container:!0,item:!0,spacing:2,justifyContent:"flex-start",direction:"row",alignItems:"center",children:[i(he,{item:!0,xs:12,children:m("# Stat Infusions","maxInfusions",a)}),y(he,{item:!0,xs:12,children:[p(t("Infusion Type #1"),"primaryInfusion",s),m(t("Max #"),"primaryMaxInfusions",c,e.formControl2)]}),y(he,{item:!0,xs:12,children:[p(t("Infusion Type #2"),"secondaryInfusion",l),m(t("Max #"),"secondaryMaxInfusions",u,e.formControl2)]})]}),i(he,{item:!0,xs:12,children:i(kS,{})})]})},AS=({data:e})=>{const{t:n}=Se(),t=Ee(),r=e.presetInfusions.list,o=Y.useCallback(a=>{if(!a)return;const s=JSON.parse(a.value);t(_p(s))},[t]);return i(An,{title:n("Infusions + AR"),content:i(RS,{}),helpText:i(ge,{children:i(X,{children:"Select up to 2 types of stat infusions, and optionally limit the quantity allowed."})}),extraInfo:i(Jt,{data:r,handleClick:o,presetCategory:"infusion"})})};var dl=Y.memo(AS);const DS=`type: quadruple
bonuses:
  major:
    - Power
    - Ferocity
  minor:
    - Precision
    - Vitality`,$S=`{
  "type": "quadruple",
  "bonuses": {
    "major": ["Power", "Ferocity"],
    "minor": ["Precision", "Vitality"]
  }
}`;function IS(e){let n={},t=!1;if(e)try{if(n=JSON.parse(e),typeof n!="object")throw new Error("invalid")}catch{try{if(n=_u.load(e),typeof n!="object")throw new Error("invalid")}catch{t=!0}}return t&&(n={}),{data:n,error:t}}const LS=()=>{const e=Ee(),{t:n}=Se(),t=q(vn("customAffixError")),r=q(vn("customAffixTextBox")),o=a=>{const s=a.target.value;e(_t({key:"customAffixTextBox",value:s}));const{data:l,error:c}=IS(s);e(_t({key:"customAffix",value:l})),e(_t({key:"customAffixError",value:c?n("Invalid Format."):""}))};return y(ge,{children:[i(_n,{label:n('Custom Affix (valid types: "triple," "quadruple," "celestial")'),variant:"standard",sx:{width:"100%",marginBottom:1},multiline:!0,minRows:5,value:r,error:t!=="",helperText:t,onChange:o}),y(Yt,{children:[i(Qt,{expandIcon:i(Xt,{}),children:i(j,{children:i(X,{children:"Formatting examples"})})}),i(Kt,{children:y(he,{container:!0,children:[y(he,{item:!0,xs:6,children:[i(j,{children:"YAML"}),i("pre",{style:{overflow:"auto hidden"},children:DS})]}),y(he,{item:!0,xs:6,children:[i(j,{children:"JSON"}),i("pre",{style:{overflow:"auto hidden"},children:$S})]})]})})]})]})};var ES=Y.memo(LS);const MS=Je()(e=>({text:{color:"#ddd !important"},formControl:{margin:e.spacing(1),width:160},box:{display:"flex",alignItems:"center",flexWrap:"wrap"}})),BS=["Damage","Survivability","Healing"],OS=()=>{const{classes:e}=MS(),{t:n}=Se(),t=Ee(),r=q(vn("optimizeFor")),o=q(vn("weaponType")),a=q(vn("minBoonDuration")),s=q(vn("minHealingPower")),l=q(vn("minToughness")),c=q(vn("maxToughness")),u=q(vn("minHealth")),d=q(vn("minCritChance")),p=q(vn("affixes")),m=q(ho),f=p.includes("Custom"),b=wt(d).value,v=m!=="Warrior"&&b&&b>=99.9,h=x=>{t(_t({key:x.target.name,value:x.target.value}))};return y(he,{container:!0,spacing:2,children:[i(he,{item:!0,xs:12,sm:6,children:y(mn,{component:"fieldset",children:[y(gr,{component:"legend",children:[i(X,{children:"Optimize for:"})," ",i(Un,{text:n("What to optimize the results for. 'Damage' includes power and condition damage according to the distribution below."),size:"small"})]}),i(ii,{"aria-label":"optimizeFor",name:"optimizeFor",value:r,onChange:h,children:BS.map(x=>i(qn,{value:x,control:i(Kr,{color:"primary"}),label:n("priorityGoal",{context:x})},x))})]})}),i(he,{item:!0,xs:12,sm:6,children:y(mn,{component:"fieldset",children:[y(gr,{component:"legend",children:[i(X,{children:"Weapon type:"})," ",i(Un,{text:n("Select 'Dual wield' if you're using weapons in both hands or 'Two-handed' when using a two-handed weapon."),size:"small"})]}),y(ii,{"aria-label":"weaponType",name:"weaponType",value:o,onChange:h,children:[i(qn,{value:ni.dualWield,control:i(Kr,{color:"primary"}),label:n("Dual wielded")}),i(qn,{value:ni.twoHanded,control:i(Kr,{color:"primary"}),label:n("Two-handed")})]})]})}),i(he,{item:!0,xs:12,children:i(ju,{multiple:!0,onChange:(x,w)=>{t(_t({key:"affixes",value:w.map(k=>k.label)}))},value:p})}),y(he,{item:!0,xs:6,md:4,className:e.box,children:[y(mn,{className:e.formControl,variant:"standard",children:[y(Nn,{htmlFor:"minToughness-input-with-icon-adornment",children:[i(X,{children:"Min."})," ",i(kn,{name:"Toughness",disableLink:!0})]}),i(zn,{id:"minToughness-input-with-icon-adornment",value:l,onChange:h,name:"minToughness",error:wt(l).error,autoComplete:"off"})]}),i(Un,{text:n("Only show results that fulfill a minimum amount of Toughness.")})]}),y(he,{item:!0,xs:6,md:4,className:e.box,children:[y(mn,{className:e.formControl,variant:"standard",children:[y(Nn,{htmlFor:"maxToughness-input-with-icon-adornment",children:[i(X,{children:"Max."})," ",i(kn,{name:"Toughness",disableLink:!0})]}),i(zn,{id:"maxToughness-input-with-icon-adornment",value:c,onChange:h,name:"maxToughness",error:wt(c).error,autoComplete:"off"})]}),i(Un,{text:n("Only show results that fulfill a maximum amount of Toughness.")})]}),y(he,{item:!0,xs:6,md:4,className:e.box,children:[y(mn,{className:e.formControl,variant:"standard",children:[y(Nn,{htmlFor:"minBoon-input-with-icon-adornment",children:[i(X,{children:"Min."})," ",i(kn,{name:"Boon Duration",disableLink:!0})]}),i(zn,{id:"minBoon-input-with-icon-adornment",value:a,onChange:h,name:"minBoonDuration",error:wt(a).error,autoComplete:"off"})]}),i(Un,{text:n("Only show results that fulfill a certain amount of Boon Duration.")})]}),y(he,{item:!0,xs:6,md:4,className:e.box,children:[y(mn,{className:e.formControl,variant:"standard",children:[y(Nn,{htmlFor:"minHeal-input-with-icon-adornment",children:[i(X,{children:"Min."})," ",i(kn,{name:"Healing Power",disableLink:!0})]}),i(zn,{id:"minHeal-input-with-icon-adornment",value:s,onChange:h,name:"minHealingPower",error:wt(s).error,autoComplete:"off"})]}),i(Un,{text:n("Only show results that fulfill a certain amount of Healing Power.")})]}),y(he,{item:!0,xs:6,md:4,className:e.box,children:[y(mn,{className:e.formControl,variant:"standard",children:[y(Nn,{htmlFor:"minHealth-input-with-icon-adornment",children:[i(X,{children:"Min."})," ",i(kn,{name:"Health",disableLink:!0})]}),i(zn,{id:"minHealth-input-with-icon-adornment",value:u,onChange:h,name:"minHealth",error:wt(u).error,autoComplete:"off"})]}),i(Un,{text:n("Only show results that fulfill a certain amount of Health.")})]}),y(he,{item:!0,xs:6,md:4,className:e.box,children:[y(mn,{className:e.formControl,variant:"standard",children:[y(Nn,{htmlFor:"minCritChance-input-with-icon-adornment",children:[i(X,{children:"Min."})," ",i(kn,{name:"Critical Chance",disableLink:!0})]}),i(zn,{id:"minCritChance-input-with-icon-adornment",value:d,onChange:h,name:"minCritChance",error:wt(d).error,autoComplete:"off"})]}),i(Un,{text:n("Only show results that fulfill a certain amount of Critical Chance.")})]}),v?i(he,{item:!0,xs:12,children:i(xo,{elevation:6,variant:"filled",severity:"warning",children:i(X,{children:"Forcing 100% critical chance is not recommended in most cases. If capping critical chance is optimal, the optimizer will do so automatically, and if it is not, forcing it will lead to a worse result!"})})}):null,f?i(he,{item:!0,xs:12,children:i(ES,{})}):null]})},NS=({data:e})=>{const n=Ee(),{t}=Se(),r=Y.useCallback(o=>{if(!o)return;const a=JSON.parse(o.value);Object.keys(a).forEach(s=>n(_t({key:s,value:a[s]})))},[n]);return i(An,{title:t("Priorities"),content:i(OS,{}),extraInfo:i(Jt,{data:e.presetAffixes.list,handleClick:r,presetCategory:"affix",maxChips:1/0})})};var pl=Y.memo(NS);const Go=({data:e,title:n})=>y(ge,{children:[i(j,{variant:"h6",children:n}),i(gt,{padding:"none",children:i(bt,{children:Object.keys(e).map(t=>y(rt,{hover:!0,children:[i(ze,{children:i(kn,{name:t,style:{fontSize:"20px",color:"#AAAAAA"}})}),i(ze,{children:e[t]})]},t))})})]}),zS=Je()(e=>({root:{width:"100%"},gw2Item:{fontSize:"20px",color:"#AAAAAA"}})),FS=e=>Math.round(e*100)/100,_S=({data:e})=>{const{classes:n}=zS();return i(ge,{children:y(Yt,{children:[i(Qt,{expandIcon:i(Xt,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:i(j,{className:n.heading,children:i(X,{children:"Applied Modifers"})})}),i(Kt,{children:i(gt,{padding:"none",children:i(bt,{children:e.map(({type:t,id:r,modifiers:o,amount:a,amountData:s})=>{const{value:l}=Ul(a),c=s?`${FS(Hp(1,l,s))}x`:"";return y(rt,{hover:!0,children:[i(ze,{children:y(j,{className:n.gw2Item,children:[" ",r," "]})}),i(ze,{style:{paddingRight:8},children:i(j,{variant:"body2",children:c})}),i(ze,{children:JSON.stringify(o)})]},`${t} ${r}`)})})})})]})})},HS=({data:e})=>y(ge,{children:[i(j,{variant:"h6",children:i(X,{children:"Indicators"})}),i(gt,{padding:"none",children:i(bt,{children:Object.keys(e).map(n=>y(rt,{hover:!0,children:[i(ze,{children:y(j,{sx:{fontSize:"20px",color:"#AAAAAA"},children:[n," "]})}),i(ze,{children:e[n]})]},n))})})]}),WS=Je()(e=>({root:{width:"100%"},gw2Item:{fontSize:"20px",color:"#AAAAAA"}})),fl=({title:e,data:n})=>{const{classes:t}=WS();return y(ge,{children:[i(j,{variant:"h6",children:e}),i(gt,{padding:"none",children:i(bt,{children:n.map(r=>y(rt,{hover:!0,children:[i(ze,{children:r.name==="Power"?i(kn,{name:"Power",className:t.gw2Item}):i(Sr,{name:r.name,className:t.gw2Item})}),i(ze,{children:r.value})]},r.name))})})]})},VS=Je()(e=>({gw2Item:{fontSize:"20px",color:"#AAAAAA"}})),jS=({data:e})=>{const{classes:n}=VS();return y(ge,{children:[i(j,{variant:"h6",children:i(X,{children:"Infusions"})}),i(gt,{padding:"none",children:i(bt,{children:Object.entries(e).map(([t,r])=>y(rt,{hover:!0,children:[i(ze,{children:i(Ze,{id:to[t],className:n.gw2Item})}),i(ze,{children:r})]},t))})})]})},US=Wp.map(e=>`${e} Duration`),qS=Vp.map(e=>`${e} Duration`),ml=e=>Math.round(e*100)/100,GS=Je()(e=>({root:{width:"100%"},gw2Item:{fontSize:"20px",color:"#AAAAAA"}})),YS=({data:e})=>{const{classes:n}=GS(),t=Object.entries(e).filter(([o])=>US.includes(o)),r=Object.entries(e).filter(([o])=>qS.includes(o));return r.length===0&&t.length===0?null:y(ge,{children:[i(j,{variant:"h6",children:i(X,{children:"Special Durations"})}),i(gt,{padding:"none",children:y(bt,{children:[t.map(([o,a])=>y(rt,{hover:!0,children:[i(ze,{children:i(Sr,{name:o.split(" ")[0].replace("Poison","Poisoned"),text:o,className:n.gw2Item})}),y(ze,{children:[ml((a+(e["Condition Duration"]||0))*100),"%"]})]},o)),r.map(([o,a])=>y(rt,{hover:!0,children:[i(ze,{children:i(ql,{name:o.split(" ")[0],text:o,className:n.gw2Item})}),y(ze,{children:[ml((a+(e["Boon Duration"]||0))*100),"%"]})]},o))]})})]})};var da={},KS=qe.exports;Object.defineProperty(da,"__esModule",{value:!0});var pa=da.default=void 0,QS=KS(Ge),JS=Ke,XS=(0,QS.default)((0,JS.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy");pa=da.default=XS;var fa={},ZS=qe.exports;Object.defineProperty(fa,"__esModule",{value:!0});var qu=fa.default=void 0,ek=ZS(Ge),nk=Ke,tk=(0,ek.default)((0,nk.jsx)("path",{d:"M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}),"Done");qu=fa.default=tk;var ma={exports:{}},Gu=function(n,t){return function(){for(var o=new Array(arguments.length),a=0;a<o.length;a++)o[a]=arguments[a];return n.apply(t,o)}},rk=Gu,$t=Object.prototype.toString;function ha(e){return $t.call(e)==="[object Array]"}function gi(e){return typeof e=="undefined"}function ok(e){return e!==null&&!gi(e)&&e.constructor!==null&&!gi(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}function ik(e){return $t.call(e)==="[object ArrayBuffer]"}function ak(e){return typeof FormData!="undefined"&&e instanceof FormData}function sk(e){var n;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?n=ArrayBuffer.isView(e):n=e&&e.buffer&&e.buffer instanceof ArrayBuffer,n}function lk(e){return typeof e=="string"}function ck(e){return typeof e=="number"}function Yu(e){return e!==null&&typeof e=="object"}function Qr(e){if($t.call(e)!=="[object Object]")return!1;var n=Object.getPrototypeOf(e);return n===null||n===Object.prototype}function uk(e){return $t.call(e)==="[object Date]"}function dk(e){return $t.call(e)==="[object File]"}function pk(e){return $t.call(e)==="[object Blob]"}function Ku(e){return $t.call(e)==="[object Function]"}function fk(e){return Yu(e)&&Ku(e.pipe)}function mk(e){return typeof URLSearchParams!="undefined"&&e instanceof URLSearchParams}function hk(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function gk(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function ga(e,n){if(!(e===null||typeof e=="undefined"))if(typeof e!="object"&&(e=[e]),ha(e))for(var t=0,r=e.length;t<r;t++)n.call(null,e[t],t,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.call(null,e[o],o,e)}function bi(){var e={};function n(o,a){Qr(e[a])&&Qr(o)?e[a]=bi(e[a],o):Qr(o)?e[a]=bi({},o):ha(o)?e[a]=o.slice():e[a]=o}for(var t=0,r=arguments.length;t<r;t++)ga(arguments[t],n);return e}function bk(e,n,t){return ga(n,function(o,a){t&&typeof o=="function"?e[a]=rk(o,t):e[a]=o}),e}function vk(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}var Dn={isArray:ha,isArrayBuffer:ik,isBuffer:ok,isFormData:ak,isArrayBufferView:sk,isString:lk,isNumber:ck,isObject:Yu,isPlainObject:Qr,isUndefined:gi,isDate:uk,isFile:dk,isBlob:pk,isFunction:Ku,isStream:fk,isURLSearchParams:mk,isStandardBrowserEnv:gk,forEach:ga,merge:bi,extend:bk,trim:hk,stripBOM:vk},Lt=Dn;function hl(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Qu=function(n,t,r){if(!t)return n;var o;if(r)o=r(t);else if(Lt.isURLSearchParams(t))o=t.toString();else{var a=[];Lt.forEach(t,function(c,u){c===null||typeof c=="undefined"||(Lt.isArray(c)?u=u+"[]":c=[c],Lt.forEach(c,function(p){Lt.isDate(p)?p=p.toISOString():Lt.isObject(p)&&(p=JSON.stringify(p)),a.push(hl(u)+"="+hl(p))}))}),o=a.join("&")}if(o){var s=n.indexOf("#");s!==-1&&(n=n.slice(0,s)),n+=(n.indexOf("?")===-1?"?":"&")+o}return n},xk=Dn;function ko(){this.handlers=[]}ko.prototype.use=function(n,t,r){return this.handlers.push({fulfilled:n,rejected:t,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1};ko.prototype.eject=function(n){this.handlers[n]&&(this.handlers[n]=null)};ko.prototype.forEach=function(n){xk.forEach(this.handlers,function(r){r!==null&&n(r)})};var yk=ko,wk=Dn,Ck=function(n,t){wk.forEach(n,function(o,a){a!==t&&a.toUpperCase()===t.toUpperCase()&&(n[t]=o,delete n[a])})},Ju=function(n,t,r,o,a){return n.config=t,r&&(n.code=r),n.request=o,n.response=a,n.isAxiosError=!0,n.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},n},Sk=Ju,Xu=function(n,t,r,o,a){var s=new Error(n);return Sk(s,t,r,o,a)},kk=Xu,Pk=function(n,t,r){var o=r.config.validateStatus;!r.status||!o||o(r.status)?n(r):t(kk("Request failed with status code "+r.status,r.config,null,r.request,r))},Vr=Dn,Tk=Vr.isStandardBrowserEnv()?function(){return{write:function(t,r,o,a,s,l){var c=[];c.push(t+"="+encodeURIComponent(r)),Vr.isNumber(o)&&c.push("expires="+new Date(o).toGMTString()),Vr.isString(a)&&c.push("path="+a),Vr.isString(s)&&c.push("domain="+s),l===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(t){var r=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Rk=function(n){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(n)},Ak=function(n,t){return t?n.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):n},Dk=Rk,$k=Ak,Ik=function(n,t){return n&&!Dk(t)?$k(n,t):t},Yo=Dn,Lk=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Ek=function(n){var t={},r,o,a;return n&&Yo.forEach(n.split(`
`),function(l){if(a=l.indexOf(":"),r=Yo.trim(l.substr(0,a)).toLowerCase(),o=Yo.trim(l.substr(a+1)),r){if(t[r]&&Lk.indexOf(r)>=0)return;r==="set-cookie"?t[r]=(t[r]?t[r]:[]).concat([o]):t[r]=t[r]?t[r]+", "+o:o}}),t},gl=Dn,Mk=gl.isStandardBrowserEnv()?function(){var n=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),r;function o(a){var s=a;return n&&(t.setAttribute("href",s),s=t.href),t.setAttribute("href",s),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return r=o(window.location.href),function(s){var l=gl.isString(s)?o(s):s;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}(),jr=Dn,Bk=Pk,Ok=Tk,Nk=Qu,zk=Ik,Fk=Ek,_k=Mk,Ko=Xu,bl=function(n){return new Promise(function(r,o){var a=n.data,s=n.headers,l=n.responseType;jr.isFormData(a)&&delete s["Content-Type"];var c=new XMLHttpRequest;if(n.auth){var u=n.auth.username||"",d=n.auth.password?unescape(encodeURIComponent(n.auth.password)):"";s.Authorization="Basic "+btoa(u+":"+d)}var p=zk(n.baseURL,n.url);c.open(n.method.toUpperCase(),Nk(p,n.params,n.paramsSerializer),!0),c.timeout=n.timeout;function m(){if(!!c){var b="getAllResponseHeaders"in c?Fk(c.getAllResponseHeaders()):null,v=!l||l==="text"||l==="json"?c.responseText:c.response,h={data:v,status:c.status,statusText:c.statusText,headers:b,config:n,request:c};Bk(r,o,h),c=null}}if("onloadend"in c?c.onloadend=m:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(m)},c.onabort=function(){!c||(o(Ko("Request aborted",n,"ECONNABORTED",c)),c=null)},c.onerror=function(){o(Ko("Network Error",n,null,c)),c=null},c.ontimeout=function(){var v="timeout of "+n.timeout+"ms exceeded";n.timeoutErrorMessage&&(v=n.timeoutErrorMessage),o(Ko(v,n,n.transitional&&n.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",c)),c=null},jr.isStandardBrowserEnv()){var f=(n.withCredentials||_k(p))&&n.xsrfCookieName?Ok.read(n.xsrfCookieName):void 0;f&&(s[n.xsrfHeaderName]=f)}"setRequestHeader"in c&&jr.forEach(s,function(v,h){typeof a=="undefined"&&h.toLowerCase()==="content-type"?delete s[h]:c.setRequestHeader(h,v)}),jr.isUndefined(n.withCredentials)||(c.withCredentials=!!n.withCredentials),l&&l!=="json"&&(c.responseType=n.responseType),typeof n.onDownloadProgress=="function"&&c.addEventListener("progress",n.onDownloadProgress),typeof n.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",n.onUploadProgress),n.cancelToken&&n.cancelToken.promise.then(function(v){!c||(c.abort(),o(v),c=null)}),a||(a=null),c.send(a)})},dn=Dn,vl=Ck,Hk=Ju,Wk={"Content-Type":"application/x-www-form-urlencoded"};function xl(e,n){!dn.isUndefined(e)&&dn.isUndefined(e["Content-Type"])&&(e["Content-Type"]=n)}function Vk(){var e;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(e=bl),e}function jk(e,n,t){if(dn.isString(e))try{return(n||JSON.parse)(e),dn.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(t||JSON.stringify)(e)}var Po={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:Vk(),transformRequest:[function(n,t){return vl(t,"Accept"),vl(t,"Content-Type"),dn.isFormData(n)||dn.isArrayBuffer(n)||dn.isBuffer(n)||dn.isStream(n)||dn.isFile(n)||dn.isBlob(n)?n:dn.isArrayBufferView(n)?n.buffer:dn.isURLSearchParams(n)?(xl(t,"application/x-www-form-urlencoded;charset=utf-8"),n.toString()):dn.isObject(n)||t&&t["Content-Type"]==="application/json"?(xl(t,"application/json"),jk(n)):n}],transformResponse:[function(n){var t=this.transitional,r=t&&t.silentJSONParsing,o=t&&t.forcedJSONParsing,a=!r&&this.responseType==="json";if(a||o&&dn.isString(n)&&n.length)try{return JSON.parse(n)}catch(s){if(a)throw s.name==="SyntaxError"?Hk(s,this,"E_JSON_PARSE"):s}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(n){return n>=200&&n<300}};Po.headers={common:{Accept:"application/json, text/plain, */*"}};dn.forEach(["delete","get","head"],function(n){Po.headers[n]={}});dn.forEach(["post","put","patch"],function(n){Po.headers[n]=dn.merge(Wk)});var ba=Po,Uk=Dn,qk=ba,Gk=function(n,t,r){var o=this||qk;return Uk.forEach(r,function(s){n=s.call(o,n,t)}),n},Zu=function(n){return!!(n&&n.__CANCEL__)},yl=Dn,Qo=Gk,Yk=Zu,Kk=ba;function Jo(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var Qk=function(n){Jo(n),n.headers=n.headers||{},n.data=Qo.call(n,n.data,n.headers,n.transformRequest),n.headers=yl.merge(n.headers.common||{},n.headers[n.method]||{},n.headers),yl.forEach(["delete","get","head","post","put","patch","common"],function(o){delete n.headers[o]});var t=n.adapter||Kk.adapter;return t(n).then(function(o){return Jo(n),o.data=Qo.call(n,o.data,o.headers,n.transformResponse),o},function(o){return Yk(o)||(Jo(n),o&&o.response&&(o.response.data=Qo.call(n,o.response.data,o.response.headers,n.transformResponse))),Promise.reject(o)})},fn=Dn,ed=function(n,t){t=t||{};var r={},o=["url","method","data"],a=["headers","auth","proxy","params"],s=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],l=["validateStatus"];function c(m,f){return fn.isPlainObject(m)&&fn.isPlainObject(f)?fn.merge(m,f):fn.isPlainObject(f)?fn.merge({},f):fn.isArray(f)?f.slice():f}function u(m){fn.isUndefined(t[m])?fn.isUndefined(n[m])||(r[m]=c(void 0,n[m])):r[m]=c(n[m],t[m])}fn.forEach(o,function(f){fn.isUndefined(t[f])||(r[f]=c(void 0,t[f]))}),fn.forEach(a,u),fn.forEach(s,function(f){fn.isUndefined(t[f])?fn.isUndefined(n[f])||(r[f]=c(void 0,n[f])):r[f]=c(void 0,t[f])}),fn.forEach(l,function(f){f in t?r[f]=c(n[f],t[f]):f in n&&(r[f]=c(void 0,n[f]))});var d=o.concat(a).concat(s).concat(l),p=Object.keys(n).concat(Object.keys(t)).filter(function(f){return d.indexOf(f)===-1});return fn.forEach(p,u),r};const Jk="axios",Xk="0.21.4",Zk="Promise based HTTP client for the browser and node.js",eP="index.js",nP={test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},tP={type:"git",url:"https://github.com/axios/axios.git"},rP=["xhr","http","ajax","promise","node"],oP="Matt Zabriskie",iP="MIT",aP={url:"https://github.com/axios/axios/issues"},sP="https://axios-http.com",lP={coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},cP={"./lib/adapters/http.js":"./lib/adapters/xhr.js"},uP="dist/axios.min.js",dP="dist/axios.min.js",pP="./index.d.ts",fP={"follow-redirects":"^1.14.0"},mP=[{path:"./dist/axios.min.js",threshold:"5kB"}];var hP={name:Jk,version:Xk,description:Zk,main:eP,scripts:nP,repository:tP,keywords:rP,author:oP,license:iP,bugs:aP,homepage:sP,devDependencies:lP,browser:cP,jsdelivr:uP,unpkg:dP,typings:pP,dependencies:fP,bundlesize:mP},nd=hP,va={};["object","boolean","number","function","string","symbol"].forEach(function(e,n){va[e]=function(r){return typeof r===e||"a"+(n<1?"n ":" ")+e}});var wl={},gP=nd.version.split(".");function td(e,n){for(var t=n?n.split("."):gP,r=e.split("."),o=0;o<3;o++){if(t[o]>r[o])return!0;if(t[o]<r[o])return!1}return!1}va.transitional=function(n,t,r){var o=t&&td(t);function a(s,l){return"[Axios v"+nd.version+"] Transitional option '"+s+"'"+l+(r?". "+r:"")}return function(s,l,c){if(n===!1)throw new Error(a(l," has been removed in "+t));return o&&!wl[l]&&(wl[l]=!0,console.warn(a(l," has been deprecated since v"+t+" and will be removed in the near future"))),n?n(s,l,c):!0}};function bP(e,n,t){if(typeof e!="object")throw new TypeError("options must be an object");for(var r=Object.keys(e),o=r.length;o-- >0;){var a=r[o],s=n[a];if(s){var l=e[a],c=l===void 0||s(l,a,e);if(c!==!0)throw new TypeError("option "+a+" must be "+c);continue}if(t!==!0)throw Error("Unknown option "+a)}}var vP={isOlderVersion:td,assertOptions:bP,validators:va},rd=Dn,xP=Qu,Cl=yk,Sl=Qk,To=ed,od=vP,Et=od.validators;function Ar(e){this.defaults=e,this.interceptors={request:new Cl,response:new Cl}}Ar.prototype.request=function(n){typeof n=="string"?(n=arguments[1]||{},n.url=arguments[0]):n=n||{},n=To(this.defaults,n),n.method?n.method=n.method.toLowerCase():this.defaults.method?n.method=this.defaults.method.toLowerCase():n.method="get";var t=n.transitional;t!==void 0&&od.assertOptions(t,{silentJSONParsing:Et.transitional(Et.boolean,"1.0.0"),forcedJSONParsing:Et.transitional(Et.boolean,"1.0.0"),clarifyTimeoutError:Et.transitional(Et.boolean,"1.0.0")},!1);var r=[],o=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(o=o&&m.synchronous,r.unshift(m.fulfilled,m.rejected))});var a=[];this.interceptors.response.forEach(function(m){a.push(m.fulfilled,m.rejected)});var s;if(!o){var l=[Sl,void 0];for(Array.prototype.unshift.apply(l,r),l=l.concat(a),s=Promise.resolve(n);l.length;)s=s.then(l.shift(),l.shift());return s}for(var c=n;r.length;){var u=r.shift(),d=r.shift();try{c=u(c)}catch(p){d(p);break}}try{s=Sl(c)}catch(p){return Promise.reject(p)}for(;a.length;)s=s.then(a.shift(),a.shift());return s};Ar.prototype.getUri=function(n){return n=To(this.defaults,n),xP(n.url,n.params,n.paramsSerializer).replace(/^\?/,"")};rd.forEach(["delete","get","head","options"],function(n){Ar.prototype[n]=function(t,r){return this.request(To(r||{},{method:n,url:t,data:(r||{}).data}))}});rd.forEach(["post","put","patch"],function(n){Ar.prototype[n]=function(t,r,o){return this.request(To(o||{},{method:n,url:t,data:r}))}});var yP=Ar;function xa(e){this.message=e}xa.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};xa.prototype.__CANCEL__=!0;var id=xa,wP=id;function fo(e){if(typeof e!="function")throw new TypeError("executor must be a function.");var n;this.promise=new Promise(function(o){n=o});var t=this;e(function(o){t.reason||(t.reason=new wP(o),n(t.reason))})}fo.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};fo.source=function(){var n,t=new fo(function(o){n=o});return{token:t,cancel:n}};var CP=fo,SP=function(n){return function(r){return n.apply(null,r)}},kP=function(n){return typeof n=="object"&&n.isAxiosError===!0},kl=Dn,PP=Gu,Jr=yP,TP=ed,RP=ba;function ad(e){var n=new Jr(e),t=PP(Jr.prototype.request,n);return kl.extend(t,Jr.prototype,n),kl.extend(t,n),t}var Wn=ad(RP);Wn.Axios=Jr;Wn.create=function(n){return ad(TP(Wn.defaults,n))};Wn.Cancel=id;Wn.CancelToken=CP;Wn.isCancel=Zu;Wn.all=function(n){return Promise.all(n)};Wn.spread=SP;Wn.isAxiosError=kP;ma.exports=Wn;ma.exports.default=Wn;var sd=ma.exports;const AP=Je()(e=>({skillSelect:{width:60,height:60,marginRight:e.spacing(.5)}}));function ar({name:e,value:n,skillList:t}){const r=Ee(),{classes:o}=AP();return i(dt,{variant:"standard",value:n,name:e,onChange:s=>{r(Up({key:s.target.name,value:s.target.value}))},className:o.skillSelect,renderValue:s=>s===""?i("div",{style:{fontSize:60,lineHeight:0},children:i(jp,{})}):i(dr,{id:s,disableText:!0,style:{fontSize:60,lineHeight:0}}),displayEmpty:!0,children:t.map(s=>y(et,{value:s.id,children:[i(dr,{id:s.id,disableLink:!0,disableText:!0,style:{marginRight:4,fontSize:"1.2rem"}}),i(dr,{id:s.id,disableLink:!0,disableTooltip:!0,disableIcon:!0})]},s.id))})}const DP=Je()(e=>({weaponItem:{marginRight:e.spacing(1)},weaponSelect:{width:160,marginRight:e.spacing(1)},skillSelect:{width:60,height:60,marginRight:e.spacing(.5)}}));function ld({character:e,buttons:n}){var E,S;const t=Ee(),{classes:r}=DP(),{t:o}=Se(),a=q(ac),s=q(sc),{mainhand1:l,mainhand2:c,offhand1:u,offhand2:d}=a,{healId:p,utility1Id:m,utility2Id:f,utility3Id:b,eliteId:v}=s,[h,x]=Y.useState({skills:void 0,error:void 0}),[w,k]=Y.useState(new Array(n.length)),{profession:T}=e.settings,{weapons:R}=Kp[T],A=P=>{var B;((B=R.mainHand.find(I=>I.gw2id===P.target.value))==null?void 0:B.type)==="two-handed"&&(P.target.name==="mainhand1"&&t(Mo({key:"offhand1",value:""})),P.target.name==="mainhand2"&&t(Mo({key:"offhand2",value:""}))),t(Mo({key:P.target.name,value:P.target.value}))},$=P=>{var B;return(B=lc[P.toUpperCase().replace(" ","")])==null?void 0:B.gw2id};Y.useEffect(()=>{sd.get(`https://api.guildwars2.com/v2/professions/${ki(T)}`).then(P=>x({error:void 0,skills:P.data.skills})).catch(P=>(console.error(P),x({error:P.message}),null))},[T]);const D=!h.error&&!h.skills;return y(ge,{children:[i(j,{children:o("Select weapons:")}),y(J,{mb:1,children:[i(dt,{variant:"standard",value:l,name:"mainhand1",onChange:A,className:r.weaponSelect,children:Y.Children.toArray(R.mainHand.map(({name:P})=>y(et,{value:$(P),children:[i(Ze,{id:$(P),disableText:!0,className:r.weaponItem}),` ${P}`]})))}),((E=R.mainHand.find(P=>P.gw2id===l))==null?void 0:E.type)!=="two-handed"&&i(dt,{variant:"standard",value:u,name:"offhand1",onChange:A,className:r.weaponSelect,children:Y.Children.toArray(R.offHand.map(({name:P})=>y(et,{value:$(P),children:[i(Ze,{id:$(P),disableText:!0,className:r.weaponItem}),` ${P}`]})))})]}),i(J,{alignSelf:"center",children:i(qp,{name:"WeaponSwap"})}),y(J,{mb:2,children:[i(dt,{variant:"standard",value:c,name:"mainhand2",onChange:A,className:r.weaponSelect,children:Y.Children.toArray(R.mainHand.map(({name:P})=>y(et,{value:$(P),children:[i(Ze,{id:$(P),disableText:!0,className:r.weaponItem}),` ${P}`]})))}),((S=R.mainHand.find(P=>P.gw2id===c))==null?void 0:S.type)!=="two-handed"&&i(dt,{variant:"standard",value:d,name:"offhand2",onChange:A,className:r.weaponSelect,children:Y.Children.toArray(R.offHand.map(({name:P})=>y(et,{value:$(P),children:[i(Ze,{id:$(P),disableText:!0,className:r.weaponItem}),` ${P}`]})))})]}),i(j,{children:o("Select skills:")}),y(J,{mb:2,children:[D&&i(Gp,{}),h.error&&i(Yp,{name:"ERROR",message:h.error}),h.skills&&y(ge,{children:[i(ar,{name:"healId",value:p,skillList:h.skills.filter(P=>P.type==="Heal")}),i(ar,{name:"utility1Id",value:m,skillList:h.skills.filter(P=>P.type==="Utility")}),i(ar,{name:"utility2Id",value:f,skillList:h.skills.filter(P=>P.type==="Utility")}),i(ar,{name:"utility3Id",value:b,skillList:h.skills.filter(P=>P.type==="Utility")}),i(ar,{name:"eliteId",value:v,skillList:h.skills.filter(P=>P.type==="Elite")})]})]}),i(fb,{variant:"contained",color:"primary",children:n.map(({label:P,icon:B,onClick:I},O)=>i(Yn,{startIcon:w[O]?i(qu,{}):i(B,{}),disabled:w[O],onClick:()=>{const z=[...w];z[O]=!0,k(z),setTimeout(()=>{const _=[...w];_[O]=!1,k(_)},3e3),I()},children:P}))})]})}const $P={Power:0,Burning:0,Bleeding:0,Poison:0,Torment:0,Confusion:0},Pl=e=>Math.round(e*100)/100,IP=e=>Math.round(e),Ur=(e,n)=>e.replace(/^/gm," ".repeat(n)),LP=e=>Object.fromEntries(Object.entries(e).map(([n,t])=>[n==="Poison"?"Poisoned":n,t])),EP=({character:e})=>{const{t:n}=Se(),[t,r]=Y.useState($P),[o,a]=Y.useState(""),[s,l]=Y.useState("");Y.useEffect(()=>{async function v(){var h,x,w,k,T,R,A,$,D,E,S,P,B,I,O,z,_,H,G;if(l(""),o)try{const W=o.split("/").slice(-1);if(!W)return;console.log("loading data from dps.report...");const te=await(await fetch(`https://dps.report/getJson?permalink=${W}`)).json();if(console.log("got data from dps.report: ",te),te.error||!Array.isArray(te==null?void 0:te.players)){l(JSON.stringify(te,null,2));return}const Z=te.players.find(Me=>Me.name===te.recordedBy);if(!Z){l("no player data!");return}const re=(((x=(h=te.phases)==null?void 0:h[0])==null?void 0:x.end)-((k=(w=te.phases)==null?void 0:w[0])==null?void 0:k.start))/1e3;let de=0;const ce=(A=(R=(T=Z.dpsTargets)==null?void 0:T[0])==null?void 0:R[0])==null?void 0:A.powerDps;de+=ce;const me=Qp({Burning:737,Bleeding:736,Poison:723,Torment:19426,Confusion:861},Me=>{var Fe,on,Qe,F;const Be=(F=(Qe=(on=(Fe=Z.targetDamageDist)==null?void 0:Fe[0])==null?void 0:on[0])==null?void 0:Qe.find(ee=>(ee==null?void 0:ee.id)===Me))==null?void 0:F.totalDamage,Re=Pl((Be!=null?Be:0)/re);return de+=Re,Re}),be=(E=(D=($=Z.dpsTargets)==null?void 0:$[0])==null?void 0:D[0])==null?void 0:E.dps,oe=(B=(P=(S=Z.statsTargets)==null?void 0:S[0])==null?void 0:P[0])==null?void 0:B.critableDirectDamageCount,ae=(z=(O=(I=Z.statsTargets)==null?void 0:I[0])==null?void 0:O[0])==null?void 0:z.criticalRate,Ie=oe/re,We=ae/oe*100,se=(_=Z.minions)!=null?_:[],tn={Clone:{names:new Set,minionHits:0,minionCrits:0},Phantasm:{names:new Set,minionHits:0,minionCrits:0},Minion:{names:new Set,minionHits:0,minionCrits:0}};for(const{name:Me,targetDamageDist:Be}of se){console.log(Me);let Re="Minion";Me==="Clone"&&(Re="Clone"),Me!=null&&Me.startsWith("Illusionary")&&(Re="Phantasm"),tn[Re].names.add(Me);for(const Fe of(G=(H=Be==null?void 0:Be[0])==null?void 0:H[0])!=null?G:[]){const{indirectDamage:on,connectedHits:Qe,crit:F}=Fe;on||(console.log(F,Qe),tn[Re].minionHits+=Qe!=null?Qe:0,tn[Re].minionCrits+=F!=null?F:0)}}const Te=Object.entries(tn).filter(([Me,{minionHits:Be}])=>Be).flatMap(([Me,{names:Be,minionHits:Re,minionCrits:Fe}])=>{const on=[...Be].join(", "),Qe=Re/re,F=Fe/Re*100;return[[`${Me} hits/sec (${Fe}/${Re}: ${F.toFixed(2)}% crit)`,Qe],`            - ${on}
`]}),rn=[["Duration (sec)",re],`
`,["Power DPS (including minions)",ce],...Object.entries(me).map(([Me,Be])=>[`${Me} DPS`,Be]),`
`,["Sum",de],["Total dps (log)",be],`
`,[`Player crittable hits per second (${ae}/${oe}: ${We.toFixed(2)}% crit)`,Ie],`
`,...Te].map(Me=>{if(typeof Me=="string")return Me;const[Be,Re]=Me;return`${String(Re.toFixed(2)).padStart(9)}: ${Be}`}).join(`
`);r(ue({Power:ce},me)),l(rn)}catch(W){console.error(W),l(String(W))}}v()},[o]);const c=Object.entries(t).map(([v,h])=>{const{value:x,error:w}=ei(h);return{key:v,inputText:h,value:x,error:w}}),{cachedFormState:u}=e.settings,{coefficientHelper:d}=e.results,p=(v,h=0)=>{const{slope:x,intercept:w}=d[v];return h===w?0:(h-w)/x};let m=Object.fromEntries(c.map(({key:v,value:h})=>[v,p(v,h)]));Object.keys(m).forEach(v=>{m[v]=v==="Power"?IP(m[v]):Pl(m[v])}),m=LP(m);const f={values2:m},b=JSON.stringify(f,null,2).replaceAll(`
    `," ").replaceAll(`
  }`," }");return y(ge,{children:[i(j,{variant:"h6",children:i(X,{children:"Distribution Template"})}),i(j,{variant:"caption",children:i(X,{children:"input the DPS values from a golem log here:"})}),i("table",{children:y("tbody",{children:[i("tr",{children:c.map(({key:v})=>i("td",{children:n("DPSType",{context:v})},v))}),i("tr",{children:c.map(({key:v,inputText:h,error:x})=>i("td",{children:i(_n,{variant:"standard",error:x,value:h,onChange:w=>{const k=ue({},t);k[v]=w.target.value,r(k)}})},v))})]})}),i("br",{}),i(j,{variant:"caption",children:i(X,{children:"or, enter a dps.report URL to attempt to to fetch the data automatically:"})}),i("br",{}),i(_n,{fullWidth:!0,variant:"standard",onChange:v=>{a(v.target.value)}}),i("pre",{style:{margin:"1rem"},children:s}),i("br",{}),i(j,{variant:"caption",children:i(X,{children:"result:"})}),i("table",{children:y("tbody",{children:[i("tr",{children:Object.keys(m).map(v=>{const h=v==="Power"?"Power Coefficient":`Avg. ${v} Stacks`;return i("td",{children:h},h)})}),i("tr",{children:Object.values(m).map((v,h)=>i("td",{children:i(_n,{disabled:!0,value:v,variant:"standard"})},h))})]})}),i("pre",{style:{userSelect:"all",overflowY:"auto",maxHeight:"250px",margin:"1rem"},children:Ur(b,6)}),i(j,{variant:"h6",children:i(X,{children:"Trait Template"})}),i("pre",{style:{userSelect:"all",overflowY:"auto",maxHeight:"250px",margin:"1rem"},children:Ur(JSON.stringify(u==null?void 0:u.traits,null,2)||"",6)}),i(j,{variant:"h6",children:i(X,{children:"Skills Template"})}),i("pre",{style:{userSelect:"all",overflowY:"auto",maxHeight:"250px",margin:"1rem"},children:Ur(JSON.stringify(u==null?void 0:u.skills,null,2)||"",6)}),i(j,{variant:"h6",children:i(X,{children:"Extras Template"})}),i("pre",{style:{userSelect:"all",overflowY:"auto",maxHeight:"250px",margin:"1rem"},children:Ur(JSON.stringify(u==null?void 0:u.extras,null,2)||"",6)})]})};var MP=Y.memo(EP);const BP=(e,n)=>e.replace(/^/gm," ".repeat(n));function qr(e){var n;return(n=Object.values(lc).find(t=>t.gw2id===e))==null?void 0:n.name}const OP=({character:e})=>{const{t:n}=Se(),t=q(ac),r=q(sc),o=()=>{var B,I,O,z;const{attributes:a,gear:s,settings:l}=e,{profession:c}=l,{buffs:u}=l.cachedFormState.buffs,{Sigil1:d,Sigil2:p,Enhancement:m,Nourishment:f,Runes:b}=l.extrasCombination,v=(B=Pn[f])==null?void 0:B.gw2id,h=(I=Pn[m])==null?void 0:I.gw2id,x=(O=Pn[d])==null?void 0:O.gw2id,w=(z=Pn[p])==null?void 0:z.gw2id,k=b?Pn[b]:"",T=b?k.text.replace(/(Superior|Rune|of|the)/g,"").trim():"",{mainhand1:R,offhand1:A,mainhand2:$,offhand2:D}=t,E=ue(ue(ue(ue(ue(ue(ue(ue(ue(ue({},R&&{weapon1MainType:qr(R)}),R&&{weapon1MainSigil1Id:x}),!A&&{weapon1MainSigil2Id:w}),A&&{weapon1OffType:qr(A)}),A&&{weapon1OffSigilId:w}),$&&{weapon2MainType:qr($)}),$&&{weapon2MainSigil1Id:x}),!D&&{weapon2MainSigil2Id:w}),D&&{weapon2OffType:qr(D)}),D&&{weapon2OffSigilId:w}),S=Si.flatMap(_=>_.items).filter(_=>u[_.id]).map(({id:_,gw2id:H,type:G})=>({id:_,gw2id:H,type:G})),P={profession:c,weight:Jp(c),gear:s,attributes:a,runeId:k.gw2id,runeName:T,infusions:[...Array(18).fill(49432)],weapons:E,consumables:{foodId:v,utilityId:h},skills:r,assumedBuffs:S};navigator.clipboard.writeText(`<Character ${BP(`gear={${JSON.stringify(P,null,2)}}`)} />`)};return i(ge,{children:y(Yt,{children:[i(Qt,{expandIcon:i(Xt,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:i(j,{children:i(X,{children:"Development"})})}),i(Kt,{children:y(he,{container:!0,children:[i(he,{item:!0,xs:12,children:i(An,{title:n("Website Templates"),helpText:i(X,{children:"Create templates for the discretize.eu website. Please check the discretize-guides repo for more information."}),content:i(ld,{character:e,buttons:[{label:"Copy Build to clipboard",onClick:o,icon:pa}]})})}),i(he,{item:!0,xs:12,children:i(An,{title:n("Optimizer Templates"),content:i(MP,{character:e}),helpText:i(X,{children:"Create build templates that can be used for the gear optimizer."})})})]})})]})})};var NP=Y.memo(OP);const zP=({data:e})=>{var s;const{t:n}=Se(),t=q(bo);if(!t)return null;console.log("Selected Character Data:",t);const r=Object.keys(t.results.effectiveDamageDistribution).map(l=>({name:l==="Poison Damage"?"Poisoned":l.replace("Damage","").trim(),value:t.results.damageBreakdown[l]})),o=Object.keys(t.results.effectiveDamageDistribution).map(l=>({name:l==="Poison Damage"?"Poisoned":l.replace("Damage","").trim(),value:t.results.effectiveDamageDistribution[l]})),a=Si.flatMap(l=>l.items).filter(l=>t.settings.cachedFormState.buffs.buffs[l.id]);return y(cc,{location:"ResultDetails",resetKeys:[t],children:[i(Ti,{text:"Result Character"}),i(Xp,{data:e,character:t,assumedBuffs:a}),y(he,{container:!0,spacing:2,children:[y(he,{item:!0,xs:12,sm:6,md:4,children:[i(YS,{data:t.attributes}),i(HS,{data:t.results.indicators}),i(Go,{data:t.gearStats,title:n("Stats from affixes")}),t.infusions&&i(jS,{data:t.infusions})]}),y(he,{item:!0,xs:12,sm:6,md:4,children:[i(fl,{title:n("Damage Breakdown"),data:r}),i(fl,{title:n("Effective Distribution"),data:o})]}),y(he,{item:!0,xs:12,sm:6,md:4,children:[i(Go,{data:t.results.effectivePositiveValues,title:n("Damage increase from +5 of attribute")}),i(Go,{data:t.results.effectiveNegativeValues,title:n("Damage loss from -5 of attribute")})]}),i(he,{item:!0,xs:12,sm:6,md:4})]}),i(_S,{data:(s=t==null?void 0:t.settings)==null?void 0:s.appliedModifiers}),i(NP,{character:t})]})};var FP=Y.memo(zP);const _P={Sigil1:i(Ze,{id:24615,disableLink:!0,disableText:!0,disableTooltip:!0,style:{fontSize:18}}),Sigil2:i(Ze,{id:24615,disableLink:!0,disableText:!0,disableTooltip:!0,style:{fontSize:18}}),Runes:i(Ze,{id:24836,disableLink:!0,disableText:!0,disableTooltip:!0,style:{fontSize:18}}),Nourishment:i(no,{disableLink:!0,disableText:!0,name:"Nourishment",style:{fontSize:18}}),Enhancement:i(no,{disableLink:!0,disableText:!0,name:"Enhancement",style:{fontSize:18}})},HP=({classes:e,weaponType:n="Two-handed",infusions:t={},rankBy:r="Damage",displayExtras:o,displayAttributes:a})=>{const{t:s}=Se();return y(rt,{children:[i(ze,{className:e.tablehead,align:"center",padding:"none",children:i(Un,{text:s("Click the star icon to save a result for comparison."),fontSize:"1rem"})}),i(ze,{className:e.tablehead,children:s("priorityGoal",{context:r})}),Zp[n].map(l=>i(ze,{className:nt(e.tablehead,e.gearColumn),align:"center",padding:"none",children:l.short},l.name)),Object.keys(t).map(l=>i(ze,{className:nt(e.tablehead,e.infusionColumn),align:"center",padding:"none",children:i(Ze,{id:to[l],disableText:!0,disableLink:!0})},l)),uc.filter(l=>o[l]).map((l,c)=>i(ze,{className:nt(e.tablehead,e.extrasColumn),align:"center",padding:"none",children:_P[l]},`extras${c}`)),a.map((l,c)=>i(ze,{className:nt(e.tablehead,e.attributesColumn),align:"center",padding:"none",children:i(kn,{name:l,disableLink:!0,disableText:!0,style:{fontSize:18}})},`attrs${c}`))]})};var Tl=Y.memo(HP),ya={},WP=qe.exports;Object.defineProperty(ya,"__esModule",{value:!0});var cd=ya.default=void 0,VP=WP(Ge),jP=Ke,UP=(0,VP.default)((0,jP.jsx)("path",{d:"m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"}),"StarRounded");cd=ya.default=UP;const qP=e=>Math.round(e*100)/100,GP=({character:e,selected:n,saved:t=!1,mostCommonAffix:r,underlineClass:o,selectedValue:a,compareByPercent:s,displayExtras:l,displayAttributes:c})=>{const u=Ee(),{value:d}=e.results,p=a?d-a:0,m=p?` ${p>0?"+":"-"}${s?`${(100*Math.abs(p)/a).toFixed(1)}%`:Math.round(Math.abs(p))}`:"";return y(rt,{selected:n,style:n?{backgroundColor:"rgba(0, 204, 204, 0.2)"}:null,onClick:f=>u(ef(e)),hover:!0,className:o,children:[i(ze,{scope:"row",align:"center",padding:"none",children:i(cd,{sx:t?{color:"star"}:{opacity:"0.2","&:hover":{opacity:"1",color:"star"}},onClick:f=>{u(nf(e)),f.stopPropagation()}})}),y(ze,{scope:"row",children:[d.toFixed(0),m?i(j,{variant:"caption",sx:{color:"text.secondary"},children:m}):null]}),e.gear.map((f,b)=>i(ze,{align:"center",padding:"none",children:i(j,{style:r&&r!==f?{fontWeight:300,fontSize:"1rem",color:"#00cccc"}:{fontWeight:300,fontSize:"1rem"},children:f.slice(0,4)})},f+b)),e.infusions?Object.values(e.infusions).map((f,b)=>i(ze,{align:"center",padding:"none",children:f},`infu${b}`)):null,uc.filter(f=>l[f]).map((f,b)=>{var h;const v=e.settings.extrasCombination[f];return i(ze,{align:"center",padding:"none",children:v?i(Ze,{id:(h=Pn[v])==null?void 0:h.gw2id,disableText:!0,disableLink:!0,style:{fontSize:23}}):null},`extras${b}`)}),c.map((f,b)=>{var v;return i(ze,{align:"center",padding:"none",children:i(j,{variant:"caption",children:qP(((v=e.attributes[f])!=null?v:0)*(tf.includes(f)?100:1))})},`attrs${b}`)})]})};var Rl=Y.memo(GP);const YP=Je()(e=>({container:{borderColor:e.palette.background.paper,border:"1px solid inherit"},shortTable:{maxHeight:440},tallTable:{maxHeight:"90vh"},tablehead:{backgroundColor:e.palette.background.paper},tableCollapse:{borderCollapse:"collapse !important",marginBottom:"0px !important"},underline:{borderBottom:`5px solid ${e.palette.divider}`},gearColumn:{minWidth:"3em"},infusionColumn:{minWidth:"1.8em"},extrasColumn:{minWidth:"2.2em"},attributesColumn:{minWidth:"2.8em"}})),KP=e=>{const n={};let t=0,r=null;for(const o of e)n[o]=(n[o]||0)+1,n[o]>t&&(t=n[o],r=o);return r},Xo=[],QP=()=>{var D,E,S;const{classes:e}=YP(),{t:n}=Se(),t=q(bo),r=q(rf)||Xo,o=q(of)||Xo,a=q(af)||Xo,s=q(Yl),l=q(Ql),c=q(Kl),u=Y.useMemo(()=>l==="None"?r:l==="Combinations"?o.slice(0,100):l==="Sigils"?o.filter((P,B)=>!o.slice(0,B).some(O=>O.settings.extrasCombination.Sigil1===P.settings.extrasCombination.Sigil1&&O.settings.extrasCombination.Sigil2===P.settings.extrasCombination.Sigil2&&O.results.value>P.results.value)):o.filter((P,B)=>!o.slice(0,B).some(O=>O.settings.extrasCombination[l]===P.settings.extrasCombination[l]&&O.results.value>P.results.value)),[l,r,o]);let d=null;u[0]&&(d=KP(u[0].gear));const p=u[0],m=(D=p==null?void 0:p.settings)==null?void 0:D.weaponType,f=p==null?void 0:p.infusions,b=(E=p==null?void 0:p.settings)==null?void 0:E.rankby,v=(S=t==null?void 0:t.results)==null?void 0:S.value,h=P=>{var I,O;if(((O=(I=p==null?void 0:p.settings)==null?void 0:I.shouldDisplayExtras)==null?void 0:O[P])||a.some(z=>{var _,H;return(H=(_=z==null?void 0:z.settings)==null?void 0:_.shouldDisplayExtras)==null?void 0:H[P]}))return!0;const B=new Set;return[...u.slice(0,1),...a].filter(z=>{var _;return z.settings.profession!==((_=p==null?void 0:p.settings)==null?void 0:_.profession)}).forEach(z=>B.add(z.settings.extrasCombination[P])),B.size>1},x=h("Sigil1"),w=h("Sigil2"),k=h("Runes"),T=h("Nourishment"),R=h("Enhancement"),A=Y.useMemo(()=>({Sigil1:x,Sigil2:w,Runes:k,Nourishment:T,Enhancement:R}),[x,w,k,T,R]),$=q(Jl);return y(ge,{children:[i(J,{boxShadow:8,mb:3,children:i(Es,{className:nt(e.container,c?e.tallTable:e.shortTable),children:y(gt,{stickyHeader:!0,"aria-label":"sticky table",className:e.tableCollapse,children:[i(Bs,{children:i(Tl,{classes:e,weaponType:m,infusions:f,rankBy:b,displayExtras:A,displayAttributes:$})}),i(bt,{sx:{cursor:"pointer"},children:u.map((P,B)=>{var H,G,W;const I=(H=u[0])==null?void 0:H.results.value,O=(G=u[B])==null?void 0:G.results.value,z=(W=u[B+1])==null?void 0:W.results.value,_=O===I&&O!==z;return i(Rl,{character:P,selected:P===t,saved:a.includes(P),mostCommonAffix:d,underlineClass:_?e.underline:null,selectedValue:v,compareByPercent:s,displayExtras:A,displayAttributes:$},P.id)})})]})})}),a.length?y(ge,{children:[i(Ti,{text:n("Saved Results")}),i(J,{boxShadow:8,mb:3,children:i(Es,{className:nt(e.container,c?e.tallTable:e.shortTable),children:y(gt,{stickyHeader:!0,"aria-label":"saved results table",className:e.tableCollapse,children:[i(Bs,{style:{visibility:"collapse"},children:i(Tl,{classes:e,weaponType:m,infusions:f,rankBy:b,displayExtras:A,displayAttributes:$})}),i(bt,{sx:{cursor:"pointer"},children:a.map((P,B)=>i(Rl,{character:P,selected:P===t,saved:a.includes(P),mostCommonAffix:d,underlineClass:B===a.length-1?e.bigUnderline:null,selectedValue:v,compareByPercent:s,displayExtras:A,displayAttributes:$},P.id))})]})})})]}):null]})};var JP=Y.memo(QP);function ud({state:e,setState:n}){return i(u0,{open:e.open,autoHideDuration:3e3,onClose:()=>n(Ne(ue({},e),{open:!1})),children:i(xo,{onClose:()=>n(Ne(ue({},e),{open:!1})),severity:e.success?"success":"error",children:e.message})})}const XP=0,ZP=({type:e})=>{const n=Ee(),{t}=Se(),[r,o]=Y.useState({open:!1,success:!0,message:""}),a=Y.useCallback(s=>{if(typeof window=="undefined")return;const l=new URL(window.location.href);l.searchParams.set("v",XP),l.searchParams.set("data",s);const c=l.href;if(c.length>8e3){console.log(`URL is too long! (${c.length} characters):`,c),o(b=>Ne(ue({},b),{open:!0,success:!1,message:t("Error: too much data!")}));return}if(console.log(`Exported long URL (${c.length} characters):`,c),!c.includes("optimizer.discretize.eu")){o(b=>Ne(ue({},b),{open:!0,success:!0,message:t("Copied link to clipboard! (Link shortener disabled in preview builds.)")})),navigator.clipboard.writeText(c);return}const u=sd.get(`https://go.princeps.biz/?new=${c.replace("&","%26")}`).then(b=>{var v,h;return((v=b==null?void 0:b.data)==null?void 0:v.Status)===200?(console.log("Exported short URL:",b.data.ShortUrl),b.data.ShortUrl):(console.log(`URL shortener returned status ${(h=b==null?void 0:b.data)==null?void 0:h.Status}!`),c)}),d=new Promise(b=>setTimeout(b,3e3,c)),p=Promise.any([u,d]),m=p.then(b=>new Blob([b],{type:"text/plain"}));(typeof ClipboardItem!="undefined"?navigator.clipboard.write([new ClipboardItem({"text/plain":m})]):p.then(b=>navigator.clipboard.writeText(b))).then(()=>o(b=>Ne(ue({},b),{open:!0,success:!0,message:t("Copied link to clipboard!")}))).catch(()=>o(b=>Ne(ue({},b),{open:!0,success:!0,message:t("Failed to copy link to clipboard!")})))},[t]);return y(ge,{children:[i(sf,{content:t("Copy sharable link to clipboard (note: results are not currently included)"),children:i(Hn,{onClick:()=>n({type:Fn.ExportFormState,onSuccess:a}),size:"large",children:i(Rr,{})})}),i(ud,{state:r,setState:o})]})},eT=Je()(e=>({modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,2,2)},closeIcon:{fontSize:20}})),nT=({children:e,title:n,character:t})=>{const{classes:r}=eT(),o=Ee(),{t:a}=Se(),[s,l]=Y.useState(!1),c=()=>{l(!0)},u=()=>{l(!1)},d=()=>{const m=window.open("","_blank");o({type:Fn.ExportBuildPageState,newPage:m})},p=()=>{o({type:Fn.ExportBuildPageState,copyToClipboard:!0})};return y(ge,{children:[e(c),i(yi,{disableEnforceFocus:!0,"aria-labelledby":"build-share-modal",className:r.modal,open:s,onClose:u,children:i(wi,{in:s,children:y("div",{className:r.paper,children:[y(J,{display:"flex",justifyContent:"space-between",mb:1,children:[n&&i(J,{alignSelf:"center",children:i(j,{children:n})}),i(J,{alignSelf:"center",children:i(Hn,{onClick:u,children:i(la,{className:r.closeIcon})})})]}),i(Bi,{}),i(ld,{character:t,buttons:[{label:a("Open build"),onClick:d,icon:Rr},{label:a("Copy build"),onClick:p,icon:pa}]})]})})})]})},tT=()=>{const{t:e}=Se(),n=q(bo);return i(An,{title:i("a",{style:{textDecoration:"none",color:"inherit"},id:"#share",href:"#share",children:e("Share Builds")}),helpText:e("Generate shareable links here!"),content:y(ge,{children:[i(ZP,{})," ",i(j,{variant:"body1",component:"span",children:i(X,{children:"Share settings."})})," ",i(j,{variant:"caption",children:i(X,{children:"Includes the current selected options on this page only. Does not include result builds in the table above"})}),i("br",{}),i(nT,{title:e("Build Share Settings"),character:n,children:t=>i(Hn,{disabled:!n,onClick:()=>t(),size:"large",children:i(Rr,{})})})," ",y(j,{variant:"body1",component:"span",children:[i(X,{children:"Share Character."})," "]}),y(j,{variant:"caption",children:[" ",i(X,{children:"Select weapons and skills as you please."})]})]}),extraInfo:i(ge,{})})},rT=({data:e})=>{const n=Ee(),t=q(lf),{t:r}=Se(),o=s=>l=>{n(cf({id:s,enabled:l.target.checked}))},a=s=>l=>{n(uf({id:s,amount:l.target.value}))};return!e||e.length<1?r("This class does not appear to have skills with extra buffs"):e.map(s=>{var f;const{id:l,gw2id:c,subText:u,amountData:d}=s,p=Boolean(t[l]),m=((f=t[l])==null?void 0:f.amount)||"";return y(J,{justifyContent:"space-between",display:"flex",maxWidth:"648px",children:[i(J,{children:i(Tt,{value:l,checked:p,label:y(J,{display:"flex",children:[i(dr,{id:c,disableLink:!0}),u&&i(j,{sx:{fontWeight:200,marginLeft:1},children:r("skillSubText",{context:u})})]}),onChange:o(l)})}),d?i(J,{children:i(vt,{placeholder:d.default,endLabel:r("amountLabel",{context:d.label}),handleAmountChange:a(l),value:m,disabled:!p,maxWidth:38})}):null]},l)})},Al=({profession:e})=>{var r;const{t:n}=Se(),t=(r=ti[e])==null?void 0:r.find(o=>o.section==="Skills");return t?i(An,{title:n("Skills"),content:i(rT,{profession:e,data:t.items})}):null};var wa={},oT=qe.exports;Object.defineProperty(wa,"__esModule",{value:!0});var dd=wa.default=void 0,iT=oT(Ge),Dl=Ke,aT=(0,iT.default)([(0,Dl.jsx)("path",{d:"M12 5.99 19.53 19H4.47L12 5.99M12 2 1 21h22L12 2z"},"0"),(0,Dl.jsx)("path",{d:"M13 16h-2v2h2zm0-6h-2v5h2z"},"1")],"WarningAmber");dd=wa.default=aT;function $l({children:e,direction:n="column"}){return i(Bn,{sx:{mt:.5,mb:1},elevation:0,children:y(J,{sx:{p:1,display:"flex",flexDirection:n},children:[i(J,{sx:{mr:1},children:i(dd,{})}),i(j,{variant:"caption",paragraph:!0,sx:{mb:0},children:e})]})})}const sT=({profession:e})=>{var v,h,x,w;const n=Ee(),{t}=Se(),r=(h=(v=ti[e])==null?void 0:v.filter(k=>k.id>0))!=null?h:[],o=q(df),a=q(pf),s=q(ff),c=q(dc)?{opacity:.5}:{display:"none"},u=k=>T=>{const R=T.target.value;n(mf({index:k,newTraitLine:R}))},d=k=>T=>{const{tier:R,id:A}=T;n(gf({index:k,tier:R,newTrait:A}))},p=(k,T)=>R=>{n(bf({index:k,id:T,enabled:R.target.checked}))},m=(k,T)=>R=>{n(vf({index:k,id:T,amount:R.target.value}))},f=[1,2,3].map((k,T)=>{var P,B;const R=o[T],A=R?parseInt(R,10):null,$=[],D=[];(P=Va[A])==null||P.items.forEach(I=>{const{minor:O,subText:z,amountData:_}=I;O&&!z&&!_?D.push(I):$.push(I)});const E=(B=Va[A])==null?void 0:B.note,S=`traitNr${k}`;return y(Y.Fragment,{children:[y(mn,{variant:"standard",sx:{minWidth:210,margin:1},children:[i(Nn,{id:`Traitline${k}`,children:t("Traitline",{lineNr:k})}),i(dt,{label:t("Traitline",{lineNr:k}),labeldid:`Traitline${k}`,value:R,input:i(zn,{name:t("Traitline",{lineNr:k}),id:S}),onChange:u(T),renderValue:I=>i(ja,{id:parseInt(I,10),disableLink:!0,style:{lineHeight:"1 !important"}}),children:r.map(I=>I.id).filter(I=>!o.includes(I.toString())||A===I).map(I=>i(et,{value:String(I),children:i(ja,{id:I,disableLink:!0})},I))})]}),A?i(hf,{id:A,selectable:!0,selected:a[T],onSelect:d(T)}):i("br",{}),D.length>0&&i("div",{children:y(j,{variant:"caption",children:[i(X,{children:"Minors:"})," ",D.map(I=>{const{id:O,gw2id:z,subText:_}=I;return y(Y.Fragment,{children:[z&&i(Zo,{id:z,disableLink:!0})," ",i(j,{variant:"caption",children:_})]},O)})]})}),$.map(I=>{var Z;const{id:O,gw2id:z,minor:_,subText:H,amountData:G}=I,W=_||a[T].includes(z),U=Boolean(s[T][O]),te=(Z=s[T][O])==null?void 0:Z.amount;return y(J,{style:W?{}:c,justifyContent:"space-between",display:"flex",maxWidth:"648px",children:[i(J,{children:i(Tt,{value:O,checked:W&&U,label:y(ge,{children:[z&&i(Zo,{id:z,disableLink:!0})," ",i(j,{variant:"caption",children:t("traitSubText",{context:H})})]}),onChange:p(T,O),disabled:!W})}),G?i(J,{children:i(vt,{placeholder:G.default,endLabel:t("amountLabel",{context:G.label}),handleAmountChange:m(T,O),value:te,disabled:!W||!U,maxWidth:38})}):null]},O)}),E?i(J,{sx:{p:1},maxWidth:"648px",children:i($l,{direction:"row",children:t("traitNote",{context:E})})}):null]},S)}),b=(w=(x=ti[e])==null?void 0:x.find(k=>k.section==="Skills"))==null?void 0:w.note;return y(ge,{children:[b?i(J,{sx:{p:1},maxWidth:"648px",children:i($l,{direction:"row",children:t("traitNote",{context:b})})}):null,f]})},lT=({profession:e,data:n})=>{const t=Ee(),r=q(dc),{t:o}=Se();let a;if(e){const{eliteSpecializations:l}=go.find(c=>c.profession===e);a=n.presetTraits.list.filter(c=>!c.profession||c.profession===e||l.includes(c.profession))}const s=Y.useCallback(l=>{if(!l)return;const c=JSON.parse(l.traits);t(xf(c));const u=JSON.parse(l.skills);t(yf(u))},[t]);return i(An,{first:!0,title:o("Traits"),helpText:y(ge,{children:[i(X,{children:"Select your traits, then select and customize the trait bonuses you want to simulate using the checkboxes below each line. Many bonuses are conditional and may not apply to your setup."}),i(J,{component:"span",sx:{mt:1,display:"block"}}),i(X,{children:"Only the bonuses with checkboxes are applied here, so be sure to change the Skill Coefficients section when changing to/from traits without checkboxes like Lingering Curse or Legendary Lore for accurate results."})]}),content:i(sT,{profession:e}),extraInfo:y(ge,{children:[i(qn,{control:i(eo,{checked:r,onChange:l=>t(wf(l.target.checked)),name:"checked",color:"primary"}),label:o("Show all implemented modifier effects")}),e!==""&&i(Jt,{data:a,handleClick:s,presetCategory:"trait"})]})})};var cT=Y.memo(lT);const un={templates:Lx,presetBuffs:Rx,presetAffixes:Tx,presetDistribution:Ax,presetExtras:Dx,presetInfusions:$x,presetTraits:Ix},uT=()=>{const e=q(Vl),n=q(ho),{t}=Se(),r=t("Select a class or a build template from the menu above!"),o=t("Select a build template from the menu above!");return y(ge,{children:[i(fy,{data:un.templates.list,buffPresets:un.presetBuffs.list,prioritiesPresets:un.presetAffixes.list,distributionPresets:un.presetDistribution.list,extrasPresets:un.presetExtras.list,traitPresets:un.presetTraits.list}),y(J,{children:[n===""&&y(j,{mb:1,children:[i(ai,{}),i("i",{children:e?r:o})," ",i(ai,{})]}),y("div",{style:n===""?{opacity:.5}:{opacity:1},children:[i(he,{container:!0,children:e?y(ge,{children:[i(cT,{profession:n,data:un}),i(Al,{profession:n}),i(ll,{profession:n,data:un}),i(Vs,{data:un}),i(NC,{}),i(dl,{data:un}),i(ul,{}),i(pl,{data:un}),i(u2,{profession:n,data:un}),i(Cy,{})]}):y(ge,{children:[i(Al,{profession:n}),i(ll,{profession:n,data:un}),i(Vs,{first:!0,data:un}),i(dl,{data:un}),i(ul,{}),i(pl,{data:un})]})}),i(a2,{profession:n}),i(JP,{}),i(J,{m:3}),i(FP,{data:un}),i(J,{m:3}),i(tT,{})]})]})]})},dT=({sagaType:e,clearUrlOnSuccess:n})=>{const t=Ee(),[r,o]=Y.useState({open:!1,success:!0,message:""}),a=Cf({key:Bo.BUILD}),s=Y.useCallback(()=>{n&&(Ua({key:Bo.BUILD,value:void 0}),Ua({key:Bo.VERSION,value:void 0})),o(c=>Ne(ue({},c),{open:!0,success:!0,message:"Template successfully loaded!"}))},[n]),l=Y.useCallback(()=>{o(c=>Ne(ue({},c),{open:!0,success:!1,message:"There was an error loading this template!"}))},[]);return Y.useEffect(()=>(a&&(console.log("Imported URL data:",a),t({type:e,buildUrl:a,onSuccess:s,onError:l})),()=>{}),[a,l,s,t,e]),i(ud,{state:r,setState:o})},pT=()=>{const{i18n:e}=Se(),{language:n}=e;return i(Sf,{value:n,children:y(kf,{children:[i(dT,{sagaType:Fn.ImportFormState,clearUrlOnSuccess:!0}),i(Pf,{}),y(xo,{elevation:6,variant:"filled",severity:"warning",children:[i(X,{children:"The gear optimizer is currently in beta! Templates are not final and illusion/summon/mech and lifesteal and condition-on-crit damage is inaccurate. Please report potential issues to us in"})," ",i(ao,{href:"https://discord.gg/Qdt7nFY",color:"textPrimary",target:"_blank",rel:"noopener",children:"Discord"})," ",i(X,{children:"or"})," ",y(ao,{href:"https://github.com/discretize/discretize-gear-optimizer/tree/staging",color:"textPrimary",target:"_blank",rel:"noopener",children:[i(Nc,{fontSize:"small"})," Github"]}),"."]}),i(j,{variant:"h2",sx:{paddingBottom:2},children:i(X,{children:"Gear Optimizer"})}),y(cc,{location:"GearOptimizer",children:[i(uT,{})," "]})]})})},fT=Tf();Rf.render(i(Y.StrictMode,{children:y(Af,{store:fT,children:[i(Df,{styles:$f}),y(If,{theme:Lf,children:[i(Ef,{}),i(pT,{})]})]})}),document.getElementById("root"));
