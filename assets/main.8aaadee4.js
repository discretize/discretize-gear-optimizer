var fd=Object.defineProperty,md=Object.defineProperties;var hd=Object.getOwnPropertyDescriptors;var Br=Object.getOwnPropertySymbols;var Da=Object.prototype.hasOwnProperty,$a=Object.prototype.propertyIsEnumerable;var Aa=(e,n,t)=>n in e?fd(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,ue=(e,n)=>{for(var t in n||(n={}))Da.call(n,t)&&Aa(e,t,n[t]);if(Br)for(var t of Br(n))$a.call(n,t)&&Aa(e,t,n[t]);return e},Ne=(e,n)=>md(e,hd(n));var Er=(e,n)=>{var t={};for(var r in e)Da.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&Br)for(var r of Br(e))n.indexOf(r)<0&&$a.call(e,r)&&(t[r]=e[r]);return t};import{r as S,R as gd,i as kt,_ as g,u as mt,a as yn,s as Bl,b as Bn,o as Rn,j as i,c as fe,P as bd,d as _t,g as ke,e as ye,f as Q,h as w,k as xi,l as we,C as vd,m as I,n as El,p as Ln,q as yi,t as xd,v as Pt,w as _,x as Ce,y as yd,T as Ml,z as Dt,A as mr,B as On,D as Ht,E as Be,F as hr,G as gr,H as wd,I as Bo,J as Mr,K as Ia,L as Lr,M as Cd,N as ho,O as Sd,Q as kr,S as Ll,U as Ol,V as kd,W as wi,X as Ci,Y as U,Z as Pd,$ as Td,a0 as Si,a1 as Rd,a2 as Ad,a3 as Dd,a4 as $d,a5 as Id,a6 as Nl,a7 as Bd,a8 as zl,a9 as Ed,aa as mn,ab as zn,ac as dt,ad as Fn,ae as Md,af as Ld,ag as Fl,ah as Ke,ai as Je,aj as G,ak as Ee,al as pt,am as J,an as _n,ao as _l,ap as q,aq as go,ar as Hl,as as Od,at as Wl,au as Se,av as Nd,aw as bo,ax as zd,ay as et,az as X,aA as he,aB as ge,aC as Vl,aD as Pr,aE as Fd,aF as _d,aG as Ba,aH as Ea,aI as Ma,aJ as Hd,aK as Wd,aL as ki,aM as br,aN as Pi,aO as Vd,aP as jd,aQ as jl,aR as ei,aS as ur,aT as Ul,aU as Ud,aV as qd,aW as ql,aX as Gl,aY as Yl,aZ as Kl,a_ as Gd,a$ as Yd,b0 as Kd,b1 as Pn,b2 as Qd,b3 as Jd,b4 as Xd,b5 as xn,b6 as Eo,b7 as er,b8 as La,b9 as Oa,ba as nt,bb as Zd,bc as Mo,bd as Na,be as ep,bf as np,bg as ni,bh as za,bi as Fa,bj as tp,bk as rp,bl as op,bm as ip,bn as ap,bo as _a,bp as sp,bq as Ti,br as Ze,bs as dr,bt as lp,bu as cp,bv as Tn,bw as Ha,bx as Wa,by as up,bz as dp,bA as nr,bB as no,bC as Va,bD as pp,bE as fp,bF as Ql,bG as mp,bH as hp,bI as ti,bJ as ja,bK as gp,bL as bp,bM as vo,bN as vp,bO as xp,bP as yp,bQ as Jl,bR as Xl,bS as Zl,bT as ec,bU as nc,bV as tc,bW as wp,bX as Cp,bY as Sp,bZ as rc,b_ as kp,b$ as Pp,c0 as Tp,c1 as Rp,c2 as Ap,c3 as Dp,c4 as $p,c5 as Ip,c6 as Ri,c7 as Bp,c8 as Ep,c9 as Mp,ca as Lp,cb as qn,cc as Op,cd as Ua,ce as to,cf as Np,cg as Ft,ch as Ct,ci as zp,cj as Fp,ck as _p,cl as Hp,cm as Wp,cn as oc,co as ic,cp as ac,cq as Vp,cr as jp,cs as Up,ct as qp,cu as Lo,cv as Gp,cw as Yp,cx as sc,cy as Kp,cz as Qp,cA as lc,cB as Jp,cC as Xp,cD as Zp,cE as ef,cF as nf,cG as tf,cH as rf,cI as of,cJ as af,cK as sf,cL as ri,cM as lf,cN as cf,cO as uf,cP as cc,cQ as qa,cR as df,cS as Ga,cT as pf,cU as ff,cV as mf,cW as hf,cX as gf,cY as bf,cZ as vf,c_ as xf,c$ as Ya,d0 as Oo,d1 as yf,d2 as wf,d3 as Cf,d4 as Sf,d5 as kf,d6 as Pf,d7 as Tf,d8 as Rf,d9 as Af,da as Df,db as $f}from"./queryParam.e1a4292b.js";function If(e,n){return()=>null}function Bf(e,n){return()=>null}let Ka=0;function Ef(e){const[n,t]=S.exports.useState(e),r=e||n;return S.exports.useEffect(()=>{n==null&&(Ka+=1,t(`mui-${Ka}`))},[n]),r}const Qa=gd["useId"];function Tr(e){if(Qa!==void 0){const n=Qa();return e!=null?e:n}return Ef(e)}function Mf(e,n,t,r,o){return null}const Lf={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"};var Of=Lf;function lt(e,n={},t){return kt(e)?n:g({},n,{ownerState:g({},n.ownerState,t)})}function Ja(e){return typeof e.normalize!="undefined"?e.normalize("NFD").replace(/[\u0300-\u036f]/g,""):e}function Nf(e={}){const{ignoreAccents:n=!0,ignoreCase:t=!0,limit:r,matchFrom:o="any",stringify:a,trim:s=!1}=e;return(l,{inputValue:c,getOptionLabel:u})=>{let d=s?c.trim():c;t&&(d=d.toLowerCase()),n&&(d=Ja(d));const p=l.filter(m=>{let f=(a||u)(m);return t&&(f=f.toLowerCase()),n&&(f=Ja(f)),o==="start"?f.indexOf(d)===0:f.indexOf(d)>-1});return typeof r=="number"?p.slice(0,r):p}}function No(e,n){for(let t=0;t<e.length;t+=1)if(n(e[t]))return t;return-1}const zf=Nf(),Xa=5;function Ff(e){const{autoComplete:n=!1,autoHighlight:t=!1,autoSelect:r=!1,blurOnSelect:o=!1,disabled:a,clearOnBlur:s=!e.freeSolo,clearOnEscape:l=!1,componentName:c="useAutocomplete",defaultValue:u=e.multiple?[]:null,disableClearable:d=!1,disableCloseOnSelect:p=!1,disabledItemsFocusable:m=!1,disableListWrap:f=!1,filterOptions:b=zf,filterSelectedOptions:v=!1,freeSolo:h=!1,getOptionDisabled:x,getOptionLabel:y=N=>{var M;return(M=N.label)!=null?M:N},isOptionEqualToValue:C=(N,M)=>N===M,groupBy:T,handleHomeEndKeys:R=!e.freeSolo,id:A,includeInputInList:$=!1,inputValue:D,multiple:E=!1,onChange:k,onClose:P,onHighlightChange:L,onInputChange:B,onOpen:O,open:z,openOnFocus:V=!1,options:j,readOnly:K=!1,selectOnFocus:H=!e.freeSolo,value:W}=e,te=Tr(A);let Z=y;Z=N=>{const M=y(N);return typeof M!="string"?String(M):M};const re=S.exports.useRef(!1),de=S.exports.useRef(!0),ce=S.exports.useRef(null),Y=S.exports.useRef(null),[me,be]=S.exports.useState(null),[oe,ae]=S.exports.useState(-1),$e=t?0:-1,We=S.exports.useRef($e),[se,tn]=mt({controlled:W,default:u,name:c}),[Te,an]=mt({controlled:D,default:"",name:c,state:"inputValue"}),[rn,Me]=S.exports.useState(!1),Le=S.exports.useCallback((N,M)=>{if(!(E?se.length<M.length:M!==null)&&!s)return;let ve;if(E)ve="";else if(M==null)ve="";else{const je=Z(M);ve=typeof je=="string"?je:""}Te!==ve&&(an(ve),B&&B(N,ve,"reset"))},[Z,Te,E,B,an,s,se]),Re=S.exports.useRef();S.exports.useEffect(()=>{const N=se!==Re.current;Re.current=se,!(rn&&!N)&&(h&&!N||Le(null,se))},[se,Le,rn,Re,h]);const[Fe,on]=mt({controlled:z,default:!1,name:c,state:"open"}),[Qe,F]=S.exports.useState(!0),ee=!E&&se!=null&&Te===Z(se),ne=Fe&&!K,le=ne?b(j.filter(N=>!(v&&(E?se:[se]).some(M=>M!==null&&C(N,M)))),{inputValue:ee&&Qe?"":Te,getOptionLabel:Z}):[],_e=Fe&&le.length>0&&!K,Ue=yn(N=>{N===-1?ce.current.focus():me.querySelector(`[data-tag-index="${N}"]`).focus()});S.exports.useEffect(()=>{E&&oe>se.length-1&&(ae(-1),Ue(-1))},[se,E,oe,Ue]);function Pe(N,M){if(!Y.current||N===-1)return-1;let pe=N;for(;;){if(M==="next"&&pe===le.length||M==="previous"&&pe===-1)return-1;const ve=Y.current.querySelector(`[data-option-index="${pe}"]`),je=m?!1:!ve||ve.disabled||ve.getAttribute("aria-disabled")==="true";if(ve&&!ve.hasAttribute("tabindex")||je)pe+=M==="next"?1:-1;else return pe}}const De=yn(({event:N,index:M,reason:pe="auto"})=>{if(We.current=M,M===-1?ce.current.removeAttribute("aria-activedescendant"):ce.current.setAttribute("aria-activedescendant",`${te}-option-${M}`),L&&L(N,M===-1?null:le[M],pe),!Y.current)return;const ve=Y.current.querySelector('[role="option"].Mui-focused');ve&&(ve.classList.remove("Mui-focused"),ve.classList.remove("Mui-focusVisible"));const je=Y.current.parentElement.querySelector('[role="listbox"]');if(!je)return;if(M===-1){je.scrollTop=0;return}const cn=Y.current.querySelector(`[data-option-index="${M}"]`);if(!!cn&&(cn.classList.add("Mui-focused"),pe==="keyboard"&&cn.classList.add("Mui-focusVisible"),je.scrollHeight>je.clientHeight&&pe!=="mouse")){const en=cn,Un=je.clientHeight+je.scrollTop,Ra=en.offsetTop+en.offsetHeight;Ra>Un?je.scrollTop=Ra-je.clientHeight:en.offsetTop-en.offsetHeight*(T?1.3:0)<je.scrollTop&&(je.scrollTop=en.offsetTop-en.offsetHeight*(T?1.3:0))}}),xe=yn(({event:N,diff:M,direction:pe="next",reason:ve="auto"})=>{if(!ne)return;const cn=Pe((()=>{const en=le.length-1;if(M==="reset")return $e;if(M==="start")return 0;if(M==="end")return en;const Un=We.current+M;return Un<0?Un===-1&&$?-1:f&&We.current!==-1||Math.abs(M)>1?0:en:Un>en?Un===en+1&&$?-1:f||Math.abs(M)>1?en:0:Un})(),pe);if(De({index:cn,reason:ve,event:N}),n&&M!=="reset")if(cn===-1)ce.current.value=Te;else{const en=Z(le[cn]);ce.current.value=en,en.toLowerCase().indexOf(Te.toLowerCase())===0&&Te.length>0&&ce.current.setSelectionRange(Te.length,en.length)}}),Ve=S.exports.useCallback(()=>{if(!ne)return;const N=E?se[0]:se;if(le.length===0||N==null){xe({diff:"reset"});return}if(!!Y.current){if(N!=null){const M=le[We.current];if(E&&M&&No(se,ve=>C(M,ve))!==-1)return;const pe=No(le,ve=>C(ve,N));pe===-1?xe({diff:"reset"}):De({index:pe});return}if(We.current>=le.length-1){De({index:le.length-1});return}De({index:We.current})}},[le.length,E?!1:se,v,xe,De,ne,Te,E]),sn=yn(N=>{Bl(Y,N),N&&Ve()});S.exports.useEffect(()=>{Ve()},[Ve]);const He=N=>{Fe||(on(!0),F(!0),O&&O(N))},it=(N,M)=>{!Fe||(on(!1),P&&P(N,M))},at=(N,M,pe,ve)=>{if(Array.isArray(se)){if(se.length===M.length&&se.every((je,cn)=>je===M[cn]))return}else if(se===M)return;k&&k(N,M,pe,ve),tn(M)},ln=S.exports.useRef(!1),Ye=(N,M,pe="selectOption",ve="options")=>{let je=pe,cn=M;if(E){cn=Array.isArray(se)?se.slice():[];const en=No(cn,Un=>C(M,Un));en===-1?cn.push(M):ve!=="freeSolo"&&(cn.splice(en,1),je="removeOption")}Le(N,cn),at(N,cn,je,{option:M}),!p&&!N.ctrlKey&&!N.metaKey&&it(N,je),(o===!0||o==="touch"&&ln.current||o==="mouse"&&!ln.current)&&ce.current.blur()};function Nn(N,M){if(N===-1)return-1;let pe=N;for(;;){if(M==="next"&&pe===se.length||M==="previous"&&pe===-1)return-1;const ve=me.querySelector(`[data-tag-index="${pe}"]`);if(!ve||!ve.hasAttribute("tabindex")||ve.disabled||ve.getAttribute("aria-disabled")==="true")pe+=M==="next"?1:-1;else return pe}}const Ao=(N,M)=>{if(!E)return;it(N,"toggleInput");let pe=oe;oe===-1?Te===""&&M==="previous"&&(pe=se.length-1):(pe+=M==="next"?1:-1,pe<0&&(pe=0),pe===se.length&&(pe=-1)),pe=Nn(pe,M),ae(pe),Ue(pe)},Ir=N=>{re.current=!0,an(""),B&&B(N,"","clear"),at(N,E?[]:null,"clear")},ka=N=>M=>{if(N.onKeyDown&&N.onKeyDown(M),!M.defaultMuiPrevented&&(oe!==-1&&["ArrowLeft","ArrowRight"].indexOf(M.key)===-1&&(ae(-1),Ue(-1)),M.which!==229))switch(M.key){case"Home":ne&&R&&(M.preventDefault(),xe({diff:"start",direction:"next",reason:"keyboard",event:M}));break;case"End":ne&&R&&(M.preventDefault(),xe({diff:"end",direction:"previous",reason:"keyboard",event:M}));break;case"PageUp":M.preventDefault(),xe({diff:-Xa,direction:"previous",reason:"keyboard",event:M}),He(M);break;case"PageDown":M.preventDefault(),xe({diff:Xa,direction:"next",reason:"keyboard",event:M}),He(M);break;case"ArrowDown":M.preventDefault(),xe({diff:1,direction:"next",reason:"keyboard",event:M}),He(M);break;case"ArrowUp":M.preventDefault(),xe({diff:-1,direction:"previous",reason:"keyboard",event:M}),He(M);break;case"ArrowLeft":Ao(M,"previous");break;case"ArrowRight":Ao(M,"next");break;case"Enter":if(We.current!==-1&&ne){const pe=le[We.current],ve=x?x(pe):!1;if(M.preventDefault(),ve)return;Ye(M,pe,"selectOption"),n&&ce.current.setSelectionRange(ce.current.value.length,ce.current.value.length)}else h&&Te!==""&&ee===!1&&(E&&M.preventDefault(),Ye(M,Te,"createOption","freeSolo"));break;case"Escape":ne?(M.preventDefault(),M.stopPropagation(),it(M,"escape")):l&&(Te!==""||E&&se.length>0)&&(M.preventDefault(),M.stopPropagation(),Ir(M));break;case"Backspace":if(E&&!K&&Te===""&&se.length>0){const pe=oe===-1?se.length-1:oe,ve=se.slice();ve.splice(pe,1),at(M,ve,"removeOption",{option:se[pe]})}break}},Do=N=>{Me(!0),V&&!re.current&&He(N)},Zt=N=>{if(Y.current!==null&&Y.current.parentElement.contains(document.activeElement)){ce.current.focus();return}Me(!1),de.current=!0,re.current=!1,r&&We.current!==-1&&ne?Ye(N,le[We.current],"blur"):r&&h&&Te!==""?Ye(N,Te,"blur","freeSolo"):s&&Le(N,se),it(N,"blur")},Oe=N=>{const M=N.target.value;Te!==M&&(an(M),F(!1),B&&B(N,M,"input")),M===""?!d&&!E&&at(N,null,"clear"):He(N)},vn=N=>{De({event:N,index:Number(N.currentTarget.getAttribute("data-option-index")),reason:"mouse"})},st=()=>{ln.current=!0},$o=N=>{const M=Number(N.currentTarget.getAttribute("data-option-index"));Ye(N,le[M],"selectOption"),ln.current=!1},cd=N=>M=>{const pe=se.slice();pe.splice(N,1),at(M,pe,"removeOption",{option:se[N]})},Pa=N=>{Fe?it(N,"toggleInput"):He(N)},ud=N=>{N.target.getAttribute("id")!==te&&N.preventDefault()},dd=()=>{ce.current.focus(),H&&de.current&&ce.current.selectionEnd-ce.current.selectionStart===0&&ce.current.select(),de.current=!1},pd=N=>{(Te===""||!Fe)&&Pa(N)};let Io=h&&Te.length>0;Io=Io||(E?se.length>0:se!==null);let Ta=le;return T&&(Ta=le.reduce((N,M,pe)=>{const ve=T(M);return N.length>0&&N[N.length-1].group===ve?N[N.length-1].options.push(M):N.push({key:pe,index:pe,group:ve,options:[M]}),N},[])),a&&rn&&Zt(),{getRootProps:(N={})=>g({"aria-owns":_e?`${te}-listbox`:null},N,{onKeyDown:ka(N),onMouseDown:ud,onClick:dd}),getInputLabelProps:()=>({id:`${te}-label`,htmlFor:te}),getInputProps:()=>({id:te,value:Te,onBlur:Zt,onFocus:Do,onChange:Oe,onMouseDown:pd,"aria-activedescendant":ne?"":null,"aria-autocomplete":n?"both":"list","aria-controls":_e?`${te}-listbox`:void 0,"aria-expanded":_e,autoComplete:"off",ref:ce,autoCapitalize:"none",spellCheck:"false",role:"combobox"}),getClearProps:()=>({tabIndex:-1,onClick:Ir}),getPopupIndicatorProps:()=>({tabIndex:-1,onClick:Pa}),getTagProps:({index:N})=>g({key:N,"data-tag-index":N,tabIndex:-1},!K&&{onDelete:cd(N)}),getListboxProps:()=>({role:"listbox",id:`${te}-listbox`,"aria-labelledby":`${te}-label`,ref:sn,onMouseDown:N=>{N.preventDefault()}}),getOptionProps:({index:N,option:M})=>{const pe=(E?se:[se]).some(je=>je!=null&&C(M,je)),ve=x?x(M):!1;return{key:Z(M),tabIndex:-1,role:"option",id:`${te}-option-${N}`,onMouseOver:vn,onClick:$o,onTouchStart:st,"data-option-index":N,"aria-disabled":ve,"aria-selected":pe}},id:te,inputValue:Te,value:se,dirty:Io,popupOpen:ne,focused:rn||oe!==-1,anchorEl:me,setAnchorEl:be,focusedTag:oe,groupedOptions:Ta}}function Za(e){return e.substring(2).toLowerCase()}function _f(e,n){return n.documentElement.clientWidth<e.clientX||n.documentElement.clientHeight<e.clientY}function uc(e){const{children:n,disableReactTree:t=!1,mouseEvent:r="onClick",onClickAway:o,touchEvent:a="onTouchEnd"}=e,s=S.exports.useRef(!1),l=S.exports.useRef(null),c=S.exports.useRef(!1),u=S.exports.useRef(!1);S.exports.useEffect(()=>(setTimeout(()=>{c.current=!0},0),()=>{c.current=!1}),[]);const d=Bn(n.ref,l),p=yn(b=>{const v=u.current;u.current=!1;const h=Rn(l.current);if(!c.current||!l.current||"clientX"in b&&_f(b,h))return;if(s.current){s.current=!1;return}let x;b.composedPath?x=b.composedPath().indexOf(l.current)>-1:x=!h.documentElement.contains(b.target)||l.current.contains(b.target),!x&&(t||!v)&&o(b)}),m=b=>v=>{u.current=!0;const h=n.props[b];h&&h(v)},f={ref:d};return a!==!1&&(f[a]=m(a)),S.exports.useEffect(()=>{if(a!==!1){const b=Za(a),v=Rn(l.current),h=()=>{s.current=!0};return v.addEventListener(b,p),v.addEventListener("touchmove",h),()=>{v.removeEventListener(b,p),v.removeEventListener("touchmove",h)}}},[p,a]),r!==!1&&(f[r]=m(r)),S.exports.useEffect(()=>{if(r!==!1){const b=Za(r),v=Rn(l.current);return v.addEventListener(b,p),()=>{v.removeEventListener(b,p)}}},[p,r]),i(S.exports.Fragment,{children:S.exports.cloneElement(n,f)})}var Cn="top",En="bottom",Mn="right",Sn="left",Ai="auto",Rr=[Cn,En,Mn,Sn],Wt="start",vr="end",Hf="clippingParents",dc="viewport",tr="popper",Wf="reference",es=Rr.reduce(function(e,n){return e.concat([n+"-"+Wt,n+"-"+vr])},[]),pc=[].concat(Rr,[Ai]).reduce(function(e,n){return e.concat([n,n+"-"+Wt,n+"-"+vr])},[]),Vf="beforeRead",jf="read",Uf="afterRead",qf="beforeMain",Gf="main",Yf="afterMain",Kf="beforeWrite",Qf="write",Jf="afterWrite",Xf=[Vf,jf,Uf,qf,Gf,Yf,Kf,Qf,Jf];function Jn(e){return e?(e.nodeName||"").toLowerCase():null}function jn(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var n=e.ownerDocument;return n&&n.defaultView||window}return e}function Vt(e){var n=jn(e).Element;return e instanceof n||e instanceof Element}function In(e){var n=jn(e).HTMLElement;return e instanceof n||e instanceof HTMLElement}function Di(e){if(typeof ShadowRoot=="undefined")return!1;var n=jn(e).ShadowRoot;return e instanceof n||e instanceof ShadowRoot}function Zf(e){var n=e.state;Object.keys(n.elements).forEach(function(t){var r=n.styles[t]||{},o=n.attributes[t]||{},a=n.elements[t];!In(a)||!Jn(a)||(Object.assign(a.style,r),Object.keys(o).forEach(function(s){var l=o[s];l===!1?a.removeAttribute(s):a.setAttribute(s,l===!0?"":l)}))})}function em(e){var n=e.state,t={popper:{position:n.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(n.elements.popper.style,t.popper),n.styles=t,n.elements.arrow&&Object.assign(n.elements.arrow.style,t.arrow),function(){Object.keys(n.elements).forEach(function(r){var o=n.elements[r],a=n.attributes[r]||{},s=Object.keys(n.styles.hasOwnProperty(r)?n.styles[r]:t[r]),l=s.reduce(function(c,u){return c[u]="",c},{});!In(o)||!Jn(o)||(Object.assign(o.style,l),Object.keys(a).forEach(function(c){o.removeAttribute(c)}))})}}var nm={name:"applyStyles",enabled:!0,phase:"write",fn:Zf,effect:em,requires:["computeStyles"]};function Gn(e){return e.split("-")[0]}var Tt=Math.max,ro=Math.min,jt=Math.round;function Ut(e,n){n===void 0&&(n=!1);var t=e.getBoundingClientRect(),r=1,o=1;if(In(e)&&n){var a=e.offsetHeight,s=e.offsetWidth;s>0&&(r=jt(t.width)/s||1),a>0&&(o=jt(t.height)/a||1)}return{width:t.width/r,height:t.height/o,top:t.top/o,right:t.right/r,bottom:t.bottom/o,left:t.left/r,x:t.left/r,y:t.top/o}}function $i(e){var n=Ut(e),t=e.offsetWidth,r=e.offsetHeight;return Math.abs(n.width-t)<=1&&(t=n.width),Math.abs(n.height-r)<=1&&(r=n.height),{x:e.offsetLeft,y:e.offsetTop,width:t,height:r}}function fc(e,n){var t=n.getRootNode&&n.getRootNode();if(e.contains(n))return!0;if(t&&Di(t)){var r=n;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function tt(e){return jn(e).getComputedStyle(e)}function tm(e){return["table","td","th"].indexOf(Jn(e))>=0}function wt(e){return((Vt(e)?e.ownerDocument:e.document)||window.document).documentElement}function xo(e){return Jn(e)==="html"?e:e.assignedSlot||e.parentNode||(Di(e)?e.host:null)||wt(e)}function ns(e){return!In(e)||tt(e).position==="fixed"?null:e.offsetParent}function rm(e){var n=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,t=navigator.userAgent.indexOf("Trident")!==-1;if(t&&In(e)){var r=tt(e);if(r.position==="fixed")return null}var o=xo(e);for(Di(o)&&(o=o.host);In(o)&&["html","body"].indexOf(Jn(o))<0;){var a=tt(o);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||n&&a.willChange==="filter"||n&&a.filter&&a.filter!=="none")return o;o=o.parentNode}return null}function Ar(e){for(var n=jn(e),t=ns(e);t&&tm(t)&&tt(t).position==="static";)t=ns(t);return t&&(Jn(t)==="html"||Jn(t)==="body"&&tt(t).position==="static")?n:t||rm(e)||n}function Ii(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function pr(e,n,t){return Tt(e,ro(n,t))}function om(e,n,t){var r=pr(e,n,t);return r>t?t:r}function mc(){return{top:0,right:0,bottom:0,left:0}}function hc(e){return Object.assign({},mc(),e)}function gc(e,n){return n.reduce(function(t,r){return t[r]=e,t},{})}var im=function(n,t){return n=typeof n=="function"?n(Object.assign({},t.rects,{placement:t.placement})):n,hc(typeof n!="number"?n:gc(n,Rr))};function am(e){var n,t=e.state,r=e.name,o=e.options,a=t.elements.arrow,s=t.modifiersData.popperOffsets,l=Gn(t.placement),c=Ii(l),u=[Sn,Mn].indexOf(l)>=0,d=u?"height":"width";if(!(!a||!s)){var p=im(o.padding,t),m=$i(a),f=c==="y"?Cn:Sn,b=c==="y"?En:Mn,v=t.rects.reference[d]+t.rects.reference[c]-s[c]-t.rects.popper[d],h=s[c]-t.rects.reference[c],x=Ar(a),y=x?c==="y"?x.clientHeight||0:x.clientWidth||0:0,C=v/2-h/2,T=p[f],R=y-m[d]-p[b],A=y/2-m[d]/2+C,$=pr(T,A,R),D=c;t.modifiersData[r]=(n={},n[D]=$,n.centerOffset=$-A,n)}}function sm(e){var n=e.state,t=e.options,r=t.element,o=r===void 0?"[data-popper-arrow]":r;o!=null&&(typeof o=="string"&&(o=n.elements.popper.querySelector(o),!o)||!fc(n.elements.popper,o)||(n.elements.arrow=o))}var lm={name:"arrow",enabled:!0,phase:"main",fn:am,effect:sm,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function qt(e){return e.split("-")[1]}var cm={top:"auto",right:"auto",bottom:"auto",left:"auto"};function um(e){var n=e.x,t=e.y,r=window,o=r.devicePixelRatio||1;return{x:jt(n*o)/o||0,y:jt(t*o)/o||0}}function ts(e){var n,t=e.popper,r=e.popperRect,o=e.placement,a=e.variation,s=e.offsets,l=e.position,c=e.gpuAcceleration,u=e.adaptive,d=e.roundOffsets,p=e.isFixed,m=s.x,f=m===void 0?0:m,b=s.y,v=b===void 0?0:b,h=typeof d=="function"?d({x:f,y:v}):{x:f,y:v};f=h.x,v=h.y;var x=s.hasOwnProperty("x"),y=s.hasOwnProperty("y"),C=Sn,T=Cn,R=window;if(u){var A=Ar(t),$="clientHeight",D="clientWidth";if(A===jn(t)&&(A=wt(t),tt(A).position!=="static"&&l==="absolute"&&($="scrollHeight",D="scrollWidth")),A=A,o===Cn||(o===Sn||o===Mn)&&a===vr){T=En;var E=p&&A===R&&R.visualViewport?R.visualViewport.height:A[$];v-=E-r.height,v*=c?1:-1}if(o===Sn||(o===Cn||o===En)&&a===vr){C=Mn;var k=p&&A===R&&R.visualViewport?R.visualViewport.width:A[D];f-=k-r.width,f*=c?1:-1}}var P=Object.assign({position:l},u&&cm),L=d===!0?um({x:f,y:v}):{x:f,y:v};if(f=L.x,v=L.y,c){var B;return Object.assign({},P,(B={},B[T]=y?"0":"",B[C]=x?"0":"",B.transform=(R.devicePixelRatio||1)<=1?"translate("+f+"px, "+v+"px)":"translate3d("+f+"px, "+v+"px, 0)",B))}return Object.assign({},P,(n={},n[T]=y?v+"px":"",n[C]=x?f+"px":"",n.transform="",n))}function dm(e){var n=e.state,t=e.options,r=t.gpuAcceleration,o=r===void 0?!0:r,a=t.adaptive,s=a===void 0?!0:a,l=t.roundOffsets,c=l===void 0?!0:l,u={placement:Gn(n.placement),variation:qt(n.placement),popper:n.elements.popper,popperRect:n.rects.popper,gpuAcceleration:o,isFixed:n.options.strategy==="fixed"};n.modifiersData.popperOffsets!=null&&(n.styles.popper=Object.assign({},n.styles.popper,ts(Object.assign({},u,{offsets:n.modifiersData.popperOffsets,position:n.options.strategy,adaptive:s,roundOffsets:c})))),n.modifiersData.arrow!=null&&(n.styles.arrow=Object.assign({},n.styles.arrow,ts(Object.assign({},u,{offsets:n.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),n.attributes.popper=Object.assign({},n.attributes.popper,{"data-popper-placement":n.placement})}var pm={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:dm,data:{}},Or={passive:!0};function fm(e){var n=e.state,t=e.instance,r=e.options,o=r.scroll,a=o===void 0?!0:o,s=r.resize,l=s===void 0?!0:s,c=jn(n.elements.popper),u=[].concat(n.scrollParents.reference,n.scrollParents.popper);return a&&u.forEach(function(d){d.addEventListener("scroll",t.update,Or)}),l&&c.addEventListener("resize",t.update,Or),function(){a&&u.forEach(function(d){d.removeEventListener("scroll",t.update,Or)}),l&&c.removeEventListener("resize",t.update,Or)}}var mm={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:fm,data:{}},hm={left:"right",right:"left",bottom:"top",top:"bottom"};function Qr(e){return e.replace(/left|right|bottom|top/g,function(n){return hm[n]})}var gm={start:"end",end:"start"};function rs(e){return e.replace(/start|end/g,function(n){return gm[n]})}function Bi(e){var n=jn(e),t=n.pageXOffset,r=n.pageYOffset;return{scrollLeft:t,scrollTop:r}}function Ei(e){return Ut(wt(e)).left+Bi(e).scrollLeft}function bm(e){var n=jn(e),t=wt(e),r=n.visualViewport,o=t.clientWidth,a=t.clientHeight,s=0,l=0;return r&&(o=r.width,a=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,l=r.offsetTop)),{width:o,height:a,x:s+Ei(e),y:l}}function vm(e){var n,t=wt(e),r=Bi(e),o=(n=e.ownerDocument)==null?void 0:n.body,a=Tt(t.scrollWidth,t.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=Tt(t.scrollHeight,t.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),l=-r.scrollLeft+Ei(e),c=-r.scrollTop;return tt(o||t).direction==="rtl"&&(l+=Tt(t.clientWidth,o?o.clientWidth:0)-a),{width:a,height:s,x:l,y:c}}function Mi(e){var n=tt(e),t=n.overflow,r=n.overflowX,o=n.overflowY;return/auto|scroll|overlay|hidden/.test(t+o+r)}function bc(e){return["html","body","#document"].indexOf(Jn(e))>=0?e.ownerDocument.body:In(e)&&Mi(e)?e:bc(xo(e))}function fr(e,n){var t;n===void 0&&(n=[]);var r=bc(e),o=r===((t=e.ownerDocument)==null?void 0:t.body),a=jn(r),s=o?[a].concat(a.visualViewport||[],Mi(r)?r:[]):r,l=n.concat(s);return o?l:l.concat(fr(xo(s)))}function oi(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function xm(e){var n=Ut(e);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function os(e,n){return n===dc?oi(bm(e)):Vt(n)?xm(n):oi(vm(wt(e)))}function ym(e){var n=fr(xo(e)),t=["absolute","fixed"].indexOf(tt(e).position)>=0,r=t&&In(e)?Ar(e):e;return Vt(r)?n.filter(function(o){return Vt(o)&&fc(o,r)&&Jn(o)!=="body"}):[]}function wm(e,n,t){var r=n==="clippingParents"?ym(e):[].concat(n),o=[].concat(r,[t]),a=o[0],s=o.reduce(function(l,c){var u=os(e,c);return l.top=Tt(u.top,l.top),l.right=ro(u.right,l.right),l.bottom=ro(u.bottom,l.bottom),l.left=Tt(u.left,l.left),l},os(e,a));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function vc(e){var n=e.reference,t=e.element,r=e.placement,o=r?Gn(r):null,a=r?qt(r):null,s=n.x+n.width/2-t.width/2,l=n.y+n.height/2-t.height/2,c;switch(o){case Cn:c={x:s,y:n.y-t.height};break;case En:c={x:s,y:n.y+n.height};break;case Mn:c={x:n.x+n.width,y:l};break;case Sn:c={x:n.x-t.width,y:l};break;default:c={x:n.x,y:n.y}}var u=o?Ii(o):null;if(u!=null){var d=u==="y"?"height":"width";switch(a){case Wt:c[u]=c[u]-(n[d]/2-t[d]/2);break;case vr:c[u]=c[u]+(n[d]/2-t[d]/2);break}}return c}function xr(e,n){n===void 0&&(n={});var t=n,r=t.placement,o=r===void 0?e.placement:r,a=t.boundary,s=a===void 0?Hf:a,l=t.rootBoundary,c=l===void 0?dc:l,u=t.elementContext,d=u===void 0?tr:u,p=t.altBoundary,m=p===void 0?!1:p,f=t.padding,b=f===void 0?0:f,v=hc(typeof b!="number"?b:gc(b,Rr)),h=d===tr?Wf:tr,x=e.rects.popper,y=e.elements[m?h:d],C=wm(Vt(y)?y:y.contextElement||wt(e.elements.popper),s,c),T=Ut(e.elements.reference),R=vc({reference:T,element:x,strategy:"absolute",placement:o}),A=oi(Object.assign({},x,R)),$=d===tr?A:T,D={top:C.top-$.top+v.top,bottom:$.bottom-C.bottom+v.bottom,left:C.left-$.left+v.left,right:$.right-C.right+v.right},E=e.modifiersData.offset;if(d===tr&&E){var k=E[o];Object.keys(D).forEach(function(P){var L=[Mn,En].indexOf(P)>=0?1:-1,B=[Cn,En].indexOf(P)>=0?"y":"x";D[P]+=k[B]*L})}return D}function Cm(e,n){n===void 0&&(n={});var t=n,r=t.placement,o=t.boundary,a=t.rootBoundary,s=t.padding,l=t.flipVariations,c=t.allowedAutoPlacements,u=c===void 0?pc:c,d=qt(r),p=d?l?es:es.filter(function(b){return qt(b)===d}):Rr,m=p.filter(function(b){return u.indexOf(b)>=0});m.length===0&&(m=p);var f=m.reduce(function(b,v){return b[v]=xr(e,{placement:v,boundary:o,rootBoundary:a,padding:s})[Gn(v)],b},{});return Object.keys(f).sort(function(b,v){return f[b]-f[v]})}function Sm(e){if(Gn(e)===Ai)return[];var n=Qr(e);return[rs(e),n,rs(n)]}function km(e){var n=e.state,t=e.options,r=e.name;if(!n.modifiersData[r]._skip){for(var o=t.mainAxis,a=o===void 0?!0:o,s=t.altAxis,l=s===void 0?!0:s,c=t.fallbackPlacements,u=t.padding,d=t.boundary,p=t.rootBoundary,m=t.altBoundary,f=t.flipVariations,b=f===void 0?!0:f,v=t.allowedAutoPlacements,h=n.options.placement,x=Gn(h),y=x===h,C=c||(y||!b?[Qr(h)]:Sm(h)),T=[h].concat(C).reduce(function(de,ce){return de.concat(Gn(ce)===Ai?Cm(n,{placement:ce,boundary:d,rootBoundary:p,padding:u,flipVariations:b,allowedAutoPlacements:v}):ce)},[]),R=n.rects.reference,A=n.rects.popper,$=new Map,D=!0,E=T[0],k=0;k<T.length;k++){var P=T[k],L=Gn(P),B=qt(P)===Wt,O=[Cn,En].indexOf(L)>=0,z=O?"width":"height",V=xr(n,{placement:P,boundary:d,rootBoundary:p,altBoundary:m,padding:u}),j=O?B?Mn:Sn:B?En:Cn;R[z]>A[z]&&(j=Qr(j));var K=Qr(j),H=[];if(a&&H.push(V[L]<=0),l&&H.push(V[j]<=0,V[K]<=0),H.every(function(de){return de})){E=P,D=!1;break}$.set(P,H)}if(D)for(var W=b?3:1,te=function(ce){var Y=T.find(function(me){var be=$.get(me);if(be)return be.slice(0,ce).every(function(oe){return oe})});if(Y)return E=Y,"break"},Z=W;Z>0;Z--){var re=te(Z);if(re==="break")break}n.placement!==E&&(n.modifiersData[r]._skip=!0,n.placement=E,n.reset=!0)}}var Pm={name:"flip",enabled:!0,phase:"main",fn:km,requiresIfExists:["offset"],data:{_skip:!1}};function is(e,n,t){return t===void 0&&(t={x:0,y:0}),{top:e.top-n.height-t.y,right:e.right-n.width+t.x,bottom:e.bottom-n.height+t.y,left:e.left-n.width-t.x}}function as(e){return[Cn,Mn,En,Sn].some(function(n){return e[n]>=0})}function Tm(e){var n=e.state,t=e.name,r=n.rects.reference,o=n.rects.popper,a=n.modifiersData.preventOverflow,s=xr(n,{elementContext:"reference"}),l=xr(n,{altBoundary:!0}),c=is(s,r),u=is(l,o,a),d=as(c),p=as(u);n.modifiersData[t]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:d,hasPopperEscaped:p},n.attributes.popper=Object.assign({},n.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":p})}var Rm={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Tm};function Am(e,n,t){var r=Gn(e),o=[Sn,Cn].indexOf(r)>=0?-1:1,a=typeof t=="function"?t(Object.assign({},n,{placement:e})):t,s=a[0],l=a[1];return s=s||0,l=(l||0)*o,[Sn,Mn].indexOf(r)>=0?{x:l,y:s}:{x:s,y:l}}function Dm(e){var n=e.state,t=e.options,r=e.name,o=t.offset,a=o===void 0?[0,0]:o,s=pc.reduce(function(d,p){return d[p]=Am(p,n.rects,a),d},{}),l=s[n.placement],c=l.x,u=l.y;n.modifiersData.popperOffsets!=null&&(n.modifiersData.popperOffsets.x+=c,n.modifiersData.popperOffsets.y+=u),n.modifiersData[r]=s}var $m={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Dm};function Im(e){var n=e.state,t=e.name;n.modifiersData[t]=vc({reference:n.rects.reference,element:n.rects.popper,strategy:"absolute",placement:n.placement})}var Bm={name:"popperOffsets",enabled:!0,phase:"read",fn:Im,data:{}};function Em(e){return e==="x"?"y":"x"}function Mm(e){var n=e.state,t=e.options,r=e.name,o=t.mainAxis,a=o===void 0?!0:o,s=t.altAxis,l=s===void 0?!1:s,c=t.boundary,u=t.rootBoundary,d=t.altBoundary,p=t.padding,m=t.tether,f=m===void 0?!0:m,b=t.tetherOffset,v=b===void 0?0:b,h=xr(n,{boundary:c,rootBoundary:u,padding:p,altBoundary:d}),x=Gn(n.placement),y=qt(n.placement),C=!y,T=Ii(x),R=Em(T),A=n.modifiersData.popperOffsets,$=n.rects.reference,D=n.rects.popper,E=typeof v=="function"?v(Object.assign({},n.rects,{placement:n.placement})):v,k=typeof E=="number"?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),P=n.modifiersData.offset?n.modifiersData.offset[n.placement]:null,L={x:0,y:0};if(!!A){if(a){var B,O=T==="y"?Cn:Sn,z=T==="y"?En:Mn,V=T==="y"?"height":"width",j=A[T],K=j+h[O],H=j-h[z],W=f?-D[V]/2:0,te=y===Wt?$[V]:D[V],Z=y===Wt?-D[V]:-$[V],re=n.elements.arrow,de=f&&re?$i(re):{width:0,height:0},ce=n.modifiersData["arrow#persistent"]?n.modifiersData["arrow#persistent"].padding:mc(),Y=ce[O],me=ce[z],be=pr(0,$[V],de[V]),oe=C?$[V]/2-W-be-Y-k.mainAxis:te-be-Y-k.mainAxis,ae=C?-$[V]/2+W+be+me+k.mainAxis:Z+be+me+k.mainAxis,$e=n.elements.arrow&&Ar(n.elements.arrow),We=$e?T==="y"?$e.clientTop||0:$e.clientLeft||0:0,se=(B=P==null?void 0:P[T])!=null?B:0,tn=j+oe-se-We,Te=j+ae-se,an=pr(f?ro(K,tn):K,j,f?Tt(H,Te):H);A[T]=an,L[T]=an-j}if(l){var rn,Me=T==="x"?Cn:Sn,Le=T==="x"?En:Mn,Re=A[R],Fe=R==="y"?"height":"width",on=Re+h[Me],Qe=Re-h[Le],F=[Cn,Sn].indexOf(x)!==-1,ee=(rn=P==null?void 0:P[R])!=null?rn:0,ne=F?on:Re-$[Fe]-D[Fe]-ee+k.altAxis,le=F?Re+$[Fe]+D[Fe]-ee-k.altAxis:Qe,_e=f&&F?om(ne,Re,le):pr(f?ne:on,Re,f?le:Qe);A[R]=_e,L[R]=_e-Re}n.modifiersData[r]=L}}var Lm={name:"preventOverflow",enabled:!0,phase:"main",fn:Mm,requiresIfExists:["offset"]};function Om(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Nm(e){return e===jn(e)||!In(e)?Bi(e):Om(e)}function zm(e){var n=e.getBoundingClientRect(),t=jt(n.width)/e.offsetWidth||1,r=jt(n.height)/e.offsetHeight||1;return t!==1||r!==1}function Fm(e,n,t){t===void 0&&(t=!1);var r=In(n),o=In(n)&&zm(n),a=wt(n),s=Ut(e,o),l={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!t)&&((Jn(n)!=="body"||Mi(a))&&(l=Nm(n)),In(n)?(c=Ut(n,!0),c.x+=n.clientLeft,c.y+=n.clientTop):a&&(c.x=Ei(a))),{x:s.left+l.scrollLeft-c.x,y:s.top+l.scrollTop-c.y,width:s.width,height:s.height}}function _m(e){var n=new Map,t=new Set,r=[];e.forEach(function(a){n.set(a.name,a)});function o(a){t.add(a.name);var s=[].concat(a.requires||[],a.requiresIfExists||[]);s.forEach(function(l){if(!t.has(l)){var c=n.get(l);c&&o(c)}}),r.push(a)}return e.forEach(function(a){t.has(a.name)||o(a)}),r}function Hm(e){var n=_m(e);return Xf.reduce(function(t,r){return t.concat(n.filter(function(o){return o.phase===r}))},[])}function Wm(e){var n;return function(){return n||(n=new Promise(function(t){Promise.resolve().then(function(){n=void 0,t(e())})})),n}}function Vm(e){var n=e.reduce(function(t,r){var o=t[r.name];return t[r.name]=o?Object.assign({},o,r,{options:Object.assign({},o.options,r.options),data:Object.assign({},o.data,r.data)}):r,t},{});return Object.keys(n).map(function(t){return n[t]})}var ss={placement:"bottom",modifiers:[],strategy:"absolute"};function ls(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return!n.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function jm(e){e===void 0&&(e={});var n=e,t=n.defaultModifiers,r=t===void 0?[]:t,o=n.defaultOptions,a=o===void 0?ss:o;return function(l,c,u){u===void 0&&(u=a);var d={placement:"bottom",orderedModifiers:[],options:Object.assign({},ss,a),modifiersData:{},elements:{reference:l,popper:c},attributes:{},styles:{}},p=[],m=!1,f={state:d,setOptions:function(x){var y=typeof x=="function"?x(d.options):x;v(),d.options=Object.assign({},a,d.options,y),d.scrollParents={reference:Vt(l)?fr(l):l.contextElement?fr(l.contextElement):[],popper:fr(c)};var C=Hm(Vm([].concat(r,d.options.modifiers)));return d.orderedModifiers=C.filter(function(T){return T.enabled}),b(),f.update()},forceUpdate:function(){if(!m){var x=d.elements,y=x.reference,C=x.popper;if(!!ls(y,C)){d.rects={reference:Fm(y,Ar(C),d.options.strategy==="fixed"),popper:$i(C)},d.reset=!1,d.placement=d.options.placement,d.orderedModifiers.forEach(function(k){return d.modifiersData[k.name]=Object.assign({},k.data)});for(var T=0;T<d.orderedModifiers.length;T++){if(d.reset===!0){d.reset=!1,T=-1;continue}var R=d.orderedModifiers[T],A=R.fn,$=R.options,D=$===void 0?{}:$,E=R.name;typeof A=="function"&&(d=A({state:d,options:D,name:E,instance:f})||d)}}}},update:Wm(function(){return new Promise(function(h){f.forceUpdate(),h(d)})}),destroy:function(){v(),m=!0}};if(!ls(l,c))return f;f.setOptions(u).then(function(h){!m&&u.onFirstUpdate&&u.onFirstUpdate(h)});function b(){d.orderedModifiers.forEach(function(h){var x=h.name,y=h.options,C=y===void 0?{}:y,T=h.effect;if(typeof T=="function"){var R=T({state:d,name:x,instance:f,options:C}),A=function(){};p.push(R||A)}})}function v(){p.forEach(function(h){return h()}),p=[]}return f}}var Um=[mm,Bm,pm,nm,$m,Pm,Lm,lm,Rm],qm=jm({defaultModifiers:Um});const Gm=["anchorEl","children","direction","disablePortal","modifiers","open","ownerState","placement","popperOptions","popperRef","TransitionProps"],Ym=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function Km(e,n){if(n==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function ii(e){return typeof e=="function"?e():e}const Qm={},Jm=S.exports.forwardRef(function(n,t){const{anchorEl:r,children:o,direction:a,disablePortal:s,modifiers:l,open:c,placement:u,popperOptions:d,popperRef:p,TransitionProps:m}=n,f=fe(n,Gm),b=S.exports.useRef(null),v=Bn(b,t),h=S.exports.useRef(null),x=Bn(h,p),y=S.exports.useRef(x);_t(()=>{y.current=x},[x]),S.exports.useImperativeHandle(p,()=>h.current,[]);const C=Km(u,a),[T,R]=S.exports.useState(C);S.exports.useEffect(()=>{h.current&&h.current.forceUpdate()}),_t(()=>{if(!r||!c)return;const $=k=>{R(k.placement)};ii(r);let D=[{name:"preventOverflow",options:{altBoundary:s}},{name:"flip",options:{altBoundary:s}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:k})=>{$(k)}}];l!=null&&(D=D.concat(l)),d&&d.modifiers!=null&&(D=D.concat(d.modifiers));const E=qm(ii(r),b.current,g({placement:C},d,{modifiers:D}));return y.current(E),()=>{E.destroy(),y.current(null)}},[r,s,l,c,d,C]);const A={placement:T};return m!==null&&(A.TransitionProps=m),i("div",g({ref:v,role:"tooltip"},f,{children:typeof o=="function"?o(A):o}))}),Xm=S.exports.forwardRef(function(n,t){const{anchorEl:r,children:o,container:a,direction:s="ltr",disablePortal:l=!1,keepMounted:c=!1,modifiers:u,open:d,placement:p="bottom",popperOptions:m=Qm,popperRef:f,style:b,transition:v=!1}=n,h=fe(n,Ym),[x,y]=S.exports.useState(!0),C=()=>{y(!1)},T=()=>{y(!0)};if(!c&&!d&&(!v||x))return null;const R=a||(r?Rn(ii(r)).body:void 0);return i(bd,{disablePortal:l,container:R,children:i(Jm,g({anchorEl:r,direction:s,disablePortal:l,modifiers:u,ref:t,open:v?!x:d,placement:p,popperOptions:m,popperRef:f},h,{style:g({position:"fixed",top:0,left:0,display:!d&&c&&(!v||x)?"none":null},b),TransitionProps:v?{in:d,onEnter:C,onExited:T}:null,children:o}))})});var Zm=Xm;function eh(e){const{children:n,defer:t=!1,fallback:r=null}=e,[o,a]=S.exports.useState(!1);return _t(()=>{t||a(!0)},[t]),S.exports.useEffect(()=>{t&&a(!0)},[t]),i(S.exports.Fragment,{children:o?n:r})}function sr(e){return ke("MuiSlider",e)}const nh=ye("MuiSlider",["root","active","focusVisible","disabled","dragging","marked","vertical","trackInverted","trackFalse","rail","track","mark","markActive","markLabel","markLabelActive","thumb","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel"]);var Jr=nh;const th=e=>{const{open:n}=e;return{offset:Q(n&&Jr.valueLabelOpen),circle:Jr.valueLabelCircle,label:Jr.valueLabelLabel}};function xc(e){const{children:n,className:t,value:r,theme:o}=e,a=th(e);return S.exports.cloneElement(n,{className:Q(n.props.className)},w(S.exports.Fragment,{children:[n.props.children,i("span",{className:Q(a.offset,t),theme:o,"aria-hidden":!0,children:i("span",{className:a.circle,children:i("span",{className:a.label,children:r})})})]}))}const rh=2;function yc(e,n){return e-n}function rr(e,n,t){return e==null?n:Math.min(Math.max(n,e),t)}function cs(e,n){var t;const{index:r}=(t=e.reduce((o,a,s)=>{const l=Math.abs(n-a);return o===null||l<o.distance||l===o.distance?{distance:l,index:s}:o},null))!=null?t:{};return r}function Nr(e,n){if(n.current!==void 0&&e.changedTouches){const t=e;for(let r=0;r<t.changedTouches.length;r+=1){const o=t.changedTouches[r];if(o.identifier===n.current)return{x:o.clientX,y:o.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function oo(e,n,t){return(e-n)*100/(t-n)}function oh(e,n,t){return(t-n)*e+n}function ih(e){if(Math.abs(e)<1){const t=e.toExponential().split("e-"),r=t[0].split(".")[1];return(r?r.length:0)+parseInt(t[1],10)}const n=e.toString().split(".")[1];return n?n.length:0}function ah(e,n,t){const r=Math.round((e-t)/n)*n+t;return Number(r.toFixed(ih(n)))}function us({values:e,newValue:n,index:t}){const r=e.slice();return r[t]=n,r.sort(yc)}function zr({sliderRef:e,activeIndex:n,setActive:t}){var r,o;const a=Rn(e.current);if(!((r=e.current)!=null&&r.contains(a.activeElement))||Number(a==null||(o=a.activeElement)==null?void 0:o.getAttribute("data-index"))!==n){var s;(s=e.current)==null||s.querySelector(`[type="range"][data-index="${n}"]`).focus()}t&&t(n)}const sh={horizontal:{offset:e=>({left:`${e}%`}),leap:e=>({width:`${e}%`})},"horizontal-reverse":{offset:e=>({right:`${e}%`}),leap:e=>({width:`${e}%`})},vertical:{offset:e=>({bottom:`${e}%`}),leap:e=>({height:`${e}%`})}},lh=e=>e;let Fr;function zo(){return Fr===void 0&&(typeof CSS!="undefined"&&typeof CSS.supports=="function"?Fr=CSS.supports("touch-action","none"):Fr=!0),Fr}function ch(e){const{ref:n,"aria-labelledby":t,defaultValue:r,disableSwap:o=!1,disabled:a=!1,marks:s=!1,max:l=100,min:c=0,name:u,onChange:d,onChangeCommitted:p,orientation:m="horizontal",scale:f=lh,step:b=1,tabIndex:v,value:h,isRtl:x=!1}=e,y=S.exports.useRef(),[C,T]=S.exports.useState(-1),[R,A]=S.exports.useState(-1),[$,D]=S.exports.useState(!1),E=S.exports.useRef(0),[k,P]=mt({controlled:h,default:r!=null?r:c,name:"Slider"}),L=d&&((F,ee,ne)=>{const le=F.nativeEvent||F,_e=new le.constructor(le.type,le);Object.defineProperty(_e,"target",{writable:!0,value:{value:ee,name:u}}),d(_e,ee,ne)}),B=Array.isArray(k);let O=B?k.slice().sort(yc):[k];O=O.map(F=>rr(F,c,l));const z=s===!0&&b!==null?[...Array(Math.floor((l-c)/b)+1)].map((F,ee)=>({value:c+b*ee})):s||[],V=z.map(F=>F.value),{isFocusVisibleRef:j,onBlur:K,onFocus:H,ref:W}=xi(),[te,Z]=S.exports.useState(-1),re=S.exports.useRef(),de=Bn(W,re),ce=Bn(n,de),Y=F=>ee=>{var ne;const le=Number(ee.currentTarget.getAttribute("data-index"));H(ee),j.current===!0&&Z(le),A(le),F==null||(ne=F.onFocus)==null||ne.call(F,ee)},me=F=>ee=>{var ne;K(ee),j.current===!1&&Z(-1),A(-1),F==null||(ne=F.onBlur)==null||ne.call(F,ee)};_t(()=>{if(a&&re.current.contains(document.activeElement)){var F;(F=document.activeElement)==null||F.blur()}},[a]),a&&C!==-1&&T(-1),a&&te!==-1&&Z(-1);const be=F=>ee=>{var ne;(ne=F.onChange)==null||ne.call(F,ee);const le=Number(ee.currentTarget.getAttribute("data-index")),_e=O[le],Ue=V.indexOf(_e);let Pe=ee.target.valueAsNumber;if(z&&b==null&&(Pe=Pe<_e?V[Ue-1]:V[Ue+1]),Pe=rr(Pe,c,l),z&&b==null){const De=V.indexOf(O[le]);Pe=Pe<O[le]?V[De-1]:V[De+1]}if(B){o&&(Pe=rr(Pe,O[le-1]||-1/0,O[le+1]||1/0));const De=Pe;Pe=us({values:O,newValue:Pe,index:le});let xe=le;o||(xe=Pe.indexOf(De)),zr({sliderRef:re,activeIndex:xe})}P(Pe),Z(le),L&&L(ee,Pe,le),p&&p(ee,Pe)},oe=S.exports.useRef();let ae=m;x&&m==="horizontal"&&(ae+="-reverse");const $e=({finger:F,move:ee=!1,values:ne})=>{const{current:le}=re,{width:_e,height:Ue,bottom:Pe,left:De}=le.getBoundingClientRect();let xe;ae.indexOf("vertical")===0?xe=(Pe-F.y)/Ue:xe=(F.x-De)/_e,ae.indexOf("-reverse")!==-1&&(xe=1-xe);let Ve;if(Ve=oh(xe,c,l),b)Ve=ah(Ve,b,c);else{const He=cs(V,Ve);Ve=V[He]}Ve=rr(Ve,c,l);let sn=0;if(B){ee?sn=oe.current:sn=cs(ne,Ve),o&&(Ve=rr(Ve,ne[sn-1]||-1/0,ne[sn+1]||1/0));const He=Ve;Ve=us({values:ne,newValue:Ve,index:sn}),o&&ee||(sn=Ve.indexOf(He),oe.current=sn)}return{newValue:Ve,activeIndex:sn}},We=yn(F=>{const ee=Nr(F,y);if(!ee)return;if(E.current+=1,F.type==="mousemove"&&F.buttons===0){se(F);return}const{newValue:ne,activeIndex:le}=$e({finger:ee,move:!0,values:O});zr({sliderRef:re,activeIndex:le,setActive:T}),P(ne),!$&&E.current>rh&&D(!0),L&&L(F,ne,le)}),se=yn(F=>{const ee=Nr(F,y);if(D(!1),!ee)return;const{newValue:ne}=$e({finger:ee,values:O});T(-1),F.type==="touchend"&&A(-1),p&&p(F,ne),y.current=void 0,Te()}),tn=yn(F=>{if(a)return;zo()||F.preventDefault();const ee=F.changedTouches[0];ee!=null&&(y.current=ee.identifier);const ne=Nr(F,y);if(ne!==!1){const{newValue:_e,activeIndex:Ue}=$e({finger:ne,values:O});zr({sliderRef:re,activeIndex:Ue,setActive:T}),P(_e),L&&L(F,_e,Ue)}E.current=0;const le=Rn(re.current);le.addEventListener("touchmove",We),le.addEventListener("touchend",se)}),Te=S.exports.useCallback(()=>{const F=Rn(re.current);F.removeEventListener("mousemove",We),F.removeEventListener("mouseup",se),F.removeEventListener("touchmove",We),F.removeEventListener("touchend",se)},[se,We]);S.exports.useEffect(()=>{const{current:F}=re;return F.addEventListener("touchstart",tn,{passive:zo()}),()=>{F.removeEventListener("touchstart",tn,{passive:zo()}),Te()}},[Te,tn]),S.exports.useEffect(()=>{a&&Te()},[a,Te]);const an=F=>ee=>{var ne;if((ne=F.onMouseDown)==null||ne.call(F,ee),a||ee.defaultPrevented||ee.button!==0)return;ee.preventDefault();const le=Nr(ee,y);if(le!==!1){const{newValue:Ue,activeIndex:Pe}=$e({finger:le,values:O});zr({sliderRef:re,activeIndex:Pe,setActive:T}),P(Ue),L&&L(ee,Ue,Pe)}E.current=0;const _e=Rn(re.current);_e.addEventListener("mousemove",We),_e.addEventListener("mouseup",se)},rn=oo(B?O[0]:c,c,l),Me=oo(O[O.length-1],c,l)-rn,Le=F=>{const ee={onMouseDown:an(F||{})},ne=g({},F,ee);return g({ref:ce},ne)},Re=F=>ee=>{var ne;(ne=F.onMouseOver)==null||ne.call(F,ee);const le=Number(ee.currentTarget.getAttribute("data-index"));A(le)},Fe=F=>ee=>{var ne;(ne=F.onMouseLeave)==null||ne.call(F,ee),A(-1)};return{axis:ae,axisProps:sh,getRootProps:Le,getHiddenInputProps:F=>{const ee={onChange:be(F||{}),onFocus:Y(F||{}),onBlur:me(F||{})},ne=g({},F,ee);return g({tabIndex:v,"aria-labelledby":t,"aria-orientation":m,"aria-valuemax":f(l),"aria-valuemin":f(c),name:u,type:"range",min:e.min,max:e.max,step:e.step,disabled:a},ne,{style:g({},Of,{direction:x?"rtl":"ltr",width:"100%",height:"100%"})})},getThumbProps:F=>{const ee={onMouseOver:Re(F||{}),onMouseLeave:Fe(F||{})},ne=g({},F,ee);return g({},ne)},dragging:$,marks:z,values:O,active:C,focusVisible:te,open:R,range:B,trackOffset:rn,trackLeap:Me}}const uh=["aria-label","aria-valuetext","className","component","classes","disableSwap","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","onMouseDown","orientation","scale","step","tabIndex","track","value","valueLabelDisplay","valueLabelFormat","isRtl","components","componentsProps"],ds=e=>e,dh=e=>{const{disabled:n,dragging:t,marked:r,orientation:o,track:a,classes:s}=e;return we({root:["root",n&&"disabled",t&&"dragging",r&&"marked",o==="vertical"&&"vertical",a==="inverted"&&"trackInverted",a===!1&&"trackFalse"],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",n&&"disabled"],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]},sr,s)},ph=({children:e})=>e,fh=S.exports.forwardRef(function(n,t){var r,o,a,s,l,c,u;const{"aria-label":d,"aria-valuetext":p,className:m,component:f,classes:b,disableSwap:v=!1,disabled:h=!1,getAriaLabel:x,getAriaValueText:y,marks:C=!1,max:T=100,min:R=0,onMouseDown:A,orientation:$="horizontal",scale:D=ds,step:E=1,track:k="normal",valueLabelDisplay:P="off",valueLabelFormat:L=ds,isRtl:B=!1,components:O={},componentsProps:z={}}=n,V=fe(n,uh),j=g({},n,{mark:C,classes:b,disabled:h,isRtl:B,max:T,min:R,orientation:$,scale:D,step:E,track:k,valueLabelDisplay:P,valueLabelFormat:L}),{axisProps:K,getRootProps:H,getHiddenInputProps:W,getThumbProps:te,open:Z,active:re,axis:de,range:ce,focusVisible:Y,dragging:me,marks:be,values:oe,trackOffset:ae,trackLeap:$e}=ch(g({},j,{ref:t}));j.marked=be.length>0&&be.some(De=>De.label),j.dragging=me;const We=(r=f!=null?f:O.Root)!=null?r:"span",se=lt(We,g({},V,z.root),j),tn=(o=O.Rail)!=null?o:"span",Te=lt(tn,z.rail,j),an=(a=O.Track)!=null?a:"span",rn=lt(an,z.track,j),Me=g({},K[de].offset(ae),K[de].leap($e)),Le=(s=O.Thumb)!=null?s:"span",Re=lt(Le,z.thumb,j),Fe=(l=O.ValueLabel)!=null?l:xc,on=lt(Fe,z.valueLabel,j),Qe=(c=O.Mark)!=null?c:"span",F=lt(Qe,z.mark,j),ee=(u=O.MarkLabel)!=null?u:"span",ne=lt(ee,z.markLabel,j),le=O.Input||"input",_e=lt(le,z.input,j),Ue=W(),Pe=dh(j);return w(We,g({},se,H({onMouseDown:A}),{className:Q(Pe.root,se.className,m),children:[i(tn,g({},Te,{className:Q(Pe.rail,Te.className)})),i(an,g({},rn,{className:Q(Pe.track,rn.className),style:g({},Me,rn.style)})),be.map((De,xe)=>{const Ve=oo(De.value,R,T),sn=K[de].offset(Ve);let He;return k===!1?He=oe.indexOf(De.value)!==-1:He=k==="normal"&&(ce?De.value>=oe[0]&&De.value<=oe[oe.length-1]:De.value<=oe[0])||k==="inverted"&&(ce?De.value<=oe[0]||De.value>=oe[oe.length-1]:De.value>=oe[0]),w(S.exports.Fragment,{children:[i(Qe,g({"data-index":xe},F,!kt(Qe)&&{markActive:He},{style:g({},sn,F.style),className:Q(Pe.mark,F.className,He&&Pe.markActive)})),De.label!=null?i(ee,g({"aria-hidden":!0,"data-index":xe},ne,!kt(ee)&&{markLabelActive:He},{style:g({},sn,ne.style),className:Q(Pe.markLabel,ne.className,He&&Pe.markLabelActive),children:De.label})):null]},De.value)}),oe.map((De,xe)=>{const Ve=oo(De,R,T),sn=K[de].offset(Ve),He=P==="off"?ph:Fe;return i(S.exports.Fragment,{children:i(He,g({},!kt(He)&&{valueLabelFormat:L,valueLabelDisplay:P,value:typeof L=="function"?L(D(De),xe):L,index:xe,open:Z===xe||re===xe||P==="on",disabled:h},on,{className:Q(Pe.valueLabel,on.className),children:i(Le,g({"data-index":xe},Re,te(),{className:Q(Pe.thumb,Re.className,re===xe&&Pe.active,Y===xe&&Pe.focusVisible)},!kt(Le)&&{ownerState:g({},j,Re.ownerState)},{style:g({},sn,{pointerEvents:v&&re!==xe?"none":void 0},Re.style),children:i(le,g({},Ue,{"data-index":xe,"aria-label":x?x(xe):d,"aria-valuenow":D(De),"aria-valuetext":y?y(D(De),xe):p,value:oe[xe]},!kt(le)&&{ownerState:g({},j,_e.ownerState)},_e,{style:g({},Ue.style,_e.style)}))}))}))},xe)})]}))});var mh=fh;const hh={configure:e=>{console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)),vd.configure(e)}};var gh=Object.freeze(Object.defineProperty({__proto__:null,unstable_ClassNameGenerator:hh,capitalize:I,createChainedFunction:El,createSvgIcon:Ln,debounce:yi,deprecatedPropType:If,isMuiElement:xd,ownerDocument:Rn,ownerWindow:Pt,requirePropFactory:Bf,setRef:Bl,unstable_useEnhancedEffect:_t,unstable_useId:Tr,unsupportedProp:Mf,useControlled:mt,useEventCallback:yn,useForkRef:Bn,useIsFocusVisible:xi},Symbol.toStringTag,{value:"Module"}));function bh(e){return ke("MuiCollapse",e)}ye("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const vh=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],xh=e=>{const{orientation:n,classes:t}=e,r={root:["root",`${n}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${n}`],wrapperInner:["wrapperInner",`${n}`]};return we(r,bh,t)},yh=_("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[t.orientation],t.state==="entered"&&n.entered,t.state==="exited"&&!t.in&&t.collapsedSize==="0px"&&n.hidden]}})(({theme:e,ownerState:n})=>g({height:0,overflow:"hidden",transition:e.transitions.create("height")},n.orientation==="horizontal"&&{height:"auto",width:0,transition:e.transitions.create("width")},n.state==="entered"&&g({height:"auto",overflow:"visible"},n.orientation==="horizontal"&&{width:"auto"}),n.state==="exited"&&!n.in&&n.collapsedSize==="0px"&&{visibility:"hidden"})),wh=_("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,n)=>n.wrapper})(({ownerState:e})=>g({display:"flex",width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),Ch=_("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,n)=>n.wrapperInner})(({ownerState:e})=>g({width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),wc=S.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiCollapse"}),{addEndListener:o,children:a,className:s,collapsedSize:l="0px",component:c,easing:u,in:d,onEnter:p,onEntered:m,onEntering:f,onExit:b,onExited:v,onExiting:h,orientation:x="vertical",style:y,timeout:C=yd.standard,TransitionComponent:T=Ml}=r,R=fe(r,vh),A=g({},r,{orientation:x,collapsedSize:l}),$=xh(A),D=Dt(),E=S.exports.useRef(),k=S.exports.useRef(null),P=S.exports.useRef(),L=typeof l=="number"?`${l}px`:l,B=x==="horizontal",O=B?"width":"height";S.exports.useEffect(()=>()=>{clearTimeout(E.current)},[]);const z=S.exports.useRef(null),V=Bn(t,z),j=Y=>me=>{if(Y){const be=z.current;me===void 0?Y(be):Y(be,me)}},K=()=>k.current?k.current[B?"clientWidth":"clientHeight"]:0,H=j((Y,me)=>{k.current&&B&&(k.current.style.position="absolute"),Y.style[O]=L,p&&p(Y,me)}),W=j((Y,me)=>{const be=K();k.current&&B&&(k.current.style.position="");const{duration:oe,easing:ae}=mr({style:y,timeout:C,easing:u},{mode:"enter"});if(C==="auto"){const $e=D.transitions.getAutoHeightDuration(be);Y.style.transitionDuration=`${$e}ms`,P.current=$e}else Y.style.transitionDuration=typeof oe=="string"?oe:`${oe}ms`;Y.style[O]=`${be}px`,Y.style.transitionTimingFunction=ae,f&&f(Y,me)}),te=j((Y,me)=>{Y.style[O]="auto",m&&m(Y,me)}),Z=j(Y=>{Y.style[O]=`${K()}px`,b&&b(Y)}),re=j(v),de=j(Y=>{const me=K(),{duration:be,easing:oe}=mr({style:y,timeout:C,easing:u},{mode:"exit"});if(C==="auto"){const ae=D.transitions.getAutoHeightDuration(me);Y.style.transitionDuration=`${ae}ms`,P.current=ae}else Y.style.transitionDuration=typeof be=="string"?be:`${be}ms`;Y.style[O]=L,Y.style.transitionTimingFunction=oe,h&&h(Y)});return i(T,g({in:d,onEnter:H,onEntered:te,onEntering:W,onExit:Z,onExited:re,onExiting:de,addEndListener:Y=>{C==="auto"&&(E.current=setTimeout(Y,P.current||0)),o&&o(z.current,Y)},nodeRef:z,timeout:C==="auto"?null:C},R,{children:(Y,me)=>i(yh,g({as:c,className:Q($.root,s,{entered:$.entered,exited:!d&&L==="0px"&&$.hidden}[Y]),style:g({[B?"minWidth":"minHeight"]:L},y),ownerState:g({},A,{state:Y}),ref:V},me,{children:i(wh,{ownerState:g({},A,{state:Y}),className:$.wrapper,ref:k,children:i(Ch,{ownerState:g({},A,{state:Y}),className:$.wrapperInner,children:a})})}))}))});wc.muiSupportAuto=!0;var Sh=wc;const kh=S.exports.createContext({});var Cc=kh;function Ph(e){return ke("MuiAccordion",e)}const Th=ye("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]);var _r=Th;const Rh=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],Ah=e=>{const{classes:n,square:t,expanded:r,disabled:o,disableGutters:a}=e;return we({root:["root",!t&&"rounded",r&&"expanded",o&&"disabled",!a&&"gutters"],region:["region"]},Ph,n)},Dh=_(On,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[{[`& .${_r.region}`]:n.region},n.root,!t.square&&n.rounded,!t.disableGutters&&n.gutters]}})(({theme:e})=>{const n={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],n),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],n)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${_r.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${_r.disabled}`]:{backgroundColor:e.palette.action.disabledBackground}}},({theme:e,ownerState:n})=>g({},!n.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!n.disableGutters&&{[`&.${_r.expanded}`]:{margin:"16px 0"}})),$h=S.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiAccordion"}),{children:o,className:a,defaultExpanded:s=!1,disabled:l=!1,disableGutters:c=!1,expanded:u,onChange:d,square:p=!1,TransitionComponent:m=Sh,TransitionProps:f}=r,b=fe(r,Rh),[v,h]=mt({controlled:u,default:s,name:"Accordion",state:"expanded"}),x=S.exports.useCallback($=>{h(!v),d&&d($,!v)},[v,d,h]),[y,...C]=S.exports.Children.toArray(o),T=S.exports.useMemo(()=>({expanded:v,disabled:l,disableGutters:c,toggle:x}),[v,l,c,x]),R=g({},r,{square:p,disabled:l,disableGutters:c,expanded:v}),A=Ah(R);return w(Dh,g({className:Q(A.root,a),ref:t,ownerState:R,square:p},b,{children:[i(Cc.Provider,{value:T,children:y}),i(m,g({in:v,timeout:"auto"},f,{children:i("div",{"aria-labelledby":y.props.id,id:y.props["aria-controls"],role:"region",className:A.region,children:C})}))]}))});var Yt=$h;function Ih(e){return ke("MuiAccordionDetails",e)}ye("MuiAccordionDetails",["root"]);const Bh=["className"],Eh=e=>{const{classes:n}=e;return we({root:["root"]},Ih,n)},Mh=_("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,n)=>n.root})(({theme:e})=>({padding:e.spacing(1,2,2)})),Lh=S.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiAccordionDetails"}),{className:o}=r,a=fe(r,Bh),s=r,l=Eh(s);return i(Mh,g({className:Q(l.root,o),ref:t,ownerState:s},a))});var Kt=Lh;function Oh(e){return ke("MuiAccordionSummary",e)}const Nh=ye("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]);var Lt=Nh;const zh=["children","className","expandIcon","focusVisibleClassName","onClick"],Fh=e=>{const{classes:n,expanded:t,disabled:r,disableGutters:o}=e;return we({root:["root",t&&"expanded",r&&"disabled",!o&&"gutters"],focusVisible:["focusVisible"],content:["content",t&&"expanded",!o&&"contentGutters"],expandIconWrapper:["expandIconWrapper",t&&"expanded"]},Oh,n)},_h=_(Ht,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,n)=>n.root})(({theme:e,ownerState:n})=>{const t={duration:e.transitions.duration.shortest};return g({display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],t),[`&.${Lt.focusVisible}`]:{backgroundColor:e.palette.action.focus},[`&.${Lt.disabled}`]:{opacity:e.palette.action.disabledOpacity},[`&:hover:not(.${Lt.disabled})`]:{cursor:"pointer"}},!n.disableGutters&&{[`&.${Lt.expanded}`]:{minHeight:64}})}),Hh=_("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,n)=>n.content})(({theme:e,ownerState:n})=>g({display:"flex",flexGrow:1,margin:"12px 0"},!n.disableGutters&&{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${Lt.expanded}`]:{margin:"20px 0"}})),Wh=_("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,n)=>n.expandIconWrapper})(({theme:e})=>({display:"flex",color:e.palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${Lt.expanded}`]:{transform:"rotate(180deg)"}})),Vh=S.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiAccordionSummary"}),{children:o,className:a,expandIcon:s,focusVisibleClassName:l,onClick:c}=r,u=fe(r,zh),{disabled:d=!1,disableGutters:p,expanded:m,toggle:f}=S.exports.useContext(Cc),b=x=>{f&&f(x),c&&c(x)},v=g({},r,{expanded:m,disabled:d,disableGutters:p}),h=Fh(v);return w(_h,g({focusRipple:!1,disableRipple:!0,disabled:d,component:"div","aria-expanded":m,className:Q(h.root,a),focusVisibleClassName:Q(h.focusVisible,l),onClick:b,ref:t,ownerState:v},u,{children:[i(Hh,{className:h.content,ownerState:v,children:o}),s&&i(Wh,{className:h.expandIconWrapper,ownerState:v,children:s})]}))});var Qt=Vh;function jh(e){return ke("MuiAlert",e)}const Uh=ye("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]);var ps=Uh;function qh(e){return ke("MuiIconButton",e)}const Gh=ye("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]);var Yh=Gh;const Kh=["edge","children","className","color","disabled","disableFocusRipple","size"],Qh=e=>{const{classes:n,disabled:t,color:r,edge:o,size:a}=e,s={root:["root",t&&"disabled",r!=="default"&&`color${I(r)}`,o&&`edge${I(o)}`,`size${I(a)}`]};return we(s,qh,n)},Jh=_(Ht,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.color!=="default"&&n[`color${I(t.color)}`],t.edge&&n[`edge${I(t.edge)}`],n[`size${I(t.size)}`]]}})(({theme:e,ownerState:n})=>g({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!n.disableRipple&&{"&:hover":{backgroundColor:Be(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},n.edge==="start"&&{marginLeft:n.size==="small"?-3:-12},n.edge==="end"&&{marginRight:n.size==="small"?-3:-12}),({theme:e,ownerState:n})=>g({},n.color==="inherit"&&{color:"inherit"},n.color!=="inherit"&&n.color!=="default"&&g({color:e.palette[n.color].main},!n.disableRipple&&{"&:hover":{backgroundColor:Be(e.palette[n.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),n.size==="small"&&{padding:5,fontSize:e.typography.pxToRem(18)},n.size==="large"&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${Yh.disabled}`]:{backgroundColor:"transparent",color:e.palette.action.disabled}})),Xh=S.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiIconButton"}),{edge:o=!1,children:a,className:s,color:l="default",disabled:c=!1,disableFocusRipple:u=!1,size:d="medium"}=r,p=fe(r,Kh),m=g({},r,{edge:o,color:l,disabled:c,disableFocusRipple:u,size:d}),f=Qh(m);return i(Jh,g({className:Q(f.root,s),centerRipple:!0,focusRipple:!u,disabled:c,ref:t,ownerState:m},p,{children:a}))});var Wn=Xh,Zh=Ln(i("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),eg=Ln(i("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),ng=Ln(i("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),tg=Ln(i("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),Sc=Ln(i("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),fs;const rg=["action","children","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"],og=e=>{const{variant:n,color:t,severity:r,classes:o}=e,a={root:["root",`${n}${I(t||r)}`,`${n}`],icon:["icon"],message:["message"],action:["action"]};return we(a,jh,o)},ig=_(On,{name:"MuiAlert",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[t.variant],n[`${t.variant}${I(t.color||t.severity)}`]]}})(({theme:e,ownerState:n})=>{const t=e.palette.mode==="light"?hr:gr,r=e.palette.mode==="light"?gr:hr,o=n.color||n.severity;return g({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},o&&n.variant==="standard"&&{color:t(e.palette[o].light,.6),backgroundColor:r(e.palette[o].light,.9),[`& .${ps.icon}`]:{color:e.palette.mode==="dark"?e.palette[o].main:e.palette[o].light}},o&&n.variant==="outlined"&&{color:t(e.palette[o].light,.6),border:`1px solid ${e.palette[o].light}`,[`& .${ps.icon}`]:{color:e.palette.mode==="dark"?e.palette[o].main:e.palette[o].light}},o&&n.variant==="filled"&&{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.mode==="dark"?e.palette[o].dark:e.palette[o].main})}),ag=_("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,n)=>n.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),sg=_("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,n)=>n.message})({padding:"8px 0"}),ms=_("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,n)=>n.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),hs={success:i(Zh,{fontSize:"inherit"}),warning:i(eg,{fontSize:"inherit"}),error:i(ng,{fontSize:"inherit"}),info:i(tg,{fontSize:"inherit"})},lg=S.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiAlert"}),{action:o,children:a,className:s,closeText:l="Close",color:c,icon:u,iconMapping:d=hs,onClose:p,role:m="alert",severity:f="success",variant:b="standard"}=r,v=fe(r,rg),h=g({},r,{color:c,severity:f,variant:b}),x=og(h);return w(ig,g({role:m,elevation:0,ownerState:h,className:Q(x.root,s),ref:t},v,{children:[u!==!1?i(ag,{ownerState:h,className:x.icon,children:u||d[f]||hs[f]}):null,i(sg,{ownerState:h,className:x.message,children:a}),o!=null?i(ms,{className:x.action,children:o}):null,o==null&&p?i(ms,{ownerState:h,className:x.action,children:i(Wn,{size:"small","aria-label":l,title:l,color:"inherit",onClick:p,children:fs||(fs=i(Sc,{fontSize:"small"}))})}):null]}))});var yo=lg;function cg(e){return ke("MuiAppBar",e)}ye("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);const ug=["className","color","enableColorOnDark","position"],dg=e=>{const{color:n,position:t,classes:r}=e,o={root:["root",`color${I(n)}`,`position${I(t)}`]};return we(o,cg,r)},pg=_(On,{name:"MuiAppBar",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[`position${I(t.position)}`],n[`color${I(t.color)}`]]}})(({theme:e,ownerState:n})=>{const t=e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[900];return g({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},n.position==="fixed"&&{position:"fixed",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},n.position==="absolute"&&{position:"absolute",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0},n.position==="sticky"&&{position:"sticky",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0},n.position==="static"&&{position:"static"},n.position==="relative"&&{position:"relative"},n.color==="default"&&{backgroundColor:t,color:e.palette.getContrastText(t)},n.color&&n.color!=="default"&&n.color!=="inherit"&&n.color!=="transparent"&&{backgroundColor:e.palette[n.color].main,color:e.palette[n.color].contrastText},n.color==="inherit"&&{color:"inherit"},e.palette.mode==="dark"&&!n.enableColorOnDark&&{backgroundColor:null,color:null},n.color==="transparent"&&g({backgroundColor:"transparent",color:"inherit"},e.palette.mode==="dark"&&{backgroundImage:"none"}))}),fg=S.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiAppBar"}),{className:o,color:a="primary",enableColorOnDark:s=!1,position:l="fixed"}=r,c=fe(r,ug),u=g({},r,{color:a,position:l,enableColorOnDark:s}),d=dg(u);return i(pg,g({square:!0,component:"header",ownerState:u,elevation:4,className:Q(d.root,o,l==="fixed"&&"mui-fixed"),ref:t},c))});var mg=fg;const hg=_(Zm,{name:"MuiPopper",slot:"Root",overridesResolver:(e,n)=>n.root})({}),gg=S.exports.forwardRef(function(n,t){const r=wd(),o=Ce({props:n,name:"MuiPopper"});return i(hg,g({direction:r==null?void 0:r.direction},o,{ref:t}))});var Li=gg;function bg(e){return ke("MuiListSubheader",e)}ye("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);const vg=["className","color","component","disableGutters","disableSticky","inset"],xg=e=>{const{classes:n,color:t,disableGutters:r,inset:o,disableSticky:a}=e,s={root:["root",t!=="default"&&`color${I(t)}`,!r&&"gutters",o&&"inset",!a&&"sticky"]};return we(s,bg,n)},yg=_("li",{name:"MuiListSubheader",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.color!=="default"&&n[`color${I(t.color)}`],!t.disableGutters&&n.gutters,t.inset&&n.inset,!t.disableSticky&&n.sticky]}})(({theme:e,ownerState:n})=>g({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:e.palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14)},n.color==="primary"&&{color:e.palette.primary.main},n.color==="inherit"&&{color:"inherit"},!n.disableGutters&&{paddingLeft:16,paddingRight:16},n.inset&&{paddingLeft:72},!n.disableSticky&&{position:"sticky",top:0,zIndex:1,backgroundColor:e.palette.background.paper})),wg=S.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiListSubheader"}),{className:o,color:a="default",component:s="li",disableGutters:l=!1,disableSticky:c=!1,inset:u=!1}=r,d=fe(r,vg),p=g({},r,{color:a,component:s,disableGutters:l,disableSticky:c,inset:u}),m=xg(p);return i(yg,g({as:s,className:Q(m.root,o),ref:t,ownerState:p},d))});var Cg=wg,Sg=Ln(i("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function kg(e){return ke("MuiChip",e)}const Pg=ye("MuiChip",["root","sizeSmall","sizeMedium","colorPrimary","colorSecondary","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","focusVisible"]);var Ie=Pg;const Tg=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"],Rg=e=>{const{classes:n,disabled:t,size:r,color:o,onDelete:a,clickable:s,variant:l}=e,c={root:["root",l,t&&"disabled",`size${I(r)}`,`color${I(o)}`,s&&"clickable",s&&`clickableColor${I(o)}`,a&&"deletable",a&&`deletableColor${I(o)}`,`${l}${I(o)}`],label:["label",`label${I(r)}`],avatar:["avatar",`avatar${I(r)}`,`avatarColor${I(o)}`],icon:["icon",`icon${I(r)}`,`iconColor${I(o)}`],deleteIcon:["deleteIcon",`deleteIcon${I(r)}`,`deleteIconColor${I(o)}`,`deleteIconOutlinedColor${I(o)}`]};return we(c,kg,n)},Ag=_("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e,{color:r,clickable:o,onDelete:a,size:s,variant:l}=t;return[{[`& .${Ie.avatar}`]:n.avatar},{[`& .${Ie.avatar}`]:n[`avatar${I(s)}`]},{[`& .${Ie.avatar}`]:n[`avatarColor${I(r)}`]},{[`& .${Ie.icon}`]:n.icon},{[`& .${Ie.icon}`]:n[`icon${I(s)}`]},{[`& .${Ie.icon}`]:n[`iconColor${I(r)}`]},{[`& .${Ie.deleteIcon}`]:n.deleteIcon},{[`& .${Ie.deleteIcon}`]:n[`deleteIcon${I(s)}`]},{[`& .${Ie.deleteIcon}`]:n[`deleteIconColor${I(r)}`]},{[`& .${Ie.deleteIcon}`]:n[`deleteIconOutlinedColor${I(r)}`]},n.root,n[`size${I(s)}`],n[`color${I(r)}`],o&&n.clickable,o&&r!=="default"&&n[`clickableColor${I(r)})`],a&&n.deletable,a&&r!=="default"&&n[`deletableColor${I(r)}`],n[l],l==="outlined"&&n[`outlined${I(r)}`]]}})(({theme:e,ownerState:n})=>{const t=Be(e.palette.text.primary,.26);return g({maxWidth:"100%",fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.text.primary,backgroundColor:e.palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${Ie.disabled}`]:{opacity:e.palette.action.disabledOpacity,pointerEvents:"none"},[`& .${Ie.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:e.palette.mode==="light"?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},[`& .${Ie.avatarColorPrimary}`]:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},[`& .${Ie.avatarColorSecondary}`]:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},[`& .${Ie.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${Ie.icon}`]:g({color:e.palette.mode==="light"?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},n.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4},n.color!=="default"&&{color:"inherit"}),[`& .${Ie.deleteIcon}`]:g({WebkitTapHighlightColor:"transparent",color:t,fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Be(t,.4)}},n.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4},n.color!=="default"&&{color:Be(e.palette[n.color].contrastText,.7),"&:hover, &:active":{color:e.palette[n.color].contrastText}})},n.size==="small"&&{height:24},n.color!=="default"&&{backgroundColor:e.palette[n.color].main,color:e.palette[n.color].contrastText},n.onDelete&&{[`&.${Ie.focusVisible}`]:{backgroundColor:Be(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},n.onDelete&&n.color!=="default"&&{[`&.${Ie.focusVisible}`]:{backgroundColor:e.palette[n.color].dark}})},({theme:e,ownerState:n})=>g({},n.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:Be(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)},[`&.${Ie.focusVisible}`]:{backgroundColor:Be(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},"&:active":{boxShadow:e.shadows[1]}},n.clickable&&n.color!=="default"&&{[`&:hover, &.${Ie.focusVisible}`]:{backgroundColor:e.palette[n.color].dark}}),({theme:e,ownerState:n})=>g({},n.variant==="outlined"&&{backgroundColor:"transparent",border:`1px solid ${e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${Ie.clickable}:hover`]:{backgroundColor:e.palette.action.hover},[`&.${Ie.focusVisible}`]:{backgroundColor:e.palette.action.focus},[`& .${Ie.avatar}`]:{marginLeft:4},[`& .${Ie.avatarSmall}`]:{marginLeft:2},[`& .${Ie.icon}`]:{marginLeft:4},[`& .${Ie.iconSmall}`]:{marginLeft:2},[`& .${Ie.deleteIcon}`]:{marginRight:5},[`& .${Ie.deleteIconSmall}`]:{marginRight:3}},n.variant==="outlined"&&n.color!=="default"&&{color:e.palette[n.color].main,border:`1px solid ${Be(e.palette[n.color].main,.7)}`,[`&.${Ie.clickable}:hover`]:{backgroundColor:Be(e.palette[n.color].main,e.palette.action.hoverOpacity)},[`&.${Ie.focusVisible}`]:{backgroundColor:Be(e.palette[n.color].main,e.palette.action.focusOpacity)},[`& .${Ie.deleteIcon}`]:{color:Be(e.palette[n.color].main,.7),"&:hover, &:active":{color:e.palette[n.color].main}}})),Dg=_("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,n)=>{const{ownerState:t}=e,{size:r}=t;return[n.label,n[`label${I(r)}`]]}})(({ownerState:e})=>g({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},e.size==="small"&&{paddingLeft:8,paddingRight:8}));function gs(e){return e.key==="Backspace"||e.key==="Delete"}const $g=S.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiChip"}),{avatar:o,className:a,clickable:s,color:l="default",component:c,deleteIcon:u,disabled:d=!1,icon:p,label:m,onClick:f,onDelete:b,onKeyDown:v,onKeyUp:h,size:x="medium",variant:y="filled"}=r,C=fe(r,Tg),T=S.exports.useRef(null),R=Bn(T,t),A=K=>{K.stopPropagation(),b&&b(K)},$=K=>{K.currentTarget===K.target&&gs(K)&&K.preventDefault(),v&&v(K)},D=K=>{K.currentTarget===K.target&&(b&&gs(K)?b(K):K.key==="Escape"&&T.current&&T.current.blur()),h&&h(K)},E=s!==!1&&f?!0:s,k=x==="small",P=E||b?Ht:c||"div",L=g({},r,{component:P,disabled:d,size:x,color:l,onDelete:!!b,clickable:E,variant:y}),B=Rg(L),O=P===Ht?g({component:c||"div",focusVisibleClassName:B.focusVisible},b&&{disableRipple:!0}):{};let z=null;if(b){const K=Q(l!=="default"&&(y==="outlined"?B[`deleteIconOutlinedColor${I(l)}`]:B[`deleteIconColor${I(l)}`]),k&&B.deleteIconSmall);z=u&&S.exports.isValidElement(u)?S.exports.cloneElement(u,{className:Q(u.props.className,B.deleteIcon,K),onClick:A}):i(Sg,{className:Q(B.deleteIcon,K),onClick:A})}let V=null;o&&S.exports.isValidElement(o)&&(V=S.exports.cloneElement(o,{className:Q(B.avatar,o.props.className)}));let j=null;return p&&S.exports.isValidElement(p)&&(j=S.exports.cloneElement(p,{className:Q(B.icon,p.props.className)})),w(Ag,g({as:P,className:Q(B.root,a),disabled:E&&d?!0:void 0,onClick:f,onKeyDown:$,onKeyUp:D,ref:R,ownerState:L},O,C,{children:[V||j,i(Dg,{className:Q(B.label),ownerState:L,children:m}),z]}))});var gt=$g;function Ig(e){return ke("MuiAutocomplete",e)}const Bg=ye("MuiAutocomplete",["root","fullWidth","focused","focusVisible","tag","tagSizeSmall","tagSizeMedium","hasPopupIcon","hasClearIcon","inputRoot","input","inputFocused","endAdornment","clearIndicator","popupIndicator","popupIndicatorOpen","popper","popperDisablePortal","paper","listbox","loading","noOptions","option","groupLabel","groupUl"]);var Ae=Bg,bs,vs;const Eg=["autoComplete","autoHighlight","autoSelect","blurOnSelect","ChipProps","className","clearIcon","clearOnBlur","clearOnEscape","clearText","closeText","componentsProps","defaultValue","disableClearable","disableCloseOnSelect","disabled","disabledItemsFocusable","disableListWrap","disablePortal","filterOptions","filterSelectedOptions","forcePopupIcon","freeSolo","fullWidth","getLimitTagsText","getOptionDisabled","getOptionLabel","isOptionEqualToValue","groupBy","handleHomeEndKeys","id","includeInputInList","inputValue","limitTags","ListboxComponent","ListboxProps","loading","loadingText","multiple","noOptionsText","onChange","onClose","onHighlightChange","onInputChange","onOpen","open","openOnFocus","openText","options","PaperComponent","PopperComponent","popupIcon","readOnly","renderGroup","renderInput","renderOption","renderTags","selectOnFocus","size","value"],Mg=e=>{const{classes:n,disablePortal:t,focused:r,fullWidth:o,hasClearIcon:a,hasPopupIcon:s,inputFocused:l,popupOpen:c,size:u}=e,d={root:["root",r&&"focused",o&&"fullWidth",a&&"hasClearIcon",s&&"hasPopupIcon"],inputRoot:["inputRoot"],input:["input",l&&"inputFocused"],tag:["tag",`tagSize${I(u)}`],endAdornment:["endAdornment"],clearIndicator:["clearIndicator"],popupIndicator:["popupIndicator",c&&"popupIndicatorOpen"],popper:["popper",t&&"popperDisablePortal"],paper:["paper"],listbox:["listbox"],loading:["loading"],noOptions:["noOptions"],option:["option"],groupLabel:["groupLabel"],groupUl:["groupUl"]};return we(d,Ig,n)},Lg=_("div",{name:"MuiAutocomplete",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e,{fullWidth:r,hasClearIcon:o,hasPopupIcon:a,inputFocused:s,size:l}=t;return[{[`& .${Ae.tag}`]:n.tag},{[`& .${Ae.tag}`]:n[`tagSize${I(l)}`]},{[`& .${Ae.inputRoot}`]:n.inputRoot},{[`& .${Ae.input}`]:n.input},{[`& .${Ae.input}`]:s&&n.inputFocused},n.root,r&&n.fullWidth,a&&n.hasPopupIcon,o&&n.hasClearIcon]}})(({ownerState:e})=>g({[`&.${Ae.focused} .${Ae.clearIndicator}`]:{visibility:"visible"},"@media (pointer: fine)":{[`&:hover .${Ae.clearIndicator}`]:{visibility:"visible"}}},e.fullWidth&&{width:"100%"},{[`& .${Ae.tag}`]:g({margin:3,maxWidth:"calc(100% - 6px)"},e.size==="small"&&{margin:2,maxWidth:"calc(100% - 4px)"}),[`& .${Ae.inputRoot}`]:{flexWrap:"wrap",[`.${Ae.hasPopupIcon}&, .${Ae.hasClearIcon}&`]:{paddingRight:26+4},[`.${Ae.hasPopupIcon}.${Ae.hasClearIcon}&`]:{paddingRight:52+4},[`& .${Ae.input}`]:{width:0,minWidth:30}},[`& .${Bo.root}`]:{paddingBottom:1,"& .MuiInput-input":{padding:"4px 4px 4px 0px"}},[`& .${Bo.root}.${Mr.sizeSmall}`]:{[`& .${Bo.input}`]:{padding:"2px 4px 3px 0"}},[`& .${Ia.root}`]:{padding:9,[`.${Ae.hasPopupIcon}&, .${Ae.hasClearIcon}&`]:{paddingRight:26+4+9},[`.${Ae.hasPopupIcon}.${Ae.hasClearIcon}&`]:{paddingRight:52+4+9},[`& .${Ae.input}`]:{padding:"7.5px 4px 7.5px 6px"},[`& .${Ae.endAdornment}`]:{right:9}},[`& .${Ia.root}.${Mr.sizeSmall}`]:{padding:6,[`& .${Ae.input}`]:{padding:"2.5px 4px 2.5px 6px"}},[`& .${Lr.root}`]:{paddingTop:19,paddingLeft:8,[`.${Ae.hasPopupIcon}&, .${Ae.hasClearIcon}&`]:{paddingRight:26+4+9},[`.${Ae.hasPopupIcon}.${Ae.hasClearIcon}&`]:{paddingRight:52+4+9},[`& .${Lr.input}`]:{padding:"7px 4px"},[`& .${Ae.endAdornment}`]:{right:9}},[`& .${Lr.root}.${Mr.sizeSmall}`]:{paddingBottom:1,[`& .${Lr.input}`]:{padding:"2.5px 4px"}},[`& .${Mr.hiddenLabel}`]:{paddingTop:8},[`& .${Ae.input}`]:g({flexGrow:1,textOverflow:"ellipsis",opacity:0},e.inputFocused&&{opacity:1})})),Og=_("div",{name:"MuiAutocomplete",slot:"EndAdornment",overridesResolver:(e,n)=>n.endAdornment})({position:"absolute",right:0,top:"calc(50% - 14px)"}),Ng=_(Wn,{name:"MuiAutocomplete",slot:"ClearIndicator",overridesResolver:(e,n)=>n.clearIndicator})({marginRight:-2,padding:4,visibility:"hidden"}),zg=_(Wn,{name:"MuiAutocomplete",slot:"PopupIndicator",overridesResolver:({ownerState:e},n)=>g({},n.popupIndicator,e.popupOpen&&n.popupIndicatorOpen)})(({ownerState:e})=>g({padding:2,marginRight:-2},e.popupOpen&&{transform:"rotate(180deg)"})),Fg=_(Li,{name:"MuiAutocomplete",slot:"Popper",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[{[`& .${Ae.option}`]:n.option},n.popper,t.disablePortal&&n.popperDisablePortal]}})(({theme:e,ownerState:n})=>g({zIndex:e.zIndex.modal},n.disablePortal&&{position:"absolute"})),_g=_(On,{name:"MuiAutocomplete",slot:"Paper",overridesResolver:(e,n)=>n.paper})(({theme:e})=>g({},e.typography.body1,{overflow:"auto"})),Hg=_("div",{name:"MuiAutocomplete",slot:"Loading",overridesResolver:(e,n)=>n.loading})(({theme:e})=>({color:e.palette.text.secondary,padding:"14px 16px"})),Wg=_("div",{name:"MuiAutocomplete",slot:"NoOptions",overridesResolver:(e,n)=>n.noOptions})(({theme:e})=>({color:e.palette.text.secondary,padding:"14px 16px"})),Vg=_("div",{name:"MuiAutocomplete",slot:"Listbox",overridesResolver:(e,n)=>n.listbox})(({theme:e})=>({listStyle:"none",margin:0,padding:"8px 0",maxHeight:"40vh",overflow:"auto",[`& .${Ae.option}`]:{minHeight:48,display:"flex",overflow:"hidden",justifyContent:"flex-start",alignItems:"center",cursor:"pointer",paddingTop:6,boxSizing:"border-box",outline:"0",WebkitTapHighlightColor:"transparent",paddingBottom:6,paddingLeft:16,paddingRight:16,[e.breakpoints.up("sm")]:{minHeight:"auto"},[`&.${Ae.focused}`]:{backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},'&[aria-disabled="true"]':{opacity:e.palette.action.disabledOpacity,pointerEvents:"none"},[`&.${Ae.focusVisible}`]:{backgroundColor:e.palette.action.focus},'&[aria-selected="true"]':{backgroundColor:Be(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${Ae.focused}`]:{backgroundColor:Be(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.palette.action.selected}},[`&.${Ae.focusVisible}`]:{backgroundColor:Be(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}}}})),jg=_(Cg,{name:"MuiAutocomplete",slot:"GroupLabel",overridesResolver:(e,n)=>n.groupLabel})(({theme:e})=>({backgroundColor:e.palette.background.paper,top:-8})),Ug=_("ul",{name:"MuiAutocomplete",slot:"GroupUl",overridesResolver:(e,n)=>n.groupUl})({padding:0,[`& .${Ae.option}`]:{paddingLeft:24}}),qg=S.exports.forwardRef(function(n,t){var r,o;const a=Ce({props:n,name:"MuiAutocomplete"}),{autoComplete:s=!1,autoHighlight:l=!1,autoSelect:c=!1,blurOnSelect:u=!1,ChipProps:d,className:p,clearIcon:m=bs||(bs=i(Sc,{fontSize:"small"})),clearOnBlur:f=!a.freeSolo,clearOnEscape:b=!1,clearText:v="Clear",closeText:h="Close",componentsProps:x={},defaultValue:y=a.multiple?[]:null,disableClearable:C=!1,disableCloseOnSelect:T=!1,disabled:R=!1,disabledItemsFocusable:A=!1,disableListWrap:$=!1,disablePortal:D=!1,filterSelectedOptions:E=!1,forcePopupIcon:k="auto",freeSolo:P=!1,fullWidth:L=!1,getLimitTagsText:B=Oe=>`+${Oe}`,getOptionLabel:O=Oe=>{var vn;return(vn=Oe.label)!=null?vn:Oe},groupBy:z,handleHomeEndKeys:V=!a.freeSolo,includeInputInList:j=!1,limitTags:K=-1,ListboxComponent:H="ul",ListboxProps:W,loading:te=!1,loadingText:Z="Loading\u2026",multiple:re=!1,noOptionsText:de="No options",openOnFocus:ce=!1,openText:Y="Open",PaperComponent:me=On,PopperComponent:be=Li,popupIcon:oe=vs||(vs=i(Cd,{})),readOnly:ae=!1,renderGroup:$e,renderInput:We,renderOption:se,renderTags:tn,selectOnFocus:Te=!a.freeSolo,size:an="medium"}=a,rn=fe(a,Eg),{getRootProps:Me,getInputProps:Le,getInputLabelProps:Re,getPopupIndicatorProps:Fe,getClearProps:on,getTagProps:Qe,getListboxProps:F,getOptionProps:ee,value:ne,dirty:le,id:_e,popupOpen:Ue,focused:Pe,focusedTag:De,anchorEl:xe,setAnchorEl:Ve,inputValue:sn,groupedOptions:He}=Ff(g({},a,{componentName:"Autocomplete"})),it=!C&&!R&&le&&!ae,at=(!P||k===!0)&&k!==!1,ln=g({},a,{disablePortal:D,focused:Pe,fullWidth:L,hasClearIcon:it,hasPopupIcon:at,inputFocused:De===-1,popupOpen:Ue,size:an}),Ye=Mg(ln);let Nn;if(re&&ne.length>0){const Oe=vn=>g({className:Q(Ye.tag),disabled:R},Qe(vn));tn?Nn=tn(ne,Oe):Nn=ne.map((vn,st)=>i(gt,g({label:O(vn),size:an},Oe({index:st}),d)))}if(K>-1&&Array.isArray(Nn)){const Oe=Nn.length-K;!Pe&&Oe>0&&(Nn=Nn.splice(0,K),Nn.push(i("span",{className:Ye.tag,children:B(Oe)},Nn.length)))}const Ir=$e||(Oe=>w("li",{children:[i(jg,{className:Ye.groupLabel,ownerState:ln,component:"div",children:Oe.group}),i(Ug,{className:Ye.groupUl,ownerState:ln,children:Oe.children})]},Oe.key)),Do=se||((Oe,vn)=>i("li",g({},Oe,{children:O(vn)}))),Zt=(Oe,vn)=>{const st=ee({option:Oe,index:vn});return Do(g({},st,{className:Ye.option}),Oe,{selected:st["aria-selected"],inputValue:sn})};return w(S.exports.Fragment,{children:[i(Lg,g({ref:t,className:Q(Ye.root,p),ownerState:ln},Me(rn),{children:We({id:_e,disabled:R,fullWidth:!0,size:an==="small"?"small":void 0,InputLabelProps:Re(),InputProps:{ref:Ve,className:Ye.inputRoot,startAdornment:Nn,endAdornment:w(Og,{className:Ye.endAdornment,ownerState:ln,children:[it?i(Ng,g({},on(),{"aria-label":v,title:v,ownerState:ln},x.clearIndicator,{className:Q(Ye.clearIndicator,(r=x.clearIndicator)==null?void 0:r.className),children:m})):null,at?i(zg,g({},Fe(),{disabled:R,"aria-label":Ue?h:Y,title:Ue?h:Y,className:Q(Ye.popupIndicator),ownerState:ln,children:oe})):null]})},inputProps:g({className:Q(Ye.input),disabled:R,readOnly:ae},Le())})})),Ue&&xe?i(Fg,{as:be,className:Q(Ye.popper),disablePortal:D,style:{width:xe?xe.clientWidth:null},ownerState:ln,role:"presentation",anchorEl:xe,open:!0,children:w(_g,g({ownerState:ln,as:me},x.paper,{className:Q(Ye.paper,(o=x.paper)==null?void 0:o.className),children:[te&&He.length===0?i(Hg,{className:Ye.loading,ownerState:ln,children:Z}):null,He.length===0&&!P&&!te?i(Wg,{className:Ye.noOptions,ownerState:ln,role:"presentation",onMouseDown:Oe=>{Oe.preventDefault()},children:de}):null,He.length>0?i(Vg,g({as:H,className:Ye.listbox,ownerState:ln},F(),W,{children:He.map((Oe,vn)=>z?Ir({key:Oe.key,group:Oe.group,children:Oe.options.map((st,$o)=>Zt(st,Oe.index+$o))}):Zt(Oe,vn))})):null]}))}):null]})});var wo=qg;const Gg=e=>!e||!kt(e);var Hr=Gg;function Yg(e){return ke("MuiButton",e)}const Kg=ye("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var Wr=Kg;const Qg=S.exports.createContext({});var kc=Qg;const Jg=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],Xg=e=>{const{color:n,disableElevation:t,fullWidth:r,size:o,variant:a,classes:s}=e,l={root:["root",a,`${a}${I(n)}`,`size${I(o)}`,`${a}Size${I(o)}`,n==="inherit"&&"colorInherit",t&&"disableElevation",r&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${I(o)}`],endIcon:["endIcon",`iconSize${I(o)}`]},c=we(l,Yg,s);return g({},s,c)},Pc=e=>g({},e.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},e.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},e.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),Zg=_(Ht,{shouldForwardProp:e=>ho(e)||e==="classes",name:"MuiButton",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[t.variant],n[`${t.variant}${I(t.color)}`],n[`size${I(t.size)}`],n[`${t.variant}Size${I(t.size)}`],t.color==="inherit"&&n.colorInherit,t.disableElevation&&n.disableElevation,t.fullWidth&&n.fullWidth]}})(({theme:e,ownerState:n})=>g({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":g({textDecoration:"none",backgroundColor:Be(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},n.variant==="text"&&n.color!=="inherit"&&{backgroundColor:Be(e.palette[n.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},n.variant==="outlined"&&n.color!=="inherit"&&{border:`1px solid ${e.palette[n.color].main}`,backgroundColor:Be(e.palette[n.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},n.variant==="contained"&&{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]}},n.variant==="contained"&&n.color!=="inherit"&&{backgroundColor:e.palette[n.color].dark,"@media (hover: none)":{backgroundColor:e.palette[n.color].main}}),"&:active":g({},n.variant==="contained"&&{boxShadow:e.shadows[8]}),[`&.${Wr.focusVisible}`]:g({},n.variant==="contained"&&{boxShadow:e.shadows[6]}),[`&.${Wr.disabled}`]:g({color:e.palette.action.disabled},n.variant==="outlined"&&{border:`1px solid ${e.palette.action.disabledBackground}`},n.variant==="outlined"&&n.color==="secondary"&&{border:`1px solid ${e.palette.action.disabled}`},n.variant==="contained"&&{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground})},n.variant==="text"&&{padding:"6px 8px"},n.variant==="text"&&n.color!=="inherit"&&{color:e.palette[n.color].main},n.variant==="outlined"&&{padding:"5px 15px",border:`1px solid ${e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`},n.variant==="outlined"&&n.color!=="inherit"&&{color:e.palette[n.color].main,border:`1px solid ${Be(e.palette[n.color].main,.5)}`},n.variant==="contained"&&{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2]},n.variant==="contained"&&n.color!=="inherit"&&{color:e.palette[n.color].contrastText,backgroundColor:e.palette[n.color].main},n.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},n.size==="small"&&n.variant==="text"&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},n.size==="large"&&n.variant==="text"&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},n.size==="small"&&n.variant==="outlined"&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},n.size==="large"&&n.variant==="outlined"&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},n.size==="small"&&n.variant==="contained"&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},n.size==="large"&&n.variant==="contained"&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},n.fullWidth&&{width:"100%"}),({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${Wr.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${Wr.disabled}`]:{boxShadow:"none"}}),eb=_("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.startIcon,n[`iconSize${I(t.size)}`]]}})(({ownerState:e})=>g({display:"inherit",marginRight:8,marginLeft:-4},e.size==="small"&&{marginLeft:-2},Pc(e))),nb=_("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.endIcon,n[`iconSize${I(t.size)}`]]}})(({ownerState:e})=>g({display:"inherit",marginRight:-4,marginLeft:8},e.size==="small"&&{marginRight:-2},Pc(e))),tb=S.exports.forwardRef(function(n,t){const r=S.exports.useContext(kc),o=Sd(r,n),a=Ce({props:o,name:"MuiButton"}),{children:s,color:l="primary",component:c="button",className:u,disabled:d=!1,disableElevation:p=!1,disableFocusRipple:m=!1,endIcon:f,focusVisibleClassName:b,fullWidth:v=!1,size:h="medium",startIcon:x,type:y,variant:C="text"}=a,T=fe(a,Jg),R=g({},a,{color:l,component:c,disabled:d,disableElevation:p,disableFocusRipple:m,fullWidth:v,size:h,type:y,variant:C}),A=Xg(R),$=x&&i(eb,{className:A.startIcon,ownerState:R,children:x}),D=f&&i(nb,{className:A.endIcon,ownerState:R,children:f});return w(Zg,g({ownerState:R,className:Q(u,r.className),component:c,disabled:d,focusRipple:!m,focusVisibleClassName:Q(A.focusVisible,b),ref:t,type:y},T,{classes:A,children:[$,s,D]}))});var Yn=tb;function rb(e){return ke("MuiButtonGroup",e)}const ob=ye("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary"]);var ut=ob;const ib=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],ab=(e,n)=>{const{ownerState:t}=e;return[{[`& .${ut.grouped}`]:n.grouped},{[`& .${ut.grouped}`]:n[`grouped${I(t.orientation)}`]},{[`& .${ut.grouped}`]:n[`grouped${I(t.variant)}`]},{[`& .${ut.grouped}`]:n[`grouped${I(t.variant)}${I(t.orientation)}`]},{[`& .${ut.grouped}`]:n[`grouped${I(t.variant)}${I(t.color)}`]},n.root,n[t.variant],t.disableElevation===!0&&n.disableElevation,t.fullWidth&&n.fullWidth,t.orientation==="vertical"&&n.vertical]},sb=e=>{const{classes:n,color:t,disabled:r,disableElevation:o,fullWidth:a,orientation:s,variant:l}=e,c={root:["root",l,s==="vertical"&&"vertical",a&&"fullWidth",o&&"disableElevation"],grouped:["grouped",`grouped${I(s)}`,`grouped${I(l)}`,`grouped${I(l)}${I(s)}`,`grouped${I(l)}${I(t)}`,r&&"disabled"]};return we(c,rb,n)},lb=_("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:ab})(({theme:e,ownerState:n})=>g({display:"inline-flex",borderRadius:e.shape.borderRadius},n.variant==="contained"&&{boxShadow:e.shadows[2]},n.disableElevation&&{boxShadow:"none"},n.fullWidth&&{width:"100%"},n.orientation==="vertical"&&{flexDirection:"column"},{[`& .${ut.grouped}`]:g({minWidth:40,"&:not(:first-of-type)":g({},n.orientation==="horizontal"&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},n.orientation==="vertical"&&{borderTopRightRadius:0,borderTopLeftRadius:0},n.variant==="outlined"&&n.orientation==="horizontal"&&{marginLeft:-1},n.variant==="outlined"&&n.orientation==="vertical"&&{marginTop:-1}),"&:not(:last-of-type)":g({},n.orientation==="horizontal"&&{borderTopRightRadius:0,borderBottomRightRadius:0},n.orientation==="vertical"&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},n.variant==="text"&&n.orientation==="horizontal"&&{borderRight:`1px solid ${e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`},n.variant==="text"&&n.orientation==="vertical"&&{borderBottom:`1px solid ${e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`},n.variant==="text"&&n.color!=="inherit"&&{borderColor:Be(e.palette[n.color].main,.5)},n.variant==="outlined"&&n.orientation==="horizontal"&&{borderRightColor:"transparent"},n.variant==="outlined"&&n.orientation==="vertical"&&{borderBottomColor:"transparent"},n.variant==="contained"&&n.orientation==="horizontal"&&{borderRight:`1px solid ${e.palette.grey[400]}`,[`&.${ut.disabled}`]:{borderRight:`1px solid ${e.palette.action.disabled}`}},n.variant==="contained"&&n.orientation==="vertical"&&{borderBottom:`1px solid ${e.palette.grey[400]}`,[`&.${ut.disabled}`]:{borderBottom:`1px solid ${e.palette.action.disabled}`}},n.variant==="contained"&&n.color!=="inherit"&&{borderColor:e.palette[n.color].dark},{"&:hover":g({},n.variant==="outlined"&&n.orientation==="horizontal"&&{borderRightColor:"currentColor"},n.variant==="outlined"&&n.orientation==="vertical"&&{borderBottomColor:"currentColor"})}),"&:hover":g({},n.variant==="contained"&&{boxShadow:"none"})},n.variant==="contained"&&{boxShadow:"none"})})),cb=S.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiButtonGroup"}),{children:o,className:a,color:s="primary",component:l="div",disabled:c=!1,disableElevation:u=!1,disableFocusRipple:d=!1,disableRipple:p=!1,fullWidth:m=!1,orientation:f="horizontal",size:b="medium",variant:v="outlined"}=r,h=fe(r,ib),x=g({},r,{color:s,component:l,disabled:c,disableElevation:u,disableFocusRipple:d,disableRipple:p,fullWidth:m,orientation:f,size:b,variant:v}),y=sb(x),C=S.exports.useMemo(()=>({className:y.grouped,color:s,disabled:c,disableElevation:u,disableFocusRipple:d,disableRipple:p,fullWidth:m,size:b,variant:v}),[s,c,u,d,p,m,b,v,y.grouped]);return i(lb,g({as:l,role:"group",className:Q(y.root,a),ref:t,ownerState:x},h,{children:i(kc.Provider,{value:C,children:o})}))});var ub=cb;function db(e){return ke("PrivateSwitchBase",e)}ye("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const pb=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],fb=e=>{const{classes:n,checked:t,disabled:r,edge:o}=e,a={root:["root",t&&"checked",r&&"disabled",o&&`edge${I(o)}`],input:["input"]};return we(a,db,n)},mb=_(Ht)(({ownerState:e})=>g({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),hb=_("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),gb=S.exports.forwardRef(function(n,t){const{autoFocus:r,checked:o,checkedIcon:a,className:s,defaultChecked:l,disabled:c,disableFocusRipple:u=!1,edge:d=!1,icon:p,id:m,inputProps:f,inputRef:b,name:v,onBlur:h,onChange:x,onFocus:y,readOnly:C,required:T,tabIndex:R,type:A,value:$}=n,D=fe(n,pb),[E,k]=mt({controlled:o,default:Boolean(l),name:"SwitchBase",state:"checked"}),P=kr(),L=H=>{y&&y(H),P&&P.onFocus&&P.onFocus(H)},B=H=>{h&&h(H),P&&P.onBlur&&P.onBlur(H)},O=H=>{if(H.nativeEvent.defaultPrevented)return;const W=H.target.checked;k(W),x&&x(H,W)};let z=c;P&&typeof z=="undefined"&&(z=P.disabled);const V=A==="checkbox"||A==="radio",j=g({},n,{checked:E,disabled:z,disableFocusRipple:u,edge:d}),K=fb(j);return w(mb,g({component:"span",className:Q(K.root,s),centerRipple:!0,focusRipple:!u,disabled:z,tabIndex:null,role:void 0,onFocus:L,onBlur:B,ownerState:j,ref:t},D,{children:[i(hb,g({autoFocus:r,checked:o,defaultChecked:l,className:K.input,disabled:z,id:V&&m,name:v,onChange:O,readOnly:C,ref:b,required:T,ownerState:j,tabIndex:R,type:A},A==="checkbox"&&$===void 0?{}:{value:$},f)),E?a:p]}))});var Oi=gb,bb=Ln(i("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),vb=Ln(i("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),xb=Ln(i("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function yb(e){return ke("MuiCheckbox",e)}const wb=ye("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]);var Fo=wb;const Cb=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],Sb=e=>{const{classes:n,indeterminate:t,color:r}=e,o={root:["root",t&&"indeterminate",`color${I(r)}`]},a=we(o,yb,n);return g({},n,a)},kb=_(Oi,{shouldForwardProp:e=>ho(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.indeterminate&&n.indeterminate,t.color!=="default"&&n[`color${I(t.color)}`]]}})(({theme:e,ownerState:n})=>g({color:e.palette.text.secondary},!n.disableRipple&&{"&:hover":{backgroundColor:Be(n.color==="default"?e.palette.action.active:e.palette[n.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},n.color!=="default"&&{[`&.${Fo.checked}, &.${Fo.indeterminate}`]:{color:e.palette[n.color].main},[`&.${Fo.disabled}`]:{color:e.palette.action.disabled}})),Pb=i(vb,{}),Tb=i(bb,{}),Rb=i(xb,{}),Ab=S.exports.forwardRef(function(n,t){var r,o;const a=Ce({props:n,name:"MuiCheckbox"}),{checkedIcon:s=Pb,color:l="primary",icon:c=Tb,indeterminate:u=!1,indeterminateIcon:d=Rb,inputProps:p,size:m="medium"}=a,f=fe(a,Cb),b=u?d:c,v=u?d:s,h=g({},a,{color:l,indeterminate:u,size:m}),x=Sb(h);return i(kb,g({type:"checkbox",inputProps:g({"data-indeterminate":u},p),icon:S.exports.cloneElement(b,{fontSize:(r=b.props.fontSize)!=null?r:m}),checkedIcon:S.exports.cloneElement(v,{fontSize:(o=v.props.fontSize)!=null?o:m}),ownerState:h,ref:t},f,{classes:x}))});var Tc=Ab;function Db(e){return ke("MuiCircularProgress",e)}ye("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const $b=["className","color","disableShrink","size","style","thickness","value","variant"];let Co=e=>e,xs,ys,ws,Cs;const ct=44,Ib=Ll(xs||(xs=Co`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),Bb=Ll(ys||(ys=Co`
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
`)),Eb=e=>{const{classes:n,variant:t,color:r,disableShrink:o}=e,a={root:["root",t,`color${I(r)}`],svg:["svg"],circle:["circle",`circle${I(t)}`,o&&"circleDisableShrink"]};return we(a,Db,n)},Mb=_("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[t.variant],n[`color${I(t.color)}`]]}})(({ownerState:e,theme:n})=>g({display:"inline-block"},e.variant==="determinate"&&{transition:n.transitions.create("transform")},e.color!=="inherit"&&{color:n.palette[e.color].main}),({ownerState:e})=>e.variant==="indeterminate"&&Ol(ws||(ws=Co`
      animation: ${0} 1.4s linear infinite;
    `),Ib)),Lb=_("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,n)=>n.svg})({display:"block"}),Ob=_("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.circle,n[`circle${I(t.variant)}`],t.disableShrink&&n.circleDisableShrink]}})(({ownerState:e,theme:n})=>g({stroke:"currentColor"},e.variant==="determinate"&&{transition:n.transitions.create("stroke-dashoffset")},e.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:e})=>e.variant==="indeterminate"&&!e.disableShrink&&Ol(Cs||(Cs=Co`
      animation: ${0} 1.4s ease-in-out infinite;
    `),Bb)),Nb=S.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiCircularProgress"}),{className:o,color:a="primary",disableShrink:s=!1,size:l=40,style:c,thickness:u=3.6,value:d=0,variant:p="indeterminate"}=r,m=fe(r,$b),f=g({},r,{color:a,disableShrink:s,size:l,thickness:u,value:d,variant:p}),b=Eb(f),v={},h={},x={};if(p==="determinate"){const y=2*Math.PI*((ct-u)/2);v.strokeDasharray=y.toFixed(3),x["aria-valuenow"]=Math.round(d),v.strokeDashoffset=`${((100-d)/100*y).toFixed(3)}px`,h.transform="rotate(-90deg)"}return i(Mb,g({className:Q(b.root,o),style:g({width:l,height:l},h,c),ownerState:f,ref:t,role:"progressbar"},x,m,{children:i(Lb,{className:b.svg,ownerState:f,viewBox:`${ct/2} ${ct/2} ${ct} ${ct}`,children:i(Ob,{className:b.circle,style:v,ownerState:f,cx:ct,cy:ct,r:(ct-u)/2,fill:"none",strokeWidth:u})})}))});var zb=Nb;function Fb(e){return ke("MuiDialog",e)}const _b=ye("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]);var _o=_b;const Hb=S.exports.createContext({});var Rc=Hb;const Wb=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],Vb=_(kd,{name:"MuiDialog",slot:"Backdrop",overrides:(e,n)=>n.backdrop})({zIndex:-1}),jb=e=>{const{classes:n,scroll:t,maxWidth:r,fullWidth:o,fullScreen:a}=e,s={root:["root"],container:["container",`scroll${I(t)}`],paper:["paper",`paperScroll${I(t)}`,`paperWidth${I(String(r))}`,o&&"paperFullWidth",a&&"paperFullScreen"]};return we(s,Fb,n)},Ub=_(wi,{name:"MuiDialog",slot:"Root",overridesResolver:(e,n)=>n.root})({"@media print":{position:"absolute !important"}}),qb=_("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.container,n[`scroll${I(t.scroll)}`]]}})(({ownerState:e})=>g({height:"100%","@media print":{height:"auto"},outline:0},e.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},e.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),Gb=_(On,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.paper,n[`scrollPaper${I(t.scroll)}`],n[`paperWidth${I(String(t.maxWidth))}`],t.fullWidth&&n.paperFullWidth,t.fullScreen&&n.paperFullScreen]}})(({theme:e,ownerState:n})=>g({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},n.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},n.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!n.maxWidth&&{maxWidth:"calc(100% - 64px)"},n.maxWidth==="xs"&&{maxWidth:e.breakpoints.unit==="px"?Math.max(e.breakpoints.values.xs,444):`${e.breakpoints.values.xs}${e.breakpoints.unit}`,[`&.${_o.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},n.maxWidth!=="xs"&&{maxWidth:`${e.breakpoints.values[n.maxWidth]}${e.breakpoints.unit}`,[`&.${_o.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[n.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},n.fullWidth&&{width:"calc(100% - 64px)"},n.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${_o.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),Yb=S.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiDialog"}),o=Dt(),a={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{"aria-describedby":s,"aria-labelledby":l,BackdropComponent:c,BackdropProps:u,children:d,className:p,disableEscapeKeyDown:m=!1,fullScreen:f=!1,fullWidth:b=!1,maxWidth:v="sm",onBackdropClick:h,onClose:x,open:y,PaperComponent:C=On,PaperProps:T={},scroll:R="paper",TransitionComponent:A=Ci,transitionDuration:$=a,TransitionProps:D}=r,E=fe(r,Wb),k=g({},r,{disableEscapeKeyDown:m,fullScreen:f,fullWidth:b,maxWidth:v,scroll:R}),P=jb(k),L=S.exports.useRef(),B=j=>{L.current=j.target===j.currentTarget},O=j=>{!L.current||(L.current=null,h&&h(j),x&&x(j,"backdropClick"))},z=Tr(l),V=S.exports.useMemo(()=>({titleId:z}),[z]);return i(Ub,g({className:Q(P.root,p),BackdropProps:g({transitionDuration:$,as:c},u),closeAfterTransition:!0,BackdropComponent:Vb,disableEscapeKeyDown:m,onClose:x,open:y,ref:t,onClick:O,ownerState:k},E,{children:i(A,g({appear:!0,in:y,timeout:$,role:"presentation"},D,{children:i(qb,{className:Q(P.container),onMouseDown:B,ownerState:k,children:i(Gb,g({as:C,elevation:24,role:"dialog","aria-describedby":s,"aria-labelledby":z},T,{className:Q(P.paper,T.className),ownerState:k,children:i(Rc.Provider,{value:V,children:d})}))})}))}))});var Kb=Yb;function Qb(e){return ke("MuiDialogActions",e)}ye("MuiDialogActions",["root","spacing"]);const Jb=["className","disableSpacing"],Xb=e=>{const{classes:n,disableSpacing:t}=e;return we({root:["root",!t&&"spacing"]},Qb,n)},Zb=_("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,!t.disableSpacing&&n.spacing]}})(({ownerState:e})=>g({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),ev=S.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiDialogActions"}),{className:o,disableSpacing:a=!1}=r,s=fe(r,Jb),l=g({},r,{disableSpacing:a}),c=Xb(l);return i(Zb,g({className:Q(c.root,o),ownerState:l,ref:t},s))});var nv=ev;function tv(e){return ke("MuiDialogContent",e)}ye("MuiDialogContent",["root","dividers"]);function rv(e){return ke("MuiDialogTitle",e)}const ov=ye("MuiDialogTitle",["root"]),iv=["className","dividers"],av=e=>{const{classes:n,dividers:t}=e;return we({root:["root",t&&"dividers"]},tv,n)},sv=_("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.dividers&&n.dividers]}})(({theme:e,ownerState:n})=>g({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},n.dividers?{padding:"16px 24px",borderTop:`1px solid ${e.palette.divider}`,borderBottom:`1px solid ${e.palette.divider}`}:{[`.${ov.root} + &`]:{paddingTop:0}})),lv=S.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiDialogContent"}),{className:o,dividers:a=!1}=r,s=fe(r,iv),l=g({},r,{dividers:a}),c=av(l);return i(sv,g({className:Q(c.root,o),ownerState:l,ref:t},s))});var cv=lv;const uv=["className","id"],dv=e=>{const{classes:n}=e;return we({root:["root"]},rv,n)},pv=_(U,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,n)=>n.root})({padding:"16px 24px",flex:"0 0 auto"}),fv=S.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiDialogTitle"}),{className:o,id:a}=r,s=fe(r,uv),l=r,c=dv(l),{titleId:u=a}=S.exports.useContext(Rc);return i(pv,g({component:"h2",className:Q(c.root,o),ownerState:l,ref:t,variant:"h6",id:u},s))});var mv=fv;const hv=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],gv=e=>{const{absolute:n,children:t,classes:r,flexItem:o,light:a,orientation:s,textAlign:l,variant:c}=e;return we({root:["root",n&&"absolute",c,a&&"light",s==="vertical"&&"vertical",o&&"flexItem",t&&"withChildren",t&&s==="vertical"&&"withChildrenVertical",l==="right"&&s!=="vertical"&&"textAlignRight",l==="left"&&s!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",s==="vertical"&&"wrapperVertical"]},Pd,r)},bv=_("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.absolute&&n.absolute,n[t.variant],t.light&&n.light,t.orientation==="vertical"&&n.vertical,t.flexItem&&n.flexItem,t.children&&n.withChildren,t.children&&t.orientation==="vertical"&&n.withChildrenVertical,t.textAlign==="right"&&t.orientation!=="vertical"&&n.textAlignRight,t.textAlign==="left"&&t.orientation!=="vertical"&&n.textAlignLeft]}})(({theme:e,ownerState:n})=>g({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:e.palette.divider,borderBottomWidth:"thin"},n.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},n.light&&{borderColor:Be(e.palette.divider,.08)},n.variant==="inset"&&{marginLeft:72},n.variant==="middle"&&n.orientation==="horizontal"&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},n.variant==="middle"&&n.orientation==="vertical"&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},n.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},n.flexItem&&{alignSelf:"stretch",height:"auto"}),({theme:e,ownerState:n})=>g({},n.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${e.palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}}),({theme:e,ownerState:n})=>g({},n.children&&n.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${e.palette.divider}`,transform:"translateX(0%)"}}),({ownerState:e})=>g({},e.textAlign==="right"&&e.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},e.textAlign==="left"&&e.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),vv=_("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.wrapper,t.orientation==="vertical"&&n.wrapperVertical]}})(({theme:e,ownerState:n})=>g({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},n.orientation==="vertical"&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})),xv=S.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiDivider"}),{absolute:o=!1,children:a,className:s,component:l=a?"div":"hr",flexItem:c=!1,light:u=!1,orientation:d="horizontal",role:p=l!=="hr"?"separator":void 0,textAlign:m="center",variant:f="fullWidth"}=r,b=fe(r,hv),v=g({},r,{absolute:o,component:l,flexItem:c,light:u,orientation:d,role:p,textAlign:m,variant:f}),h=gv(v);return i(bv,g({as:l,className:Q(h.root,s),role:p,ref:t,ownerState:v},b,{children:a?i(vv,{className:h.wrapper,ownerState:v,children:a}):null}))});var Ni=xv;const yv=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function wv(e,n,t){const r=n.getBoundingClientRect(),o=t&&t.getBoundingClientRect(),a=Pt(n);let s;if(n.fakeTransform)s=n.fakeTransform;else{const u=a.getComputedStyle(n);s=u.getPropertyValue("-webkit-transform")||u.getPropertyValue("transform")}let l=0,c=0;if(s&&s!=="none"&&typeof s=="string"){const u=s.split("(")[1].split(")")[0].split(",");l=parseInt(u[4],10),c=parseInt(u[5],10)}return e==="left"?o?`translateX(${o.right+l-r.left}px)`:`translateX(${a.innerWidth+l-r.left}px)`:e==="right"?o?`translateX(-${r.right-o.left-l}px)`:`translateX(-${r.left+r.width-l}px)`:e==="up"?o?`translateY(${o.bottom+c-r.top}px)`:`translateY(${a.innerHeight+c-r.top}px)`:o?`translateY(-${r.top-o.top+r.height-c}px)`:`translateY(-${r.top+r.height-c}px)`}function Cv(e){return typeof e=="function"?e():e}function Vr(e,n,t){const r=Cv(t),o=wv(e,n,r);o&&(n.style.webkitTransform=o,n.style.transform=o)}const Sv=S.exports.forwardRef(function(n,t){const r=Dt(),o={enter:r.transitions.easing.easeOut,exit:r.transitions.easing.sharp},a={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:s,appear:l=!0,children:c,container:u,direction:d="down",easing:p=o,in:m,onEnter:f,onEntered:b,onEntering:v,onExit:h,onExited:x,onExiting:y,style:C,timeout:T=a,TransitionComponent:R=Ml}=n,A=fe(n,yv),$=S.exports.useRef(null),D=Bn(c.ref,$),E=Bn(D,t),k=H=>W=>{H&&(W===void 0?H($.current):H($.current,W))},P=k((H,W)=>{Vr(d,H,u),Td(H),f&&f(H,W)}),L=k((H,W)=>{const te=mr({timeout:T,style:C,easing:p},{mode:"enter"});H.style.webkitTransition=r.transitions.create("-webkit-transform",g({},te)),H.style.transition=r.transitions.create("transform",g({},te)),H.style.webkitTransform="none",H.style.transform="none",v&&v(H,W)}),B=k(b),O=k(y),z=k(H=>{const W=mr({timeout:T,style:C,easing:p},{mode:"exit"});H.style.webkitTransition=r.transitions.create("-webkit-transform",W),H.style.transition=r.transitions.create("transform",W),Vr(d,H,u),h&&h(H)}),V=k(H=>{H.style.webkitTransition="",H.style.transition="",x&&x(H)}),j=H=>{s&&s($.current,H)},K=S.exports.useCallback(()=>{$.current&&Vr(d,$.current,u)},[d,u]);return S.exports.useEffect(()=>{if(m||d==="down"||d==="right")return;const H=yi(()=>{$.current&&Vr(d,$.current,u)}),W=Pt($.current);return W.addEventListener("resize",H),()=>{H.clear(),W.removeEventListener("resize",H)}},[d,m,u]),S.exports.useEffect(()=>{m||K()},[m,K]),i(R,g({nodeRef:$,onEnter:P,onEntered:B,onEntering:L,onExit:z,onExited:V,onExiting:O,addEndListener:j,appear:l,in:m,timeout:T},A,{children:(H,W)=>S.exports.cloneElement(c,g({ref:E,style:g({visibility:H==="exited"&&!m?"hidden":void 0},C,c.props.style)},W))}))});var kv=Sv;function Pv(e){return ke("MuiDrawer",e)}ye("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const Tv=["BackdropProps"],Rv=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],Ac=(e,n)=>{const{ownerState:t}=e;return[n.root,(t.variant==="permanent"||t.variant==="persistent")&&n.docked,n.modal]},Av=e=>{const{classes:n,anchor:t,variant:r}=e,o={root:["root"],docked:[(r==="permanent"||r==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${I(t)}`,r!=="temporary"&&`paperAnchorDocked${I(t)}`]};return we(o,Pv,n)},Dv=_(wi,{name:"MuiDrawer",slot:"Root",overridesResolver:Ac})(({theme:e})=>({zIndex:e.zIndex.drawer})),Ss=_("div",{shouldForwardProp:ho,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:Ac})({flex:"0 0 auto"}),$v=_(On,{name:"MuiDrawer",slot:"Paper",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.paper,n[`paperAnchor${I(t.anchor)}`],t.variant!=="temporary"&&n[`paperAnchorDocked${I(t.anchor)}`]]}})(({theme:e,ownerState:n})=>g({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:e.zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},n.anchor==="left"&&{left:0},n.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},n.anchor==="right"&&{right:0},n.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},n.anchor==="left"&&n.variant!=="temporary"&&{borderRight:`1px solid ${e.palette.divider}`},n.anchor==="top"&&n.variant!=="temporary"&&{borderBottom:`1px solid ${e.palette.divider}`},n.anchor==="right"&&n.variant!=="temporary"&&{borderLeft:`1px solid ${e.palette.divider}`},n.anchor==="bottom"&&n.variant!=="temporary"&&{borderTop:`1px solid ${e.palette.divider}`})),Dc={left:"right",right:"left",top:"down",bottom:"up"};function Ot(e){return["left","right"].indexOf(e)!==-1}function lr(e,n){return e.direction==="rtl"&&Ot(n)?Dc[n]:n}const Iv=S.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiDrawer"}),o=Dt(),a={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{anchor:s="left",BackdropProps:l,children:c,className:u,elevation:d=16,hideBackdrop:p=!1,ModalProps:{BackdropProps:m}={},onClose:f,open:b=!1,PaperProps:v={},SlideProps:h,TransitionComponent:x=kv,transitionDuration:y=a,variant:C="temporary"}=r,T=fe(r.ModalProps,Tv),R=fe(r,Rv),A=S.exports.useRef(!1);S.exports.useEffect(()=>{A.current=!0},[]);const $=lr(o,s),E=g({},r,{anchor:s,elevation:d,open:b,variant:C},R),k=Av(E),P=i($v,g({elevation:C==="temporary"?d:0,square:!0},v,{className:Q(k.paper,v.className),ownerState:E,children:c}));if(C==="permanent")return i(Ss,g({className:Q(k.root,k.docked,u),ownerState:E,ref:t},R,{children:P}));const L=i(x,g({in:b,direction:Dc[$],timeout:y,appear:A.current},h,{children:P}));return C==="persistent"?i(Ss,g({className:Q(k.root,k.docked,u),ownerState:E,ref:t},R,{children:L})):i(Dv,g({BackdropProps:g({},l,m,{transitionDuration:y}),className:Q(k.root,k.modal,u),open:b,ownerState:E,onClose:f,hideBackdrop:p,ref:t},R,T,{children:L}))});var Bv=Iv;function Ev(e){return ke("MuiFormControlLabel",e)}const Mv=ye("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]);var jr=Mv;const Lv=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","value"],Ov=e=>{const{classes:n,disabled:t,labelPlacement:r,error:o}=e,a={root:["root",t&&"disabled",`labelPlacement${I(r)}`,o&&"error"],label:["label",t&&"disabled"]};return we(a,Ev,n)},Nv=_("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[{[`& .${jr.label}`]:n.label},n.root,n[`labelPlacement${I(t.labelPlacement)}`]]}})(({theme:e,ownerState:n})=>g({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${jr.disabled}`]:{cursor:"default"}},n.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},n.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},n.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${jr.label}`]:{[`&.${jr.disabled}`]:{color:e.palette.text.disabled}}})),zv=S.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiFormControlLabel"}),{className:o,componentsProps:a={},control:s,disabled:l,disableTypography:c,label:u,labelPlacement:d="end"}=r,p=fe(r,Lv),m=kr();let f=l;typeof f=="undefined"&&typeof s.props.disabled!="undefined"&&(f=s.props.disabled),typeof f=="undefined"&&m&&(f=m.disabled);const b={disabled:f};["checked","name","onChange","value","inputRef"].forEach(C=>{typeof s.props[C]=="undefined"&&typeof r[C]!="undefined"&&(b[C]=r[C])});const v=Si({props:r,muiFormControl:m,states:["error"]}),h=g({},r,{disabled:f,labelPlacement:d,error:v.error}),x=Ov(h);let y=u;return y!=null&&y.type!==U&&!c&&(y=i(U,g({component:"span",className:x.label},a.typography,{children:y}))),w(Nv,g({className:Q(x.root,o),ownerState:h,ref:t},p,{children:[S.exports.cloneElement(s,b),y]}))});var Kn=zv;function Fv(e){return ke("MuiFormGroup",e)}ye("MuiFormGroup",["root","row","error"]);const _v=["className","row"],Hv=e=>{const{classes:n,row:t,error:r}=e;return we({root:["root",t&&"row",r&&"error"]},Fv,n)},Wv=_("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.row&&n.row]}})(({ownerState:e})=>g({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})),Vv=S.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiFormGroup"}),{className:o,row:a=!1}=r,s=fe(r,_v),l=kr(),c=Si({props:r,muiFormControl:l,states:["error"]}),u=g({},r,{row:a,error:c.error}),d=Hv(u);return i(Wv,g({className:Q(d.root,o),ownerState:u,ref:t},s))});var zi=Vv;function jv(e){return ke("MuiFormHelperText",e)}const Uv=ye("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]);var ks=Uv,Ps;const qv=["children","className","component","disabled","error","filled","focused","margin","required","variant"],Gv=e=>{const{classes:n,contained:t,size:r,disabled:o,error:a,filled:s,focused:l,required:c}=e,u={root:["root",o&&"disabled",a&&"error",r&&`size${I(r)}`,t&&"contained",l&&"focused",s&&"filled",c&&"required"]};return we(u,jv,n)},Yv=_("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.size&&n[`size${I(t.size)}`],t.contained&&n.contained,t.filled&&n.filled]}})(({theme:e,ownerState:n})=>g({color:e.palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${ks.disabled}`]:{color:e.palette.text.disabled},[`&.${ks.error}`]:{color:e.palette.error.main}},n.size==="small"&&{marginTop:4},n.contained&&{marginLeft:14,marginRight:14})),Kv=S.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiFormHelperText"}),{children:o,className:a,component:s="p"}=r,l=fe(r,qv),c=kr(),u=Si({props:r,muiFormControl:c,states:["variant","size","disabled","error","filled","focused","required"]}),d=g({},r,{component:s,contained:u.variant==="filled"||u.variant==="outlined",variant:u.variant,size:u.size,disabled:u.disabled,error:u.error,filled:u.filled,focused:u.focused,required:u.required}),p=Gv(d);return i(Yv,g({as:s,ownerState:d,className:Q(p.root,a),ref:t},l,{children:o===" "?Ps||(Ps=i("span",{className:"notranslate",children:"\u200B"})):o}))});var $c=Kv;function Qv(e){return ke("MuiInputAdornment",e)}const Jv=ye("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var Ts=Jv,Rs;const Xv=["children","className","component","disablePointerEvents","disableTypography","position","variant"],Zv=(e,n)=>{const{ownerState:t}=e;return[n.root,n[`position${I(t.position)}`],t.disablePointerEvents===!0&&n.disablePointerEvents,n[t.variant]]},e1=e=>{const{classes:n,disablePointerEvents:t,hiddenLabel:r,position:o,size:a,variant:s}=e,l={root:["root",t&&"disablePointerEvents",o&&`position${I(o)}`,s,r&&"hiddenLabel",a&&`size${I(a)}`]};return we(l,Qv,n)},n1=_("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:Zv})(({theme:e,ownerState:n})=>g({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:e.palette.action.active},n.variant==="filled"&&{[`&.${Ts.positionStart}&:not(.${Ts.hiddenLabel})`]:{marginTop:16}},n.position==="start"&&{marginRight:8},n.position==="end"&&{marginLeft:8},n.disablePointerEvents===!0&&{pointerEvents:"none"})),t1=S.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiInputAdornment"}),{children:o,className:a,component:s="div",disablePointerEvents:l=!1,disableTypography:c=!1,position:u,variant:d}=r,p=fe(r,Xv),m=kr()||{};let f=d;d&&m.variant,m&&!f&&(f=m.variant);const b=g({},r,{hiddenLabel:m.hiddenLabel,size:m.size,disablePointerEvents:l,position:u,variant:f}),v=e1(b);return i(Rd.Provider,{value:null,children:i(n1,g({as:s,ownerState:b,className:Q(v.root,a),ref:t},p,{children:typeof o=="string"&&!c?i(U,{color:"text.secondary",children:o}):w(S.exports.Fragment,{children:[u==="start"?Rs||(Rs=i("span",{className:"notranslate",children:"\u200B"})):null,o]})}))})});var io=t1;function r1(e){return ke("MuiLink",e)}const o1=ye("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var i1=o1;const a1=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],s1={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},l1=e=>s1[e]||e,c1=e=>{const{classes:n,component:t,focusVisible:r,underline:o}=e,a={root:["root",`underline${I(o)}`,t==="button"&&"button",r&&"focusVisible"]};return we(a,r1,n)},u1=_(U,{name:"MuiLink",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[`underline${I(t.underline)}`],t.component==="button"&&n.button]}})(({theme:e,ownerState:n})=>{const t=Ad(e,`palette.${l1(n.color)}`)||n.color;return g({},n.underline==="none"&&{textDecoration:"none"},n.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},n.underline==="always"&&{textDecoration:"underline",textDecorationColor:t!=="inherit"?Be(t,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},n.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${i1.focusVisible}`]:{outline:"auto"}})}),d1=S.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiLink"}),{className:o,color:a="primary",component:s="a",onBlur:l,onFocus:c,TypographyClasses:u,underline:d="always",variant:p="inherit"}=r,m=fe(r,a1),{isFocusVisibleRef:f,onBlur:b,onFocus:v,ref:h}=xi(),[x,y]=S.exports.useState(!1),C=Bn(t,h),T=D=>{b(D),f.current===!1&&y(!1),l&&l(D)},R=D=>{v(D),f.current===!0&&y(!0),c&&c(D)},A=g({},r,{color:a,component:s,focusVisible:x,underline:d,variant:p}),$=c1(A);return i(u1,g({className:Q($.root,o),classes:u,color:a,component:s,onBlur:T,onFocus:R,ref:C,ownerState:A,variant:p},m))});var ao=d1,p1=Object.freeze(Object.defineProperty({__proto__:null,default:Dd,menuClasses:$d,getMenuUtilityClass:Id},Symbol.toStringTag,{value:"Module"})),f1=Ln(i("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),m1=Ln(i("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked");const h1=_("span")({position:"relative",display:"flex"}),g1=_(f1)({transform:"scale(1)"}),b1=_(m1)(({theme:e,ownerState:n})=>g({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},n.checked&&{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}));function Ic(e){const{checked:n=!1,classes:t={},fontSize:r}=e,o=g({},e,{checked:n});return w(h1,{className:t.root,ownerState:o,children:[i(g1,{fontSize:r,className:t.background,ownerState:o}),i(b1,{fontSize:r,className:t.dot,ownerState:o})]})}const v1=S.exports.createContext(void 0);var Bc=v1;function x1(){return S.exports.useContext(Bc)}function y1(e){return ke("MuiRadio",e)}const w1=ye("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]);var As=w1;const C1=["checked","checkedIcon","color","icon","name","onChange","size"],S1=e=>{const{classes:n,color:t}=e,r={root:["root",`color${I(t)}`]};return g({},n,we(r,y1,n))},k1=_(Oi,{shouldForwardProp:e=>ho(e)||e==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[`color${I(t.color)}`]]}})(({theme:e,ownerState:n})=>g({color:e.palette.text.secondary,"&:hover":{backgroundColor:Be(n.color==="default"?e.palette.action.active:e.palette[n.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},n.color!=="default"&&{[`&.${As.checked}`]:{color:e.palette[n.color].main}},{[`&.${As.disabled}`]:{color:e.palette.action.disabled}}));function P1(e,n){return typeof n=="object"&&n!==null?e===n:String(e)===String(n)}const Ds=i(Ic,{checked:!0}),$s=i(Ic,{}),T1=S.exports.forwardRef(function(n,t){var r,o;const a=Ce({props:n,name:"MuiRadio"}),{checked:s,checkedIcon:l=Ds,color:c="primary",icon:u=$s,name:d,onChange:p,size:m="medium"}=a,f=fe(a,C1),b=g({},a,{color:c,size:m}),v=S1(b),h=x1();let x=s;const y=El(p,h&&h.onChange);let C=d;return h&&(typeof x=="undefined"&&(x=P1(h.value,a.value)),typeof C=="undefined"&&(C=h.name)),i(k1,g({type:"radio",icon:S.exports.cloneElement(u,{fontSize:(r=$s.props.fontSize)!=null?r:m}),checkedIcon:S.exports.cloneElement(l,{fontSize:(o=Ds.props.fontSize)!=null?o:m}),ownerState:b,classes:v,name:C,checked:x,onChange:y,ref:t},f))});var Xr=T1;const R1=["actions","children","defaultValue","name","onChange","value"],A1=S.exports.forwardRef(function(n,t){const{actions:r,children:o,defaultValue:a,name:s,onChange:l,value:c}=n,u=fe(n,R1),d=S.exports.useRef(null),[p,m]=mt({controlled:c,default:a,name:"RadioGroup"});S.exports.useImperativeHandle(r,()=>({focus:()=>{let h=d.current.querySelector("input:not(:disabled):checked");h||(h=d.current.querySelector("input:not(:disabled)")),h&&h.focus()}}),[]);const f=Bn(t,d),b=h=>{m(h.target.value),l&&l(h,h.target.value)},v=Tr(s);return i(Bc.Provider,{value:{name:v,onChange:b,value:p},children:i(zi,g({role:"radiogroup",ref:f},u,{children:o}))})});var ai=A1;const D1=["component","components","componentsProps","color","size"],ft=g({},Jr,ye("MuiSlider",["colorPrimary","colorSecondary","thumbColorPrimary","thumbColorSecondary","sizeSmall","thumbSizeSmall"])),$1=_("span",{name:"MuiSlider",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e,r=t.marksProp===!0&&t.step!==null?[...Array(Math.floor((t.max-t.min)/t.step)+1)].map((a,s)=>({value:t.min+t.step*s})):t.marksProp||[],o=r.length>0&&r.some(a=>a.label);return[n.root,n[`color${I(t.color)}`],t.size!=="medium"&&n[`size${I(t.size)}`],o&&n.marked,t.orientation==="vertical"&&n.vertical,t.track==="inverted"&&n.trackInverted,t.track===!1&&n.trackFalse]}})(({theme:e,ownerState:n})=>g({borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",color:e.palette[n.color].main,WebkitTapHighlightColor:"transparent"},n.orientation==="horizontal"&&g({height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}},n.size==="small"&&{height:2},n.marked&&{marginBottom:20}),n.orientation==="vertical"&&g({height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}},n.size==="small"&&{width:2},n.marked&&{marginRight:44}),{"@media print":{colorAdjust:"exact"},[`&.${ft.disabled}`]:{pointerEvents:"none",cursor:"default",color:e.palette.grey[400]},[`&.${ft.dragging}`]:{[`& .${ft.thumb}, & .${ft.track}`]:{transition:"none"}}})),I1=_("span",{name:"MuiSlider",slot:"Rail",overridesResolver:(e,n)=>n.rail})(({ownerState:e})=>g({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38},e.orientation==="horizontal"&&{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"},e.orientation==="vertical"&&{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"},e.track==="inverted"&&{opacity:1})),B1=_("span",{name:"MuiSlider",slot:"Track",overridesResolver:(e,n)=>n.track})(({theme:e,ownerState:n})=>{const t=e.palette.mode==="light"?gr(e.palette[n.color].main,.62):hr(e.palette[n.color].main,.5);return g({display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:e.transitions.create(["left","width","bottom","height"],{duration:e.transitions.duration.shortest})},n.size==="small"&&{border:"none"},n.orientation==="horizontal"&&{height:"inherit",top:"50%",transform:"translateY(-50%)"},n.orientation==="vertical"&&{width:"inherit",left:"50%",transform:"translateX(-50%)"},n.track===!1&&{display:"none"},n.track==="inverted"&&{backgroundColor:t,borderColor:t})}),E1=_("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.thumb,n[`thumbColor${I(t.color)}`],t.size!=="medium"&&n[`thumbSize${I(t.size)}`]]}})(({theme:e,ownerState:n})=>g({position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow","left","bottom"],{duration:e.transitions.duration.shortest})},n.size==="small"&&{width:12,height:12},n.orientation==="horizontal"&&{top:"50%",transform:"translate(-50%, -50%)"},n.orientation==="vertical"&&{left:"50%",transform:"translate(-50%, 50%)"},{"&:before":g({position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:e.shadows[2]},n.size==="small"&&{boxShadow:"none"}),"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},[`&:hover, &.${ft.focusVisible}`]:{boxShadow:`0px 0px 0px 8px ${Be(e.palette[n.color].main,.16)}`,"@media (hover: none)":{boxShadow:"none"}},[`&.${ft.active}`]:{boxShadow:`0px 0px 0px 14px ${Be(e.palette[n.color].main,.16)}`},[`&.${ft.disabled}`]:{"&:hover":{boxShadow:"none"}}})),M1=_(xc,{name:"MuiSlider",slot:"ValueLabel",overridesResolver:(e,n)=>n.valueLabel})(({theme:e,ownerState:n})=>g({[`&.${ft.valueLabelOpen}`]:{transform:"translateY(-100%) scale(1)"},zIndex:1,whiteSpace:"nowrap"},e.typography.body2,{fontWeight:500,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),top:-10,transformOrigin:"bottom center",transform:"translateY(-100%) scale(0)",position:"absolute",backgroundColor:e.palette.grey[600],borderRadius:2,color:e.palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem"},n.size==="small"&&{fontSize:e.typography.pxToRem(12),padding:"0.25rem 0.5rem"},{"&:before":{position:"absolute",content:'""',width:8,height:8,bottom:0,left:"50%",transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit"}})),L1=_("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:e=>Nl(e)&&e!=="markActive",overridesResolver:(e,n)=>n.mark})(({theme:e,ownerState:n,markActive:t})=>g({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor"},n.orientation==="horizontal"&&{top:"50%",transform:"translate(-1px, -50%)"},n.orientation==="vertical"&&{left:"50%",transform:"translate(-50%, 1px)"},t&&{backgroundColor:e.palette.background.paper,opacity:.8})),O1=_("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:e=>Nl(e)&&e!=="markLabelActive",overridesResolver:(e,n)=>n.markLabel})(({theme:e,ownerState:n,markLabelActive:t})=>g({},e.typography.body2,{color:e.palette.text.secondary,position:"absolute",whiteSpace:"nowrap"},n.orientation==="horizontal"&&{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}},n.orientation==="vertical"&&{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}},t&&{color:e.palette.text.primary})),N1=e=>{const{color:n,size:t,classes:r={}}=e;return g({},r,{root:Q(r.root,sr(`color${I(n)}`),r[`color${I(n)}`],t&&[sr(`size${I(t)}`),r[`size${I(t)}`]]),thumb:Q(r.thumb,sr(`thumbColor${I(n)}`),r[`thumbColor${I(n)}`],t&&[sr(`thumbSize${I(t)}`),r[`thumbSize${I(t)}`]])})},z1=S.exports.forwardRef(function(n,t){var r,o,a,s;const l=Ce({props:n,name:"MuiSlider"}),u=Dt().direction==="rtl",{component:d="span",components:p={},componentsProps:m={},color:f="primary",size:b="medium"}=l,v=fe(l,D1),h=g({},l,{color:f,size:b}),x=N1(h);return i(mh,g({},v,{isRtl:u,components:g({Root:$1,Rail:I1,Track:B1,Thumb:E1,ValueLabel:M1,Mark:L1,MarkLabel:O1},p),componentsProps:g({},m,{root:g({},m.root,Hr(p.Root)&&{as:d,ownerState:g({},(r=m.root)==null?void 0:r.ownerState,{color:f,size:b})}),thumb:g({},m.thumb,Hr(p.Thumb)&&{ownerState:g({},(o=m.thumb)==null?void 0:o.ownerState,{color:f,size:b})}),track:g({},m.track,Hr(p.Track)&&{ownerState:g({},(a=m.track)==null?void 0:a.ownerState,{color:f,size:b})}),valueLabel:g({},m.valueLabel,Hr(p.ValueLabel)&&{ownerState:g({},(s=m.valueLabel)==null?void 0:s.ownerState,{color:f,size:b})})}),classes:x,ref:t}))});var Zn=z1;function F1(e){return ke("MuiSnackbarContent",e)}ye("MuiSnackbarContent",["root","message","action"]);const _1=["action","className","message","role"],H1=e=>{const{classes:n}=e;return we({root:["root"],action:["action"],message:["message"]},F1,n)},W1=_(On,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(e,n)=>n.root})(({theme:e})=>{const n=e.palette.mode==="light"?.8:.98,t=Bd(e.palette.background.default,n);return g({},e.typography.body2,{color:e.palette.getContrastText(t),backgroundColor:t,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:e.shape.borderRadius,flexGrow:1,[e.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),V1=_("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(e,n)=>n.message})({padding:"8px 0"}),j1=_("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(e,n)=>n.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),U1=S.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiSnackbarContent"}),{action:o,className:a,message:s,role:l="alert"}=r,c=fe(r,_1),u=r,d=H1(u);return w(W1,g({role:l,square:!0,elevation:6,className:Q(d.root,a),ownerState:u,ref:t},c,{children:[i(V1,{className:d.message,ownerState:u,children:s}),o?i(j1,{className:d.action,ownerState:u,children:o}):null]}))});var q1=U1;function G1(e){return ke("MuiSnackbar",e)}ye("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const Y1=["onEnter","onExited"],K1=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],Q1=e=>{const{classes:n,anchorOrigin:t}=e,r={root:["root",`anchorOrigin${I(t.vertical)}${I(t.horizontal)}`]};return we(r,G1,n)},J1=_("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[`anchorOrigin${I(t.anchorOrigin.vertical)}${I(t.anchorOrigin.horizontal)}`]]}})(({theme:e,ownerState:n})=>{const t=g({},!n.isRtl&&{left:"50%",right:"auto",transform:"translateX(-50%)"},n.isRtl&&{right:"50%",left:"auto",transform:"translateX(50%)"});return g({zIndex:e.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},n.anchorOrigin.vertical==="top"?{top:8}:{bottom:8},n.anchorOrigin.horizontal==="left"&&{justifyContent:"flex-start"},n.anchorOrigin.horizontal==="right"&&{justifyContent:"flex-end"},{[e.breakpoints.up("sm")]:g({},n.anchorOrigin.vertical==="top"?{top:24}:{bottom:24},n.anchorOrigin.horizontal==="center"&&t,n.anchorOrigin.horizontal==="left"&&g({},!n.isRtl&&{left:24,right:"auto"},n.isRtl&&{right:24,left:"auto"}),n.anchorOrigin.horizontal==="right"&&g({},!n.isRtl&&{right:24,left:"auto"},n.isRtl&&{left:24,right:"auto"}))})}),X1=S.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiSnackbar"}),o=Dt(),a={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{action:s,anchorOrigin:{vertical:l,horizontal:c}={vertical:"bottom",horizontal:"left"},autoHideDuration:u=null,children:d,className:p,ClickAwayListenerProps:m,ContentProps:f,disableWindowBlurListener:b=!1,message:v,onBlur:h,onClose:x,onFocus:y,onMouseEnter:C,onMouseLeave:T,open:R,resumeHideDuration:A,TransitionComponent:$=zl,transitionDuration:D=a,TransitionProps:{onEnter:E,onExited:k}={}}=r,P=fe(r.TransitionProps,Y1),L=fe(r,K1),B=o.direction==="rtl",O=g({},r,{anchorOrigin:{vertical:l,horizontal:c},isRtl:B}),z=Q1(O),V=S.exports.useRef(),[j,K]=S.exports.useState(!0),H=yn((...ae)=>{x&&x(...ae)}),W=yn(ae=>{!x||ae==null||(clearTimeout(V.current),V.current=setTimeout(()=>{H(null,"timeout")},ae))});S.exports.useEffect(()=>(R&&W(u),()=>{clearTimeout(V.current)}),[R,u,W]);const te=()=>{clearTimeout(V.current)},Z=S.exports.useCallback(()=>{u!=null&&W(A!=null?A:u*.5)},[u,A,W]),re=ae=>{y&&y(ae),te()},de=ae=>{C&&C(ae),te()},ce=ae=>{h&&h(ae),Z()},Y=ae=>{T&&T(ae),Z()},me=ae=>{x&&x(ae,"clickaway")},be=ae=>{K(!0),k&&k(ae)},oe=(ae,$e)=>{K(!1),E&&E(ae,$e)};return S.exports.useEffect(()=>{if(!b&&R)return window.addEventListener("focus",Z),window.addEventListener("blur",te),()=>{window.removeEventListener("focus",Z),window.removeEventListener("blur",te)}},[b,Z,R]),S.exports.useEffect(()=>{if(!R)return;function ae($e){$e.defaultPrevented||($e.key==="Escape"||$e.key==="Esc")&&x&&x($e,"escapeKeyDown")}return document.addEventListener("keydown",ae),()=>{document.removeEventListener("keydown",ae)}},[j,R,x]),!R&&j?null:i(uc,g({onClickAway:me},m,{children:i(J1,g({className:Q(z.root,p),onBlur:ce,onFocus:re,onMouseEnter:de,onMouseLeave:Y,ownerState:O,ref:t,role:"presentation"},L,{children:i($,g({appear:!0,in:R,timeout:D,direction:l==="top"?"down":"up",onEnter:oe,onExited:be},P,{children:d||i(q1,g({message:v,action:s},f))}))}))}))});var Z1=X1;const e0=["anchor","classes","className","width","style"],n0=_("div")(({theme:e,ownerState:n})=>g({position:"fixed",top:0,left:0,bottom:0,zIndex:e.zIndex.drawer-1},n.anchor==="left"&&{right:"auto"},n.anchor==="right"&&{left:"auto",right:0},n.anchor==="top"&&{bottom:"auto",right:0},n.anchor==="bottom"&&{top:"auto",bottom:0,right:0})),t0=S.exports.forwardRef(function(n,t){const{anchor:r,classes:o={},className:a,width:s,style:l}=n,c=fe(n,e0),u=n;return i(n0,g({className:Q("PrivateSwipeArea-root",o.root,o[`anchor${I(r)}`],a),ref:t,style:g({[Ot(r)?"width":"height"]:s},l),ownerState:u},c))});var r0=t0;const o0=["BackdropProps"],i0=["anchor","disableBackdropTransition","disableDiscovery","disableSwipeToOpen","hideBackdrop","hysteresis","minFlingVelocity","ModalProps","onClose","onOpen","open","PaperProps","SwipeAreaProps","swipeAreaWidth","transitionDuration","variant"],Ur=3,Ho=20;let Xn=null;function Wo(e,n,t){return e==="right"?t.body.offsetWidth-n[0].pageX:n[0].pageX}function Vo(e,n,t){return e==="bottom"?t.innerHeight-n[0].clientY:n[0].clientY}function or(e,n){return e?n.clientWidth:n.clientHeight}function Is(e,n,t,r){return Math.min(Math.max(t?n-e:r+n-e,0),r)}function a0(e,n){const t=[];for(;e&&e!==n.parentElement;){const r=Pt(n).getComputedStyle(e);r.getPropertyValue("position")==="absolute"||r.getPropertyValue("overflow-x")==="hidden"||(e.clientWidth>0&&e.scrollWidth>e.clientWidth||e.clientHeight>0&&e.scrollHeight>e.clientHeight)&&t.push(e),e=e.parentElement}return t}function s0({domTreeShapes:e,start:n,current:t,anchor:r}){const o={scrollPosition:{x:"scrollLeft",y:"scrollTop"},scrollLength:{x:"scrollWidth",y:"scrollHeight"},clientLength:{x:"clientWidth",y:"clientHeight"}};return e.some(a=>{let s=t>=n;(r==="top"||r==="left")&&(s=!s);const l=r==="left"||r==="right"?"x":"y",c=Math.round(a[o.scrollPosition[l]]),u=c>0,d=c+a[o.clientLength[l]]<a[o.scrollLength[l]];return!!(s&&d||!s&&u)})}const l0=typeof navigator!="undefined"&&/iPad|iPhone|iPod/.test(navigator.userAgent),c0=S.exports.forwardRef(function(n,t){const r=Ed({name:"MuiSwipeableDrawer",props:n}),o=Dt(),a={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{anchor:s="left",disableBackdropTransition:l=!1,disableDiscovery:c=!1,disableSwipeToOpen:u=l0,hideBackdrop:d,hysteresis:p=.52,minFlingVelocity:m=450,ModalProps:{BackdropProps:f}={},onClose:b,onOpen:v,open:h,PaperProps:x={},SwipeAreaProps:y,swipeAreaWidth:C=20,transitionDuration:T=a,variant:R="temporary"}=r,A=fe(r.ModalProps,o0),$=fe(r,i0),[D,E]=S.exports.useState(!1),k=S.exports.useRef({isSwiping:null}),P=S.exports.useRef(),L=S.exports.useRef(),B=S.exports.useRef(),O=S.exports.useRef(!1),z=S.exports.useRef();_t(()=>{z.current=null},[h]);const V=S.exports.useCallback((W,te={})=>{const{mode:Z=null,changeTransition:re=!0}=te,de=lr(o,s),ce=["right","bottom"].indexOf(de)!==-1?1:-1,Y=Ot(s),me=Y?`translate(${ce*W}px, 0)`:`translate(0, ${ce*W}px)`,be=B.current.style;be.webkitTransform=me,be.transform=me;let oe="";if(Z&&(oe=o.transitions.create("all",mr({easing:void 0,style:void 0,timeout:T},{mode:Z}))),re&&(be.webkitTransition=oe,be.transition=oe),!l&&!d){const ae=L.current.style;ae.opacity=1-W/or(Y,B.current),re&&(ae.webkitTransition=oe,ae.transition=oe)}},[s,l,d,o,T]),j=yn(W=>{if(!O.current)return;if(Xn=null,O.current=!1,E(!1),!k.current.isSwiping){k.current.isSwiping=null;return}k.current.isSwiping=null;const te=lr(o,s),Z=Ot(s);let re;Z?re=Wo(te,W.changedTouches,Rn(W.currentTarget)):re=Vo(te,W.changedTouches,Pt(W.currentTarget));const de=Z?k.current.startX:k.current.startY,ce=or(Z,B.current),Y=Is(re,de,h,ce),me=Y/ce;if(Math.abs(k.current.velocity)>m&&(z.current=Math.abs((ce-Y)/k.current.velocity)*1e3),h){k.current.velocity>m||me>p?b():V(0,{mode:"exit"});return}k.current.velocity<-m||1-me>p?v():V(or(Z,B.current),{mode:"enter"})}),K=yn(W=>{if(!B.current||!O.current||Xn!==null&&Xn!==k.current)return;const te=lr(o,s),Z=Ot(s),re=Wo(te,W.touches,Rn(W.currentTarget)),de=Vo(te,W.touches,Pt(W.currentTarget));if(h&&B.current.contains(W.target)&&Xn===null){const oe=a0(W.target,B.current);if(s0({domTreeShapes:oe,start:Z?k.current.startX:k.current.startY,current:Z?re:de,anchor:s})){Xn=!0;return}Xn=k.current}if(k.current.isSwiping==null){const oe=Math.abs(re-k.current.startX),ae=Math.abs(de-k.current.startY),$e=Z?oe>ae&&oe>Ur:ae>oe&&ae>Ur;if($e&&W.cancelable&&W.preventDefault(),$e===!0||(Z?ae>Ur:oe>Ur)){if(k.current.isSwiping=$e,!$e){j(W);return}k.current.startX=re,k.current.startY=de,!c&&!h&&(Z?k.current.startX-=Ho:k.current.startY-=Ho)}}if(!k.current.isSwiping)return;const ce=or(Z,B.current);let Y=Z?k.current.startX:k.current.startY;h&&!k.current.paperHit&&(Y=Math.min(Y,ce));const me=Is(Z?re:de,Y,h,ce);if(h)if(k.current.paperHit)me===0&&(k.current.startX=re,k.current.startY=de);else if(Z?re<ce:de<ce)k.current.paperHit=!0,k.current.startX=re,k.current.startY=de;else return;k.current.lastTranslate===null&&(k.current.lastTranslate=me,k.current.lastTime=performance.now()+1);const be=(me-k.current.lastTranslate)/(performance.now()-k.current.lastTime)*1e3;k.current.velocity=k.current.velocity*.4+be*.6,k.current.lastTranslate=me,k.current.lastTime=performance.now(),W.cancelable&&W.preventDefault(),V(me)}),H=yn(W=>{if(W.defaultPrevented||W.defaultMuiPrevented||h&&(d||!L.current.contains(W.target))&&!B.current.contains(W.target))return;const te=lr(o,s),Z=Ot(s),re=Wo(te,W.touches,Rn(W.currentTarget)),de=Vo(te,W.touches,Pt(W.currentTarget));if(!h){if(u||W.target!==P.current)return;if(Z){if(re>C)return}else if(de>C)return}W.defaultMuiPrevented=!0,Xn=null,k.current.startX=re,k.current.startY=de,E(!0),!h&&B.current&&V(or(Z,B.current)+(c?15:-Ho),{changeTransition:!1}),k.current.velocity=0,k.current.lastTime=null,k.current.lastTranslate=null,k.current.paperHit=!1,O.current=!0});return S.exports.useEffect(()=>{if(R==="temporary"){const W=Rn(B.current);return W.addEventListener("touchstart",H),W.addEventListener("touchmove",K,{passive:!h}),W.addEventListener("touchend",j),()=>{W.removeEventListener("touchstart",H),W.removeEventListener("touchmove",K,{passive:!h}),W.removeEventListener("touchend",j)}}},[R,h,H,K,j]),S.exports.useEffect(()=>()=>{Xn===k.current&&(Xn=null)},[]),S.exports.useEffect(()=>{h||E(!1)},[h]),w(S.exports.Fragment,{children:[i(Bv,g({open:R==="temporary"&&D?!0:h,variant:R,ModalProps:g({BackdropProps:g({},f,{ref:L})},A),hideBackdrop:d,PaperProps:g({},x,{style:g({pointerEvents:R==="temporary"&&!h?"none":""},x.style),ref:B}),anchor:s,transitionDuration:z.current||T,onClose:b,ref:t},$)),!u&&R==="temporary"&&i(eh,{children:i(r0,g({anchor:s,ref:P,width:C},y))})]})});var u0=c0;function d0(e){return ke("MuiSwitch",e)}const p0=ye("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]);var gn=p0;const f0=["className","color","edge","size","sx"],m0=e=>{const{classes:n,edge:t,size:r,color:o,checked:a,disabled:s}=e,l={root:["root",t&&`edge${I(t)}`,`size${I(r)}`],switchBase:["switchBase",`color${I(o)}`,a&&"checked",s&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},c=we(l,d0,n);return g({},n,c)},h0=_("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.edge&&n[`edge${I(t.edge)}`],n[`size${I(t.size)}`]]}})(({ownerState:e})=>g({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},e.edge==="start"&&{marginLeft:-8},e.edge==="end"&&{marginRight:-8},e.size==="small"&&{width:40,height:24,padding:7,[`& .${gn.thumb}`]:{width:16,height:16},[`& .${gn.switchBase}`]:{padding:4,[`&.${gn.checked}`]:{transform:"translateX(16px)"}}})),g0=_(Oi,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.switchBase,{[`& .${gn.input}`]:n.input},t.color!=="default"&&n[`color${I(t.color)}`]]}})(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.palette.mode==="light"?e.palette.common.white:e.palette.grey[300],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${gn.checked}`]:{transform:"translateX(20px)"},[`&.${gn.disabled}`]:{color:e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[600]},[`&.${gn.checked} + .${gn.track}`]:{opacity:.5},[`&.${gn.disabled} + .${gn.track}`]:{opacity:e.palette.mode==="light"?.12:.2},[`& .${gn.input}`]:{left:"-100%",width:"300%"}}),({theme:e,ownerState:n})=>g({"&:hover":{backgroundColor:Be(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},n.color!=="default"&&{[`&.${gn.checked}`]:{color:e.palette[n.color].main,"&:hover":{backgroundColor:Be(e.palette[n.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${gn.disabled}`]:{color:e.palette.mode==="light"?gr(e.palette[n.color].main,.62):hr(e.palette[n.color].main,.55)}},[`&.${gn.checked} + .${gn.track}`]:{backgroundColor:e.palette[n.color].main}})),b0=_("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,n)=>n.track})(({theme:e})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.palette.mode==="light"?e.palette.common.black:e.palette.common.white,opacity:e.palette.mode==="light"?.38:.3})),v0=_("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,n)=>n.thumb})(({theme:e})=>({boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),x0=S.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiSwitch"}),{className:o,color:a="primary",edge:s=!1,size:l="medium",sx:c}=r,u=fe(r,f0),d=g({},r,{color:a,edge:s,size:l}),p=m0(d),m=i(v0,{className:p.thumb,ownerState:d});return w(h0,{className:Q(p.root,o),sx:c,ownerState:d,children:[i(g0,g({type:"checkbox",icon:m,checkedIcon:m,ref:t,ownerState:d},u,{classes:g({},p,{root:p.switchBase})})),i(b0,{className:p.track,ownerState:d})]})});var so=x0;const y0=S.exports.createContext();var Ec=y0;function w0(e){return ke("MuiTable",e)}ye("MuiTable",["root","stickyHeader"]);const C0=["className","component","padding","size","stickyHeader"],S0=e=>{const{classes:n,stickyHeader:t}=e;return we({root:["root",t&&"stickyHeader"]},w0,n)},k0=_("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.stickyHeader&&n.stickyHeader]}})(({theme:e,ownerState:n})=>g({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":g({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},n.stickyHeader&&{borderCollapse:"separate"})),Bs="table",P0=S.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiTable"}),{className:o,component:a=Bs,padding:s="normal",size:l="medium",stickyHeader:c=!1}=r,u=fe(r,C0),d=g({},r,{component:a,padding:s,size:l,stickyHeader:c}),p=S0(d),m=S.exports.useMemo(()=>({padding:s,size:l,stickyHeader:c}),[s,l,c]);return i(Ec.Provider,{value:m,children:i(k0,g({as:a,role:a===Bs?null:"table",ref:t,className:Q(p.root,o),ownerState:d},u))})});var bt=P0;const T0=S.exports.createContext();var So=T0;function R0(e){return ke("MuiTableBody",e)}ye("MuiTableBody",["root"]);const A0=["className","component"],D0=e=>{const{classes:n}=e;return we({root:["root"]},R0,n)},$0=_("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,n)=>n.root})({display:"table-row-group"}),I0={variant:"body"},Es="tbody",B0=S.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiTableBody"}),{className:o,component:a=Es}=r,s=fe(r,A0),l=g({},r,{component:a}),c=D0(l);return i(So.Provider,{value:I0,children:i($0,g({className:Q(c.root,o),as:a,ref:t,role:a===Es?null:"rowgroup",ownerState:l},s))})});var vt=B0;function E0(e){return ke("MuiTableCell",e)}const M0=ye("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]);var L0=M0;const O0=["align","className","component","padding","scope","size","sortDirection","variant"],N0=e=>{const{classes:n,variant:t,align:r,padding:o,size:a,stickyHeader:s}=e,l={root:["root",t,s&&"stickyHeader",r!=="inherit"&&`align${I(r)}`,o!=="normal"&&`padding${I(o)}`,`size${I(a)}`]};return we(l,E0,n)},z0=_("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[t.variant],n[`size${I(t.size)}`],t.padding!=="normal"&&n[`padding${I(t.padding)}`],t.align!=="inherit"&&n[`align${I(t.align)}`],t.stickyHeader&&n.stickyHeader]}})(({theme:e,ownerState:n})=>g({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:`1px solid
    ${e.palette.mode==="light"?gr(Be(e.palette.divider,1),.88):hr(Be(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},n.variant==="head"&&{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},n.variant==="body"&&{color:e.palette.text.primary},n.variant==="footer"&&{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},n.size==="small"&&{padding:"6px 16px",[`&.${L0.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},n.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},n.padding==="none"&&{padding:0},n.align==="left"&&{textAlign:"left"},n.align==="center"&&{textAlign:"center"},n.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},n.align==="justify"&&{textAlign:"justify"},n.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:e.palette.background.default})),F0=S.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiTableCell"}),{align:o="inherit",className:a,component:s,padding:l,scope:c,size:u,sortDirection:d,variant:p}=r,m=fe(r,O0),f=S.exports.useContext(Ec),b=S.exports.useContext(So),v=b&&b.variant==="head";let h;s?h=s:h=v?"th":"td";let x=c;!x&&v&&(x="col");const y=p||b&&b.variant,C=g({},r,{align:o,component:h,padding:l||(f&&f.padding?f.padding:"normal"),size:u||(f&&f.size?f.size:"medium"),sortDirection:d,stickyHeader:y==="head"&&f&&f.stickyHeader,variant:y}),T=N0(C);let R=null;return d&&(R=d==="asc"?"ascending":"descending"),i(z0,g({as:h,ref:t,className:Q(T.root,a),"aria-sort":R,scope:x,ownerState:C},m))});var ze=F0;function _0(e){return ke("MuiTableContainer",e)}ye("MuiTableContainer",["root"]);const H0=["className","component"],W0=e=>{const{classes:n}=e;return we({root:["root"]},_0,n)},V0=_("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,n)=>n.root})({width:"100%",overflowX:"auto"}),j0=S.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiTableContainer"}),{className:o,component:a="div"}=r,s=fe(r,H0),l=g({},r,{component:a}),c=W0(l);return i(V0,g({ref:t,as:a,className:Q(c.root,o),ownerState:l},s))});var Ms=j0;function U0(e){return ke("MuiTableHead",e)}ye("MuiTableHead",["root"]);const q0=["className","component"],G0=e=>{const{classes:n}=e;return we({root:["root"]},U0,n)},Y0=_("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,n)=>n.root})({display:"table-header-group"}),K0={variant:"head"},Ls="thead",Q0=S.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiTableHead"}),{className:o,component:a=Ls}=r,s=fe(r,q0),l=g({},r,{component:a}),c=G0(l);return i(So.Provider,{value:K0,children:i(Y0,g({as:a,className:Q(c.root,o),ref:t,role:a===Ls?null:"rowgroup",ownerState:l},s))})});var Os=Q0;function J0(e){return ke("MuiToolbar",e)}ye("MuiToolbar",["root","gutters","regular","dense"]);const X0=["className","component","disableGutters","variant"],Z0=e=>{const{classes:n,disableGutters:t,variant:r}=e;return we({root:["root",!t&&"gutters",r]},J0,n)},ex=_("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,!t.disableGutters&&n.gutters,n[t.variant]]}})(({theme:e,ownerState:n})=>g({position:"relative",display:"flex",alignItems:"center"},!n.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}},n.variant==="dense"&&{minHeight:48}),({theme:e,ownerState:n})=>n.variant==="regular"&&e.mixins.toolbar),nx=S.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiToolbar"}),{className:o,component:a="div",disableGutters:s=!1,variant:l="regular"}=r,c=fe(r,X0),u=g({},r,{component:a,disableGutters:s,variant:l}),d=Z0(u);return i(ex,g({as:a,className:Q(d.root,o),ref:t,ownerState:u},c))});var Ns=nx;function tx(e){return ke("MuiTableRow",e)}const rx=ye("MuiTableRow",["root","selected","hover","head","footer"]);var zs=rx;const ox=["className","component","hover","selected"],ix=e=>{const{classes:n,selected:t,hover:r,head:o,footer:a}=e;return we({root:["root",t&&"selected",r&&"hover",o&&"head",a&&"footer"]},tx,n)},ax=_("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.head&&n.head,t.footer&&n.footer]}})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${zs.hover}:hover`]:{backgroundColor:e.palette.action.hover},[`&.${zs.selected}`]:{backgroundColor:Be(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:Be(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),Fs="tr",sx=S.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiTableRow"}),{className:o,component:a=Fs,hover:s=!1,selected:l=!1}=r,c=fe(r,ox),u=S.exports.useContext(So),d=g({},r,{component:a,hover:s,selected:l,head:u&&u.variant==="head",footer:u&&u.variant==="footer"}),p=ix(d);return i(ax,g({as:a,ref:t,className:Q(p.root,o),role:a===Fs?null:"row",ownerState:d},c))});var rt=sx;function lx(e){return ke("MuiTextField",e)}ye("MuiTextField",["root"]);const cx=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],ux={standard:Fn,filled:Md,outlined:Ld},dx=e=>{const{classes:n}=e;return we({root:["root"]},lx,n)},px=_(mn,{name:"MuiTextField",slot:"Root",overridesResolver:(e,n)=>n.root})({}),fx=S.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiTextField"}),{autoComplete:o,autoFocus:a=!1,children:s,className:l,color:c="primary",defaultValue:u,disabled:d=!1,error:p=!1,FormHelperTextProps:m,fullWidth:f=!1,helperText:b,id:v,InputLabelProps:h,inputProps:x,InputProps:y,inputRef:C,label:T,maxRows:R,minRows:A,multiline:$=!1,name:D,onBlur:E,onChange:k,onFocus:P,placeholder:L,required:B=!1,rows:O,select:z=!1,SelectProps:V,type:j,value:K,variant:H="outlined"}=r,W=fe(r,cx),te=g({},r,{autoFocus:a,color:c,disabled:d,error:p,fullWidth:f,multiline:$,required:B,select:z,variant:H}),Z=dx(te),re={};H==="outlined"&&(h&&typeof h.shrink!="undefined"&&(re.notched=h.shrink),re.label=T),z&&((!V||!V.native)&&(re.id=void 0),re["aria-describedby"]=void 0);const de=Tr(v),ce=b&&de?`${de}-helper-text`:void 0,Y=T&&de?`${de}-label`:void 0,me=ux[H],be=i(me,g({"aria-describedby":ce,autoComplete:o,autoFocus:a,defaultValue:u,fullWidth:f,multiline:$,name:D,rows:O,maxRows:R,minRows:A,type:j,value:K,id:de,inputRef:C,onBlur:E,onChange:k,onFocus:P,placeholder:L,inputProps:x},re,y));return w(px,g({className:Q(Z.root,l),disabled:d,error:p,fullWidth:f,ref:t,required:B,color:c,variant:H,ownerState:te},W,{children:[T!=null&&T!==""&&i(zn,g({htmlFor:de,id:Y},h,{children:T})),z?i(dt,g({"aria-describedby":ce,id:de,labelId:Y,value:K,input:be},V,{children:s})):be,b&&i($c,g({id:ce},m,{children:b}))]}))});var Hn=fx,Fi={},qe={exports:{}};(function(e){function n(t){return t&&t.__esModule?t:{default:t}}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports})(qe);var Ge={},mx=Fl(gh);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=mx})(Ge);var hx=qe.exports;Object.defineProperty(Fi,"__esModule",{value:!0});var Mc=Fi.default=void 0;vx(S.exports);var gx=hx(Ge),bx=Ke;function Lc(e){if(typeof WeakMap!="function")return null;var n=new WeakMap,t=new WeakMap;return(Lc=function(r){return r?t:n})(e)}function vx(e,n){if(!n&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var t=Lc(n);if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)){var s=o?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}var xx=(0,gx.default)((0,bx.jsx)("path",{d:"M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"}),"GitHub");Mc=Fi.default=xx;var _i={},yx=qe.exports;Object.defineProperty(_i,"__esModule",{value:!0});var si=_i.default=void 0,wx=yx(Ge),Cx=Ke,Sx=(0,wx.default)((0,Cx.jsx)("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");si=_i.default=Sx;const kx={"GraphQL ID":"presetAffixes",list:[{name:"Power DPS",value:`{
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
}`}]},Px={"GraphQL ID":"presetBuffs",list:[{name:"None",value:"{ }"},{name:"Condi",value:`{
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
}`}]},Tx={"GraphQL ID":"presetDistribution",list:[{name:"None",value:`{
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
}`}]},Rx={"GraphQL ID":"presetExtras",list:[{name:"Power (Fractal)",value:`{
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
}`}]},Ax={"GraphQL ID":"presetInfusions",list:[{name:"None",value:`{
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
}`}]},Dx={"GraphQL ID":"presetTraits",list:[{name:"Power Chrono IA",profession:"Chronomancer",traits:`{
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
}`}]},$x={"GraphQL ID":"templates",list:[{class:"Mesmer",builds:[{name:"Power Chrono IA",id:"pchrono",specialization:"Chronomancer",boons:"Power (spotter)",priority:"Power DPS",distribution:"Power Chrono IA",traits:"Power Chrono IA",extras:"Power (Fractal)",weaponType:"unset"},{name:"Alacrity Mirage",id:"alacmirage",specialization:"Mirage",boons:"Condi",priority:"Condi DPS",distribution:"Staff Mirage",traits:"Staff Mirage",extras:"Alacrity Mirage (Raid)",weaponType:"Two-handed"},{name:"Axe Mirage",id:"axe-mirage-deception-torch",specialization:"Mirage",boons:"Condi",priority:"Condi DPS",distribution:"Axe Mirage (Deception Torch)",traits:"Axe Mirage",extras:"DPS Mirage (Raid)",weaponType:"Dual wield"},{name:"Condi Chrono STM",id:"condi-chrono-stm",specialization:"Chronomancer",boons:"Condi",priority:"Condi DPS",distribution:"Condi Chrono STM",traits:"Condi Chrono STM",extras:"Condi Chrono STM",weaponType:"Dual wield"},{name:"Power Virtuoso",id:"pvirt",specialization:"Virtuoso",boons:"Power (spotter)",priority:"Power DPS",distribution:"Power Virtuoso",traits:"Power Virtuoso (no accuracy)",extras:"Power (Fractal)",weaponType:"unset"},{name:"Condi Virtuoso",id:"cvirt",specialization:"Virtuoso",boons:"Condi",priority:"Condi DPS Rampager",distribution:"Condi Virtuoso",traits:"Condi Virtuoso",extras:"Condi Virtuoso",weaponType:"Dual wield"},{name:"Condi Virtuoso (sharpening sorrow)",id:"cvirt-sorrow",specialization:"Virtuoso",boons:"Condi",priority:"Condi DPS Rampager",distribution:"Condi Virtuoso (sharpening sorrow)",traits:"Condi Virtuoso (sharpening sorrow)",extras:"Condi Virtuoso",weaponType:"Dual wield"}]},{class:"Guardian",builds:[{name:"DH Radiance w/ PI",id:"dh-radiance-pi",specialization:"Dragonhunter",boons:"Power (spotter)",priority:"Power DPS",distribution:"DH Radiance",traits:"DH Radiance w/ PI",extras:"Power (Fractal)",weaponType:"Two-handed"},{name:"DH Radiance",id:"dh-radiance",specialization:"Dragonhunter",boons:"Power (spotter)",priority:"Power DPS",distribution:"DH Radiance",traits:"DH Radiance",extras:"Power (Fractal)",weaponType:"Two-handed"},{name:"DH Virtues",id:"dh-virtues",specialization:"Dragonhunter",boons:"Power (spotter)",priority:"Power DPS",distribution:"DH Virtues",traits:"DH Virtues",extras:"DH Virtues (Fractal)",weaponType:"Two-handed"},{name:"Core Guardian",id:"core-guard",specialization:"Guardian",boons:"Power (spotter)",priority:"Power DPS",distribution:"Core Guardian",traits:"Core Guardian",extras:"Power (Fractal)",weaponType:"Two-handed"},{name:"Power Willbender Virtues",id:"pwb-virtues",specialization:"Willbender",boons:"Power (spotter)",priority:"Power DPS",distribution:"Power Willbender Virtues",traits:"Power Willbender Virtues",extras:"Power Willbender Virtues (Fractal)",weaponType:"Two-handed"},{name:"Power Willbender Radiance",id:"pwb-radiance",specialization:"Willbender",boons:"Power (spotter)",priority:"Power DPS",distribution:"Power Willbender Radiance",traits:"Power Willbender Radiance",extras:"Power (Fractal)",weaponType:"Two-handed"},{name:"Power Alacrity Willbender",id:"pwb-alac",specialization:"Willbender",boons:"Power (spotter)",priority:"Power DPS",distribution:"Power Alacrity Willbender",traits:"Power Alacrity Willbender",extras:"Power Willbender Virtues (Fractal)",weaponType:"Two-handed"},{name:"Power Quickbrand",id:"pqfb",specialization:"Firebrand",boons:"Power (spotter)",priority:"Power Quickbrand 25%",distribution:"Power Quickbrand (approx.)",traits:"Power Quickbrand",extras:"Power (Fractal)",weaponType:"Two-handed"},{name:"Condi Willbender Sword",id:"cwb-sw",specialization:"Willbender",boons:"Condi",priority:"Hybrid DPS",distribution:"Condi Willbender Sword",traits:"Condi Willbender",extras:"Condi Willbender",weaponType:"Dual wield"},{name:"Condi Willbender GS",id:"cwb-gs",specialization:"Willbender",boons:"Condi",priority:"Hybrid DPS",distribution:"Condi Willbender GS",traits:"Condi Willbender",extras:"Condi Willbender",weaponType:"Two-handed"},{name:"Condi Alacrity Willbender",id:"cwb-alac",specialization:"Willbender",boons:"Condi",priority:"Condi Alacrity Willbender 19%",distribution:"Condi Alacrity Willbender",traits:"Condi Alacrity Willbender",extras:"Condi Alacrity Willbender",weaponType:"Dual wield"},{name:"CFB DPS 5 page (balthazar)",id:"cfb-geo",specialization:"Firebrand",boons:"Condi",priority:"Condi DPS",distribution:"CFB (5 page RF, allies)",traits:"CFB DPS 5 page",extras:"CFB DPS (5 page, balthazar)",weaponType:"Dual wield"},{name:"CFB DPS 5 page (renegade)",id:"cfb-smoldering",specialization:"Firebrand",boons:"Condi",priority:"Condi DPS",distribution:"CFB (5 page RF, allies)",traits:"CFB DPS 5 page",extras:"CFB DPS (renegade)",weaponType:"Dual wield"},{name:"CFB DPS 8 page (balthazar)",id:"cfb-8-balth",specialization:"Firebrand",boons:"Condi",priority:"Condi DPS",distribution:"CFB (8 page, allies)",traits:"CFB DPS 8 page",extras:"CFB DPS (8 page, balthazar)",weaponType:"Dual wield"},{name:"CFB DPS 8 page (renegade)",id:"cfb-8-ren",specialization:"Firebrand",boons:"Condi",priority:"Condi DPS",distribution:"CFB (8 page, allies)",traits:"CFB DPS 8 page",extras:"CFB DPS (renegade)",weaponType:"Dual wield"},{name:"Condi Quickbrand 49%",id:"cqfb-firebrand-49",specialization:"Firebrand",boons:"Condi",priority:"Condi Quickbrand 49",distribution:"Condi Quickbrand (allies)",traits:"Condi Quickbrand",extras:"Condi Quickbrand",weaponType:"Dual wield"},{name:"Hybrid FB Virtues",id:"hycfb-virtues-leadership",specialization:"Firebrand",boons:"Condi",priority:"Condi Hybrid Firebrand 40%",distribution:"Hybrid FB Virtues",traits:"Hybrid FB Virtues",extras:"Hybrid FB Traveler",weaponType:"unset"},{name:"Hybrid FB Honor",id:"hycfb-honor-leadership",specialization:"Firebrand",boons:"Condi",priority:"Condi Hybrid Firebrand 40%",distribution:"Hybrid FB Honor",traits:"Hybrid FB Honor",extras:"Hybrid FB Traveler",weaponType:"unset"},{name:"Healbrand",id:"hb",specialization:"Firebrand",boons:"Power (spotter)",priority:"Heal",distribution:"None",traits:"Healbrand",extras:"Heal",weaponType:"Two-handed"}]},{class:"Warrior",builds:[{name:"Power Banner Bers",id:"pbers",specialization:"Berserker",boons:"Power (spotter)",priority:"Power DPS",distribution:"Power Banner Bers Strength",traits:"Power Banner Bers Strength",extras:"Power (Fractal)",weaponType:"unset"},{name:"Condi Banner Bers",id:"cbers",specialization:"Berserker",boons:"Condi",priority:"Condi DPS",distribution:"Condi Banner Bers",traits:"Condi Bers",extras:"Condi Bers",weaponType:"Two-handed"},{name:"Banner Bladesworn",id:"bls-bs",specialization:"Bladesworn",boons:"Power (spotter)",priority:"Power DPS",distribution:"Bladesworn",traits:"Banner Bladesworn",extras:"Power (Fractal)",weaponType:"Dual wield"},{name:"DPS Bladesworn",id:"bls-dps",specialization:"Bladesworn",boons:"Power (spotter)",priority:"Power DPS",distribution:"Bladesworn",traits:"DPS Bladesworn",extras:"Power (Fractal)",weaponType:"Dual wield"},{name:"Might Bladesworn",id:"bls-might",specialization:"Bladesworn",boons:"Power (spotter)",priority:"Power DPS",distribution:"Bladesworn",traits:"Might Bladesworn",extras:"Power (Fractal)",weaponType:"Dual wield"},{name:"Power Banner SPB",id:"spb-bs",specialization:"Spellbreaker",boons:"Power (spotter)",priority:"Power DPS",distribution:"Power Banner Spellbreaker",traits:"Power Banner SPB",extras:"Power (Fractal)",weaponType:"unset"}]},{class:"Elementalist",builds:[{name:"Power Weaver",id:"pwea",specialization:"Weaver",boons:"Power (spotter)",priority:"Power DPS",distribution:"Power Weaver (BTTH, small)",traits:"Power Weaver Stormsoul",extras:"Power (Fractal)",weaponType:"Dual wield"},{name:"Condi Weaver Sword",id:"cwea-sw",specialization:"Weaver",boons:"Condi",priority:"Condi DPS",distribution:"Condi Weaver Sword",traits:"Condi Weaver Sword",extras:"Condi Weaver Sword",weaponType:"Dual wield"},{name:"Condi Weaver Dagger",id:"cwea-dg",specialization:"Weaver",boons:"Condi",priority:"Condi DPS",distribution:"Condi Weaver (Dagger)",traits:"Condi Weaver Dagger",extras:"Condi Weaver Dagger",weaponType:"Dual wield"},{name:"Hybrid Weaver",id:"hwea",specialization:"Weaver",boons:"Condi",priority:"Hybrid DPS",distribution:"Hybrid Weaver",traits:"Hybrid Weaver",extras:"Hybrid Weaver (Fractal)",weaponType:"Dual wield"},{name:"Condi Tempest",id:"ctemp",specialization:"Tempest",boons:"Condi",priority:"Condi DPS",distribution:"Condi Tempest",traits:"Condi Tempest",extras:"Condi Tempest",weaponType:"Dual wield"},{name:"Power Tempest (approx.)",id:"ptemp",specialization:"Tempest",boons:"Power (spotter)",priority:"Power DPS",distribution:"Power Tempest",traits:"Power Tempest",extras:"Power (Fractal)",weaponType:"Dual wield"},{name:"Heal Tempest",id:"healtemp",specialization:"Tempest",boons:"Power (spotter)",priority:"Heal",distribution:"None",traits:"Heal Tempest",extras:"Heal",weaponType:"unset"},{name:"[beta2] Power Catalyst",id:"power-cat",specialization:"Catalyst",boons:"Power (spotter)",priority:"Power DPS",distribution:"[beta2] Power Catalyst",traits:"[beta2] Power Catalyst",extras:"Power (Fractal)",weaponType:"Two-handed"},{name:"[beta2] Power Quickness Catalyst",id:"power-cat-quick",specialization:"Catalyst",boons:"Power (spotter)",priority:"Power DPS",distribution:"[beta2] Power Catalyst",traits:"[beta2] Power Quickness Catalyst",extras:"Power (Fractal)",weaponType:"Two-handed"},{name:"[beta1] Condi Catalyst",id:"condi-cat",specialization:"Catalyst",boons:"Condi",priority:"Condi DPS",distribution:"[beta1] Condi Catalyst",traits:"[beta1] Condi Catalyst",extras:"[beta1] Condi Catalyst",weaponType:"Two-handed"}]},{class:"Ranger",builds:[{name:"Power Slb Marks",id:"pslb",specialization:"Soulbeast",boons:"Power (spotter)",priority:"Power DPS",distribution:"Power Slb Skirm",traits:"Power Slb Marks",extras:"Power (Fractal)",weaponType:"Two-handed"},{name:"Condi Slb SB",id:"cslb-sb",specialization:"Soulbeast",boons:"Condi",priority:"Condi DPS",distribution:"Condi Slb (D/T SB)",traits:"Condi Slb SB",extras:"Condi Slb",weaponType:"Two-handed"},{name:"Condi Slb D/T A/D",id:"cslb-dtad",specialization:"Soulbeast",boons:"Condi",priority:"Condi DPS",distribution:"Condi Slb (D/T A/D)",traits:"Condi Slb D/T A/D",extras:"Condi Slb",weaponType:"Dual wield"},{name:"Hybrid Slb",id:"hslb",specialization:"Soulbeast",boons:"Condi",priority:"Hybrid DPS",distribution:"Hybrid Slb (A/T D/A)",traits:"Hybrid Slb",extras:"Hybrid Slb",weaponType:"Dual wield"},{name:"Condi Druid",id:"condidruid",specialization:"Druid",boons:"Power (spotter)",priority:"Condi Hybrid Druid 52%",distribution:"Condi Druid (approx.)",traits:"Condi Druid",extras:"Condi Druid",weaponType:"Two-handed"},{name:"Heal Druid",id:"druid",specialization:"Druid",boons:"Power (spotter)",priority:"Heal",distribution:"None",traits:"Heal Druid",extras:"Heal",weaponType:"Two-handed"}]},{class:"Revenant",builds:[{name:"Vindicator",id:"vindi",specialization:"Vindicator",boons:"Power (spotter)",priority:"Power DPS",distribution:"DPS Vindicator",traits:"DPS Vindicator",extras:"DPS Vindicator",weaponType:"Two-handed"},{name:"Condi DPS Ren Invo",id:"cren-invo",specialization:"Renegade",boons:"Condi",priority:"Condi DPS",distribution:"Condi Renegade Invocation",traits:"Condi DPS Ren Invo",extras:"Condi Ren",weaponType:"Two-handed"},{name:"Condi Alac Ren Invo",id:"cren-alac-invo",specialization:"Renegade",boons:"Condi",priority:"Condi Alacrity Renegade 78%",distribution:"Condi Alac Invocation",traits:"Condi Alac Ren Invo",extras:"Condi Alac Ren",weaponType:"Two-handed"},{name:"Power Alac Ren (outdated)",id:"pren",specialization:"Renegade",boons:"Power (spotter)",priority:"Power Boon",distribution:"Alacrity Renegade",traits:"Power Alac Ren",extras:"Power (Fractal)",weaponType:"Two-handed"},{name:"Power Herald DE (outdated)",id:"herald",specialization:"Herald",boons:"Power (spotter)",priority:"Power DPS",distribution:"Power Herald DE",traits:"Power Herald DE",extras:"Power (Fractal)",weaponType:"Dual wield"},{name:"Condi Herald (outdated)",id:"cherald",specialization:"Herald",boons:"Condi",priority:"Condi DPS",distribution:"Condi Herald",traits:"Condi Herald",extras:"Condi Herald",weaponType:"Dual wield"},{name:"Heal Ren",id:"healren",specialization:"Renegade",boons:"Power (spotter)",priority:"Heal",distribution:"None",traits:"Heal Ren",extras:"Heal",weaponType:"Two-handed"}]},{class:"Engineer",builds:[{name:"Power Holo ECSU",id:"pholo-ecsu",specialization:"Holosmith",boons:"Power (spotter)",priority:"Power DPS",distribution:"Power Holo ECSU",traits:"Power Holo ECSU",extras:"Power (Fractal)",weaponType:"unset"},{name:"Condi Holo",id:"cholo",specialization:"Holosmith",boons:"Condi",priority:"Condi DPS",distribution:"Condi Holo",traits:"Condi Holo",extras:"Condi Holo",weaponType:"Dual wield"},{name:"Power Scrapper",id:"pscrap",specialization:"Scrapper",boons:"Power (spotter)",priority:"Power DPS",distribution:"Power Scrapper",traits:"Power Scrapper",extras:"Power (Fractal)",weaponType:"Two-handed"},{name:"Quickness Scrapper",id:"qscrap",specialization:"Scrapper",boons:"Power (spotter)",priority:"Power Quickness Scrapper 33.3%",distribution:"Quickness Scrapper",traits:"Quickness Scrapper",extras:"Power (Fractal)",weaponType:"Two-handed"},{name:"Heal Scrapper",id:"healscrapper",specialization:"Scrapper",boons:"Power (spotter)",priority:"Heal",distribution:"None",traits:"Heal Scrapper",extras:"Heal",weaponType:"unset"},{name:"Condi Mechanist J-Drive (approx.)",id:"cmech-sig-mace",specialization:"Mechanist",boons:"Condi",priority:"Condi DPS",distribution:"Condi Mechanist J-Drive Mace (approx.)",traits:"Condi Mechanist J-Drive",extras:"Condi Mechanist",weaponType:"Dual wield"},{name:"Condi Mechanist Jade Dynamo (approx.)",id:"cmech-dynamo-pistol",specialization:"Mechanist",boons:"Condi",priority:"Condi DPS",distribution:"Condi Mechanist Jade Dynamo Pistol (approx.)",traits:"Condi Mechanist Jade Dynamo",extras:"Condi Mechanist",weaponType:"Dual wield"}]},{class:"Necromancer",builds:[{name:"DPS Scourge",id:"scourge",specialization:"Scourge",boons:"Condi",priority:"Condi DPS",distribution:"Condi Scourge",traits:"DPS Scourge",extras:"DPS Scourge",weaponType:"Dual wield"},{name:"Condi Reaper",id:"creaper",specialization:"Reaper",boons:"Condi",priority:"Hybrid DPS",distribution:"Condi Reaper",traits:"Condi Reaper",extras:"Condi Reaper",weaponType:"Two-handed"},{name:"DPS Harbinger",id:"charb",specialization:"Harbinger",boons:"Condi",priority:"Viper Only",distribution:"DPS Harbinger",traits:"DPS Harbinger",extras:"DPS Harbinger",weaponType:"Dual wield"},{name:"Quickness Harbinger",id:"qharb",specialization:"Harbinger",boons:"Condi",priority:"Condi Quickness Harbinger 23%",distribution:"Quickness Harbinger",traits:"Quickness Harbinger",extras:"Quickness Harbinger",weaponType:"Dual wield"}]},{class:"Thief",builds:[{name:"Condi Deadeye",id:"cded",specialization:"Deadeye",boons:"Condi",priority:"Condi DPS",distribution:"Condi Deadeye",traits:"Condi Deadeye",extras:"Condi Deadeye",weaponType:"Dual wield"},{name:"Staff Daredevil",id:"staffdd",specialization:"Daredevil",boons:"Power (spotter)",priority:"Power DPS",distribution:"Staff Daredevil",traits:"Staff Daredevil",extras:"Power (Fractal)",weaponType:"Two-handed"},{name:"Power Boon Daredevil",id:"boondd-power",specialization:"Daredevil",boons:"Power (spotter)",priority:"Power Boon Daredevil 99.7%",distribution:"Staff Daredevil",traits:"Power Boon Daredevil",extras:"Power Boon Daredevil",weaponType:"Two-handed"},{name:"Condi Daredevil",id:"cdd",specialization:"Daredevil",boons:"Condi",priority:"Condi DPS",distribution:"Condi Daredevil",traits:"Condi Daredevil",extras:"Condi Daredevil",weaponType:"Dual wield"},{name:"Condi Boon Daredevil",id:"boondd-condi",specialization:"Daredevil",boons:"Condi",priority:"Condi Boon Daredevil 62%",distribution:"None",traits:"Condi Boon Daredevil",extras:"Condi Boon Daredevil",weaponType:"Dual wield"},{name:"Rifle Deadeye",id:"rifleded",specialization:"Deadeye",boons:"Power (spotter)",priority:"Power DPS",distribution:"Rifle Deadeye",traits:"Rifle Deadeye",extras:"Power (Fractal)",weaponType:"Two-handed"},{name:"DPS Specter",id:"specter",specialization:"Specter",boons:"Condi",priority:"Condi DPS",distribution:"DPS Specter (allies)",traits:"DPS Specter",extras:"DPS Specter",weaponType:"Dual wield"},{name:"Alacrity Specter",id:"specter-alac",specialization:"Specter",boons:"Condi",priority:"Condi Alacrity Specter 57%",distribution:"Alacrity Specter (allies)",traits:"Alacrity Specter",extras:"Alacrity Specter",weaponType:"Dual wield"}]}]};var Hi={},Ix=qe.exports;Object.defineProperty(Hi,"__esModule",{value:!0});var Oc=Hi.default=void 0,Bx=Ix(Ge),Ex=Ke,Mx=(0,Bx.default)((0,Ex.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");Oc=Hi.default=Mx;var Wi={},Lx=qe.exports;Object.defineProperty(Wi,"__esModule",{value:!0});var Dr=Wi.default=void 0,Ox=Lx(Ge),Nx=Ke,zx=(0,Ox.default)((0,Nx.jsx)("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"}),"Share");Dr=Wi.default=zx;var $n={},kn={};Object.defineProperty(kn,"__esModule",{value:!0});kn.createPopupState=Wx;kn.anchorRef=Vx;kn.bindTrigger=jx;kn.bindContextMenu=Ux;kn.bindToggle=qx;kn.bindHover=Gx;kn.bindFocus=Yx;kn.bindPopover=Kx;kn.bindMenu=Qx;kn.bindPopper=Jx;kn.initCoreState=void 0;Fx(S.exports);function Nc(e){if(typeof WeakMap!="function")return null;var n=new WeakMap,t=new WeakMap;return(Nc=function(r){return r?t:n})(e)}function Fx(e,n){if(!n&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var t=Nc(n);if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)){var s=o?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}const _s={};function _x(e,n){_s[e]||(_s[e]=!0,console.error("[material-ui-popup-state] WARNING",n))}const Hx={isOpen:!1,setAnchorElUsed:!1,anchorEl:null,hovered:!1,focused:!1,_childPopupState:null,_deferNextOpen:!1,_deferNextClose:!1};kn.initCoreState=Hx;function Wx({state:e,setState:n,parentPopupState:t,popupId:r,variant:o,disableAutoFocus:a}){const{isOpen:s,setAnchorElUsed:l,anchorEl:c,hovered:u,focused:d,_childPopupState:p,_deferNextOpen:m,_deferNextClose:f}=e;let b=e;const v=D=>{Zx(b,D)&&n(b=ue(ue({},b),D))},h=D=>{v({setAnchorElUsed:!0,anchorEl:D})},x=D=>{s?C(D):y(D)},y=D=>{const E=D&&D.type,k=D&&D.currentTarget;if(E==="touchstart"){v({_deferNextOpen:!0});return}const P=()=>{if(!D&&!l&&_x("missingEventOrAnchorEl","eventOrAnchorEl should be defined if setAnchorEl is not used"),t){if(!t.isOpen)return;t._setChildPopupState($)}const L={isOpen:!0,hovered:E==="mouseover",focused:E==="focus"};k?l||(L.anchorEl=k):D&&(L.anchorEl=D),v(L)};m?(v({_deferNextOpen:!1}),setTimeout(P,0)):P()},C=D=>{switch(D&&D.type){case"touchstart":v({_deferNextClose:!0});return;case"blur":if(li(D==null?void 0:D.relatedTarget,$))return;break}const k=()=>{p&&p.close(),t&&t._setChildPopupState(null),v({isOpen:!1,hovered:!1,focused:!1})};f?(v({_deferNextClose:!1}),setTimeout(k,0)):k()},T=(D,E)=>{D?y(E):C(E)},R=D=>{const E=D.relatedTarget;u&&!li(E,$)&&C(D)},A=D=>v({_childPopupState:D}),$={anchorEl:c,setAnchorEl:h,setAnchorElUsed:l,popupId:r,variant:o,isOpen:s,open:y,close:C,toggle:x,setOpen:T,onMouseLeave:R,disableAutoFocus:a!=null?a:Boolean(u||d),_childPopupState:p,_setChildPopupState:A};return $}function Vx({setAnchorEl:e}){return n=>{n&&e(n)}}function jx({isOpen:e,open:n,popupId:t,variant:r}){return{[r==="popover"?"aria-controls":"aria-describedby"]:e?t:null,"aria-haspopup":r==="popover"?!0:void 0,onClick:n,onTouchStart:n}}function Ux({isOpen:e,open:n,popupId:t,variant:r}){return{[r==="popover"?"aria-controls":"aria-describedby"]:e?t:null,"aria-haspopup":r==="popover"?!0:void 0,onContextMenu:o=>{o.preventDefault(),n(o)}}}function qx({isOpen:e,toggle:n,popupId:t,variant:r}){return{[r==="popover"?"aria-controls":"aria-describedby"]:e?t:null,"aria-haspopup":r==="popover"?!0:void 0,onClick:n,onTouchStart:n}}function Gx({isOpen:e,open:n,onMouseLeave:t,popupId:r,variant:o}){return{[o==="popover"?"aria-controls":"aria-describedby"]:e?r:null,"aria-haspopup":o==="popover"?!0:void 0,onTouchStart:n,onMouseOver:n,onMouseLeave:t}}function Yx({isOpen:e,open:n,close:t,popupId:r,variant:o}){return{[o==="popover"?"aria-controls":"aria-describedby"]:e?r:null,"aria-haspopup":o==="popover"?!0:void 0,onFocus:n,onBlur:t}}function Kx({isOpen:e,anchorEl:n,close:t,popupId:r,onMouseLeave:o,disableAutoFocus:a}){return ue({id:r,anchorEl:n,open:e,onClose:t,onMouseLeave:o},a&&{disableAutoFocus:!0,disableEnforceFocus:!0,disableRestoreFocus:!0})}function Qx({isOpen:e,anchorEl:n,close:t,popupId:r,onMouseLeave:o,disableAutoFocus:a}){return ue({id:r,anchorEl:n,open:e,onClose:t,onMouseLeave:o},a&&{autoFocus:!1,disableAutoFocusItem:!0,disableAutoFocus:!0,disableEnforceFocus:!0,disableRestoreFocus:!0})}function Jx({isOpen:e,anchorEl:n,popupId:t,onMouseLeave:r}){return{id:t,anchorEl:n,open:e,onMouseLeave:r}}function Xx({popupId:e}){return e&&typeof document!="undefined"?document.getElementById(e):null}function li(e,n){const{anchorEl:t,_childPopupState:r}=n;return Hs(t,e)||Hs(Xx(n),e)||r!=null&&li(e,r)}function Hs(e,n){if(!e)return!1;for(;n;){if(n===e)return!0;n=n.parentElement}return!1}function Zx(e,n){for(let t in n)if(Object.prototype.hasOwnProperty.call(e,t)&&e[t]!==n[t])return!0;return!1}(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.usePopupState=r,Object.defineProperty(e,"anchorRef",{enumerable:!0,get:function(){return t.anchorRef}}),Object.defineProperty(e,"bindTrigger",{enumerable:!0,get:function(){return t.bindTrigger}}),Object.defineProperty(e,"bindContextMenu",{enumerable:!0,get:function(){return t.bindContextMenu}}),Object.defineProperty(e,"bindToggle",{enumerable:!0,get:function(){return t.bindToggle}}),Object.defineProperty(e,"bindHover",{enumerable:!0,get:function(){return t.bindHover}}),Object.defineProperty(e,"bindFocus",{enumerable:!0,get:function(){return t.bindFocus}}),Object.defineProperty(e,"bindMenu",{enumerable:!0,get:function(){return t.bindMenu}}),Object.defineProperty(e,"bindPopover",{enumerable:!0,get:function(){return t.bindPopover}}),Object.defineProperty(e,"bindPopper",{enumerable:!0,get:function(){return t.bindPopper}});var n=S.exports,t=kn;if(!n.useState)throw new Error("React.useState (added in 16.8.0) must be defined to use the hooks API");function r({parentPopupState:o,popupId:a,variant:s,disableAutoFocus:l}){const[c,u]=(0,n.useState)(t.initCoreState);return(0,n.useEffect)(()=>{if(!l&&a&&typeof document=="object"){const d=document.getElementById(a);d&&d.focus()}},[a,c.anchorEl]),(0,n.useMemo)(()=>(0,t.createPopupState)({state:c,setState:u,parentPopupState:o,popupId:a,variant:s,disableAutoFocus:l}),[c,u,o,a,s,l])}})($n);var Vi={},ji={};Object.defineProperty(ji,"__esModule",{value:!0});ji.default=ny;var Ws=ey(S.exports);function zc(e){if(typeof WeakMap!="function")return null;var n=new WeakMap,t=new WeakMap;return(zc=function(r){return r?t:n})(e)}function ey(e,n){if(!n&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var t=zc(n);if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)){var s=o?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}function ci(){return ci=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ci.apply(this,arguments)}function ny(e){return Ws.forwardRef((a,o)=>{var s=a,{PaperProps:n,style:t}=s,r=Er(s,["PaperProps","style"]);return Ws.createElement(e,ci({},r,{ref:o,style:ue({pointerEvents:"none"},t),PaperProps:Ne(ue({},n),{style:ue({pointerEvents:"auto"},n==null?void 0:n.style)})}))})}var ty=Fl(p1);Object.defineProperty(Vi,"__esModule",{value:!0});var Fc=Vi.default=void 0;iy(S.exports);var ry=_c(ji),oy=_c(ty);function _c(e){return e&&e.__esModule?e:{default:e}}function Hc(e){if(typeof WeakMap!="function")return null;var n=new WeakMap,t=new WeakMap;return(Hc=function(r){return r?t:n})(e)}function iy(e,n){if(!n&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var t=Hc(n);if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)){var s=o?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}var ay=(0,ry.default)(oy.default);Fc=Vi.default=ay;const sy=Je()(e=>({accordionRoot:{border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},accordionSummaryRoot:{backgroundColor:"rgba(0, 0, 0, .03)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}},accordionSummaryContent:{"&$expanded":{margin:"12px 0"}},accordionDetailsRoot:{padding:e.spacing(2),flexDirection:"column"}}));function ly({data:e,buffPresets:n,prioritiesPresets:t,distributionPresets:r,extrasPresets:o,traitPresets:a}){const{classes:s}=sy(),[l,c]=G.useState(""),u=Ee(),d=p=>(m,f)=>{c(f?p:!1)};return e.map(p=>w(Yt,{classes:{root:s.accordionRoot},square:!0,expanded:l===p.class,onChange:d(p.class),children:[i(Qt,{classes:{root:s.accordionSummaryRoot,content:s.accordionSummaryContent},"aria-controls":"panel1d-content",id:"panel1d-header",children:i(pt,{name:p.class,disableLink:!0,style:{fontSize:20}})}),i(Kt,{classes:{root:s.accordionDetailsRoot},children:p.builds.map(m=>i(J,{mb:1,children:i(gt,{variant:"outlined",label:i(pt,{name:m.specialization,text:m.name,disableLink:!0}),onClick:f=>{var b,v,h,x,y;u({type:_n.Stop}),u(_l({build:m,specialization:m.specialization,profession:p.class,buffPreset:JSON.parse(n.find(C=>C.name===m.boons).value),distributionPreset:JSON.parse(((b=r.find(C=>C.name===m.distribution))==null?void 0:b.value)||"null"),prioritiesPreset:JSON.parse((v=t.find(C=>C.name===m.priority))==null?void 0:v.value),extrasPreset:JSON.parse((h=o.find(C=>C.name===m.extras))==null?void 0:h.value),traitsPreset:JSON.parse((x=a.find(C=>C.name===m.traits))==null?void 0:x.traits),skillsPreset:JSON.parse((y=a.find(C=>C.name===m.traits))==null?void 0:y.skills)}))}})},`templateBuildMobile_${m.name}`))})]},`mobileTemplate_${p.class}`))}const cy=Je()(e=>({icon:{fontSize:"2rem"}})),uy=({data:e,buffPresets:n,prioritiesPresets:t,distributionPresets:r,extrasPresets:o,traitPresets:a})=>{const{classes:s}=cy(),l=Ee(),c=q(go),u=q(Hl),d=q(Od),p=q(Wl),{t:m}=Se(),[f,b]=S.exports.useState({mobileView:typeof window!="undefined"?window.innerWidth<900:!1,drawerOpen:!1,hover:[!1,!1,!1,!1,!1,!1,!1,!1,!1],anchor:null}),{mobileView:v,drawerOpen:h}=f;S.exports.useEffect(()=>{const $=yi(()=>{const D=window.innerWidth<900;D!==v&&b(E=>Ne(ue({},E),{mobileView:D}))},300);return window.addEventListener("resize",$),()=>{window.removeEventListener("resize",$)}},[v]);const x=()=>w(J,{children:[i(Kn,{control:i(so,{checked:u,onChange:A=>{l({type:_n.Stop}),l(Nd(A.target.checked))},name:"checked",color:"primary"}),label:m("Expert")}),i(Wn,{href:"#share",size:"large",onClick:()=>{const A=document.getElementById("#share");A&&A.scrollIntoView()},children:i(Dr,{})})]}),y=()=>{const A=()=>b(D=>Ne(ue({},D),{drawerOpen:!0}));return w(Ns,{children:[i(J,{flexGrow:1,children:i(Wn,{edge:"start",color:"inherit","aria-label":"menu","aria-haspopup":"true",onClick:A,size:"large",children:i(Oc,{})})}),i(u0,{anchor:"left",open:h,onOpen:A,onClose:()=>b(D=>Ne(ue({},D),{drawerOpen:!1})),children:i("div",{children:i(ly,{data:e,buffPresets:n,prioritiesPresets:t,distributionPresets:r,extrasPresets:o,traitPresets:a})})}),x()]})},C=(A,$,D,E)=>{var k,P,L,B,O;l({type:_n.Stop}),l(_l({build:$,specialization:D,profession:E,buffPreset:JSON.parse(n.find(z=>z.name===$.boons).value),distributionPreset:JSON.parse(((k=r.find(z=>z.name===$.distribution))==null?void 0:k.value)||"null"),prioritiesPreset:JSON.parse((P=t.find(z=>z.name===$.priority))==null?void 0:P.value),extrasPreset:JSON.parse((L=o.find(z=>z.name===$.extras))==null?void 0:L.value),traitsPreset:JSON.parse((B=a.find(z=>z.name===$.traits))==null?void 0:B.traits),skillsPreset:JSON.parse((O=a.find(z=>z.name===$.traits))==null?void 0:O.skills)})),A.close()},T=[$n.usePopupState({variant:"popover",popupId:"warriorTemplates",disableAutoFocus:!0}),$n.usePopupState({variant:"popover",popupId:"revenantTemplates",disableAutoFocus:!0}),$n.usePopupState({variant:"popover",popupId:"guardianTemplates",disableAutoFocus:!0}),$n.usePopupState({variant:"popover",popupId:"rangerTemplates",disableAutoFocus:!0}),$n.usePopupState({variant:"popover",popupId:"engineerTemplates",disableAutoFocus:!0}),$n.usePopupState({variant:"popover",popupId:"elementalistTemplates",disableAutoFocus:!0}),$n.usePopupState({variant:"popover",popupId:"memsmerTemplates",disableAutoFocus:!0}),$n.usePopupState({variant:"popover",popupId:"necromancerTemplates",disableAutoFocus:!0}),$n.usePopupState({variant:"popover",popupId:"thiefTemplates",disableAutoFocus:!0})],R=()=>w(Ns,{children:[i(J,{flexGrow:1,children:bo.map((A,$)=>{var D,E;return w(G.Fragment,{children:[i(Yn,Ne(ue({onClick:()=>{l({type:_n.Stop}),u&&l(zd(A.profession))},variant:A.profession===c?"contained":"text",color:"inherit"},$n.bindHover(T[$])),{children:i(pt,{name:A.profession,disableLink:!0,disableText:!0,className:s.icon})})),i(Fc,Ne(ue({},$n.bindMenu(T[$])),{anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},PaperProps:{style:{maxHeight:"calc(100vh - 340px)"}},children:(E=(D=e.find(k=>k.class===A.profession))==null?void 0:D.builds)==null?void 0:E.map(k=>i(et,{onClick:P=>C(T[$],k,k.specialization,A.profession),children:i(pt,{name:k.specialization,disableLink:!0,text:m("buildTemplateName",{context:k.name})})},k.name))}))]},A.profession)})}),(d||p)&&w(J,{flexGrow:1,children:[w(U,{children:[i(X,{children:"Selected"}),":"," "]}),p?i(pt,{name:d,text:m("buildTemplateName",{context:p}),disableLink:!0}):i(pt,{name:d,disableLink:!0})]}),x()]});return i(mg,{position:"sticky",sx:ue({boxShadow:4},c===""?{marginBottom:0}:{marginBottom:2}),color:"inherit",elevation:0,enableColorOnDark:!0,children:v?y():R()})};var dy=G.memo(uy),Ui={},py=qe.exports;Object.defineProperty(Ui,"__esModule",{value:!0});var Wc=Ui.default=void 0,fy=py(Ge),my=Ke,hy=(0,fy.default)((0,my.jsx)("path",{d:"M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 16h-2v-2h2v2zm2.07-7.75-.9.92C13.45 11.9 13 12.5 13 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"}),"LiveHelp");Wc=Ui.default=hy;const An=({first:e,title:n,helpText:t,extraInfo:r,content:o})=>w(he,{item:!0,container:!0,spacing:2,mb:2,sx:{borderColor:"primary.main"},children:[!e&&i(he,{item:!0,xs:12,children:i(Ni,{})}),w(he,{item:!0,xs:12,sm:3,children:[i(({children:s})=>w(ge,{children:[i(U,{variant:"h5",children:n})," ",s&&i(On,{sx:{mt:.5,mb:1},elevation:0,children:w(J,{p:1,children:[i("div",{children:i(Wc,{})}),i(U,{variant:"caption",paragraph:!0,sx:{mb:0},children:s})]})})]}),{children:t}),r]}),i(he,{item:!0,xs:12,sm:9,children:o})]}),xt=({className:e,placeholder:n,label:t,endLabel:r,handleAmountChange:o,value:a="",disabled:s=!1,maxWidth:l,useAutoComplete:c=!1,autoCompleteProps:u,parseFn:d=Vl})=>{const{error:p}=d(a);return c?i(wo,ue({className:e,freeSolo:!0,disableClearable:!0,renderInput:m=>i(Hn,Ne(ue({},m),{error:p,label:t,variant:"standard",InputProps:Ne(ue({},m.InputProps),{endAdornment:i(io,{disablePointerEvents:!0,position:"end",disableTypography:!0,children:i(U,{sx:{fontSize:"0.9rem",color:"#b1b1b5"},children:r})})}),style:l?{maxWidth:l}:null})),value:a,onInputChange:o},u)):i(Hn,{className:e,error:p,value:a,placeholder:String(n),label:t,variant:"standard",size:"small",sx:{height:26},InputProps:{endAdornment:i(io,{disablePointerEvents:!0,position:"end",disableTypography:!0,children:i(U,{sx:{fontSize:"0.9rem",color:"#b1b1b5"},children:r})}),inputProps:{style:l?{maxWidth:l}:null}},onChange:o,disabled:s})},Vs=G.memo(Pr),Vc={"0.000":"Golem","0.133":"Adina","0.184":"Deimos","0.207":"KC","0.249":"Dhuum","0.295":"Samarog","0.312":"Qadim","0.318":"Matthias","0.322":"Xera","0.326":"Sabetha","0.342":"Sloth","0.361":"Qadim 2","0.369":"Gorseval","0.392":"MO","0.457":"Sabir","0.481":"VG","0.565":"Cairn","0.714":"SH","0.769":"Nikare","0.826":"Kenut"},gy=Object.keys(Vc),by=[{value:0,label:"Golem"},{value:.318,label:"Matthias"},{value:.4,label:""},{value:.565,label:"Cairn"},{value:.714,label:"SH"},{value:.8,label:"Largos"}],vy=()=>{const e=Ee(),{t:n}=Se(),t=q(Fd),r=q(_d),o=Ba(t).value,a=Ba(r).value;return w(ge,{children:[w(J,{display:"flex",flexWrap:"wrap",children:[i(J,{sx:{width:195},children:i(xt,{label:w(X,{children:[i(Vs,{name:"Torment",disableText:!0})," Movement Uptime"]}),endLabel:"%",handleAmountChange:(s,l)=>e(Ea(l)),value:r,maxWidth:180,useAutoComplete:!0,autoCompleteProps:{options:[]}})}),i(J,{mx:3,mb:4,flexGrow:1,alignSelf:"center",sx:{minWidth:200,md:{marginLeft:2}},children:i(Zn,{value:a,step:1,marks:[...Array(11).keys()].map(s=>({value:s*10,label:s*10})),min:0,max:100,onChange:(s,l)=>e(Ea(String(l))),valueLabelDisplay:"auto",valueLabelFormat:s=>`${s}%`})})]}),w(J,{display:"flex",flexWrap:"wrap",children:[i(J,{sx:{width:195},children:i(xt,{label:w(X,{children:[i(Vs,{name:"Confusion",disableText:!0})," Attack Rate"]}),endLabel:n("/s"),handleAmountChange:(s,l)=>e(Ma(l)),value:t,maxWidth:180,useAutoComplete:!0,autoCompleteProps:{options:gy,renderOption:(s,l)=>i("li",Ne(ue({},s),{children:`${l}: ${Vc[l]}`}))}})}),i(J,{mx:3,mb:4,flexGrow:1,alignSelf:"center",sx:{minWidth:200,md:{marginLeft:2}},children:i(Zn,{value:o,step:.01,min:0,max:.83,marks:by,onChange:(s,l)=>e(Ma(String(l))),valueLabelDisplay:"auto"})})]})]})},xy=()=>{const{t:e}=Se();return i(An,{title:e("Target settings"),helpText:e("Relevant for condi optimizations; enter boss attack rate and movement uptime for approximating confusion/torment condition damage."),content:i(vy,{})})};var yy=G.memo(xy);const wy=7,Jt=({className:e,data:n=[],handleClick:t,presetCategory:r,maxChips:o=wy})=>{const{t:a}=Se(),s=q(go),l=q(Wl),c=n.filter(u=>!(u!=null&&u.hidden));return i(J,{className:e,sx:{marginTop:1},children:c.length>o?i(wo,{options:c,getOptionLabel:u=>u.name,renderInput:u=>i(Hn,Ne(ue({},u),{label:a("Presets"),variant:"standard"})),renderOption:(u,d)=>i("li",Ne(ue({},u),{children:d.profession?i(pt,{disableLink:!0,name:d.profession,text:a("preset",{context:`${r}_${d.name}`})}):i(U,{children:a("preset",{context:`${r}_${d.name}`})})})),blurOnSelect:!0,disableClearable:!0,clearOnBlur:!1,onChange:(u,d)=>t(d)},`${l||s}-presets`):c.map(u=>i(gt,{id:u.name,label:u.profession?i(pt,{disableLink:!0,name:u.profession,text:a("preset",{context:`${r}_${u.name}`})}):a("preset",{context:`${r}_${u.name}`}),variant:"outlined",onClick:()=>t(u),sx:{margin:.5}},u.name))})},Rt=s=>{var l=s,{className:e,checked:n,value:t,label:r,onChange:o}=l,a=Er(l,["className","checked","value","label","onChange"]);return i(Kn,{className:e,control:i(Tc,ue({color:"primary",checked:n,onChange:o,value:t},a)),label:r})},Cy=Je()(e=>({boon:{fontSize:18},note:{fontSize:"1rem"},tinyNote:{fontWeight:200}})),Sy=()=>{const{classes:e}=Cy(),n=Ee(),{t}=Se(),r=q(Hd),o=q(Wd),a=c=>u=>{n(Vd({key:c.id,value:u.target.checked}))},s=c=>u=>{n(jd({key:c.id,value:u.target.value}))},l={Boon:jl,Trait:ei,Skill:ur,CommonEffect:Ul,Condition:Pr};return i(he,{container:!0,spacing:4,children:ki.map(c=>i(he,{item:!0,xs:12,sm:6,md:4,children:w(mn,{component:"fieldset",className:e.formControl,children:[i(br,{component:"legend",children:t("buffSection",{context:c.section})}),i(zi,{children:c.items.map(u=>{const{type:d,text:p,id:m,gw2id:f,subText:b,amountData:v}=u,h=l[d],x=["Boon","Condition","CommonEffect"].includes(d)?Pi(m):void 0,y=d==="Text"?w(ge,{children:[i(U,{className:e.note,children:t("buffText",{context:p})}),i(U,{variant:"caption",className:e.tinyNote,children:b})]}):i(h,{id:f,name:x,disableLink:!0,className:e.boon});return w(J,{justifyContent:"space-between",display:"flex",children:[i(J,{display:"flex",children:i(Rt,{value:m,checked:Boolean(r[m]),label:y,onChange:a(u)},m)}),v?i(J,{display:"flex",children:i(xt,{placeholder:v.default,endLabel:v.label,handleAmountChange:s(u),value:o[m],disabled:!r[m],maxWidth:32})}):null]},m)})})]})},c.section))})},ky=({data:e})=>{const n=Ee(),{t}=Se(),r=G.useCallback(o=>{if(!o)return;const a=JSON.parse(o.value);n(Ud(a))},[n]);return i(An,{title:t("Buffs & Boons"),extraInfo:i(Jt,{data:e.presetBuffs.list,handleClick:r,presetCategory:"buff"}),content:i(Sy,{})})};var js=G.memo(ky),qi={},Py=qe.exports;Object.defineProperty(qi,"__esModule",{value:!0});var jc=qi.default=void 0,Ty=Py(Ge),Ry=Ke,Ay=(0,Ty.default)((0,Ry.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");jc=qi.default=Ay;var Gi={},Dy=qe.exports;Object.defineProperty(Gi,"__esModule",{value:!0});var Uc=Gi.default=void 0,$y=Dy(Ge),Iy=Ke,By=(0,$y.default)((0,Iy.jsx)("path",{d:"m18 7-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41 6 19l1.41-1.41L1.83 12 .41 13.41z"}),"DoneAll");Uc=Gi.default=By;var Yi={},Ey=qe.exports;Object.defineProperty(Yi,"__esModule",{value:!0});var qc=Yi.default=void 0,My=Ey(Ge),Ly=Ke,Oy=(0,My.default)((0,Ly.jsx)("path",{d:"M12 20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2s-2 .9-2 2v12c0 1.1.9 2 2 2zm-6 0c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2s-2 .9-2 2v4c0 1.1.9 2 2 2zm10-9v7c0 1.1.9 2 2 2s2-.9 2-2v-7c0-1.1-.9-2-2-2s-2 .9-2 2z"}),"EqualizerRounded");qc=Yi.default=Oy;var Ki={},Ny=qe.exports;Object.defineProperty(Ki,"__esModule",{value:!0});var Gc=Ki.default=void 0,zy=Ny(Ge),Fy=Ke,_y=(0,zy.default)((0,Fy.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"}),"Error");Gc=Ki.default=_y;var Qi={},Hy=qe.exports;Object.defineProperty(Qi,"__esModule",{value:!0});var Yc=Qi.default=void 0,Wy=Hy(Ge),Vy=Ke,jy=(0,Wy.default)((0,Vy.jsx)("path",{d:"M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5-4-4V4h8v3.5l-4 4z"}),"HourglassEmpty");Yc=Qi.default=jy;function Uy(e){const{value:n}=e;return w(J,{position:"relative",display:"inline-flex",children:[i(zb,ue({variant:"determinate"},e)),i(J,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",children:i(U,{variant:"caption",color:"textSecondary",children:`${Math.round(n)}%`})})]})}const Us=({className:e})=>{const n=q(qd);return i(Uy,{variant:"determinate",value:n,className:e})};var Ji={},qy=qe.exports;Object.defineProperty(Ji,"__esModule",{value:!0});var Xi=Ji.default=void 0,Gy=qy(Ge),Yy=Ke,Ky=(0,Gy.default)((0,Yy.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");Xi=Ji.default=Ky;var Zi={},Qy=qe.exports;Object.defineProperty(Zi,"__esModule",{value:!0});var Kc=Zi.default=void 0,Jy=Qy(Ge),Xy=Ke,Zy=(0,Jy.default)((0,Xy.jsx)("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}),"Settings");Kc=Zi.default=Zy;function ew({children:e,maxWidth:n="unset"}){const t=G.useRef(),[r,o]=G.useState(!1),a=()=>{o(l=>!l)},s=l=>{t.current&&t.current.contains(l.target)||o(!1)};return w(ge,{children:[i(Wn,{"aria-label":"settings",size:"medium",onClick:a,ref:t,children:i(Kc,{fontSize:"inherit"})}),i(Li,{style:{zIndex:99},open:r,anchorEl:t.current,onClose:s,placement:"bottom-end",transition:!0,role:void 0,disablePortal:!0,children:({TransitionProps:l})=>i(zl,Ne(ue({},l),{children:i(On,{sx:{padding:2,maxWidth:n},elevation:6,children:i(uc,{onClickAway:s,children:i("div",{children:e})})})}))})]})}const nw=Je()(e=>({comparisonLabel:{fontSize:"1rem"}}));function tw(){const{classes:e}=nw(),{t:n}=Se(),t=Ee(),r=q(ql),o=q(Gl),a=q(Yl),s=q(Kl);return w(ew,{maxWidth:360,children:[i(U,{sx:{fontWeight:700},children:i(X,{children:"Result Display Settings:"})}),i(J,{sx:{mt:1.5},children:i(Kn,{control:i(so,{checked:r,onChange:l=>t(Gd(l.target.checked)),name:"checked",color:"primary"}),label:n("Compare by percentage"),classes:{label:e.comparisonLabel}})}),i(J,{sx:{mt:1.5},children:i(Kn,{control:i(so,{checked:o,onChange:l=>t(Yd(l.target.checked)),name:"checked",color:"primary"}),label:n("Increase table height"),classes:{label:e.comparisonLabel}})}),i(J,{children:i(wo,{multiple:!0,disableCloseOnSelect:!0,value:s,options:["Toughness","Boon Duration","Health","Critical Chance"],onChange:(l,c)=>t(Kd(c)),renderInput:l=>i(Hn,Ne(ue({},l),{variant:"standard",label:n("Show Attributes"),margin:"dense"})),renderOption:(l,c,{selected:u})=>w("li",Ne(ue({},l),{children:[i(J,{sx:{width:28},children:u&&i(Xi,{sx:{fontSize:"1rem"}})}),i(Pn,{name:c,disableLink:!0})]})),renderTags:(l,c)=>l.map((u,d)=>i(gt,Ne(ue({variant:"outlined",label:i(Pn,{name:u,disableLink:!0,disableText:!0})},c({index:d})),{onDelete:null})))})}),i(J,{sx:{mt:2},children:w(mn,{children:[i(br,{id:"filter-button-group",children:i(X,{children:"Filter results:"})}),i(ai,{"aria-labelledby":"filter-button-group",value:a,onChange:l=>t(Qd(l.target.value)),name:"checked",color:"primary",children:[["None",n("No Filtering")],["Combinations",n("All Combinations")],["Sigils",n("Sigils")],["Runes",n("Runes")],["Nourishment",n("Food")],["Enhancement",n("Utility")]].map(([l,c])=>i(Kn,{value:l,control:i(Xr,{}),label:c,classes:{label:e.comparisonLabel}},l))}),i($c,{children:i(X,{children:"Displays only the top result for each rune, sigil, food, or utility option or each combination of all of the above (up to 100 results)."})})]})})]})}const rw=Je()(e=>({errorText:{color:"red"},button:{margin:e.spacing(1)},label:{height:40},icon:{fontSize:40},chipIcon:{marginBottom:"-6px !important"}})),ow=({profession:e})=>{const{classes:n}=rw(),t=Ee(),{t:r}=Se(),o=q(Jd),a=q(Xd),s=q(xn("affixes")),l=q(xn("weaponType")),c=d=>{if(s.length<1){t(Mo(r("Select at least one affix in the priorities section!"))),t(Na(Eo));return}if(l==="unset"){t(Mo(r("Select a weapon type in the priorities section!"))),t(Na(Eo));return}console.log("calculate"),t(Mo("")),t({type:_n.Start})};let u;switch(o){case Oa:u=i(Uc,{fontSize:"small",classes:{root:n.chipIcon}});break;case La:case er:u=i(Yc,{fontSize:"small",classes:{root:n.chipIcon}});break;case Eo:u=i(Gc,{fontSize:"small",classes:{root:n.chipIcon}});break;default:u=null}return i(ge,{children:w(J,{display:"flex",flexWrap:"wrap",children:[i(J,{children:w(Yn,{variant:"outlined",color:"primary",className:n.button,onClick:c,classes:{label:n.label},disabled:o===er||e==="",children:[o===er?i(Us,{className:n.icon}):i(qc,{className:n.icon}),i(U,{children:i(X,{children:"Calculate"})})]})}),i(J,{children:w(Yn,{variant:"outlined",color:"primary",className:n.button,onClick:d=>t({type:_n.Stop}),disabled:o!==er,children:[i(jc,{className:nt(n.icon)}),i(U,{style:{marginLeft:8},children:i(X,{children:"Stop"})})]})}),i(J,{flexGrow:1,children:o===Zd?w(Yn,{variant:"outlined",color:"primary",className:n.button,onClick:d=>t({type:_n.Resume}),children:[i(Us,{className:n.icon}),i(U,{style:{marginLeft:8},children:i(X,{children:"Resume"})})]}):null}),i(J,{alignSelf:"center",display:"flex",m:1,maxWidth:300,children:i(U,{variant:"caption",className:n.errorText,children:a})}),w(J,{alignSelf:"center",children:[i(gt,{sx:{marginRight:1},label:w(ge,{children:[i(X,{children:"Status:"})," ",Pi(o)," ",u]}),color:[Oa,La,er].includes(o)?"primary":"secondary"}),i(tw,{})]})]})})},qs=G.memo(Pn),Gs=G.memo(Pr),iw=Je()(e=>({textbox:{maxWidth:195},slider:{margin:e.spacing(2),minWidth:200,[e.breakpoints.up("sm")]:{marginLeft:e.spacing(5)}},percentSliderRail:{opacity:1}})),aw=[{name:"Power",min:0,max:6e3,step:10,color:"#b1b1b5"},{name:"Burning",min:0,max:60,step:.1},{name:"Bleeding",min:0,max:60,step:.1},{name:"Poisoned",min:0,max:60,step:.1},{name:"Torment",min:0,max:60,step:.1},{name:"Confusion",min:0,max:60,step:.1}],sw=()=>{const{classes:e}=iw(),n=Ee(),t=q(ep),{t:r}=Se(),o=q(np),a=l=>(c,u)=>{n(za({index:l,value:Math.round(u*100)/100})),n(Fa({index:l,value:Math.round(u*100)/100}))},s=l=>c=>{const{value:u}=c.target;n(za({index:l,value:u}));const d=ni(u).value;n(Fa({index:l,value:d}))};return aw.map((l,c)=>w(J,{display:"flex",flexWrap:"wrap",children:[i(J,{children:w(mn,{mb:1,className:e.textbox,variant:"standard",children:[i(zn,{htmlFor:`input-with-icon-adornment-${c}`,children:l.name==="Power"?i(qs,{name:"Power",disableLink:!0,text:r("Power Coefficient")}):i(Gs,{name:l.name,disableLink:!0,text:r("avgStacks",{context:l.name})})}),i(Fn,{id:`input-with-icon-adornment-${c}`,value:o[l.name],endAdornment:i(io,{position:"end",children:l.name==="Power"?i(qs,{name:"Power",disableLink:!0,disableText:!0}):i(Gs,{name:l.name,disableLink:!0,disableText:!0})}),error:ni(o[l.name]).error,onChange:s(l.name),autoComplete:"off"})]})}),i(J,{flexGrow:1,alignSelf:"center",mx:3,mb:4,sx:{minWidth:200,md:{marginLeft:2}},children:i(Zn,{value:t[l.name],step:l.step,marks:[...Array(7).keys()].map(u=>u*((l.max-l.min)/6)).map(u=>({value:u,label:`${u}`})),min:l.min,max:l.max,onChange:a(l.name),valueLabelDisplay:"auto"})})]},`distriNew_${l.name}`))},lw=({profession:e,data:n})=>{const t=Ee(),{t:r}=Se();let o;if(e){const{eliteSpecializations:s}=bo.find(l=>l.profession===e);o=n.presetDistribution.list.filter(l=>l.name==="None"?!1:!l.profession||l.profession===e||s.includes(l.profession))}const a=G.useCallback(s=>{!s||t(tp(JSON.parse(s.value)))},[t]);return i(An,{title:r("Skill Coefficients"),content:i(sw,{}),extraInfo:i(ge,{children:e!==""&&i(Jt,{data:o,handleClick:a,presetCategory:"distribution"})}),helpText:w(ge,{children:[i(X,{children:`This data represents your rotation. If we don't supply a template for a build, you can calculate the correct coefficients so that a tested build matches a golem log using the tool under "development" below, or calculate them manually.`}),i(J,{component:"span",sx:{mt:1,display:"block"}}),w(X,{children:["For more information,"," ",i(ao,{href:"https://github.com/discretize/discretize-gear-optimizer/tree/staging/docs/Coefficients.md",target:"_blank",rel:"noopener",children:"see the coefficients documentation on Github"})," ","or ask in Discord!"]})]})})};var ea={},cw=qe.exports;Object.defineProperty(ea,"__esModule",{value:!0});var Xt=ea.default=void 0,uw=cw(Ge),dw=Ke,pw=(0,uw.default)((0,dw.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");Xt=ea.default=pw;/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Qc(e){return typeof e=="undefined"||e===null}function fw(e){return typeof e=="object"&&e!==null}function mw(e){return Array.isArray(e)?e:Qc(e)?[]:[e]}function hw(e,n){var t,r,o,a;if(n)for(a=Object.keys(n),t=0,r=a.length;t<r;t+=1)o=a[t],e[o]=n[o];return e}function gw(e,n){var t="",r;for(r=0;r<n;r+=1)t+=e;return t}function bw(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var vw=Qc,xw=fw,yw=mw,ww=gw,Cw=bw,Sw=hw,nn={isNothing:vw,isObject:xw,toArray:yw,repeat:ww,isNegativeZero:Cw,extend:Sw};function Jc(e,n){var t="",r=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(t+='in "'+e.mark.name+'" '),t+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!n&&e.mark.snippet&&(t+=`

`+e.mark.snippet),r+" "+t):r}function yr(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=Jc(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}yr.prototype=Object.create(Error.prototype);yr.prototype.constructor=yr;yr.prototype.toString=function(n){return this.name+": "+Jc(this,n)};var bn=yr;function jo(e,n,t,r,o){var a="",s="",l=Math.floor(o/2)-1;return r-n>l&&(a=" ... ",n=r-l+a.length),t-r>l&&(s=" ...",t=r+l-s.length),{str:a+e.slice(n,t).replace(/\t/g,"\u2192")+s,pos:r-n+a.length}}function Uo(e,n){return nn.repeat(" ",n-e.length)+e}function kw(e,n){if(n=Object.create(n||null),!e.buffer)return null;n.maxLength||(n.maxLength=79),typeof n.indent!="number"&&(n.indent=1),typeof n.linesBefore!="number"&&(n.linesBefore=3),typeof n.linesAfter!="number"&&(n.linesAfter=2);for(var t=/\r?\n|\r|\0/g,r=[0],o=[],a,s=-1;a=t.exec(e.buffer);)o.push(a.index),r.push(a.index+a[0].length),e.position<=a.index&&s<0&&(s=r.length-2);s<0&&(s=r.length-1);var l="",c,u,d=Math.min(e.line+n.linesAfter,o.length).toString().length,p=n.maxLength-(n.indent+d+3);for(c=1;c<=n.linesBefore&&!(s-c<0);c++)u=jo(e.buffer,r[s-c],o[s-c],e.position-(r[s]-r[s-c]),p),l=nn.repeat(" ",n.indent)+Uo((e.line-c+1).toString(),d)+" | "+u.str+`
`+l;for(u=jo(e.buffer,r[s],o[s],e.position,p),l+=nn.repeat(" ",n.indent)+Uo((e.line+1).toString(),d)+" | "+u.str+`
`,l+=nn.repeat("-",n.indent+d+3+u.pos)+`^
`,c=1;c<=n.linesAfter&&!(s+c>=o.length);c++)u=jo(e.buffer,r[s+c],o[s+c],e.position-(r[s]-r[s+c]),p),l+=nn.repeat(" ",n.indent)+Uo((e.line+c+1).toString(),d)+" | "+u.str+`
`;return l.replace(/\n$/,"")}var Pw=kw,Tw=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Rw=["scalar","sequence","mapping"];function Aw(e){var n={};return e!==null&&Object.keys(e).forEach(function(t){e[t].forEach(function(r){n[String(r)]=t})}),n}function Dw(e,n){if(n=n||{},Object.keys(n).forEach(function(t){if(Tw.indexOf(t)===-1)throw new bn('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.options=n,this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(t){return t},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=Aw(n.styleAliases||null),Rw.indexOf(this.kind)===-1)throw new bn('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var pn=Dw;function Ys(e,n){var t=[];return e[n].forEach(function(r){var o=t.length;t.forEach(function(a,s){a.tag===r.tag&&a.kind===r.kind&&a.multi===r.multi&&(o=s)}),t[o]=r}),t}function $w(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,t;function r(o){o.multi?(e.multi[o.kind].push(o),e.multi.fallback.push(o)):e[o.kind][o.tag]=e.fallback[o.tag]=o}for(n=0,t=arguments.length;n<t;n+=1)arguments[n].forEach(r);return e}function ui(e){return this.extend(e)}ui.prototype.extend=function(n){var t=[],r=[];if(n instanceof pn)r.push(n);else if(Array.isArray(n))r=r.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(t=t.concat(n.implicit)),n.explicit&&(r=r.concat(n.explicit));else throw new bn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");t.forEach(function(a){if(!(a instanceof pn))throw new bn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(a.loadKind&&a.loadKind!=="scalar")throw new bn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(a.multi)throw new bn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),r.forEach(function(a){if(!(a instanceof pn))throw new bn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var o=Object.create(ui.prototype);return o.implicit=(this.implicit||[]).concat(t),o.explicit=(this.explicit||[]).concat(r),o.compiledImplicit=Ys(o,"implicit"),o.compiledExplicit=Ys(o,"explicit"),o.compiledTypeMap=$w(o.compiledImplicit,o.compiledExplicit),o};var Xc=ui,Zc=new pn("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),eu=new pn("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),nu=new pn("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),tu=new Xc({explicit:[Zc,eu,nu]});function Iw(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function Bw(){return null}function Ew(e){return e===null}var ru=new pn("tag:yaml.org,2002:null",{kind:"scalar",resolve:Iw,construct:Bw,predicate:Ew,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Mw(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function Lw(e){return e==="true"||e==="True"||e==="TRUE"}function Ow(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var ou=new pn("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Mw,construct:Lw,predicate:Ow,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function Nw(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function zw(e){return 48<=e&&e<=55}function Fw(e){return 48<=e&&e<=57}function _w(e){if(e===null)return!1;var n=e.length,t=0,r=!1,o;if(!n)return!1;if(o=e[t],(o==="-"||o==="+")&&(o=e[++t]),o==="0"){if(t+1===n)return!0;if(o=e[++t],o==="b"){for(t++;t<n;t++)if(o=e[t],o!=="_"){if(o!=="0"&&o!=="1")return!1;r=!0}return r&&o!=="_"}if(o==="x"){for(t++;t<n;t++)if(o=e[t],o!=="_"){if(!Nw(e.charCodeAt(t)))return!1;r=!0}return r&&o!=="_"}if(o==="o"){for(t++;t<n;t++)if(o=e[t],o!=="_"){if(!zw(e.charCodeAt(t)))return!1;r=!0}return r&&o!=="_"}}if(o==="_")return!1;for(;t<n;t++)if(o=e[t],o!=="_"){if(!Fw(e.charCodeAt(t)))return!1;r=!0}return!(!r||o==="_")}function Hw(e){var n=e,t=1,r;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),r=n[0],(r==="-"||r==="+")&&(r==="-"&&(t=-1),n=n.slice(1),r=n[0]),n==="0")return 0;if(r==="0"){if(n[1]==="b")return t*parseInt(n.slice(2),2);if(n[1]==="x")return t*parseInt(n.slice(2),16);if(n[1]==="o")return t*parseInt(n.slice(2),8)}return t*parseInt(n,10)}function Ww(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!nn.isNegativeZero(e)}var iu=new pn("tag:yaml.org,2002:int",{kind:"scalar",resolve:_w,construct:Hw,predicate:Ww,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Vw=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function jw(e){return!(e===null||!Vw.test(e)||e[e.length-1]==="_")}function Uw(e){var n,t;return n=e.replace(/_/g,"").toLowerCase(),t=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?t===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:t*parseFloat(n,10)}var qw=/^[-+]?[0-9]+e/;function Gw(e,n){var t;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(nn.isNegativeZero(e))return"-0.0";return t=e.toString(10),qw.test(t)?t.replace("e",".e"):t}function Yw(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||nn.isNegativeZero(e))}var au=new pn("tag:yaml.org,2002:float",{kind:"scalar",resolve:jw,construct:Uw,predicate:Yw,represent:Gw,defaultStyle:"lowercase"}),su=tu.extend({implicit:[ru,ou,iu,au]}),lu=su,cu=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),uu=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function Kw(e){return e===null?!1:cu.exec(e)!==null||uu.exec(e)!==null}function Qw(e){var n,t,r,o,a,s,l,c=0,u=null,d,p,m;if(n=cu.exec(e),n===null&&(n=uu.exec(e)),n===null)throw new Error("Date resolve error");if(t=+n[1],r=+n[2]-1,o=+n[3],!n[4])return new Date(Date.UTC(t,r,o));if(a=+n[4],s=+n[5],l=+n[6],n[7]){for(c=n[7].slice(0,3);c.length<3;)c+="0";c=+c}return n[9]&&(d=+n[10],p=+(n[11]||0),u=(d*60+p)*6e4,n[9]==="-"&&(u=-u)),m=new Date(Date.UTC(t,r,o,a,s,l,c)),u&&m.setTime(m.getTime()-u),m}function Jw(e){return e.toISOString()}var du=new pn("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:Kw,construct:Qw,instanceOf:Date,represent:Jw});function Xw(e){return e==="<<"||e===null}var pu=new pn("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Xw}),na=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function Zw(e){if(e===null)return!1;var n,t,r=0,o=e.length,a=na;for(t=0;t<o;t++)if(n=a.indexOf(e.charAt(t)),!(n>64)){if(n<0)return!1;r+=6}return r%8===0}function e2(e){var n,t,r=e.replace(/[\r\n=]/g,""),o=r.length,a=na,s=0,l=[];for(n=0;n<o;n++)n%4===0&&n&&(l.push(s>>16&255),l.push(s>>8&255),l.push(s&255)),s=s<<6|a.indexOf(r.charAt(n));return t=o%4*6,t===0?(l.push(s>>16&255),l.push(s>>8&255),l.push(s&255)):t===18?(l.push(s>>10&255),l.push(s>>2&255)):t===12&&l.push(s>>4&255),new Uint8Array(l)}function n2(e){var n="",t=0,r,o,a=e.length,s=na;for(r=0;r<a;r++)r%3===0&&r&&(n+=s[t>>18&63],n+=s[t>>12&63],n+=s[t>>6&63],n+=s[t&63]),t=(t<<8)+e[r];return o=a%3,o===0?(n+=s[t>>18&63],n+=s[t>>12&63],n+=s[t>>6&63],n+=s[t&63]):o===2?(n+=s[t>>10&63],n+=s[t>>4&63],n+=s[t<<2&63],n+=s[64]):o===1&&(n+=s[t>>2&63],n+=s[t<<4&63],n+=s[64],n+=s[64]),n}function t2(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var fu=new pn("tag:yaml.org,2002:binary",{kind:"scalar",resolve:Zw,construct:e2,predicate:t2,represent:n2}),r2=Object.prototype.hasOwnProperty,o2=Object.prototype.toString;function i2(e){if(e===null)return!0;var n=[],t,r,o,a,s,l=e;for(t=0,r=l.length;t<r;t+=1){if(o=l[t],s=!1,o2.call(o)!=="[object Object]")return!1;for(a in o)if(r2.call(o,a))if(!s)s=!0;else return!1;if(!s)return!1;if(n.indexOf(a)===-1)n.push(a);else return!1}return!0}function a2(e){return e!==null?e:[]}var mu=new pn("tag:yaml.org,2002:omap",{kind:"sequence",resolve:i2,construct:a2}),s2=Object.prototype.toString;function l2(e){if(e===null)return!0;var n,t,r,o,a,s=e;for(a=new Array(s.length),n=0,t=s.length;n<t;n+=1){if(r=s[n],s2.call(r)!=="[object Object]"||(o=Object.keys(r),o.length!==1))return!1;a[n]=[o[0],r[o[0]]]}return!0}function c2(e){if(e===null)return[];var n,t,r,o,a,s=e;for(a=new Array(s.length),n=0,t=s.length;n<t;n+=1)r=s[n],o=Object.keys(r),a[n]=[o[0],r[o[0]]];return a}var hu=new pn("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:l2,construct:c2}),u2=Object.prototype.hasOwnProperty;function d2(e){if(e===null)return!0;var n,t=e;for(n in t)if(u2.call(t,n)&&t[n]!==null)return!1;return!0}function p2(e){return e!==null?e:{}}var gu=new pn("tag:yaml.org,2002:set",{kind:"mapping",resolve:d2,construct:p2}),ta=lu.extend({implicit:[du,pu],explicit:[fu,mu,hu,gu]}),yt=Object.prototype.hasOwnProperty,lo=1,bu=2,vu=3,co=4,qo=1,f2=2,Ks=3,m2=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,h2=/[\x85\u2028\u2029]/,g2=/[,\[\]\{\}]/,xu=/^(?:!|!!|![a-z\-]+!)$/i,yu=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function Qs(e){return Object.prototype.toString.call(e)}function Qn(e){return e===10||e===13}function At(e){return e===9||e===32}function wn(e){return e===9||e===32||e===10||e===13}function Nt(e){return e===44||e===91||e===93||e===123||e===125}function b2(e){var n;return 48<=e&&e<=57?e-48:(n=e|32,97<=n&&n<=102?n-97+10:-1)}function v2(e){return e===120?2:e===117?4:e===85?8:0}function x2(e){return 48<=e&&e<=57?e-48:-1}function Js(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"\x85":e===95?"\xA0":e===76?"\u2028":e===80?"\u2029":""}function y2(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}var wu=new Array(256),Cu=new Array(256);for(var It=0;It<256;It++)wu[It]=Js(It)?1:0,Cu[It]=Js(It);function w2(e,n){this.input=e,this.filename=n.filename||null,this.schema=n.schema||ta,this.onWarning=n.onWarning||null,this.legacy=n.legacy||!1,this.json=n.json||!1,this.listener=n.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function Su(e,n){var t={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return t.snippet=Pw(t),new bn(n,t)}function ie(e,n){throw Su(e,n)}function uo(e,n){e.onWarning&&e.onWarning.call(null,Su(e,n))}var Xs={YAML:function(n,t,r){var o,a,s;n.version!==null&&ie(n,"duplication of %YAML directive"),r.length!==1&&ie(n,"YAML directive accepts exactly one argument"),o=/^([0-9]+)\.([0-9]+)$/.exec(r[0]),o===null&&ie(n,"ill-formed argument of the YAML directive"),a=parseInt(o[1],10),s=parseInt(o[2],10),a!==1&&ie(n,"unacceptable YAML version of the document"),n.version=r[0],n.checkLineBreaks=s<2,s!==1&&s!==2&&uo(n,"unsupported YAML version of the document")},TAG:function(n,t,r){var o,a;r.length!==2&&ie(n,"TAG directive accepts exactly two arguments"),o=r[0],a=r[1],xu.test(o)||ie(n,"ill-formed tag handle (first argument) of the TAG directive"),yt.call(n.tagMap,o)&&ie(n,'there is a previously declared suffix for "'+o+'" tag handle'),yu.test(a)||ie(n,"ill-formed tag prefix (second argument) of the TAG directive");try{a=decodeURIComponent(a)}catch{ie(n,"tag prefix is malformed: "+a)}n.tagMap[o]=a}};function ht(e,n,t,r){var o,a,s,l;if(n<t){if(l=e.input.slice(n,t),r)for(o=0,a=l.length;o<a;o+=1)s=l.charCodeAt(o),s===9||32<=s&&s<=1114111||ie(e,"expected valid JSON character");else m2.test(l)&&ie(e,"the stream contains non-printable characters");e.result+=l}}function Zs(e,n,t,r){var o,a,s,l;for(nn.isObject(t)||ie(e,"cannot merge mappings; the provided source object is unacceptable"),o=Object.keys(t),s=0,l=o.length;s<l;s+=1)a=o[s],yt.call(n,a)||(n[a]=t[a],r[a]=!0)}function zt(e,n,t,r,o,a,s,l,c){var u,d;if(Array.isArray(o))for(o=Array.prototype.slice.call(o),u=0,d=o.length;u<d;u+=1)Array.isArray(o[u])&&ie(e,"nested arrays are not supported inside keys"),typeof o=="object"&&Qs(o[u])==="[object Object]"&&(o[u]="[object Object]");if(typeof o=="object"&&Qs(o)==="[object Object]"&&(o="[object Object]"),o=String(o),n===null&&(n={}),r==="tag:yaml.org,2002:merge")if(Array.isArray(a))for(u=0,d=a.length;u<d;u+=1)Zs(e,n,a[u],t);else Zs(e,n,a,t);else!e.json&&!yt.call(t,o)&&yt.call(n,o)&&(e.line=s||e.line,e.lineStart=l||e.lineStart,e.position=c||e.position,ie(e,"duplicated mapping key")),o==="__proto__"?Object.defineProperty(n,o,{configurable:!0,enumerable:!0,writable:!0,value:a}):n[o]=a,delete t[o];return n}function ra(e){var n;n=e.input.charCodeAt(e.position),n===10?e.position++:n===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):ie(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function Xe(e,n,t){for(var r=0,o=e.input.charCodeAt(e.position);o!==0;){for(;At(o);)o===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),o=e.input.charCodeAt(++e.position);if(n&&o===35)do o=e.input.charCodeAt(++e.position);while(o!==10&&o!==13&&o!==0);if(Qn(o))for(ra(e),o=e.input.charCodeAt(e.position),r++,e.lineIndent=0;o===32;)e.lineIndent++,o=e.input.charCodeAt(++e.position);else break}return t!==-1&&r!==0&&e.lineIndent<t&&uo(e,"deficient indentation"),r}function ko(e){var n=e.position,t;return t=e.input.charCodeAt(n),!!((t===45||t===46)&&t===e.input.charCodeAt(n+1)&&t===e.input.charCodeAt(n+2)&&(n+=3,t=e.input.charCodeAt(n),t===0||wn(t)))}function oa(e,n){n===1?e.result+=" ":n>1&&(e.result+=nn.repeat(`
`,n-1))}function C2(e,n,t){var r,o,a,s,l,c,u,d,p=e.kind,m=e.result,f;if(f=e.input.charCodeAt(e.position),wn(f)||Nt(f)||f===35||f===38||f===42||f===33||f===124||f===62||f===39||f===34||f===37||f===64||f===96||(f===63||f===45)&&(o=e.input.charCodeAt(e.position+1),wn(o)||t&&Nt(o)))return!1;for(e.kind="scalar",e.result="",a=s=e.position,l=!1;f!==0;){if(f===58){if(o=e.input.charCodeAt(e.position+1),wn(o)||t&&Nt(o))break}else if(f===35){if(r=e.input.charCodeAt(e.position-1),wn(r))break}else{if(e.position===e.lineStart&&ko(e)||t&&Nt(f))break;if(Qn(f))if(c=e.line,u=e.lineStart,d=e.lineIndent,Xe(e,!1,-1),e.lineIndent>=n){l=!0,f=e.input.charCodeAt(e.position);continue}else{e.position=s,e.line=c,e.lineStart=u,e.lineIndent=d;break}}l&&(ht(e,a,s,!1),oa(e,e.line-c),a=s=e.position,l=!1),At(f)||(s=e.position+1),f=e.input.charCodeAt(++e.position)}return ht(e,a,s,!1),e.result?!0:(e.kind=p,e.result=m,!1)}function S2(e,n){var t,r,o;if(t=e.input.charCodeAt(e.position),t!==39)return!1;for(e.kind="scalar",e.result="",e.position++,r=o=e.position;(t=e.input.charCodeAt(e.position))!==0;)if(t===39)if(ht(e,r,e.position,!0),t=e.input.charCodeAt(++e.position),t===39)r=e.position,e.position++,o=e.position;else return!0;else Qn(t)?(ht(e,r,o,!0),oa(e,Xe(e,!1,n)),r=o=e.position):e.position===e.lineStart&&ko(e)?ie(e,"unexpected end of the document within a single quoted scalar"):(e.position++,o=e.position);ie(e,"unexpected end of the stream within a single quoted scalar")}function k2(e,n){var t,r,o,a,s,l;if(l=e.input.charCodeAt(e.position),l!==34)return!1;for(e.kind="scalar",e.result="",e.position++,t=r=e.position;(l=e.input.charCodeAt(e.position))!==0;){if(l===34)return ht(e,t,e.position,!0),e.position++,!0;if(l===92){if(ht(e,t,e.position,!0),l=e.input.charCodeAt(++e.position),Qn(l))Xe(e,!1,n);else if(l<256&&wu[l])e.result+=Cu[l],e.position++;else if((s=v2(l))>0){for(o=s,a=0;o>0;o--)l=e.input.charCodeAt(++e.position),(s=b2(l))>=0?a=(a<<4)+s:ie(e,"expected hexadecimal character");e.result+=y2(a),e.position++}else ie(e,"unknown escape sequence");t=r=e.position}else Qn(l)?(ht(e,t,r,!0),oa(e,Xe(e,!1,n)),t=r=e.position):e.position===e.lineStart&&ko(e)?ie(e,"unexpected end of the document within a double quoted scalar"):(e.position++,r=e.position)}ie(e,"unexpected end of the stream within a double quoted scalar")}function P2(e,n){var t=!0,r,o,a,s=e.tag,l,c=e.anchor,u,d,p,m,f,b=Object.create(null),v,h,x,y;if(y=e.input.charCodeAt(e.position),y===91)d=93,f=!1,l=[];else if(y===123)d=125,f=!0,l={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=l),y=e.input.charCodeAt(++e.position);y!==0;){if(Xe(e,!0,n),y=e.input.charCodeAt(e.position),y===d)return e.position++,e.tag=s,e.anchor=c,e.kind=f?"mapping":"sequence",e.result=l,!0;t?y===44&&ie(e,"expected the node content, but found ','"):ie(e,"missed comma between flow collection entries"),h=v=x=null,p=m=!1,y===63&&(u=e.input.charCodeAt(e.position+1),wn(u)&&(p=m=!0,e.position++,Xe(e,!0,n))),r=e.line,o=e.lineStart,a=e.position,Gt(e,n,lo,!1,!0),h=e.tag,v=e.result,Xe(e,!0,n),y=e.input.charCodeAt(e.position),(m||e.line===r)&&y===58&&(p=!0,y=e.input.charCodeAt(++e.position),Xe(e,!0,n),Gt(e,n,lo,!1,!0),x=e.result),f?zt(e,l,b,h,v,x,r,o,a):p?l.push(zt(e,null,b,h,v,x,r,o,a)):l.push(v),Xe(e,!0,n),y=e.input.charCodeAt(e.position),y===44?(t=!0,y=e.input.charCodeAt(++e.position)):t=!1}ie(e,"unexpected end of the stream within a flow collection")}function T2(e,n){var t,r,o=qo,a=!1,s=!1,l=n,c=0,u=!1,d,p;if(p=e.input.charCodeAt(e.position),p===124)r=!1;else if(p===62)r=!0;else return!1;for(e.kind="scalar",e.result="";p!==0;)if(p=e.input.charCodeAt(++e.position),p===43||p===45)qo===o?o=p===43?Ks:f2:ie(e,"repeat of a chomping mode identifier");else if((d=x2(p))>=0)d===0?ie(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):s?ie(e,"repeat of an indentation width identifier"):(l=n+d-1,s=!0);else break;if(At(p)){do p=e.input.charCodeAt(++e.position);while(At(p));if(p===35)do p=e.input.charCodeAt(++e.position);while(!Qn(p)&&p!==0)}for(;p!==0;){for(ra(e),e.lineIndent=0,p=e.input.charCodeAt(e.position);(!s||e.lineIndent<l)&&p===32;)e.lineIndent++,p=e.input.charCodeAt(++e.position);if(!s&&e.lineIndent>l&&(l=e.lineIndent),Qn(p)){c++;continue}if(e.lineIndent<l){o===Ks?e.result+=nn.repeat(`
`,a?1+c:c):o===qo&&a&&(e.result+=`
`);break}for(r?At(p)?(u=!0,e.result+=nn.repeat(`
`,a?1+c:c)):u?(u=!1,e.result+=nn.repeat(`
`,c+1)):c===0?a&&(e.result+=" "):e.result+=nn.repeat(`
`,c):e.result+=nn.repeat(`
`,a?1+c:c),a=!0,s=!0,c=0,t=e.position;!Qn(p)&&p!==0;)p=e.input.charCodeAt(++e.position);ht(e,t,e.position,!1)}return!0}function el(e,n){var t,r=e.tag,o=e.anchor,a=[],s,l=!1,c;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=a),c=e.input.charCodeAt(e.position);c!==0&&(e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,ie(e,"tab characters must not be used in indentation")),!(c!==45||(s=e.input.charCodeAt(e.position+1),!wn(s))));){if(l=!0,e.position++,Xe(e,!0,-1)&&e.lineIndent<=n){a.push(null),c=e.input.charCodeAt(e.position);continue}if(t=e.line,Gt(e,n,vu,!1,!0),a.push(e.result),Xe(e,!0,-1),c=e.input.charCodeAt(e.position),(e.line===t||e.lineIndent>n)&&c!==0)ie(e,"bad indentation of a sequence entry");else if(e.lineIndent<n)break}return l?(e.tag=r,e.anchor=o,e.kind="sequence",e.result=a,!0):!1}function R2(e,n,t){var r,o,a,s,l,c,u=e.tag,d=e.anchor,p={},m=Object.create(null),f=null,b=null,v=null,h=!1,x=!1,y;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=p),y=e.input.charCodeAt(e.position);y!==0;){if(!h&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,ie(e,"tab characters must not be used in indentation")),r=e.input.charCodeAt(e.position+1),a=e.line,(y===63||y===58)&&wn(r))y===63?(h&&(zt(e,p,m,f,b,null,s,l,c),f=b=v=null),x=!0,h=!0,o=!0):h?(h=!1,o=!0):ie(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,y=r;else{if(s=e.line,l=e.lineStart,c=e.position,!Gt(e,t,bu,!1,!0))break;if(e.line===a){for(y=e.input.charCodeAt(e.position);At(y);)y=e.input.charCodeAt(++e.position);if(y===58)y=e.input.charCodeAt(++e.position),wn(y)||ie(e,"a whitespace character is expected after the key-value separator within a block mapping"),h&&(zt(e,p,m,f,b,null,s,l,c),f=b=v=null),x=!0,h=!1,o=!1,f=e.tag,b=e.result;else if(x)ie(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=u,e.anchor=d,!0}else if(x)ie(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=u,e.anchor=d,!0}if((e.line===a||e.lineIndent>n)&&(h&&(s=e.line,l=e.lineStart,c=e.position),Gt(e,n,co,!0,o)&&(h?b=e.result:v=e.result),h||(zt(e,p,m,f,b,v,s,l,c),f=b=v=null),Xe(e,!0,-1),y=e.input.charCodeAt(e.position)),(e.line===a||e.lineIndent>n)&&y!==0)ie(e,"bad indentation of a mapping entry");else if(e.lineIndent<n)break}return h&&zt(e,p,m,f,b,null,s,l,c),x&&(e.tag=u,e.anchor=d,e.kind="mapping",e.result=p),x}function A2(e){var n,t=!1,r=!1,o,a,s;if(s=e.input.charCodeAt(e.position),s!==33)return!1;if(e.tag!==null&&ie(e,"duplication of a tag property"),s=e.input.charCodeAt(++e.position),s===60?(t=!0,s=e.input.charCodeAt(++e.position)):s===33?(r=!0,o="!!",s=e.input.charCodeAt(++e.position)):o="!",n=e.position,t){do s=e.input.charCodeAt(++e.position);while(s!==0&&s!==62);e.position<e.length?(a=e.input.slice(n,e.position),s=e.input.charCodeAt(++e.position)):ie(e,"unexpected end of the stream within a verbatim tag")}else{for(;s!==0&&!wn(s);)s===33&&(r?ie(e,"tag suffix cannot contain exclamation marks"):(o=e.input.slice(n-1,e.position+1),xu.test(o)||ie(e,"named tag handle cannot contain such characters"),r=!0,n=e.position+1)),s=e.input.charCodeAt(++e.position);a=e.input.slice(n,e.position),g2.test(a)&&ie(e,"tag suffix cannot contain flow indicator characters")}a&&!yu.test(a)&&ie(e,"tag name cannot contain such characters: "+a);try{a=decodeURIComponent(a)}catch{ie(e,"tag name is malformed: "+a)}return t?e.tag=a:yt.call(e.tagMap,o)?e.tag=e.tagMap[o]+a:o==="!"?e.tag="!"+a:o==="!!"?e.tag="tag:yaml.org,2002:"+a:ie(e,'undeclared tag handle "'+o+'"'),!0}function D2(e){var n,t;if(t=e.input.charCodeAt(e.position),t!==38)return!1;for(e.anchor!==null&&ie(e,"duplication of an anchor property"),t=e.input.charCodeAt(++e.position),n=e.position;t!==0&&!wn(t)&&!Nt(t);)t=e.input.charCodeAt(++e.position);return e.position===n&&ie(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(n,e.position),!0}function $2(e){var n,t,r;if(r=e.input.charCodeAt(e.position),r!==42)return!1;for(r=e.input.charCodeAt(++e.position),n=e.position;r!==0&&!wn(r)&&!Nt(r);)r=e.input.charCodeAt(++e.position);return e.position===n&&ie(e,"name of an alias node must contain at least one character"),t=e.input.slice(n,e.position),yt.call(e.anchorMap,t)||ie(e,'unidentified alias "'+t+'"'),e.result=e.anchorMap[t],Xe(e,!0,-1),!0}function Gt(e,n,t,r,o){var a,s,l,c=1,u=!1,d=!1,p,m,f,b,v,h;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,a=s=l=co===t||vu===t,r&&Xe(e,!0,-1)&&(u=!0,e.lineIndent>n?c=1:e.lineIndent===n?c=0:e.lineIndent<n&&(c=-1)),c===1)for(;A2(e)||D2(e);)Xe(e,!0,-1)?(u=!0,l=a,e.lineIndent>n?c=1:e.lineIndent===n?c=0:e.lineIndent<n&&(c=-1)):l=!1;if(l&&(l=u||o),(c===1||co===t)&&(lo===t||bu===t?v=n:v=n+1,h=e.position-e.lineStart,c===1?l&&(el(e,h)||R2(e,h,v))||P2(e,v)?d=!0:(s&&T2(e,v)||S2(e,v)||k2(e,v)?d=!0:$2(e)?(d=!0,(e.tag!==null||e.anchor!==null)&&ie(e,"alias node should not have any properties")):C2(e,v,lo===t)&&(d=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):c===0&&(d=l&&el(e,h))),e.tag===null)e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);else if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&ie(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),p=0,m=e.implicitTypes.length;p<m;p+=1)if(b=e.implicitTypes[p],b.resolve(e.result)){e.result=b.construct(e.result),e.tag=b.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else if(e.tag!=="!"){if(yt.call(e.typeMap[e.kind||"fallback"],e.tag))b=e.typeMap[e.kind||"fallback"][e.tag];else for(b=null,f=e.typeMap.multi[e.kind||"fallback"],p=0,m=f.length;p<m;p+=1)if(e.tag.slice(0,f[p].tag.length)===f[p].tag){b=f[p];break}b||ie(e,"unknown tag !<"+e.tag+">"),e.result!==null&&b.kind!==e.kind&&ie(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+b.kind+'", not "'+e.kind+'"'),b.resolve(e.result,e.tag)?(e.result=b.construct(e.result,e.tag),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):ie(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||d}function I2(e){var n=e.position,t,r,o,a=!1,s;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);(s=e.input.charCodeAt(e.position))!==0&&(Xe(e,!0,-1),s=e.input.charCodeAt(e.position),!(e.lineIndent>0||s!==37));){for(a=!0,s=e.input.charCodeAt(++e.position),t=e.position;s!==0&&!wn(s);)s=e.input.charCodeAt(++e.position);for(r=e.input.slice(t,e.position),o=[],r.length<1&&ie(e,"directive name must not be less than one character in length");s!==0;){for(;At(s);)s=e.input.charCodeAt(++e.position);if(s===35){do s=e.input.charCodeAt(++e.position);while(s!==0&&!Qn(s));break}if(Qn(s))break;for(t=e.position;s!==0&&!wn(s);)s=e.input.charCodeAt(++e.position);o.push(e.input.slice(t,e.position))}s!==0&&ra(e),yt.call(Xs,r)?Xs[r](e,r,o):uo(e,'unknown document directive "'+r+'"')}if(Xe(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,Xe(e,!0,-1)):a&&ie(e,"directives end mark is expected"),Gt(e,e.lineIndent-1,co,!1,!0),Xe(e,!0,-1),e.checkLineBreaks&&h2.test(e.input.slice(n,e.position))&&uo(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&ko(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,Xe(e,!0,-1));return}if(e.position<e.length-1)ie(e,"end of the stream or a document separator is expected");else return}function ku(e,n){e=String(e),n=n||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var t=new w2(e,n),r=e.indexOf("\0");for(r!==-1&&(t.position=r,ie(t,"null byte is not allowed in input")),t.input+="\0";t.input.charCodeAt(t.position)===32;)t.lineIndent+=1,t.position+=1;for(;t.position<t.length-1;)I2(t);return t.documents}function B2(e,n,t){n!==null&&typeof n=="object"&&typeof t=="undefined"&&(t=n,n=null);var r=ku(e,t);if(typeof n!="function")return r;for(var o=0,a=r.length;o<a;o+=1)n(r[o])}function E2(e,n){var t=ku(e,n);if(t.length!==0){if(t.length===1)return t[0];throw new bn("expected a single document in the stream, but found more")}}var M2=B2,L2=E2,Pu={loadAll:M2,load:L2},Tu=Object.prototype.toString,Ru=Object.prototype.hasOwnProperty,ia=65279,O2=9,wr=10,N2=13,z2=32,F2=33,_2=34,di=35,H2=37,W2=38,V2=39,j2=42,Au=44,U2=45,po=58,q2=61,G2=62,Y2=63,K2=64,Du=91,$u=93,Q2=96,Iu=123,J2=124,Bu=125,hn={};hn[0]="\\0";hn[7]="\\a";hn[8]="\\b";hn[9]="\\t";hn[10]="\\n";hn[11]="\\v";hn[12]="\\f";hn[13]="\\r";hn[27]="\\e";hn[34]='\\"';hn[92]="\\\\";hn[133]="\\N";hn[160]="\\_";hn[8232]="\\L";hn[8233]="\\P";var X2=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],Z2=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function eC(e,n){var t,r,o,a,s,l,c;if(n===null)return{};for(t={},r=Object.keys(n),o=0,a=r.length;o<a;o+=1)s=r[o],l=String(n[s]),s.slice(0,2)==="!!"&&(s="tag:yaml.org,2002:"+s.slice(2)),c=e.compiledTypeMap.fallback[s],c&&Ru.call(c.styleAliases,l)&&(l=c.styleAliases[l]),t[s]=l;return t}function nC(e){var n,t,r;if(n=e.toString(16).toUpperCase(),e<=255)t="x",r=2;else if(e<=65535)t="u",r=4;else if(e<=4294967295)t="U",r=8;else throw new bn("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+t+nn.repeat("0",r-n.length)+n}var tC=1,Cr=2;function rC(e){this.schema=e.schema||ta,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=nn.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=eC(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType=e.quotingType==='"'?Cr:tC,this.forceQuotes=e.forceQuotes||!1,this.replacer=typeof e.replacer=="function"?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function nl(e,n){for(var t=nn.repeat(" ",n),r=0,o=-1,a="",s,l=e.length;r<l;)o=e.indexOf(`
`,r),o===-1?(s=e.slice(r),r=l):(s=e.slice(r,o+1),r=o+1),s.length&&s!==`
`&&(a+=t),a+=s;return a}function pi(e,n){return`
`+nn.repeat(" ",e.indent*n)}function oC(e,n){var t,r,o;for(t=0,r=e.implicitTypes.length;t<r;t+=1)if(o=e.implicitTypes[t],o.resolve(n))return!0;return!1}function fo(e){return e===z2||e===O2}function Sr(e){return 32<=e&&e<=126||161<=e&&e<=55295&&e!==8232&&e!==8233||57344<=e&&e<=65533&&e!==ia||65536<=e&&e<=1114111}function tl(e){return Sr(e)&&e!==ia&&e!==N2&&e!==wr}function rl(e,n,t){var r=tl(e),o=r&&!fo(e);return(t?r:r&&e!==Au&&e!==Du&&e!==$u&&e!==Iu&&e!==Bu)&&e!==di&&!(n===po&&!o)||tl(n)&&!fo(n)&&e===di||n===po&&o}function iC(e){return Sr(e)&&e!==ia&&!fo(e)&&e!==U2&&e!==Y2&&e!==po&&e!==Au&&e!==Du&&e!==$u&&e!==Iu&&e!==Bu&&e!==di&&e!==W2&&e!==j2&&e!==F2&&e!==J2&&e!==q2&&e!==G2&&e!==V2&&e!==_2&&e!==H2&&e!==K2&&e!==Q2}function aC(e){return!fo(e)&&e!==po}function cr(e,n){var t=e.charCodeAt(n),r;return t>=55296&&t<=56319&&n+1<e.length&&(r=e.charCodeAt(n+1),r>=56320&&r<=57343)?(t-55296)*1024+r-56320+65536:t}function Eu(e){var n=/^\n* /;return n.test(e)}var Mu=1,fi=2,Lu=3,Ou=4,Mt=5;function sC(e,n,t,r,o,a,s,l){var c,u=0,d=null,p=!1,m=!1,f=r!==-1,b=-1,v=iC(cr(e,0))&&aC(cr(e,e.length-1));if(n||s)for(c=0;c<e.length;u>=65536?c+=2:c++){if(u=cr(e,c),!Sr(u))return Mt;v=v&&rl(u,d,l),d=u}else{for(c=0;c<e.length;u>=65536?c+=2:c++){if(u=cr(e,c),u===wr)p=!0,f&&(m=m||c-b-1>r&&e[b+1]!==" ",b=c);else if(!Sr(u))return Mt;v=v&&rl(u,d,l),d=u}m=m||f&&c-b-1>r&&e[b+1]!==" "}return!p&&!m?v&&!s&&!o(e)?Mu:a===Cr?Mt:fi:t>9&&Eu(e)?Mt:s?a===Cr?Mt:fi:m?Ou:Lu}function lC(e,n,t,r,o){e.dump=function(){if(n.length===0)return e.quotingType===Cr?'""':"''";if(!e.noCompatMode&&(X2.indexOf(n)!==-1||Z2.test(n)))return e.quotingType===Cr?'"'+n+'"':"'"+n+"'";var a=e.indent*Math.max(1,t),s=e.lineWidth===-1?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-a),l=r||e.flowLevel>-1&&t>=e.flowLevel;function c(u){return oC(e,u)}switch(sC(n,l,e.indent,s,c,e.quotingType,e.forceQuotes&&!r,o)){case Mu:return n;case fi:return"'"+n.replace(/'/g,"''")+"'";case Lu:return"|"+ol(n,e.indent)+il(nl(n,a));case Ou:return">"+ol(n,e.indent)+il(nl(cC(n,s),a));case Mt:return'"'+uC(n)+'"';default:throw new bn("impossible error: invalid scalar style")}}()}function ol(e,n){var t=Eu(e)?String(n):"",r=e[e.length-1]===`
`,o=r&&(e[e.length-2]===`
`||e===`
`),a=o?"+":r?"":"-";return t+a+`
`}function il(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function cC(e,n){for(var t=/(\n+)([^\n]*)/g,r=function(){var u=e.indexOf(`
`);return u=u!==-1?u:e.length,t.lastIndex=u,al(e.slice(0,u),n)}(),o=e[0]===`
`||e[0]===" ",a,s;s=t.exec(e);){var l=s[1],c=s[2];a=c[0]===" ",r+=l+(!o&&!a&&c!==""?`
`:"")+al(c,n),o=a}return r}function al(e,n){if(e===""||e[0]===" ")return e;for(var t=/ [^ ]/g,r,o=0,a,s=0,l=0,c="";r=t.exec(e);)l=r.index,l-o>n&&(a=s>o?s:l,c+=`
`+e.slice(o,a),o=a+1),s=l;return c+=`
`,e.length-o>n&&s>o?c+=e.slice(o,s)+`
`+e.slice(s+1):c+=e.slice(o),c.slice(1)}function uC(e){for(var n="",t=0,r,o=0;o<e.length;t>=65536?o+=2:o++)t=cr(e,o),r=hn[t],!r&&Sr(t)?(n+=e[o],t>=65536&&(n+=e[o+1])):n+=r||nC(t);return n}function dC(e,n,t){var r="",o=e.tag,a,s,l;for(a=0,s=t.length;a<s;a+=1)l=t[a],e.replacer&&(l=e.replacer.call(t,String(a),l)),(ot(e,n,l,!1,!1)||typeof l=="undefined"&&ot(e,n,null,!1,!1))&&(r!==""&&(r+=","+(e.condenseFlow?"":" ")),r+=e.dump);e.tag=o,e.dump="["+r+"]"}function sl(e,n,t,r){var o="",a=e.tag,s,l,c;for(s=0,l=t.length;s<l;s+=1)c=t[s],e.replacer&&(c=e.replacer.call(t,String(s),c)),(ot(e,n+1,c,!0,!0,!1,!0)||typeof c=="undefined"&&ot(e,n+1,null,!0,!0,!1,!0))&&((!r||o!=="")&&(o+=pi(e,n)),e.dump&&wr===e.dump.charCodeAt(0)?o+="-":o+="- ",o+=e.dump);e.tag=a,e.dump=o||"[]"}function pC(e,n,t){var r="",o=e.tag,a=Object.keys(t),s,l,c,u,d;for(s=0,l=a.length;s<l;s+=1)d="",r!==""&&(d+=", "),e.condenseFlow&&(d+='"'),c=a[s],u=t[c],e.replacer&&(u=e.replacer.call(t,c,u)),ot(e,n,c,!1,!1)&&(e.dump.length>1024&&(d+="? "),d+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),ot(e,n,u,!1,!1)&&(d+=e.dump,r+=d));e.tag=o,e.dump="{"+r+"}"}function fC(e,n,t,r){var o="",a=e.tag,s=Object.keys(t),l,c,u,d,p,m;if(e.sortKeys===!0)s.sort();else if(typeof e.sortKeys=="function")s.sort(e.sortKeys);else if(e.sortKeys)throw new bn("sortKeys must be a boolean or a function");for(l=0,c=s.length;l<c;l+=1)m="",(!r||o!=="")&&(m+=pi(e,n)),u=s[l],d=t[u],e.replacer&&(d=e.replacer.call(t,u,d)),ot(e,n+1,u,!0,!0,!0)&&(p=e.tag!==null&&e.tag!=="?"||e.dump&&e.dump.length>1024,p&&(e.dump&&wr===e.dump.charCodeAt(0)?m+="?":m+="? "),m+=e.dump,p&&(m+=pi(e,n)),ot(e,n+1,d,!0,p)&&(e.dump&&wr===e.dump.charCodeAt(0)?m+=":":m+=": ",m+=e.dump,o+=m));e.tag=a,e.dump=o||"{}"}function ll(e,n,t){var r,o,a,s,l,c;for(o=t?e.explicitTypes:e.implicitTypes,a=0,s=o.length;a<s;a+=1)if(l=o[a],(l.instanceOf||l.predicate)&&(!l.instanceOf||typeof n=="object"&&n instanceof l.instanceOf)&&(!l.predicate||l.predicate(n))){if(t?l.multi&&l.representName?e.tag=l.representName(n):e.tag=l.tag:e.tag="?",l.represent){if(c=e.styleMap[l.tag]||l.defaultStyle,Tu.call(l.represent)==="[object Function]")r=l.represent(n,c);else if(Ru.call(l.represent,c))r=l.represent[c](n,c);else throw new bn("!<"+l.tag+'> tag resolver accepts not "'+c+'" style');e.dump=r}return!0}return!1}function ot(e,n,t,r,o,a,s){e.tag=null,e.dump=t,ll(e,t,!1)||ll(e,t,!0);var l=Tu.call(e.dump),c=r,u;r&&(r=e.flowLevel<0||e.flowLevel>n);var d=l==="[object Object]"||l==="[object Array]",p,m;if(d&&(p=e.duplicates.indexOf(t),m=p!==-1),(e.tag!==null&&e.tag!=="?"||m||e.indent!==2&&n>0)&&(o=!1),m&&e.usedDuplicates[p])e.dump="*ref_"+p;else{if(d&&m&&!e.usedDuplicates[p]&&(e.usedDuplicates[p]=!0),l==="[object Object]")r&&Object.keys(e.dump).length!==0?(fC(e,n,e.dump,o),m&&(e.dump="&ref_"+p+e.dump)):(pC(e,n,e.dump),m&&(e.dump="&ref_"+p+" "+e.dump));else if(l==="[object Array]")r&&e.dump.length!==0?(e.noArrayIndent&&!s&&n>0?sl(e,n-1,e.dump,o):sl(e,n,e.dump,o),m&&(e.dump="&ref_"+p+e.dump)):(dC(e,n,e.dump),m&&(e.dump="&ref_"+p+" "+e.dump));else if(l==="[object String]")e.tag!=="?"&&lC(e,e.dump,n,a,c);else{if(l==="[object Undefined]")return!1;if(e.skipInvalid)return!1;throw new bn("unacceptable kind of an object to dump "+l)}e.tag!==null&&e.tag!=="?"&&(u=encodeURI(e.tag[0]==="!"?e.tag.slice(1):e.tag).replace(/!/g,"%21"),e.tag[0]==="!"?u="!"+u:u.slice(0,18)==="tag:yaml.org,2002:"?u="!!"+u.slice(18):u="!<"+u+">",e.dump=u+" "+e.dump)}return!0}function mC(e,n){var t=[],r=[],o,a;for(mi(e,t,r),o=0,a=r.length;o<a;o+=1)n.duplicates.push(t[r[o]]);n.usedDuplicates=new Array(a)}function mi(e,n,t){var r,o,a;if(e!==null&&typeof e=="object")if(o=n.indexOf(e),o!==-1)t.indexOf(o)===-1&&t.push(o);else if(n.push(e),Array.isArray(e))for(o=0,a=e.length;o<a;o+=1)mi(e[o],n,t);else for(r=Object.keys(e),o=0,a=r.length;o<a;o+=1)mi(e[r[o]],n,t)}function hC(e,n){n=n||{};var t=new rC(n);t.noRefs||mC(e,t);var r=e;return t.replacer&&(r=t.replacer.call({"":r},"",r)),ot(t,0,r,!0,!0)?t.dump+`
`:""}var gC=hC,bC={dump:gC};function aa(e,n){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+n+" instead, which is now safe by default.")}}var vC=pn,xC=Xc,yC=tu,wC=su,CC=lu,SC=ta,kC=Pu.load,PC=Pu.loadAll,TC=bC.dump,RC=bn,AC={binary:fu,float:au,map:nu,null:ru,pairs:hu,set:gu,timestamp:du,bool:ou,int:iu,merge:pu,omap:mu,seq:eu,str:Zc},DC=aa("safeLoad","load"),$C=aa("safeLoadAll","loadAll"),IC=aa("safeDump","dump"),Nu={Type:vC,Schema:xC,FAILSAFE_SCHEMA:yC,JSON_SCHEMA:wC,CORE_SCHEMA:CC,DEFAULT_SCHEMA:SC,load:kC,loadAll:PC,dump:TC,YAMLException:RC,types:AC,safeLoad:DC,safeLoadAll:$C,safeDump:IC};function BC(e){let n=[],t=!1;if(e)try{if(n=JSON.parse(e),typeof n!="object")throw new Error("invalid")}catch{try{if(n=Nu.load(e),typeof n!="object")throw new Error("invalid")}catch{t=!0}}return t&&(n=[]),{data:Array.isArray(n)?n:[n],error:t}}const EC=()=>{const e=Ee(),{t:n}=Se(),t=q(rp),r=q(op),o=a=>{const s=a.target.value;e(_a({key:"textBox",value:s}));const{data:l,error:c}=BC(s);e(_a({key:"extraModifiers",value:l})),e(sp(c?n("Invalid Format."):""))};return w(ge,{children:[i(Hn,{label:n("Extra Modifiers"),variant:"standard",sx:{width:"100%",marginBottom:1},multiline:!0,minRows:5,value:r,error:t!=="",helperText:t,onChange:o}),w(Yt,{children:[i(Qt,{expandIcon:i(Xt,{}),children:i(U,{children:i(X,{children:"Formatting examples"})})}),i(Kt,{children:w(he,{container:!0,children:[w(he,{item:!0,xs:6,children:[i(U,{children:"YAML"}),i("pre",{style:{overflow:"auto hidden"},children:ip})]}),w(he,{item:!0,xs:6,children:[i(U,{children:"JSON"}),i("pre",{style:{overflow:"auto hidden"},children:ap})]})]})})]})]})},MC=()=>{const{t:e}=Se();return i(An,{title:e("Extra Modifiers"),helpText:w(ge,{children:[i(X,{children:"Allows adding arbitrary extra modifiers. The textbox expects valid YAML or JSON formatting. Multiple modifiers can be entered as an array."}),i(J,{component:"span",sx:{mt:1,display:"block"}}),w(X,{children:["For more information,"," ",i(ao,{href:"https://github.com/discretize/discretize-gear-optimizer/tree/staging/docs/Contributing/Data%20Format",target:"_blank",rel:"noopener",children:"see the data format documentation on Github"})," ","or ask in Discord!"]})]}),content:i(EC,{})})};var LC=G.memo(MC),sa={},OC=qe.exports;Object.defineProperty(sa,"__esModule",{value:!0});var zu=sa.default=void 0,NC=OC(Ge),zC=Ke,FC=(0,NC.default)((0,zC.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");zu=sa.default=FC;var la={},_C=qe.exports;Object.defineProperty(la,"__esModule",{value:!0});var Fu=la.default=void 0,HC=_C(Ge),WC=Ke,VC=(0,HC.default)((0,WC.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");Fu=la.default=VC;var ca={},jC=qe.exports;Object.defineProperty(ca,"__esModule",{value:!0});var ua=ca.default=void 0,UC=jC(Ge),qC=Ke,GC=(0,UC.default)((0,qC.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");ua=ca.default=GC;var da={},YC=qe.exports;Object.defineProperty(da,"__esModule",{value:!0});var _u=da.default=void 0,KC=YC(Ge),QC=Ke,JC=(0,KC.default)((0,QC.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline");_u=da.default=JC;var pa={},XC=qe.exports;Object.defineProperty(pa,"__esModule",{value:!0});var hi=pa.default=void 0,ZC=XC(Ge),eS=Ke,nS=(0,ZC.default)((0,eS.jsx)("path",{d:"M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"}),"SelectAll");hi=pa.default=nS;const tS=Je()(e=>({root:{fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeight,fontSize:e.typography.pxToRem(12),lineHeight:1,padding:`${e.spacing(.25)} ${e.spacing(.75)}`,borderRadius:e.shape.borderRadius,border:`1px solid ${e.palette.divider}`,color:e.palette.text.secondary,display:"inline-block",backgroundColor:e.palette.background.embossed,boxShadow:e.shadows[1]}}));function Go({className:e,children:n}){const{classes:t}=tS();return i("span",{className:nt(t.root,e),children:n})}const rS=Je()(e=>({root:{padding:e.spacing(4)},textfield:{minWidth:550,[e.breakpoints.down("sm")]:{minWidth:"unset"}},toggleAllLabel:{marginLeft:e.spacing(.5)}}));function oS(e,n){return e.reduce(function(t,r){return(t[r[n]]=t[r[n]]||[]).push(r),t},{})}function iS(e){const{type:n,modifierData:t,modifierDataById:r}=e,{classes:o}=rS(),{t:a}=Se(),s=Ee(),l=q(Ti)[n]||[],[c,u]=G.useState(""),d=G.useRef(),p=G.useMemo(()=>oS(t.flatMap(({items:x})=>x.map(y=>y.id)).map(x=>ue({id:x},r[x])),"section"),[r,t]),m=Object.entries(p).map(([x,y])=>{const C=y.filter(({text:T,gw2id:R})=>T.toLowerCase().includes(c.toLowerCase())||`${R}`.includes(c));return[x,C]}),f=x=>{const y=[...l.filter(C=>C!==x.target.name||x.target.checked)];x.target.checked&&y.push(x.target.name),s(dr({type:n,ids:y}))},b=x=>{u(x.target.value)},v=()=>{const x=m.flatMap(y=>y[1]).map(({id:y})=>y);s(dr({type:n,ids:[...l,...x]}))},h=()=>{const x=m.flatMap(C=>C[1]).map(({id:C})=>C),y=l.filter(C=>!x.includes(C));s(dr({type:n,ids:y}))};return G.useEffect(()=>(document.onkeydown=function(x){x.ctrlKey&&x.code==="KeyK"&&(d.current.focus(),x.preventDefault()),x.ctrlKey&&x.code==="KeyS"&&(v(),x.preventDefault()),x.ctrlKey&&x.code==="KeyD"&&(h(),x.preventDefault())},()=>{document.onkeydown=void 0})),w(cv,{dividers:!0,className:o.root,children:[i(Hn,{id:"outlined-basic",label:"Search",variant:"outlined",fullWidth:!0,autoFocus:!0,className:o.textfield,inputRef:d,value:c,onChange:b,InputProps:{endAdornment:i(io,{position:"end",children:i(Go,{children:a("Ctrl+k")})})}}),w(J,{display:"flex",children:[i(J,{flexGrow:1}),w(Yn,{sx:{textTransform:"unset"},startIcon:i(hi,{}),onClick:h,children:[a("Delete visible")," ",i(Go,{className:o.toggleAllLabel,children:a("Ctrl+d")})]}),w(Yn,{sx:{textTransform:"unset"},startIcon:i(hi,{}),onClick:v,children:[a("Select visible")," ",i(Go,{className:o.toggleAllLabel,children:a("Ctrl+s")})]})]}),m.map(([x,y])=>y.length===0?null:i("div",{children:w(mn,{sx:{margin:1},component:"fieldset",variant:"standard",children:[i(br,{component:"legend",children:a("extraSection",{context:x})}),i(zi,{children:y.map(({id:C,gw2id:T,subText:R,text:A})=>i(Kn,{control:i(Tc,{name:C,checked:l.includes(C),onChange:f}),label:w(ge,{children:[i(Ze,{id:T,disableLink:!0,text:A.replace("Superior ","")}),R&&i(U,{variant:"caption",sx:{marginLeft:1,fontWeight:200},children:a("extraSubText",{context:R})})]})},C))})]})}))]})}const aS=Je()(e=>({list:{width:"100%",backgroundColor:e.palette.background.embossed,marginBottom:e.spacing(2)},subText:{marginLeft:e.spacing(1),fontWeight:200}}));function ir(e){const{type:n,label:t,modifierDataById:r,text:o}=e,{classes:a}=aS(),s=Ee(),{t:l}=Se(),[c,u]=G.useState(!1),d=()=>u(!0),p=()=>u(!1),m=G.useRef(null);G.useEffect(()=>{if(c){const{current:y}=m;y!==null&&y.focus()}},[c]);const f=q(Ti)[n]||[],b=q(lp),v=y=>C=>{s(up({type:n,id:y,amount:C.target.value}))},h=y=>()=>{s(dr({type:n,ids:f.filter(C=>C!==y)}))},x=()=>{s(dr({type:n,ids:[]}))};return w(ge,{children:[w(J,{display:"flex",mb:1,children:[i(U,{variant:"h6",component:"span",flexGrow:1,children:t}),w(Yn,{variant:"contained",size:"small",startIcon:i(zu,{}),onClick:d,children:[l("Add")," ",o]})]}),i(cp,{className:a.list,disablePadding:!0,children:f.length>0?f.map(y=>{var R,A,$,D,E;const{amountData:C}=Tn[y],T=((R=b[n][y])==null?void 0:R.amount)||"";return i(Ha,{secondaryAction:i(Wn,{edge:"end","aria-label":"delete",onClick:h(y),children:i(Fu,{})}),children:i(Wa,{primary:w(J,{display:"flex",children:[i(Ze,{id:(A=r[y])==null?void 0:A.gw2id,disableLink:!0,text:($=r[y])==null?void 0:$.text.replace("Superior ","")}),((D=r[y])==null?void 0:D.subText)&&i(U,{variant:"caption",className:a.subText,children:l("extraSubText",{context:(E=r[y])==null?void 0:E.subText})}),i(J,{flexGrow:1}),C&&i(xt,{placeholder:C.default,endLabel:l("amountLabel",{context:C.label}),handleAmountChange:v(y),value:T,maxWidth:38})]})})},y)}):i(Ha,{children:i(Wa,{children:l("None")})})}),w(Kb,{open:c,onClose:p,scroll:"paper","aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",TransitionComponent:Ci,maxWidth:"md",PaperProps:{elevation:4},children:[w(mv,{id:"scroll-dialog-title",display:"flex",children:[i(U,{flexGrow:1,component:"span",alignSelf:"center",children:t}),i(Wn,{edge:"start",color:"inherit",onClick:p,"aria-label":"close",children:i(ua,{})})]}),i(iS,ue({},e)),w(nv,{children:[i(Yn,{startIcon:i(_u,{}),onClick:x,children:l("Unselect all")}),i(Yn,{onClick:p,children:l("Okay")})]})]})]})}const sS=()=>{const{t:e}=Se(),n=Ee(),r=(q(Ti).Nourishment||[]).some(a=>{var s;return(s=Tn[a])==null?void 0:s.hasLifesteal}),o=q(dp);return w(ge,{children:[i(ir,{type:"Sigil1",text:e("Sigil 1"),label:i(Ze,{id:24615,disableLink:!0,disableTooltip:!0,text:e("Sigil 1")}),modifierData:nr.sigils,modifierDataById:Tn}),i(ir,{type:"Sigil2",text:e("Sigil 2"),label:i(Ze,{id:24868,disableLink:!0,disableTooltip:!0,text:e("Sigil 2")}),modifierData:nr.sigils,modifierDataById:Tn}),i(ir,{type:"Runes",text:e("Runes"),label:i(Ze,{id:24836,disableLink:!0,disableTooltip:!0,text:e("Runes")}),modifierData:nr.runes,modifierDataById:Tn}),i(ir,{type:"Nourishment",text:e("Nourishment"),label:i(no,{disableLink:!0,name:"Nourishment",text:e("Nourishment")}),modifierData:nr.food,modifierDataById:Tn}),r?w(J,{sx:{mt:-1,mb:2,display:"flex",justifyContent:"flex-end",alignItems:"center"},children:[i(U,{variant:"caption",sx:{mr:1,mt:1},children:i(X,{children:"Lifesteal frequency:"})}),i(xt,{placeholder:Va.amountData.default,endLabel:Va.amountData.label,handleAmountChange:a=>n(pp(a.target.value)),value:o,maxWidth:38})]}):null,i(ir,{type:"Enhancement",text:e("Enhancement"),label:i(no,{disableLink:!0,name:"Enhancement",text:e("Enhancement")}),modifierData:nr.utility,modifierDataById:Tn})]})};var lS=G.memo(sS);const cS=({profession:e,data:n})=>{const{t}=Se(),r=Ee();let o;if(e){const{eliteSpecializations:s}=bo.find(l=>l.profession===e);o=n.presetExtras.list.filter(l=>!l.profession||l.profession===e||s.includes(l.profession))}const a=G.useCallback(s=>{if(!s)return;const l=JSON.parse(s.value);r(fp(l))},[r]);return i(An,{title:t("Runes & Sigils & Food"),content:i(lS,{}),helpText:t("Select multiple options if desired and every combination will be tested."),extraInfo:i(ge,{children:e!==""&&i(Jt,{data:o,handleClick:a,presetCategory:"extra"})})})};var cl=G.memo(cS);const uS=80793,gi=e=>e.filter(n=>!!n).map(n=>({label:n,category:Ql[n].category})),ul=["Power DPS","Condi DPS","Support","Hybrid","Open World","Custom"],dS=gi(Object.keys(Ql)).sort((e,n)=>{const t=ul.indexOf(e.category),r=ul.indexOf(n.category);return t===r?0:t>r?1:-1}),pS=Je()(e=>({text:{color:"#ddd !important"},textfield:{minWidth:180},option:{paddingLeft:e.spacing(5)},group:{fontWeight:300,marginLeft:e.spacing(2)}})),Hu=({name:e,multiple:n,onChange:t,value:r})=>{const{classes:o}=pS(),{t:a}=Se();return i(wo,Ne(ue({},n&&{multiple:!0,disableCloseOnSelect:!0}),{options:dS,isOptionEqualToValue:(s,l)=>s.label===l.label,getOptionLabel:s=>a("affix",{context:s.label}),groupBy:s=>s.category,value:n?gi(r):gi([r])[0]||null,onChange:t,renderInput:s=>i(Hn,Ne(ue({},s),{variant:"standard",label:e||a("Affixes"),placeholder:a("Select Affixes"),margin:"dense"})),renderGroup:({group:s,children:l})=>w(G.Fragment,{children:[i(U,{variant:"caption",className:o.group,children:s}),l,i(Ni,{})]},s),renderOption:(u,c)=>{var d=u,{className:s}=d,l=Er(d,["className"]);return w("li",Ne(ue({},l),{className:nt({[o.option]:n,[s]:!0}),children:[n&&i(J,{sx:{width:32},children:r.find(p=>p===c.label)&&i(Xi,{sx:{fontSize:"1rem"}})}),c.label==="Custom"?i(Ze,{id:uS,disableIcon:!0,disableLink:!0,text:a("affix",{context:c.label}),className:o.text}):i(mp,{stat:c.label,type:"Ring",disableLink:!0,text:a("affix",{context:c.label}),className:o.text})]}))},renderTags:(s,l)=>s.map((c,u)=>i(gt,ue({variant:"outlined",label:a("affix",{context:c.label})},l({index:u})),c.label))}))},fS=()=>{const e=Ee(),n=q(hp),t=q(xn("weaponType")),{t:r}=Se();let o=ja;t!==ti.dualWield&&(o=ja.slice(0,13));const a=s=>(l,c)=>{e(gp({index:s,value:(c==null?void 0:c.label)||null}))};return i(he,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"flex-start",spacing:1,children:o.map((s,l)=>i(he,{item:!0,xs:6,sm:4,md:2,children:i(Hu,{name:r("slotName",{context:s.name}),onChange:a(l),value:n[l]})},l))})},mS=()=>{const{t:e}=Se(),n=bp(),t=Ee(),r=()=>{const s=vo(n.getState()),l=s==null?void 0:s.gear;l&&t(vp(l))},o=()=>{t(xp())},a={margin:4};return i(An,{title:e("Forced Slots"),content:i(fS,{}),helpText:i(X,{children:"Lock any gear slots to a specific type to work with what you already have or share gear between multiple builds."}),extraInfo:w(ge,{children:[i(gt,{style:a,variant:"outlined",onClick:o,label:e("Clear")}),i(gt,{style:a,variant:"outlined",onClick:r,label:e("Copy from selected character")})]})})};var dl=G.memo(mS);const St=G.memo(Ze),hS=G.memo(Ul),gS=G.memo(yp),bS=[{value:0,label:""},{value:5,label:"Impedence 1"},{value:10,label:"Impedence 2"},{value:15,label:"Impedence 3"},{value:20,label:"Impedence 4"}],vS=[{value:0,label:""},{value:5,label:"Savant"},{value:10,label:"Prodigy"},{value:15,label:"Champion"},{value:25,label:"God"}],xS=[{value:150,label:"150"},{value:222,label:"222"},{value:343,label:"343"}],yS=Je()(e=>({bigStyle:{fontSize:17},sliderMark:{transform:"translateX(-100%)",[e.breakpoints.down("lg")]:{display:"none"}}})),wS=()=>{const e=Ee(),{classes:n}=yS(),t=Jl(q(Xl)).value,r=Zl(q(ec)).value,o=q(nc),a=q(tc),{enabled:s,impedence:l,attunement:c,singularity:u,tear:d,slots:p,freeWvW:m,ownedMatrix:f}=q(wp),{error:b,resultText:v,resultArray:h,cost:x,maxRequiredMatrix:y}=q(Cp),C=G.useCallback((k,P)=>e(Sp(P)),[e]),T=G.useCallback((k,P)=>e(rc(String(P))),[e]),R=G.useCallback((k,P)=>e(kp(String(P))),[e]),A=G.useCallback((k,P)=>e(Pp(P)),[e]),$=G.useCallback((k,P)=>e(Tp(P)),[e]),D=G.useCallback((k,P)=>e(Rp(P)),[e]),E=G.useCallback((k,P)=>e(Ap(P)),[e]);return w(Yt,{expanded:s,onChange:C,TransitionProps:{unmountOnExit:!0},children:[i(Qt,{expandIcon:i(Xt,{}),children:i(U,{children:i(X,{children:"Infusion Helper (WIP)"})})}),w(Kt,{style:{flexDirection:"column",padding:32},children:[i(U,{children:i(X,{children:"Account AR"})}),i(Zn,{value:l,step:null,min:0,max:20,marks:bS,valueLabelDisplay:"auto",onChange:A,classes:{markLabel:n.sliderMark},mb:3.5}),i(Zn,{value:c,step:null,min:0,max:25,marks:vS,valueLabelDisplay:"auto",onChange:$,classes:{markLabel:n.sliderMark},mb:3.5}),i(Rt,{value:u,checked:u,label:i(U,{variant:"body2",children:w(X,{children:["+5 AR from ",i(hS,{name:"Rigorous Certainty",disableLink:!0})]})}),onChange:k=>e(Dp(k.target.checked))}),i(J,{mb:2,children:i(Rt,{value:d,checked:d,label:i(U,{variant:"body2",children:w(X,{children:["+15 AR from ",i(St,{id:70596,disableLink:!0})," w/ mastery"]})}),onChange:k=>e($p(k.target.checked))})}),i(U,{id:"target-ar",children:i(X,{children:"Target AR"})}),i(Zn,{value:t,step:1,min:0,max:409,marks:xS,valueLabelDisplay:"on",onChange:T,"aria-labelledby":"target-ar"}),i(U,{id:"stat-infusion-slots",children:i(X,{children:"Stat Infusion Slots"})}),i(Zn,{value:r,mb:2,step:1,min:0,max:18,marks:!0,valueLabelDisplay:"auto",onChange:R,"aria-labelledby":"total-infusion-slots"}),i(U,{id:"total-infusion-slots",children:i(X,{children:"Total Infusion Slots"})}),i(Zn,{value:p,step:1,min:0,max:18,marks:!0,valueLabelDisplay:"auto",onChange:D,"aria-labelledby":"total-infusion-slots"}),i(J,{mb:2,children:i(Rt,{value:m,checked:m,label:i(U,{variant:"body2",children:i(X,{children:"Enable free WvW stat infusions"})}),onChange:k=>e(Ip(k.target.checked))})}),y?w(ge,{children:[i(U,{id:"owned-matrix",children:w(X,{children:["Use Owned ",i(St,{id:79230,disableLink:!0}),":"]})}),i(Zn,{value:f,mb:2,step:5,min:0,max:360,marks:[{value:y,label:String(y)}],valueLabelDisplay:"auto",onChange:E,"aria-labelledby":"owned-matrix"})]}):null,b?i(yo,{variant:"outlined",severity:"error",children:b}):w(ge,{children:[i(Ri,{text:"Result"}),i(U,{style:{marginBottom:16},children:w(X,{children:["Estimated Cost: ",i(gS,{value:x*1e4})]})}),w(U,{children:[i(X,{children:"Infusions: "}),v]}),i(U,{variant:"body2",children:h.map((k,P)=>{var V,j;const L=Bp[k],B=(V=L==null?void 0:L[o])==null?void 0:V.id,O=(j=L==null?void 0:L[a])==null?void 0:j.id;let z;return B&&O?z=w(ge,{children:[i(St,{id:B,disableLink:!0,disableText:!0}),i(St,{id:O,disableLink:!0,disableText:!0})," ",i(St,{id:O,disableLink:!0,disableIcon:!0,disableTooltip:!0,text:k})]}):B||O||(L==null?void 0:L.id)?z=i(St,{id:B||O||(L==null?void 0:L.id),disableLink:!0,className:n.bigStyle}):k.includes("Agony Infusion")?z=i(St,{id:49447,disableLink:!0,disableTooltip:!0,className:n.bigStyle}):z=k,w(G.Fragment,{children:[z,i("br",{})]},P)})}),i(U,{variant:"caption",children:w(X,{children:["Note: Not cost optimized for ",">","1 weapon set."]})})]})]})]})};var CS=G.memo(wS);const Wu={"150":"150","162":"162","203":"203 (DH Radiance)","222":"222","244":"244 (Soulbeast)","245":"245 (Weaver)","343":"343 (DH Virtues)"},SS=Object.keys(Wu),kS=Je()(e=>({formControl:{width:200,marginRight:e.spacing(3)},formControl2:{width:80}})),PS=()=>{const{classes:e}=kS(),n=Ee(),{t}=Se(),r=q(Xl),o=q(Ep),a=q(ec),s=q(nc),l=q(tc),c=q(Mp),u=q(Lp),d=G.useCallback((f,b)=>n(rc(b)),[n]),p=(f,b,v)=>w(mn,{className:e.formControl,variant:"standard",children:[i(zn,{id:`dropdown_${f}`,children:f}),w(dt,{labelId:`dropdown_${f}`,value:typeof v=="undefined"?"":v.toString(),input:i(Fn,{name:f,id:f}),onChange:h=>n(Ua({key:b,value:h.target.value})),renderValue:h=>i(Ze,{id:to[h],disableLink:!0}),children:[w(et,{value:"",children:[t("None")," "]}),Object.entries(to).map(([h,x])=>i(et,{value:h,children:i(Ze,{id:x,disableLink:!0})},h))]})]}),m=(f,b,v,h)=>{const{error:x}=Zl(v);return w(mn,{className:h,variant:"standard",children:[i(zn,{htmlFor:`${b}_input-with-icon-adornment`,children:f}),i(Fn,{id:`${b}_input-with-icon-adornment`,value:v,onChange:y=>n(Ua({key:b,value:y.target.value})),autoComplete:"off",error:x})]})};return w(he,{container:!0,spacing:4,children:[w(he,{container:!0,item:!0,spacing:2,alignItems:"center",justifyContent:"flex-start",children:[i(he,{item:!0,xs:12,sm:!0,children:i(Rt,{value:o,checked:o,label:w(ge,{children:[i(X,{children:"Include "}),i(Ze,{id:79722,disableLink:!0}),i(qn,{text:t("Adds 150% of your Agony Resistance to Precision, Toughness, and Concentration."),size:"small"})]}),onChange:f=>n(Op(f.target.checked))})}),i(he,{item:!0,xs:12,sm:!0,children:i(xt,{className:e.formControl,useAutoComplete:!0,parseFn:Jl,handleAmountChange:d,label:t("Agony Resistance"),endLabel:i(Pn,{name:"Agony Resistance",disableLink:!0,disableText:!0}),autoCompleteProps:{options:SS,renderOption:(f,b)=>i("li",Ne(ue({},f),{children:Wu[b]}))},value:r})})]}),w(he,{container:!0,item:!0,spacing:2,justifyContent:"flex-start",direction:"row",alignItems:"center",children:[i(he,{item:!0,xs:12,children:m("# Stat Infusions","maxInfusions",a)}),w(he,{item:!0,xs:12,children:[p(t("Infusion Type #1"),"primaryInfusion",s),m(t("Max #"),"primaryMaxInfusions",c,e.formControl2)]}),w(he,{item:!0,xs:12,children:[p(t("Infusion Type #2"),"secondaryInfusion",l),m(t("Max #"),"secondaryMaxInfusions",u,e.formControl2)]})]}),i(he,{item:!0,xs:12,children:i(CS,{})})]})},TS=({data:e})=>{const{t:n}=Se(),t=Ee(),r=e.presetInfusions.list,o=G.useCallback(a=>{if(!a)return;const s=JSON.parse(a.value);t(Np(s))},[t]);return i(An,{title:n("Infusions + AR"),content:i(PS,{}),helpText:i(ge,{children:i(X,{children:"Select up to 2 types of stat infusions, and optionally limit the quantity allowed."})}),extraInfo:i(Jt,{data:r,handleClick:o,presetCategory:"infusion"})})};var pl=G.memo(TS);const RS=`type: quadruple
bonuses:
  major:
    - Power
    - Ferocity
  minor:
    - Precision
    - Vitality`,AS=`{
  "type": "quadruple",
  "bonuses": {
    "major": ["Power", "Ferocity"],
    "minor": ["Precision", "Vitality"]
  }
}`;function DS(e){let n={},t=!1;if(e)try{if(n=JSON.parse(e),typeof n!="object")throw new Error("invalid")}catch{try{if(n=Nu.load(e),typeof n!="object")throw new Error("invalid")}catch{t=!0}}return t&&(n={}),{data:n,error:t}}const $S=()=>{const e=Ee(),{t:n}=Se(),t=q(xn("customAffixError")),r=q(xn("customAffixTextBox")),o=a=>{const s=a.target.value;e(Ft({key:"customAffixTextBox",value:s}));const{data:l,error:c}=DS(s);e(Ft({key:"customAffix",value:l})),e(Ft({key:"customAffixError",value:c?n("Invalid Format."):""}))};return w(ge,{children:[i(Hn,{label:n('Custom Affix (valid types: "triple," "quadruple," "celestial")'),variant:"standard",sx:{width:"100%",marginBottom:1},multiline:!0,minRows:5,value:r,error:t!=="",helperText:t,onChange:o}),w(Yt,{children:[i(Qt,{expandIcon:i(Xt,{}),children:i(U,{children:i(X,{children:"Formatting examples"})})}),i(Kt,{children:w(he,{container:!0,children:[w(he,{item:!0,xs:6,children:[i(U,{children:"YAML"}),i("pre",{style:{overflow:"auto hidden"},children:RS})]}),w(he,{item:!0,xs:6,children:[i(U,{children:"JSON"}),i("pre",{style:{overflow:"auto hidden"},children:AS})]})]})})]})]})};var IS=G.memo($S);const BS=Je()(e=>({text:{color:"#ddd !important"},formControl:{margin:e.spacing(1),width:160},box:{display:"flex",alignItems:"center",flexWrap:"wrap"}})),ES=["Damage","Survivability","Healing"],MS=()=>{const{classes:e}=BS(),{t:n}=Se(),t=Ee(),r=q(xn("optimizeFor")),o=q(xn("weaponType")),a=q(xn("minBoonDuration")),s=q(xn("minHealingPower")),l=q(xn("minToughness")),c=q(xn("maxToughness")),u=q(xn("minHealth")),d=q(xn("minCritChance")),p=q(xn("affixes")),m=q(go),f=p.includes("Custom"),b=Ct(d).value,v=m!=="Warrior"&&b&&b>=99.9,h=x=>{t(Ft({key:x.target.name,value:x.target.value}))};return w(he,{container:!0,spacing:2,children:[i(he,{item:!0,xs:12,sm:6,children:w(mn,{component:"fieldset",children:[w(br,{component:"legend",children:[i(X,{children:"Optimize for:"})," ",i(qn,{text:n("What to optimize the results for. 'Damage' includes power and condition damage according to the distribution below."),size:"small"})]}),i(ai,{"aria-label":"optimizeFor",name:"optimizeFor",value:r,onChange:h,children:ES.map(x=>i(Kn,{value:x,control:i(Xr,{color:"primary"}),label:n("priorityGoal",{context:x})},x))})]})}),i(he,{item:!0,xs:12,sm:6,children:w(mn,{component:"fieldset",children:[w(br,{component:"legend",children:[i(X,{children:"Weapon type:"})," ",i(qn,{text:n("Select 'Dual wield' if you're using weapons in both hands or 'Two-handed' when using a two-handed weapon."),size:"small"})]}),w(ai,{"aria-label":"weaponType",name:"weaponType",value:o,onChange:h,children:[i(Kn,{value:ti.dualWield,control:i(Xr,{color:"primary"}),label:n("Dual wielded")}),i(Kn,{value:ti.twoHanded,control:i(Xr,{color:"primary"}),label:n("Two-handed")})]})]})}),i(he,{item:!0,xs:12,children:i(Hu,{multiple:!0,onChange:(x,y)=>{t(Ft({key:"affixes",value:y.map(C=>C.label)}))},value:p})}),w(he,{item:!0,xs:6,md:4,className:e.box,children:[w(mn,{className:e.formControl,variant:"standard",children:[w(zn,{htmlFor:"minToughness-input-with-icon-adornment",children:[i(X,{children:"Min."})," ",i(Pn,{name:"Toughness",disableLink:!0})]}),i(Fn,{id:"minToughness-input-with-icon-adornment",value:l,onChange:h,name:"minToughness",error:Ct(l).error,autoComplete:"off"})]}),i(qn,{text:n("Only show results that fulfill a minimum amount of Toughness.")})]}),w(he,{item:!0,xs:6,md:4,className:e.box,children:[w(mn,{className:e.formControl,variant:"standard",children:[w(zn,{htmlFor:"maxToughness-input-with-icon-adornment",children:[i(X,{children:"Max."})," ",i(Pn,{name:"Toughness",disableLink:!0})]}),i(Fn,{id:"maxToughness-input-with-icon-adornment",value:c,onChange:h,name:"maxToughness",error:Ct(c).error,autoComplete:"off"})]}),i(qn,{text:n("Only show results that fulfill a maximum amount of Toughness.")})]}),w(he,{item:!0,xs:6,md:4,className:e.box,children:[w(mn,{className:e.formControl,variant:"standard",children:[w(zn,{htmlFor:"minBoon-input-with-icon-adornment",children:[i(X,{children:"Min."})," ",i(Pn,{name:"Boon Duration",disableLink:!0})]}),i(Fn,{id:"minBoon-input-with-icon-adornment",value:a,onChange:h,name:"minBoonDuration",error:Ct(a).error,autoComplete:"off"})]}),i(qn,{text:n("Only show results that fulfill a certain amount of Boon Duration.")})]}),w(he,{item:!0,xs:6,md:4,className:e.box,children:[w(mn,{className:e.formControl,variant:"standard",children:[w(zn,{htmlFor:"minHeal-input-with-icon-adornment",children:[i(X,{children:"Min."})," ",i(Pn,{name:"Healing Power",disableLink:!0})]}),i(Fn,{id:"minHeal-input-with-icon-adornment",value:s,onChange:h,name:"minHealingPower",error:Ct(s).error,autoComplete:"off"})]}),i(qn,{text:n("Only show results that fulfill a certain amount of Healing Power.")})]}),w(he,{item:!0,xs:6,md:4,className:e.box,children:[w(mn,{className:e.formControl,variant:"standard",children:[w(zn,{htmlFor:"minHealth-input-with-icon-adornment",children:[i(X,{children:"Min."})," ",i(Pn,{name:"Health",disableLink:!0})]}),i(Fn,{id:"minHealth-input-with-icon-adornment",value:u,onChange:h,name:"minHealth",error:Ct(u).error,autoComplete:"off"})]}),i(qn,{text:n("Only show results that fulfill a certain amount of Health.")})]}),w(he,{item:!0,xs:6,md:4,className:e.box,children:[w(mn,{className:e.formControl,variant:"standard",children:[w(zn,{htmlFor:"minCritChance-input-with-icon-adornment",children:[i(X,{children:"Min."})," ",i(Pn,{name:"Critical Chance",disableLink:!0})]}),i(Fn,{id:"minCritChance-input-with-icon-adornment",value:d,onChange:h,name:"minCritChance",error:Ct(d).error,autoComplete:"off"})]}),i(qn,{text:n("Only show results that fulfill a certain amount of Critical Chance.")})]}),v?i(he,{item:!0,xs:12,children:i(yo,{elevation:6,variant:"filled",severity:"warning",children:i(X,{children:"Forcing 100% critical chance is not recommended in most cases. If capping critical chance is optimal, the optimizer will do so automatically, and if it is not, forcing it will lead to a worse result!"})})}):null,f?i(he,{item:!0,xs:12,children:i(IS,{})}):null]})},LS=({data:e})=>{const n=Ee(),{t}=Se(),r=G.useCallback(o=>{if(!o)return;const a=JSON.parse(o.value);Object.keys(a).forEach(s=>n(Ft({key:s,value:a[s]})))},[n]);return i(An,{title:t("Priorities"),content:i(MS,{}),extraInfo:i(Jt,{data:e.presetAffixes.list,handleClick:r,presetCategory:"affix",maxChips:1/0})})};var fl=G.memo(LS);const Yo=({data:e,title:n})=>w(ge,{children:[i(U,{variant:"h6",children:n}),i(bt,{padding:"none",children:i(vt,{children:Object.keys(e).map(t=>w(rt,{hover:!0,children:[i(ze,{children:i(Pn,{name:t,style:{fontSize:"20px",color:"#AAAAAA"}})}),i(ze,{children:e[t]})]},t))})})]}),OS=Je()(e=>({root:{width:"100%"},gw2Item:{fontSize:"20px",color:"#AAAAAA"}})),NS=e=>Math.round(e*100)/100,zS=({data:e})=>{const{classes:n}=OS();return i(ge,{children:w(Yt,{children:[i(Qt,{expandIcon:i(Xt,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:i(U,{className:n.heading,children:i(X,{children:"Applied Modifers"})})}),i(Kt,{children:i(bt,{padding:"none",children:i(vt,{children:e.map(({type:t,id:r,modifiers:o,amount:a,amountData:s})=>{const{value:l}=Vl(a),c=s?`${NS(zp(1,l,s))}x`:"";return w(rt,{hover:!0,children:[i(ze,{children:w(U,{className:n.gw2Item,children:[" ",r," "]})}),i(ze,{style:{paddingRight:8},children:i(U,{variant:"body2",children:c})}),i(ze,{children:JSON.stringify(o)})]},`${t} ${r}`)})})})})]})})},FS=({data:e})=>w(ge,{children:[i(U,{variant:"h6",children:i(X,{children:"Indicators"})}),i(bt,{padding:"none",children:i(vt,{children:Object.keys(e).map(n=>w(rt,{hover:!0,children:[i(ze,{children:w(U,{sx:{fontSize:"20px",color:"#AAAAAA"},children:[n," "]})}),i(ze,{children:e[n]})]},n))})})]}),_S=Je()(e=>({root:{width:"100%"},gw2Item:{fontSize:"20px",color:"#AAAAAA"}})),ml=({title:e,data:n})=>{const{classes:t}=_S();return w(ge,{children:[i(U,{variant:"h6",children:e}),i(bt,{padding:"none",children:i(vt,{children:n.map(r=>w(rt,{hover:!0,children:[i(ze,{children:r.name==="Power"?i(Pn,{name:"Power",className:t.gw2Item}):i(Pr,{name:r.name,className:t.gw2Item})}),i(ze,{children:r.value})]},r.name))})})]})},HS=Je()(e=>({gw2Item:{fontSize:"20px",color:"#AAAAAA"}})),WS=({data:e})=>{const{classes:n}=HS();return w(ge,{children:[i(U,{variant:"h6",children:i(X,{children:"Infusions"})}),i(bt,{padding:"none",children:i(vt,{children:Object.entries(e).map(([t,r])=>w(rt,{hover:!0,children:[i(ze,{children:i(Ze,{id:to[t],className:n.gw2Item})}),i(ze,{children:r})]},t))})})]})},VS=Fp.map(e=>`${e} Duration`),jS=_p.map(e=>`${e} Duration`),hl=e=>Math.round(e*100)/100,US=Je()(e=>({root:{width:"100%"},gw2Item:{fontSize:"20px",color:"#AAAAAA"}})),qS=({data:e})=>{const{classes:n}=US(),t=Object.entries(e).filter(([o])=>VS.includes(o)),r=Object.entries(e).filter(([o])=>jS.includes(o));return r.length===0&&t.length===0?null:w(ge,{children:[i(U,{variant:"h6",children:i(X,{children:"Special Durations"})}),i(bt,{padding:"none",children:w(vt,{children:[t.map(([o,a])=>w(rt,{hover:!0,children:[i(ze,{children:i(Pr,{name:o.split(" ")[0].replace("Poison","Poisoned"),text:o,className:n.gw2Item})}),w(ze,{children:[hl((a+(e["Condition Duration"]||0))*100),"%"]})]},o)),r.map(([o,a])=>w(rt,{hover:!0,children:[i(ze,{children:i(jl,{name:o.split(" ")[0],text:o,className:n.gw2Item})}),w(ze,{children:[hl((a+(e["Boon Duration"]||0))*100),"%"]})]},o))]})})]})};var fa={},GS=qe.exports;Object.defineProperty(fa,"__esModule",{value:!0});var ma=fa.default=void 0,YS=GS(Ge),KS=Ke,QS=(0,YS.default)((0,KS.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy");ma=fa.default=QS;var ha={},JS=qe.exports;Object.defineProperty(ha,"__esModule",{value:!0});var Vu=ha.default=void 0,XS=JS(Ge),ZS=Ke,ek=(0,XS.default)((0,ZS.jsx)("path",{d:"M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}),"Done");Vu=ha.default=ek;var ga={exports:{}},ju=function(n,t){return function(){for(var o=new Array(arguments.length),a=0;a<o.length;a++)o[a]=arguments[a];return n.apply(t,o)}},nk=ju,$t=Object.prototype.toString;function ba(e){return $t.call(e)==="[object Array]"}function bi(e){return typeof e=="undefined"}function tk(e){return e!==null&&!bi(e)&&e.constructor!==null&&!bi(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}function rk(e){return $t.call(e)==="[object ArrayBuffer]"}function ok(e){return typeof FormData!="undefined"&&e instanceof FormData}function ik(e){var n;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?n=ArrayBuffer.isView(e):n=e&&e.buffer&&e.buffer instanceof ArrayBuffer,n}function ak(e){return typeof e=="string"}function sk(e){return typeof e=="number"}function Uu(e){return e!==null&&typeof e=="object"}function Zr(e){if($t.call(e)!=="[object Object]")return!1;var n=Object.getPrototypeOf(e);return n===null||n===Object.prototype}function lk(e){return $t.call(e)==="[object Date]"}function ck(e){return $t.call(e)==="[object File]"}function uk(e){return $t.call(e)==="[object Blob]"}function qu(e){return $t.call(e)==="[object Function]"}function dk(e){return Uu(e)&&qu(e.pipe)}function pk(e){return typeof URLSearchParams!="undefined"&&e instanceof URLSearchParams}function fk(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function mk(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function va(e,n){if(!(e===null||typeof e=="undefined"))if(typeof e!="object"&&(e=[e]),ba(e))for(var t=0,r=e.length;t<r;t++)n.call(null,e[t],t,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.call(null,e[o],o,e)}function vi(){var e={};function n(o,a){Zr(e[a])&&Zr(o)?e[a]=vi(e[a],o):Zr(o)?e[a]=vi({},o):ba(o)?e[a]=o.slice():e[a]=o}for(var t=0,r=arguments.length;t<r;t++)va(arguments[t],n);return e}function hk(e,n,t){return va(n,function(o,a){t&&typeof o=="function"?e[a]=nk(o,t):e[a]=o}),e}function gk(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}var Dn={isArray:ba,isArrayBuffer:rk,isBuffer:tk,isFormData:ok,isArrayBufferView:ik,isString:ak,isNumber:sk,isObject:Uu,isPlainObject:Zr,isUndefined:bi,isDate:lk,isFile:ck,isBlob:uk,isFunction:qu,isStream:dk,isURLSearchParams:pk,isStandardBrowserEnv:mk,forEach:va,merge:vi,extend:hk,trim:fk,stripBOM:gk},Bt=Dn;function gl(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Gu=function(n,t,r){if(!t)return n;var o;if(r)o=r(t);else if(Bt.isURLSearchParams(t))o=t.toString();else{var a=[];Bt.forEach(t,function(c,u){c===null||typeof c=="undefined"||(Bt.isArray(c)?u=u+"[]":c=[c],Bt.forEach(c,function(p){Bt.isDate(p)?p=p.toISOString():Bt.isObject(p)&&(p=JSON.stringify(p)),a.push(gl(u)+"="+gl(p))}))}),o=a.join("&")}if(o){var s=n.indexOf("#");s!==-1&&(n=n.slice(0,s)),n+=(n.indexOf("?")===-1?"?":"&")+o}return n},bk=Dn;function Po(){this.handlers=[]}Po.prototype.use=function(n,t,r){return this.handlers.push({fulfilled:n,rejected:t,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1};Po.prototype.eject=function(n){this.handlers[n]&&(this.handlers[n]=null)};Po.prototype.forEach=function(n){bk.forEach(this.handlers,function(r){r!==null&&n(r)})};var vk=Po,xk=Dn,yk=function(n,t){xk.forEach(n,function(o,a){a!==t&&a.toUpperCase()===t.toUpperCase()&&(n[t]=o,delete n[a])})},Yu=function(n,t,r,o,a){return n.config=t,r&&(n.code=r),n.request=o,n.response=a,n.isAxiosError=!0,n.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},n},wk=Yu,Ku=function(n,t,r,o,a){var s=new Error(n);return wk(s,t,r,o,a)},Ck=Ku,Sk=function(n,t,r){var o=r.config.validateStatus;!r.status||!o||o(r.status)?n(r):t(Ck("Request failed with status code "+r.status,r.config,null,r.request,r))},qr=Dn,kk=qr.isStandardBrowserEnv()?function(){return{write:function(t,r,o,a,s,l){var c=[];c.push(t+"="+encodeURIComponent(r)),qr.isNumber(o)&&c.push("expires="+new Date(o).toGMTString()),qr.isString(a)&&c.push("path="+a),qr.isString(s)&&c.push("domain="+s),l===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(t){var r=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Pk=function(n){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(n)},Tk=function(n,t){return t?n.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):n},Rk=Pk,Ak=Tk,Dk=function(n,t){return n&&!Rk(t)?Ak(n,t):t},Ko=Dn,$k=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Ik=function(n){var t={},r,o,a;return n&&Ko.forEach(n.split(`
`),function(l){if(a=l.indexOf(":"),r=Ko.trim(l.substr(0,a)).toLowerCase(),o=Ko.trim(l.substr(a+1)),r){if(t[r]&&$k.indexOf(r)>=0)return;r==="set-cookie"?t[r]=(t[r]?t[r]:[]).concat([o]):t[r]=t[r]?t[r]+", "+o:o}}),t},bl=Dn,Bk=bl.isStandardBrowserEnv()?function(){var n=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),r;function o(a){var s=a;return n&&(t.setAttribute("href",s),s=t.href),t.setAttribute("href",s),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return r=o(window.location.href),function(s){var l=bl.isString(s)?o(s):s;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}(),Gr=Dn,Ek=Sk,Mk=kk,Lk=Gu,Ok=Dk,Nk=Ik,zk=Bk,Qo=Ku,vl=function(n){return new Promise(function(r,o){var a=n.data,s=n.headers,l=n.responseType;Gr.isFormData(a)&&delete s["Content-Type"];var c=new XMLHttpRequest;if(n.auth){var u=n.auth.username||"",d=n.auth.password?unescape(encodeURIComponent(n.auth.password)):"";s.Authorization="Basic "+btoa(u+":"+d)}var p=Ok(n.baseURL,n.url);c.open(n.method.toUpperCase(),Lk(p,n.params,n.paramsSerializer),!0),c.timeout=n.timeout;function m(){if(!!c){var b="getAllResponseHeaders"in c?Nk(c.getAllResponseHeaders()):null,v=!l||l==="text"||l==="json"?c.responseText:c.response,h={data:v,status:c.status,statusText:c.statusText,headers:b,config:n,request:c};Ek(r,o,h),c=null}}if("onloadend"in c?c.onloadend=m:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(m)},c.onabort=function(){!c||(o(Qo("Request aborted",n,"ECONNABORTED",c)),c=null)},c.onerror=function(){o(Qo("Network Error",n,null,c)),c=null},c.ontimeout=function(){var v="timeout of "+n.timeout+"ms exceeded";n.timeoutErrorMessage&&(v=n.timeoutErrorMessage),o(Qo(v,n,n.transitional&&n.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",c)),c=null},Gr.isStandardBrowserEnv()){var f=(n.withCredentials||zk(p))&&n.xsrfCookieName?Mk.read(n.xsrfCookieName):void 0;f&&(s[n.xsrfHeaderName]=f)}"setRequestHeader"in c&&Gr.forEach(s,function(v,h){typeof a=="undefined"&&h.toLowerCase()==="content-type"?delete s[h]:c.setRequestHeader(h,v)}),Gr.isUndefined(n.withCredentials)||(c.withCredentials=!!n.withCredentials),l&&l!=="json"&&(c.responseType=n.responseType),typeof n.onDownloadProgress=="function"&&c.addEventListener("progress",n.onDownloadProgress),typeof n.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",n.onUploadProgress),n.cancelToken&&n.cancelToken.promise.then(function(v){!c||(c.abort(),o(v),c=null)}),a||(a=null),c.send(a)})},dn=Dn,xl=yk,Fk=Yu,_k={"Content-Type":"application/x-www-form-urlencoded"};function yl(e,n){!dn.isUndefined(e)&&dn.isUndefined(e["Content-Type"])&&(e["Content-Type"]=n)}function Hk(){var e;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(e=vl),e}function Wk(e,n,t){if(dn.isString(e))try{return(n||JSON.parse)(e),dn.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(t||JSON.stringify)(e)}var To={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:Hk(),transformRequest:[function(n,t){return xl(t,"Accept"),xl(t,"Content-Type"),dn.isFormData(n)||dn.isArrayBuffer(n)||dn.isBuffer(n)||dn.isStream(n)||dn.isFile(n)||dn.isBlob(n)?n:dn.isArrayBufferView(n)?n.buffer:dn.isURLSearchParams(n)?(yl(t,"application/x-www-form-urlencoded;charset=utf-8"),n.toString()):dn.isObject(n)||t&&t["Content-Type"]==="application/json"?(yl(t,"application/json"),Wk(n)):n}],transformResponse:[function(n){var t=this.transitional,r=t&&t.silentJSONParsing,o=t&&t.forcedJSONParsing,a=!r&&this.responseType==="json";if(a||o&&dn.isString(n)&&n.length)try{return JSON.parse(n)}catch(s){if(a)throw s.name==="SyntaxError"?Fk(s,this,"E_JSON_PARSE"):s}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(n){return n>=200&&n<300}};To.headers={common:{Accept:"application/json, text/plain, */*"}};dn.forEach(["delete","get","head"],function(n){To.headers[n]={}});dn.forEach(["post","put","patch"],function(n){To.headers[n]=dn.merge(_k)});var xa=To,Vk=Dn,jk=xa,Uk=function(n,t,r){var o=this||jk;return Vk.forEach(r,function(s){n=s.call(o,n,t)}),n},Qu=function(n){return!!(n&&n.__CANCEL__)},wl=Dn,Jo=Uk,qk=Qu,Gk=xa;function Xo(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var Yk=function(n){Xo(n),n.headers=n.headers||{},n.data=Jo.call(n,n.data,n.headers,n.transformRequest),n.headers=wl.merge(n.headers.common||{},n.headers[n.method]||{},n.headers),wl.forEach(["delete","get","head","post","put","patch","common"],function(o){delete n.headers[o]});var t=n.adapter||Gk.adapter;return t(n).then(function(o){return Xo(n),o.data=Jo.call(n,o.data,o.headers,n.transformResponse),o},function(o){return qk(o)||(Xo(n),o&&o.response&&(o.response.data=Jo.call(n,o.response.data,o.response.headers,n.transformResponse))),Promise.reject(o)})},fn=Dn,Ju=function(n,t){t=t||{};var r={},o=["url","method","data"],a=["headers","auth","proxy","params"],s=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],l=["validateStatus"];function c(m,f){return fn.isPlainObject(m)&&fn.isPlainObject(f)?fn.merge(m,f):fn.isPlainObject(f)?fn.merge({},f):fn.isArray(f)?f.slice():f}function u(m){fn.isUndefined(t[m])?fn.isUndefined(n[m])||(r[m]=c(void 0,n[m])):r[m]=c(n[m],t[m])}fn.forEach(o,function(f){fn.isUndefined(t[f])||(r[f]=c(void 0,t[f]))}),fn.forEach(a,u),fn.forEach(s,function(f){fn.isUndefined(t[f])?fn.isUndefined(n[f])||(r[f]=c(void 0,n[f])):r[f]=c(void 0,t[f])}),fn.forEach(l,function(f){f in t?r[f]=c(n[f],t[f]):f in n&&(r[f]=c(void 0,n[f]))});var d=o.concat(a).concat(s).concat(l),p=Object.keys(n).concat(Object.keys(t)).filter(function(f){return d.indexOf(f)===-1});return fn.forEach(p,u),r};const Kk="axios",Qk="0.21.4",Jk="Promise based HTTP client for the browser and node.js",Xk="index.js",Zk={test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},eP={type:"git",url:"https://github.com/axios/axios.git"},nP=["xhr","http","ajax","promise","node"],tP="Matt Zabriskie",rP="MIT",oP={url:"https://github.com/axios/axios/issues"},iP="https://axios-http.com",aP={coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},sP={"./lib/adapters/http.js":"./lib/adapters/xhr.js"},lP="dist/axios.min.js",cP="dist/axios.min.js",uP="./index.d.ts",dP={"follow-redirects":"^1.14.0"},pP=[{path:"./dist/axios.min.js",threshold:"5kB"}];var fP={name:Kk,version:Qk,description:Jk,main:Xk,scripts:Zk,repository:eP,keywords:nP,author:tP,license:rP,bugs:oP,homepage:iP,devDependencies:aP,browser:sP,jsdelivr:lP,unpkg:cP,typings:uP,dependencies:dP,bundlesize:pP},Xu=fP,ya={};["object","boolean","number","function","string","symbol"].forEach(function(e,n){ya[e]=function(r){return typeof r===e||"a"+(n<1?"n ":" ")+e}});var Cl={},mP=Xu.version.split(".");function Zu(e,n){for(var t=n?n.split("."):mP,r=e.split("."),o=0;o<3;o++){if(t[o]>r[o])return!0;if(t[o]<r[o])return!1}return!1}ya.transitional=function(n,t,r){var o=t&&Zu(t);function a(s,l){return"[Axios v"+Xu.version+"] Transitional option '"+s+"'"+l+(r?". "+r:"")}return function(s,l,c){if(n===!1)throw new Error(a(l," has been removed in "+t));return o&&!Cl[l]&&(Cl[l]=!0,console.warn(a(l," has been deprecated since v"+t+" and will be removed in the near future"))),n?n(s,l,c):!0}};function hP(e,n,t){if(typeof e!="object")throw new TypeError("options must be an object");for(var r=Object.keys(e),o=r.length;o-- >0;){var a=r[o],s=n[a];if(s){var l=e[a],c=l===void 0||s(l,a,e);if(c!==!0)throw new TypeError("option "+a+" must be "+c);continue}if(t!==!0)throw Error("Unknown option "+a)}}var gP={isOlderVersion:Zu,assertOptions:hP,validators:ya},ed=Dn,bP=Gu,Sl=vk,kl=Yk,Ro=Ju,nd=gP,Et=nd.validators;function $r(e){this.defaults=e,this.interceptors={request:new Sl,response:new Sl}}$r.prototype.request=function(n){typeof n=="string"?(n=arguments[1]||{},n.url=arguments[0]):n=n||{},n=Ro(this.defaults,n),n.method?n.method=n.method.toLowerCase():this.defaults.method?n.method=this.defaults.method.toLowerCase():n.method="get";var t=n.transitional;t!==void 0&&nd.assertOptions(t,{silentJSONParsing:Et.transitional(Et.boolean,"1.0.0"),forcedJSONParsing:Et.transitional(Et.boolean,"1.0.0"),clarifyTimeoutError:Et.transitional(Et.boolean,"1.0.0")},!1);var r=[],o=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(o=o&&m.synchronous,r.unshift(m.fulfilled,m.rejected))});var a=[];this.interceptors.response.forEach(function(m){a.push(m.fulfilled,m.rejected)});var s;if(!o){var l=[kl,void 0];for(Array.prototype.unshift.apply(l,r),l=l.concat(a),s=Promise.resolve(n);l.length;)s=s.then(l.shift(),l.shift());return s}for(var c=n;r.length;){var u=r.shift(),d=r.shift();try{c=u(c)}catch(p){d(p);break}}try{s=kl(c)}catch(p){return Promise.reject(p)}for(;a.length;)s=s.then(a.shift(),a.shift());return s};$r.prototype.getUri=function(n){return n=Ro(this.defaults,n),bP(n.url,n.params,n.paramsSerializer).replace(/^\?/,"")};ed.forEach(["delete","get","head","options"],function(n){$r.prototype[n]=function(t,r){return this.request(Ro(r||{},{method:n,url:t,data:(r||{}).data}))}});ed.forEach(["post","put","patch"],function(n){$r.prototype[n]=function(t,r,o){return this.request(Ro(o||{},{method:n,url:t,data:r}))}});var vP=$r;function wa(e){this.message=e}wa.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};wa.prototype.__CANCEL__=!0;var td=wa,xP=td;function mo(e){if(typeof e!="function")throw new TypeError("executor must be a function.");var n;this.promise=new Promise(function(o){n=o});var t=this;e(function(o){t.reason||(t.reason=new xP(o),n(t.reason))})}mo.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};mo.source=function(){var n,t=new mo(function(o){n=o});return{token:t,cancel:n}};var yP=mo,wP=function(n){return function(r){return n.apply(null,r)}},CP=function(n){return typeof n=="object"&&n.isAxiosError===!0},Pl=Dn,SP=ju,eo=vP,kP=Ju,PP=xa;function rd(e){var n=new eo(e),t=SP(eo.prototype.request,n);return Pl.extend(t,eo.prototype,n),Pl.extend(t,n),t}var Vn=rd(PP);Vn.Axios=eo;Vn.create=function(n){return rd(kP(Vn.defaults,n))};Vn.Cancel=td;Vn.CancelToken=yP;Vn.isCancel=Qu;Vn.all=function(n){return Promise.all(n)};Vn.spread=wP;Vn.isAxiosError=CP;ga.exports=Vn;ga.exports.default=Vn;var od=ga.exports;const TP=Je()(e=>({skillSelect:{width:60,height:60,marginRight:e.spacing(.5)}}));function ar({name:e,value:n,skillList:t}){const r=Ee(),{classes:o}=TP();return i(dt,{variant:"standard",value:n,name:e,onChange:s=>{r(Wp({key:s.target.name,value:s.target.value}))},className:o.skillSelect,renderValue:s=>s===""?i("div",{style:{fontSize:60,lineHeight:0},children:i(Hp,{})}):i(ur,{id:s,disableText:!0,style:{fontSize:60,lineHeight:0}}),displayEmpty:!0,children:t.map(s=>w(et,{value:s.id,children:[i(ur,{id:s.id,disableLink:!0,disableText:!0,style:{marginRight:4,fontSize:"1.2rem"}}),i(ur,{id:s.id,disableLink:!0,disableTooltip:!0,disableIcon:!0})]},s.id))})}const RP=Je()(e=>({weaponItem:{marginRight:e.spacing(1)},weaponSelect:{width:160,marginRight:e.spacing(1)},skillSelect:{width:60,height:60,marginRight:e.spacing(.5)}}));function id({character:e,buttons:n}){var E,k;const t=Ee(),{classes:r}=RP(),{t:o}=Se(),a=q(oc),s=q(ic),{mainhand1:l,mainhand2:c,offhand1:u,offhand2:d}=a,{healId:p,utility1Id:m,utility2Id:f,utility3Id:b,eliteId:v}=s,[h,x]=G.useState({skills:void 0,error:void 0}),[y,C]=G.useState(new Array(n.length)),{profession:T}=e.settings,{weapons:R}=qp[T],A=P=>{var L;((L=R.mainHand.find(B=>B.gw2id===P.target.value))==null?void 0:L.type)==="two-handed"&&(P.target.name==="mainhand1"&&t(Lo({key:"offhand1",value:""})),P.target.name==="mainhand2"&&t(Lo({key:"offhand2",value:""}))),t(Lo({key:P.target.name,value:P.target.value}))},$=P=>{var L;return(L=ac[P.toUpperCase().replace(" ","")])==null?void 0:L.gw2id};G.useEffect(()=>{od.get(`https://api.guildwars2.com/v2/professions/${Pi(T)}`).then(P=>x({error:void 0,skills:P.data.skills})).catch(P=>(console.error(P),x({error:P.message}),null))},[T]);const D=!h.error&&!h.skills;return w(ge,{children:[i(U,{children:o("Select weapons:")}),w(J,{mb:1,children:[i(dt,{variant:"standard",value:l,name:"mainhand1",onChange:A,className:r.weaponSelect,children:G.Children.toArray(R.mainHand.map(({name:P})=>w(et,{value:$(P),children:[i(Ze,{id:$(P),disableText:!0,className:r.weaponItem}),` ${P}`]})))}),((E=R.mainHand.find(P=>P.gw2id===l))==null?void 0:E.type)!=="two-handed"&&i(dt,{variant:"standard",value:u,name:"offhand1",onChange:A,className:r.weaponSelect,children:G.Children.toArray(R.offHand.map(({name:P})=>w(et,{value:$(P),children:[i(Ze,{id:$(P),disableText:!0,className:r.weaponItem}),` ${P}`]})))})]}),i(J,{alignSelf:"center",children:i(Vp,{name:"WeaponSwap"})}),w(J,{mb:2,children:[i(dt,{variant:"standard",value:c,name:"mainhand2",onChange:A,className:r.weaponSelect,children:G.Children.toArray(R.mainHand.map(({name:P})=>w(et,{value:$(P),children:[i(Ze,{id:$(P),disableText:!0,className:r.weaponItem}),` ${P}`]})))}),((k=R.mainHand.find(P=>P.gw2id===c))==null?void 0:k.type)!=="two-handed"&&i(dt,{variant:"standard",value:d,name:"offhand2",onChange:A,className:r.weaponSelect,children:G.Children.toArray(R.offHand.map(({name:P})=>w(et,{value:$(P),children:[i(Ze,{id:$(P),disableText:!0,className:r.weaponItem}),` ${P}`]})))})]}),i(U,{children:o("Select skills:")}),w(J,{mb:2,children:[D&&i(jp,{}),h.error&&i(Up,{name:"ERROR",message:h.error}),h.skills&&w(ge,{children:[i(ar,{name:"healId",value:p,skillList:h.skills.filter(P=>P.type==="Heal")}),i(ar,{name:"utility1Id",value:m,skillList:h.skills.filter(P=>P.type==="Utility")}),i(ar,{name:"utility2Id",value:f,skillList:h.skills.filter(P=>P.type==="Utility")}),i(ar,{name:"utility3Id",value:b,skillList:h.skills.filter(P=>P.type==="Utility")}),i(ar,{name:"eliteId",value:v,skillList:h.skills.filter(P=>P.type==="Elite")})]})]}),i(ub,{variant:"contained",color:"primary",children:n.map(({label:P,icon:L,onClick:B},O)=>i(Yn,{startIcon:y[O]?i(Vu,{}):i(L,{}),disabled:y[O],onClick:()=>{const z=[...y];z[O]=!0,C(z),setTimeout(()=>{const V=[...y];V[O]=!1,C(V)},3e3),B()},children:P}))})]})}const AP={Power:0,Burning:0,Bleeding:0,Poison:0,Torment:0,Confusion:0},Tl=e=>Math.round(e*100)/100,DP=e=>Math.round(e),Yr=(e,n)=>e.replace(/^/gm," ".repeat(n)),$P=e=>Object.fromEntries(Object.entries(e).map(([n,t])=>[n==="Poison"?"Poisoned":n,t])),IP=({character:e})=>{const{t:n}=Se(),[t,r]=G.useState(AP),[o,a]=G.useState(""),[s,l]=G.useState("");G.useEffect(()=>{async function v(){var h,x,y,C,T,R,A,$,D,E,k,P,L,B,O,z,V,j,K;if(l(""),o)try{const H=o.split("/").slice(-1);if(!H)return;console.log("loading data from dps.report...");const te=await(await fetch(`https://dps.report/getJson?permalink=${H}`)).json();if(console.log("got data from dps.report: ",te),te.error||!Array.isArray(te==null?void 0:te.players)){l(JSON.stringify(te,null,2));return}const Z=te.players.find(Me=>Me.name===te.recordedBy);if(!Z){l("no player data!");return}const re=(((x=(h=te.phases)==null?void 0:h[0])==null?void 0:x.end)-((C=(y=te.phases)==null?void 0:y[0])==null?void 0:C.start))/1e3;let de=0;const ce=(A=(R=(T=Z.dpsTargets)==null?void 0:T[0])==null?void 0:R[0])==null?void 0:A.powerDps;de+=ce;const me=Gp({Burning:737,Bleeding:736,Poison:723,Torment:19426,Confusion:861},Me=>{var Fe,on,Qe,F;const Le=(F=(Qe=(on=(Fe=Z.targetDamageDist)==null?void 0:Fe[0])==null?void 0:on[0])==null?void 0:Qe.find(ee=>(ee==null?void 0:ee.id)===Me))==null?void 0:F.totalDamage,Re=Tl((Le!=null?Le:0)/re);return de+=Re,Re}),be=(E=(D=($=Z.dpsTargets)==null?void 0:$[0])==null?void 0:D[0])==null?void 0:E.dps,oe=(L=(P=(k=Z.statsTargets)==null?void 0:k[0])==null?void 0:P[0])==null?void 0:L.critableDirectDamageCount,ae=(z=(O=(B=Z.statsTargets)==null?void 0:B[0])==null?void 0:O[0])==null?void 0:z.criticalRate,$e=oe/re,We=ae/oe*100,se=(V=Z.minions)!=null?V:[],tn={Clone:{names:new Set,minionHits:0,minionCrits:0},Phantasm:{names:new Set,minionHits:0,minionCrits:0},Minion:{names:new Set,minionHits:0,minionCrits:0}};for(const{name:Me,targetDamageDist:Le}of se){console.log(Me);let Re="Minion";Me==="Clone"&&(Re="Clone"),Me!=null&&Me.startsWith("Illusionary")&&(Re="Phantasm"),tn[Re].names.add(Me);for(const Fe of(K=(j=Le==null?void 0:Le[0])==null?void 0:j[0])!=null?K:[]){const{indirectDamage:on,connectedHits:Qe,crit:F}=Fe;on||(console.log(F,Qe),tn[Re].minionHits+=Qe!=null?Qe:0,tn[Re].minionCrits+=F!=null?F:0)}}const Te=Object.entries(tn).filter(([Me,{minionHits:Le}])=>Le).flatMap(([Me,{names:Le,minionHits:Re,minionCrits:Fe}])=>{const on=[...Le].join(", "),Qe=Re/re,F=Fe/Re*100;return[[`${Me} hits/sec (${Fe}/${Re}: ${F.toFixed(2)}% crit)`,Qe],`            - ${on}
`]}),rn=[["Duration (sec)",re],`
`,["Power DPS (including minions)",ce],...Object.entries(me).map(([Me,Le])=>[`${Me} DPS`,Le]),`
`,["Sum",de],["Total dps (log)",be],`
`,[`Player crittable hits per second (${ae}/${oe}: ${We.toFixed(2)}% crit)`,$e],`
`,...Te].map(Me=>{if(typeof Me=="string")return Me;const[Le,Re]=Me;return`${String(Re.toFixed(2)).padStart(9)}: ${Le}`}).join(`
`);r(ue({Power:ce},me)),l(rn)}catch(H){console.error(H),l(String(H))}}v()},[o]);const c=Object.entries(t).map(([v,h])=>{const{value:x,error:y}=ni(h);return{key:v,inputText:h,value:x,error:y}}),{cachedFormState:u}=e.settings,{coefficientHelper:d}=e.results,p=(v,h=0)=>{const{slope:x,intercept:y}=d[v];return h===y?0:(h-y)/x};let m=Object.fromEntries(c.map(({key:v,value:h})=>[v,p(v,h)]));Object.keys(m).forEach(v=>{m[v]=v==="Power"?DP(m[v]):Tl(m[v])}),m=$P(m);const f={values2:m},b=JSON.stringify(f,null,2).replaceAll(`
    `," ").replaceAll(`
  }`," }");return w(ge,{children:[i(U,{variant:"h6",children:i(X,{children:"Distribution Template"})}),i(U,{variant:"caption",children:i(X,{children:"input the DPS values from a golem log here:"})}),i("table",{children:w("tbody",{children:[i("tr",{children:c.map(({key:v})=>i("td",{children:n("DPSType",{context:v})},v))}),i("tr",{children:c.map(({key:v,inputText:h,error:x})=>i("td",{children:i(Hn,{variant:"standard",error:x,value:h,onChange:y=>{const C=ue({},t);C[v]=y.target.value,r(C)}})},v))})]})}),i("br",{}),i(U,{variant:"caption",children:i(X,{children:"or, enter a dps.report URL to attempt to to fetch the data automatically:"})}),i("br",{}),i(Hn,{fullWidth:!0,variant:"standard",onChange:v=>{a(v.target.value)}}),i("pre",{style:{margin:"1rem"},children:s}),i("br",{}),i(U,{variant:"caption",children:i(X,{children:"result:"})}),i("table",{children:w("tbody",{children:[i("tr",{children:Object.keys(m).map(v=>{const h=v==="Power"?"Power Coefficient":`Avg. ${v} Stacks`;return i("td",{children:h},h)})}),i("tr",{children:Object.values(m).map((v,h)=>i("td",{children:i(Hn,{disabled:!0,value:v,variant:"standard"})},h))})]})}),i("pre",{style:{userSelect:"all",overflowY:"auto",maxHeight:"250px",margin:"1rem"},children:Yr(b,6)}),i(U,{variant:"h6",children:i(X,{children:"Trait Template"})}),i("pre",{style:{userSelect:"all",overflowY:"auto",maxHeight:"250px",margin:"1rem"},children:Yr(JSON.stringify(u==null?void 0:u.traits,null,2)||"",6)}),i(U,{variant:"h6",children:i(X,{children:"Skills Template"})}),i("pre",{style:{userSelect:"all",overflowY:"auto",maxHeight:"250px",margin:"1rem"},children:Yr(JSON.stringify(u==null?void 0:u.skills,null,2)||"",6)}),i(U,{variant:"h6",children:i(X,{children:"Extras Template"})}),i("pre",{style:{userSelect:"all",overflowY:"auto",maxHeight:"250px",margin:"1rem"},children:Yr(JSON.stringify(u==null?void 0:u.extras,null,2)||"",6)})]})};var BP=G.memo(IP);const EP=(e,n)=>e.replace(/^/gm," ".repeat(n));function Kr(e){var n;return(n=Object.values(ac).find(t=>t.gw2id===e))==null?void 0:n.name}const MP=({character:e})=>{const{t:n}=Se(),t=q(oc),r=q(ic),o=()=>{var L,B,O,z;const{attributes:a,gear:s,settings:l}=e,{profession:c}=l,{buffs:u}=l.cachedFormState.buffs,{Sigil1:d,Sigil2:p,Enhancement:m,Nourishment:f,Runes:b}=l.extrasCombination,v=(L=Tn[f])==null?void 0:L.gw2id,h=(B=Tn[m])==null?void 0:B.gw2id,x=(O=Tn[d])==null?void 0:O.gw2id,y=(z=Tn[p])==null?void 0:z.gw2id,C=b?Tn[b]:"",T=b?C.text.replace(/(Superior|Rune|of|the)/g,"").trim():"",{mainhand1:R,offhand1:A,mainhand2:$,offhand2:D}=t,E=ue(ue(ue(ue(ue(ue(ue(ue(ue(ue({},R&&{weapon1MainType:Kr(R)}),R&&{weapon1MainSigil1Id:x}),!A&&{weapon1MainSigil2Id:y}),A&&{weapon1OffType:Kr(A)}),A&&{weapon1OffSigilId:y}),$&&{weapon2MainType:Kr($)}),$&&{weapon2MainSigil1Id:x}),!D&&{weapon2MainSigil2Id:y}),D&&{weapon2OffType:Kr(D)}),D&&{weapon2OffSigilId:y}),k=ki.flatMap(V=>V.items).filter(V=>u[V.id]).map(({id:V,gw2id:j,type:K})=>({id:V,gw2id:j,type:K})),P={profession:c,weight:Yp(c),gear:s,attributes:a,runeId:C.gw2id,runeName:T,infusions:[...Array(18).fill(49432)],weapons:E,consumables:{foodId:v,utilityId:h},skills:r,assumedBuffs:k};navigator.clipboard.writeText(`<Character ${EP(`gear={${JSON.stringify(P,null,2)}}`)} />`)};return i(ge,{children:w(Yt,{children:[i(Qt,{expandIcon:i(Xt,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:i(U,{children:i(X,{children:"Development"})})}),i(Kt,{children:w(he,{container:!0,children:[i(he,{item:!0,xs:12,children:i(An,{title:n("Website Templates"),helpText:i(X,{children:"Create templates for the discretize.eu website. Please check the discretize-guides repo for more information."}),content:i(id,{character:e,buttons:[{label:"Copy Build to clipboard",onClick:o,icon:ma}]})})}),i(he,{item:!0,xs:12,children:i(An,{title:n("Optimizer Templates"),content:i(BP,{character:e}),helpText:i(X,{children:"Create build templates that can be used for the gear optimizer."})})})]})})]})})};var LP=G.memo(MP);const OP=({data:e})=>{var s;const{t:n}=Se(),t=q(vo);if(!t)return null;console.log("Selected Character Data:",t);const r=Object.keys(t.results.effectiveDamageDistribution).map(l=>({name:l==="Poison Damage"?"Poisoned":l.replace("Damage","").trim(),value:t.results.damageBreakdown[l]})),o=Object.keys(t.results.effectiveDamageDistribution).map(l=>({name:l==="Poison Damage"?"Poisoned":l.replace("Damage","").trim(),value:t.results.effectiveDamageDistribution[l]})),a=ki.flatMap(l=>l.items).filter(l=>t.settings.cachedFormState.buffs.buffs[l.id]);return w(sc,{location:"ResultDetails",resetKeys:[t],children:[i(Ri,{text:"Result Character"}),i(Kp,{data:e,character:t,assumedBuffs:a}),w(he,{container:!0,spacing:2,children:[w(he,{item:!0,xs:12,sm:6,md:4,children:[i(qS,{data:t.attributes}),i(FS,{data:t.results.indicators}),i(Yo,{data:t.gearStats,title:n("Stats from affixes")}),t.infusions&&i(WS,{data:t.infusions})]}),w(he,{item:!0,xs:12,sm:6,md:4,children:[i(ml,{title:n("Damage Breakdown"),data:r}),i(ml,{title:n("Effective Distribution"),data:o})]}),w(he,{item:!0,xs:12,sm:6,md:4,children:[i(Yo,{data:t.results.effectivePositiveValues,title:n("Damage increase from +5 of attribute")}),i(Yo,{data:t.results.effectiveNegativeValues,title:n("Damage loss from -5 of attribute")})]}),i(he,{item:!0,xs:12,sm:6,md:4})]}),i(zS,{data:(s=t==null?void 0:t.settings)==null?void 0:s.appliedModifiers}),i(LP,{character:t})]})};var NP=G.memo(OP);const zP={Sigil1:i(Ze,{id:24615,disableLink:!0,disableText:!0,disableTooltip:!0,style:{fontSize:18}}),Sigil2:i(Ze,{id:24615,disableLink:!0,disableText:!0,disableTooltip:!0,style:{fontSize:18}}),Runes:i(Ze,{id:24836,disableLink:!0,disableText:!0,disableTooltip:!0,style:{fontSize:18}}),Nourishment:i(no,{disableLink:!0,disableText:!0,name:"Nourishment",style:{fontSize:18}}),Enhancement:i(no,{disableLink:!0,disableText:!0,name:"Enhancement",style:{fontSize:18}})},FP=({classes:e,weaponType:n="Two-handed",infusions:t={},rankBy:r="Damage",displayExtras:o,displayAttributes:a})=>{const{t:s}=Se();return w(rt,{children:[i(ze,{className:e.tablehead,align:"center",padding:"none",children:i(qn,{text:s("Click the star icon to save a result for comparison."),fontSize:"1rem"})}),i(ze,{className:e.tablehead,children:s("priorityGoal",{context:r})}),Qp[n].map(l=>i(ze,{className:nt(e.tablehead,e.gearColumn),align:"center",padding:"none",children:l.short},l.name)),Object.keys(t).map(l=>i(ze,{className:nt(e.tablehead,e.infusionColumn),align:"center",padding:"none",children:i(Ze,{id:to[l],disableText:!0,disableLink:!0})},l)),lc.filter(l=>o[l]).map((l,c)=>i(ze,{className:nt(e.tablehead,e.extrasColumn),align:"center",padding:"none",children:zP[l]},`extras${c}`)),a.map((l,c)=>i(ze,{className:nt(e.tablehead,e.attributesColumn),align:"center",padding:"none",children:i(Pn,{name:l,disableLink:!0,disableText:!0,style:{fontSize:18}})},`attrs${c}`))]})};var Rl=G.memo(FP),Ca={},_P=qe.exports;Object.defineProperty(Ca,"__esModule",{value:!0});var ad=Ca.default=void 0,HP=_P(Ge),WP=Ke,VP=(0,HP.default)((0,WP.jsx)("path",{d:"m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"}),"StarRounded");ad=Ca.default=VP;const jP=e=>Math.round(e*100)/100,UP=({character:e,selected:n,saved:t=!1,mostCommonAffix:r,underlineClass:o,selectedValue:a,compareByPercent:s,displayExtras:l,displayAttributes:c})=>{const u=Ee(),{value:d}=e.results,p=a?d-a:0,m=p?` ${p>0?"+":"-"}${s?`${(100*Math.abs(p)/a).toFixed(1)}%`:Math.round(Math.abs(p))}`:"";return w(rt,{selected:n,style:n?{backgroundColor:"rgba(0, 204, 204, 0.2)"}:null,onClick:f=>u(Jp(e)),hover:!0,className:o,children:[i(ze,{scope:"row",align:"center",padding:"none",children:i(ad,{sx:t?{color:"star"}:{opacity:"0.2","&:hover":{opacity:"1",color:"star"}},onClick:f=>{u(Xp(e)),f.stopPropagation()}})}),w(ze,{scope:"row",children:[d.toFixed(0),m?i(U,{variant:"caption",sx:{color:"text.secondary"},children:m}):null]}),e.gear.map((f,b)=>i(ze,{align:"center",padding:"none",children:i(U,{style:r&&r!==f?{fontWeight:300,fontSize:"1rem",color:"#00cccc"}:{fontWeight:300,fontSize:"1rem"},children:f.slice(0,4)})},f+b)),e.infusions?Object.values(e.infusions).map((f,b)=>i(ze,{align:"center",padding:"none",children:f},`infu${b}`)):null,lc.filter(f=>l[f]).map((f,b)=>{var h;const v=e.settings.extrasCombination[f];return i(ze,{align:"center",padding:"none",children:v?i(Ze,{id:(h=Tn[v])==null?void 0:h.gw2id,disableText:!0,disableLink:!0,style:{fontSize:23}}):null},`extras${b}`)}),c.map((f,b)=>{var v;return i(ze,{align:"center",padding:"none",children:i(U,{variant:"caption",children:jP(((v=e.attributes[f])!=null?v:0)*(Zp.includes(f)?100:1))})},`attrs${b}`)})]})};var Al=G.memo(UP);const qP=Je()(e=>({container:{borderColor:e.palette.background.paper,border:"1px solid inherit"},shortTable:{maxHeight:440},tallTable:{maxHeight:"90vh"},tablehead:{backgroundColor:e.palette.background.paper},tableCollapse:{borderCollapse:"collapse !important",marginBottom:"0px !important"},underline:{borderBottom:`5px solid ${e.palette.divider}`},gearColumn:{minWidth:"3em"},infusionColumn:{minWidth:"1.8em"},extrasColumn:{minWidth:"2.2em"},attributesColumn:{minWidth:"2.8em"}})),GP=e=>{const n={};let t=0,r=null;for(const o of e)n[o]=(n[o]||0)+1,n[o]>t&&(t=n[o],r=o);return r},Zo=[],YP=()=>{var D,E,k;const{classes:e}=qP(),{t:n}=Se(),t=q(vo),r=q(ef)||Zo,o=q(nf)||Zo,a=q(tf)||Zo,s=q(ql),l=q(Yl),c=q(Gl),u=G.useMemo(()=>l==="None"?r:l==="Combinations"?o.slice(0,100):l==="Sigils"?o.filter((P,L)=>!o.slice(0,L).some(O=>O.settings.extrasCombination.Sigil1===P.settings.extrasCombination.Sigil1&&O.settings.extrasCombination.Sigil2===P.settings.extrasCombination.Sigil2&&O.results.value>P.results.value)):o.filter((P,L)=>!o.slice(0,L).some(O=>O.settings.extrasCombination[l]===P.settings.extrasCombination[l]&&O.results.value>P.results.value)),[l,r,o]);let d=null;u[0]&&(d=GP(u[0].gear));const p=u[0],m=(D=p==null?void 0:p.settings)==null?void 0:D.weaponType,f=p==null?void 0:p.infusions,b=(E=p==null?void 0:p.settings)==null?void 0:E.rankby,v=(k=t==null?void 0:t.results)==null?void 0:k.value,h=P=>{var B,O;if(((O=(B=p==null?void 0:p.settings)==null?void 0:B.shouldDisplayExtras)==null?void 0:O[P])||a.some(z=>{var V,j;return(j=(V=z==null?void 0:z.settings)==null?void 0:V.shouldDisplayExtras)==null?void 0:j[P]}))return!0;const L=new Set;return[...u.slice(0,1),...a].filter(z=>{var V;return z.settings.profession!==((V=p==null?void 0:p.settings)==null?void 0:V.profession)}).forEach(z=>L.add(z.settings.extrasCombination[P])),L.size>1},x=h("Sigil1"),y=h("Sigil2"),C=h("Runes"),T=h("Nourishment"),R=h("Enhancement"),A=G.useMemo(()=>({Sigil1:x,Sigil2:y,Runes:C,Nourishment:T,Enhancement:R}),[x,y,C,T,R]),$=q(Kl);return w(ge,{children:[i(J,{boxShadow:8,mb:3,children:i(Ms,{className:nt(e.container,c?e.tallTable:e.shortTable),children:w(bt,{stickyHeader:!0,"aria-label":"sticky table",className:e.tableCollapse,children:[i(Os,{children:i(Rl,{classes:e,weaponType:m,infusions:f,rankBy:b,displayExtras:A,displayAttributes:$})}),i(vt,{sx:{cursor:"pointer"},children:u.map((P,L)=>{var j,K,H;const B=(j=u[0])==null?void 0:j.results.value,O=(K=u[L])==null?void 0:K.results.value,z=(H=u[L+1])==null?void 0:H.results.value,V=O===B&&O!==z;return i(Al,{character:P,selected:P===t,saved:a.includes(P),mostCommonAffix:d,underlineClass:V?e.underline:null,selectedValue:v,compareByPercent:s,displayExtras:A,displayAttributes:$},P.id)})})]})})}),a.length?w(ge,{children:[i(Ri,{text:n("Saved Results")}),i(J,{boxShadow:8,mb:3,children:i(Ms,{className:nt(e.container,c?e.tallTable:e.shortTable),children:w(bt,{stickyHeader:!0,"aria-label":"saved results table",className:e.tableCollapse,children:[i(Os,{style:{visibility:"collapse"},children:i(Rl,{classes:e,weaponType:m,infusions:f,rankBy:b,displayExtras:A,displayAttributes:$})}),i(vt,{sx:{cursor:"pointer"},children:a.map((P,L)=>i(Al,{character:P,selected:P===t,saved:a.includes(P),mostCommonAffix:d,underlineClass:L===a.length-1?e.bigUnderline:null,selectedValue:v,compareByPercent:s,displayExtras:A,displayAttributes:$},P.id))})]})})})]}):null]})};var KP=G.memo(YP);function sd({state:e,setState:n}){return i(Z1,{open:e.open,autoHideDuration:3e3,onClose:()=>n(Ne(ue({},e),{open:!1})),children:i(yo,{onClose:()=>n(Ne(ue({},e),{open:!1})),severity:e.success?"success":"error",children:e.message})})}const QP=0,JP=({type:e})=>{const n=Ee(),{t}=Se(),[r,o]=G.useState({open:!1,success:!0,message:""}),a=G.useCallback(s=>{if(typeof window=="undefined")return;const l=new URL(window.location.href);l.searchParams.set("v",QP),l.searchParams.set("data",s);const c=l.href;if(c.length>8e3){console.log(`URL is too long! (${c.length} characters):`,c),o(b=>Ne(ue({},b),{open:!0,success:!1,message:t("Error: too much data!")}));return}if(console.log(`Exported long URL (${c.length} characters):`,c),!c.includes("optimizer.discretize.eu")){o(b=>Ne(ue({},b),{open:!0,success:!0,message:t("Copied link to clipboard! (Link shortener disabled in preview builds.)")})),navigator.clipboard.writeText(c);return}const u=od.get(`https://go.princeps.biz/?new=${c.replace("&","%26")}`).then(b=>{var v,h;return((v=b==null?void 0:b.data)==null?void 0:v.Status)===200?(console.log("Exported short URL:",b.data.ShortUrl),b.data.ShortUrl):(console.log(`URL shortener returned status ${(h=b==null?void 0:b.data)==null?void 0:h.Status}!`),c)}),d=new Promise(b=>setTimeout(b,3e3,c)),p=Promise.any([u,d]),m=p.then(b=>new Blob([b],{type:"text/plain"}));(typeof ClipboardItem!="undefined"?navigator.clipboard.write([new ClipboardItem({"text/plain":m})]):p.then(b=>navigator.clipboard.writeText(b))).then(()=>o(b=>Ne(ue({},b),{open:!0,success:!0,message:t("Copied link to clipboard!")}))).catch(()=>o(b=>Ne(ue({},b),{open:!0,success:!0,message:t("Failed to copy link to clipboard!")})))},[t]);return w(ge,{children:[i(rf,{content:t("Copy sharable link to clipboard (note: results are not currently included)"),children:i(Wn,{onClick:()=>n({type:_n.ExportFormState,onSuccess:a}),size:"large",children:i(Dr,{})})}),i(sd,{state:r,setState:o})]})},XP=Je()(e=>({modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,2,2)},closeIcon:{fontSize:20}})),ZP=({children:e,title:n,character:t})=>{const{classes:r}=XP(),o=Ee(),{t:a}=Se(),[s,l]=G.useState(!1),c=()=>{l(!0)},u=()=>{l(!1)},d=()=>{const m=window.open("","_blank");o({type:_n.ExportBuildPageState,newPage:m})},p=()=>{o({type:_n.ExportBuildPageState,copyToClipboard:!0})};return w(ge,{children:[e(c),i(wi,{disableEnforceFocus:!0,"aria-labelledby":"build-share-modal",className:r.modal,open:s,onClose:u,children:i(Ci,{in:s,children:w("div",{className:r.paper,children:[w(J,{display:"flex",justifyContent:"space-between",mb:1,children:[n&&i(J,{alignSelf:"center",children:i(U,{children:n})}),i(J,{alignSelf:"center",children:i(Wn,{onClick:u,children:i(ua,{className:r.closeIcon})})})]}),i(Ni,{}),i(id,{character:t,buttons:[{label:a("Open build"),onClick:d,icon:Dr},{label:a("Copy build"),onClick:p,icon:ma}]})]})})})]})},eT=()=>{const{t:e}=Se(),n=q(vo);return i(An,{title:i("a",{style:{textDecoration:"none",color:"inherit"},id:"#share",href:"#share",children:e("Share Builds")}),helpText:e("Generate shareable links here!"),content:w(ge,{children:[i(JP,{})," ",i(U,{variant:"body1",component:"span",children:i(X,{children:"Share settings."})})," ",i(U,{variant:"caption",children:i(X,{children:"Includes the current selected options on this page only. Does not include result builds in the table above"})}),i("br",{}),i(ZP,{title:e("Build Share Settings"),character:n,children:t=>i(Wn,{disabled:!n,onClick:()=>t(),size:"large",children:i(Dr,{})})})," ",w(U,{variant:"body1",component:"span",children:[i(X,{children:"Share Character."})," "]}),w(U,{variant:"caption",children:[" ",i(X,{children:"Select weapons and skills as you please."})]})]}),extraInfo:i(ge,{})})},nT=({data:e})=>{const n=Ee(),t=q(of),{t:r}=Se(),o=s=>l=>{n(af({id:s,enabled:l.target.checked}))},a=s=>l=>{n(sf({id:s,amount:l.target.value}))};return!e||e.length<1?r("This class does not appear to have skills with extra buffs"):e.map(s=>{var f;const{id:l,gw2id:c,subText:u,amountData:d}=s,p=Boolean(t[l]),m=((f=t[l])==null?void 0:f.amount)||"";return w(J,{justifyContent:"space-between",display:"flex",maxWidth:"648px",children:[i(J,{children:i(Rt,{value:l,checked:p,label:w(J,{display:"flex",children:[i(ur,{id:c,disableLink:!0}),u&&i(U,{sx:{fontWeight:200,marginLeft:1},children:r("skillSubText",{context:u})})]}),onChange:o(l)})}),d?i(J,{children:i(xt,{placeholder:d.default,endLabel:r("amountLabel",{context:d.label}),handleAmountChange:a(l),value:m,disabled:!p,maxWidth:38})}):null]},l)})},Dl=({profession:e})=>{var r;const{t:n}=Se(),t=(r=ri[e])==null?void 0:r.find(o=>o.section==="Skills");return t?i(An,{title:n("Skills"),content:i(nT,{profession:e,data:t.items})}):null};var Sa={},tT=qe.exports;Object.defineProperty(Sa,"__esModule",{value:!0});var ld=Sa.default=void 0,rT=tT(Ge),$l=Ke,oT=(0,rT.default)([(0,$l.jsx)("path",{d:"M12 5.99 19.53 19H4.47L12 5.99M12 2 1 21h22L12 2z"},"0"),(0,$l.jsx)("path",{d:"M13 16h-2v2h2zm0-6h-2v5h2z"},"1")],"WarningAmber");ld=Sa.default=oT;function Il({children:e,direction:n="column"}){return i(On,{sx:{mt:.5,mb:1},elevation:0,children:w(J,{sx:{p:1,display:"flex",flexDirection:n},children:[i(J,{sx:{mr:1},children:i(ld,{})}),i(U,{variant:"caption",paragraph:!0,sx:{mb:0},children:e})]})})}const iT=({profession:e})=>{var v,h,x,y;const n=Ee(),{t}=Se(),r=(h=(v=ri[e])==null?void 0:v.filter(C=>C.id>0))!=null?h:[],o=q(lf),a=q(cf),s=q(uf),c=q(cc)?{opacity:.5}:{display:"none"},u=C=>T=>{const R=T.target.value;n(df({index:C,newTraitLine:R}))},d=C=>T=>{const{tier:R,id:A}=T;n(ff({index:C,tier:R,newTrait:A}))},p=(C,T)=>R=>{n(mf({index:C,id:T,enabled:R.target.checked}))},m=(C,T)=>R=>{n(hf({index:C,id:T,amount:R.target.value}))},f=[1,2,3].map((C,T)=>{var P,L;const R=o[T],A=R?parseInt(R,10):null,$=[],D=[];(P=qa[A])==null||P.items.forEach(B=>{const{minor:O,subText:z,amountData:V}=B;O&&!z&&!V?D.push(B):$.push(B)});const E=(L=qa[A])==null?void 0:L.note,k=`traitNr${C}`;return w(G.Fragment,{children:[w(mn,{variant:"standard",sx:{minWidth:210,margin:1},children:[i(zn,{id:`Traitline${C}`,children:t("Traitline",{lineNr:C})}),i(dt,{label:t("Traitline",{lineNr:C}),labeldid:`Traitline${C}`,value:R,input:i(Fn,{name:t("Traitline",{lineNr:C}),id:k}),onChange:u(T),renderValue:B=>i(Ga,{id:parseInt(B,10),disableLink:!0,style:{lineHeight:"1 !important"}}),children:r.map(B=>B.id).filter(B=>!o.includes(B.toString())||A===B).map(B=>i(et,{value:String(B),children:i(Ga,{id:B,disableLink:!0})},B))})]}),A?i(pf,{id:A,selectable:!0,selected:a[T],onSelect:d(T)}):i("br",{}),D.length>0&&i("div",{children:w(U,{variant:"caption",children:[i(X,{children:"Minors:"})," ",D.map(B=>{const{id:O,gw2id:z,subText:V}=B;return w(G.Fragment,{children:[z&&i(ei,{id:z,disableLink:!0})," ",i(U,{variant:"caption",children:V})]},O)})]})}),$.map(B=>{var Z;const{id:O,gw2id:z,minor:V,subText:j,amountData:K}=B,H=V||a[T].includes(z),W=Boolean(s[T][O]),te=(Z=s[T][O])==null?void 0:Z.amount;return w(J,{style:H?{}:c,justifyContent:"space-between",display:"flex",maxWidth:"648px",children:[i(J,{children:i(Rt,{value:O,checked:H&&W,label:w(ge,{children:[z&&i(ei,{id:z,disableLink:!0})," ",i(U,{variant:"caption",children:t("traitSubText",{context:j})})]}),onChange:p(T,O),disabled:!H})}),K?i(J,{children:i(xt,{placeholder:K.default,endLabel:t("amountLabel",{context:K.label}),handleAmountChange:m(T,O),value:te,disabled:!H||!W,maxWidth:38})}):null]},O)}),E?i(J,{sx:{p:1},maxWidth:"648px",children:i(Il,{direction:"row",children:t("traitNote",{context:E})})}):null]},k)}),b=(y=(x=ri[e])==null?void 0:x.find(C=>C.section==="Skills"))==null?void 0:y.note;return w(ge,{children:[b?i(J,{sx:{p:1},maxWidth:"648px",children:i(Il,{direction:"row",children:t("traitNote",{context:b})})}):null,f]})},aT=({profession:e,data:n})=>{const t=Ee(),r=q(cc),{t:o}=Se();let a;if(e){const{eliteSpecializations:l}=bo.find(c=>c.profession===e);a=n.presetTraits.list.filter(c=>!c.profession||c.profession===e||l.includes(c.profession))}const s=G.useCallback(l=>{if(!l)return;const c=JSON.parse(l.traits);t(gf(c));const u=JSON.parse(l.skills);t(bf(u))},[t]);return i(An,{first:!0,title:o("Traits"),helpText:w(ge,{children:[i(X,{children:"Select your traits, then select and customize the trait bonuses you want to simulate using the checkboxes below each line. Many bonuses are conditional and may not apply to your setup."}),i(J,{component:"span",sx:{mt:1,display:"block"}}),i(X,{children:"Only the bonuses with checkboxes are applied here, so be sure to change the Skill Coefficients section when changing to/from traits without checkboxes like Lingering Curse or Legendary Lore for accurate results."})]}),content:i(iT,{profession:e}),extraInfo:w(ge,{children:[i(Kn,{control:i(so,{checked:r,onChange:l=>t(vf(l.target.checked)),name:"checked",color:"primary"}),label:o("Show all implemented modifier effects")}),e!==""&&i(Jt,{data:a,handleClick:s,presetCategory:"trait"})]})})};var sT=G.memo(aT);const un={templates:$x,presetBuffs:Px,presetAffixes:kx,presetDistribution:Tx,presetExtras:Rx,presetInfusions:Ax,presetTraits:Dx},lT=()=>{const e=q(Hl),n=q(go),{t}=Se(),r=t("Select a class or a build template from the menu above!"),o=t("Select a build template from the menu above!");return w(ge,{children:[i(dy,{data:un.templates.list,buffPresets:un.presetBuffs.list,prioritiesPresets:un.presetAffixes.list,distributionPresets:un.presetDistribution.list,extrasPresets:un.presetExtras.list,traitPresets:un.presetTraits.list}),w(J,{children:[n===""&&w(U,{mb:1,children:[i(si,{}),i("i",{children:e?r:o})," ",i(si,{})]}),w("div",{style:n===""?{opacity:.5}:{opacity:1},children:[i(he,{container:!0,children:e?w(ge,{children:[i(sT,{profession:n,data:un}),i(Dl,{profession:n}),i(cl,{profession:n,data:un}),i(js,{data:un}),i(LC,{}),i(pl,{data:un}),i(dl,{}),i(fl,{data:un}),i(lw,{profession:n,data:un}),i(yy,{})]}):w(ge,{children:[i(Dl,{profession:n}),i(cl,{profession:n,data:un}),i(js,{first:!0,data:un}),i(pl,{data:un}),i(dl,{}),i(fl,{data:un})]})}),i(ow,{profession:n}),i(KP,{}),i(J,{m:3}),i(NP,{data:un}),i(J,{m:3}),i(eT,{})]})]})]})},cT=({sagaType:e,clearUrlOnSuccess:n})=>{const t=Ee(),[r,o]=G.useState({open:!1,success:!0,message:""}),a=xf({key:Oo.BUILD}),s=G.useCallback(()=>{n&&(Ya({key:Oo.BUILD,value:void 0}),Ya({key:Oo.VERSION,value:void 0})),o(c=>Ne(ue({},c),{open:!0,success:!0,message:"Template successfully loaded!"}))},[n]),l=G.useCallback(()=>{o(c=>Ne(ue({},c),{open:!0,success:!1,message:"There was an error loading this template!"}))},[]);return G.useEffect(()=>(a&&(console.log("Imported URL data:",a),t({type:e,buildUrl:a,onSuccess:s,onError:l})),()=>{}),[a,l,s,t,e]),i(sd,{state:r,setState:o})},uT=()=>{const{i18n:e}=Se(),{language:n}=e;return i(yf,{value:n,children:w(wf,{children:[i(cT,{sagaType:_n.ImportFormState,clearUrlOnSuccess:!0}),i(Cf,{}),w(yo,{elevation:6,variant:"filled",severity:"warning",children:[i(X,{children:"The gear optimizer is currently in beta! Templates are not final and illusion/summon/mech and lifesteal and condition-on-crit damage is inaccurate. Please report potential issues to us in"})," ",i(ao,{href:"https://discord.gg/Qdt7nFY",color:"textPrimary",target:"_blank",rel:"noopener",children:"Discord"})," ",i(X,{children:"or"})," ",w(ao,{href:"https://github.com/discretize/discretize-gear-optimizer/tree/staging",color:"textPrimary",target:"_blank",rel:"noopener",children:[i(Mc,{fontSize:"small"})," Github"]}),"."]}),i(U,{variant:"h2",sx:{paddingBottom:2},children:i(X,{children:"Gear Optimizer"})}),w(sc,{location:"GearOptimizer",children:[i(lT,{})," "]})]})})},dT=Sf();kf.render(i(G.StrictMode,{children:w(Pf,{store:dT,children:[i(Tf,{styles:Rf}),w(Af,{theme:Df,children:[i($f,{}),i(uT,{})]})]})}),document.getElementById("root"));
