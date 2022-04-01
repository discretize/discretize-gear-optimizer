var fd=Object.defineProperty,md=Object.defineProperties;var hd=Object.getOwnPropertyDescriptors;var Mr=Object.getOwnPropertySymbols;var Aa=Object.prototype.hasOwnProperty,$a=Object.prototype.propertyIsEnumerable;var Ta=(e,n,t)=>n in e?fd(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,pe=(e,n)=>{for(var t in n||(n={}))Aa.call(n,t)&&Ta(e,t,n[t]);if(Mr)for(var t of Mr(n))$a.call(n,t)&&Ta(e,t,n[t]);return e},Ve=(e,n)=>md(e,hd(n));var Lr=(e,n)=>{var t={};for(var r in e)Aa.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&Mr)for(var r of Mr(e))n.indexOf(r)<0&&$a.call(e,r)&&(t[r]=e[r]);return t};import{r as k,R as gd,i as Ct,_ as b,u as pt,a as xn,s as El,b as In,o as Rn,j as i,c as fe,P as bd,d as Ht,g as Se,e as ye,f as Q,h as w,k as vi,l as we,C as vd,m as B,n as Ml,p as Mn,q as xi,t as xd,v as St,w as _,x as Ce,y as yd,T as Ll,z as Dt,A as hr,B as Ln,D as Wt,E as Be,F as gr,G as br,H as wd,I as Bo,J as Or,K as Da,L as Nr,M as Cd,N as go,O as Sd,Q as Rr,S as Ol,U as Nl,V as kd,W as yi,X as wi,Y as V,Z as Pd,$ as Rd,a0 as Ci,a1 as Td,a2 as Ad,a3 as $d,a4 as Dd,a5 as Id,a6 as zl,a7 as Bd,a8 as Fl,a9 as Ed,aa as mn,ab as Nn,ac as ct,ad as zn,ae as Md,af as Ld,ag as _l,ah as Ke,ai as Je,aj as G,ak as Ee,al as ut,am as X,an as Hl,ao as U,ap as bo,aq as kt,ar as ke,as as Od,at as vo,au as Nd,av as Zn,aw as J,ax as he,ay as ge,az as Wl,aA as Tr,aB as zd,aC as Fd,aD as Ia,aE as Ba,aF as Ea,aG as _d,aH as Hd,aI as Si,aJ as vr,aK as ki,aL as Wd,aM as Vd,aN as Vl,aO as ei,aP as dr,aQ as jl,aR as jd,aS as Ul,aT as ql,aU as Gl,aV as Ud,aW as qd,aX as Gd,aY as Yd,aZ as kn,a_ as Ma,a$ as Kd,b0 as La,b1 as Pt,b2 as nr,b3 as Oa,b4 as Na,b5 as ft,b6 as Qd,b7 as Un,b8 as Yl,b9 as Jd,ba as Xd,bb as Zd,bc as ni,bd as za,be as Fa,bf as ep,bg as np,bh as tp,bi as _a,bj as rp,bk as op,bl as Ha,bm as ip,bn as Pi,bo as Ze,bp as pr,bq as ap,br as sp,bs as Pn,bt as Wa,bu as Va,bv as lp,bw as cp,bx as tr,by as ro,bz as ja,bA as up,bB as dp,bC as Kl,bD as pp,bE as fp,bF as Ua,bG as mp,bH as hp,bI as xo,bJ as gp,bK as bp,bL as vp,bM as Ql,bN as Jl,bO as Xl,bP as Zl,bQ as ec,bR as nc,bS as xp,bT as yp,bU as wp,bV as tc,bW as Cp,bX as Sp,bY as kp,bZ as Pp,b_ as Rp,b$ as Tp,c0 as Ap,c1 as $p,c2 as Ri,c3 as Dp,c4 as Ip,c5 as Bp,c6 as Ep,c7 as jn,c8 as Mp,c9 as qa,ca as oo,cb as Lp,cc as _t,cd as yt,ce as Op,cf as Np,cg as zp,ch as Fp,ci as _p,cj as rc,ck as oc,cl as ic,cm as Hp,cn as Wp,co as Vp,cp as jp,cq as Eo,cr as Up,cs as qp,ct as ac,cu as Gp,cv as Yp,cw as sc,cx as Kp,cy as Qp,cz as Jp,cA as Xp,cB as Zp,cC as ef,cD as nf,cE as tf,cF as rf,cG as ti,cH as of,cI as af,cJ as sf,cK as lc,cL as Ga,cM as lf,cN as Ya,cO as cf,cP as uf,cQ as df,cR as pf,cS as ff,cT as mf,cU as hf,cV as gf,cW as Ka,cX as Mo,cY as bf,cZ as vf,c_ as xf,c$ as yf,d0 as wf,d1 as Cf,d2 as Sf,d3 as kf,d4 as Pf,d5 as Rf,d6 as Tf}from"./queryParam.51f4e445.js";function Af(e,n){return()=>null}function $f(e,n){return()=>null}let Qa=0;function Df(e){const[n,t]=k.exports.useState(e),r=e||n;return k.exports.useEffect(()=>{n==null&&(Qa+=1,t(`mui-${Qa}`))},[n]),r}const Ja=gd["useId"];function Ar(e){if(Ja!==void 0){const n=Ja();return e!=null?e:n}return Df(e)}function If(e,n,t,r,o){return null}const Bf={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"};var Ef=Bf;function at(e,n={},t){return Ct(e)?n:b({},n,{ownerState:b({},n.ownerState,t)})}function Xa(e){return typeof e.normalize!="undefined"?e.normalize("NFD").replace(/[\u0300-\u036f]/g,""):e}function Mf(e={}){const{ignoreAccents:n=!0,ignoreCase:t=!0,limit:r,matchFrom:o="any",stringify:s,trim:a=!1}=e;return(l,{inputValue:c,getOptionLabel:u})=>{let d=a?c.trim():c;t&&(d=d.toLowerCase()),n&&(d=Xa(d));const f=l.filter(m=>{let p=(s||u)(m);return t&&(p=p.toLowerCase()),n&&(p=Xa(p)),o==="start"?p.indexOf(d)===0:p.indexOf(d)>-1});return typeof r=="number"?f.slice(0,r):f}}function Lo(e,n){for(let t=0;t<e.length;t+=1)if(n(e[t]))return t;return-1}const Lf=Mf(),Za=5;function Of(e){const{autoComplete:n=!1,autoHighlight:t=!1,autoSelect:r=!1,blurOnSelect:o=!1,disabled:s,clearOnBlur:a=!e.freeSolo,clearOnEscape:l=!1,componentName:c="useAutocomplete",defaultValue:u=e.multiple?[]:null,disableClearable:d=!1,disableCloseOnSelect:f=!1,disabledItemsFocusable:m=!1,disableListWrap:p=!1,filterOptions:v=Lf,filterSelectedOptions:g=!1,freeSolo:h=!1,getOptionDisabled:x,getOptionLabel:y=O=>{var M;return(M=O.label)!=null?M:O},isOptionEqualToValue:S=(O,M)=>O===M,groupBy:R,handleHomeEndKeys:T=!e.freeSolo,id:A,includeInputInList:I=!1,inputValue:D,multiple:$=!1,onChange:C,onClose:P,onHighlightChange:L,onInputChange:E,onOpen:N,open:z,openOnFocus:q=!1,options:j,readOnly:K=!1,selectOnFocus:W=!e.freeSolo,value:H}=e,te=Ar(A);let Z=y;Z=O=>{const M=y(O);return typeof M!="string"?String(M):M};const re=k.exports.useRef(!1),ue=k.exports.useRef(!0),ce=k.exports.useRef(null),Y=k.exports.useRef(null),[me,be]=k.exports.useState(null),[oe,ae]=k.exports.useState(-1),De=t?0:-1,_e=k.exports.useRef(De),[se,tn]=pt({controlled:H,default:u,name:c}),[Re,an]=pt({controlled:D,default:"",name:c,state:"inputValue"}),[rn,Me]=k.exports.useState(!1),Le=k.exports.useCallback((O,M)=>{if(!($?se.length<M.length:M!==null)&&!a)return;let ve;if($)ve="";else if(M==null)ve="";else{const We=Z(M);ve=typeof We=="string"?We:""}Re!==ve&&(an(ve),E&&E(O,ve,"reset"))},[Z,Re,$,E,an,a,se]),Te=k.exports.useRef();k.exports.useEffect(()=>{const O=se!==Te.current;Te.current=se,!(rn&&!O)&&(h&&!O||Le(null,se))},[se,Le,rn,Te,h]);const[Ne,on]=pt({controlled:z,default:!1,name:c,state:"open"}),[Qe,F]=k.exports.useState(!0),ee=!$&&se!=null&&Re===Z(se),ne=Ne&&!K,le=ne?v(j.filter(O=>!(g&&($?se:[se]).some(M=>M!==null&&S(O,M)))),{inputValue:ee&&Qe?"":Re,getOptionLabel:Z}):[],ze=Ne&&le.length>0&&!K,Ue=xn(O=>{O===-1?ce.current.focus():me.querySelector(`[data-tag-index="${O}"]`).focus()});k.exports.useEffect(()=>{$&&oe>se.length-1&&(ae(-1),Ue(-1))},[se,$,oe,Ue]);function Pe(O,M){if(!Y.current||O===-1)return-1;let de=O;for(;;){if(M==="next"&&de===le.length||M==="previous"&&de===-1)return-1;const ve=Y.current.querySelector(`[data-option-index="${de}"]`),We=m?!1:!ve||ve.disabled||ve.getAttribute("aria-disabled")==="true";if(ve&&!ve.hasAttribute("tabindex")||We)de+=M==="next"?1:-1;else return de}}const $e=xn(({event:O,index:M,reason:de="auto"})=>{if(_e.current=M,M===-1?ce.current.removeAttribute("aria-activedescendant"):ce.current.setAttribute("aria-activedescendant",`${te}-option-${M}`),L&&L(O,M===-1?null:le[M],de),!Y.current)return;const ve=Y.current.querySelector('[role="option"].Mui-focused');ve&&(ve.classList.remove("Mui-focused"),ve.classList.remove("Mui-focusVisible"));const We=Y.current.parentElement.querySelector('[role="listbox"]');if(!We)return;if(M===-1){We.scrollTop=0;return}const cn=Y.current.querySelector(`[data-option-index="${M}"]`);if(!!cn&&(cn.classList.add("Mui-focused"),de==="keyboard"&&cn.classList.add("Mui-focusVisible"),We.scrollHeight>We.clientHeight&&de!=="mouse")){const en=cn,Vn=We.clientHeight+We.scrollTop,Ra=en.offsetTop+en.offsetHeight;Ra>Vn?We.scrollTop=Ra-We.clientHeight:en.offsetTop-en.offsetHeight*(R?1.3:0)<We.scrollTop&&(We.scrollTop=en.offsetTop-en.offsetHeight*(R?1.3:0))}}),xe=xn(({event:O,diff:M,direction:de="next",reason:ve="auto"})=>{if(!ne)return;const cn=Pe((()=>{const en=le.length-1;if(M==="reset")return De;if(M==="start")return 0;if(M==="end")return en;const Vn=_e.current+M;return Vn<0?Vn===-1&&I?-1:p&&_e.current!==-1||Math.abs(M)>1?0:en:Vn>en?Vn===en+1&&I?-1:p||Math.abs(M)>1?en:0:Vn})(),de);if($e({index:cn,reason:ve,event:O}),n&&M!=="reset")if(cn===-1)ce.current.value=Re;else{const en=Z(le[cn]);ce.current.value=en,en.toLowerCase().indexOf(Re.toLowerCase())===0&&Re.length>0&&ce.current.setSelectionRange(Re.length,en.length)}}),He=k.exports.useCallback(()=>{if(!ne)return;const O=$?se[0]:se;if(le.length===0||O==null){xe({diff:"reset"});return}if(!!Y.current){if(O!=null){const M=le[_e.current];if($&&M&&Lo(se,ve=>S(M,ve))!==-1)return;const de=Lo(le,ve=>S(ve,O));de===-1?xe({diff:"reset"}):$e({index:de});return}if(_e.current>=le.length-1){$e({index:le.length-1});return}$e({index:_e.current})}},[le.length,$?!1:se,g,xe,$e,ne,Re,$]),sn=xn(O=>{El(Y,O),O&&He()});k.exports.useEffect(()=>{He()},[He]);const Fe=O=>{Ne||(on(!0),F(!0),N&&N(O))},rt=(O,M)=>{!Ne||(on(!1),P&&P(O,M))},ot=(O,M,de,ve)=>{if(Array.isArray(se)){if(se.length===M.length&&se.every((We,cn)=>We===M[cn]))return}else if(se===M)return;C&&C(O,M,de,ve),tn(M)},ln=k.exports.useRef(!1),Ye=(O,M,de="selectOption",ve="options")=>{let We=de,cn=M;if($){cn=Array.isArray(se)?se.slice():[];const en=Lo(cn,Vn=>S(M,Vn));en===-1?cn.push(M):ve!=="freeSolo"&&(cn.splice(en,1),We="removeOption")}Le(O,cn),ot(O,cn,We,{option:M}),!f&&!O.ctrlKey&&!O.metaKey&&rt(O,We),(o===!0||o==="touch"&&ln.current||o==="mouse"&&!ln.current)&&ce.current.blur()};function On(O,M){if(O===-1)return-1;let de=O;for(;;){if(M==="next"&&de===se.length||M==="previous"&&de===-1)return-1;const ve=me.querySelector(`[data-tag-index="${de}"]`);if(!ve||!ve.hasAttribute("tabindex")||ve.disabled||ve.getAttribute("aria-disabled")==="true")de+=M==="next"?1:-1;else return de}}const Ao=(O,M)=>{if(!$)return;rt(O,"toggleInput");let de=oe;oe===-1?Re===""&&M==="previous"&&(de=se.length-1):(de+=M==="next"?1:-1,de<0&&(de=0),de===se.length&&(de=-1)),de=On(de,M),ae(de),Ue(de)},Er=O=>{re.current=!0,an(""),E&&E(O,"","clear"),ot(O,$?[]:null,"clear")},Sa=O=>M=>{if(O.onKeyDown&&O.onKeyDown(M),!M.defaultMuiPrevented&&(oe!==-1&&["ArrowLeft","ArrowRight"].indexOf(M.key)===-1&&(ae(-1),Ue(-1)),M.which!==229))switch(M.key){case"Home":ne&&T&&(M.preventDefault(),xe({diff:"start",direction:"next",reason:"keyboard",event:M}));break;case"End":ne&&T&&(M.preventDefault(),xe({diff:"end",direction:"previous",reason:"keyboard",event:M}));break;case"PageUp":M.preventDefault(),xe({diff:-Za,direction:"previous",reason:"keyboard",event:M}),Fe(M);break;case"PageDown":M.preventDefault(),xe({diff:Za,direction:"next",reason:"keyboard",event:M}),Fe(M);break;case"ArrowDown":M.preventDefault(),xe({diff:1,direction:"next",reason:"keyboard",event:M}),Fe(M);break;case"ArrowUp":M.preventDefault(),xe({diff:-1,direction:"previous",reason:"keyboard",event:M}),Fe(M);break;case"ArrowLeft":Ao(M,"previous");break;case"ArrowRight":Ao(M,"next");break;case"Enter":if(_e.current!==-1&&ne){const de=le[_e.current],ve=x?x(de):!1;if(M.preventDefault(),ve)return;Ye(M,de,"selectOption"),n&&ce.current.setSelectionRange(ce.current.value.length,ce.current.value.length)}else h&&Re!==""&&ee===!1&&($&&M.preventDefault(),Ye(M,Re,"createOption","freeSolo"));break;case"Escape":ne?(M.preventDefault(),M.stopPropagation(),rt(M,"escape")):l&&(Re!==""||$&&se.length>0)&&(M.preventDefault(),M.stopPropagation(),Er(M));break;case"Backspace":if($&&!K&&Re===""&&se.length>0){const de=oe===-1?se.length-1:oe,ve=se.slice();ve.splice(de,1),ot(M,ve,"removeOption",{option:se[de]})}break}},$o=O=>{Me(!0),q&&!re.current&&Fe(O)},er=O=>{if(Y.current!==null&&Y.current.parentElement.contains(document.activeElement)){ce.current.focus();return}Me(!1),ue.current=!0,re.current=!1,r&&_e.current!==-1&&ne?Ye(O,le[_e.current],"blur"):r&&h&&Re!==""?Ye(O,Re,"blur","freeSolo"):a&&Le(O,se),rt(O,"blur")},Oe=O=>{const M=O.target.value;Re!==M&&(an(M),F(!1),E&&E(O,M,"input")),M===""?!d&&!$&&ot(O,null,"clear"):Fe(O)},vn=O=>{$e({event:O,index:Number(O.currentTarget.getAttribute("data-option-index")),reason:"mouse"})},it=()=>{ln.current=!0},Do=O=>{const M=Number(O.currentTarget.getAttribute("data-option-index"));Ye(O,le[M],"selectOption"),ln.current=!1},cd=O=>M=>{const de=se.slice();de.splice(O,1),ot(M,de,"removeOption",{option:se[O]})},ka=O=>{Ne?rt(O,"toggleInput"):Fe(O)},ud=O=>{O.target.getAttribute("id")!==te&&O.preventDefault()},dd=()=>{ce.current.focus(),W&&ue.current&&ce.current.selectionEnd-ce.current.selectionStart===0&&ce.current.select(),ue.current=!1},pd=O=>{(Re===""||!Ne)&&ka(O)};let Io=h&&Re.length>0;Io=Io||($?se.length>0:se!==null);let Pa=le;return R&&(Pa=le.reduce((O,M,de)=>{const ve=R(M);return O.length>0&&O[O.length-1].group===ve?O[O.length-1].options.push(M):O.push({key:de,index:de,group:ve,options:[M]}),O},[])),s&&rn&&er(),{getRootProps:(O={})=>b({"aria-owns":ze?`${te}-listbox`:null},O,{onKeyDown:Sa(O),onMouseDown:ud,onClick:dd}),getInputLabelProps:()=>({id:`${te}-label`,htmlFor:te}),getInputProps:()=>({id:te,value:Re,onBlur:er,onFocus:$o,onChange:Oe,onMouseDown:pd,"aria-activedescendant":ne?"":null,"aria-autocomplete":n?"both":"list","aria-controls":ze?`${te}-listbox`:void 0,"aria-expanded":ze,autoComplete:"off",ref:ce,autoCapitalize:"none",spellCheck:"false",role:"combobox"}),getClearProps:()=>({tabIndex:-1,onClick:Er}),getPopupIndicatorProps:()=>({tabIndex:-1,onClick:ka}),getTagProps:({index:O})=>b({key:O,"data-tag-index":O,tabIndex:-1},!K&&{onDelete:cd(O)}),getListboxProps:()=>({role:"listbox",id:`${te}-listbox`,"aria-labelledby":`${te}-label`,ref:sn,onMouseDown:O=>{O.preventDefault()}}),getOptionProps:({index:O,option:M})=>{const de=($?se:[se]).some(We=>We!=null&&S(M,We)),ve=x?x(M):!1;return{key:Z(M),tabIndex:-1,role:"option",id:`${te}-option-${O}`,onMouseOver:vn,onClick:Do,onTouchStart:it,"data-option-index":O,"aria-disabled":ve,"aria-selected":de}},id:te,inputValue:Re,value:se,dirty:Io,popupOpen:ne,focused:rn||oe!==-1,anchorEl:me,setAnchorEl:be,focusedTag:oe,groupedOptions:Pa}}function es(e){return e.substring(2).toLowerCase()}function Nf(e,n){return n.documentElement.clientWidth<e.clientX||n.documentElement.clientHeight<e.clientY}function cc(e){const{children:n,disableReactTree:t=!1,mouseEvent:r="onClick",onClickAway:o,touchEvent:s="onTouchEnd"}=e,a=k.exports.useRef(!1),l=k.exports.useRef(null),c=k.exports.useRef(!1),u=k.exports.useRef(!1);k.exports.useEffect(()=>(setTimeout(()=>{c.current=!0},0),()=>{c.current=!1}),[]);const d=In(n.ref,l),f=xn(v=>{const g=u.current;u.current=!1;const h=Rn(l.current);if(!c.current||!l.current||"clientX"in v&&Nf(v,h))return;if(a.current){a.current=!1;return}let x;v.composedPath?x=v.composedPath().indexOf(l.current)>-1:x=!h.documentElement.contains(v.target)||l.current.contains(v.target),!x&&(t||!g)&&o(v)}),m=v=>g=>{u.current=!0;const h=n.props[v];h&&h(g)},p={ref:d};return s!==!1&&(p[s]=m(s)),k.exports.useEffect(()=>{if(s!==!1){const v=es(s),g=Rn(l.current),h=()=>{a.current=!0};return g.addEventListener(v,f),g.addEventListener("touchmove",h),()=>{g.removeEventListener(v,f),g.removeEventListener("touchmove",h)}}},[f,s]),r!==!1&&(p[r]=m(r)),k.exports.useEffect(()=>{if(r!==!1){const v=es(r),g=Rn(l.current);return g.addEventListener(v,f),()=>{g.removeEventListener(v,f)}}},[f,r]),i(k.exports.Fragment,{children:k.exports.cloneElement(n,p)})}var wn="top",Bn="bottom",En="right",Cn="left",Ti="auto",$r=[wn,Bn,En,Cn],Vt="start",xr="end",zf="clippingParents",uc="viewport",rr="popper",Ff="reference",ns=$r.reduce(function(e,n){return e.concat([n+"-"+Vt,n+"-"+xr])},[]),dc=[].concat($r,[Ti]).reduce(function(e,n){return e.concat([n,n+"-"+Vt,n+"-"+xr])},[]),_f="beforeRead",Hf="read",Wf="afterRead",Vf="beforeMain",jf="main",Uf="afterMain",qf="beforeWrite",Gf="write",Yf="afterWrite",Kf=[_f,Hf,Wf,Vf,jf,Uf,qf,Gf,Yf];function Jn(e){return e?(e.nodeName||"").toLowerCase():null}function Wn(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var n=e.ownerDocument;return n&&n.defaultView||window}return e}function jt(e){var n=Wn(e).Element;return e instanceof n||e instanceof Element}function Dn(e){var n=Wn(e).HTMLElement;return e instanceof n||e instanceof HTMLElement}function Ai(e){if(typeof ShadowRoot=="undefined")return!1;var n=Wn(e).ShadowRoot;return e instanceof n||e instanceof ShadowRoot}function Qf(e){var n=e.state;Object.keys(n.elements).forEach(function(t){var r=n.styles[t]||{},o=n.attributes[t]||{},s=n.elements[t];!Dn(s)||!Jn(s)||(Object.assign(s.style,r),Object.keys(o).forEach(function(a){var l=o[a];l===!1?s.removeAttribute(a):s.setAttribute(a,l===!0?"":l)}))})}function Jf(e){var n=e.state,t={popper:{position:n.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(n.elements.popper.style,t.popper),n.styles=t,n.elements.arrow&&Object.assign(n.elements.arrow.style,t.arrow),function(){Object.keys(n.elements).forEach(function(r){var o=n.elements[r],s=n.attributes[r]||{},a=Object.keys(n.styles.hasOwnProperty(r)?n.styles[r]:t[r]),l=a.reduce(function(c,u){return c[u]="",c},{});!Dn(o)||!Jn(o)||(Object.assign(o.style,l),Object.keys(s).forEach(function(c){o.removeAttribute(c)}))})}}var Xf={name:"applyStyles",enabled:!0,phase:"write",fn:Qf,effect:Jf,requires:["computeStyles"]};function Gn(e){return e.split("-")[0]}var Rt=Math.max,io=Math.min,Ut=Math.round;function qt(e,n){n===void 0&&(n=!1);var t=e.getBoundingClientRect(),r=1,o=1;if(Dn(e)&&n){var s=e.offsetHeight,a=e.offsetWidth;a>0&&(r=Ut(t.width)/a||1),s>0&&(o=Ut(t.height)/s||1)}return{width:t.width/r,height:t.height/o,top:t.top/o,right:t.right/r,bottom:t.bottom/o,left:t.left/r,x:t.left/r,y:t.top/o}}function $i(e){var n=qt(e),t=e.offsetWidth,r=e.offsetHeight;return Math.abs(n.width-t)<=1&&(t=n.width),Math.abs(n.height-r)<=1&&(r=n.height),{x:e.offsetLeft,y:e.offsetTop,width:t,height:r}}function pc(e,n){var t=n.getRootNode&&n.getRootNode();if(e.contains(n))return!0;if(t&&Ai(t)){var r=n;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function et(e){return Wn(e).getComputedStyle(e)}function Zf(e){return["table","td","th"].indexOf(Jn(e))>=0}function xt(e){return((jt(e)?e.ownerDocument:e.document)||window.document).documentElement}function yo(e){return Jn(e)==="html"?e:e.assignedSlot||e.parentNode||(Ai(e)?e.host:null)||xt(e)}function ts(e){return!Dn(e)||et(e).position==="fixed"?null:e.offsetParent}function em(e){var n=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,t=navigator.userAgent.indexOf("Trident")!==-1;if(t&&Dn(e)){var r=et(e);if(r.position==="fixed")return null}var o=yo(e);for(Ai(o)&&(o=o.host);Dn(o)&&["html","body"].indexOf(Jn(o))<0;){var s=et(o);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||n&&s.willChange==="filter"||n&&s.filter&&s.filter!=="none")return o;o=o.parentNode}return null}function Dr(e){for(var n=Wn(e),t=ts(e);t&&Zf(t)&&et(t).position==="static";)t=ts(t);return t&&(Jn(t)==="html"||Jn(t)==="body"&&et(t).position==="static")?n:t||em(e)||n}function Di(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function fr(e,n,t){return Rt(e,io(n,t))}function nm(e,n,t){var r=fr(e,n,t);return r>t?t:r}function fc(){return{top:0,right:0,bottom:0,left:0}}function mc(e){return Object.assign({},fc(),e)}function hc(e,n){return n.reduce(function(t,r){return t[r]=e,t},{})}var tm=function(n,t){return n=typeof n=="function"?n(Object.assign({},t.rects,{placement:t.placement})):n,mc(typeof n!="number"?n:hc(n,$r))};function rm(e){var n,t=e.state,r=e.name,o=e.options,s=t.elements.arrow,a=t.modifiersData.popperOffsets,l=Gn(t.placement),c=Di(l),u=[Cn,En].indexOf(l)>=0,d=u?"height":"width";if(!(!s||!a)){var f=tm(o.padding,t),m=$i(s),p=c==="y"?wn:Cn,v=c==="y"?Bn:En,g=t.rects.reference[d]+t.rects.reference[c]-a[c]-t.rects.popper[d],h=a[c]-t.rects.reference[c],x=Dr(s),y=x?c==="y"?x.clientHeight||0:x.clientWidth||0:0,S=g/2-h/2,R=f[p],T=y-m[d]-f[v],A=y/2-m[d]/2+S,I=fr(R,A,T),D=c;t.modifiersData[r]=(n={},n[D]=I,n.centerOffset=I-A,n)}}function om(e){var n=e.state,t=e.options,r=t.element,o=r===void 0?"[data-popper-arrow]":r;o!=null&&(typeof o=="string"&&(o=n.elements.popper.querySelector(o),!o)||!pc(n.elements.popper,o)||(n.elements.arrow=o))}var im={name:"arrow",enabled:!0,phase:"main",fn:rm,effect:om,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Gt(e){return e.split("-")[1]}var am={top:"auto",right:"auto",bottom:"auto",left:"auto"};function sm(e){var n=e.x,t=e.y,r=window,o=r.devicePixelRatio||1;return{x:Ut(n*o)/o||0,y:Ut(t*o)/o||0}}function rs(e){var n,t=e.popper,r=e.popperRect,o=e.placement,s=e.variation,a=e.offsets,l=e.position,c=e.gpuAcceleration,u=e.adaptive,d=e.roundOffsets,f=e.isFixed,m=a.x,p=m===void 0?0:m,v=a.y,g=v===void 0?0:v,h=typeof d=="function"?d({x:p,y:g}):{x:p,y:g};p=h.x,g=h.y;var x=a.hasOwnProperty("x"),y=a.hasOwnProperty("y"),S=Cn,R=wn,T=window;if(u){var A=Dr(t),I="clientHeight",D="clientWidth";if(A===Wn(t)&&(A=xt(t),et(A).position!=="static"&&l==="absolute"&&(I="scrollHeight",D="scrollWidth")),A=A,o===wn||(o===Cn||o===En)&&s===xr){R=Bn;var $=f&&A===T&&T.visualViewport?T.visualViewport.height:A[I];g-=$-r.height,g*=c?1:-1}if(o===Cn||(o===wn||o===Bn)&&s===xr){S=En;var C=f&&A===T&&T.visualViewport?T.visualViewport.width:A[D];p-=C-r.width,p*=c?1:-1}}var P=Object.assign({position:l},u&&am),L=d===!0?sm({x:p,y:g}):{x:p,y:g};if(p=L.x,g=L.y,c){var E;return Object.assign({},P,(E={},E[R]=y?"0":"",E[S]=x?"0":"",E.transform=(T.devicePixelRatio||1)<=1?"translate("+p+"px, "+g+"px)":"translate3d("+p+"px, "+g+"px, 0)",E))}return Object.assign({},P,(n={},n[R]=y?g+"px":"",n[S]=x?p+"px":"",n.transform="",n))}function lm(e){var n=e.state,t=e.options,r=t.gpuAcceleration,o=r===void 0?!0:r,s=t.adaptive,a=s===void 0?!0:s,l=t.roundOffsets,c=l===void 0?!0:l,u={placement:Gn(n.placement),variation:Gt(n.placement),popper:n.elements.popper,popperRect:n.rects.popper,gpuAcceleration:o,isFixed:n.options.strategy==="fixed"};n.modifiersData.popperOffsets!=null&&(n.styles.popper=Object.assign({},n.styles.popper,rs(Object.assign({},u,{offsets:n.modifiersData.popperOffsets,position:n.options.strategy,adaptive:a,roundOffsets:c})))),n.modifiersData.arrow!=null&&(n.styles.arrow=Object.assign({},n.styles.arrow,rs(Object.assign({},u,{offsets:n.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),n.attributes.popper=Object.assign({},n.attributes.popper,{"data-popper-placement":n.placement})}var cm={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:lm,data:{}},zr={passive:!0};function um(e){var n=e.state,t=e.instance,r=e.options,o=r.scroll,s=o===void 0?!0:o,a=r.resize,l=a===void 0?!0:a,c=Wn(n.elements.popper),u=[].concat(n.scrollParents.reference,n.scrollParents.popper);return s&&u.forEach(function(d){d.addEventListener("scroll",t.update,zr)}),l&&c.addEventListener("resize",t.update,zr),function(){s&&u.forEach(function(d){d.removeEventListener("scroll",t.update,zr)}),l&&c.removeEventListener("resize",t.update,zr)}}var dm={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:um,data:{}},pm={left:"right",right:"left",bottom:"top",top:"bottom"};function Xr(e){return e.replace(/left|right|bottom|top/g,function(n){return pm[n]})}var fm={start:"end",end:"start"};function os(e){return e.replace(/start|end/g,function(n){return fm[n]})}function Ii(e){var n=Wn(e),t=n.pageXOffset,r=n.pageYOffset;return{scrollLeft:t,scrollTop:r}}function Bi(e){return qt(xt(e)).left+Ii(e).scrollLeft}function mm(e){var n=Wn(e),t=xt(e),r=n.visualViewport,o=t.clientWidth,s=t.clientHeight,a=0,l=0;return r&&(o=r.width,s=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,l=r.offsetTop)),{width:o,height:s,x:a+Bi(e),y:l}}function hm(e){var n,t=xt(e),r=Ii(e),o=(n=e.ownerDocument)==null?void 0:n.body,s=Rt(t.scrollWidth,t.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=Rt(t.scrollHeight,t.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),l=-r.scrollLeft+Bi(e),c=-r.scrollTop;return et(o||t).direction==="rtl"&&(l+=Rt(t.clientWidth,o?o.clientWidth:0)-s),{width:s,height:a,x:l,y:c}}function Ei(e){var n=et(e),t=n.overflow,r=n.overflowX,o=n.overflowY;return/auto|scroll|overlay|hidden/.test(t+o+r)}function gc(e){return["html","body","#document"].indexOf(Jn(e))>=0?e.ownerDocument.body:Dn(e)&&Ei(e)?e:gc(yo(e))}function mr(e,n){var t;n===void 0&&(n=[]);var r=gc(e),o=r===((t=e.ownerDocument)==null?void 0:t.body),s=Wn(r),a=o?[s].concat(s.visualViewport||[],Ei(r)?r:[]):r,l=n.concat(a);return o?l:l.concat(mr(yo(a)))}function ri(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function gm(e){var n=qt(e);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function is(e,n){return n===uc?ri(mm(e)):jt(n)?gm(n):ri(hm(xt(e)))}function bm(e){var n=mr(yo(e)),t=["absolute","fixed"].indexOf(et(e).position)>=0,r=t&&Dn(e)?Dr(e):e;return jt(r)?n.filter(function(o){return jt(o)&&pc(o,r)&&Jn(o)!=="body"}):[]}function vm(e,n,t){var r=n==="clippingParents"?bm(e):[].concat(n),o=[].concat(r,[t]),s=o[0],a=o.reduce(function(l,c){var u=is(e,c);return l.top=Rt(u.top,l.top),l.right=io(u.right,l.right),l.bottom=io(u.bottom,l.bottom),l.left=Rt(u.left,l.left),l},is(e,s));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function bc(e){var n=e.reference,t=e.element,r=e.placement,o=r?Gn(r):null,s=r?Gt(r):null,a=n.x+n.width/2-t.width/2,l=n.y+n.height/2-t.height/2,c;switch(o){case wn:c={x:a,y:n.y-t.height};break;case Bn:c={x:a,y:n.y+n.height};break;case En:c={x:n.x+n.width,y:l};break;case Cn:c={x:n.x-t.width,y:l};break;default:c={x:n.x,y:n.y}}var u=o?Di(o):null;if(u!=null){var d=u==="y"?"height":"width";switch(s){case Vt:c[u]=c[u]-(n[d]/2-t[d]/2);break;case xr:c[u]=c[u]+(n[d]/2-t[d]/2);break}}return c}function yr(e,n){n===void 0&&(n={});var t=n,r=t.placement,o=r===void 0?e.placement:r,s=t.boundary,a=s===void 0?zf:s,l=t.rootBoundary,c=l===void 0?uc:l,u=t.elementContext,d=u===void 0?rr:u,f=t.altBoundary,m=f===void 0?!1:f,p=t.padding,v=p===void 0?0:p,g=mc(typeof v!="number"?v:hc(v,$r)),h=d===rr?Ff:rr,x=e.rects.popper,y=e.elements[m?h:d],S=vm(jt(y)?y:y.contextElement||xt(e.elements.popper),a,c),R=qt(e.elements.reference),T=bc({reference:R,element:x,strategy:"absolute",placement:o}),A=ri(Object.assign({},x,T)),I=d===rr?A:R,D={top:S.top-I.top+g.top,bottom:I.bottom-S.bottom+g.bottom,left:S.left-I.left+g.left,right:I.right-S.right+g.right},$=e.modifiersData.offset;if(d===rr&&$){var C=$[o];Object.keys(D).forEach(function(P){var L=[En,Bn].indexOf(P)>=0?1:-1,E=[wn,Bn].indexOf(P)>=0?"y":"x";D[P]+=C[E]*L})}return D}function xm(e,n){n===void 0&&(n={});var t=n,r=t.placement,o=t.boundary,s=t.rootBoundary,a=t.padding,l=t.flipVariations,c=t.allowedAutoPlacements,u=c===void 0?dc:c,d=Gt(r),f=d?l?ns:ns.filter(function(v){return Gt(v)===d}):$r,m=f.filter(function(v){return u.indexOf(v)>=0});m.length===0&&(m=f);var p=m.reduce(function(v,g){return v[g]=yr(e,{placement:g,boundary:o,rootBoundary:s,padding:a})[Gn(g)],v},{});return Object.keys(p).sort(function(v,g){return p[v]-p[g]})}function ym(e){if(Gn(e)===Ti)return[];var n=Xr(e);return[os(e),n,os(n)]}function wm(e){var n=e.state,t=e.options,r=e.name;if(!n.modifiersData[r]._skip){for(var o=t.mainAxis,s=o===void 0?!0:o,a=t.altAxis,l=a===void 0?!0:a,c=t.fallbackPlacements,u=t.padding,d=t.boundary,f=t.rootBoundary,m=t.altBoundary,p=t.flipVariations,v=p===void 0?!0:p,g=t.allowedAutoPlacements,h=n.options.placement,x=Gn(h),y=x===h,S=c||(y||!v?[Xr(h)]:ym(h)),R=[h].concat(S).reduce(function(ue,ce){return ue.concat(Gn(ce)===Ti?xm(n,{placement:ce,boundary:d,rootBoundary:f,padding:u,flipVariations:v,allowedAutoPlacements:g}):ce)},[]),T=n.rects.reference,A=n.rects.popper,I=new Map,D=!0,$=R[0],C=0;C<R.length;C++){var P=R[C],L=Gn(P),E=Gt(P)===Vt,N=[wn,Bn].indexOf(L)>=0,z=N?"width":"height",q=yr(n,{placement:P,boundary:d,rootBoundary:f,altBoundary:m,padding:u}),j=N?E?En:Cn:E?Bn:wn;T[z]>A[z]&&(j=Xr(j));var K=Xr(j),W=[];if(s&&W.push(q[L]<=0),l&&W.push(q[j]<=0,q[K]<=0),W.every(function(ue){return ue})){$=P,D=!1;break}I.set(P,W)}if(D)for(var H=v?3:1,te=function(ce){var Y=R.find(function(me){var be=I.get(me);if(be)return be.slice(0,ce).every(function(oe){return oe})});if(Y)return $=Y,"break"},Z=H;Z>0;Z--){var re=te(Z);if(re==="break")break}n.placement!==$&&(n.modifiersData[r]._skip=!0,n.placement=$,n.reset=!0)}}var Cm={name:"flip",enabled:!0,phase:"main",fn:wm,requiresIfExists:["offset"],data:{_skip:!1}};function as(e,n,t){return t===void 0&&(t={x:0,y:0}),{top:e.top-n.height-t.y,right:e.right-n.width+t.x,bottom:e.bottom-n.height+t.y,left:e.left-n.width-t.x}}function ss(e){return[wn,En,Bn,Cn].some(function(n){return e[n]>=0})}function Sm(e){var n=e.state,t=e.name,r=n.rects.reference,o=n.rects.popper,s=n.modifiersData.preventOverflow,a=yr(n,{elementContext:"reference"}),l=yr(n,{altBoundary:!0}),c=as(a,r),u=as(l,o,s),d=ss(c),f=ss(u);n.modifiersData[t]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:d,hasPopperEscaped:f},n.attributes.popper=Object.assign({},n.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":f})}var km={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Sm};function Pm(e,n,t){var r=Gn(e),o=[Cn,wn].indexOf(r)>=0?-1:1,s=typeof t=="function"?t(Object.assign({},n,{placement:e})):t,a=s[0],l=s[1];return a=a||0,l=(l||0)*o,[Cn,En].indexOf(r)>=0?{x:l,y:a}:{x:a,y:l}}function Rm(e){var n=e.state,t=e.options,r=e.name,o=t.offset,s=o===void 0?[0,0]:o,a=dc.reduce(function(d,f){return d[f]=Pm(f,n.rects,s),d},{}),l=a[n.placement],c=l.x,u=l.y;n.modifiersData.popperOffsets!=null&&(n.modifiersData.popperOffsets.x+=c,n.modifiersData.popperOffsets.y+=u),n.modifiersData[r]=a}var Tm={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Rm};function Am(e){var n=e.state,t=e.name;n.modifiersData[t]=bc({reference:n.rects.reference,element:n.rects.popper,strategy:"absolute",placement:n.placement})}var $m={name:"popperOffsets",enabled:!0,phase:"read",fn:Am,data:{}};function Dm(e){return e==="x"?"y":"x"}function Im(e){var n=e.state,t=e.options,r=e.name,o=t.mainAxis,s=o===void 0?!0:o,a=t.altAxis,l=a===void 0?!1:a,c=t.boundary,u=t.rootBoundary,d=t.altBoundary,f=t.padding,m=t.tether,p=m===void 0?!0:m,v=t.tetherOffset,g=v===void 0?0:v,h=yr(n,{boundary:c,rootBoundary:u,padding:f,altBoundary:d}),x=Gn(n.placement),y=Gt(n.placement),S=!y,R=Di(x),T=Dm(R),A=n.modifiersData.popperOffsets,I=n.rects.reference,D=n.rects.popper,$=typeof g=="function"?g(Object.assign({},n.rects,{placement:n.placement})):g,C=typeof $=="number"?{mainAxis:$,altAxis:$}:Object.assign({mainAxis:0,altAxis:0},$),P=n.modifiersData.offset?n.modifiersData.offset[n.placement]:null,L={x:0,y:0};if(!!A){if(s){var E,N=R==="y"?wn:Cn,z=R==="y"?Bn:En,q=R==="y"?"height":"width",j=A[R],K=j+h[N],W=j-h[z],H=p?-D[q]/2:0,te=y===Vt?I[q]:D[q],Z=y===Vt?-D[q]:-I[q],re=n.elements.arrow,ue=p&&re?$i(re):{width:0,height:0},ce=n.modifiersData["arrow#persistent"]?n.modifiersData["arrow#persistent"].padding:fc(),Y=ce[N],me=ce[z],be=fr(0,I[q],ue[q]),oe=S?I[q]/2-H-be-Y-C.mainAxis:te-be-Y-C.mainAxis,ae=S?-I[q]/2+H+be+me+C.mainAxis:Z+be+me+C.mainAxis,De=n.elements.arrow&&Dr(n.elements.arrow),_e=De?R==="y"?De.clientTop||0:De.clientLeft||0:0,se=(E=P==null?void 0:P[R])!=null?E:0,tn=j+oe-se-_e,Re=j+ae-se,an=fr(p?io(K,tn):K,j,p?Rt(W,Re):W);A[R]=an,L[R]=an-j}if(l){var rn,Me=R==="x"?wn:Cn,Le=R==="x"?Bn:En,Te=A[T],Ne=T==="y"?"height":"width",on=Te+h[Me],Qe=Te-h[Le],F=[wn,Cn].indexOf(x)!==-1,ee=(rn=P==null?void 0:P[T])!=null?rn:0,ne=F?on:Te-I[Ne]-D[Ne]-ee+C.altAxis,le=F?Te+I[Ne]+D[Ne]-ee-C.altAxis:Qe,ze=p&&F?nm(ne,Te,le):fr(p?ne:on,Te,p?le:Qe);A[T]=ze,L[T]=ze-Te}n.modifiersData[r]=L}}var Bm={name:"preventOverflow",enabled:!0,phase:"main",fn:Im,requiresIfExists:["offset"]};function Em(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Mm(e){return e===Wn(e)||!Dn(e)?Ii(e):Em(e)}function Lm(e){var n=e.getBoundingClientRect(),t=Ut(n.width)/e.offsetWidth||1,r=Ut(n.height)/e.offsetHeight||1;return t!==1||r!==1}function Om(e,n,t){t===void 0&&(t=!1);var r=Dn(n),o=Dn(n)&&Lm(n),s=xt(n),a=qt(e,o),l={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!t)&&((Jn(n)!=="body"||Ei(s))&&(l=Mm(n)),Dn(n)?(c=qt(n,!0),c.x+=n.clientLeft,c.y+=n.clientTop):s&&(c.x=Bi(s))),{x:a.left+l.scrollLeft-c.x,y:a.top+l.scrollTop-c.y,width:a.width,height:a.height}}function Nm(e){var n=new Map,t=new Set,r=[];e.forEach(function(s){n.set(s.name,s)});function o(s){t.add(s.name);var a=[].concat(s.requires||[],s.requiresIfExists||[]);a.forEach(function(l){if(!t.has(l)){var c=n.get(l);c&&o(c)}}),r.push(s)}return e.forEach(function(s){t.has(s.name)||o(s)}),r}function zm(e){var n=Nm(e);return Kf.reduce(function(t,r){return t.concat(n.filter(function(o){return o.phase===r}))},[])}function Fm(e){var n;return function(){return n||(n=new Promise(function(t){Promise.resolve().then(function(){n=void 0,t(e())})})),n}}function _m(e){var n=e.reduce(function(t,r){var o=t[r.name];return t[r.name]=o?Object.assign({},o,r,{options:Object.assign({},o.options,r.options),data:Object.assign({},o.data,r.data)}):r,t},{});return Object.keys(n).map(function(t){return n[t]})}var ls={placement:"bottom",modifiers:[],strategy:"absolute"};function cs(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return!n.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function Hm(e){e===void 0&&(e={});var n=e,t=n.defaultModifiers,r=t===void 0?[]:t,o=n.defaultOptions,s=o===void 0?ls:o;return function(l,c,u){u===void 0&&(u=s);var d={placement:"bottom",orderedModifiers:[],options:Object.assign({},ls,s),modifiersData:{},elements:{reference:l,popper:c},attributes:{},styles:{}},f=[],m=!1,p={state:d,setOptions:function(x){var y=typeof x=="function"?x(d.options):x;g(),d.options=Object.assign({},s,d.options,y),d.scrollParents={reference:jt(l)?mr(l):l.contextElement?mr(l.contextElement):[],popper:mr(c)};var S=zm(_m([].concat(r,d.options.modifiers)));return d.orderedModifiers=S.filter(function(R){return R.enabled}),v(),p.update()},forceUpdate:function(){if(!m){var x=d.elements,y=x.reference,S=x.popper;if(!!cs(y,S)){d.rects={reference:Om(y,Dr(S),d.options.strategy==="fixed"),popper:$i(S)},d.reset=!1,d.placement=d.options.placement,d.orderedModifiers.forEach(function(C){return d.modifiersData[C.name]=Object.assign({},C.data)});for(var R=0;R<d.orderedModifiers.length;R++){if(d.reset===!0){d.reset=!1,R=-1;continue}var T=d.orderedModifiers[R],A=T.fn,I=T.options,D=I===void 0?{}:I,$=T.name;typeof A=="function"&&(d=A({state:d,options:D,name:$,instance:p})||d)}}}},update:Fm(function(){return new Promise(function(h){p.forceUpdate(),h(d)})}),destroy:function(){g(),m=!0}};if(!cs(l,c))return p;p.setOptions(u).then(function(h){!m&&u.onFirstUpdate&&u.onFirstUpdate(h)});function v(){d.orderedModifiers.forEach(function(h){var x=h.name,y=h.options,S=y===void 0?{}:y,R=h.effect;if(typeof R=="function"){var T=R({state:d,name:x,instance:p,options:S}),A=function(){};f.push(T||A)}})}function g(){f.forEach(function(h){return h()}),f=[]}return p}}var Wm=[dm,$m,cm,Xf,Tm,Cm,Bm,im,km],Vm=Hm({defaultModifiers:Wm});const jm=["anchorEl","children","direction","disablePortal","modifiers","open","ownerState","placement","popperOptions","popperRef","TransitionProps"],Um=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function qm(e,n){if(n==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function oi(e){return typeof e=="function"?e():e}const Gm={},Ym=k.exports.forwardRef(function(n,t){const{anchorEl:r,children:o,direction:s,disablePortal:a,modifiers:l,open:c,placement:u,popperOptions:d,popperRef:f,TransitionProps:m}=n,p=fe(n,jm),v=k.exports.useRef(null),g=In(v,t),h=k.exports.useRef(null),x=In(h,f),y=k.exports.useRef(x);Ht(()=>{y.current=x},[x]),k.exports.useImperativeHandle(f,()=>h.current,[]);const S=qm(u,s),[R,T]=k.exports.useState(S);k.exports.useEffect(()=>{h.current&&h.current.forceUpdate()}),Ht(()=>{if(!r||!c)return;const I=C=>{T(C.placement)};oi(r);let D=[{name:"preventOverflow",options:{altBoundary:a}},{name:"flip",options:{altBoundary:a}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:C})=>{I(C)}}];l!=null&&(D=D.concat(l)),d&&d.modifiers!=null&&(D=D.concat(d.modifiers));const $=Vm(oi(r),v.current,b({placement:S},d,{modifiers:D}));return y.current($),()=>{$.destroy(),y.current(null)}},[r,a,l,c,d,S]);const A={placement:R};return m!==null&&(A.TransitionProps=m),i("div",b({ref:g,role:"tooltip"},p,{children:typeof o=="function"?o(A):o}))}),Km=k.exports.forwardRef(function(n,t){const{anchorEl:r,children:o,container:s,direction:a="ltr",disablePortal:l=!1,keepMounted:c=!1,modifiers:u,open:d,placement:f="bottom",popperOptions:m=Gm,popperRef:p,style:v,transition:g=!1}=n,h=fe(n,Um),[x,y]=k.exports.useState(!0),S=()=>{y(!1)},R=()=>{y(!0)};if(!c&&!d&&(!g||x))return null;const T=s||(r?Rn(oi(r)).body:void 0);return i(bd,{disablePortal:l,container:T,children:i(Ym,b({anchorEl:r,direction:a,disablePortal:l,modifiers:u,ref:t,open:g?!x:d,placement:f,popperOptions:m,popperRef:p},h,{style:b({position:"fixed",top:0,left:0,display:!d&&c&&(!g||x)?"none":null},v),TransitionProps:g?{in:d,onEnter:S,onExited:R}:null,children:o}))})});var Qm=Km;function Jm(e){const{children:n,defer:t=!1,fallback:r=null}=e,[o,s]=k.exports.useState(!1);return Ht(()=>{t||s(!0)},[t]),k.exports.useEffect(()=>{t&&s(!0)},[t]),i(k.exports.Fragment,{children:o?n:r})}function lr(e){return Se("MuiSlider",e)}const Xm=ye("MuiSlider",["root","active","focusVisible","disabled","dragging","marked","vertical","trackInverted","trackFalse","rail","track","mark","markActive","markLabel","markLabelActive","thumb","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel"]);var Zr=Xm;const Zm=e=>{const{open:n}=e;return{offset:Q(n&&Zr.valueLabelOpen),circle:Zr.valueLabelCircle,label:Zr.valueLabelLabel}};function vc(e){const{children:n,className:t,value:r,theme:o}=e,s=Zm(e);return k.exports.cloneElement(n,{className:Q(n.props.className)},w(k.exports.Fragment,{children:[n.props.children,i("span",{className:Q(s.offset,t),theme:o,"aria-hidden":!0,children:i("span",{className:s.circle,children:i("span",{className:s.label,children:r})})})]}))}const eh=2;function xc(e,n){return e-n}function or(e,n,t){return e==null?n:Math.min(Math.max(n,e),t)}function us(e,n){var t;const{index:r}=(t=e.reduce((o,s,a)=>{const l=Math.abs(n-s);return o===null||l<o.distance||l===o.distance?{distance:l,index:a}:o},null))!=null?t:{};return r}function Fr(e,n){if(n.current!==void 0&&e.changedTouches){const t=e;for(let r=0;r<t.changedTouches.length;r+=1){const o=t.changedTouches[r];if(o.identifier===n.current)return{x:o.clientX,y:o.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function ao(e,n,t){return(e-n)*100/(t-n)}function nh(e,n,t){return(t-n)*e+n}function th(e){if(Math.abs(e)<1){const t=e.toExponential().split("e-"),r=t[0].split(".")[1];return(r?r.length:0)+parseInt(t[1],10)}const n=e.toString().split(".")[1];return n?n.length:0}function rh(e,n,t){const r=Math.round((e-t)/n)*n+t;return Number(r.toFixed(th(n)))}function ds({values:e,newValue:n,index:t}){const r=e.slice();return r[t]=n,r.sort(xc)}function _r({sliderRef:e,activeIndex:n,setActive:t}){var r,o;const s=Rn(e.current);if(!((r=e.current)!=null&&r.contains(s.activeElement))||Number(s==null||(o=s.activeElement)==null?void 0:o.getAttribute("data-index"))!==n){var a;(a=e.current)==null||a.querySelector(`[type="range"][data-index="${n}"]`).focus()}t&&t(n)}const oh={horizontal:{offset:e=>({left:`${e}%`}),leap:e=>({width:`${e}%`})},"horizontal-reverse":{offset:e=>({right:`${e}%`}),leap:e=>({width:`${e}%`})},vertical:{offset:e=>({bottom:`${e}%`}),leap:e=>({height:`${e}%`})}},ih=e=>e;let Hr;function Oo(){return Hr===void 0&&(typeof CSS!="undefined"&&typeof CSS.supports=="function"?Hr=CSS.supports("touch-action","none"):Hr=!0),Hr}function ah(e){const{ref:n,"aria-labelledby":t,defaultValue:r,disableSwap:o=!1,disabled:s=!1,marks:a=!1,max:l=100,min:c=0,name:u,onChange:d,onChangeCommitted:f,orientation:m="horizontal",scale:p=ih,step:v=1,tabIndex:g,value:h,isRtl:x=!1}=e,y=k.exports.useRef(),[S,R]=k.exports.useState(-1),[T,A]=k.exports.useState(-1),[I,D]=k.exports.useState(!1),$=k.exports.useRef(0),[C,P]=pt({controlled:h,default:r!=null?r:c,name:"Slider"}),L=d&&((F,ee,ne)=>{const le=F.nativeEvent||F,ze=new le.constructor(le.type,le);Object.defineProperty(ze,"target",{writable:!0,value:{value:ee,name:u}}),d(ze,ee,ne)}),E=Array.isArray(C);let N=E?C.slice().sort(xc):[C];N=N.map(F=>or(F,c,l));const z=a===!0&&v!==null?[...Array(Math.floor((l-c)/v)+1)].map((F,ee)=>({value:c+v*ee})):a||[],q=z.map(F=>F.value),{isFocusVisibleRef:j,onBlur:K,onFocus:W,ref:H}=vi(),[te,Z]=k.exports.useState(-1),re=k.exports.useRef(),ue=In(H,re),ce=In(n,ue),Y=F=>ee=>{var ne;const le=Number(ee.currentTarget.getAttribute("data-index"));W(ee),j.current===!0&&Z(le),A(le),F==null||(ne=F.onFocus)==null||ne.call(F,ee)},me=F=>ee=>{var ne;K(ee),j.current===!1&&Z(-1),A(-1),F==null||(ne=F.onBlur)==null||ne.call(F,ee)};Ht(()=>{if(s&&re.current.contains(document.activeElement)){var F;(F=document.activeElement)==null||F.blur()}},[s]),s&&S!==-1&&R(-1),s&&te!==-1&&Z(-1);const be=F=>ee=>{var ne;(ne=F.onChange)==null||ne.call(F,ee);const le=Number(ee.currentTarget.getAttribute("data-index")),ze=N[le],Ue=q.indexOf(ze);let Pe=ee.target.valueAsNumber;if(z&&v==null&&(Pe=Pe<ze?q[Ue-1]:q[Ue+1]),Pe=or(Pe,c,l),z&&v==null){const $e=q.indexOf(N[le]);Pe=Pe<N[le]?q[$e-1]:q[$e+1]}if(E){o&&(Pe=or(Pe,N[le-1]||-1/0,N[le+1]||1/0));const $e=Pe;Pe=ds({values:N,newValue:Pe,index:le});let xe=le;o||(xe=Pe.indexOf($e)),_r({sliderRef:re,activeIndex:xe})}P(Pe),Z(le),L&&L(ee,Pe,le),f&&f(ee,Pe)},oe=k.exports.useRef();let ae=m;x&&m==="horizontal"&&(ae+="-reverse");const De=({finger:F,move:ee=!1,values:ne})=>{const{current:le}=re,{width:ze,height:Ue,bottom:Pe,left:$e}=le.getBoundingClientRect();let xe;ae.indexOf("vertical")===0?xe=(Pe-F.y)/Ue:xe=(F.x-$e)/ze,ae.indexOf("-reverse")!==-1&&(xe=1-xe);let He;if(He=nh(xe,c,l),v)He=rh(He,v,c);else{const Fe=us(q,He);He=q[Fe]}He=or(He,c,l);let sn=0;if(E){ee?sn=oe.current:sn=us(ne,He),o&&(He=or(He,ne[sn-1]||-1/0,ne[sn+1]||1/0));const Fe=He;He=ds({values:ne,newValue:He,index:sn}),o&&ee||(sn=He.indexOf(Fe),oe.current=sn)}return{newValue:He,activeIndex:sn}},_e=xn(F=>{const ee=Fr(F,y);if(!ee)return;if($.current+=1,F.type==="mousemove"&&F.buttons===0){se(F);return}const{newValue:ne,activeIndex:le}=De({finger:ee,move:!0,values:N});_r({sliderRef:re,activeIndex:le,setActive:R}),P(ne),!I&&$.current>eh&&D(!0),L&&L(F,ne,le)}),se=xn(F=>{const ee=Fr(F,y);if(D(!1),!ee)return;const{newValue:ne}=De({finger:ee,values:N});R(-1),F.type==="touchend"&&A(-1),f&&f(F,ne),y.current=void 0,Re()}),tn=xn(F=>{if(s)return;Oo()||F.preventDefault();const ee=F.changedTouches[0];ee!=null&&(y.current=ee.identifier);const ne=Fr(F,y);if(ne!==!1){const{newValue:ze,activeIndex:Ue}=De({finger:ne,values:N});_r({sliderRef:re,activeIndex:Ue,setActive:R}),P(ze),L&&L(F,ze,Ue)}$.current=0;const le=Rn(re.current);le.addEventListener("touchmove",_e),le.addEventListener("touchend",se)}),Re=k.exports.useCallback(()=>{const F=Rn(re.current);F.removeEventListener("mousemove",_e),F.removeEventListener("mouseup",se),F.removeEventListener("touchmove",_e),F.removeEventListener("touchend",se)},[se,_e]);k.exports.useEffect(()=>{const{current:F}=re;return F.addEventListener("touchstart",tn,{passive:Oo()}),()=>{F.removeEventListener("touchstart",tn,{passive:Oo()}),Re()}},[Re,tn]),k.exports.useEffect(()=>{s&&Re()},[s,Re]);const an=F=>ee=>{var ne;if((ne=F.onMouseDown)==null||ne.call(F,ee),s||ee.defaultPrevented||ee.button!==0)return;ee.preventDefault();const le=Fr(ee,y);if(le!==!1){const{newValue:Ue,activeIndex:Pe}=De({finger:le,values:N});_r({sliderRef:re,activeIndex:Pe,setActive:R}),P(Ue),L&&L(ee,Ue,Pe)}$.current=0;const ze=Rn(re.current);ze.addEventListener("mousemove",_e),ze.addEventListener("mouseup",se)},rn=ao(E?N[0]:c,c,l),Me=ao(N[N.length-1],c,l)-rn,Le=F=>{const ee={onMouseDown:an(F||{})},ne=b({},F,ee);return b({ref:ce},ne)},Te=F=>ee=>{var ne;(ne=F.onMouseOver)==null||ne.call(F,ee);const le=Number(ee.currentTarget.getAttribute("data-index"));A(le)},Ne=F=>ee=>{var ne;(ne=F.onMouseLeave)==null||ne.call(F,ee),A(-1)};return{axis:ae,axisProps:oh,getRootProps:Le,getHiddenInputProps:F=>{const ee={onChange:be(F||{}),onFocus:Y(F||{}),onBlur:me(F||{})},ne=b({},F,ee);return b({tabIndex:g,"aria-labelledby":t,"aria-orientation":m,"aria-valuemax":p(l),"aria-valuemin":p(c),name:u,type:"range",min:e.min,max:e.max,step:e.step,disabled:s},ne,{style:b({},Ef,{direction:x?"rtl":"ltr",width:"100%",height:"100%"})})},getThumbProps:F=>{const ee={onMouseOver:Te(F||{}),onMouseLeave:Ne(F||{})},ne=b({},F,ee);return b({},ne)},dragging:I,marks:z,values:N,active:S,focusVisible:te,open:T,range:E,trackOffset:rn,trackLeap:Me}}const sh=["aria-label","aria-valuetext","className","component","classes","disableSwap","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","onMouseDown","orientation","scale","step","tabIndex","track","value","valueLabelDisplay","valueLabelFormat","isRtl","components","componentsProps"],ps=e=>e,lh=e=>{const{disabled:n,dragging:t,marked:r,orientation:o,track:s,classes:a}=e;return we({root:["root",n&&"disabled",t&&"dragging",r&&"marked",o==="vertical"&&"vertical",s==="inverted"&&"trackInverted",s===!1&&"trackFalse"],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",n&&"disabled"],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]},lr,a)},ch=({children:e})=>e,uh=k.exports.forwardRef(function(n,t){var r,o,s,a,l,c,u;const{"aria-label":d,"aria-valuetext":f,className:m,component:p,classes:v,disableSwap:g=!1,disabled:h=!1,getAriaLabel:x,getAriaValueText:y,marks:S=!1,max:R=100,min:T=0,onMouseDown:A,orientation:I="horizontal",scale:D=ps,step:$=1,track:C="normal",valueLabelDisplay:P="off",valueLabelFormat:L=ps,isRtl:E=!1,components:N={},componentsProps:z={}}=n,q=fe(n,sh),j=b({},n,{mark:S,classes:v,disabled:h,isRtl:E,max:R,min:T,orientation:I,scale:D,step:$,track:C,valueLabelDisplay:P,valueLabelFormat:L}),{axisProps:K,getRootProps:W,getHiddenInputProps:H,getThumbProps:te,open:Z,active:re,axis:ue,range:ce,focusVisible:Y,dragging:me,marks:be,values:oe,trackOffset:ae,trackLeap:De}=ah(b({},j,{ref:t}));j.marked=be.length>0&&be.some($e=>$e.label),j.dragging=me;const _e=(r=p!=null?p:N.Root)!=null?r:"span",se=at(_e,b({},q,z.root),j),tn=(o=N.Rail)!=null?o:"span",Re=at(tn,z.rail,j),an=(s=N.Track)!=null?s:"span",rn=at(an,z.track,j),Me=b({},K[ue].offset(ae),K[ue].leap(De)),Le=(a=N.Thumb)!=null?a:"span",Te=at(Le,z.thumb,j),Ne=(l=N.ValueLabel)!=null?l:vc,on=at(Ne,z.valueLabel,j),Qe=(c=N.Mark)!=null?c:"span",F=at(Qe,z.mark,j),ee=(u=N.MarkLabel)!=null?u:"span",ne=at(ee,z.markLabel,j),le=N.Input||"input",ze=at(le,z.input,j),Ue=H(),Pe=lh(j);return w(_e,b({},se,W({onMouseDown:A}),{className:Q(Pe.root,se.className,m),children:[i(tn,b({},Re,{className:Q(Pe.rail,Re.className)})),i(an,b({},rn,{className:Q(Pe.track,rn.className),style:b({},Me,rn.style)})),be.map(($e,xe)=>{const He=ao($e.value,T,R),sn=K[ue].offset(He);let Fe;return C===!1?Fe=oe.indexOf($e.value)!==-1:Fe=C==="normal"&&(ce?$e.value>=oe[0]&&$e.value<=oe[oe.length-1]:$e.value<=oe[0])||C==="inverted"&&(ce?$e.value<=oe[0]||$e.value>=oe[oe.length-1]:$e.value>=oe[0]),w(k.exports.Fragment,{children:[i(Qe,b({"data-index":xe},F,!Ct(Qe)&&{markActive:Fe},{style:b({},sn,F.style),className:Q(Pe.mark,F.className,Fe&&Pe.markActive)})),$e.label!=null?i(ee,b({"aria-hidden":!0,"data-index":xe},ne,!Ct(ee)&&{markLabelActive:Fe},{style:b({},sn,ne.style),className:Q(Pe.markLabel,ne.className,Fe&&Pe.markLabelActive),children:$e.label})):null]},$e.value)}),oe.map(($e,xe)=>{const He=ao($e,T,R),sn=K[ue].offset(He),Fe=P==="off"?ch:Ne;return i(k.exports.Fragment,{children:i(Fe,b({},!Ct(Fe)&&{valueLabelFormat:L,valueLabelDisplay:P,value:typeof L=="function"?L(D($e),xe):L,index:xe,open:Z===xe||re===xe||P==="on",disabled:h},on,{className:Q(Pe.valueLabel,on.className),children:i(Le,b({"data-index":xe},Te,te(),{className:Q(Pe.thumb,Te.className,re===xe&&Pe.active,Y===xe&&Pe.focusVisible)},!Ct(Le)&&{ownerState:b({},j,Te.ownerState)},{style:b({},sn,{pointerEvents:g&&re!==xe?"none":void 0},Te.style),children:i(le,b({},Ue,{"data-index":xe,"aria-label":x?x(xe):d,"aria-valuenow":D($e),"aria-valuetext":y?y(D($e),xe):f,value:oe[xe]},!Ct(le)&&{ownerState:b({},j,ze.ownerState)},ze,{style:b({},Ue.style,ze.style)}))}))}))},xe)})]}))});var dh=uh;const ph={configure:e=>{console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)),vd.configure(e)}};var fh=Object.freeze(Object.defineProperty({__proto__:null,unstable_ClassNameGenerator:ph,capitalize:B,createChainedFunction:Ml,createSvgIcon:Mn,debounce:xi,deprecatedPropType:Af,isMuiElement:xd,ownerDocument:Rn,ownerWindow:St,requirePropFactory:$f,setRef:El,unstable_useEnhancedEffect:Ht,unstable_useId:Ar,unsupportedProp:If,useControlled:pt,useEventCallback:xn,useForkRef:In,useIsFocusVisible:vi},Symbol.toStringTag,{value:"Module"}));function mh(e){return Se("MuiCollapse",e)}ye("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const hh=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],gh=e=>{const{orientation:n,classes:t}=e,r={root:["root",`${n}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${n}`],wrapperInner:["wrapperInner",`${n}`]};return we(r,mh,t)},bh=_("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[t.orientation],t.state==="entered"&&n.entered,t.state==="exited"&&!t.in&&t.collapsedSize==="0px"&&n.hidden]}})(({theme:e,ownerState:n})=>b({height:0,overflow:"hidden",transition:e.transitions.create("height")},n.orientation==="horizontal"&&{height:"auto",width:0,transition:e.transitions.create("width")},n.state==="entered"&&b({height:"auto",overflow:"visible"},n.orientation==="horizontal"&&{width:"auto"}),n.state==="exited"&&!n.in&&n.collapsedSize==="0px"&&{visibility:"hidden"})),vh=_("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,n)=>n.wrapper})(({ownerState:e})=>b({display:"flex",width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),xh=_("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,n)=>n.wrapperInner})(({ownerState:e})=>b({width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),yc=k.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiCollapse"}),{addEndListener:o,children:s,className:a,collapsedSize:l="0px",component:c,easing:u,in:d,onEnter:f,onEntered:m,onEntering:p,onExit:v,onExited:g,onExiting:h,orientation:x="vertical",style:y,timeout:S=yd.standard,TransitionComponent:R=Ll}=r,T=fe(r,hh),A=b({},r,{orientation:x,collapsedSize:l}),I=gh(A),D=Dt(),$=k.exports.useRef(),C=k.exports.useRef(null),P=k.exports.useRef(),L=typeof l=="number"?`${l}px`:l,E=x==="horizontal",N=E?"width":"height";k.exports.useEffect(()=>()=>{clearTimeout($.current)},[]);const z=k.exports.useRef(null),q=In(t,z),j=Y=>me=>{if(Y){const be=z.current;me===void 0?Y(be):Y(be,me)}},K=()=>C.current?C.current[E?"clientWidth":"clientHeight"]:0,W=j((Y,me)=>{C.current&&E&&(C.current.style.position="absolute"),Y.style[N]=L,f&&f(Y,me)}),H=j((Y,me)=>{const be=K();C.current&&E&&(C.current.style.position="");const{duration:oe,easing:ae}=hr({style:y,timeout:S,easing:u},{mode:"enter"});if(S==="auto"){const De=D.transitions.getAutoHeightDuration(be);Y.style.transitionDuration=`${De}ms`,P.current=De}else Y.style.transitionDuration=typeof oe=="string"?oe:`${oe}ms`;Y.style[N]=`${be}px`,Y.style.transitionTimingFunction=ae,p&&p(Y,me)}),te=j((Y,me)=>{Y.style[N]="auto",m&&m(Y,me)}),Z=j(Y=>{Y.style[N]=`${K()}px`,v&&v(Y)}),re=j(g),ue=j(Y=>{const me=K(),{duration:be,easing:oe}=hr({style:y,timeout:S,easing:u},{mode:"exit"});if(S==="auto"){const ae=D.transitions.getAutoHeightDuration(me);Y.style.transitionDuration=`${ae}ms`,P.current=ae}else Y.style.transitionDuration=typeof be=="string"?be:`${be}ms`;Y.style[N]=L,Y.style.transitionTimingFunction=oe,h&&h(Y)});return i(R,b({in:d,onEnter:W,onEntered:te,onEntering:H,onExit:Z,onExited:re,onExiting:ue,addEndListener:Y=>{S==="auto"&&($.current=setTimeout(Y,P.current||0)),o&&o(z.current,Y)},nodeRef:z,timeout:S==="auto"?null:S},T,{children:(Y,me)=>i(bh,b({as:c,className:Q(I.root,a,{entered:I.entered,exited:!d&&L==="0px"&&I.hidden}[Y]),style:b({[E?"minWidth":"minHeight"]:L},y),ownerState:b({},A,{state:Y}),ref:q},me,{children:i(vh,{ownerState:b({},A,{state:Y}),className:I.wrapper,ref:C,children:i(xh,{ownerState:b({},A,{state:Y}),className:I.wrapperInner,children:s})})}))}))});yc.muiSupportAuto=!0;var yh=yc;const wh=k.exports.createContext({});var wc=wh;function Ch(e){return Se("MuiAccordion",e)}const Sh=ye("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]);var Wr=Sh;const kh=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],Ph=e=>{const{classes:n,square:t,expanded:r,disabled:o,disableGutters:s}=e;return we({root:["root",!t&&"rounded",r&&"expanded",o&&"disabled",!s&&"gutters"],region:["region"]},Ch,n)},Rh=_(Ln,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[{[`& .${Wr.region}`]:n.region},n.root,!t.square&&n.rounded,!t.disableGutters&&n.gutters]}})(({theme:e})=>{const n={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],n),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],n)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${Wr.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${Wr.disabled}`]:{backgroundColor:e.palette.action.disabledBackground}}},({theme:e,ownerState:n})=>b({},!n.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!n.disableGutters&&{[`&.${Wr.expanded}`]:{margin:"16px 0"}})),Th=k.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiAccordion"}),{children:o,className:s,defaultExpanded:a=!1,disabled:l=!1,disableGutters:c=!1,expanded:u,onChange:d,square:f=!1,TransitionComponent:m=yh,TransitionProps:p}=r,v=fe(r,kh),[g,h]=pt({controlled:u,default:a,name:"Accordion",state:"expanded"}),x=k.exports.useCallback(I=>{h(!g),d&&d(I,!g)},[g,d,h]),[y,...S]=k.exports.Children.toArray(o),R=k.exports.useMemo(()=>({expanded:g,disabled:l,disableGutters:c,toggle:x}),[g,l,c,x]),T=b({},r,{square:f,disabled:l,disableGutters:c,expanded:g}),A=Ph(T);return w(Rh,b({className:Q(A.root,s),ref:t,ownerState:T,square:f},v,{children:[i(wc.Provider,{value:R,children:y}),i(m,b({in:g,timeout:"auto"},p,{children:i("div",{"aria-labelledby":y.props.id,id:y.props["aria-controls"],role:"region",className:A.region,children:S})}))]}))});var Kt=Th;function Ah(e){return Se("MuiAccordionDetails",e)}ye("MuiAccordionDetails",["root"]);const $h=["className"],Dh=e=>{const{classes:n}=e;return we({root:["root"]},Ah,n)},Ih=_("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,n)=>n.root})(({theme:e})=>({padding:e.spacing(1,2,2)})),Bh=k.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiAccordionDetails"}),{className:o}=r,s=fe(r,$h),a=r,l=Dh(a);return i(Ih,b({className:Q(l.root,o),ref:t,ownerState:a},s))});var Qt=Bh;function Eh(e){return Se("MuiAccordionSummary",e)}const Mh=ye("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]);var Ot=Mh;const Lh=["children","className","expandIcon","focusVisibleClassName","onClick"],Oh=e=>{const{classes:n,expanded:t,disabled:r,disableGutters:o}=e;return we({root:["root",t&&"expanded",r&&"disabled",!o&&"gutters"],focusVisible:["focusVisible"],content:["content",t&&"expanded",!o&&"contentGutters"],expandIconWrapper:["expandIconWrapper",t&&"expanded"]},Eh,n)},Nh=_(Wt,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,n)=>n.root})(({theme:e,ownerState:n})=>{const t={duration:e.transitions.duration.shortest};return b({display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],t),[`&.${Ot.focusVisible}`]:{backgroundColor:e.palette.action.focus},[`&.${Ot.disabled}`]:{opacity:e.palette.action.disabledOpacity},[`&:hover:not(.${Ot.disabled})`]:{cursor:"pointer"}},!n.disableGutters&&{[`&.${Ot.expanded}`]:{minHeight:64}})}),zh=_("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,n)=>n.content})(({theme:e,ownerState:n})=>b({display:"flex",flexGrow:1,margin:"12px 0"},!n.disableGutters&&{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${Ot.expanded}`]:{margin:"20px 0"}})),Fh=_("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,n)=>n.expandIconWrapper})(({theme:e})=>({display:"flex",color:e.palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${Ot.expanded}`]:{transform:"rotate(180deg)"}})),_h=k.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiAccordionSummary"}),{children:o,className:s,expandIcon:a,focusVisibleClassName:l,onClick:c}=r,u=fe(r,Lh),{disabled:d=!1,disableGutters:f,expanded:m,toggle:p}=k.exports.useContext(wc),v=x=>{p&&p(x),c&&c(x)},g=b({},r,{expanded:m,disabled:d,disableGutters:f}),h=Oh(g);return w(Nh,b({focusRipple:!1,disableRipple:!0,disabled:d,component:"div","aria-expanded":m,className:Q(h.root,s),focusVisibleClassName:Q(h.focusVisible,l),onClick:v,ref:t,ownerState:g},u,{children:[i(zh,{className:h.content,ownerState:g,children:o}),a&&i(Fh,{className:h.expandIconWrapper,ownerState:g,children:a})]}))});var Jt=_h;function Hh(e){return Se("MuiAlert",e)}const Wh=ye("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]);var fs=Wh;function Vh(e){return Se("MuiIconButton",e)}const jh=ye("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]);var Uh=jh;const qh=["edge","children","className","color","disabled","disableFocusRipple","size"],Gh=e=>{const{classes:n,disabled:t,color:r,edge:o,size:s}=e,a={root:["root",t&&"disabled",r!=="default"&&`color${B(r)}`,o&&`edge${B(o)}`,`size${B(s)}`]};return we(a,Vh,n)},Yh=_(Wt,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.color!=="default"&&n[`color${B(t.color)}`],t.edge&&n[`edge${B(t.edge)}`],n[`size${B(t.size)}`]]}})(({theme:e,ownerState:n})=>b({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!n.disableRipple&&{"&:hover":{backgroundColor:Be(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},n.edge==="start"&&{marginLeft:n.size==="small"?-3:-12},n.edge==="end"&&{marginRight:n.size==="small"?-3:-12}),({theme:e,ownerState:n})=>b({},n.color==="inherit"&&{color:"inherit"},n.color!=="inherit"&&n.color!=="default"&&b({color:e.palette[n.color].main},!n.disableRipple&&{"&:hover":{backgroundColor:Be(e.palette[n.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),n.size==="small"&&{padding:5,fontSize:e.typography.pxToRem(18)},n.size==="large"&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${Uh.disabled}`]:{backgroundColor:"transparent",color:e.palette.action.disabled}})),Kh=k.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiIconButton"}),{edge:o=!1,children:s,className:a,color:l="default",disabled:c=!1,disableFocusRipple:u=!1,size:d="medium"}=r,f=fe(r,qh),m=b({},r,{edge:o,color:l,disabled:c,disableFocusRipple:u,size:d}),p=Gh(m);return i(Yh,b({className:Q(p.root,a),centerRipple:!0,focusRipple:!u,disabled:c,ref:t,ownerState:m},f,{children:s}))});var _n=Kh,Qh=Mn(i("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),Jh=Mn(i("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),Xh=Mn(i("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),Zh=Mn(i("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),Cc=Mn(i("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),ms;const eg=["action","children","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"],ng=e=>{const{variant:n,color:t,severity:r,classes:o}=e,s={root:["root",`${n}${B(t||r)}`,`${n}`],icon:["icon"],message:["message"],action:["action"]};return we(s,Hh,o)},tg=_(Ln,{name:"MuiAlert",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[t.variant],n[`${t.variant}${B(t.color||t.severity)}`]]}})(({theme:e,ownerState:n})=>{const t=e.palette.mode==="light"?gr:br,r=e.palette.mode==="light"?br:gr,o=n.color||n.severity;return b({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},o&&n.variant==="standard"&&{color:t(e.palette[o].light,.6),backgroundColor:r(e.palette[o].light,.9),[`& .${fs.icon}`]:{color:e.palette.mode==="dark"?e.palette[o].main:e.palette[o].light}},o&&n.variant==="outlined"&&{color:t(e.palette[o].light,.6),border:`1px solid ${e.palette[o].light}`,[`& .${fs.icon}`]:{color:e.palette.mode==="dark"?e.palette[o].main:e.palette[o].light}},o&&n.variant==="filled"&&{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.mode==="dark"?e.palette[o].dark:e.palette[o].main})}),rg=_("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,n)=>n.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),og=_("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,n)=>n.message})({padding:"8px 0"}),hs=_("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,n)=>n.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),gs={success:i(Qh,{fontSize:"inherit"}),warning:i(Jh,{fontSize:"inherit"}),error:i(Xh,{fontSize:"inherit"}),info:i(Zh,{fontSize:"inherit"})},ig=k.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiAlert"}),{action:o,children:s,className:a,closeText:l="Close",color:c,icon:u,iconMapping:d=gs,onClose:f,role:m="alert",severity:p="success",variant:v="standard"}=r,g=fe(r,eg),h=b({},r,{color:c,severity:p,variant:v}),x=ng(h);return w(tg,b({role:m,elevation:0,ownerState:h,className:Q(x.root,a),ref:t},g,{children:[u!==!1?i(rg,{ownerState:h,className:x.icon,children:u||d[p]||gs[p]}):null,i(og,{ownerState:h,className:x.message,children:s}),o!=null?i(hs,{className:x.action,children:o}):null,o==null&&f?i(hs,{ownerState:h,className:x.action,children:i(_n,{size:"small","aria-label":l,title:l,color:"inherit",onClick:f,children:ms||(ms=i(Cc,{fontSize:"small"}))})}):null]}))});var wo=ig;function ag(e){return Se("MuiAppBar",e)}ye("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);const sg=["className","color","enableColorOnDark","position"],lg=e=>{const{color:n,position:t,classes:r}=e,o={root:["root",`color${B(n)}`,`position${B(t)}`]};return we(o,ag,r)},cg=_(Ln,{name:"MuiAppBar",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[`position${B(t.position)}`],n[`color${B(t.color)}`]]}})(({theme:e,ownerState:n})=>{const t=e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[900];return b({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},n.position==="fixed"&&{position:"fixed",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},n.position==="absolute"&&{position:"absolute",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0},n.position==="sticky"&&{position:"sticky",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0},n.position==="static"&&{position:"static"},n.position==="relative"&&{position:"relative"},n.color==="default"&&{backgroundColor:t,color:e.palette.getContrastText(t)},n.color&&n.color!=="default"&&n.color!=="inherit"&&n.color!=="transparent"&&{backgroundColor:e.palette[n.color].main,color:e.palette[n.color].contrastText},n.color==="inherit"&&{color:"inherit"},e.palette.mode==="dark"&&!n.enableColorOnDark&&{backgroundColor:null,color:null},n.color==="transparent"&&b({backgroundColor:"transparent",color:"inherit"},e.palette.mode==="dark"&&{backgroundImage:"none"}))}),ug=k.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiAppBar"}),{className:o,color:s="primary",enableColorOnDark:a=!1,position:l="fixed"}=r,c=fe(r,sg),u=b({},r,{color:s,position:l,enableColorOnDark:a}),d=lg(u);return i(cg,b({square:!0,component:"header",ownerState:u,elevation:4,className:Q(d.root,o,l==="fixed"&&"mui-fixed"),ref:t},c))});var dg=ug;const pg=_(Qm,{name:"MuiPopper",slot:"Root",overridesResolver:(e,n)=>n.root})({}),fg=k.exports.forwardRef(function(n,t){const r=wd(),o=Ce({props:n,name:"MuiPopper"});return i(pg,b({direction:r==null?void 0:r.direction},o,{ref:t}))});var Mi=fg;function mg(e){return Se("MuiListSubheader",e)}ye("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);const hg=["className","color","component","disableGutters","disableSticky","inset"],gg=e=>{const{classes:n,color:t,disableGutters:r,inset:o,disableSticky:s}=e,a={root:["root",t!=="default"&&`color${B(t)}`,!r&&"gutters",o&&"inset",!s&&"sticky"]};return we(a,mg,n)},bg=_("li",{name:"MuiListSubheader",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.color!=="default"&&n[`color${B(t.color)}`],!t.disableGutters&&n.gutters,t.inset&&n.inset,!t.disableSticky&&n.sticky]}})(({theme:e,ownerState:n})=>b({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:e.palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14)},n.color==="primary"&&{color:e.palette.primary.main},n.color==="inherit"&&{color:"inherit"},!n.disableGutters&&{paddingLeft:16,paddingRight:16},n.inset&&{paddingLeft:72},!n.disableSticky&&{position:"sticky",top:0,zIndex:1,backgroundColor:e.palette.background.paper})),vg=k.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiListSubheader"}),{className:o,color:s="default",component:a="li",disableGutters:l=!1,disableSticky:c=!1,inset:u=!1}=r,d=fe(r,hg),f=b({},r,{color:s,component:a,disableGutters:l,disableSticky:c,inset:u}),m=gg(f);return i(bg,b({as:a,className:Q(m.root,o),ref:t,ownerState:f},d))});var xg=vg,yg=Mn(i("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function wg(e){return Se("MuiChip",e)}const Cg=ye("MuiChip",["root","sizeSmall","sizeMedium","colorPrimary","colorSecondary","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","focusVisible"]);var Ie=Cg;const Sg=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"],kg=e=>{const{classes:n,disabled:t,size:r,color:o,onDelete:s,clickable:a,variant:l}=e,c={root:["root",l,t&&"disabled",`size${B(r)}`,`color${B(o)}`,a&&"clickable",a&&`clickableColor${B(o)}`,s&&"deletable",s&&`deletableColor${B(o)}`,`${l}${B(o)}`],label:["label",`label${B(r)}`],avatar:["avatar",`avatar${B(r)}`,`avatarColor${B(o)}`],icon:["icon",`icon${B(r)}`,`iconColor${B(o)}`],deleteIcon:["deleteIcon",`deleteIcon${B(r)}`,`deleteIconColor${B(o)}`,`deleteIconOutlinedColor${B(o)}`]};return we(c,wg,n)},Pg=_("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e,{color:r,clickable:o,onDelete:s,size:a,variant:l}=t;return[{[`& .${Ie.avatar}`]:n.avatar},{[`& .${Ie.avatar}`]:n[`avatar${B(a)}`]},{[`& .${Ie.avatar}`]:n[`avatarColor${B(r)}`]},{[`& .${Ie.icon}`]:n.icon},{[`& .${Ie.icon}`]:n[`icon${B(a)}`]},{[`& .${Ie.icon}`]:n[`iconColor${B(r)}`]},{[`& .${Ie.deleteIcon}`]:n.deleteIcon},{[`& .${Ie.deleteIcon}`]:n[`deleteIcon${B(a)}`]},{[`& .${Ie.deleteIcon}`]:n[`deleteIconColor${B(r)}`]},{[`& .${Ie.deleteIcon}`]:n[`deleteIconOutlinedColor${B(r)}`]},n.root,n[`size${B(a)}`],n[`color${B(r)}`],o&&n.clickable,o&&r!=="default"&&n[`clickableColor${B(r)})`],s&&n.deletable,s&&r!=="default"&&n[`deletableColor${B(r)}`],n[l],l==="outlined"&&n[`outlined${B(r)}`]]}})(({theme:e,ownerState:n})=>{const t=Be(e.palette.text.primary,.26);return b({maxWidth:"100%",fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.text.primary,backgroundColor:e.palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${Ie.disabled}`]:{opacity:e.palette.action.disabledOpacity,pointerEvents:"none"},[`& .${Ie.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:e.palette.mode==="light"?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},[`& .${Ie.avatarColorPrimary}`]:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},[`& .${Ie.avatarColorSecondary}`]:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},[`& .${Ie.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${Ie.icon}`]:b({color:e.palette.mode==="light"?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},n.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4},n.color!=="default"&&{color:"inherit"}),[`& .${Ie.deleteIcon}`]:b({WebkitTapHighlightColor:"transparent",color:t,fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Be(t,.4)}},n.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4},n.color!=="default"&&{color:Be(e.palette[n.color].contrastText,.7),"&:hover, &:active":{color:e.palette[n.color].contrastText}})},n.size==="small"&&{height:24},n.color!=="default"&&{backgroundColor:e.palette[n.color].main,color:e.palette[n.color].contrastText},n.onDelete&&{[`&.${Ie.focusVisible}`]:{backgroundColor:Be(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},n.onDelete&&n.color!=="default"&&{[`&.${Ie.focusVisible}`]:{backgroundColor:e.palette[n.color].dark}})},({theme:e,ownerState:n})=>b({},n.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:Be(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)},[`&.${Ie.focusVisible}`]:{backgroundColor:Be(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},"&:active":{boxShadow:e.shadows[1]}},n.clickable&&n.color!=="default"&&{[`&:hover, &.${Ie.focusVisible}`]:{backgroundColor:e.palette[n.color].dark}}),({theme:e,ownerState:n})=>b({},n.variant==="outlined"&&{backgroundColor:"transparent",border:`1px solid ${e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${Ie.clickable}:hover`]:{backgroundColor:e.palette.action.hover},[`&.${Ie.focusVisible}`]:{backgroundColor:e.palette.action.focus},[`& .${Ie.avatar}`]:{marginLeft:4},[`& .${Ie.avatarSmall}`]:{marginLeft:2},[`& .${Ie.icon}`]:{marginLeft:4},[`& .${Ie.iconSmall}`]:{marginLeft:2},[`& .${Ie.deleteIcon}`]:{marginRight:5},[`& .${Ie.deleteIconSmall}`]:{marginRight:3}},n.variant==="outlined"&&n.color!=="default"&&{color:e.palette[n.color].main,border:`1px solid ${Be(e.palette[n.color].main,.7)}`,[`&.${Ie.clickable}:hover`]:{backgroundColor:Be(e.palette[n.color].main,e.palette.action.hoverOpacity)},[`&.${Ie.focusVisible}`]:{backgroundColor:Be(e.palette[n.color].main,e.palette.action.focusOpacity)},[`& .${Ie.deleteIcon}`]:{color:Be(e.palette[n.color].main,.7),"&:hover, &:active":{color:e.palette[n.color].main}}})),Rg=_("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,n)=>{const{ownerState:t}=e,{size:r}=t;return[n.label,n[`label${B(r)}`]]}})(({ownerState:e})=>b({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},e.size==="small"&&{paddingLeft:8,paddingRight:8}));function bs(e){return e.key==="Backspace"||e.key==="Delete"}const Tg=k.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiChip"}),{avatar:o,className:s,clickable:a,color:l="default",component:c,deleteIcon:u,disabled:d=!1,icon:f,label:m,onClick:p,onDelete:v,onKeyDown:g,onKeyUp:h,size:x="medium",variant:y="filled"}=r,S=fe(r,Sg),R=k.exports.useRef(null),T=In(R,t),A=K=>{K.stopPropagation(),v&&v(K)},I=K=>{K.currentTarget===K.target&&bs(K)&&K.preventDefault(),g&&g(K)},D=K=>{K.currentTarget===K.target&&(v&&bs(K)?v(K):K.key==="Escape"&&R.current&&R.current.blur()),h&&h(K)},$=a!==!1&&p?!0:a,C=x==="small",P=$||v?Wt:c||"div",L=b({},r,{component:P,disabled:d,size:x,color:l,onDelete:!!v,clickable:$,variant:y}),E=kg(L),N=P===Wt?b({component:c||"div",focusVisibleClassName:E.focusVisible},v&&{disableRipple:!0}):{};let z=null;if(v){const K=Q(l!=="default"&&(y==="outlined"?E[`deleteIconOutlinedColor${B(l)}`]:E[`deleteIconColor${B(l)}`]),C&&E.deleteIconSmall);z=u&&k.exports.isValidElement(u)?k.exports.cloneElement(u,{className:Q(u.props.className,E.deleteIcon,K),onClick:A}):i(yg,{className:Q(E.deleteIcon,K),onClick:A})}let q=null;o&&k.exports.isValidElement(o)&&(q=k.exports.cloneElement(o,{className:Q(E.avatar,o.props.className)}));let j=null;return f&&k.exports.isValidElement(f)&&(j=k.exports.cloneElement(f,{className:Q(E.icon,f.props.className)})),w(Pg,b({as:P,className:Q(E.root,s),disabled:$&&d?!0:void 0,onClick:p,onKeyDown:I,onKeyUp:D,ref:T,ownerState:L},N,S,{children:[q||j,i(Rg,{className:Q(E.label),ownerState:L,children:m}),z]}))});var $t=Tg;function Ag(e){return Se("MuiAutocomplete",e)}const $g=ye("MuiAutocomplete",["root","fullWidth","focused","focusVisible","tag","tagSizeSmall","tagSizeMedium","hasPopupIcon","hasClearIcon","inputRoot","input","inputFocused","endAdornment","clearIndicator","popupIndicator","popupIndicatorOpen","popper","popperDisablePortal","paper","listbox","loading","noOptions","option","groupLabel","groupUl"]);var Ae=$g,vs,xs;const Dg=["autoComplete","autoHighlight","autoSelect","blurOnSelect","ChipProps","className","clearIcon","clearOnBlur","clearOnEscape","clearText","closeText","componentsProps","defaultValue","disableClearable","disableCloseOnSelect","disabled","disabledItemsFocusable","disableListWrap","disablePortal","filterOptions","filterSelectedOptions","forcePopupIcon","freeSolo","fullWidth","getLimitTagsText","getOptionDisabled","getOptionLabel","isOptionEqualToValue","groupBy","handleHomeEndKeys","id","includeInputInList","inputValue","limitTags","ListboxComponent","ListboxProps","loading","loadingText","multiple","noOptionsText","onChange","onClose","onHighlightChange","onInputChange","onOpen","open","openOnFocus","openText","options","PaperComponent","PopperComponent","popupIcon","readOnly","renderGroup","renderInput","renderOption","renderTags","selectOnFocus","size","value"],Ig=e=>{const{classes:n,disablePortal:t,focused:r,fullWidth:o,hasClearIcon:s,hasPopupIcon:a,inputFocused:l,popupOpen:c,size:u}=e,d={root:["root",r&&"focused",o&&"fullWidth",s&&"hasClearIcon",a&&"hasPopupIcon"],inputRoot:["inputRoot"],input:["input",l&&"inputFocused"],tag:["tag",`tagSize${B(u)}`],endAdornment:["endAdornment"],clearIndicator:["clearIndicator"],popupIndicator:["popupIndicator",c&&"popupIndicatorOpen"],popper:["popper",t&&"popperDisablePortal"],paper:["paper"],listbox:["listbox"],loading:["loading"],noOptions:["noOptions"],option:["option"],groupLabel:["groupLabel"],groupUl:["groupUl"]};return we(d,Ag,n)},Bg=_("div",{name:"MuiAutocomplete",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e,{fullWidth:r,hasClearIcon:o,hasPopupIcon:s,inputFocused:a,size:l}=t;return[{[`& .${Ae.tag}`]:n.tag},{[`& .${Ae.tag}`]:n[`tagSize${B(l)}`]},{[`& .${Ae.inputRoot}`]:n.inputRoot},{[`& .${Ae.input}`]:n.input},{[`& .${Ae.input}`]:a&&n.inputFocused},n.root,r&&n.fullWidth,s&&n.hasPopupIcon,o&&n.hasClearIcon]}})(({ownerState:e})=>b({[`&.${Ae.focused} .${Ae.clearIndicator}`]:{visibility:"visible"},"@media (pointer: fine)":{[`&:hover .${Ae.clearIndicator}`]:{visibility:"visible"}}},e.fullWidth&&{width:"100%"},{[`& .${Ae.tag}`]:b({margin:3,maxWidth:"calc(100% - 6px)"},e.size==="small"&&{margin:2,maxWidth:"calc(100% - 4px)"}),[`& .${Ae.inputRoot}`]:{flexWrap:"wrap",[`.${Ae.hasPopupIcon}&, .${Ae.hasClearIcon}&`]:{paddingRight:26+4},[`.${Ae.hasPopupIcon}.${Ae.hasClearIcon}&`]:{paddingRight:52+4},[`& .${Ae.input}`]:{width:0,minWidth:30}},[`& .${Bo.root}`]:{paddingBottom:1,"& .MuiInput-input":{padding:"4px 4px 4px 0px"}},[`& .${Bo.root}.${Or.sizeSmall}`]:{[`& .${Bo.input}`]:{padding:"2px 4px 3px 0"}},[`& .${Da.root}`]:{padding:9,[`.${Ae.hasPopupIcon}&, .${Ae.hasClearIcon}&`]:{paddingRight:26+4+9},[`.${Ae.hasPopupIcon}.${Ae.hasClearIcon}&`]:{paddingRight:52+4+9},[`& .${Ae.input}`]:{padding:"7.5px 4px 7.5px 6px"},[`& .${Ae.endAdornment}`]:{right:9}},[`& .${Da.root}.${Or.sizeSmall}`]:{padding:6,[`& .${Ae.input}`]:{padding:"2.5px 4px 2.5px 6px"}},[`& .${Nr.root}`]:{paddingTop:19,paddingLeft:8,[`.${Ae.hasPopupIcon}&, .${Ae.hasClearIcon}&`]:{paddingRight:26+4+9},[`.${Ae.hasPopupIcon}.${Ae.hasClearIcon}&`]:{paddingRight:52+4+9},[`& .${Nr.input}`]:{padding:"7px 4px"},[`& .${Ae.endAdornment}`]:{right:9}},[`& .${Nr.root}.${Or.sizeSmall}`]:{paddingBottom:1,[`& .${Nr.input}`]:{padding:"2.5px 4px"}},[`& .${Or.hiddenLabel}`]:{paddingTop:8},[`& .${Ae.input}`]:b({flexGrow:1,textOverflow:"ellipsis",opacity:0},e.inputFocused&&{opacity:1})})),Eg=_("div",{name:"MuiAutocomplete",slot:"EndAdornment",overridesResolver:(e,n)=>n.endAdornment})({position:"absolute",right:0,top:"calc(50% - 14px)"}),Mg=_(_n,{name:"MuiAutocomplete",slot:"ClearIndicator",overridesResolver:(e,n)=>n.clearIndicator})({marginRight:-2,padding:4,visibility:"hidden"}),Lg=_(_n,{name:"MuiAutocomplete",slot:"PopupIndicator",overridesResolver:({ownerState:e},n)=>b({},n.popupIndicator,e.popupOpen&&n.popupIndicatorOpen)})(({ownerState:e})=>b({padding:2,marginRight:-2},e.popupOpen&&{transform:"rotate(180deg)"})),Og=_(Mi,{name:"MuiAutocomplete",slot:"Popper",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[{[`& .${Ae.option}`]:n.option},n.popper,t.disablePortal&&n.popperDisablePortal]}})(({theme:e,ownerState:n})=>b({zIndex:e.zIndex.modal},n.disablePortal&&{position:"absolute"})),Ng=_(Ln,{name:"MuiAutocomplete",slot:"Paper",overridesResolver:(e,n)=>n.paper})(({theme:e})=>b({},e.typography.body1,{overflow:"auto"})),zg=_("div",{name:"MuiAutocomplete",slot:"Loading",overridesResolver:(e,n)=>n.loading})(({theme:e})=>({color:e.palette.text.secondary,padding:"14px 16px"})),Fg=_("div",{name:"MuiAutocomplete",slot:"NoOptions",overridesResolver:(e,n)=>n.noOptions})(({theme:e})=>({color:e.palette.text.secondary,padding:"14px 16px"})),_g=_("div",{name:"MuiAutocomplete",slot:"Listbox",overridesResolver:(e,n)=>n.listbox})(({theme:e})=>({listStyle:"none",margin:0,padding:"8px 0",maxHeight:"40vh",overflow:"auto",[`& .${Ae.option}`]:{minHeight:48,display:"flex",overflow:"hidden",justifyContent:"flex-start",alignItems:"center",cursor:"pointer",paddingTop:6,boxSizing:"border-box",outline:"0",WebkitTapHighlightColor:"transparent",paddingBottom:6,paddingLeft:16,paddingRight:16,[e.breakpoints.up("sm")]:{minHeight:"auto"},[`&.${Ae.focused}`]:{backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},'&[aria-disabled="true"]':{opacity:e.palette.action.disabledOpacity,pointerEvents:"none"},[`&.${Ae.focusVisible}`]:{backgroundColor:e.palette.action.focus},'&[aria-selected="true"]':{backgroundColor:Be(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${Ae.focused}`]:{backgroundColor:Be(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.palette.action.selected}},[`&.${Ae.focusVisible}`]:{backgroundColor:Be(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}}}})),Hg=_(xg,{name:"MuiAutocomplete",slot:"GroupLabel",overridesResolver:(e,n)=>n.groupLabel})(({theme:e})=>({backgroundColor:e.palette.background.paper,top:-8})),Wg=_("ul",{name:"MuiAutocomplete",slot:"GroupUl",overridesResolver:(e,n)=>n.groupUl})({padding:0,[`& .${Ae.option}`]:{paddingLeft:24}}),Vg=k.exports.forwardRef(function(n,t){var r,o;const s=Ce({props:n,name:"MuiAutocomplete"}),{autoComplete:a=!1,autoHighlight:l=!1,autoSelect:c=!1,blurOnSelect:u=!1,ChipProps:d,className:f,clearIcon:m=vs||(vs=i(Cc,{fontSize:"small"})),clearOnBlur:p=!s.freeSolo,clearOnEscape:v=!1,clearText:g="Clear",closeText:h="Close",componentsProps:x={},defaultValue:y=s.multiple?[]:null,disableClearable:S=!1,disableCloseOnSelect:R=!1,disabled:T=!1,disabledItemsFocusable:A=!1,disableListWrap:I=!1,disablePortal:D=!1,filterSelectedOptions:$=!1,forcePopupIcon:C="auto",freeSolo:P=!1,fullWidth:L=!1,getLimitTagsText:E=Oe=>`+${Oe}`,getOptionLabel:N=Oe=>{var vn;return(vn=Oe.label)!=null?vn:Oe},groupBy:z,handleHomeEndKeys:q=!s.freeSolo,includeInputInList:j=!1,limitTags:K=-1,ListboxComponent:W="ul",ListboxProps:H,loading:te=!1,loadingText:Z="Loading\u2026",multiple:re=!1,noOptionsText:ue="No options",openOnFocus:ce=!1,openText:Y="Open",PaperComponent:me=Ln,PopperComponent:be=Mi,popupIcon:oe=xs||(xs=i(Cd,{})),readOnly:ae=!1,renderGroup:De,renderInput:_e,renderOption:se,renderTags:tn,selectOnFocus:Re=!s.freeSolo,size:an="medium"}=s,rn=fe(s,Dg),{getRootProps:Me,getInputProps:Le,getInputLabelProps:Te,getPopupIndicatorProps:Ne,getClearProps:on,getTagProps:Qe,getListboxProps:F,getOptionProps:ee,value:ne,dirty:le,id:ze,popupOpen:Ue,focused:Pe,focusedTag:$e,anchorEl:xe,setAnchorEl:He,inputValue:sn,groupedOptions:Fe}=Of(b({},s,{componentName:"Autocomplete"})),rt=!S&&!T&&le&&!ae,ot=(!P||C===!0)&&C!==!1,ln=b({},s,{disablePortal:D,focused:Pe,fullWidth:L,hasClearIcon:rt,hasPopupIcon:ot,inputFocused:$e===-1,popupOpen:Ue,size:an}),Ye=Ig(ln);let On;if(re&&ne.length>0){const Oe=vn=>b({className:Q(Ye.tag),disabled:T},Qe(vn));tn?On=tn(ne,Oe):On=ne.map((vn,it)=>i($t,b({label:N(vn),size:an},Oe({index:it}),d)))}if(K>-1&&Array.isArray(On)){const Oe=On.length-K;!Pe&&Oe>0&&(On=On.splice(0,K),On.push(i("span",{className:Ye.tag,children:E(Oe)},On.length)))}const Er=De||(Oe=>w("li",{children:[i(Hg,{className:Ye.groupLabel,ownerState:ln,component:"div",children:Oe.group}),i(Wg,{className:Ye.groupUl,ownerState:ln,children:Oe.children})]},Oe.key)),$o=se||((Oe,vn)=>i("li",b({},Oe,{children:N(vn)}))),er=(Oe,vn)=>{const it=ee({option:Oe,index:vn});return $o(b({},it,{className:Ye.option}),Oe,{selected:it["aria-selected"],inputValue:sn})};return w(k.exports.Fragment,{children:[i(Bg,b({ref:t,className:Q(Ye.root,f),ownerState:ln},Me(rn),{children:_e({id:ze,disabled:T,fullWidth:!0,size:an==="small"?"small":void 0,InputLabelProps:Te(),InputProps:{ref:He,className:Ye.inputRoot,startAdornment:On,endAdornment:w(Eg,{className:Ye.endAdornment,ownerState:ln,children:[rt?i(Mg,b({},on(),{"aria-label":g,title:g,ownerState:ln},x.clearIndicator,{className:Q(Ye.clearIndicator,(r=x.clearIndicator)==null?void 0:r.className),children:m})):null,ot?i(Lg,b({},Ne(),{disabled:T,"aria-label":Ue?h:Y,title:Ue?h:Y,className:Q(Ye.popupIndicator),ownerState:ln,children:oe})):null]})},inputProps:b({className:Q(Ye.input),disabled:T,readOnly:ae},Le())})})),Ue&&xe?i(Og,{as:be,className:Q(Ye.popper),disablePortal:D,style:{width:xe?xe.clientWidth:null},ownerState:ln,role:"presentation",anchorEl:xe,open:!0,children:w(Ng,b({ownerState:ln,as:me},x.paper,{className:Q(Ye.paper,(o=x.paper)==null?void 0:o.className),children:[te&&Fe.length===0?i(zg,{className:Ye.loading,ownerState:ln,children:Z}):null,Fe.length===0&&!P&&!te?i(Fg,{className:Ye.noOptions,ownerState:ln,role:"presentation",onMouseDown:Oe=>{Oe.preventDefault()},children:ue}):null,Fe.length>0?i(_g,b({as:W,className:Ye.listbox,ownerState:ln},F(),H,{children:Fe.map((Oe,vn)=>z?Er({key:Oe.key,group:Oe.group,children:Oe.options.map((it,Do)=>er(it,Oe.index+Do))}):er(Oe,vn))})):null]}))}):null]})});var Li=Vg;const jg=e=>!e||!Ct(e);var Vr=jg;function Ug(e){return Se("MuiButton",e)}const qg=ye("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var jr=qg;const Gg=k.exports.createContext({});var Sc=Gg;const Yg=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],Kg=e=>{const{color:n,disableElevation:t,fullWidth:r,size:o,variant:s,classes:a}=e,l={root:["root",s,`${s}${B(n)}`,`size${B(o)}`,`${s}Size${B(o)}`,n==="inherit"&&"colorInherit",t&&"disableElevation",r&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${B(o)}`],endIcon:["endIcon",`iconSize${B(o)}`]},c=we(l,Ug,a);return b({},a,c)},kc=e=>b({},e.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},e.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},e.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),Qg=_(Wt,{shouldForwardProp:e=>go(e)||e==="classes",name:"MuiButton",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[t.variant],n[`${t.variant}${B(t.color)}`],n[`size${B(t.size)}`],n[`${t.variant}Size${B(t.size)}`],t.color==="inherit"&&n.colorInherit,t.disableElevation&&n.disableElevation,t.fullWidth&&n.fullWidth]}})(({theme:e,ownerState:n})=>b({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":b({textDecoration:"none",backgroundColor:Be(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},n.variant==="text"&&n.color!=="inherit"&&{backgroundColor:Be(e.palette[n.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},n.variant==="outlined"&&n.color!=="inherit"&&{border:`1px solid ${e.palette[n.color].main}`,backgroundColor:Be(e.palette[n.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},n.variant==="contained"&&{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]}},n.variant==="contained"&&n.color!=="inherit"&&{backgroundColor:e.palette[n.color].dark,"@media (hover: none)":{backgroundColor:e.palette[n.color].main}}),"&:active":b({},n.variant==="contained"&&{boxShadow:e.shadows[8]}),[`&.${jr.focusVisible}`]:b({},n.variant==="contained"&&{boxShadow:e.shadows[6]}),[`&.${jr.disabled}`]:b({color:e.palette.action.disabled},n.variant==="outlined"&&{border:`1px solid ${e.palette.action.disabledBackground}`},n.variant==="outlined"&&n.color==="secondary"&&{border:`1px solid ${e.palette.action.disabled}`},n.variant==="contained"&&{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground})},n.variant==="text"&&{padding:"6px 8px"},n.variant==="text"&&n.color!=="inherit"&&{color:e.palette[n.color].main},n.variant==="outlined"&&{padding:"5px 15px",border:`1px solid ${e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`},n.variant==="outlined"&&n.color!=="inherit"&&{color:e.palette[n.color].main,border:`1px solid ${Be(e.palette[n.color].main,.5)}`},n.variant==="contained"&&{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2]},n.variant==="contained"&&n.color!=="inherit"&&{color:e.palette[n.color].contrastText,backgroundColor:e.palette[n.color].main},n.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},n.size==="small"&&n.variant==="text"&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},n.size==="large"&&n.variant==="text"&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},n.size==="small"&&n.variant==="outlined"&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},n.size==="large"&&n.variant==="outlined"&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},n.size==="small"&&n.variant==="contained"&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},n.size==="large"&&n.variant==="contained"&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},n.fullWidth&&{width:"100%"}),({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${jr.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${jr.disabled}`]:{boxShadow:"none"}}),Jg=_("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.startIcon,n[`iconSize${B(t.size)}`]]}})(({ownerState:e})=>b({display:"inherit",marginRight:8,marginLeft:-4},e.size==="small"&&{marginLeft:-2},kc(e))),Xg=_("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.endIcon,n[`iconSize${B(t.size)}`]]}})(({ownerState:e})=>b({display:"inherit",marginRight:-4,marginLeft:8},e.size==="small"&&{marginRight:-2},kc(e))),Zg=k.exports.forwardRef(function(n,t){const r=k.exports.useContext(Sc),o=Sd(r,n),s=Ce({props:o,name:"MuiButton"}),{children:a,color:l="primary",component:c="button",className:u,disabled:d=!1,disableElevation:f=!1,disableFocusRipple:m=!1,endIcon:p,focusVisibleClassName:v,fullWidth:g=!1,size:h="medium",startIcon:x,type:y,variant:S="text"}=s,R=fe(s,Yg),T=b({},s,{color:l,component:c,disabled:d,disableElevation:f,disableFocusRipple:m,fullWidth:g,size:h,type:y,variant:S}),A=Kg(T),I=x&&i(Jg,{className:A.startIcon,ownerState:T,children:x}),D=p&&i(Xg,{className:A.endIcon,ownerState:T,children:p});return w(Qg,b({ownerState:T,className:Q(u,r.className),component:c,disabled:d,focusRipple:!m,focusVisibleClassName:Q(A.focusVisible,v),ref:t,type:y},R,{classes:A,children:[I,a,D]}))});var Yn=Zg;function eb(e){return Se("MuiButtonGroup",e)}const nb=ye("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary"]);var lt=nb;const tb=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],rb=(e,n)=>{const{ownerState:t}=e;return[{[`& .${lt.grouped}`]:n.grouped},{[`& .${lt.grouped}`]:n[`grouped${B(t.orientation)}`]},{[`& .${lt.grouped}`]:n[`grouped${B(t.variant)}`]},{[`& .${lt.grouped}`]:n[`grouped${B(t.variant)}${B(t.orientation)}`]},{[`& .${lt.grouped}`]:n[`grouped${B(t.variant)}${B(t.color)}`]},n.root,n[t.variant],t.disableElevation===!0&&n.disableElevation,t.fullWidth&&n.fullWidth,t.orientation==="vertical"&&n.vertical]},ob=e=>{const{classes:n,color:t,disabled:r,disableElevation:o,fullWidth:s,orientation:a,variant:l}=e,c={root:["root",l,a==="vertical"&&"vertical",s&&"fullWidth",o&&"disableElevation"],grouped:["grouped",`grouped${B(a)}`,`grouped${B(l)}`,`grouped${B(l)}${B(a)}`,`grouped${B(l)}${B(t)}`,r&&"disabled"]};return we(c,eb,n)},ib=_("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:rb})(({theme:e,ownerState:n})=>b({display:"inline-flex",borderRadius:e.shape.borderRadius},n.variant==="contained"&&{boxShadow:e.shadows[2]},n.disableElevation&&{boxShadow:"none"},n.fullWidth&&{width:"100%"},n.orientation==="vertical"&&{flexDirection:"column"},{[`& .${lt.grouped}`]:b({minWidth:40,"&:not(:first-of-type)":b({},n.orientation==="horizontal"&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},n.orientation==="vertical"&&{borderTopRightRadius:0,borderTopLeftRadius:0},n.variant==="outlined"&&n.orientation==="horizontal"&&{marginLeft:-1},n.variant==="outlined"&&n.orientation==="vertical"&&{marginTop:-1}),"&:not(:last-of-type)":b({},n.orientation==="horizontal"&&{borderTopRightRadius:0,borderBottomRightRadius:0},n.orientation==="vertical"&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},n.variant==="text"&&n.orientation==="horizontal"&&{borderRight:`1px solid ${e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`},n.variant==="text"&&n.orientation==="vertical"&&{borderBottom:`1px solid ${e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`},n.variant==="text"&&n.color!=="inherit"&&{borderColor:Be(e.palette[n.color].main,.5)},n.variant==="outlined"&&n.orientation==="horizontal"&&{borderRightColor:"transparent"},n.variant==="outlined"&&n.orientation==="vertical"&&{borderBottomColor:"transparent"},n.variant==="contained"&&n.orientation==="horizontal"&&{borderRight:`1px solid ${e.palette.grey[400]}`,[`&.${lt.disabled}`]:{borderRight:`1px solid ${e.palette.action.disabled}`}},n.variant==="contained"&&n.orientation==="vertical"&&{borderBottom:`1px solid ${e.palette.grey[400]}`,[`&.${lt.disabled}`]:{borderBottom:`1px solid ${e.palette.action.disabled}`}},n.variant==="contained"&&n.color!=="inherit"&&{borderColor:e.palette[n.color].dark},{"&:hover":b({},n.variant==="outlined"&&n.orientation==="horizontal"&&{borderRightColor:"currentColor"},n.variant==="outlined"&&n.orientation==="vertical"&&{borderBottomColor:"currentColor"})}),"&:hover":b({},n.variant==="contained"&&{boxShadow:"none"})},n.variant==="contained"&&{boxShadow:"none"})})),ab=k.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiButtonGroup"}),{children:o,className:s,color:a="primary",component:l="div",disabled:c=!1,disableElevation:u=!1,disableFocusRipple:d=!1,disableRipple:f=!1,fullWidth:m=!1,orientation:p="horizontal",size:v="medium",variant:g="outlined"}=r,h=fe(r,tb),x=b({},r,{color:a,component:l,disabled:c,disableElevation:u,disableFocusRipple:d,disableRipple:f,fullWidth:m,orientation:p,size:v,variant:g}),y=ob(x),S=k.exports.useMemo(()=>({className:y.grouped,color:a,disabled:c,disableElevation:u,disableFocusRipple:d,disableRipple:f,fullWidth:m,size:v,variant:g}),[a,c,u,d,f,m,v,g,y.grouped]);return i(ib,b({as:l,role:"group",className:Q(y.root,s),ref:t,ownerState:x},h,{children:i(Sc.Provider,{value:S,children:o})}))});var sb=ab;function lb(e){return Se("PrivateSwitchBase",e)}ye("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const cb=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],ub=e=>{const{classes:n,checked:t,disabled:r,edge:o}=e,s={root:["root",t&&"checked",r&&"disabled",o&&`edge${B(o)}`],input:["input"]};return we(s,lb,n)},db=_(Wt)(({ownerState:e})=>b({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),pb=_("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),fb=k.exports.forwardRef(function(n,t){const{autoFocus:r,checked:o,checkedIcon:s,className:a,defaultChecked:l,disabled:c,disableFocusRipple:u=!1,edge:d=!1,icon:f,id:m,inputProps:p,inputRef:v,name:g,onBlur:h,onChange:x,onFocus:y,readOnly:S,required:R,tabIndex:T,type:A,value:I}=n,D=fe(n,cb),[$,C]=pt({controlled:o,default:Boolean(l),name:"SwitchBase",state:"checked"}),P=Rr(),L=W=>{y&&y(W),P&&P.onFocus&&P.onFocus(W)},E=W=>{h&&h(W),P&&P.onBlur&&P.onBlur(W)},N=W=>{if(W.nativeEvent.defaultPrevented)return;const H=W.target.checked;C(H),x&&x(W,H)};let z=c;P&&typeof z=="undefined"&&(z=P.disabled);const q=A==="checkbox"||A==="radio",j=b({},n,{checked:$,disabled:z,disableFocusRipple:u,edge:d}),K=ub(j);return w(db,b({component:"span",className:Q(K.root,a),centerRipple:!0,focusRipple:!u,disabled:z,tabIndex:null,role:void 0,onFocus:L,onBlur:E,ownerState:j,ref:t},D,{children:[i(pb,b({autoFocus:r,checked:o,defaultChecked:l,className:K.input,disabled:z,id:q&&m,name:g,onChange:N,readOnly:S,ref:v,required:R,ownerState:j,tabIndex:T,type:A},A==="checkbox"&&I===void 0?{}:{value:I},p)),$?s:f]}))});var Oi=fb,mb=Mn(i("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),hb=Mn(i("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),gb=Mn(i("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function bb(e){return Se("MuiCheckbox",e)}const vb=ye("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]);var No=vb;const xb=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],yb=e=>{const{classes:n,indeterminate:t,color:r}=e,o={root:["root",t&&"indeterminate",`color${B(r)}`]},s=we(o,bb,n);return b({},n,s)},wb=_(Oi,{shouldForwardProp:e=>go(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.indeterminate&&n.indeterminate,t.color!=="default"&&n[`color${B(t.color)}`]]}})(({theme:e,ownerState:n})=>b({color:e.palette.text.secondary},!n.disableRipple&&{"&:hover":{backgroundColor:Be(n.color==="default"?e.palette.action.active:e.palette[n.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},n.color!=="default"&&{[`&.${No.checked}, &.${No.indeterminate}`]:{color:e.palette[n.color].main},[`&.${No.disabled}`]:{color:e.palette.action.disabled}})),Cb=i(hb,{}),Sb=i(mb,{}),kb=i(gb,{}),Pb=k.exports.forwardRef(function(n,t){var r,o;const s=Ce({props:n,name:"MuiCheckbox"}),{checkedIcon:a=Cb,color:l="primary",icon:c=Sb,indeterminate:u=!1,indeterminateIcon:d=kb,inputProps:f,size:m="medium"}=s,p=fe(s,xb),v=u?d:c,g=u?d:a,h=b({},s,{color:l,indeterminate:u,size:m}),x=yb(h);return i(wb,b({type:"checkbox",inputProps:b({"data-indeterminate":u},f),icon:k.exports.cloneElement(v,{fontSize:(r=v.props.fontSize)!=null?r:m}),checkedIcon:k.exports.cloneElement(g,{fontSize:(o=g.props.fontSize)!=null?o:m}),ownerState:h,ref:t},p,{classes:x}))});var Pc=Pb;function Rb(e){return Se("MuiCircularProgress",e)}ye("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const Tb=["className","color","disableShrink","size","style","thickness","value","variant"];let Co=e=>e,ys,ws,Cs,Ss;const st=44,Ab=Ol(ys||(ys=Co`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),$b=Ol(ws||(ws=Co`
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
`)),Db=e=>{const{classes:n,variant:t,color:r,disableShrink:o}=e,s={root:["root",t,`color${B(r)}`],svg:["svg"],circle:["circle",`circle${B(t)}`,o&&"circleDisableShrink"]};return we(s,Rb,n)},Ib=_("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[t.variant],n[`color${B(t.color)}`]]}})(({ownerState:e,theme:n})=>b({display:"inline-block"},e.variant==="determinate"&&{transition:n.transitions.create("transform")},e.color!=="inherit"&&{color:n.palette[e.color].main}),({ownerState:e})=>e.variant==="indeterminate"&&Nl(Cs||(Cs=Co`
      animation: ${0} 1.4s linear infinite;
    `),Ab)),Bb=_("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,n)=>n.svg})({display:"block"}),Eb=_("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.circle,n[`circle${B(t.variant)}`],t.disableShrink&&n.circleDisableShrink]}})(({ownerState:e,theme:n})=>b({stroke:"currentColor"},e.variant==="determinate"&&{transition:n.transitions.create("stroke-dashoffset")},e.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:e})=>e.variant==="indeterminate"&&!e.disableShrink&&Nl(Ss||(Ss=Co`
      animation: ${0} 1.4s ease-in-out infinite;
    `),$b)),Mb=k.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiCircularProgress"}),{className:o,color:s="primary",disableShrink:a=!1,size:l=40,style:c,thickness:u=3.6,value:d=0,variant:f="indeterminate"}=r,m=fe(r,Tb),p=b({},r,{color:s,disableShrink:a,size:l,thickness:u,value:d,variant:f}),v=Db(p),g={},h={},x={};if(f==="determinate"){const y=2*Math.PI*((st-u)/2);g.strokeDasharray=y.toFixed(3),x["aria-valuenow"]=Math.round(d),g.strokeDashoffset=`${((100-d)/100*y).toFixed(3)}px`,h.transform="rotate(-90deg)"}return i(Ib,b({className:Q(v.root,o),style:b({width:l,height:l},h,c),ownerState:p,ref:t,role:"progressbar"},x,m,{children:i(Bb,{className:v.svg,ownerState:p,viewBox:`${st/2} ${st/2} ${st} ${st}`,children:i(Eb,{className:v.circle,style:g,ownerState:p,cx:st,cy:st,r:(st-u)/2,fill:"none",strokeWidth:u})})}))});var Lb=Mb;function Ob(e){return Se("MuiDialog",e)}const Nb=ye("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]);var zo=Nb;const zb=k.exports.createContext({});var Rc=zb;const Fb=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],_b=_(kd,{name:"MuiDialog",slot:"Backdrop",overrides:(e,n)=>n.backdrop})({zIndex:-1}),Hb=e=>{const{classes:n,scroll:t,maxWidth:r,fullWidth:o,fullScreen:s}=e,a={root:["root"],container:["container",`scroll${B(t)}`],paper:["paper",`paperScroll${B(t)}`,`paperWidth${B(String(r))}`,o&&"paperFullWidth",s&&"paperFullScreen"]};return we(a,Ob,n)},Wb=_(yi,{name:"MuiDialog",slot:"Root",overridesResolver:(e,n)=>n.root})({"@media print":{position:"absolute !important"}}),Vb=_("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.container,n[`scroll${B(t.scroll)}`]]}})(({ownerState:e})=>b({height:"100%","@media print":{height:"auto"},outline:0},e.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},e.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),jb=_(Ln,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.paper,n[`scrollPaper${B(t.scroll)}`],n[`paperWidth${B(String(t.maxWidth))}`],t.fullWidth&&n.paperFullWidth,t.fullScreen&&n.paperFullScreen]}})(({theme:e,ownerState:n})=>b({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},n.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},n.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!n.maxWidth&&{maxWidth:"calc(100% - 64px)"},n.maxWidth==="xs"&&{maxWidth:e.breakpoints.unit==="px"?Math.max(e.breakpoints.values.xs,444):`${e.breakpoints.values.xs}${e.breakpoints.unit}`,[`&.${zo.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},n.maxWidth!=="xs"&&{maxWidth:`${e.breakpoints.values[n.maxWidth]}${e.breakpoints.unit}`,[`&.${zo.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[n.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},n.fullWidth&&{width:"calc(100% - 64px)"},n.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${zo.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),Ub=k.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiDialog"}),o=Dt(),s={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{"aria-describedby":a,"aria-labelledby":l,BackdropComponent:c,BackdropProps:u,children:d,className:f,disableEscapeKeyDown:m=!1,fullScreen:p=!1,fullWidth:v=!1,maxWidth:g="sm",onBackdropClick:h,onClose:x,open:y,PaperComponent:S=Ln,PaperProps:R={},scroll:T="paper",TransitionComponent:A=wi,transitionDuration:I=s,TransitionProps:D}=r,$=fe(r,Fb),C=b({},r,{disableEscapeKeyDown:m,fullScreen:p,fullWidth:v,maxWidth:g,scroll:T}),P=Hb(C),L=k.exports.useRef(),E=j=>{L.current=j.target===j.currentTarget},N=j=>{!L.current||(L.current=null,h&&h(j),x&&x(j,"backdropClick"))},z=Ar(l),q=k.exports.useMemo(()=>({titleId:z}),[z]);return i(Wb,b({className:Q(P.root,f),BackdropProps:b({transitionDuration:I,as:c},u),closeAfterTransition:!0,BackdropComponent:_b,disableEscapeKeyDown:m,onClose:x,open:y,ref:t,onClick:N,ownerState:C},$,{children:i(A,b({appear:!0,in:y,timeout:I,role:"presentation"},D,{children:i(Vb,{className:Q(P.container),onMouseDown:E,ownerState:C,children:i(jb,b({as:S,elevation:24,role:"dialog","aria-describedby":a,"aria-labelledby":z},R,{className:Q(P.paper,R.className),ownerState:C,children:i(Rc.Provider,{value:q,children:d})}))})}))}))});var qb=Ub;function Gb(e){return Se("MuiDialogActions",e)}ye("MuiDialogActions",["root","spacing"]);const Yb=["className","disableSpacing"],Kb=e=>{const{classes:n,disableSpacing:t}=e;return we({root:["root",!t&&"spacing"]},Gb,n)},Qb=_("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,!t.disableSpacing&&n.spacing]}})(({ownerState:e})=>b({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),Jb=k.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiDialogActions"}),{className:o,disableSpacing:s=!1}=r,a=fe(r,Yb),l=b({},r,{disableSpacing:s}),c=Kb(l);return i(Qb,b({className:Q(c.root,o),ownerState:l,ref:t},a))});var Xb=Jb;function Zb(e){return Se("MuiDialogContent",e)}ye("MuiDialogContent",["root","dividers"]);function ev(e){return Se("MuiDialogTitle",e)}const nv=ye("MuiDialogTitle",["root"]),tv=["className","dividers"],rv=e=>{const{classes:n,dividers:t}=e;return we({root:["root",t&&"dividers"]},Zb,n)},ov=_("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.dividers&&n.dividers]}})(({theme:e,ownerState:n})=>b({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},n.dividers?{padding:"16px 24px",borderTop:`1px solid ${e.palette.divider}`,borderBottom:`1px solid ${e.palette.divider}`}:{[`.${nv.root} + &`]:{paddingTop:0}})),iv=k.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiDialogContent"}),{className:o,dividers:s=!1}=r,a=fe(r,tv),l=b({},r,{dividers:s}),c=rv(l);return i(ov,b({className:Q(c.root,o),ownerState:l,ref:t},a))});var av=iv;const sv=["className","id"],lv=e=>{const{classes:n}=e;return we({root:["root"]},ev,n)},cv=_(V,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,n)=>n.root})({padding:"16px 24px",flex:"0 0 auto"}),uv=k.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiDialogTitle"}),{className:o,id:s}=r,a=fe(r,sv),l=r,c=lv(l),{titleId:u=s}=k.exports.useContext(Rc);return i(cv,b({component:"h2",className:Q(c.root,o),ownerState:l,ref:t,variant:"h6",id:u},a))});var dv=uv;const pv=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],fv=e=>{const{absolute:n,children:t,classes:r,flexItem:o,light:s,orientation:a,textAlign:l,variant:c}=e;return we({root:["root",n&&"absolute",c,s&&"light",a==="vertical"&&"vertical",o&&"flexItem",t&&"withChildren",t&&a==="vertical"&&"withChildrenVertical",l==="right"&&a!=="vertical"&&"textAlignRight",l==="left"&&a!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",a==="vertical"&&"wrapperVertical"]},Pd,r)},mv=_("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.absolute&&n.absolute,n[t.variant],t.light&&n.light,t.orientation==="vertical"&&n.vertical,t.flexItem&&n.flexItem,t.children&&n.withChildren,t.children&&t.orientation==="vertical"&&n.withChildrenVertical,t.textAlign==="right"&&t.orientation!=="vertical"&&n.textAlignRight,t.textAlign==="left"&&t.orientation!=="vertical"&&n.textAlignLeft]}})(({theme:e,ownerState:n})=>b({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:e.palette.divider,borderBottomWidth:"thin"},n.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},n.light&&{borderColor:Be(e.palette.divider,.08)},n.variant==="inset"&&{marginLeft:72},n.variant==="middle"&&n.orientation==="horizontal"&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},n.variant==="middle"&&n.orientation==="vertical"&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},n.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},n.flexItem&&{alignSelf:"stretch",height:"auto"}),({theme:e,ownerState:n})=>b({},n.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${e.palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}}),({theme:e,ownerState:n})=>b({},n.children&&n.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${e.palette.divider}`,transform:"translateX(0%)"}}),({ownerState:e})=>b({},e.textAlign==="right"&&e.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},e.textAlign==="left"&&e.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),hv=_("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.wrapper,t.orientation==="vertical"&&n.wrapperVertical]}})(({theme:e,ownerState:n})=>b({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},n.orientation==="vertical"&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})),gv=k.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiDivider"}),{absolute:o=!1,children:s,className:a,component:l=s?"div":"hr",flexItem:c=!1,light:u=!1,orientation:d="horizontal",role:f=l!=="hr"?"separator":void 0,textAlign:m="center",variant:p="fullWidth"}=r,v=fe(r,pv),g=b({},r,{absolute:o,component:l,flexItem:c,light:u,orientation:d,role:f,textAlign:m,variant:p}),h=fv(g);return i(mv,b({as:l,className:Q(h.root,a),role:f,ref:t,ownerState:g},v,{children:s?i(hv,{className:h.wrapper,ownerState:g,children:s}):null}))});var Ni=gv;const bv=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function vv(e,n,t){const r=n.getBoundingClientRect(),o=t&&t.getBoundingClientRect(),s=St(n);let a;if(n.fakeTransform)a=n.fakeTransform;else{const u=s.getComputedStyle(n);a=u.getPropertyValue("-webkit-transform")||u.getPropertyValue("transform")}let l=0,c=0;if(a&&a!=="none"&&typeof a=="string"){const u=a.split("(")[1].split(")")[0].split(",");l=parseInt(u[4],10),c=parseInt(u[5],10)}return e==="left"?o?`translateX(${o.right+l-r.left}px)`:`translateX(${s.innerWidth+l-r.left}px)`:e==="right"?o?`translateX(-${r.right-o.left-l}px)`:`translateX(-${r.left+r.width-l}px)`:e==="up"?o?`translateY(${o.bottom+c-r.top}px)`:`translateY(${s.innerHeight+c-r.top}px)`:o?`translateY(-${r.top-o.top+r.height-c}px)`:`translateY(-${r.top+r.height-c}px)`}function xv(e){return typeof e=="function"?e():e}function Ur(e,n,t){const r=xv(t),o=vv(e,n,r);o&&(n.style.webkitTransform=o,n.style.transform=o)}const yv=k.exports.forwardRef(function(n,t){const r=Dt(),o={enter:r.transitions.easing.easeOut,exit:r.transitions.easing.sharp},s={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:a,appear:l=!0,children:c,container:u,direction:d="down",easing:f=o,in:m,onEnter:p,onEntered:v,onEntering:g,onExit:h,onExited:x,onExiting:y,style:S,timeout:R=s,TransitionComponent:T=Ll}=n,A=fe(n,bv),I=k.exports.useRef(null),D=In(c.ref,I),$=In(D,t),C=W=>H=>{W&&(H===void 0?W(I.current):W(I.current,H))},P=C((W,H)=>{Ur(d,W,u),Rd(W),p&&p(W,H)}),L=C((W,H)=>{const te=hr({timeout:R,style:S,easing:f},{mode:"enter"});W.style.webkitTransition=r.transitions.create("-webkit-transform",b({},te)),W.style.transition=r.transitions.create("transform",b({},te)),W.style.webkitTransform="none",W.style.transform="none",g&&g(W,H)}),E=C(v),N=C(y),z=C(W=>{const H=hr({timeout:R,style:S,easing:f},{mode:"exit"});W.style.webkitTransition=r.transitions.create("-webkit-transform",H),W.style.transition=r.transitions.create("transform",H),Ur(d,W,u),h&&h(W)}),q=C(W=>{W.style.webkitTransition="",W.style.transition="",x&&x(W)}),j=W=>{a&&a(I.current,W)},K=k.exports.useCallback(()=>{I.current&&Ur(d,I.current,u)},[d,u]);return k.exports.useEffect(()=>{if(m||d==="down"||d==="right")return;const W=xi(()=>{I.current&&Ur(d,I.current,u)}),H=St(I.current);return H.addEventListener("resize",W),()=>{W.clear(),H.removeEventListener("resize",W)}},[d,m,u]),k.exports.useEffect(()=>{m||K()},[m,K]),i(T,b({nodeRef:I,onEnter:P,onEntered:E,onEntering:L,onExit:z,onExited:q,onExiting:N,addEndListener:j,appear:l,in:m,timeout:R},A,{children:(W,H)=>k.exports.cloneElement(c,b({ref:$,style:b({visibility:W==="exited"&&!m?"hidden":void 0},S,c.props.style)},H))}))});var wv=yv;function Cv(e){return Se("MuiDrawer",e)}ye("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const Sv=["BackdropProps"],kv=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],Tc=(e,n)=>{const{ownerState:t}=e;return[n.root,(t.variant==="permanent"||t.variant==="persistent")&&n.docked,n.modal]},Pv=e=>{const{classes:n,anchor:t,variant:r}=e,o={root:["root"],docked:[(r==="permanent"||r==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${B(t)}`,r!=="temporary"&&`paperAnchorDocked${B(t)}`]};return we(o,Cv,n)},Rv=_(yi,{name:"MuiDrawer",slot:"Root",overridesResolver:Tc})(({theme:e})=>({zIndex:e.zIndex.drawer})),ks=_("div",{shouldForwardProp:go,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:Tc})({flex:"0 0 auto"}),Tv=_(Ln,{name:"MuiDrawer",slot:"Paper",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.paper,n[`paperAnchor${B(t.anchor)}`],t.variant!=="temporary"&&n[`paperAnchorDocked${B(t.anchor)}`]]}})(({theme:e,ownerState:n})=>b({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:e.zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},n.anchor==="left"&&{left:0},n.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},n.anchor==="right"&&{right:0},n.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},n.anchor==="left"&&n.variant!=="temporary"&&{borderRight:`1px solid ${e.palette.divider}`},n.anchor==="top"&&n.variant!=="temporary"&&{borderBottom:`1px solid ${e.palette.divider}`},n.anchor==="right"&&n.variant!=="temporary"&&{borderLeft:`1px solid ${e.palette.divider}`},n.anchor==="bottom"&&n.variant!=="temporary"&&{borderTop:`1px solid ${e.palette.divider}`})),Ac={left:"right",right:"left",top:"down",bottom:"up"};function Nt(e){return["left","right"].indexOf(e)!==-1}function cr(e,n){return e.direction==="rtl"&&Nt(n)?Ac[n]:n}const Av=k.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiDrawer"}),o=Dt(),s={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{anchor:a="left",BackdropProps:l,children:c,className:u,elevation:d=16,hideBackdrop:f=!1,ModalProps:{BackdropProps:m}={},onClose:p,open:v=!1,PaperProps:g={},SlideProps:h,TransitionComponent:x=wv,transitionDuration:y=s,variant:S="temporary"}=r,R=fe(r.ModalProps,Sv),T=fe(r,kv),A=k.exports.useRef(!1);k.exports.useEffect(()=>{A.current=!0},[]);const I=cr(o,a),$=b({},r,{anchor:a,elevation:d,open:v,variant:S},T),C=Pv($),P=i(Tv,b({elevation:S==="temporary"?d:0,square:!0},g,{className:Q(C.paper,g.className),ownerState:$,children:c}));if(S==="permanent")return i(ks,b({className:Q(C.root,C.docked,u),ownerState:$,ref:t},T,{children:P}));const L=i(x,b({in:v,direction:Ac[I],timeout:y,appear:A.current},h,{children:P}));return S==="persistent"?i(ks,b({className:Q(C.root,C.docked,u),ownerState:$,ref:t},T,{children:L})):i(Rv,b({BackdropProps:b({},l,m,{transitionDuration:y}),className:Q(C.root,C.modal,u),open:v,ownerState:$,onClose:p,hideBackdrop:f,ref:t},T,R,{children:L}))});var $v=Av;function Dv(e){return Se("MuiFormControlLabel",e)}const Iv=ye("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]);var qr=Iv;const Bv=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","value"],Ev=e=>{const{classes:n,disabled:t,labelPlacement:r,error:o}=e,s={root:["root",t&&"disabled",`labelPlacement${B(r)}`,o&&"error"],label:["label",t&&"disabled"]};return we(s,Dv,n)},Mv=_("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[{[`& .${qr.label}`]:n.label},n.root,n[`labelPlacement${B(t.labelPlacement)}`]]}})(({theme:e,ownerState:n})=>b({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${qr.disabled}`]:{cursor:"default"}},n.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},n.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},n.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${qr.label}`]:{[`&.${qr.disabled}`]:{color:e.palette.text.disabled}}})),Lv=k.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiFormControlLabel"}),{className:o,componentsProps:s={},control:a,disabled:l,disableTypography:c,label:u,labelPlacement:d="end"}=r,f=fe(r,Bv),m=Rr();let p=l;typeof p=="undefined"&&typeof a.props.disabled!="undefined"&&(p=a.props.disabled),typeof p=="undefined"&&m&&(p=m.disabled);const v={disabled:p};["checked","name","onChange","value","inputRef"].forEach(S=>{typeof a.props[S]=="undefined"&&typeof r[S]!="undefined"&&(v[S]=r[S])});const g=Ci({props:r,muiFormControl:m,states:["error"]}),h=b({},r,{disabled:p,labelPlacement:d,error:g.error}),x=Ev(h);let y=u;return y!=null&&y.type!==V&&!c&&(y=i(V,b({component:"span",className:x.label},s.typography,{children:y}))),w(Mv,b({className:Q(x.root,o),ownerState:h,ref:t},f,{children:[k.exports.cloneElement(a,v),y]}))});var Fn=Lv;function Ov(e){return Se("MuiFormGroup",e)}ye("MuiFormGroup",["root","row","error"]);const Nv=["className","row"],zv=e=>{const{classes:n,row:t,error:r}=e;return we({root:["root",t&&"row",r&&"error"]},Ov,n)},Fv=_("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.row&&n.row]}})(({ownerState:e})=>b({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})),_v=k.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiFormGroup"}),{className:o,row:s=!1}=r,a=fe(r,Nv),l=Rr(),c=Ci({props:r,muiFormControl:l,states:["error"]}),u=b({},r,{row:s,error:c.error}),d=zv(u);return i(Fv,b({className:Q(d.root,o),ownerState:u,ref:t},a))});var zi=_v;function Hv(e){return Se("MuiFormHelperText",e)}const Wv=ye("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]);var Ps=Wv,Rs;const Vv=["children","className","component","disabled","error","filled","focused","margin","required","variant"],jv=e=>{const{classes:n,contained:t,size:r,disabled:o,error:s,filled:a,focused:l,required:c}=e,u={root:["root",o&&"disabled",s&&"error",r&&`size${B(r)}`,t&&"contained",l&&"focused",a&&"filled",c&&"required"]};return we(u,Hv,n)},Uv=_("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.size&&n[`size${B(t.size)}`],t.contained&&n.contained,t.filled&&n.filled]}})(({theme:e,ownerState:n})=>b({color:e.palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${Ps.disabled}`]:{color:e.palette.text.disabled},[`&.${Ps.error}`]:{color:e.palette.error.main}},n.size==="small"&&{marginTop:4},n.contained&&{marginLeft:14,marginRight:14})),qv=k.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiFormHelperText"}),{children:o,className:s,component:a="p"}=r,l=fe(r,Vv),c=Rr(),u=Ci({props:r,muiFormControl:c,states:["variant","size","disabled","error","filled","focused","required"]}),d=b({},r,{component:a,contained:u.variant==="filled"||u.variant==="outlined",variant:u.variant,size:u.size,disabled:u.disabled,error:u.error,filled:u.filled,focused:u.focused,required:u.required}),f=jv(d);return i(Uv,b({as:a,ownerState:d,className:Q(f.root,s),ref:t},l,{children:o===" "?Rs||(Rs=i("span",{className:"notranslate",children:"\u200B"})):o}))});var $c=qv;function Gv(e){return Se("MuiInputAdornment",e)}const Yv=ye("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var Ts=Yv,As;const Kv=["children","className","component","disablePointerEvents","disableTypography","position","variant"],Qv=(e,n)=>{const{ownerState:t}=e;return[n.root,n[`position${B(t.position)}`],t.disablePointerEvents===!0&&n.disablePointerEvents,n[t.variant]]},Jv=e=>{const{classes:n,disablePointerEvents:t,hiddenLabel:r,position:o,size:s,variant:a}=e,l={root:["root",t&&"disablePointerEvents",o&&`position${B(o)}`,a,r&&"hiddenLabel",s&&`size${B(s)}`]};return we(l,Gv,n)},Xv=_("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:Qv})(({theme:e,ownerState:n})=>b({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:e.palette.action.active},n.variant==="filled"&&{[`&.${Ts.positionStart}&:not(.${Ts.hiddenLabel})`]:{marginTop:16}},n.position==="start"&&{marginRight:8},n.position==="end"&&{marginLeft:8},n.disablePointerEvents===!0&&{pointerEvents:"none"})),Zv=k.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiInputAdornment"}),{children:o,className:s,component:a="div",disablePointerEvents:l=!1,disableTypography:c=!1,position:u,variant:d}=r,f=fe(r,Kv),m=Rr()||{};let p=d;d&&m.variant,m&&!p&&(p=m.variant);const v=b({},r,{hiddenLabel:m.hiddenLabel,size:m.size,disablePointerEvents:l,position:u,variant:p}),g=Jv(v);return i(Td.Provider,{value:null,children:i(Xv,b({as:a,ownerState:v,className:Q(g.root,s),ref:t},f,{children:typeof o=="string"&&!c?i(V,{color:"text.secondary",children:o}):w(k.exports.Fragment,{children:[u==="start"?As||(As=i("span",{className:"notranslate",children:"\u200B"})):null,o]})}))})});var so=Zv;function e1(e){return Se("MuiLink",e)}const n1=ye("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var t1=n1;const r1=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],o1={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},i1=e=>o1[e]||e,a1=e=>{const{classes:n,component:t,focusVisible:r,underline:o}=e,s={root:["root",`underline${B(o)}`,t==="button"&&"button",r&&"focusVisible"]};return we(s,e1,n)},s1=_(V,{name:"MuiLink",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[`underline${B(t.underline)}`],t.component==="button"&&n.button]}})(({theme:e,ownerState:n})=>{const t=Ad(e,`palette.${i1(n.color)}`)||n.color;return b({},n.underline==="none"&&{textDecoration:"none"},n.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},n.underline==="always"&&{textDecoration:"underline",textDecorationColor:t!=="inherit"?Be(t,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},n.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${t1.focusVisible}`]:{outline:"auto"}})}),l1=k.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiLink"}),{className:o,color:s="primary",component:a="a",onBlur:l,onFocus:c,TypographyClasses:u,underline:d="always",variant:f="inherit"}=r,m=fe(r,r1),{isFocusVisibleRef:p,onBlur:v,onFocus:g,ref:h}=vi(),[x,y]=k.exports.useState(!1),S=In(t,h),R=D=>{v(D),p.current===!1&&y(!1),l&&l(D)},T=D=>{g(D),p.current===!0&&y(!0),c&&c(D)},A=b({},r,{color:s,component:a,focusVisible:x,underline:d,variant:f}),I=a1(A);return i(s1,b({className:Q(I.root,o),classes:u,color:s,component:a,onBlur:R,onFocus:T,ref:S,ownerState:A,variant:f},m))});var lo=l1,c1=Object.freeze(Object.defineProperty({__proto__:null,default:$d,menuClasses:Dd,getMenuUtilityClass:Id},Symbol.toStringTag,{value:"Module"})),u1=Mn(i("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),d1=Mn(i("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked");const p1=_("span")({position:"relative",display:"flex"}),f1=_(u1)({transform:"scale(1)"}),m1=_(d1)(({theme:e,ownerState:n})=>b({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},n.checked&&{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}));function Dc(e){const{checked:n=!1,classes:t={},fontSize:r}=e,o=b({},e,{checked:n});return w(p1,{className:t.root,ownerState:o,children:[i(f1,{fontSize:r,className:t.background,ownerState:o}),i(m1,{fontSize:r,className:t.dot,ownerState:o})]})}const h1=k.exports.createContext(void 0);var Ic=h1;function g1(){return k.exports.useContext(Ic)}function b1(e){return Se("MuiRadio",e)}const v1=ye("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]);var $s=v1;const x1=["checked","checkedIcon","color","icon","name","onChange","size"],y1=e=>{const{classes:n,color:t}=e,r={root:["root",`color${B(t)}`]};return b({},n,we(r,b1,n))},w1=_(Oi,{shouldForwardProp:e=>go(e)||e==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[`color${B(t.color)}`]]}})(({theme:e,ownerState:n})=>b({color:e.palette.text.secondary,"&:hover":{backgroundColor:Be(n.color==="default"?e.palette.action.active:e.palette[n.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},n.color!=="default"&&{[`&.${$s.checked}`]:{color:e.palette[n.color].main}},{[`&.${$s.disabled}`]:{color:e.palette.action.disabled}}));function C1(e,n){return typeof n=="object"&&n!==null?e===n:String(e)===String(n)}const Ds=i(Dc,{checked:!0}),Is=i(Dc,{}),S1=k.exports.forwardRef(function(n,t){var r,o;const s=Ce({props:n,name:"MuiRadio"}),{checked:a,checkedIcon:l=Ds,color:c="primary",icon:u=Is,name:d,onChange:f,size:m="medium"}=s,p=fe(s,x1),v=b({},s,{color:c,size:m}),g=y1(v),h=g1();let x=a;const y=Ml(f,h&&h.onChange);let S=d;return h&&(typeof x=="undefined"&&(x=C1(h.value,s.value)),typeof S=="undefined"&&(S=h.name)),i(w1,b({type:"radio",icon:k.exports.cloneElement(u,{fontSize:(r=Is.props.fontSize)!=null?r:m}),checkedIcon:k.exports.cloneElement(l,{fontSize:(o=Ds.props.fontSize)!=null?o:m}),ownerState:v,classes:g,name:S,checked:x,onChange:y,ref:t},p))});var eo=S1;const k1=["actions","children","defaultValue","name","onChange","value"],P1=k.exports.forwardRef(function(n,t){const{actions:r,children:o,defaultValue:s,name:a,onChange:l,value:c}=n,u=fe(n,k1),d=k.exports.useRef(null),[f,m]=pt({controlled:c,default:s,name:"RadioGroup"});k.exports.useImperativeHandle(r,()=>({focus:()=>{let h=d.current.querySelector("input:not(:disabled):checked");h||(h=d.current.querySelector("input:not(:disabled)")),h&&h.focus()}}),[]);const p=In(t,d),v=h=>{m(h.target.value),l&&l(h,h.target.value)},g=Ar(a);return i(Ic.Provider,{value:{name:g,onChange:v,value:f},children:i(zi,b({role:"radiogroup",ref:p},u,{children:o}))})});var ii=P1;const R1=["component","components","componentsProps","color","size"],dt=b({},Zr,ye("MuiSlider",["colorPrimary","colorSecondary","thumbColorPrimary","thumbColorSecondary","sizeSmall","thumbSizeSmall"])),T1=_("span",{name:"MuiSlider",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e,r=t.marksProp===!0&&t.step!==null?[...Array(Math.floor((t.max-t.min)/t.step)+1)].map((s,a)=>({value:t.min+t.step*a})):t.marksProp||[],o=r.length>0&&r.some(s=>s.label);return[n.root,n[`color${B(t.color)}`],t.size!=="medium"&&n[`size${B(t.size)}`],o&&n.marked,t.orientation==="vertical"&&n.vertical,t.track==="inverted"&&n.trackInverted,t.track===!1&&n.trackFalse]}})(({theme:e,ownerState:n})=>b({borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",color:e.palette[n.color].main,WebkitTapHighlightColor:"transparent"},n.orientation==="horizontal"&&b({height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}},n.size==="small"&&{height:2},n.marked&&{marginBottom:20}),n.orientation==="vertical"&&b({height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}},n.size==="small"&&{width:2},n.marked&&{marginRight:44}),{"@media print":{colorAdjust:"exact"},[`&.${dt.disabled}`]:{pointerEvents:"none",cursor:"default",color:e.palette.grey[400]},[`&.${dt.dragging}`]:{[`& .${dt.thumb}, & .${dt.track}`]:{transition:"none"}}})),A1=_("span",{name:"MuiSlider",slot:"Rail",overridesResolver:(e,n)=>n.rail})(({ownerState:e})=>b({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38},e.orientation==="horizontal"&&{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"},e.orientation==="vertical"&&{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"},e.track==="inverted"&&{opacity:1})),$1=_("span",{name:"MuiSlider",slot:"Track",overridesResolver:(e,n)=>n.track})(({theme:e,ownerState:n})=>{const t=e.palette.mode==="light"?br(e.palette[n.color].main,.62):gr(e.palette[n.color].main,.5);return b({display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:e.transitions.create(["left","width","bottom","height"],{duration:e.transitions.duration.shortest})},n.size==="small"&&{border:"none"},n.orientation==="horizontal"&&{height:"inherit",top:"50%",transform:"translateY(-50%)"},n.orientation==="vertical"&&{width:"inherit",left:"50%",transform:"translateX(-50%)"},n.track===!1&&{display:"none"},n.track==="inverted"&&{backgroundColor:t,borderColor:t})}),D1=_("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.thumb,n[`thumbColor${B(t.color)}`],t.size!=="medium"&&n[`thumbSize${B(t.size)}`]]}})(({theme:e,ownerState:n})=>b({position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow","left","bottom"],{duration:e.transitions.duration.shortest})},n.size==="small"&&{width:12,height:12},n.orientation==="horizontal"&&{top:"50%",transform:"translate(-50%, -50%)"},n.orientation==="vertical"&&{left:"50%",transform:"translate(-50%, 50%)"},{"&:before":b({position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:e.shadows[2]},n.size==="small"&&{boxShadow:"none"}),"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},[`&:hover, &.${dt.focusVisible}`]:{boxShadow:`0px 0px 0px 8px ${Be(e.palette[n.color].main,.16)}`,"@media (hover: none)":{boxShadow:"none"}},[`&.${dt.active}`]:{boxShadow:`0px 0px 0px 14px ${Be(e.palette[n.color].main,.16)}`},[`&.${dt.disabled}`]:{"&:hover":{boxShadow:"none"}}})),I1=_(vc,{name:"MuiSlider",slot:"ValueLabel",overridesResolver:(e,n)=>n.valueLabel})(({theme:e,ownerState:n})=>b({[`&.${dt.valueLabelOpen}`]:{transform:"translateY(-100%) scale(1)"},zIndex:1,whiteSpace:"nowrap"},e.typography.body2,{fontWeight:500,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),top:-10,transformOrigin:"bottom center",transform:"translateY(-100%) scale(0)",position:"absolute",backgroundColor:e.palette.grey[600],borderRadius:2,color:e.palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem"},n.size==="small"&&{fontSize:e.typography.pxToRem(12),padding:"0.25rem 0.5rem"},{"&:before":{position:"absolute",content:'""',width:8,height:8,bottom:0,left:"50%",transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit"}})),B1=_("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:e=>zl(e)&&e!=="markActive",overridesResolver:(e,n)=>n.mark})(({theme:e,ownerState:n,markActive:t})=>b({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor"},n.orientation==="horizontal"&&{top:"50%",transform:"translate(-1px, -50%)"},n.orientation==="vertical"&&{left:"50%",transform:"translate(-50%, 1px)"},t&&{backgroundColor:e.palette.background.paper,opacity:.8})),E1=_("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:e=>zl(e)&&e!=="markLabelActive",overridesResolver:(e,n)=>n.markLabel})(({theme:e,ownerState:n,markLabelActive:t})=>b({},e.typography.body2,{color:e.palette.text.secondary,position:"absolute",whiteSpace:"nowrap"},n.orientation==="horizontal"&&{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}},n.orientation==="vertical"&&{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}},t&&{color:e.palette.text.primary})),M1=e=>{const{color:n,size:t,classes:r={}}=e;return b({},r,{root:Q(r.root,lr(`color${B(n)}`),r[`color${B(n)}`],t&&[lr(`size${B(t)}`),r[`size${B(t)}`]]),thumb:Q(r.thumb,lr(`thumbColor${B(n)}`),r[`thumbColor${B(n)}`],t&&[lr(`thumbSize${B(t)}`),r[`thumbSize${B(t)}`]])})},L1=k.exports.forwardRef(function(n,t){var r,o,s,a;const l=Ce({props:n,name:"MuiSlider"}),u=Dt().direction==="rtl",{component:d="span",components:f={},componentsProps:m={},color:p="primary",size:v="medium"}=l,g=fe(l,R1),h=b({},l,{color:p,size:v}),x=M1(h);return i(dh,b({},g,{isRtl:u,components:b({Root:T1,Rail:A1,Track:$1,Thumb:D1,ValueLabel:I1,Mark:B1,MarkLabel:E1},f),componentsProps:b({},m,{root:b({},m.root,Vr(f.Root)&&{as:d,ownerState:b({},(r=m.root)==null?void 0:r.ownerState,{color:p,size:v})}),thumb:b({},m.thumb,Vr(f.Thumb)&&{ownerState:b({},(o=m.thumb)==null?void 0:o.ownerState,{color:p,size:v})}),track:b({},m.track,Vr(f.Track)&&{ownerState:b({},(s=m.track)==null?void 0:s.ownerState,{color:p,size:v})}),valueLabel:b({},m.valueLabel,Vr(f.ValueLabel)&&{ownerState:b({},(a=m.valueLabel)==null?void 0:a.ownerState,{color:p,size:v})})}),classes:x,ref:t}))});var qn=L1;function O1(e){return Se("MuiSnackbarContent",e)}ye("MuiSnackbarContent",["root","message","action"]);const N1=["action","className","message","role"],z1=e=>{const{classes:n}=e;return we({root:["root"],action:["action"],message:["message"]},O1,n)},F1=_(Ln,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(e,n)=>n.root})(({theme:e})=>{const n=e.palette.mode==="light"?.8:.98,t=Bd(e.palette.background.default,n);return b({},e.typography.body2,{color:e.palette.getContrastText(t),backgroundColor:t,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:e.shape.borderRadius,flexGrow:1,[e.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),_1=_("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(e,n)=>n.message})({padding:"8px 0"}),H1=_("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(e,n)=>n.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),W1=k.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiSnackbarContent"}),{action:o,className:s,message:a,role:l="alert"}=r,c=fe(r,N1),u=r,d=z1(u);return w(F1,b({role:l,square:!0,elevation:6,className:Q(d.root,s),ownerState:u,ref:t},c,{children:[i(_1,{className:d.message,ownerState:u,children:a}),o?i(H1,{className:d.action,ownerState:u,children:o}):null]}))});var V1=W1;function j1(e){return Se("MuiSnackbar",e)}ye("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const U1=["onEnter","onExited"],q1=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],G1=e=>{const{classes:n,anchorOrigin:t}=e,r={root:["root",`anchorOrigin${B(t.vertical)}${B(t.horizontal)}`]};return we(r,j1,n)},Y1=_("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[`anchorOrigin${B(t.anchorOrigin.vertical)}${B(t.anchorOrigin.horizontal)}`]]}})(({theme:e,ownerState:n})=>{const t=b({},!n.isRtl&&{left:"50%",right:"auto",transform:"translateX(-50%)"},n.isRtl&&{right:"50%",left:"auto",transform:"translateX(50%)"});return b({zIndex:e.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},n.anchorOrigin.vertical==="top"?{top:8}:{bottom:8},n.anchorOrigin.horizontal==="left"&&{justifyContent:"flex-start"},n.anchorOrigin.horizontal==="right"&&{justifyContent:"flex-end"},{[e.breakpoints.up("sm")]:b({},n.anchorOrigin.vertical==="top"?{top:24}:{bottom:24},n.anchorOrigin.horizontal==="center"&&t,n.anchorOrigin.horizontal==="left"&&b({},!n.isRtl&&{left:24,right:"auto"},n.isRtl&&{right:24,left:"auto"}),n.anchorOrigin.horizontal==="right"&&b({},!n.isRtl&&{right:24,left:"auto"},n.isRtl&&{left:24,right:"auto"}))})}),K1=k.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiSnackbar"}),o=Dt(),s={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{action:a,anchorOrigin:{vertical:l,horizontal:c}={vertical:"bottom",horizontal:"left"},autoHideDuration:u=null,children:d,className:f,ClickAwayListenerProps:m,ContentProps:p,disableWindowBlurListener:v=!1,message:g,onBlur:h,onClose:x,onFocus:y,onMouseEnter:S,onMouseLeave:R,open:T,resumeHideDuration:A,TransitionComponent:I=Fl,transitionDuration:D=s,TransitionProps:{onEnter:$,onExited:C}={}}=r,P=fe(r.TransitionProps,U1),L=fe(r,q1),E=o.direction==="rtl",N=b({},r,{anchorOrigin:{vertical:l,horizontal:c},isRtl:E}),z=G1(N),q=k.exports.useRef(),[j,K]=k.exports.useState(!0),W=xn((...ae)=>{x&&x(...ae)}),H=xn(ae=>{!x||ae==null||(clearTimeout(q.current),q.current=setTimeout(()=>{W(null,"timeout")},ae))});k.exports.useEffect(()=>(T&&H(u),()=>{clearTimeout(q.current)}),[T,u,H]);const te=()=>{clearTimeout(q.current)},Z=k.exports.useCallback(()=>{u!=null&&H(A!=null?A:u*.5)},[u,A,H]),re=ae=>{y&&y(ae),te()},ue=ae=>{S&&S(ae),te()},ce=ae=>{h&&h(ae),Z()},Y=ae=>{R&&R(ae),Z()},me=ae=>{x&&x(ae,"clickaway")},be=ae=>{K(!0),C&&C(ae)},oe=(ae,De)=>{K(!1),$&&$(ae,De)};return k.exports.useEffect(()=>{if(!v&&T)return window.addEventListener("focus",Z),window.addEventListener("blur",te),()=>{window.removeEventListener("focus",Z),window.removeEventListener("blur",te)}},[v,Z,T]),k.exports.useEffect(()=>{if(!T)return;function ae(De){De.defaultPrevented||(De.key==="Escape"||De.key==="Esc")&&x&&x(De,"escapeKeyDown")}return document.addEventListener("keydown",ae),()=>{document.removeEventListener("keydown",ae)}},[j,T,x]),!T&&j?null:i(cc,b({onClickAway:me},m,{children:i(Y1,b({className:Q(z.root,f),onBlur:ce,onFocus:re,onMouseEnter:ue,onMouseLeave:Y,ownerState:N,ref:t,role:"presentation"},L,{children:i(I,b({appear:!0,in:T,timeout:D,direction:l==="top"?"down":"up",onEnter:oe,onExited:be},P,{children:d||i(V1,b({message:g,action:a},p))}))}))}))});var Q1=K1;const J1=["anchor","classes","className","width","style"],X1=_("div")(({theme:e,ownerState:n})=>b({position:"fixed",top:0,left:0,bottom:0,zIndex:e.zIndex.drawer-1},n.anchor==="left"&&{right:"auto"},n.anchor==="right"&&{left:"auto",right:0},n.anchor==="top"&&{bottom:"auto",right:0},n.anchor==="bottom"&&{top:"auto",bottom:0,right:0})),Z1=k.exports.forwardRef(function(n,t){const{anchor:r,classes:o={},className:s,width:a,style:l}=n,c=fe(n,J1),u=n;return i(X1,b({className:Q("PrivateSwipeArea-root",o.root,o[`anchor${B(r)}`],s),ref:t,style:b({[Nt(r)?"width":"height"]:a},l),ownerState:u},c))});var e0=Z1;const n0=["BackdropProps"],t0=["anchor","disableBackdropTransition","disableDiscovery","disableSwipeToOpen","hideBackdrop","hysteresis","minFlingVelocity","ModalProps","onClose","onOpen","open","PaperProps","SwipeAreaProps","swipeAreaWidth","transitionDuration","variant"],Gr=3,Fo=20;let Xn=null;function _o(e,n,t){return e==="right"?t.body.offsetWidth-n[0].pageX:n[0].pageX}function Ho(e,n,t){return e==="bottom"?t.innerHeight-n[0].clientY:n[0].clientY}function ir(e,n){return e?n.clientWidth:n.clientHeight}function Bs(e,n,t,r){return Math.min(Math.max(t?n-e:r+n-e,0),r)}function r0(e,n){const t=[];for(;e&&e!==n.parentElement;){const r=St(n).getComputedStyle(e);r.getPropertyValue("position")==="absolute"||r.getPropertyValue("overflow-x")==="hidden"||(e.clientWidth>0&&e.scrollWidth>e.clientWidth||e.clientHeight>0&&e.scrollHeight>e.clientHeight)&&t.push(e),e=e.parentElement}return t}function o0({domTreeShapes:e,start:n,current:t,anchor:r}){const o={scrollPosition:{x:"scrollLeft",y:"scrollTop"},scrollLength:{x:"scrollWidth",y:"scrollHeight"},clientLength:{x:"clientWidth",y:"clientHeight"}};return e.some(s=>{let a=t>=n;(r==="top"||r==="left")&&(a=!a);const l=r==="left"||r==="right"?"x":"y",c=Math.round(s[o.scrollPosition[l]]),u=c>0,d=c+s[o.clientLength[l]]<s[o.scrollLength[l]];return!!(a&&d||!a&&u)})}const i0=typeof navigator!="undefined"&&/iPad|iPhone|iPod/.test(navigator.userAgent),a0=k.exports.forwardRef(function(n,t){const r=Ed({name:"MuiSwipeableDrawer",props:n}),o=Dt(),s={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{anchor:a="left",disableBackdropTransition:l=!1,disableDiscovery:c=!1,disableSwipeToOpen:u=i0,hideBackdrop:d,hysteresis:f=.52,minFlingVelocity:m=450,ModalProps:{BackdropProps:p}={},onClose:v,onOpen:g,open:h,PaperProps:x={},SwipeAreaProps:y,swipeAreaWidth:S=20,transitionDuration:R=s,variant:T="temporary"}=r,A=fe(r.ModalProps,n0),I=fe(r,t0),[D,$]=k.exports.useState(!1),C=k.exports.useRef({isSwiping:null}),P=k.exports.useRef(),L=k.exports.useRef(),E=k.exports.useRef(),N=k.exports.useRef(!1),z=k.exports.useRef();Ht(()=>{z.current=null},[h]);const q=k.exports.useCallback((H,te={})=>{const{mode:Z=null,changeTransition:re=!0}=te,ue=cr(o,a),ce=["right","bottom"].indexOf(ue)!==-1?1:-1,Y=Nt(a),me=Y?`translate(${ce*H}px, 0)`:`translate(0, ${ce*H}px)`,be=E.current.style;be.webkitTransform=me,be.transform=me;let oe="";if(Z&&(oe=o.transitions.create("all",hr({easing:void 0,style:void 0,timeout:R},{mode:Z}))),re&&(be.webkitTransition=oe,be.transition=oe),!l&&!d){const ae=L.current.style;ae.opacity=1-H/ir(Y,E.current),re&&(ae.webkitTransition=oe,ae.transition=oe)}},[a,l,d,o,R]),j=xn(H=>{if(!N.current)return;if(Xn=null,N.current=!1,$(!1),!C.current.isSwiping){C.current.isSwiping=null;return}C.current.isSwiping=null;const te=cr(o,a),Z=Nt(a);let re;Z?re=_o(te,H.changedTouches,Rn(H.currentTarget)):re=Ho(te,H.changedTouches,St(H.currentTarget));const ue=Z?C.current.startX:C.current.startY,ce=ir(Z,E.current),Y=Bs(re,ue,h,ce),me=Y/ce;if(Math.abs(C.current.velocity)>m&&(z.current=Math.abs((ce-Y)/C.current.velocity)*1e3),h){C.current.velocity>m||me>f?v():q(0,{mode:"exit"});return}C.current.velocity<-m||1-me>f?g():q(ir(Z,E.current),{mode:"enter"})}),K=xn(H=>{if(!E.current||!N.current||Xn!==null&&Xn!==C.current)return;const te=cr(o,a),Z=Nt(a),re=_o(te,H.touches,Rn(H.currentTarget)),ue=Ho(te,H.touches,St(H.currentTarget));if(h&&E.current.contains(H.target)&&Xn===null){const oe=r0(H.target,E.current);if(o0({domTreeShapes:oe,start:Z?C.current.startX:C.current.startY,current:Z?re:ue,anchor:a})){Xn=!0;return}Xn=C.current}if(C.current.isSwiping==null){const oe=Math.abs(re-C.current.startX),ae=Math.abs(ue-C.current.startY),De=Z?oe>ae&&oe>Gr:ae>oe&&ae>Gr;if(De&&H.cancelable&&H.preventDefault(),De===!0||(Z?ae>Gr:oe>Gr)){if(C.current.isSwiping=De,!De){j(H);return}C.current.startX=re,C.current.startY=ue,!c&&!h&&(Z?C.current.startX-=Fo:C.current.startY-=Fo)}}if(!C.current.isSwiping)return;const ce=ir(Z,E.current);let Y=Z?C.current.startX:C.current.startY;h&&!C.current.paperHit&&(Y=Math.min(Y,ce));const me=Bs(Z?re:ue,Y,h,ce);if(h)if(C.current.paperHit)me===0&&(C.current.startX=re,C.current.startY=ue);else if(Z?re<ce:ue<ce)C.current.paperHit=!0,C.current.startX=re,C.current.startY=ue;else return;C.current.lastTranslate===null&&(C.current.lastTranslate=me,C.current.lastTime=performance.now()+1);const be=(me-C.current.lastTranslate)/(performance.now()-C.current.lastTime)*1e3;C.current.velocity=C.current.velocity*.4+be*.6,C.current.lastTranslate=me,C.current.lastTime=performance.now(),H.cancelable&&H.preventDefault(),q(me)}),W=xn(H=>{if(H.defaultPrevented||H.defaultMuiPrevented||h&&(d||!L.current.contains(H.target))&&!E.current.contains(H.target))return;const te=cr(o,a),Z=Nt(a),re=_o(te,H.touches,Rn(H.currentTarget)),ue=Ho(te,H.touches,St(H.currentTarget));if(!h){if(u||H.target!==P.current)return;if(Z){if(re>S)return}else if(ue>S)return}H.defaultMuiPrevented=!0,Xn=null,C.current.startX=re,C.current.startY=ue,$(!0),!h&&E.current&&q(ir(Z,E.current)+(c?15:-Fo),{changeTransition:!1}),C.current.velocity=0,C.current.lastTime=null,C.current.lastTranslate=null,C.current.paperHit=!1,N.current=!0});return k.exports.useEffect(()=>{if(T==="temporary"){const H=Rn(E.current);return H.addEventListener("touchstart",W),H.addEventListener("touchmove",K,{passive:!h}),H.addEventListener("touchend",j),()=>{H.removeEventListener("touchstart",W),H.removeEventListener("touchmove",K,{passive:!h}),H.removeEventListener("touchend",j)}}},[T,h,W,K,j]),k.exports.useEffect(()=>()=>{Xn===C.current&&(Xn=null)},[]),k.exports.useEffect(()=>{h||$(!1)},[h]),w(k.exports.Fragment,{children:[i($v,b({open:T==="temporary"&&D?!0:h,variant:T,ModalProps:b({BackdropProps:b({},p,{ref:L})},A),hideBackdrop:d,PaperProps:b({},x,{style:b({pointerEvents:T==="temporary"&&!h?"none":""},x.style),ref:E}),anchor:a,transitionDuration:z.current||R,onClose:v,ref:t},I)),!u&&T==="temporary"&&i(Jm,{children:i(e0,b({anchor:a,ref:P,width:S},y))})]})});var s0=a0;function l0(e){return Se("MuiSwitch",e)}const c0=ye("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]);var gn=c0;const u0=["className","color","edge","size","sx"],d0=e=>{const{classes:n,edge:t,size:r,color:o,checked:s,disabled:a}=e,l={root:["root",t&&`edge${B(t)}`,`size${B(r)}`],switchBase:["switchBase",`color${B(o)}`,s&&"checked",a&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},c=we(l,l0,n);return b({},n,c)},p0=_("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.edge&&n[`edge${B(t.edge)}`],n[`size${B(t.size)}`]]}})(({ownerState:e})=>b({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},e.edge==="start"&&{marginLeft:-8},e.edge==="end"&&{marginRight:-8},e.size==="small"&&{width:40,height:24,padding:7,[`& .${gn.thumb}`]:{width:16,height:16},[`& .${gn.switchBase}`]:{padding:4,[`&.${gn.checked}`]:{transform:"translateX(16px)"}}})),f0=_(Oi,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.switchBase,{[`& .${gn.input}`]:n.input},t.color!=="default"&&n[`color${B(t.color)}`]]}})(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.palette.mode==="light"?e.palette.common.white:e.palette.grey[300],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${gn.checked}`]:{transform:"translateX(20px)"},[`&.${gn.disabled}`]:{color:e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[600]},[`&.${gn.checked} + .${gn.track}`]:{opacity:.5},[`&.${gn.disabled} + .${gn.track}`]:{opacity:e.palette.mode==="light"?.12:.2},[`& .${gn.input}`]:{left:"-100%",width:"300%"}}),({theme:e,ownerState:n})=>b({"&:hover":{backgroundColor:Be(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},n.color!=="default"&&{[`&.${gn.checked}`]:{color:e.palette[n.color].main,"&:hover":{backgroundColor:Be(e.palette[n.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${gn.disabled}`]:{color:e.palette.mode==="light"?br(e.palette[n.color].main,.62):gr(e.palette[n.color].main,.55)}},[`&.${gn.checked} + .${gn.track}`]:{backgroundColor:e.palette[n.color].main}})),m0=_("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,n)=>n.track})(({theme:e})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.palette.mode==="light"?e.palette.common.black:e.palette.common.white,opacity:e.palette.mode==="light"?.38:.3})),h0=_("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,n)=>n.thumb})(({theme:e})=>({boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),g0=k.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiSwitch"}),{className:o,color:s="primary",edge:a=!1,size:l="medium",sx:c}=r,u=fe(r,u0),d=b({},r,{color:s,edge:a,size:l}),f=d0(d),m=i(h0,{className:f.thumb,ownerState:d});return w(p0,{className:Q(f.root,o),sx:c,ownerState:d,children:[i(f0,b({type:"checkbox",icon:m,checkedIcon:m,ref:t,ownerState:d},u,{classes:b({},f,{root:f.switchBase})})),i(m0,{className:f.track,ownerState:d})]})});var wr=g0;const b0=k.exports.createContext();var Bc=b0;function v0(e){return Se("MuiTable",e)}ye("MuiTable",["root","stickyHeader"]);const x0=["className","component","padding","size","stickyHeader"],y0=e=>{const{classes:n,stickyHeader:t}=e;return we({root:["root",t&&"stickyHeader"]},v0,n)},w0=_("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.stickyHeader&&n.stickyHeader]}})(({theme:e,ownerState:n})=>b({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":b({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},n.stickyHeader&&{borderCollapse:"separate"})),Es="table",C0=k.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiTable"}),{className:o,component:s=Es,padding:a="normal",size:l="medium",stickyHeader:c=!1}=r,u=fe(r,x0),d=b({},r,{component:s,padding:a,size:l,stickyHeader:c}),f=y0(d),m=k.exports.useMemo(()=>({padding:a,size:l,stickyHeader:c}),[a,l,c]);return i(Bc.Provider,{value:m,children:i(w0,b({as:s,role:s===Es?null:"table",ref:t,className:Q(f.root,o),ownerState:d},u))})});var ht=C0;const S0=k.exports.createContext();var So=S0;function k0(e){return Se("MuiTableBody",e)}ye("MuiTableBody",["root"]);const P0=["className","component"],R0=e=>{const{classes:n}=e;return we({root:["root"]},k0,n)},T0=_("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,n)=>n.root})({display:"table-row-group"}),A0={variant:"body"},Ms="tbody",$0=k.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiTableBody"}),{className:o,component:s=Ms}=r,a=fe(r,P0),l=b({},r,{component:s}),c=R0(l);return i(So.Provider,{value:A0,children:i(T0,b({className:Q(c.root,o),as:s,ref:t,role:s===Ms?null:"rowgroup",ownerState:l},a))})});var gt=$0;function D0(e){return Se("MuiTableCell",e)}const I0=ye("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]);var B0=I0;const E0=["align","className","component","padding","scope","size","sortDirection","variant"],M0=e=>{const{classes:n,variant:t,align:r,padding:o,size:s,stickyHeader:a}=e,l={root:["root",t,a&&"stickyHeader",r!=="inherit"&&`align${B(r)}`,o!=="normal"&&`padding${B(o)}`,`size${B(s)}`]};return we(l,D0,n)},L0=_("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[t.variant],n[`size${B(t.size)}`],t.padding!=="normal"&&n[`padding${B(t.padding)}`],t.align!=="inherit"&&n[`align${B(t.align)}`],t.stickyHeader&&n.stickyHeader]}})(({theme:e,ownerState:n})=>b({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:`1px solid
    ${e.palette.mode==="light"?br(Be(e.palette.divider,1),.88):gr(Be(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},n.variant==="head"&&{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},n.variant==="body"&&{color:e.palette.text.primary},n.variant==="footer"&&{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},n.size==="small"&&{padding:"6px 16px",[`&.${B0.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},n.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},n.padding==="none"&&{padding:0},n.align==="left"&&{textAlign:"left"},n.align==="center"&&{textAlign:"center"},n.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},n.align==="justify"&&{textAlign:"justify"},n.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:e.palette.background.default})),O0=k.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiTableCell"}),{align:o="inherit",className:s,component:a,padding:l,scope:c,size:u,sortDirection:d,variant:f}=r,m=fe(r,E0),p=k.exports.useContext(Bc),v=k.exports.useContext(So),g=v&&v.variant==="head";let h;a?h=a:h=g?"th":"td";let x=c;!x&&g&&(x="col");const y=f||v&&v.variant,S=b({},r,{align:o,component:h,padding:l||(p&&p.padding?p.padding:"normal"),size:u||(p&&p.size?p.size:"medium"),sortDirection:d,stickyHeader:y==="head"&&p&&p.stickyHeader,variant:y}),R=M0(S);let T=null;return d&&(T=d==="asc"?"ascending":"descending"),i(L0,b({as:h,ref:t,className:Q(R.root,s),"aria-sort":T,scope:x,ownerState:S},m))});var je=O0;function N0(e){return Se("MuiTableContainer",e)}ye("MuiTableContainer",["root"]);const z0=["className","component"],F0=e=>{const{classes:n}=e;return we({root:["root"]},N0,n)},_0=_("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,n)=>n.root})({width:"100%",overflowX:"auto"}),H0=k.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiTableContainer"}),{className:o,component:s="div"}=r,a=fe(r,z0),l=b({},r,{component:s}),c=F0(l);return i(_0,b({ref:t,as:s,className:Q(c.root,o),ownerState:l},a))});var Ls=H0;function W0(e){return Se("MuiTableHead",e)}ye("MuiTableHead",["root"]);const V0=["className","component"],j0=e=>{const{classes:n}=e;return we({root:["root"]},W0,n)},U0=_("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,n)=>n.root})({display:"table-header-group"}),q0={variant:"head"},Os="thead",G0=k.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiTableHead"}),{className:o,component:s=Os}=r,a=fe(r,V0),l=b({},r,{component:s}),c=j0(l);return i(So.Provider,{value:q0,children:i(U0,b({as:s,className:Q(c.root,o),ref:t,role:s===Os?null:"rowgroup",ownerState:l},a))})});var Ns=G0;function Y0(e){return Se("MuiToolbar",e)}ye("MuiToolbar",["root","gutters","regular","dense"]);const K0=["className","component","disableGutters","variant"],Q0=e=>{const{classes:n,disableGutters:t,variant:r}=e;return we({root:["root",!t&&"gutters",r]},Y0,n)},J0=_("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,!t.disableGutters&&n.gutters,n[t.variant]]}})(({theme:e,ownerState:n})=>b({position:"relative",display:"flex",alignItems:"center"},!n.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}},n.variant==="dense"&&{minHeight:48}),({theme:e,ownerState:n})=>n.variant==="regular"&&e.mixins.toolbar),X0=k.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiToolbar"}),{className:o,component:s="div",disableGutters:a=!1,variant:l="regular"}=r,c=fe(r,K0),u=b({},r,{component:s,disableGutters:a,variant:l}),d=Q0(u);return i(J0,b({as:s,className:Q(d.root,o),ref:t,ownerState:u},c))});var zs=X0;function Z0(e){return Se("MuiTableRow",e)}const ex=ye("MuiTableRow",["root","selected","hover","head","footer"]);var Fs=ex;const nx=["className","component","hover","selected"],tx=e=>{const{classes:n,selected:t,hover:r,head:o,footer:s}=e;return we({root:["root",t&&"selected",r&&"hover",o&&"head",s&&"footer"]},Z0,n)},rx=_("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.head&&n.head,t.footer&&n.footer]}})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${Fs.hover}:hover`]:{backgroundColor:e.palette.action.hover},[`&.${Fs.selected}`]:{backgroundColor:Be(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:Be(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),_s="tr",ox=k.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiTableRow"}),{className:o,component:s=_s,hover:a=!1,selected:l=!1}=r,c=fe(r,nx),u=k.exports.useContext(So),d=b({},r,{component:s,hover:a,selected:l,head:u&&u.variant==="head",footer:u&&u.variant==="footer"}),f=tx(d);return i(rx,b({as:s,ref:t,className:Q(f.root,o),role:s===_s?null:"row",ownerState:d},c))});var nt=ox;function ix(e){return Se("MuiTextField",e)}ye("MuiTextField",["root"]);const ax=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],sx={standard:zn,filled:Md,outlined:Ld},lx=e=>{const{classes:n}=e;return we({root:["root"]},ix,n)},cx=_(mn,{name:"MuiTextField",slot:"Root",overridesResolver:(e,n)=>n.root})({}),ux=k.exports.forwardRef(function(n,t){const r=Ce({props:n,name:"MuiTextField"}),{autoComplete:o,autoFocus:s=!1,children:a,className:l,color:c="primary",defaultValue:u,disabled:d=!1,error:f=!1,FormHelperTextProps:m,fullWidth:p=!1,helperText:v,id:g,InputLabelProps:h,inputProps:x,InputProps:y,inputRef:S,label:R,maxRows:T,minRows:A,multiline:I=!1,name:D,onBlur:$,onChange:C,onFocus:P,placeholder:L,required:E=!1,rows:N,select:z=!1,SelectProps:q,type:j,value:K,variant:W="outlined"}=r,H=fe(r,ax),te=b({},r,{autoFocus:s,color:c,disabled:d,error:f,fullWidth:p,multiline:I,required:E,select:z,variant:W}),Z=lx(te),re={};W==="outlined"&&(h&&typeof h.shrink!="undefined"&&(re.notched=h.shrink),re.label=R),z&&((!q||!q.native)&&(re.id=void 0),re["aria-describedby"]=void 0);const ue=Ar(g),ce=v&&ue?`${ue}-helper-text`:void 0,Y=R&&ue?`${ue}-label`:void 0,me=sx[W],be=i(me,b({"aria-describedby":ce,autoComplete:o,autoFocus:s,defaultValue:u,fullWidth:p,multiline:I,name:D,rows:N,maxRows:T,minRows:A,type:j,value:K,id:ue,inputRef:S,onBlur:$,onChange:C,onFocus:P,placeholder:L,inputProps:x},re,y));return w(cx,b({className:Q(Z.root,l),disabled:d,error:f,fullWidth:p,ref:t,required:E,color:c,variant:W,ownerState:te},H,{children:[R!=null&&R!==""&&i(Nn,b({htmlFor:ue,id:Y},h,{children:R})),z?i(ct,b({"aria-describedby":ce,id:ue,labelId:Y,value:K,input:be},q,{children:a})):be,v&&i($c,b({id:ce},m,{children:v}))]}))});var Kn=ux,Fi={},qe={exports:{}};(function(e){function n(t){return t&&t.__esModule?t:{default:t}}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports})(qe);var Ge={},dx=_l(fh);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=dx})(Ge);var px=qe.exports;Object.defineProperty(Fi,"__esModule",{value:!0});var Ec=Fi.default=void 0;hx(k.exports);var fx=px(Ge),mx=Ke;function Mc(e){if(typeof WeakMap!="function")return null;var n=new WeakMap,t=new WeakMap;return(Mc=function(r){return r?t:n})(e)}function hx(e,n){if(!n&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var t=Mc(n);if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var a=o?Object.getOwnPropertyDescriptor(e,s):null;a&&(a.get||a.set)?Object.defineProperty(r,s,a):r[s]=e[s]}return r.default=e,t&&t.set(e,r),r}var gx=(0,fx.default)((0,mx.jsx)("path",{d:"M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"}),"GitHub");Ec=Fi.default=gx;var _i={},bx=qe.exports;Object.defineProperty(_i,"__esModule",{value:!0});var ai=_i.default=void 0,vx=bx(Ge),xx=Ke,yx=(0,vx.default)((0,xx.jsx)("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");ai=_i.default=yx;const wx={"GraphQL ID":"presetAffixes",list:[{name:"Power DPS",value:`{
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
}`}]},Cx={"GraphQL ID":"presetBuffs",list:[{name:"None",value:"{ }"},{name:"Condi",value:`{
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
}`}]},Sx={"GraphQL ID":"presetDistribution",list:[{name:"None",value:`{
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
}`}]},kx={"GraphQL ID":"presetExtras",list:[{name:"Power (Fractal)",value:`{
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
}`}]},Px={"GraphQL ID":"presetInfusions",list:[{name:"None",value:`{
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
}`}]},Rx={"GraphQL ID":"presetTraits",list:[{name:"Power Chrono IA",profession:"Chronomancer",traits:`{
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
}`}]},Tx={"GraphQL ID":"templates",list:[{class:"Mesmer",builds:[{name:"Power Chrono IA",id:"pchrono",specialization:"Chronomancer",boons:"Power (spotter)",priority:"Power DPS",distribution:"Power Chrono IA",traits:"Power Chrono IA",extras:"Power (Fractal)"},{name:"Alacrity Mirage",id:"alacmirage",specialization:"Mirage",boons:"Condi",priority:"Condi DPS",distribution:"Staff Mirage",traits:"Staff Mirage",extras:"Alacrity Mirage (Raid)"},{name:"Axe Mirage",id:"axe-mirage-deception-torch",specialization:"Mirage",boons:"Condi",priority:"Condi DPS",distribution:"Axe Mirage (Deception Torch)",traits:"Axe Mirage",extras:"DPS Mirage (Raid)"},{name:"Condi Chrono STM",id:"condi-chrono-stm",specialization:"Chronomancer",boons:"Condi",priority:"Condi DPS",distribution:"Condi Chrono STM",traits:"Condi Chrono STM",extras:"Condi Chrono STM"},{name:"Power Virtuoso",id:"pvirt",specialization:"Virtuoso",boons:"Power (spotter)",priority:"Power DPS",distribution:"Power Virtuoso",traits:"Power Virtuoso (no accuracy)",extras:"Power (Fractal)"},{name:"Condi Virtuoso",id:"cvirt",specialization:"Virtuoso",boons:"Condi",priority:"Condi DPS Rampager",distribution:"Condi Virtuoso",traits:"Condi Virtuoso",extras:"Condi Virtuoso"},{name:"Condi Virtuoso (sharpening sorrow)",id:"cvirt-sorrow",specialization:"Virtuoso",boons:"Condi",priority:"Condi DPS Rampager",distribution:"Condi Virtuoso (sharpening sorrow)",traits:"Condi Virtuoso (sharpening sorrow)",extras:"Condi Virtuoso"}]},{class:"Guardian",builds:[{name:"DH Radiance w/ PI",id:"dh-radiance-pi",specialization:"Dragonhunter",boons:"Power (spotter)",priority:"Power DPS",distribution:"DH Radiance",traits:"DH Radiance w/ PI",extras:"Power (Fractal)"},{name:"DH Radiance",id:"dh-radiance",specialization:"Dragonhunter",boons:"Power (spotter)",priority:"Power DPS",distribution:"DH Radiance",traits:"DH Radiance",extras:"Power (Fractal)"},{name:"DH Virtues",id:"dh-virtues",specialization:"Dragonhunter",boons:"Power (spotter)",priority:"Power DPS",distribution:"DH Virtues",traits:"DH Virtues",extras:"DH Virtues (Fractal)"},{name:"Core Guardian",id:"core-guard",specialization:"Guardian",boons:"Power (spotter)",priority:"Power DPS",distribution:"Core Guardian",traits:"Core Guardian",extras:"Power (Fractal)"},{name:"Power Willbender Virtues",id:"pwb-virtues",specialization:"Willbender",boons:"Power (spotter)",priority:"Power DPS",distribution:"Power Willbender Virtues",traits:"Power Willbender Virtues",extras:"Power Willbender Virtues (Fractal)"},{name:"Power Willbender Radiance",id:"pwb-radiance",specialization:"Willbender",boons:"Power (spotter)",priority:"Power DPS",distribution:"Power Willbender Radiance",traits:"Power Willbender Radiance",extras:"Power (Fractal)"},{name:"Power Alacrity Willbender",id:"pwb-alac",specialization:"Willbender",boons:"Power (spotter)",priority:"Power DPS",distribution:"Power Alacrity Willbender",traits:"Power Alacrity Willbender",extras:"Power Willbender Virtues (Fractal)"},{name:"Power Quickbrand",id:"pqfb",specialization:"Firebrand",boons:"Power (spotter)",priority:"Power Quickbrand 25%",distribution:"Power Quickbrand (approx.)",traits:"Power Quickbrand",extras:"Power (Fractal)"},{name:"Condi Willbender Sword",id:"cwb-sw",specialization:"Willbender",boons:"Condi",priority:"Hybrid DPS",distribution:"Condi Willbender Sword",traits:"Condi Willbender",extras:"Condi Willbender"},{name:"Condi Willbender GS",id:"cwb-gs",specialization:"Willbender",boons:"Condi",priority:"Hybrid DPS",distribution:"Condi Willbender GS",traits:"Condi Willbender",extras:"Condi Willbender"},{name:"Condi Alacrity Willbender",id:"cwb-alac",specialization:"Willbender",boons:"Condi",priority:"Condi Alacrity Willbender 19%",distribution:"Condi Alacrity Willbender",traits:"Condi Alacrity Willbender",extras:"Condi Alacrity Willbender"},{name:"CFB DPS 5 page (balthazar)",id:"cfb-geo",specialization:"Firebrand",boons:"Condi",priority:"Condi DPS",distribution:"CFB (5 page RF, allies)",traits:"CFB DPS 5 page",extras:"CFB DPS (5 page, balthazar)"},{name:"CFB DPS 5 page (renegade)",id:"cfb-smoldering",specialization:"Firebrand",boons:"Condi",priority:"Condi DPS",distribution:"CFB (5 page RF, allies)",traits:"CFB DPS 5 page",extras:"CFB DPS (renegade)"},{name:"CFB DPS 8 page (balthazar)",id:"cfb-8-balth",specialization:"Firebrand",boons:"Condi",priority:"Condi DPS",distribution:"CFB (8 page, allies)",traits:"CFB DPS 8 page",extras:"CFB DPS (8 page, balthazar)"},{name:"CFB DPS 8 page (renegade)",id:"cfb-8-ren",specialization:"Firebrand",boons:"Condi",priority:"Condi DPS",distribution:"CFB (8 page, allies)",traits:"CFB DPS 8 page",extras:"CFB DPS (renegade)"},{name:"Condi Quickbrand 49%",id:"cqfb-firebrand-49",specialization:"Firebrand",boons:"Condi",priority:"Condi Quickbrand 49",distribution:"Condi Quickbrand (allies)",traits:"Condi Quickbrand",extras:"Condi Quickbrand"},{name:"Hybrid FB Virtues",id:"hycfb-virtues-leadership",specialization:"Firebrand",boons:"Condi",priority:"Condi Hybrid Firebrand 40%",distribution:"Hybrid FB Virtues",traits:"Hybrid FB Virtues",extras:"Hybrid FB Traveler"},{name:"Hybrid FB Honor",id:"hycfb-honor-leadership",specialization:"Firebrand",boons:"Condi",priority:"Condi Hybrid Firebrand 40%",distribution:"Hybrid FB Honor",traits:"Hybrid FB Honor",extras:"Hybrid FB Traveler"},{name:"Healbrand",id:"hb",specialization:"Firebrand",boons:"Power (spotter)",priority:"Heal",distribution:"None",traits:"Healbrand",extras:"Heal"}]},{class:"Warrior",builds:[{name:"Power Banner Bers",id:"pbers",specialization:"Berserker",boons:"Power (spotter)",priority:"Power DPS",distribution:"Power Banner Bers Strength",traits:"Power Banner Bers Strength",extras:"Power (Fractal)"},{name:"Condi Banner Bers",id:"cbers",specialization:"Berserker",boons:"Condi",priority:"Condi DPS",distribution:"Condi Banner Bers",traits:"Condi Bers",extras:"Condi Bers"},{name:"Banner Bladesworn",id:"bls-bs",specialization:"Bladesworn",boons:"Power (spotter)",priority:"Power DPS",distribution:"Bladesworn",traits:"Banner Bladesworn",extras:"Power (Fractal)"},{name:"DPS Bladesworn",id:"bls-dps",specialization:"Bladesworn",boons:"Power (spotter)",priority:"Power DPS",distribution:"Bladesworn",traits:"DPS Bladesworn",extras:"Power (Fractal)"},{name:"Might Bladesworn",id:"bls-might",specialization:"Bladesworn",boons:"Power (spotter)",priority:"Power DPS",distribution:"Bladesworn",traits:"Might Bladesworn",extras:"Power (Fractal)"},{name:"Power Banner SPB",id:"spb-bs",specialization:"Spellbreaker",boons:"Power (spotter)",priority:"Power DPS",distribution:"Power Banner Spellbreaker",traits:"Power Banner SPB",extras:"Power (Fractal)"}]},{class:"Elementalist",builds:[{name:"Power Weaver",id:"pwea",specialization:"Weaver",boons:"Power (spotter)",priority:"Power DPS",distribution:"Power Weaver (BTTH, small)",traits:"Power Weaver Stormsoul",extras:"Power (Fractal)"},{name:"Condi Weaver Sword",id:"cwea-sw",specialization:"Weaver",boons:"Condi",priority:"Condi DPS",distribution:"Condi Weaver Sword",traits:"Condi Weaver Sword",extras:"Condi Weaver Sword"},{name:"Condi Weaver Dagger",id:"cwea-dg",specialization:"Weaver",boons:"Condi",priority:"Condi DPS",distribution:"Condi Weaver (Dagger)",traits:"Condi Weaver Dagger",extras:"Condi Weaver Dagger"},{name:"Hybrid Weaver",id:"hwea",specialization:"Weaver",boons:"Condi",priority:"Hybrid DPS",distribution:"Hybrid Weaver",traits:"Hybrid Weaver",extras:"Hybrid Weaver (Fractal)"},{name:"Condi Tempest",id:"ctemp",specialization:"Tempest",boons:"Condi",priority:"Condi DPS",distribution:"Condi Tempest",traits:"Condi Tempest",extras:"Condi Tempest"},{name:"Power Tempest (approx.)",id:"ptemp",specialization:"Tempest",boons:"Power (spotter)",priority:"Power DPS",distribution:"Power Tempest",traits:"Power Tempest",extras:"Power (Fractal)"},{name:"Heal Tempest",id:"healtemp",specialization:"Tempest",boons:"Power (spotter)",priority:"Heal",distribution:"None",traits:"Heal Tempest",extras:"Heal"},{name:"[beta2] Power Catalyst",id:"power-cat",specialization:"Catalyst",boons:"Power (spotter)",priority:"Power DPS",distribution:"[beta2] Power Catalyst",traits:"[beta2] Power Catalyst",extras:"Power (Fractal)"},{name:"[beta2] Power Quickness Catalyst",id:"power-cat-quick",specialization:"Catalyst",boons:"Power (spotter)",priority:"Power DPS",distribution:"[beta2] Power Catalyst",traits:"[beta2] Power Quickness Catalyst",extras:"Power (Fractal)"},{name:"[beta1] Condi Catalyst",id:"condi-cat",specialization:"Catalyst",boons:"Condi",priority:"Condi DPS",distribution:"[beta1] Condi Catalyst",traits:"[beta1] Condi Catalyst",extras:"[beta1] Condi Catalyst"}]},{class:"Ranger",builds:[{name:"Power Slb Marks",id:"pslb",specialization:"Soulbeast",boons:"Power (spotter)",priority:"Power DPS",distribution:"Power Slb Skirm",traits:"Power Slb Marks",extras:"Power (Fractal)"},{name:"Condi Slb SB",id:"cslb-sb",specialization:"Soulbeast",boons:"Condi",priority:"Condi DPS",distribution:"Condi Slb (D/T SB)",traits:"Condi Slb SB",extras:"Condi Slb"},{name:"Condi Slb D/T A/D",id:"cslb-dtad",specialization:"Soulbeast",boons:"Condi",priority:"Condi DPS",distribution:"Condi Slb (D/T A/D)",traits:"Condi Slb D/T A/D",extras:"Condi Slb"},{name:"Hybrid Slb",id:"hslb",specialization:"Soulbeast",boons:"Condi",priority:"Hybrid DPS",distribution:"Hybrid Slb (A/T D/A)",traits:"Hybrid Slb",extras:"Hybrid Slb"},{name:"Condi Druid",id:"condidruid",specialization:"Druid",boons:"Power (spotter)",priority:"Condi Hybrid Druid 52%",distribution:"Condi Druid (approx.)",traits:"Condi Druid",extras:"Condi Druid"},{name:"Heal Druid",id:"druid",specialization:"Druid",boons:"Power (spotter)",priority:"Heal",distribution:"None",traits:"Heal Druid",extras:"Heal"}]},{class:"Revenant",builds:[{name:"Vindicator",id:"vindi",specialization:"Vindicator",boons:"Power (spotter)",priority:"Power DPS",distribution:"DPS Vindicator",traits:"DPS Vindicator",extras:"DPS Vindicator"},{name:"Condi DPS Ren Invo",id:"cren-invo",specialization:"Renegade",boons:"Condi",priority:"Condi DPS",distribution:"Condi Renegade Invocation",traits:"Condi DPS Ren Invo",extras:"Condi Ren"},{name:"Condi Alac Ren Invo",id:"cren-alac-invo",specialization:"Renegade",boons:"Condi",priority:"Condi Alacrity Renegade 78%",distribution:"Condi Alac Invocation",traits:"Condi Alac Ren Invo",extras:"Condi Alac Ren"},{name:"Power Alac Ren (outdated)",id:"pren",specialization:"Renegade",boons:"Power (spotter)",priority:"Power Boon",distribution:"Alacrity Renegade",traits:"Power Alac Ren",extras:"Power (Fractal)"},{name:"Power Herald DE (outdated)",id:"herald",specialization:"Herald",boons:"Power (spotter)",priority:"Power DPS",distribution:"Power Herald DE",traits:"Power Herald DE",extras:"Power (Fractal)"},{name:"Condi Herald (outdated)",id:"cherald",specialization:"Herald",boons:"Condi",priority:"Condi DPS",distribution:"Condi Herald",traits:"Condi Herald",extras:"Condi Herald"},{name:"Heal Ren",id:"healren",specialization:"Renegade",boons:"Power (spotter)",priority:"Heal",distribution:"None",traits:"Heal Ren",extras:"Heal"}]},{class:"Engineer",builds:[{name:"Power Holo ECSU",id:"pholo-ecsu",specialization:"Holosmith",boons:"Power (spotter)",priority:"Power DPS",distribution:"Power Holo ECSU",traits:"Power Holo ECSU",extras:"Power (Fractal)"},{name:"Condi Holo",id:"cholo",specialization:"Holosmith",boons:"Condi",priority:"Condi DPS",distribution:"Condi Holo",traits:"Condi Holo",extras:"Condi Holo"},{name:"Power Scrapper",id:"pscrap",specialization:"Scrapper",boons:"Power (spotter)",priority:"Power DPS",distribution:"Power Scrapper",traits:"Power Scrapper",extras:"Power (Fractal)"},{name:"Quickness Scrapper",id:"qscrap",specialization:"Scrapper",boons:"Power (spotter)",priority:"Power Quickness Scrapper 33.3%",distribution:"Quickness Scrapper",traits:"Quickness Scrapper",extras:"Power (Fractal)"},{name:"Heal Scrapper",id:"healscrapper",specialization:"Scrapper",boons:"Power (spotter)",priority:"Heal",distribution:"None",traits:"Heal Scrapper",extras:"Heal"},{name:"Condi Mechanist J-Drive (approx.)",id:"cmech-sig-mace",specialization:"Mechanist",boons:"Condi",priority:"Condi DPS",distribution:"Condi Mechanist J-Drive Mace (approx.)",traits:"Condi Mechanist J-Drive",extras:"Condi Mechanist"},{name:"Condi Mechanist Jade Dynamo (approx.)",id:"cmech-dynamo-pistol",specialization:"Mechanist",boons:"Condi",priority:"Condi DPS",distribution:"Condi Mechanist Jade Dynamo Pistol (approx.)",traits:"Condi Mechanist Jade Dynamo",extras:"Condi Mechanist"}]},{class:"Necromancer",builds:[{name:"DPS Scourge",id:"scourge",specialization:"Scourge",boons:"Condi",priority:"Condi DPS",distribution:"Condi Scourge",traits:"DPS Scourge",extras:"DPS Scourge"},{name:"Condi Reaper",id:"creaper",specialization:"Reaper",boons:"Condi",priority:"Hybrid DPS",distribution:"Condi Reaper",traits:"Condi Reaper",extras:"Condi Reaper"},{name:"DPS Harbinger",id:"charb",specialization:"Harbinger",boons:"Condi",priority:"Viper Only",distribution:"DPS Harbinger",traits:"DPS Harbinger",extras:"DPS Harbinger"},{name:"Quickness Harbinger",id:"qharb",specialization:"Harbinger",boons:"Condi",priority:"Condi Quickness Harbinger 23%",distribution:"Quickness Harbinger",traits:"Quickness Harbinger",extras:"Quickness Harbinger"}]},{class:"Thief",builds:[{name:"Condi Deadeye",id:"cded",specialization:"Deadeye",boons:"Condi",priority:"Condi DPS",distribution:"Condi Deadeye",traits:"Condi Deadeye",extras:"Condi Deadeye"},{name:"Staff Daredevil",id:"staffdd",specialization:"Daredevil",boons:"Power (spotter)",priority:"Power DPS",distribution:"Staff Daredevil",traits:"Staff Daredevil",extras:"Power (Fractal)"},{name:"Power Boon Daredevil",id:"boondd-power",specialization:"Daredevil",boons:"Power (spotter)",priority:"Power Boon Daredevil 99.7%",distribution:"Staff Daredevil",traits:"Power Boon Daredevil",extras:"Power Boon Daredevil"},{name:"Condi Daredevil",id:"cdd",specialization:"Daredevil",boons:"Condi",priority:"Condi DPS",distribution:"Condi Daredevil",traits:"Condi Daredevil",extras:"Condi Daredevil"},{name:"Condi Boon Daredevil",id:"boondd-condi",specialization:"Daredevil",boons:"Condi",priority:"Condi Boon Daredevil 62%",distribution:"None",traits:"Condi Boon Daredevil",extras:"Condi Boon Daredevil"},{name:"Rifle Deadeye",id:"rifleded",specialization:"Deadeye",boons:"Power (spotter)",priority:"Power DPS",distribution:"Rifle Deadeye",traits:"Rifle Deadeye",extras:"Power (Fractal)"},{name:"DPS Specter",id:"specter",specialization:"Specter",boons:"Condi",priority:"Condi DPS",distribution:"DPS Specter (allies)",traits:"DPS Specter",extras:"DPS Specter"},{name:"Alacrity Specter",id:"specter-alac",specialization:"Specter",boons:"Condi",priority:"Condi Alacrity Specter 57%",distribution:"Alacrity Specter (allies)",traits:"Alacrity Specter",extras:"Alacrity Specter"}]}]};var Hi={},Ax=qe.exports;Object.defineProperty(Hi,"__esModule",{value:!0});var Lc=Hi.default=void 0,$x=Ax(Ge),Dx=Ke,Ix=(0,$x.default)((0,Dx.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");Lc=Hi.default=Ix;var Wi={},Bx=qe.exports;Object.defineProperty(Wi,"__esModule",{value:!0});var Ir=Wi.default=void 0,Ex=Bx(Ge),Mx=Ke,Lx=(0,Ex.default)((0,Mx.jsx)("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"}),"Share");Ir=Wi.default=Lx;var $n={},Sn={};Object.defineProperty(Sn,"__esModule",{value:!0});Sn.createPopupState=Fx;Sn.anchorRef=_x;Sn.bindTrigger=Hx;Sn.bindContextMenu=Wx;Sn.bindToggle=Vx;Sn.bindHover=jx;Sn.bindFocus=Ux;Sn.bindPopover=qx;Sn.bindMenu=Gx;Sn.bindPopper=Yx;Sn.initCoreState=void 0;Ox(k.exports);function Oc(e){if(typeof WeakMap!="function")return null;var n=new WeakMap,t=new WeakMap;return(Oc=function(r){return r?t:n})(e)}function Ox(e,n){if(!n&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var t=Oc(n);if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var a=o?Object.getOwnPropertyDescriptor(e,s):null;a&&(a.get||a.set)?Object.defineProperty(r,s,a):r[s]=e[s]}return r.default=e,t&&t.set(e,r),r}const Hs={};function Nx(e,n){Hs[e]||(Hs[e]=!0,console.error("[material-ui-popup-state] WARNING",n))}const zx={isOpen:!1,setAnchorElUsed:!1,anchorEl:null,hovered:!1,focused:!1,_childPopupState:null,_deferNextOpen:!1,_deferNextClose:!1};Sn.initCoreState=zx;function Fx({state:e,setState:n,parentPopupState:t,popupId:r,variant:o,disableAutoFocus:s}){const{isOpen:a,setAnchorElUsed:l,anchorEl:c,hovered:u,focused:d,_childPopupState:f,_deferNextOpen:m,_deferNextClose:p}=e;let v=e;const g=D=>{Qx(v,D)&&n(v=pe(pe({},v),D))},h=D=>{g({setAnchorElUsed:!0,anchorEl:D})},x=D=>{a?S(D):y(D)},y=D=>{const $=D&&D.type,C=D&&D.currentTarget;if($==="touchstart"){g({_deferNextOpen:!0});return}const P=()=>{if(!D&&!l&&Nx("missingEventOrAnchorEl","eventOrAnchorEl should be defined if setAnchorEl is not used"),t){if(!t.isOpen)return;t._setChildPopupState(I)}const L={isOpen:!0,hovered:$==="mouseover",focused:$==="focus"};C?l||(L.anchorEl=C):D&&(L.anchorEl=D),g(L)};m?(g({_deferNextOpen:!1}),setTimeout(P,0)):P()},S=D=>{switch(D&&D.type){case"touchstart":g({_deferNextClose:!0});return;case"blur":if(si(D==null?void 0:D.relatedTarget,I))return;break}const C=()=>{f&&f.close(),t&&t._setChildPopupState(null),g({isOpen:!1,hovered:!1,focused:!1})};p?(g({_deferNextClose:!1}),setTimeout(C,0)):C()},R=(D,$)=>{D?y($):S($)},T=D=>{const $=D.relatedTarget;u&&!si($,I)&&S(D)},A=D=>g({_childPopupState:D}),I={anchorEl:c,setAnchorEl:h,setAnchorElUsed:l,popupId:r,variant:o,isOpen:a,open:y,close:S,toggle:x,setOpen:R,onMouseLeave:T,disableAutoFocus:s!=null?s:Boolean(u||d),_childPopupState:f,_setChildPopupState:A};return I}function _x({setAnchorEl:e}){return n=>{n&&e(n)}}function Hx({isOpen:e,open:n,popupId:t,variant:r}){return{[r==="popover"?"aria-controls":"aria-describedby"]:e?t:null,"aria-haspopup":r==="popover"?!0:void 0,onClick:n,onTouchStart:n}}function Wx({isOpen:e,open:n,popupId:t,variant:r}){return{[r==="popover"?"aria-controls":"aria-describedby"]:e?t:null,"aria-haspopup":r==="popover"?!0:void 0,onContextMenu:o=>{o.preventDefault(),n(o)}}}function Vx({isOpen:e,toggle:n,popupId:t,variant:r}){return{[r==="popover"?"aria-controls":"aria-describedby"]:e?t:null,"aria-haspopup":r==="popover"?!0:void 0,onClick:n,onTouchStart:n}}function jx({isOpen:e,open:n,onMouseLeave:t,popupId:r,variant:o}){return{[o==="popover"?"aria-controls":"aria-describedby"]:e?r:null,"aria-haspopup":o==="popover"?!0:void 0,onTouchStart:n,onMouseOver:n,onMouseLeave:t}}function Ux({isOpen:e,open:n,close:t,popupId:r,variant:o}){return{[o==="popover"?"aria-controls":"aria-describedby"]:e?r:null,"aria-haspopup":o==="popover"?!0:void 0,onFocus:n,onBlur:t}}function qx({isOpen:e,anchorEl:n,close:t,popupId:r,onMouseLeave:o,disableAutoFocus:s}){return pe({id:r,anchorEl:n,open:e,onClose:t,onMouseLeave:o},s&&{disableAutoFocus:!0,disableEnforceFocus:!0,disableRestoreFocus:!0})}function Gx({isOpen:e,anchorEl:n,close:t,popupId:r,onMouseLeave:o,disableAutoFocus:s}){return pe({id:r,anchorEl:n,open:e,onClose:t,onMouseLeave:o},s&&{autoFocus:!1,disableAutoFocusItem:!0,disableAutoFocus:!0,disableEnforceFocus:!0,disableRestoreFocus:!0})}function Yx({isOpen:e,anchorEl:n,popupId:t,onMouseLeave:r}){return{id:t,anchorEl:n,open:e,onMouseLeave:r}}function Kx({popupId:e}){return e&&typeof document!="undefined"?document.getElementById(e):null}function si(e,n){const{anchorEl:t,_childPopupState:r}=n;return Ws(t,e)||Ws(Kx(n),e)||r!=null&&si(e,r)}function Ws(e,n){if(!e)return!1;for(;n;){if(n===e)return!0;n=n.parentElement}return!1}function Qx(e,n){for(let t in n)if(Object.prototype.hasOwnProperty.call(e,t)&&e[t]!==n[t])return!0;return!1}(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.usePopupState=r,Object.defineProperty(e,"anchorRef",{enumerable:!0,get:function(){return t.anchorRef}}),Object.defineProperty(e,"bindTrigger",{enumerable:!0,get:function(){return t.bindTrigger}}),Object.defineProperty(e,"bindContextMenu",{enumerable:!0,get:function(){return t.bindContextMenu}}),Object.defineProperty(e,"bindToggle",{enumerable:!0,get:function(){return t.bindToggle}}),Object.defineProperty(e,"bindHover",{enumerable:!0,get:function(){return t.bindHover}}),Object.defineProperty(e,"bindFocus",{enumerable:!0,get:function(){return t.bindFocus}}),Object.defineProperty(e,"bindMenu",{enumerable:!0,get:function(){return t.bindMenu}}),Object.defineProperty(e,"bindPopover",{enumerable:!0,get:function(){return t.bindPopover}}),Object.defineProperty(e,"bindPopper",{enumerable:!0,get:function(){return t.bindPopper}});var n=k.exports,t=Sn;if(!n.useState)throw new Error("React.useState (added in 16.8.0) must be defined to use the hooks API");function r({parentPopupState:o,popupId:s,variant:a,disableAutoFocus:l}){const[c,u]=(0,n.useState)(t.initCoreState);return(0,n.useEffect)(()=>{if(!l&&s&&typeof document=="object"){const d=document.getElementById(s);d&&d.focus()}},[s,c.anchorEl]),(0,n.useMemo)(()=>(0,t.createPopupState)({state:c,setState:u,parentPopupState:o,popupId:s,variant:a,disableAutoFocus:l}),[c,u,o,s,a,l])}})($n);var Vi={},ji={};Object.defineProperty(ji,"__esModule",{value:!0});ji.default=Xx;var Vs=Jx(k.exports);function Nc(e){if(typeof WeakMap!="function")return null;var n=new WeakMap,t=new WeakMap;return(Nc=function(r){return r?t:n})(e)}function Jx(e,n){if(!n&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var t=Nc(n);if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var a=o?Object.getOwnPropertyDescriptor(e,s):null;a&&(a.get||a.set)?Object.defineProperty(r,s,a):r[s]=e[s]}return r.default=e,t&&t.set(e,r),r}function li(){return li=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},li.apply(this,arguments)}function Xx(e){return Vs.forwardRef((s,o)=>{var a=s,{PaperProps:n,style:t}=a,r=Lr(a,["PaperProps","style"]);return Vs.createElement(e,li({},r,{ref:o,style:pe({pointerEvents:"none"},t),PaperProps:Ve(pe({},n),{style:pe({pointerEvents:"auto"},n==null?void 0:n.style)})}))})}var Zx=_l(c1);Object.defineProperty(Vi,"__esModule",{value:!0});var zc=Vi.default=void 0;ty(k.exports);var ey=Fc(ji),ny=Fc(Zx);function Fc(e){return e&&e.__esModule?e:{default:e}}function _c(e){if(typeof WeakMap!="function")return null;var n=new WeakMap,t=new WeakMap;return(_c=function(r){return r?t:n})(e)}function ty(e,n){if(!n&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var t=_c(n);if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var a=o?Object.getOwnPropertyDescriptor(e,s):null;a&&(a.get||a.set)?Object.defineProperty(r,s,a):r[s]=e[s]}return r.default=e,t&&t.set(e,r),r}var ry=(0,ey.default)(ny.default);zc=Vi.default=ry;const oy=Je()(e=>({accordionRoot:{border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},accordionSummaryRoot:{backgroundColor:"rgba(0, 0, 0, .03)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}},accordionSummaryContent:{"&$expanded":{margin:"12px 0"}},accordionDetailsRoot:{padding:e.spacing(2),flexDirection:"column"}}));function iy({data:e,buffPresets:n,prioritiesPresets:t,distributionPresets:r,extrasPresets:o,traitPresets:s}){const{classes:a}=oy(),[l,c]=G.useState(""),u=Ee(),d=f=>(m,p)=>{c(p?f:!1)};return e.map(f=>w(Kt,{classes:{root:a.accordionRoot},square:!0,expanded:l===f.class,onChange:d(f.class),children:[i(Jt,{classes:{root:a.accordionSummaryRoot,content:a.accordionSummaryContent},"aria-controls":"panel1d-content",id:"panel1d-header",children:i(ut,{name:f.class,disableLink:!0,style:{fontSize:20}})}),i(Qt,{classes:{root:a.accordionDetailsRoot},children:f.builds.map(m=>i(X,{mb:1,children:i($t,{variant:"outlined",label:i(ut,{name:m.specialization,text:m.name,disableLink:!0}),onClick:p=>{var v,g,h,x,y;u({type:"CANCEL"}),u(Hl({build:m,specialization:m.specialization,profession:f.class,buffPreset:JSON.parse(n.find(S=>S.name===m.boons).value),distributionPreset:JSON.parse(((v=r.find(S=>S.name===m.distribution))==null?void 0:v.value)||"null"),prioritiesPreset:JSON.parse((g=t.find(S=>S.name===m.priority))==null?void 0:g.value),extrasPreset:JSON.parse((h=o.find(S=>S.name===m.extras))==null?void 0:h.value),traitsPreset:JSON.parse((x=s.find(S=>S.name===m.traits))==null?void 0:x.traits),skillsPreset:JSON.parse((y=s.find(S=>S.name===m.traits))==null?void 0:y.skills)}))}})},`templateBuildMobile_${m.name}`))})]},`mobileTemplate_${f.class}`))}const ay=Je()(e=>({icon:{fontSize:"2rem"}})),sy=({data:e,buffPresets:n,prioritiesPresets:t,distributionPresets:r,extrasPresets:o,traitPresets:s})=>{const{classes:a}=ay(),l=Ee(),c=U(bo),u=U(kt("expertMode")),d=U(kt("selectedSpecialization")),f=U(kt("selectedTemplate")),{t:m}=ke(),[p,v]=k.exports.useState({mobileView:typeof window!="undefined"?window.innerWidth<900:!1,drawerOpen:!1,hover:[!1,!1,!1,!1,!1,!1,!1,!1,!1],anchor:null}),{mobileView:g,drawerOpen:h}=p;k.exports.useEffect(()=>{const I=xi(()=>{const D=window.innerWidth<900;D!==g&&v($=>Ve(pe({},$),{mobileView:D}))},300);return window.addEventListener("resize",I),()=>{window.removeEventListener("resize",I)}},[g]);const x=()=>w(X,{children:[i(Fn,{control:i(wr,{checked:u,onChange:A=>{l({type:"CANCEL"}),l(Od(A.target.checked))},name:"checked",color:"primary"}),label:m("Expert")}),i(_n,{href:"#share",size:"large",onClick:()=>{const A=document.getElementById("#share");A&&A.scrollIntoView()},children:i(Ir,{})})]}),y=()=>{const A=()=>v(D=>Ve(pe({},D),{drawerOpen:!0}));return w(zs,{children:[i(X,{flexGrow:1,children:i(_n,{edge:"start",color:"inherit","aria-label":"menu","aria-haspopup":"true",onClick:A,size:"large",children:i(Lc,{})})}),i(s0,{anchor:"left",open:h,onOpen:A,onClose:()=>v(D=>Ve(pe({},D),{drawerOpen:!1})),children:i("div",{children:i(iy,{data:e,buffPresets:n,prioritiesPresets:t,distributionPresets:r,extrasPresets:o,traitPresets:s})})}),x()]})},S=(A,I,D,$)=>{var C,P,L,E,N;l({type:"CANCEL"}),l(Hl({build:I,specialization:D,profession:$,buffPreset:JSON.parse(n.find(z=>z.name===I.boons).value),distributionPreset:JSON.parse(((C=r.find(z=>z.name===I.distribution))==null?void 0:C.value)||"null"),prioritiesPreset:JSON.parse((P=t.find(z=>z.name===I.priority))==null?void 0:P.value),extrasPreset:JSON.parse((L=o.find(z=>z.name===I.extras))==null?void 0:L.value),traitsPreset:JSON.parse((E=s.find(z=>z.name===I.traits))==null?void 0:E.traits),skillsPreset:JSON.parse((N=s.find(z=>z.name===I.traits))==null?void 0:N.skills)})),A.close()},R=[$n.usePopupState({variant:"popover",popupId:"warriorTemplates",disableAutoFocus:!0}),$n.usePopupState({variant:"popover",popupId:"revenantTemplates",disableAutoFocus:!0}),$n.usePopupState({variant:"popover",popupId:"guardianTemplates",disableAutoFocus:!0}),$n.usePopupState({variant:"popover",popupId:"rangerTemplates",disableAutoFocus:!0}),$n.usePopupState({variant:"popover",popupId:"engineerTemplates",disableAutoFocus:!0}),$n.usePopupState({variant:"popover",popupId:"elementalistTemplates",disableAutoFocus:!0}),$n.usePopupState({variant:"popover",popupId:"memsmerTemplates",disableAutoFocus:!0}),$n.usePopupState({variant:"popover",popupId:"necromancerTemplates",disableAutoFocus:!0}),$n.usePopupState({variant:"popover",popupId:"thiefTemplates",disableAutoFocus:!0})],T=()=>w(zs,{children:[i(X,{flexGrow:1,children:vo.map((A,I)=>{var D,$;return w(G.Fragment,{children:[i(Yn,Ve(pe({onClick:()=>{l({type:"CANCEL"}),u&&l(Nd(A.profession))},variant:A.profession===c?"contained":"text",color:"inherit"},$n.bindHover(R[I])),{children:i(ut,{name:A.profession,disableLink:!0,disableText:!0,className:a.icon})})),i(zc,Ve(pe({},$n.bindMenu(R[I])),{anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},PaperProps:{style:{maxHeight:"calc(100vh - 340px)"}},children:($=(D=e.find(C=>C.class===A.profession))==null?void 0:D.builds)==null?void 0:$.map(C=>i(Zn,{onClick:P=>S(R[I],C,C.specialization,A.profession),children:i(ut,{name:C.specialization,disableLink:!0,text:m("buildTemplateName",{context:C.name})})},C.name))}))]},A.profession)})}),(d||f)&&w(X,{flexGrow:1,children:[w(V,{children:[i(J,{children:"Selected:"})," "]}),f?i(ut,{name:d,text:m("buildTemplateName",{context:f}),disableLink:!0}):i(ut,{name:d,disableLink:!0})]}),x()]});return i(dg,{position:"sticky",sx:pe({boxShadow:4},c===""?{marginBottom:0}:{marginBottom:2}),color:"inherit",elevation:0,enableColorOnDark:!0,children:g?y():T()})};var ly=G.memo(sy),Ui={},cy=qe.exports;Object.defineProperty(Ui,"__esModule",{value:!0});var Hc=Ui.default=void 0,uy=cy(Ge),dy=Ke,py=(0,uy.default)((0,dy.jsx)("path",{d:"M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 16h-2v-2h2v2zm2.07-7.75-.9.92C13.45 11.9 13 12.5 13 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"}),"LiveHelp");Hc=Ui.default=py;const Tn=({first:e,title:n,helpText:t,extraInfo:r,content:o})=>w(he,{item:!0,container:!0,spacing:2,mb:2,sx:{borderColor:"primary.main"},children:[!e&&i(he,{item:!0,xs:12,children:i(Ni,{})}),w(he,{item:!0,xs:12,sm:3,children:[i(({children:a})=>w(ge,{children:[i(V,{variant:"h5",children:n})," ",a&&i(Ln,{sx:{mt:.5,mb:1},elevation:0,children:w(X,{p:1,children:[i("div",{children:i(Hc,{})}),i(V,{variant:"caption",paragraph:!0,sx:{mb:0},children:a})]})})]}),{children:t}),r]}),i(he,{item:!0,xs:12,sm:9,children:o})]}),bt=({className:e,placeholder:n,label:t,endLabel:r,handleAmountChange:o,value:s="",disabled:a=!1,maxWidth:l,useAutoComplete:c=!1,autoCompleteProps:u,parseFn:d=Wl})=>{const{error:f}=d(s);return c?i(Li,pe({className:e,freeSolo:!0,disableClearable:!0,renderInput:m=>i(Kn,Ve(pe({},m),{error:f,label:t,variant:"standard",InputProps:Ve(pe({},m.InputProps),{endAdornment:i(so,{disablePointerEvents:!0,position:"end",disableTypography:!0,children:i(V,{sx:{fontSize:"0.9rem",color:"#b1b1b5"},children:r})})}),style:l?{maxWidth:l}:null})),value:s,onInputChange:o},u)):i(Kn,{className:e,error:f,value:s,placeholder:String(n),label:t,variant:"standard",size:"small",sx:{height:26},InputProps:{endAdornment:i(so,{disablePointerEvents:!0,position:"end",disableTypography:!0,children:i(V,{sx:{fontSize:"0.9rem",color:"#b1b1b5"},children:r})}),inputProps:{style:l?{maxWidth:l}:null}},onChange:o,disabled:a})},js=G.memo(Tr),Wc={"0.000":"Golem","0.133":"Adina","0.184":"Deimos","0.207":"KC","0.249":"Dhuum","0.295":"Samarog","0.312":"Qadim","0.318":"Matthias","0.322":"Xera","0.326":"Sabetha","0.342":"Sloth","0.361":"Qadim 2","0.369":"Gorseval","0.392":"MO","0.457":"Sabir","0.481":"VG","0.565":"Cairn","0.714":"SH","0.769":"Nikare","0.826":"Kenut"},fy=Object.keys(Wc),my=[{value:0,label:"Golem"},{value:.318,label:"Matthias"},{value:.4,label:""},{value:.565,label:"Cairn"},{value:.714,label:"SH"},{value:.8,label:"Largos"}],hy=()=>{const e=Ee(),{t:n}=ke(),t=U(zd),r=U(Fd),o=Ia(t).value,s=Ia(r).value;return w(ge,{children:[w(X,{display:"flex",flexWrap:"wrap",children:[i(X,{sx:{width:195},children:i(bt,{label:w(J,{children:[i(js,{name:"Torment",disableText:!0})," Movement Uptime"]}),endLabel:"%",handleAmountChange:(a,l)=>e(Ba(l)),value:r,maxWidth:180,useAutoComplete:!0,autoCompleteProps:{options:[]}})}),i(X,{mx:3,mb:4,flexGrow:1,alignSelf:"center",sx:{minWidth:200,md:{marginLeft:2}},children:i(qn,{value:s,step:1,marks:[...Array(11).keys()].map(a=>({value:a*10,label:a*10})),min:0,max:100,onChange:(a,l)=>e(Ba(String(l))),valueLabelDisplay:"auto",valueLabelFormat:a=>`${a}%`})})]}),w(X,{display:"flex",flexWrap:"wrap",children:[i(X,{sx:{width:195},children:i(bt,{label:w(J,{children:[i(js,{name:"Confusion",disableText:!0})," Attack Rate"]}),endLabel:n("/s"),handleAmountChange:(a,l)=>e(Ea(l)),value:t,maxWidth:180,useAutoComplete:!0,autoCompleteProps:{options:fy,renderOption:(a,l)=>i("li",Ve(pe({},a),{children:`${l}: ${Wc[l]}`}))}})}),i(X,{mx:3,mb:4,flexGrow:1,alignSelf:"center",sx:{minWidth:200,md:{marginLeft:2}},children:i(qn,{value:o,step:.01,min:0,max:.83,marks:my,onChange:(a,l)=>e(Ea(String(l))),valueLabelDisplay:"auto"})})]})]})},gy=()=>{const{t:e}=ke();return i(Tn,{title:e("Target settings"),helpText:e("Relevant for condi optimizations; enter boss attack rate and movement uptime for approximating confusion/torment condition damage."),content:i(hy,{})})};var by=G.memo(gy);const vy=7,Xt=({className:e,data:n=[],handleClick:t,presetCategory:r,maxChips:o=vy})=>{const{t:s}=ke(),a=U(bo),l=U(kt("selectedTemplate")),c=n.filter(u=>!(u!=null&&u.hidden));return i(X,{className:e,sx:{marginTop:1},children:c.length>o?i(Li,{options:c,getOptionLabel:u=>u.name,renderInput:u=>i(Kn,Ve(pe({},u),{label:s("Presets"),variant:"standard"})),renderOption:(u,d)=>i("li",Ve(pe({},u),{children:d.profession?i(ut,{disableLink:!0,name:d.profession,text:s("preset",{context:`${r}_${d.name}`})}):i(V,{children:s("preset",{context:`${r}_${d.name}`})})})),blurOnSelect:!0,disableClearable:!0,clearOnBlur:!1,onChange:(u,d)=>t(d)},`${l||a}-presets`):c.map(u=>i($t,{id:u.name,label:u.profession?i(ut,{disableLink:!0,name:u.profession,text:s("preset",{context:`${r}_${u.name}`})}):s("preset",{context:`${r}_${u.name}`}),variant:"outlined",onClick:()=>t(u),sx:{margin:.5}},u.name))})},Tt=a=>{var l=a,{className:e,checked:n,value:t,label:r,onChange:o}=l,s=Lr(l,["className","checked","value","label","onChange"]);return i(Fn,{className:e,control:i(Pc,pe({color:"primary",checked:n,onChange:o,value:t},s)),label:r})},xy=Je()(e=>({boon:{fontSize:18},note:{fontSize:"1rem"},tinyNote:{fontWeight:200}})),yy=()=>{const{classes:e}=xy(),n=Ee(),{t}=ke(),r=U(_d),o=U(Hd),s=c=>u=>{n(Wd({key:c.id,value:u.target.checked}))},a=c=>u=>{n(Vd({key:c.id,value:u.target.value}))},l={Boon:Vl,Trait:ei,Skill:dr,CommonEffect:jl,Condition:Tr};return i(he,{container:!0,spacing:4,children:Si.map(c=>i(he,{item:!0,xs:12,sm:6,md:4,children:w(mn,{component:"fieldset",className:e.formControl,children:[i(vr,{component:"legend",children:t("buffSection",{context:c.section})}),i(zi,{children:c.items.map(u=>{const{type:d,text:f,id:m,gw2id:p,subText:v,amountData:g}=u,h=l[d],x=["Boon","Condition","CommonEffect"].includes(d)?ki(m):void 0,y=d==="Text"?w(ge,{children:[i(V,{className:e.note,children:t("buffText",{context:f})}),i(V,{variant:"caption",className:e.tinyNote,children:v})]}):i(h,{id:p,name:x,disableLink:!0,className:e.boon});return w(X,{justifyContent:"space-between",display:"flex",children:[i(X,{display:"flex",children:i(Tt,{value:m,checked:Boolean(r[m]),label:y,onChange:s(u)},m)}),g?i(X,{display:"flex",children:i(bt,{placeholder:g.default,endLabel:g.label,handleAmountChange:a(u),value:o[m],disabled:!r[m],maxWidth:32})}):null]},m)})})]})},c.section))})},wy=({data:e})=>{const n=Ee(),{t}=ke(),r=G.useCallback(o=>{if(o===null)return;const s=JSON.parse(o.value);n(jd(s))},[n]);return i(Tn,{title:t("Buffs & Boons"),extraInfo:i(Xt,{data:e.presetBuffs.list,handleClick:r,presetCategory:"buff"}),content:i(yy,{})})};var Us=G.memo(wy),qi={},Cy=qe.exports;Object.defineProperty(qi,"__esModule",{value:!0});var Vc=qi.default=void 0,Sy=Cy(Ge),ky=Ke,Py=(0,Sy.default)((0,ky.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");Vc=qi.default=Py;var Gi={},Ry=qe.exports;Object.defineProperty(Gi,"__esModule",{value:!0});var jc=Gi.default=void 0,Ty=Ry(Ge),Ay=Ke,$y=(0,Ty.default)((0,Ay.jsx)("path",{d:"m18 7-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41 6 19l1.41-1.41L1.83 12 .41 13.41z"}),"DoneAll");jc=Gi.default=$y;var Yi={},Dy=qe.exports;Object.defineProperty(Yi,"__esModule",{value:!0});var Uc=Yi.default=void 0,Iy=Dy(Ge),By=Ke,Ey=(0,Iy.default)((0,By.jsx)("path",{d:"M12 20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2s-2 .9-2 2v12c0 1.1.9 2 2 2zm-6 0c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2s-2 .9-2 2v4c0 1.1.9 2 2 2zm10-9v7c0 1.1.9 2 2 2s2-.9 2-2v-7c0-1.1-.9-2-2-2s-2 .9-2 2z"}),"EqualizerRounded");Uc=Yi.default=Ey;var Ki={},My=qe.exports;Object.defineProperty(Ki,"__esModule",{value:!0});var qc=Ki.default=void 0,Ly=My(Ge),Oy=Ke,Ny=(0,Ly.default)((0,Oy.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"}),"Error");qc=Ki.default=Ny;var Qi={},zy=qe.exports;Object.defineProperty(Qi,"__esModule",{value:!0});var Gc=Qi.default=void 0,Fy=zy(Ge),_y=Ke,Hy=(0,Fy.default)((0,_y.jsx)("path",{d:"M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5-4-4V4h8v3.5l-4 4z"}),"HourglassEmpty");Gc=Qi.default=Hy;function Wy(e){const{value:n}=e;return w(X,{position:"relative",display:"inline-flex",children:[i(Lb,pe({variant:"determinate"},e)),i(X,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",children:i(V,{variant:"caption",color:"textSecondary",children:`${Math.round(n)}%`})})]})}const qs=({className:e})=>{const n=U(kt("progress"));return i(Wy,{variant:"determinate",value:n,className:e})};var Ji={},Vy=qe.exports;Object.defineProperty(Ji,"__esModule",{value:!0});var Yc=Ji.default=void 0,jy=Vy(Ge),Uy=Ke,qy=(0,jy.default)((0,Uy.jsx)("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}),"Settings");Yc=Ji.default=qy;function Gy({children:e}){const n=G.useRef(),[t,r]=G.useState(!1),o=()=>{r(a=>!a)},s=a=>{n.current&&n.current.contains(a.target)||r(!1)};return w(ge,{children:[i(_n,{"aria-label":"settings",size:"medium",onClick:o,ref:n,children:i(Yc,{fontSize:"inherit"})}),i(Mi,{style:{zIndex:99},open:t,anchorEl:n.current,onClose:s,placement:"bottom-end",transition:!0,role:void 0,disablePortal:!0,children:({TransitionProps:a})=>i(Fl,Ve(pe({},a),{children:i(Ln,{sx:{padding:2},elevation:6,children:i(cc,{onClickAway:s,children:i("div",{children:e})})})}))})]})}const Yy=Je()(e=>({comparisonLabel:{fontSize:"1rem"}}));function Ky(){const{classes:e}=Yy(),{t:n}=ke(),t=Ee(),r=U(Ul),o=U(ql),s=U(Gl);return w(Gy,{children:[i(V,{sx:{fontWeight:700},children:i(J,{children:"Result Display Settings:"})}),i(X,{sx:{mt:1.5},children:i(Fn,{control:i(wr,{checked:r,onChange:a=>t(Ud(a.target.checked)),name:"checked",color:"primary"}),label:n("Compare by percentage"),classes:{label:e.comparisonLabel}})}),i(X,{sx:{mt:1.5},children:i(Fn,{control:i(wr,{checked:o,onChange:a=>t(qd(a.target.checked)),name:"checked",color:"primary"}),label:n("Increase table height"),classes:{label:e.comparisonLabel}})}),i(X,{sx:{mt:1.5},children:w(mn,{children:[i(vr,{id:"filter-button-group",children:i(J,{children:"Filter results:"})}),i(ii,{"aria-labelledby":"filter-button-group",value:s,onChange:a=>t(Gd(a.target.value)),name:"checked",color:"primary",children:[["None",n("No Filtering")],["Combinations",n("All Combinations")],["Sigils",n("Sigils")],["Runes",n("Runes")],["Nourishment",n("Food")],["Enhancement",n("Utility")]].map(([a,l])=>i(Fn,{value:a,control:i(eo,{}),label:l,classes:{label:e.comparisonLabel}},a))}),i($c,{sx:{maxWidth:320},children:i(J,{children:"Displays only the top result for each rune, sigil, food, or utility option or each combination of all of the above (up to 100 results)."})})]})})]})}const Qy=Je()(e=>({errorText:{color:"red"},button:{margin:e.spacing(1)},label:{height:40},icon:{fontSize:40},chipIcon:{marginBottom:"-6px !important"}})),Jy=({profession:e})=>{const{classes:n}=Qy(),t=Ee(),r=U(kt("status")),o=U(Yd),s=U(kn("affixes")),a=G.useCallback(c=>{if(s.length<1){t(Ma("Please select at least one affix.")),t(Kd(La));return}console.log("calculate"),t(Ma("")),t({type:Pt.Start})},[t,s]);let l;switch(r){case Na:l=i(jc,{fontSize:"small",classes:{root:n.chipIcon}});break;case Oa:case nr:l=i(Gc,{fontSize:"small",classes:{root:n.chipIcon}});break;case La:l=i(qc,{fontSize:"small",classes:{root:n.chipIcon}});break;default:l=null}return i(ge,{children:w(X,{display:"flex",flexWrap:"wrap",children:[i(X,{children:w(Yn,{variant:"outlined",color:"primary",className:n.button,onClick:a,classes:{label:n.label},disabled:r===nr||e==="",children:[r===nr?i(qs,{className:n.icon}):i(Uc,{className:n.icon}),i(V,{children:i(J,{children:"Calculate"})})]})}),i(X,{children:w(Yn,{variant:"outlined",color:"primary",className:n.button,onClick:c=>t({type:Pt.Stop}),disabled:r!==nr,children:[i(Vc,{className:ft(n.icon)}),i(V,{style:{marginLeft:8},children:i(J,{children:"Stop"})})]})}),i(X,{flexGrow:1,children:r===Qd?w(Yn,{variant:"outlined",color:"primary",className:n.button,onClick:c=>t({type:Pt.Resume}),children:[i(qs,{className:n.icon}),i(V,{style:{marginLeft:8},children:i(J,{children:"Resume"})})]}):null}),i(X,{alignSelf:"center",display:"flex",m:1,maxWidth:300,children:i(V,{variant:"caption",className:n.errorText,children:o})}),w(X,{alignSelf:"center",children:[i($t,{sx:{marginRight:1},label:w(ge,{children:[i(J,{children:"Status:"})," ",ki(r)," ",l]}),color:[Na,Oa,nr].includes(r)?"primary":"secondary"}),i(Ky,{})]})]})})},Wo=G.memo(Un),Vo=G.memo(Tr),Gs=e=>Math.round(e*10)/10,Xy=Je()(e=>({textbox:{maxWidth:195},slider:{margin:e.spacing(2),minWidth:200,[e.breakpoints.up("sm")]:{marginLeft:e.spacing(5)}},percentSliderRail:{opacity:1}})),Ys=[{name:"Power",min:0,max:6e3,step:10,color:"#b1b1b5"},{name:"Burning",min:0,max:60,step:.1},{name:"Bleeding",min:0,max:60,step:.1},{name:"Poisoned",min:0,max:60,step:.1},{name:"Torment",min:0,max:60,step:.1},{name:"Confusion",min:0,max:60,step:.1}],Zy=()=>{const{classes:e}=Xy(),n=Ee(),t=U(Yl),r=U(Jd),o=U(Xd),{t:s}=ke(),a=U(Zd),l=p=>[0,1,2,3,4].map(v=>{let g=0;for(let h=0;h<=v;h++)g+=p[h];return Gs(Math.min(g,100))}),c=(p,v)=>{const g=[];let h=0;for(let y=0;y<v.length;y++)g.push(v[y]-h),h=v[y];g.push(100-h);const x={Power:g[0],Burning:g[1],Bleeding:g[2],Poisoned:g[3],Torment:g[4],Confusion:g[5]};n(ep(x))},u=()=>w(ge,{children:[i("div",{className:e.sliderWrapper,children:i(qn,{classes:{rail:e.percentSliderRail},value:l(Object.values(r)),onChange:c,valueLabelDisplay:"auto",track:!1,"aria-labelledby":"range-slider",marks:[...Array(11).keys()].map(p=>p*10).map(p=>({value:p,label:`${p}`}))})}),i(he,{container:!0,spacing:2,children:Ys.map(p=>i(he,{item:!0,xs:!0,children:w(V,{style:{whiteSpace:"nowrap"},children:[p.name==="Power"?i(Wo,{name:"Power",disableLink:!0,style:{whiteSpace:"nowrap"}}):i(Vo,{name:p.name,disableLink:!0,style:{whiteSpace:"nowrap"}})," ",Gs(r[p.name]),"%"]})},p.name))})]}),d=p=>(v,g)=>{n(za({index:p,value:Math.round(g*100)/100})),n(Fa({index:p,value:Math.round(g*100)/100}))},f=p=>v=>{const{value:g}=v.target;n(za({index:p,value:g}));const h=ni(g).value;n(Fa({index:p,value:h}))};return t===1?u():(()=>Ys.map((p,v)=>w(X,{display:"flex",flexWrap:"wrap",children:[i(X,{children:w(mn,{mb:1,className:e.textbox,variant:"standard",children:[i(Nn,{htmlFor:`input-with-icon-adornment-${v}`,children:p.name==="Power"?i(Wo,{name:"Power",disableLink:!0,text:s("Power Coefficient")}):i(Vo,{name:p.name,disableLink:!0,text:s("avgStacks",{context:p.name})})}),i(zn,{id:`input-with-icon-adornment-${v}`,value:a[p.name],endAdornment:i(so,{position:"end",children:p.name==="Power"?i(Wo,{name:"Power",disableLink:!0,disableText:!0}):i(Vo,{name:p.name,disableLink:!0,disableText:!0})}),error:ni(a[p.name]).error,onChange:f(p.name),autoComplete:"off"})]})}),i(X,{flexGrow:1,alignSelf:"center",mx:3,mb:4,sx:{minWidth:200,md:{marginLeft:2}},children:i(qn,{value:o[p.name],step:p.step,marks:[...Array(7).keys()].map(g=>g*((p.max-p.min)/6)).map(g=>({value:g,label:`${g}`})),min:p.min,max:p.max,onChange:d(p.name),valueLabelDisplay:"auto"})})]},`distriNew_${p.name}`)))()},e2=({profession:e,data:n})=>{const t=Ee(),r=U(Yl),{t:o}=ke();let s;if(e){const{eliteSpecializations:l}=vo.find(c=>c.profession===e);s=n.presetDistribution.list.filter(c=>c.name==="None"?!1:c.profession===null||c.profession===e||l.includes(c.profession))}const a=G.useCallback(l=>{l!==null&&t(np(JSON.parse(l.value)))},[t]);return i(Tn,{title:o("Skill Coefficients"),content:i(Zy,{}),extraInfo:w(ge,{children:[i(Fn,{control:i(wr,{checked:r===1,onChange:l=>t(tp(l.target.checked?1:2)),name:"checked",color:"primary"}),label:o("Switch to %-wise damage distribution")}),e!==""&&i(Xt,{data:s,handleClick:a,presetCategory:"distribution"})]}),helpText:r===2?w(ge,{children:[i(J,{children:`This data represents your rotation. If we don't supply a template for a build, you can calculate the correct coefficients so that a tested build matches a golem log using the tool under "development" below, or calculate them manually.`}),i(X,{component:"span",sx:{mt:1,display:"block"}}),w(J,{children:["For more information,"," ",i(lo,{href:"https://github.com/discretize/discretize-gear-optimizer/tree/staging/docs/Coefficients.md",target:"_blank",rel:"noopener",children:"see the coefficients documentation on Github"})," ","or ask in Discord!"]})]}):w(ge,{children:[i(J,{children:"This data represents your rotation. If we don't supply a template for a build, you can move these sliders until the results match a golem log, or calculate them manually."}),i(X,{component:"span",sx:{mt:1,display:"block"}}),i(J,{children:"To do so, perform your rotation on a golem with no gear, traits, or other modifiers, then enter the distribution here."})]})})};var Xi={},n2=qe.exports;Object.defineProperty(Xi,"__esModule",{value:!0});var Zt=Xi.default=void 0,t2=n2(Ge),r2=Ke,o2=(0,t2.default)((0,r2.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");Zt=Xi.default=o2;/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Kc(e){return typeof e=="undefined"||e===null}function i2(e){return typeof e=="object"&&e!==null}function a2(e){return Array.isArray(e)?e:Kc(e)?[]:[e]}function s2(e,n){var t,r,o,s;if(n)for(s=Object.keys(n),t=0,r=s.length;t<r;t+=1)o=s[t],e[o]=n[o];return e}function l2(e,n){var t="",r;for(r=0;r<n;r+=1)t+=e;return t}function c2(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var u2=Kc,d2=i2,p2=a2,f2=l2,m2=c2,h2=s2,nn={isNothing:u2,isObject:d2,toArray:p2,repeat:f2,isNegativeZero:m2,extend:h2};function Qc(e,n){var t="",r=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(t+='in "'+e.mark.name+'" '),t+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!n&&e.mark.snippet&&(t+=`

`+e.mark.snippet),r+" "+t):r}function Cr(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=Qc(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Cr.prototype=Object.create(Error.prototype);Cr.prototype.constructor=Cr;Cr.prototype.toString=function(n){return this.name+": "+Qc(this,n)};var bn=Cr;function jo(e,n,t,r,o){var s="",a="",l=Math.floor(o/2)-1;return r-n>l&&(s=" ... ",n=r-l+s.length),t-r>l&&(a=" ...",t=r+l-a.length),{str:s+e.slice(n,t).replace(/\t/g,"\u2192")+a,pos:r-n+s.length}}function Uo(e,n){return nn.repeat(" ",n-e.length)+e}function g2(e,n){if(n=Object.create(n||null),!e.buffer)return null;n.maxLength||(n.maxLength=79),typeof n.indent!="number"&&(n.indent=1),typeof n.linesBefore!="number"&&(n.linesBefore=3),typeof n.linesAfter!="number"&&(n.linesAfter=2);for(var t=/\r?\n|\r|\0/g,r=[0],o=[],s,a=-1;s=t.exec(e.buffer);)o.push(s.index),r.push(s.index+s[0].length),e.position<=s.index&&a<0&&(a=r.length-2);a<0&&(a=r.length-1);var l="",c,u,d=Math.min(e.line+n.linesAfter,o.length).toString().length,f=n.maxLength-(n.indent+d+3);for(c=1;c<=n.linesBefore&&!(a-c<0);c++)u=jo(e.buffer,r[a-c],o[a-c],e.position-(r[a]-r[a-c]),f),l=nn.repeat(" ",n.indent)+Uo((e.line-c+1).toString(),d)+" | "+u.str+`
`+l;for(u=jo(e.buffer,r[a],o[a],e.position,f),l+=nn.repeat(" ",n.indent)+Uo((e.line+1).toString(),d)+" | "+u.str+`
`,l+=nn.repeat("-",n.indent+d+3+u.pos)+`^
`,c=1;c<=n.linesAfter&&!(a+c>=o.length);c++)u=jo(e.buffer,r[a+c],o[a+c],e.position-(r[a]-r[a+c]),f),l+=nn.repeat(" ",n.indent)+Uo((e.line+c+1).toString(),d)+" | "+u.str+`
`;return l.replace(/\n$/,"")}var b2=g2,v2=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],x2=["scalar","sequence","mapping"];function y2(e){var n={};return e!==null&&Object.keys(e).forEach(function(t){e[t].forEach(function(r){n[String(r)]=t})}),n}function w2(e,n){if(n=n||{},Object.keys(n).forEach(function(t){if(v2.indexOf(t)===-1)throw new bn('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.options=n,this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(t){return t},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=y2(n.styleAliases||null),x2.indexOf(this.kind)===-1)throw new bn('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var pn=w2;function Ks(e,n){var t=[];return e[n].forEach(function(r){var o=t.length;t.forEach(function(s,a){s.tag===r.tag&&s.kind===r.kind&&s.multi===r.multi&&(o=a)}),t[o]=r}),t}function C2(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,t;function r(o){o.multi?(e.multi[o.kind].push(o),e.multi.fallback.push(o)):e[o.kind][o.tag]=e.fallback[o.tag]=o}for(n=0,t=arguments.length;n<t;n+=1)arguments[n].forEach(r);return e}function ci(e){return this.extend(e)}ci.prototype.extend=function(n){var t=[],r=[];if(n instanceof pn)r.push(n);else if(Array.isArray(n))r=r.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(t=t.concat(n.implicit)),n.explicit&&(r=r.concat(n.explicit));else throw new bn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");t.forEach(function(s){if(!(s instanceof pn))throw new bn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(s.loadKind&&s.loadKind!=="scalar")throw new bn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(s.multi)throw new bn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),r.forEach(function(s){if(!(s instanceof pn))throw new bn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var o=Object.create(ci.prototype);return o.implicit=(this.implicit||[]).concat(t),o.explicit=(this.explicit||[]).concat(r),o.compiledImplicit=Ks(o,"implicit"),o.compiledExplicit=Ks(o,"explicit"),o.compiledTypeMap=C2(o.compiledImplicit,o.compiledExplicit),o};var Jc=ci,Xc=new pn("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),Zc=new pn("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),eu=new pn("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),nu=new Jc({explicit:[Xc,Zc,eu]});function S2(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function k2(){return null}function P2(e){return e===null}var tu=new pn("tag:yaml.org,2002:null",{kind:"scalar",resolve:S2,construct:k2,predicate:P2,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function R2(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function T2(e){return e==="true"||e==="True"||e==="TRUE"}function A2(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var ru=new pn("tag:yaml.org,2002:bool",{kind:"scalar",resolve:R2,construct:T2,predicate:A2,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function $2(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function D2(e){return 48<=e&&e<=55}function I2(e){return 48<=e&&e<=57}function B2(e){if(e===null)return!1;var n=e.length,t=0,r=!1,o;if(!n)return!1;if(o=e[t],(o==="-"||o==="+")&&(o=e[++t]),o==="0"){if(t+1===n)return!0;if(o=e[++t],o==="b"){for(t++;t<n;t++)if(o=e[t],o!=="_"){if(o!=="0"&&o!=="1")return!1;r=!0}return r&&o!=="_"}if(o==="x"){for(t++;t<n;t++)if(o=e[t],o!=="_"){if(!$2(e.charCodeAt(t)))return!1;r=!0}return r&&o!=="_"}if(o==="o"){for(t++;t<n;t++)if(o=e[t],o!=="_"){if(!D2(e.charCodeAt(t)))return!1;r=!0}return r&&o!=="_"}}if(o==="_")return!1;for(;t<n;t++)if(o=e[t],o!=="_"){if(!I2(e.charCodeAt(t)))return!1;r=!0}return!(!r||o==="_")}function E2(e){var n=e,t=1,r;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),r=n[0],(r==="-"||r==="+")&&(r==="-"&&(t=-1),n=n.slice(1),r=n[0]),n==="0")return 0;if(r==="0"){if(n[1]==="b")return t*parseInt(n.slice(2),2);if(n[1]==="x")return t*parseInt(n.slice(2),16);if(n[1]==="o")return t*parseInt(n.slice(2),8)}return t*parseInt(n,10)}function M2(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!nn.isNegativeZero(e)}var ou=new pn("tag:yaml.org,2002:int",{kind:"scalar",resolve:B2,construct:E2,predicate:M2,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),L2=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function O2(e){return!(e===null||!L2.test(e)||e[e.length-1]==="_")}function N2(e){var n,t;return n=e.replace(/_/g,"").toLowerCase(),t=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?t===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:t*parseFloat(n,10)}var z2=/^[-+]?[0-9]+e/;function F2(e,n){var t;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(nn.isNegativeZero(e))return"-0.0";return t=e.toString(10),z2.test(t)?t.replace("e",".e"):t}function _2(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||nn.isNegativeZero(e))}var iu=new pn("tag:yaml.org,2002:float",{kind:"scalar",resolve:O2,construct:N2,predicate:_2,represent:F2,defaultStyle:"lowercase"}),au=nu.extend({implicit:[tu,ru,ou,iu]}),su=au,lu=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),cu=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function H2(e){return e===null?!1:lu.exec(e)!==null||cu.exec(e)!==null}function W2(e){var n,t,r,o,s,a,l,c=0,u=null,d,f,m;if(n=lu.exec(e),n===null&&(n=cu.exec(e)),n===null)throw new Error("Date resolve error");if(t=+n[1],r=+n[2]-1,o=+n[3],!n[4])return new Date(Date.UTC(t,r,o));if(s=+n[4],a=+n[5],l=+n[6],n[7]){for(c=n[7].slice(0,3);c.length<3;)c+="0";c=+c}return n[9]&&(d=+n[10],f=+(n[11]||0),u=(d*60+f)*6e4,n[9]==="-"&&(u=-u)),m=new Date(Date.UTC(t,r,o,s,a,l,c)),u&&m.setTime(m.getTime()-u),m}function V2(e){return e.toISOString()}var uu=new pn("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:H2,construct:W2,instanceOf:Date,represent:V2});function j2(e){return e==="<<"||e===null}var du=new pn("tag:yaml.org,2002:merge",{kind:"scalar",resolve:j2}),Zi=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function U2(e){if(e===null)return!1;var n,t,r=0,o=e.length,s=Zi;for(t=0;t<o;t++)if(n=s.indexOf(e.charAt(t)),!(n>64)){if(n<0)return!1;r+=6}return r%8===0}function q2(e){var n,t,r=e.replace(/[\r\n=]/g,""),o=r.length,s=Zi,a=0,l=[];for(n=0;n<o;n++)n%4===0&&n&&(l.push(a>>16&255),l.push(a>>8&255),l.push(a&255)),a=a<<6|s.indexOf(r.charAt(n));return t=o%4*6,t===0?(l.push(a>>16&255),l.push(a>>8&255),l.push(a&255)):t===18?(l.push(a>>10&255),l.push(a>>2&255)):t===12&&l.push(a>>4&255),new Uint8Array(l)}function G2(e){var n="",t=0,r,o,s=e.length,a=Zi;for(r=0;r<s;r++)r%3===0&&r&&(n+=a[t>>18&63],n+=a[t>>12&63],n+=a[t>>6&63],n+=a[t&63]),t=(t<<8)+e[r];return o=s%3,o===0?(n+=a[t>>18&63],n+=a[t>>12&63],n+=a[t>>6&63],n+=a[t&63]):o===2?(n+=a[t>>10&63],n+=a[t>>4&63],n+=a[t<<2&63],n+=a[64]):o===1&&(n+=a[t>>2&63],n+=a[t<<4&63],n+=a[64],n+=a[64]),n}function Y2(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var pu=new pn("tag:yaml.org,2002:binary",{kind:"scalar",resolve:U2,construct:q2,predicate:Y2,represent:G2}),K2=Object.prototype.hasOwnProperty,Q2=Object.prototype.toString;function J2(e){if(e===null)return!0;var n=[],t,r,o,s,a,l=e;for(t=0,r=l.length;t<r;t+=1){if(o=l[t],a=!1,Q2.call(o)!=="[object Object]")return!1;for(s in o)if(K2.call(o,s))if(!a)a=!0;else return!1;if(!a)return!1;if(n.indexOf(s)===-1)n.push(s);else return!1}return!0}function X2(e){return e!==null?e:[]}var fu=new pn("tag:yaml.org,2002:omap",{kind:"sequence",resolve:J2,construct:X2}),Z2=Object.prototype.toString;function ew(e){if(e===null)return!0;var n,t,r,o,s,a=e;for(s=new Array(a.length),n=0,t=a.length;n<t;n+=1){if(r=a[n],Z2.call(r)!=="[object Object]"||(o=Object.keys(r),o.length!==1))return!1;s[n]=[o[0],r[o[0]]]}return!0}function nw(e){if(e===null)return[];var n,t,r,o,s,a=e;for(s=new Array(a.length),n=0,t=a.length;n<t;n+=1)r=a[n],o=Object.keys(r),s[n]=[o[0],r[o[0]]];return s}var mu=new pn("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:ew,construct:nw}),tw=Object.prototype.hasOwnProperty;function rw(e){if(e===null)return!0;var n,t=e;for(n in t)if(tw.call(t,n)&&t[n]!==null)return!1;return!0}function ow(e){return e!==null?e:{}}var hu=new pn("tag:yaml.org,2002:set",{kind:"mapping",resolve:rw,construct:ow}),ea=su.extend({implicit:[uu,du],explicit:[pu,fu,mu,hu]}),vt=Object.prototype.hasOwnProperty,co=1,gu=2,bu=3,uo=4,qo=1,iw=2,Qs=3,aw=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,sw=/[\x85\u2028\u2029]/,lw=/[,\[\]\{\}]/,vu=/^(?:!|!!|![a-z\-]+!)$/i,xu=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function Js(e){return Object.prototype.toString.call(e)}function Qn(e){return e===10||e===13}function At(e){return e===9||e===32}function yn(e){return e===9||e===32||e===10||e===13}function zt(e){return e===44||e===91||e===93||e===123||e===125}function cw(e){var n;return 48<=e&&e<=57?e-48:(n=e|32,97<=n&&n<=102?n-97+10:-1)}function uw(e){return e===120?2:e===117?4:e===85?8:0}function dw(e){return 48<=e&&e<=57?e-48:-1}function Xs(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"\x85":e===95?"\xA0":e===76?"\u2028":e===80?"\u2029":""}function pw(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}var yu=new Array(256),wu=new Array(256);for(var Bt=0;Bt<256;Bt++)yu[Bt]=Xs(Bt)?1:0,wu[Bt]=Xs(Bt);function fw(e,n){this.input=e,this.filename=n.filename||null,this.schema=n.schema||ea,this.onWarning=n.onWarning||null,this.legacy=n.legacy||!1,this.json=n.json||!1,this.listener=n.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function Cu(e,n){var t={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return t.snippet=b2(t),new bn(n,t)}function ie(e,n){throw Cu(e,n)}function po(e,n){e.onWarning&&e.onWarning.call(null,Cu(e,n))}var Zs={YAML:function(n,t,r){var o,s,a;n.version!==null&&ie(n,"duplication of %YAML directive"),r.length!==1&&ie(n,"YAML directive accepts exactly one argument"),o=/^([0-9]+)\.([0-9]+)$/.exec(r[0]),o===null&&ie(n,"ill-formed argument of the YAML directive"),s=parseInt(o[1],10),a=parseInt(o[2],10),s!==1&&ie(n,"unacceptable YAML version of the document"),n.version=r[0],n.checkLineBreaks=a<2,a!==1&&a!==2&&po(n,"unsupported YAML version of the document")},TAG:function(n,t,r){var o,s;r.length!==2&&ie(n,"TAG directive accepts exactly two arguments"),o=r[0],s=r[1],vu.test(o)||ie(n,"ill-formed tag handle (first argument) of the TAG directive"),vt.call(n.tagMap,o)&&ie(n,'there is a previously declared suffix for "'+o+'" tag handle'),xu.test(s)||ie(n,"ill-formed tag prefix (second argument) of the TAG directive");try{s=decodeURIComponent(s)}catch{ie(n,"tag prefix is malformed: "+s)}n.tagMap[o]=s}};function mt(e,n,t,r){var o,s,a,l;if(n<t){if(l=e.input.slice(n,t),r)for(o=0,s=l.length;o<s;o+=1)a=l.charCodeAt(o),a===9||32<=a&&a<=1114111||ie(e,"expected valid JSON character");else aw.test(l)&&ie(e,"the stream contains non-printable characters");e.result+=l}}function el(e,n,t,r){var o,s,a,l;for(nn.isObject(t)||ie(e,"cannot merge mappings; the provided source object is unacceptable"),o=Object.keys(t),a=0,l=o.length;a<l;a+=1)s=o[a],vt.call(n,s)||(n[s]=t[s],r[s]=!0)}function Ft(e,n,t,r,o,s,a,l,c){var u,d;if(Array.isArray(o))for(o=Array.prototype.slice.call(o),u=0,d=o.length;u<d;u+=1)Array.isArray(o[u])&&ie(e,"nested arrays are not supported inside keys"),typeof o=="object"&&Js(o[u])==="[object Object]"&&(o[u]="[object Object]");if(typeof o=="object"&&Js(o)==="[object Object]"&&(o="[object Object]"),o=String(o),n===null&&(n={}),r==="tag:yaml.org,2002:merge")if(Array.isArray(s))for(u=0,d=s.length;u<d;u+=1)el(e,n,s[u],t);else el(e,n,s,t);else!e.json&&!vt.call(t,o)&&vt.call(n,o)&&(e.line=a||e.line,e.lineStart=l||e.lineStart,e.position=c||e.position,ie(e,"duplicated mapping key")),o==="__proto__"?Object.defineProperty(n,o,{configurable:!0,enumerable:!0,writable:!0,value:s}):n[o]=s,delete t[o];return n}function na(e){var n;n=e.input.charCodeAt(e.position),n===10?e.position++:n===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):ie(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function Xe(e,n,t){for(var r=0,o=e.input.charCodeAt(e.position);o!==0;){for(;At(o);)o===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),o=e.input.charCodeAt(++e.position);if(n&&o===35)do o=e.input.charCodeAt(++e.position);while(o!==10&&o!==13&&o!==0);if(Qn(o))for(na(e),o=e.input.charCodeAt(e.position),r++,e.lineIndent=0;o===32;)e.lineIndent++,o=e.input.charCodeAt(++e.position);else break}return t!==-1&&r!==0&&e.lineIndent<t&&po(e,"deficient indentation"),r}function ko(e){var n=e.position,t;return t=e.input.charCodeAt(n),!!((t===45||t===46)&&t===e.input.charCodeAt(n+1)&&t===e.input.charCodeAt(n+2)&&(n+=3,t=e.input.charCodeAt(n),t===0||yn(t)))}function ta(e,n){n===1?e.result+=" ":n>1&&(e.result+=nn.repeat(`
`,n-1))}function mw(e,n,t){var r,o,s,a,l,c,u,d,f=e.kind,m=e.result,p;if(p=e.input.charCodeAt(e.position),yn(p)||zt(p)||p===35||p===38||p===42||p===33||p===124||p===62||p===39||p===34||p===37||p===64||p===96||(p===63||p===45)&&(o=e.input.charCodeAt(e.position+1),yn(o)||t&&zt(o)))return!1;for(e.kind="scalar",e.result="",s=a=e.position,l=!1;p!==0;){if(p===58){if(o=e.input.charCodeAt(e.position+1),yn(o)||t&&zt(o))break}else if(p===35){if(r=e.input.charCodeAt(e.position-1),yn(r))break}else{if(e.position===e.lineStart&&ko(e)||t&&zt(p))break;if(Qn(p))if(c=e.line,u=e.lineStart,d=e.lineIndent,Xe(e,!1,-1),e.lineIndent>=n){l=!0,p=e.input.charCodeAt(e.position);continue}else{e.position=a,e.line=c,e.lineStart=u,e.lineIndent=d;break}}l&&(mt(e,s,a,!1),ta(e,e.line-c),s=a=e.position,l=!1),At(p)||(a=e.position+1),p=e.input.charCodeAt(++e.position)}return mt(e,s,a,!1),e.result?!0:(e.kind=f,e.result=m,!1)}function hw(e,n){var t,r,o;if(t=e.input.charCodeAt(e.position),t!==39)return!1;for(e.kind="scalar",e.result="",e.position++,r=o=e.position;(t=e.input.charCodeAt(e.position))!==0;)if(t===39)if(mt(e,r,e.position,!0),t=e.input.charCodeAt(++e.position),t===39)r=e.position,e.position++,o=e.position;else return!0;else Qn(t)?(mt(e,r,o,!0),ta(e,Xe(e,!1,n)),r=o=e.position):e.position===e.lineStart&&ko(e)?ie(e,"unexpected end of the document within a single quoted scalar"):(e.position++,o=e.position);ie(e,"unexpected end of the stream within a single quoted scalar")}function gw(e,n){var t,r,o,s,a,l;if(l=e.input.charCodeAt(e.position),l!==34)return!1;for(e.kind="scalar",e.result="",e.position++,t=r=e.position;(l=e.input.charCodeAt(e.position))!==0;){if(l===34)return mt(e,t,e.position,!0),e.position++,!0;if(l===92){if(mt(e,t,e.position,!0),l=e.input.charCodeAt(++e.position),Qn(l))Xe(e,!1,n);else if(l<256&&yu[l])e.result+=wu[l],e.position++;else if((a=uw(l))>0){for(o=a,s=0;o>0;o--)l=e.input.charCodeAt(++e.position),(a=cw(l))>=0?s=(s<<4)+a:ie(e,"expected hexadecimal character");e.result+=pw(s),e.position++}else ie(e,"unknown escape sequence");t=r=e.position}else Qn(l)?(mt(e,t,r,!0),ta(e,Xe(e,!1,n)),t=r=e.position):e.position===e.lineStart&&ko(e)?ie(e,"unexpected end of the document within a double quoted scalar"):(e.position++,r=e.position)}ie(e,"unexpected end of the stream within a double quoted scalar")}function bw(e,n){var t=!0,r,o,s,a=e.tag,l,c=e.anchor,u,d,f,m,p,v=Object.create(null),g,h,x,y;if(y=e.input.charCodeAt(e.position),y===91)d=93,p=!1,l=[];else if(y===123)d=125,p=!0,l={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=l),y=e.input.charCodeAt(++e.position);y!==0;){if(Xe(e,!0,n),y=e.input.charCodeAt(e.position),y===d)return e.position++,e.tag=a,e.anchor=c,e.kind=p?"mapping":"sequence",e.result=l,!0;t?y===44&&ie(e,"expected the node content, but found ','"):ie(e,"missed comma between flow collection entries"),h=g=x=null,f=m=!1,y===63&&(u=e.input.charCodeAt(e.position+1),yn(u)&&(f=m=!0,e.position++,Xe(e,!0,n))),r=e.line,o=e.lineStart,s=e.position,Yt(e,n,co,!1,!0),h=e.tag,g=e.result,Xe(e,!0,n),y=e.input.charCodeAt(e.position),(m||e.line===r)&&y===58&&(f=!0,y=e.input.charCodeAt(++e.position),Xe(e,!0,n),Yt(e,n,co,!1,!0),x=e.result),p?Ft(e,l,v,h,g,x,r,o,s):f?l.push(Ft(e,null,v,h,g,x,r,o,s)):l.push(g),Xe(e,!0,n),y=e.input.charCodeAt(e.position),y===44?(t=!0,y=e.input.charCodeAt(++e.position)):t=!1}ie(e,"unexpected end of the stream within a flow collection")}function vw(e,n){var t,r,o=qo,s=!1,a=!1,l=n,c=0,u=!1,d,f;if(f=e.input.charCodeAt(e.position),f===124)r=!1;else if(f===62)r=!0;else return!1;for(e.kind="scalar",e.result="";f!==0;)if(f=e.input.charCodeAt(++e.position),f===43||f===45)qo===o?o=f===43?Qs:iw:ie(e,"repeat of a chomping mode identifier");else if((d=dw(f))>=0)d===0?ie(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):a?ie(e,"repeat of an indentation width identifier"):(l=n+d-1,a=!0);else break;if(At(f)){do f=e.input.charCodeAt(++e.position);while(At(f));if(f===35)do f=e.input.charCodeAt(++e.position);while(!Qn(f)&&f!==0)}for(;f!==0;){for(na(e),e.lineIndent=0,f=e.input.charCodeAt(e.position);(!a||e.lineIndent<l)&&f===32;)e.lineIndent++,f=e.input.charCodeAt(++e.position);if(!a&&e.lineIndent>l&&(l=e.lineIndent),Qn(f)){c++;continue}if(e.lineIndent<l){o===Qs?e.result+=nn.repeat(`
`,s?1+c:c):o===qo&&s&&(e.result+=`
`);break}for(r?At(f)?(u=!0,e.result+=nn.repeat(`
`,s?1+c:c)):u?(u=!1,e.result+=nn.repeat(`
`,c+1)):c===0?s&&(e.result+=" "):e.result+=nn.repeat(`
`,c):e.result+=nn.repeat(`
`,s?1+c:c),s=!0,a=!0,c=0,t=e.position;!Qn(f)&&f!==0;)f=e.input.charCodeAt(++e.position);mt(e,t,e.position,!1)}return!0}function nl(e,n){var t,r=e.tag,o=e.anchor,s=[],a,l=!1,c;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=s),c=e.input.charCodeAt(e.position);c!==0&&(e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,ie(e,"tab characters must not be used in indentation")),!(c!==45||(a=e.input.charCodeAt(e.position+1),!yn(a))));){if(l=!0,e.position++,Xe(e,!0,-1)&&e.lineIndent<=n){s.push(null),c=e.input.charCodeAt(e.position);continue}if(t=e.line,Yt(e,n,bu,!1,!0),s.push(e.result),Xe(e,!0,-1),c=e.input.charCodeAt(e.position),(e.line===t||e.lineIndent>n)&&c!==0)ie(e,"bad indentation of a sequence entry");else if(e.lineIndent<n)break}return l?(e.tag=r,e.anchor=o,e.kind="sequence",e.result=s,!0):!1}function xw(e,n,t){var r,o,s,a,l,c,u=e.tag,d=e.anchor,f={},m=Object.create(null),p=null,v=null,g=null,h=!1,x=!1,y;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=f),y=e.input.charCodeAt(e.position);y!==0;){if(!h&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,ie(e,"tab characters must not be used in indentation")),r=e.input.charCodeAt(e.position+1),s=e.line,(y===63||y===58)&&yn(r))y===63?(h&&(Ft(e,f,m,p,v,null,a,l,c),p=v=g=null),x=!0,h=!0,o=!0):h?(h=!1,o=!0):ie(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,y=r;else{if(a=e.line,l=e.lineStart,c=e.position,!Yt(e,t,gu,!1,!0))break;if(e.line===s){for(y=e.input.charCodeAt(e.position);At(y);)y=e.input.charCodeAt(++e.position);if(y===58)y=e.input.charCodeAt(++e.position),yn(y)||ie(e,"a whitespace character is expected after the key-value separator within a block mapping"),h&&(Ft(e,f,m,p,v,null,a,l,c),p=v=g=null),x=!0,h=!1,o=!1,p=e.tag,v=e.result;else if(x)ie(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=u,e.anchor=d,!0}else if(x)ie(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=u,e.anchor=d,!0}if((e.line===s||e.lineIndent>n)&&(h&&(a=e.line,l=e.lineStart,c=e.position),Yt(e,n,uo,!0,o)&&(h?v=e.result:g=e.result),h||(Ft(e,f,m,p,v,g,a,l,c),p=v=g=null),Xe(e,!0,-1),y=e.input.charCodeAt(e.position)),(e.line===s||e.lineIndent>n)&&y!==0)ie(e,"bad indentation of a mapping entry");else if(e.lineIndent<n)break}return h&&Ft(e,f,m,p,v,null,a,l,c),x&&(e.tag=u,e.anchor=d,e.kind="mapping",e.result=f),x}function yw(e){var n,t=!1,r=!1,o,s,a;if(a=e.input.charCodeAt(e.position),a!==33)return!1;if(e.tag!==null&&ie(e,"duplication of a tag property"),a=e.input.charCodeAt(++e.position),a===60?(t=!0,a=e.input.charCodeAt(++e.position)):a===33?(r=!0,o="!!",a=e.input.charCodeAt(++e.position)):o="!",n=e.position,t){do a=e.input.charCodeAt(++e.position);while(a!==0&&a!==62);e.position<e.length?(s=e.input.slice(n,e.position),a=e.input.charCodeAt(++e.position)):ie(e,"unexpected end of the stream within a verbatim tag")}else{for(;a!==0&&!yn(a);)a===33&&(r?ie(e,"tag suffix cannot contain exclamation marks"):(o=e.input.slice(n-1,e.position+1),vu.test(o)||ie(e,"named tag handle cannot contain such characters"),r=!0,n=e.position+1)),a=e.input.charCodeAt(++e.position);s=e.input.slice(n,e.position),lw.test(s)&&ie(e,"tag suffix cannot contain flow indicator characters")}s&&!xu.test(s)&&ie(e,"tag name cannot contain such characters: "+s);try{s=decodeURIComponent(s)}catch{ie(e,"tag name is malformed: "+s)}return t?e.tag=s:vt.call(e.tagMap,o)?e.tag=e.tagMap[o]+s:o==="!"?e.tag="!"+s:o==="!!"?e.tag="tag:yaml.org,2002:"+s:ie(e,'undeclared tag handle "'+o+'"'),!0}function ww(e){var n,t;if(t=e.input.charCodeAt(e.position),t!==38)return!1;for(e.anchor!==null&&ie(e,"duplication of an anchor property"),t=e.input.charCodeAt(++e.position),n=e.position;t!==0&&!yn(t)&&!zt(t);)t=e.input.charCodeAt(++e.position);return e.position===n&&ie(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(n,e.position),!0}function Cw(e){var n,t,r;if(r=e.input.charCodeAt(e.position),r!==42)return!1;for(r=e.input.charCodeAt(++e.position),n=e.position;r!==0&&!yn(r)&&!zt(r);)r=e.input.charCodeAt(++e.position);return e.position===n&&ie(e,"name of an alias node must contain at least one character"),t=e.input.slice(n,e.position),vt.call(e.anchorMap,t)||ie(e,'unidentified alias "'+t+'"'),e.result=e.anchorMap[t],Xe(e,!0,-1),!0}function Yt(e,n,t,r,o){var s,a,l,c=1,u=!1,d=!1,f,m,p,v,g,h;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,s=a=l=uo===t||bu===t,r&&Xe(e,!0,-1)&&(u=!0,e.lineIndent>n?c=1:e.lineIndent===n?c=0:e.lineIndent<n&&(c=-1)),c===1)for(;yw(e)||ww(e);)Xe(e,!0,-1)?(u=!0,l=s,e.lineIndent>n?c=1:e.lineIndent===n?c=0:e.lineIndent<n&&(c=-1)):l=!1;if(l&&(l=u||o),(c===1||uo===t)&&(co===t||gu===t?g=n:g=n+1,h=e.position-e.lineStart,c===1?l&&(nl(e,h)||xw(e,h,g))||bw(e,g)?d=!0:(a&&vw(e,g)||hw(e,g)||gw(e,g)?d=!0:Cw(e)?(d=!0,(e.tag!==null||e.anchor!==null)&&ie(e,"alias node should not have any properties")):mw(e,g,co===t)&&(d=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):c===0&&(d=l&&nl(e,h))),e.tag===null)e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);else if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&ie(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),f=0,m=e.implicitTypes.length;f<m;f+=1)if(v=e.implicitTypes[f],v.resolve(e.result)){e.result=v.construct(e.result),e.tag=v.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else if(e.tag!=="!"){if(vt.call(e.typeMap[e.kind||"fallback"],e.tag))v=e.typeMap[e.kind||"fallback"][e.tag];else for(v=null,p=e.typeMap.multi[e.kind||"fallback"],f=0,m=p.length;f<m;f+=1)if(e.tag.slice(0,p[f].tag.length)===p[f].tag){v=p[f];break}v||ie(e,"unknown tag !<"+e.tag+">"),e.result!==null&&v.kind!==e.kind&&ie(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+v.kind+'", not "'+e.kind+'"'),v.resolve(e.result,e.tag)?(e.result=v.construct(e.result,e.tag),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):ie(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||d}function Sw(e){var n=e.position,t,r,o,s=!1,a;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);(a=e.input.charCodeAt(e.position))!==0&&(Xe(e,!0,-1),a=e.input.charCodeAt(e.position),!(e.lineIndent>0||a!==37));){for(s=!0,a=e.input.charCodeAt(++e.position),t=e.position;a!==0&&!yn(a);)a=e.input.charCodeAt(++e.position);for(r=e.input.slice(t,e.position),o=[],r.length<1&&ie(e,"directive name must not be less than one character in length");a!==0;){for(;At(a);)a=e.input.charCodeAt(++e.position);if(a===35){do a=e.input.charCodeAt(++e.position);while(a!==0&&!Qn(a));break}if(Qn(a))break;for(t=e.position;a!==0&&!yn(a);)a=e.input.charCodeAt(++e.position);o.push(e.input.slice(t,e.position))}a!==0&&na(e),vt.call(Zs,r)?Zs[r](e,r,o):po(e,'unknown document directive "'+r+'"')}if(Xe(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,Xe(e,!0,-1)):s&&ie(e,"directives end mark is expected"),Yt(e,e.lineIndent-1,uo,!1,!0),Xe(e,!0,-1),e.checkLineBreaks&&sw.test(e.input.slice(n,e.position))&&po(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&ko(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,Xe(e,!0,-1));return}if(e.position<e.length-1)ie(e,"end of the stream or a document separator is expected");else return}function Su(e,n){e=String(e),n=n||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var t=new fw(e,n),r=e.indexOf("\0");for(r!==-1&&(t.position=r,ie(t,"null byte is not allowed in input")),t.input+="\0";t.input.charCodeAt(t.position)===32;)t.lineIndent+=1,t.position+=1;for(;t.position<t.length-1;)Sw(t);return t.documents}function kw(e,n,t){n!==null&&typeof n=="object"&&typeof t=="undefined"&&(t=n,n=null);var r=Su(e,t);if(typeof n!="function")return r;for(var o=0,s=r.length;o<s;o+=1)n(r[o])}function Pw(e,n){var t=Su(e,n);if(t.length!==0){if(t.length===1)return t[0];throw new bn("expected a single document in the stream, but found more")}}var Rw=kw,Tw=Pw,ku={loadAll:Rw,load:Tw},Pu=Object.prototype.toString,Ru=Object.prototype.hasOwnProperty,ra=65279,Aw=9,Sr=10,$w=13,Dw=32,Iw=33,Bw=34,ui=35,Ew=37,Mw=38,Lw=39,Ow=42,Tu=44,Nw=45,fo=58,zw=61,Fw=62,_w=63,Hw=64,Au=91,$u=93,Ww=96,Du=123,Vw=124,Iu=125,hn={};hn[0]="\\0";hn[7]="\\a";hn[8]="\\b";hn[9]="\\t";hn[10]="\\n";hn[11]="\\v";hn[12]="\\f";hn[13]="\\r";hn[27]="\\e";hn[34]='\\"';hn[92]="\\\\";hn[133]="\\N";hn[160]="\\_";hn[8232]="\\L";hn[8233]="\\P";var jw=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],Uw=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function qw(e,n){var t,r,o,s,a,l,c;if(n===null)return{};for(t={},r=Object.keys(n),o=0,s=r.length;o<s;o+=1)a=r[o],l=String(n[a]),a.slice(0,2)==="!!"&&(a="tag:yaml.org,2002:"+a.slice(2)),c=e.compiledTypeMap.fallback[a],c&&Ru.call(c.styleAliases,l)&&(l=c.styleAliases[l]),t[a]=l;return t}function Gw(e){var n,t,r;if(n=e.toString(16).toUpperCase(),e<=255)t="x",r=2;else if(e<=65535)t="u",r=4;else if(e<=4294967295)t="U",r=8;else throw new bn("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+t+nn.repeat("0",r-n.length)+n}var Yw=1,kr=2;function Kw(e){this.schema=e.schema||ea,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=nn.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=qw(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType=e.quotingType==='"'?kr:Yw,this.forceQuotes=e.forceQuotes||!1,this.replacer=typeof e.replacer=="function"?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function tl(e,n){for(var t=nn.repeat(" ",n),r=0,o=-1,s="",a,l=e.length;r<l;)o=e.indexOf(`
`,r),o===-1?(a=e.slice(r),r=l):(a=e.slice(r,o+1),r=o+1),a.length&&a!==`
`&&(s+=t),s+=a;return s}function di(e,n){return`
`+nn.repeat(" ",e.indent*n)}function Qw(e,n){var t,r,o;for(t=0,r=e.implicitTypes.length;t<r;t+=1)if(o=e.implicitTypes[t],o.resolve(n))return!0;return!1}function mo(e){return e===Dw||e===Aw}function Pr(e){return 32<=e&&e<=126||161<=e&&e<=55295&&e!==8232&&e!==8233||57344<=e&&e<=65533&&e!==ra||65536<=e&&e<=1114111}function rl(e){return Pr(e)&&e!==ra&&e!==$w&&e!==Sr}function ol(e,n,t){var r=rl(e),o=r&&!mo(e);return(t?r:r&&e!==Tu&&e!==Au&&e!==$u&&e!==Du&&e!==Iu)&&e!==ui&&!(n===fo&&!o)||rl(n)&&!mo(n)&&e===ui||n===fo&&o}function Jw(e){return Pr(e)&&e!==ra&&!mo(e)&&e!==Nw&&e!==_w&&e!==fo&&e!==Tu&&e!==Au&&e!==$u&&e!==Du&&e!==Iu&&e!==ui&&e!==Mw&&e!==Ow&&e!==Iw&&e!==Vw&&e!==zw&&e!==Fw&&e!==Lw&&e!==Bw&&e!==Ew&&e!==Hw&&e!==Ww}function Xw(e){return!mo(e)&&e!==fo}function ur(e,n){var t=e.charCodeAt(n),r;return t>=55296&&t<=56319&&n+1<e.length&&(r=e.charCodeAt(n+1),r>=56320&&r<=57343)?(t-55296)*1024+r-56320+65536:t}function Bu(e){var n=/^\n* /;return n.test(e)}var Eu=1,pi=2,Mu=3,Lu=4,Lt=5;function Zw(e,n,t,r,o,s,a,l){var c,u=0,d=null,f=!1,m=!1,p=r!==-1,v=-1,g=Jw(ur(e,0))&&Xw(ur(e,e.length-1));if(n||a)for(c=0;c<e.length;u>=65536?c+=2:c++){if(u=ur(e,c),!Pr(u))return Lt;g=g&&ol(u,d,l),d=u}else{for(c=0;c<e.length;u>=65536?c+=2:c++){if(u=ur(e,c),u===Sr)f=!0,p&&(m=m||c-v-1>r&&e[v+1]!==" ",v=c);else if(!Pr(u))return Lt;g=g&&ol(u,d,l),d=u}m=m||p&&c-v-1>r&&e[v+1]!==" "}return!f&&!m?g&&!a&&!o(e)?Eu:s===kr?Lt:pi:t>9&&Bu(e)?Lt:a?s===kr?Lt:pi:m?Lu:Mu}function eC(e,n,t,r,o){e.dump=function(){if(n.length===0)return e.quotingType===kr?'""':"''";if(!e.noCompatMode&&(jw.indexOf(n)!==-1||Uw.test(n)))return e.quotingType===kr?'"'+n+'"':"'"+n+"'";var s=e.indent*Math.max(1,t),a=e.lineWidth===-1?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-s),l=r||e.flowLevel>-1&&t>=e.flowLevel;function c(u){return Qw(e,u)}switch(Zw(n,l,e.indent,a,c,e.quotingType,e.forceQuotes&&!r,o)){case Eu:return n;case pi:return"'"+n.replace(/'/g,"''")+"'";case Mu:return"|"+il(n,e.indent)+al(tl(n,s));case Lu:return">"+il(n,e.indent)+al(tl(nC(n,a),s));case Lt:return'"'+tC(n)+'"';default:throw new bn("impossible error: invalid scalar style")}}()}function il(e,n){var t=Bu(e)?String(n):"",r=e[e.length-1]===`
`,o=r&&(e[e.length-2]===`
`||e===`
`),s=o?"+":r?"":"-";return t+s+`
`}function al(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function nC(e,n){for(var t=/(\n+)([^\n]*)/g,r=function(){var u=e.indexOf(`
`);return u=u!==-1?u:e.length,t.lastIndex=u,sl(e.slice(0,u),n)}(),o=e[0]===`
`||e[0]===" ",s,a;a=t.exec(e);){var l=a[1],c=a[2];s=c[0]===" ",r+=l+(!o&&!s&&c!==""?`
`:"")+sl(c,n),o=s}return r}function sl(e,n){if(e===""||e[0]===" ")return e;for(var t=/ [^ ]/g,r,o=0,s,a=0,l=0,c="";r=t.exec(e);)l=r.index,l-o>n&&(s=a>o?a:l,c+=`
`+e.slice(o,s),o=s+1),a=l;return c+=`
`,e.length-o>n&&a>o?c+=e.slice(o,a)+`
`+e.slice(a+1):c+=e.slice(o),c.slice(1)}function tC(e){for(var n="",t=0,r,o=0;o<e.length;t>=65536?o+=2:o++)t=ur(e,o),r=hn[t],!r&&Pr(t)?(n+=e[o],t>=65536&&(n+=e[o+1])):n+=r||Gw(t);return n}function rC(e,n,t){var r="",o=e.tag,s,a,l;for(s=0,a=t.length;s<a;s+=1)l=t[s],e.replacer&&(l=e.replacer.call(t,String(s),l)),(tt(e,n,l,!1,!1)||typeof l=="undefined"&&tt(e,n,null,!1,!1))&&(r!==""&&(r+=","+(e.condenseFlow?"":" ")),r+=e.dump);e.tag=o,e.dump="["+r+"]"}function ll(e,n,t,r){var o="",s=e.tag,a,l,c;for(a=0,l=t.length;a<l;a+=1)c=t[a],e.replacer&&(c=e.replacer.call(t,String(a),c)),(tt(e,n+1,c,!0,!0,!1,!0)||typeof c=="undefined"&&tt(e,n+1,null,!0,!0,!1,!0))&&((!r||o!=="")&&(o+=di(e,n)),e.dump&&Sr===e.dump.charCodeAt(0)?o+="-":o+="- ",o+=e.dump);e.tag=s,e.dump=o||"[]"}function oC(e,n,t){var r="",o=e.tag,s=Object.keys(t),a,l,c,u,d;for(a=0,l=s.length;a<l;a+=1)d="",r!==""&&(d+=", "),e.condenseFlow&&(d+='"'),c=s[a],u=t[c],e.replacer&&(u=e.replacer.call(t,c,u)),tt(e,n,c,!1,!1)&&(e.dump.length>1024&&(d+="? "),d+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),tt(e,n,u,!1,!1)&&(d+=e.dump,r+=d));e.tag=o,e.dump="{"+r+"}"}function iC(e,n,t,r){var o="",s=e.tag,a=Object.keys(t),l,c,u,d,f,m;if(e.sortKeys===!0)a.sort();else if(typeof e.sortKeys=="function")a.sort(e.sortKeys);else if(e.sortKeys)throw new bn("sortKeys must be a boolean or a function");for(l=0,c=a.length;l<c;l+=1)m="",(!r||o!=="")&&(m+=di(e,n)),u=a[l],d=t[u],e.replacer&&(d=e.replacer.call(t,u,d)),tt(e,n+1,u,!0,!0,!0)&&(f=e.tag!==null&&e.tag!=="?"||e.dump&&e.dump.length>1024,f&&(e.dump&&Sr===e.dump.charCodeAt(0)?m+="?":m+="? "),m+=e.dump,f&&(m+=di(e,n)),tt(e,n+1,d,!0,f)&&(e.dump&&Sr===e.dump.charCodeAt(0)?m+=":":m+=": ",m+=e.dump,o+=m));e.tag=s,e.dump=o||"{}"}function cl(e,n,t){var r,o,s,a,l,c;for(o=t?e.explicitTypes:e.implicitTypes,s=0,a=o.length;s<a;s+=1)if(l=o[s],(l.instanceOf||l.predicate)&&(!l.instanceOf||typeof n=="object"&&n instanceof l.instanceOf)&&(!l.predicate||l.predicate(n))){if(t?l.multi&&l.representName?e.tag=l.representName(n):e.tag=l.tag:e.tag="?",l.represent){if(c=e.styleMap[l.tag]||l.defaultStyle,Pu.call(l.represent)==="[object Function]")r=l.represent(n,c);else if(Ru.call(l.represent,c))r=l.represent[c](n,c);else throw new bn("!<"+l.tag+'> tag resolver accepts not "'+c+'" style');e.dump=r}return!0}return!1}function tt(e,n,t,r,o,s,a){e.tag=null,e.dump=t,cl(e,t,!1)||cl(e,t,!0);var l=Pu.call(e.dump),c=r,u;r&&(r=e.flowLevel<0||e.flowLevel>n);var d=l==="[object Object]"||l==="[object Array]",f,m;if(d&&(f=e.duplicates.indexOf(t),m=f!==-1),(e.tag!==null&&e.tag!=="?"||m||e.indent!==2&&n>0)&&(o=!1),m&&e.usedDuplicates[f])e.dump="*ref_"+f;else{if(d&&m&&!e.usedDuplicates[f]&&(e.usedDuplicates[f]=!0),l==="[object Object]")r&&Object.keys(e.dump).length!==0?(iC(e,n,e.dump,o),m&&(e.dump="&ref_"+f+e.dump)):(oC(e,n,e.dump),m&&(e.dump="&ref_"+f+" "+e.dump));else if(l==="[object Array]")r&&e.dump.length!==0?(e.noArrayIndent&&!a&&n>0?ll(e,n-1,e.dump,o):ll(e,n,e.dump,o),m&&(e.dump="&ref_"+f+e.dump)):(rC(e,n,e.dump),m&&(e.dump="&ref_"+f+" "+e.dump));else if(l==="[object String]")e.tag!=="?"&&eC(e,e.dump,n,s,c);else{if(l==="[object Undefined]")return!1;if(e.skipInvalid)return!1;throw new bn("unacceptable kind of an object to dump "+l)}e.tag!==null&&e.tag!=="?"&&(u=encodeURI(e.tag[0]==="!"?e.tag.slice(1):e.tag).replace(/!/g,"%21"),e.tag[0]==="!"?u="!"+u:u.slice(0,18)==="tag:yaml.org,2002:"?u="!!"+u.slice(18):u="!<"+u+">",e.dump=u+" "+e.dump)}return!0}function aC(e,n){var t=[],r=[],o,s;for(fi(e,t,r),o=0,s=r.length;o<s;o+=1)n.duplicates.push(t[r[o]]);n.usedDuplicates=new Array(s)}function fi(e,n,t){var r,o,s;if(e!==null&&typeof e=="object")if(o=n.indexOf(e),o!==-1)t.indexOf(o)===-1&&t.push(o);else if(n.push(e),Array.isArray(e))for(o=0,s=e.length;o<s;o+=1)fi(e[o],n,t);else for(r=Object.keys(e),o=0,s=r.length;o<s;o+=1)fi(e[r[o]],n,t)}function sC(e,n){n=n||{};var t=new Kw(n);t.noRefs||aC(e,t);var r=e;return t.replacer&&(r=t.replacer.call({"":r},"",r)),tt(t,0,r,!0,!0)?t.dump+`
`:""}var lC=sC,cC={dump:lC};function oa(e,n){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+n+" instead, which is now safe by default.")}}var uC=pn,dC=Jc,pC=nu,fC=au,mC=su,hC=ea,gC=ku.load,bC=ku.loadAll,vC=cC.dump,xC=bn,yC={binary:pu,float:iu,map:eu,null:tu,pairs:mu,set:hu,timestamp:uu,bool:ru,int:ou,merge:du,omap:fu,seq:Zc,str:Xc},wC=oa("safeLoad","load"),CC=oa("safeLoadAll","loadAll"),SC=oa("safeDump","dump"),Ou={Type:uC,Schema:dC,FAILSAFE_SCHEMA:pC,JSON_SCHEMA:fC,CORE_SCHEMA:mC,DEFAULT_SCHEMA:hC,load:gC,loadAll:bC,dump:vC,YAMLException:xC,types:yC,safeLoad:wC,safeLoadAll:CC,safeDump:SC};function kC(e){let n=[],t=!1;if(e)try{if(n=JSON.parse(e),typeof n!="object")throw new Error("invalid")}catch{try{if(n=Ou.load(e),typeof n!="object")throw new Error("invalid")}catch{t=!0}}return t&&(n=[]),{data:Array.isArray(n)?n:[n],error:t}}const PC=()=>{const e=Ee(),{t:n}=ke(),t=U(_a("error")),r=U(_a("textBox")),o=s=>{const a=s.target.value;e(Ha({key:"textBox",value:a}));const{data:l,error:c}=kC(a);e(Ha({key:"extraModifiers",value:l})),e(ip(c?n("Invalid Format."):""))};return w(ge,{children:[i(Kn,{label:n("Extra Modifiers"),variant:"standard",sx:{width:"100%",marginBottom:1},multiline:!0,minRows:5,value:r,error:t!=="",helperText:t,onChange:o}),w(Kt,{children:[i(Jt,{expandIcon:i(Zt,{}),children:i(V,{children:i(J,{children:"Formatting examples"})})}),i(Qt,{children:w(he,{container:!0,children:[w(he,{item:!0,xs:6,children:[i(V,{children:"YAML"}),i("pre",{style:{overflow:"auto hidden"},children:rp})]}),w(he,{item:!0,xs:6,children:[i(V,{children:"JSON"}),i("pre",{style:{overflow:"auto hidden"},children:op})]})]})})]})]})},RC=()=>{const{t:e}=ke();return i(Tn,{title:e("Extra Modifiers"),helpText:w(ge,{children:[i(J,{children:"Allows adding arbitrary extra modifiers. The textbox expects valid YAML or JSON formatting. Multiple modifiers can be entered as an array."}),i(X,{component:"span",sx:{mt:1,display:"block"}}),w(J,{children:["For more information,"," ",i(lo,{href:"https://github.com/discretize/discretize-gear-optimizer/tree/staging/docs/Contributing/Data%20Format",target:"_blank",rel:"noopener",children:"see the data format documentation on Github"})," ","or ask in Discord!"]})]}),content:i(PC,{})})};var TC=G.memo(RC),ia={},AC=qe.exports;Object.defineProperty(ia,"__esModule",{value:!0});var Nu=ia.default=void 0,$C=AC(Ge),DC=Ke,IC=(0,$C.default)((0,DC.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");Nu=ia.default=IC;var aa={},BC=qe.exports;Object.defineProperty(aa,"__esModule",{value:!0});var zu=aa.default=void 0,EC=BC(Ge),MC=Ke,LC=(0,EC.default)((0,MC.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");zu=aa.default=LC;var sa={},OC=qe.exports;Object.defineProperty(sa,"__esModule",{value:!0});var la=sa.default=void 0,NC=OC(Ge),zC=Ke,FC=(0,NC.default)((0,zC.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");la=sa.default=FC;var ca={},_C=qe.exports;Object.defineProperty(ca,"__esModule",{value:!0});var Fu=ca.default=void 0,HC=_C(Ge),WC=Ke,VC=(0,HC.default)((0,WC.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline");Fu=ca.default=VC;var ua={},jC=qe.exports;Object.defineProperty(ua,"__esModule",{value:!0});var mi=ua.default=void 0,UC=jC(Ge),qC=Ke,GC=(0,UC.default)((0,qC.jsx)("path",{d:"M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"}),"SelectAll");mi=ua.default=GC;const YC=Je()(e=>({root:{fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeight,fontSize:e.typography.pxToRem(12),lineHeight:1,padding:`${e.spacing(.25)} ${e.spacing(.75)}`,borderRadius:e.shape.borderRadius,border:`1px solid ${e.palette.divider}`,color:e.palette.text.secondary,display:"inline-block",backgroundColor:e.palette.background.embossed,boxShadow:e.shadows[1]}}));function Go({className:e,children:n}){const{classes:t}=YC();return i("span",{className:ft(t.root,e),children:n})}const KC=Je()(e=>({root:{padding:e.spacing(4)},textfield:{minWidth:550,[e.breakpoints.down("sm")]:{minWidth:"unset"}},toggleAllLabel:{marginLeft:e.spacing(.5)}}));function QC(e,n){return e.reduce(function(t,r){return(t[r[n]]=t[r[n]]||[]).push(r),t},{})}function JC(e){const{type:n,modifierData:t,modifierDataById:r}=e,{classes:o}=KC(),{t:s}=ke(),a=Ee(),l=U(Pi)[n]||[],[c,u]=G.useState(""),d=G.useRef(),f=G.useMemo(()=>QC(t.flatMap(({items:x})=>x.map(y=>y.id)).map(x=>pe({id:x},r[x])),"section"),[r,t]),m=Object.entries(f).map(([x,y])=>{const S=y.filter(({text:R,gw2id:T})=>R.toLowerCase().includes(c.toLowerCase())||`${T}`.includes(c));return[x,S]}),p=x=>{const y=[...l.filter(S=>S!==x.target.name||x.target.checked)];x.target.checked&&y.push(x.target.name),a(pr({type:n,ids:y}))},v=x=>{u(x.target.value)},g=()=>{const x=m.flatMap(y=>y[1]).map(({id:y})=>y);a(pr({type:n,ids:[...l,...x]}))},h=()=>{const x=m.flatMap(S=>S[1]).map(({id:S})=>S),y=l.filter(S=>!x.includes(S));a(pr({type:n,ids:y}))};return G.useEffect(()=>(document.onkeydown=function(x){x.ctrlKey&&x.code==="KeyK"&&(d.current.focus(),x.preventDefault()),x.ctrlKey&&x.code==="KeyS"&&(g(),x.preventDefault()),x.ctrlKey&&x.code==="KeyD"&&(h(),x.preventDefault())},()=>{document.onkeydown=void 0})),w(av,{dividers:!0,className:o.root,children:[i(Kn,{id:"outlined-basic",label:"Search",variant:"outlined",fullWidth:!0,autoFocus:!0,className:o.textfield,inputRef:d,value:c,onChange:v,InputProps:{endAdornment:i(so,{position:"end",children:i(Go,{children:s("Ctrl+k")})})}}),w(X,{display:"flex",children:[i(X,{flexGrow:1}),w(Yn,{sx:{textTransform:"unset"},startIcon:i(mi,{}),onClick:h,children:[s("Delete visible")," ",i(Go,{className:o.toggleAllLabel,children:s("Ctrl+d")})]}),w(Yn,{sx:{textTransform:"unset"},startIcon:i(mi,{}),onClick:g,children:[s("Select visible")," ",i(Go,{className:o.toggleAllLabel,children:s("Ctrl+s")})]})]}),m.map(([x,y])=>y.length===0?null:i("div",{children:w(mn,{sx:{margin:1},component:"fieldset",variant:"standard",children:[i(vr,{component:"legend",children:s("extraSection",{context:x})}),i(zi,{children:y.map(({id:S,gw2id:R,subText:T,text:A})=>i(Fn,{control:i(Pc,{name:S,checked:l.includes(S),onChange:p}),label:w(ge,{children:[i(Ze,{id:R,disableLink:!0,text:A.replace("Superior ","")}),T&&i(V,{variant:"caption",sx:{marginLeft:1,fontWeight:200},children:s("extraSubText",{context:T})})]})},S))})]})}))]})}const XC=Je()(e=>({list:{width:"100%",backgroundColor:e.palette.background.embossed,marginBottom:e.spacing(2)},subText:{marginLeft:e.spacing(1),fontWeight:200}}));function ar(e){const{type:n,label:t,modifierDataById:r,text:o}=e,{classes:s}=XC(),a=Ee(),{t:l}=ke(),[c,u]=G.useState(!1),d=()=>u(!0),f=()=>u(!1),m=G.useRef(null);G.useEffect(()=>{if(c){const{current:y}=m;y!==null&&y.focus()}},[c]);const p=U(Pi)[n]||[],v=U(ap),g=y=>S=>{a(lp({type:n,id:y,amount:S.target.value}))},h=y=>()=>{a(pr({type:n,ids:p.filter(S=>S!==y)}))},x=()=>{a(pr({type:n,ids:[]}))};return w(ge,{children:[w(X,{display:"flex",mb:1,children:[i(V,{variant:"h6",component:"span",flexGrow:1,children:t}),w(Yn,{variant:"contained",size:"small",startIcon:i(Nu,{}),onClick:d,children:[l("Add")," ",o]})]}),i(sp,{className:s.list,disablePadding:!0,children:p.length>0?p.map(y=>{var T,A,I,D,$;const{amountData:S}=Pn[y],R=((T=v[n][y])==null?void 0:T.amount)||"";return i(Wa,{secondaryAction:i(_n,{edge:"end","aria-label":"delete",onClick:h(y),children:i(zu,{})}),children:i(Va,{primary:w(X,{display:"flex",children:[i(Ze,{id:(A=r[y])==null?void 0:A.gw2id,disableLink:!0,text:(I=r[y])==null?void 0:I.text.replace("Superior ","")}),((D=r[y])==null?void 0:D.subText)&&i(V,{variant:"caption",className:s.subText,children:l("extraSubText",{context:($=r[y])==null?void 0:$.subText})}),i(X,{flexGrow:1}),S&&i(bt,{placeholder:S.default,endLabel:l("amountLabel",{context:S.label}),handleAmountChange:g(y),value:R,maxWidth:38})]})})},y)}):i(Wa,{children:i(Va,{children:l("None")})})}),w(qb,{open:c,onClose:f,scroll:"paper","aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",TransitionComponent:wi,maxWidth:"md",PaperProps:{elevation:4},children:[w(dv,{id:"scroll-dialog-title",display:"flex",children:[i(V,{flexGrow:1,component:"span",alignSelf:"center",children:t}),i(_n,{edge:"start",color:"inherit",onClick:f,"aria-label":"close",children:i(la,{})})]}),i(JC,pe({},e)),w(Xb,{children:[i(Yn,{startIcon:i(Fu,{}),onClick:x,children:l("Unselect all")}),i(Yn,{onClick:f,children:l("Okay")})]})]})]})}const ZC=()=>{const{t:e}=ke(),n=Ee(),r=(U(Pi).Nourishment||[]).some(s=>{var a;return(a=Pn[s])==null?void 0:a.hasLifesteal}),o=U(cp);return w(ge,{children:[i(ar,{type:"Sigil1",text:e("Sigil 1"),label:i(Ze,{id:24615,disableLink:!0,disableTooltip:!0,text:e("Sigil 1")}),modifierData:tr.sigils,modifierDataById:Pn}),i(ar,{type:"Sigil2",text:e("Sigil 2"),label:i(Ze,{id:24868,disableLink:!0,disableTooltip:!0,text:e("Sigil 2")}),modifierData:tr.sigils,modifierDataById:Pn}),i(ar,{type:"Runes",text:e("Runes"),label:i(Ze,{id:24836,disableLink:!0,disableTooltip:!0,text:e("Runes")}),modifierData:tr.runes,modifierDataById:Pn}),i(ar,{type:"Nourishment",text:e("Nourishment"),label:i(ro,{disableLink:!0,name:"Nourishment",text:e("Nourishment")}),modifierData:tr.food,modifierDataById:Pn}),r?w(X,{sx:{mt:-1,mb:2,display:"flex",justifyContent:"flex-end",alignItems:"center"},children:[i(V,{variant:"caption",sx:{mr:1,mt:1},children:i(J,{children:"Lifesteal frequency:"})}),i(bt,{placeholder:ja.amountData.default,endLabel:ja.amountData.label,handleAmountChange:s=>n(up(s.target.value)),value:o,maxWidth:38})]}):null,i(ar,{type:"Enhancement",text:e("Enhancement"),label:i(ro,{disableLink:!0,name:"Enhancement",text:e("Enhancement")}),modifierData:tr.utility,modifierDataById:Pn})]})};var eS=G.memo(ZC);const nS=({profession:e,data:n})=>{const{t}=ke(),r=Ee();let o;if(e){const{eliteSpecializations:a}=vo.find(l=>l.profession===e);o=n.presetExtras.list.filter(l=>l.profession===null||l.profession===e||a.includes(l.profession))}const s=G.useCallback(a=>{if(a===null)return;const l=JSON.parse(a.value);r(dp(l))},[r]);return i(Tn,{title:t("Runes & Sigils & Food"),content:i(eS,{}),helpText:t("Select multiple options if desired and every combination will be tested."),extraInfo:i(ge,{children:e!==""&&i(Xt,{data:o,handleClick:s,presetCategory:"extra"})})})};var ul=G.memo(nS),da={},tS=qe.exports;Object.defineProperty(da,"__esModule",{value:!0});var _u=da.default=void 0,rS=tS(Ge),oS=Ke,iS=(0,rS.default)((0,oS.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");_u=da.default=iS;const aS=80793,hi=e=>e.filter(n=>!!n).map(n=>({label:n,category:Kl[n].category})),dl=["Power DPS","Condi DPS","Support","Hybrid","Open World","Custom"],sS=hi(Object.keys(Kl)).sort((e,n)=>{const t=dl.indexOf(e.category),r=dl.indexOf(n.category);return t===r?0:t>r?1:-1}),lS=Je()(e=>({text:{color:"#ddd !important"},textfield:{minWidth:180},option:{paddingLeft:e.spacing(5)},group:{fontWeight:300,marginLeft:e.spacing(2)}})),Hu=({name:e,multiple:n,onChange:t,value:r})=>{const{classes:o}=lS(),{t:s}=ke();return i(Li,Ve(pe({},n&&{multiple:!0,disableCloseOnSelect:!0}),{options:sS,isOptionEqualToValue:(a,l)=>a.label===l.label,getOptionLabel:a=>s("affix",{context:a.label}),groupBy:a=>a.category,value:n?hi(r):hi([r])[0]||null,onChange:t,renderInput:a=>i(Kn,Ve(pe({},a),{variant:"standard",label:e||s("Affixes"),placeholder:s("Select Affixes"),margin:"dense"})),renderGroup:({group:a,children:l})=>w(G.Fragment,{children:[i(V,{variant:"caption",className:o.group,children:a}),l,i(Ni,{})]},a),renderOption:(u,c)=>{var d=u,{className:a}=d,l=Lr(d,["className"]);return w("li",Ve(pe({},l),{className:ft({[o.option]:n,[a]:!0}),children:[n&&i(X,{sx:{width:32},children:r.find(f=>f===c.label)&&i(_u,{sx:{fontSize:"1rem"}})}),c.label==="Custom"?i(Ze,{id:aS,disableIcon:!0,disableLink:!0,text:s("affix",{context:c.label}),className:o.text}):i(pp,{stat:c.label,type:"Ring",disableLink:!0,text:s("affix",{context:c.label}),className:o.text})]}))},renderTags:(a,l)=>a.map((c,u)=>i($t,pe({variant:"outlined",label:s("affix",{context:c.label})},l({index:u})),c.label))}))},cS=()=>{const e=Ee(),n=U(fp),t=U(kn("weaponType")),{t:r}=ke();let o=Ua;t!=="Dual wield"&&(o=Ua.slice(0,13));const s=a=>(l,c)=>{e(mp({index:a,value:(c==null?void 0:c.label)||null}))};return i(he,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"flex-start",spacing:1,children:o.map((a,l)=>i(he,{item:!0,xs:6,sm:4,md:2,children:i(Hu,{name:r("slotName",{context:a.name}),onChange:s(l),value:n[l]})},l))})},uS=()=>{const{t:e}=ke(),n=hp(),t=Ee(),r=()=>{const a=xo(n.getState()),l=a==null?void 0:a.gear;l&&t(gp(l))},o=()=>{t(bp())},s={margin:4};return i(Tn,{title:e("Forced Slots"),content:i(cS,{}),helpText:i(J,{children:"Lock any gear slots to a specific type to work with what you already have or share gear between multiple builds."}),extraInfo:w(ge,{children:[i($t,{style:s,variant:"outlined",onClick:o,label:e("Clear")}),i($t,{style:s,variant:"outlined",onClick:r,label:e("Copy from selected character")})]})})};var pl=G.memo(uS);const wt=G.memo(Ze),dS=G.memo(jl),pS=G.memo(vp),fS=[{value:0,label:""},{value:5,label:"Impedence 1"},{value:10,label:"Impedence 2"},{value:15,label:"Impedence 3"},{value:20,label:"Impedence 4"}],mS=[{value:0,label:""},{value:5,label:"Savant"},{value:10,label:"Prodigy"},{value:15,label:"Champion"},{value:25,label:"God"}],hS=[{value:150,label:"150"},{value:222,label:"222"},{value:343,label:"343"}],gS=Je()(e=>({bigStyle:{fontSize:17},sliderMark:{transform:"translateX(-100%)",[e.breakpoints.down("lg")]:{display:"none"}}})),bS=()=>{const e=Ee(),{classes:n}=gS(),t=Ql(U(Jl)).value,r=Xl(U(Zl)).value,o=U(ec),s=U(nc),{enabled:a,impedence:l,attunement:c,singularity:u,tear:d,slots:f,freeWvW:m,ownedMatrix:p}=U(xp),{error:v,resultText:g,resultArray:h,cost:x,maxRequiredMatrix:y}=U(yp),S=G.useCallback((C,P)=>e(wp(P)),[e]),R=G.useCallback((C,P)=>e(tc(String(P))),[e]),T=G.useCallback((C,P)=>e(Cp(String(P))),[e]),A=G.useCallback((C,P)=>e(Sp(P)),[e]),I=G.useCallback((C,P)=>e(kp(P)),[e]),D=G.useCallback((C,P)=>e(Pp(P)),[e]),$=G.useCallback((C,P)=>e(Rp(P)),[e]);return w(Kt,{expanded:a,onChange:S,TransitionProps:{unmountOnExit:!0},children:[i(Jt,{expandIcon:i(Zt,{}),children:i(V,{children:i(J,{children:"Infusion Helper (WIP)"})})}),w(Qt,{style:{flexDirection:"column",padding:32},children:[i(V,{children:i(J,{children:"Account AR"})}),i(qn,{value:l,step:null,min:0,max:20,marks:fS,valueLabelDisplay:"auto",onChange:A,classes:{markLabel:n.sliderMark},mb:3.5}),i(qn,{value:c,step:null,min:0,max:25,marks:mS,valueLabelDisplay:"auto",onChange:I,classes:{markLabel:n.sliderMark},mb:3.5}),i(Tt,{value:u,checked:u,label:i(V,{variant:"body2",children:w(J,{children:["+5 AR from ",i(dS,{name:"Rigorous Certainty",disableLink:!0})]})}),onChange:C=>e(Tp(C.target.checked))}),i(X,{mb:2,children:i(Tt,{value:d,checked:d,label:i(V,{variant:"body2",children:w(J,{children:["+15 AR from ",i(wt,{id:70596,disableLink:!0})," w/ mastery"]})}),onChange:C=>e(Ap(C.target.checked))})}),i(V,{id:"target-ar",children:i(J,{children:"Target AR"})}),i(qn,{value:t,step:1,min:0,max:409,marks:hS,valueLabelDisplay:"on",onChange:R,"aria-labelledby":"target-ar"}),i(V,{id:"stat-infusion-slots",children:i(J,{children:"Stat Infusion Slots"})}),i(qn,{value:r,mb:2,step:1,min:0,max:18,marks:!0,valueLabelDisplay:"auto",onChange:T,"aria-labelledby":"total-infusion-slots"}),i(V,{id:"total-infusion-slots",children:i(J,{children:"Total Infusion Slots"})}),i(qn,{value:f,step:1,min:0,max:18,marks:!0,valueLabelDisplay:"auto",onChange:D,"aria-labelledby":"total-infusion-slots"}),i(X,{mb:2,children:i(Tt,{value:m,checked:m,label:i(V,{variant:"body2",children:i(J,{children:"Enable free WvW stat infusions"})}),onChange:C=>e($p(C.target.checked))})}),y?w(ge,{children:[i(V,{id:"owned-matrix",children:w(J,{children:["Use Owned ",i(wt,{id:79230,disableLink:!0}),":"]})}),i(qn,{value:p,mb:2,step:5,min:0,max:360,marks:[{value:y,label:String(y)}],valueLabelDisplay:"auto",onChange:$,"aria-labelledby":"owned-matrix"})]}):null,v?i(wo,{variant:"outlined",severity:"error",children:v}):w(ge,{children:[i(Ri,{text:"Result"}),i(V,{style:{marginBottom:16},children:w(J,{children:["Estimated Cost: ",i(pS,{value:x*1e4})]})}),w(V,{children:[i(J,{children:"Infusions: "}),g]}),i(V,{variant:"body2",children:h.map((C,P)=>{var q,j;const L=Dp[C],E=(q=L==null?void 0:L[o])==null?void 0:q.id,N=(j=L==null?void 0:L[s])==null?void 0:j.id;let z;return E&&N?z=w(ge,{children:[i(wt,{id:E,disableLink:!0,disableText:!0}),i(wt,{id:N,disableLink:!0,disableText:!0})," ",i(wt,{id:N,disableLink:!0,disableIcon:!0,disableTooltip:!0,text:C})]}):E||N||(L==null?void 0:L.id)?z=i(wt,{id:E||N||(L==null?void 0:L.id),disableLink:!0,className:n.bigStyle}):C.includes("Agony Infusion")?z=i(wt,{id:49447,disableLink:!0,disableTooltip:!0,className:n.bigStyle}):z=C,w(G.Fragment,{children:[z,i("br",{})]},P)})}),i(V,{variant:"caption",children:w(J,{children:["Note: Not cost optimized for ",">","1 weapon set."]})})]})]})]})};var vS=G.memo(bS);const Wu={"150":"150","162":"162","203":"203 (DH Radiance)","222":"222","244":"244 (Soulbeast)","245":"245 (Weaver)","343":"343 (DH Virtues)"},xS=Object.keys(Wu),yS=Je()(e=>({formControl:{width:200,marginRight:e.spacing(3)},formControl2:{width:80}})),wS=()=>{const{classes:e}=yS(),n=Ee(),{t}=ke(),r=U(Jl),o=U(Ip),s=U(Zl),a=U(ec),l=U(nc),c=U(Bp),u=U(Ep),d=G.useCallback((p,v)=>n(tc(v)),[n]),f=(p,v,g)=>w(mn,{className:e.formControl,variant:"standard",children:[i(Nn,{id:`dropdown_${p}`,children:p}),w(ct,{labelId:`dropdown_${p}`,value:typeof g=="undefined"?"":g.toString(),input:i(zn,{name:p,id:p}),onChange:h=>n(qa({key:v,value:h.target.value})),renderValue:h=>i(Ze,{id:oo[h],disableLink:!0}),children:[w(Zn,{value:"",children:[t("None")," "]}),Object.entries(oo).map(([h,x])=>i(Zn,{value:h,children:i(Ze,{id:x,disableLink:!0})},h))]})]}),m=(p,v,g,h)=>{const{error:x}=Xl(g);return w(mn,{className:h,variant:"standard",children:[i(Nn,{htmlFor:`${v}_input-with-icon-adornment`,children:p}),i(zn,{id:`${v}_input-with-icon-adornment`,value:g,onChange:y=>n(qa({key:v,value:y.target.value})),autoComplete:"off",error:x})]})};return w(he,{container:!0,spacing:4,children:[w(he,{container:!0,item:!0,spacing:2,alignItems:"center",justifyContent:"flex-start",children:[i(he,{item:!0,xs:12,sm:!0,children:i(Tt,{value:o,checked:o,label:w(ge,{children:[i(J,{children:"Include "}),i(Ze,{id:79722,disableLink:!0}),i(jn,{text:t("Adds 150% of your Agony Resistance to Precision, Toughness, and Concentration."),size:"small"})]}),onChange:p=>n(Mp(p.target.checked))})}),i(he,{item:!0,xs:12,sm:!0,children:i(bt,{className:e.formControl,useAutoComplete:!0,parseFn:Ql,handleAmountChange:d,label:t("Agony Resistance"),endLabel:i(Un,{name:"Agony Resistance",disableLink:!0,disableText:!0}),autoCompleteProps:{options:xS,renderOption:(p,v)=>i("li",Ve(pe({},p),{children:Wu[v]}))},value:r})})]}),w(he,{container:!0,item:!0,spacing:2,justifyContent:"flex-start",direction:"row",alignItems:"center",children:[i(he,{item:!0,xs:12,children:m("# Stat Infusions","maxInfusions",s)}),w(he,{item:!0,xs:12,children:[f(t("Infusion Type #1"),"primaryInfusion",a),m(t("Max #"),"primaryMaxInfusions",c,e.formControl2)]}),w(he,{item:!0,xs:12,children:[f(t("Infusion Type #2"),"secondaryInfusion",l),m(t("Max #"),"secondaryMaxInfusions",u,e.formControl2)]})]}),i(he,{item:!0,xs:12,children:i(vS,{})})]})},CS=({data:e})=>{const{t:n}=ke(),t=Ee(),r=e.presetInfusions.list,o=G.useCallback(s=>{if(s===null)return;const a=JSON.parse(s.value);t(Lp(a))},[t]);return i(Tn,{title:n("Infusions + AR"),content:i(wS,{}),helpText:i(ge,{children:i(J,{children:"Select up to 2 types of stat infusions, and optionally limit the quantity allowed."})}),extraInfo:i(Xt,{data:r,handleClick:o,presetCategory:"infusion"})})};var fl=G.memo(CS);const SS=`type: quadruple
bonuses:
  major:
    - Power
    - Ferocity
  minor:
    - Precision
    - Vitality`,kS=`{
  "type": "quadruple",
  "bonuses": {
    "major": ["Power", "Ferocity"],
    "minor": ["Precision", "Vitality"]
  }
}`;function PS(e){let n={},t=!1;if(e)try{if(n=JSON.parse(e),typeof n!="object")throw new Error("invalid")}catch{try{if(n=Ou.load(e),typeof n!="object")throw new Error("invalid")}catch{t=!0}}return t&&(n={}),{data:n,error:t}}const RS=()=>{const e=Ee(),{t:n}=ke(),t=U(kn("customAffixError")),r=U(kn("customAffixTextBox")),o=s=>{const a=s.target.value;e(_t({key:"customAffixTextBox",value:a}));const{data:l,error:c}=PS(a);e(_t({key:"customAffix",value:l})),e(_t({key:"customAffixError",value:c?n("Invalid Format."):""}))};return w(ge,{children:[i(Kn,{label:n('Custom Affix (valid types: "triple," "quadruple," "celestial")'),variant:"standard",sx:{width:"100%",marginBottom:1},multiline:!0,minRows:5,value:r,error:t!=="",helperText:t,onChange:o}),w(Kt,{children:[i(Jt,{expandIcon:i(Zt,{}),children:i(V,{children:i(J,{children:"Formatting examples"})})}),i(Qt,{children:w(he,{container:!0,children:[w(he,{item:!0,xs:6,children:[i(V,{children:"YAML"}),i("pre",{style:{overflow:"auto hidden"},children:SS})]}),w(he,{item:!0,xs:6,children:[i(V,{children:"JSON"}),i("pre",{style:{overflow:"auto hidden"},children:kS})]})]})})]})]})};var TS=G.memo(RS);const AS=Je()(e=>({text:{color:"#ddd !important"},formControl:{margin:e.spacing(1),width:160},box:{display:"flex",alignItems:"center",flexWrap:"wrap"}})),$S=["Damage","Survivability","Healing"],DS=()=>{const{classes:e}=AS(),{t:n}=ke(),t=Ee(),r=U(kn("optimizeFor")),o=U(kn("weaponType")),s=U(kn("minBoonDuration")),a=U(kn("minHealingPower")),l=U(kn("minToughness")),c=U(kn("maxToughness")),u=U(kn("minHealth")),d=U(kn("minCritChance")),f=U(kn("affixes")),m=U(bo),p=f.includes("Custom"),v=yt(d).value,g=m!=="Warrior"&&v&&v>=99.9,h=x=>{t(_t({key:x.target.name,value:x.target.value}))};return w(he,{container:!0,spacing:2,children:[i(he,{item:!0,xs:12,sm:6,children:w(mn,{component:"fieldset",children:[w(vr,{component:"legend",children:[i(J,{children:"Optimize for:"})," ",i(jn,{text:n("What to optimize the results for. 'Damage' includes power and condition damage according to the distribution below."),size:"small"})]}),i(ii,{"aria-label":"optimizeFor",name:"optimizeFor",value:r,onChange:h,children:$S.map(x=>i(Fn,{value:x,control:i(eo,{color:"primary"}),label:n("priorityGoal",{context:x})},x))})]})}),i(he,{item:!0,xs:12,sm:6,children:w(mn,{component:"fieldset",children:[w(vr,{component:"legend",children:[i(J,{children:"Weapon type:"})," ",i(jn,{text:n("Select 'Dual wield' if you're using weapons in both hands or 'Two-handed' when using a two-handed weapon."),size:"small"})]}),w(ii,{"aria-label":"weaponType",name:"weaponType",value:o,onChange:h,children:[i(Fn,{value:"Dual wield",control:i(eo,{color:"primary"}),label:n("Dual wielded")}),i(Fn,{value:"Two-handed",control:i(eo,{color:"primary"}),label:n("Two-handed")})]})]})}),i(he,{item:!0,xs:12,children:i(Hu,{multiple:!0,onChange:(x,y)=>{t(_t({key:"affixes",value:y.map(S=>S.label)}))},value:f})}),w(he,{item:!0,xs:6,md:4,className:e.box,children:[w(mn,{className:e.formControl,variant:"standard",children:[w(Nn,{htmlFor:"minToughness-input-with-icon-adornment",children:[i(J,{children:"Min."})," ",i(Un,{name:"Toughness",disableLink:!0})]}),i(zn,{id:"minToughness-input-with-icon-adornment",value:l,onChange:h,name:"minToughness",error:yt(l).error,autoComplete:"off"})]}),i(jn,{text:n("Only show results that fulfill a minimum amount of Toughness.")})]}),w(he,{item:!0,xs:6,md:4,className:e.box,children:[w(mn,{className:e.formControl,variant:"standard",children:[w(Nn,{htmlFor:"maxToughness-input-with-icon-adornment",children:[i(J,{children:"Max."})," ",i(Un,{name:"Toughness",disableLink:!0})]}),i(zn,{id:"maxToughness-input-with-icon-adornment",value:c,onChange:h,name:"maxToughness",error:yt(c).error,autoComplete:"off"})]}),i(jn,{text:n("Only show results that fulfill a maximum amount of Toughness.")})]}),w(he,{item:!0,xs:6,md:4,className:e.box,children:[w(mn,{className:e.formControl,variant:"standard",children:[w(Nn,{htmlFor:"minBoon-input-with-icon-adornment",children:[i(J,{children:"Min."})," ",i(Un,{name:"Boon Duration",disableLink:!0})]}),i(zn,{id:"minBoon-input-with-icon-adornment",value:s,onChange:h,name:"minBoonDuration",error:yt(s).error,autoComplete:"off"})]}),i(jn,{text:n("Only show results that fulfill a certain amount of Boon Duration.")})]}),w(he,{item:!0,xs:6,md:4,className:e.box,children:[w(mn,{className:e.formControl,variant:"standard",children:[w(Nn,{htmlFor:"minHeal-input-with-icon-adornment",children:[i(J,{children:"Min."})," ",i(Un,{name:"Healing Power",disableLink:!0})]}),i(zn,{id:"minHeal-input-with-icon-adornment",value:a,onChange:h,name:"minHealingPower",error:yt(a).error,autoComplete:"off"})]}),i(jn,{text:n("Only show results that fulfill a certain amount of Healing Power.")})]}),w(he,{item:!0,xs:6,md:4,className:e.box,children:[w(mn,{className:e.formControl,variant:"standard",children:[w(Nn,{htmlFor:"minHealth-input-with-icon-adornment",children:[i(J,{children:"Min."})," ",i(Un,{name:"Health",disableLink:!0})]}),i(zn,{id:"minHealth-input-with-icon-adornment",value:u,onChange:h,name:"minHealth",error:yt(u).error,autoComplete:"off"})]}),i(jn,{text:n("Only show results that fulfill a certain amount of Health.")})]}),w(he,{item:!0,xs:6,md:4,className:e.box,children:[w(mn,{className:e.formControl,variant:"standard",children:[w(Nn,{htmlFor:"minCritChance-input-with-icon-adornment",children:[i(J,{children:"Min."})," ",i(Un,{name:"Critical Chance",disableLink:!0})]}),i(zn,{id:"minCritChance-input-with-icon-adornment",value:d,onChange:h,name:"minCritChance",error:yt(d).error,autoComplete:"off"})]}),i(jn,{text:n("Only show results that fulfill a certain amount of Critical Chance.")})]}),g?i(he,{item:!0,xs:12,children:i(wo,{elevation:6,variant:"filled",severity:"warning",children:i(J,{children:"Forcing 100% critical chance is not recommended in most cases. If capping critical chance is optimal, the optimizer will do so automatically, and if it is not, forcing it will lead to a worse result!"})})}):null,p?i(he,{item:!0,xs:12,children:i(TS,{})}):null]})},IS=({data:e})=>{const n=Ee(),{t}=ke(),r=G.useCallback(o=>{if(o===null)return;const s=JSON.parse(o.value);Object.keys(s).forEach(a=>n(_t({key:a,value:s[a]})))},[n]);return i(Tn,{title:t("Priorities"),content:i(DS,{}),extraInfo:i(Xt,{data:e.presetAffixes.list,handleClick:r,presetCategory:"affix",maxChips:1/0})})};var ml=G.memo(IS);const Yo=({data:e,title:n})=>w(ge,{children:[i(V,{variant:"h6",children:n}),i(ht,{padding:"none",children:i(gt,{children:Object.keys(e).map(t=>w(nt,{hover:!0,children:[i(je,{children:i(Un,{name:t,style:{fontSize:"20px",color:"#AAAAAA"}})}),i(je,{children:e[t]})]},t))})})]}),BS=Je()(e=>({root:{width:"100%"},gw2Item:{fontSize:"20px",color:"#AAAAAA"}})),ES=e=>Math.round(e*100)/100,MS=({data:e})=>{const{classes:n}=BS();return i(ge,{children:w(Kt,{children:[i(Jt,{expandIcon:i(Zt,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:i(V,{className:n.heading,children:i(J,{children:"Applied Modifers"})})}),i(Qt,{children:i(ht,{padding:"none",children:i(gt,{children:e.map(({type:t,id:r,modifiers:o,amount:s,amountData:a})=>{const{value:l}=Wl(s),c=a?`${ES(Op(1,l,a))}x`:"";return w(nt,{hover:!0,children:[i(je,{children:w(V,{className:n.gw2Item,children:[" ",r," "]})}),i(je,{style:{paddingRight:8},children:i(V,{variant:"body2",children:c})}),i(je,{children:JSON.stringify(o)})]},`${t} ${r}`)})})})})]})})},LS=({data:e})=>w(ge,{children:[i(V,{variant:"h6",children:i(J,{children:"Indicators"})}),i(ht,{padding:"none",children:i(gt,{children:Object.keys(e).map(n=>w(nt,{hover:!0,children:[i(je,{children:w(V,{sx:{fontSize:"20px",color:"#AAAAAA"},children:[n," "]})}),i(je,{children:e[n]})]},n))})})]}),OS=Je()(e=>({root:{width:"100%"},gw2Item:{fontSize:"20px",color:"#AAAAAA"}})),hl=({title:e,data:n})=>{const{classes:t}=OS();return w(ge,{children:[i(V,{variant:"h6",children:e}),i(ht,{padding:"none",children:i(gt,{children:n.map(r=>w(nt,{hover:!0,children:[i(je,{children:r.name==="Power"?i(Un,{name:"Power",className:t.gw2Item}):i(Tr,{name:r.name,className:t.gw2Item})}),i(je,{children:r.value})]},r.name))})})]})},NS=Je()(e=>({gw2Item:{fontSize:"20px",color:"#AAAAAA"}})),zS=({data:e})=>{const{classes:n}=NS();return w(ge,{children:[i(V,{variant:"h6",children:i(J,{children:"Infusions"})}),i(ht,{padding:"none",children:i(gt,{children:Object.entries(e).map(([t,r])=>w(nt,{hover:!0,children:[i(je,{children:i(Ze,{id:oo[t],className:n.gw2Item})}),i(je,{children:r})]},t))})})]})},FS=Np.map(e=>`${e} Duration`),_S=zp.map(e=>`${e} Duration`),gl=e=>Math.round(e*100)/100,HS=Je()(e=>({root:{width:"100%"},gw2Item:{fontSize:"20px",color:"#AAAAAA"}})),WS=({data:e})=>{const{classes:n}=HS(),t=Object.entries(e).filter(([o])=>FS.includes(o)),r=Object.entries(e).filter(([o])=>_S.includes(o));return r.length===0&&t.length===0?null:w(ge,{children:[i(V,{variant:"h6",children:i(J,{children:"Special Durations"})}),i(ht,{padding:"none",children:w(gt,{children:[t.map(([o,s])=>w(nt,{hover:!0,children:[i(je,{children:i(Tr,{name:o.split(" ")[0].replace("Poison","Poisoned"),text:o,className:n.gw2Item})}),w(je,{children:[gl((s+(e["Condition Duration"]||0))*100),"%"]})]},o)),r.map(([o,s])=>w(nt,{hover:!0,children:[i(je,{children:i(Vl,{name:o.split(" ")[0],text:o,className:n.gw2Item})}),w(je,{children:[gl((s+(e["Boon Duration"]||0))*100),"%"]})]},o))]})})]})};var pa={},VS=qe.exports;Object.defineProperty(pa,"__esModule",{value:!0});var fa=pa.default=void 0,jS=VS(Ge),US=Ke,qS=(0,jS.default)((0,US.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy");fa=pa.default=qS;var ma={},GS=qe.exports;Object.defineProperty(ma,"__esModule",{value:!0});var Vu=ma.default=void 0,YS=GS(Ge),KS=Ke,QS=(0,YS.default)((0,KS.jsx)("path",{d:"M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}),"Done");Vu=ma.default=QS;var ha={exports:{}},ju=function(n,t){return function(){for(var o=new Array(arguments.length),s=0;s<o.length;s++)o[s]=arguments[s];return n.apply(t,o)}},JS=ju,It=Object.prototype.toString;function ga(e){return It.call(e)==="[object Array]"}function gi(e){return typeof e=="undefined"}function XS(e){return e!==null&&!gi(e)&&e.constructor!==null&&!gi(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}function ZS(e){return It.call(e)==="[object ArrayBuffer]"}function ek(e){return typeof FormData!="undefined"&&e instanceof FormData}function nk(e){var n;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?n=ArrayBuffer.isView(e):n=e&&e.buffer&&e.buffer instanceof ArrayBuffer,n}function tk(e){return typeof e=="string"}function rk(e){return typeof e=="number"}function Uu(e){return e!==null&&typeof e=="object"}function no(e){if(It.call(e)!=="[object Object]")return!1;var n=Object.getPrototypeOf(e);return n===null||n===Object.prototype}function ok(e){return It.call(e)==="[object Date]"}function ik(e){return It.call(e)==="[object File]"}function ak(e){return It.call(e)==="[object Blob]"}function qu(e){return It.call(e)==="[object Function]"}function sk(e){return Uu(e)&&qu(e.pipe)}function lk(e){return typeof URLSearchParams!="undefined"&&e instanceof URLSearchParams}function ck(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function uk(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function ba(e,n){if(!(e===null||typeof e=="undefined"))if(typeof e!="object"&&(e=[e]),ga(e))for(var t=0,r=e.length;t<r;t++)n.call(null,e[t],t,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.call(null,e[o],o,e)}function bi(){var e={};function n(o,s){no(e[s])&&no(o)?e[s]=bi(e[s],o):no(o)?e[s]=bi({},o):ga(o)?e[s]=o.slice():e[s]=o}for(var t=0,r=arguments.length;t<r;t++)ba(arguments[t],n);return e}function dk(e,n,t){return ba(n,function(o,s){t&&typeof o=="function"?e[s]=JS(o,t):e[s]=o}),e}function pk(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}var An={isArray:ga,isArrayBuffer:ZS,isBuffer:XS,isFormData:ek,isArrayBufferView:nk,isString:tk,isNumber:rk,isObject:Uu,isPlainObject:no,isUndefined:gi,isDate:ok,isFile:ik,isBlob:ak,isFunction:qu,isStream:sk,isURLSearchParams:lk,isStandardBrowserEnv:uk,forEach:ba,merge:bi,extend:dk,trim:ck,stripBOM:pk},Et=An;function bl(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Gu=function(n,t,r){if(!t)return n;var o;if(r)o=r(t);else if(Et.isURLSearchParams(t))o=t.toString();else{var s=[];Et.forEach(t,function(c,u){c===null||typeof c=="undefined"||(Et.isArray(c)?u=u+"[]":c=[c],Et.forEach(c,function(f){Et.isDate(f)?f=f.toISOString():Et.isObject(f)&&(f=JSON.stringify(f)),s.push(bl(u)+"="+bl(f))}))}),o=s.join("&")}if(o){var a=n.indexOf("#");a!==-1&&(n=n.slice(0,a)),n+=(n.indexOf("?")===-1?"?":"&")+o}return n},fk=An;function Po(){this.handlers=[]}Po.prototype.use=function(n,t,r){return this.handlers.push({fulfilled:n,rejected:t,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1};Po.prototype.eject=function(n){this.handlers[n]&&(this.handlers[n]=null)};Po.prototype.forEach=function(n){fk.forEach(this.handlers,function(r){r!==null&&n(r)})};var mk=Po,hk=An,gk=function(n,t){hk.forEach(n,function(o,s){s!==t&&s.toUpperCase()===t.toUpperCase()&&(n[t]=o,delete n[s])})},Yu=function(n,t,r,o,s){return n.config=t,r&&(n.code=r),n.request=o,n.response=s,n.isAxiosError=!0,n.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},n},bk=Yu,Ku=function(n,t,r,o,s){var a=new Error(n);return bk(a,t,r,o,s)},vk=Ku,xk=function(n,t,r){var o=r.config.validateStatus;!r.status||!o||o(r.status)?n(r):t(vk("Request failed with status code "+r.status,r.config,null,r.request,r))},Yr=An,yk=Yr.isStandardBrowserEnv()?function(){return{write:function(t,r,o,s,a,l){var c=[];c.push(t+"="+encodeURIComponent(r)),Yr.isNumber(o)&&c.push("expires="+new Date(o).toGMTString()),Yr.isString(s)&&c.push("path="+s),Yr.isString(a)&&c.push("domain="+a),l===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(t){var r=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),wk=function(n){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(n)},Ck=function(n,t){return t?n.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):n},Sk=wk,kk=Ck,Pk=function(n,t){return n&&!Sk(t)?kk(n,t):t},Ko=An,Rk=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Tk=function(n){var t={},r,o,s;return n&&Ko.forEach(n.split(`
`),function(l){if(s=l.indexOf(":"),r=Ko.trim(l.substr(0,s)).toLowerCase(),o=Ko.trim(l.substr(s+1)),r){if(t[r]&&Rk.indexOf(r)>=0)return;r==="set-cookie"?t[r]=(t[r]?t[r]:[]).concat([o]):t[r]=t[r]?t[r]+", "+o:o}}),t},vl=An,Ak=vl.isStandardBrowserEnv()?function(){var n=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),r;function o(s){var a=s;return n&&(t.setAttribute("href",a),a=t.href),t.setAttribute("href",a),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return r=o(window.location.href),function(a){var l=vl.isString(a)?o(a):a;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}(),Kr=An,$k=xk,Dk=yk,Ik=Gu,Bk=Pk,Ek=Tk,Mk=Ak,Qo=Ku,xl=function(n){return new Promise(function(r,o){var s=n.data,a=n.headers,l=n.responseType;Kr.isFormData(s)&&delete a["Content-Type"];var c=new XMLHttpRequest;if(n.auth){var u=n.auth.username||"",d=n.auth.password?unescape(encodeURIComponent(n.auth.password)):"";a.Authorization="Basic "+btoa(u+":"+d)}var f=Bk(n.baseURL,n.url);c.open(n.method.toUpperCase(),Ik(f,n.params,n.paramsSerializer),!0),c.timeout=n.timeout;function m(){if(!!c){var v="getAllResponseHeaders"in c?Ek(c.getAllResponseHeaders()):null,g=!l||l==="text"||l==="json"?c.responseText:c.response,h={data:g,status:c.status,statusText:c.statusText,headers:v,config:n,request:c};$k(r,o,h),c=null}}if("onloadend"in c?c.onloadend=m:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(m)},c.onabort=function(){!c||(o(Qo("Request aborted",n,"ECONNABORTED",c)),c=null)},c.onerror=function(){o(Qo("Network Error",n,null,c)),c=null},c.ontimeout=function(){var g="timeout of "+n.timeout+"ms exceeded";n.timeoutErrorMessage&&(g=n.timeoutErrorMessage),o(Qo(g,n,n.transitional&&n.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",c)),c=null},Kr.isStandardBrowserEnv()){var p=(n.withCredentials||Mk(f))&&n.xsrfCookieName?Dk.read(n.xsrfCookieName):void 0;p&&(a[n.xsrfHeaderName]=p)}"setRequestHeader"in c&&Kr.forEach(a,function(g,h){typeof s=="undefined"&&h.toLowerCase()==="content-type"?delete a[h]:c.setRequestHeader(h,g)}),Kr.isUndefined(n.withCredentials)||(c.withCredentials=!!n.withCredentials),l&&l!=="json"&&(c.responseType=n.responseType),typeof n.onDownloadProgress=="function"&&c.addEventListener("progress",n.onDownloadProgress),typeof n.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",n.onUploadProgress),n.cancelToken&&n.cancelToken.promise.then(function(g){!c||(c.abort(),o(g),c=null)}),s||(s=null),c.send(s)})},dn=An,yl=gk,Lk=Yu,Ok={"Content-Type":"application/x-www-form-urlencoded"};function wl(e,n){!dn.isUndefined(e)&&dn.isUndefined(e["Content-Type"])&&(e["Content-Type"]=n)}function Nk(){var e;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(e=xl),e}function zk(e,n,t){if(dn.isString(e))try{return(n||JSON.parse)(e),dn.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(t||JSON.stringify)(e)}var Ro={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:Nk(),transformRequest:[function(n,t){return yl(t,"Accept"),yl(t,"Content-Type"),dn.isFormData(n)||dn.isArrayBuffer(n)||dn.isBuffer(n)||dn.isStream(n)||dn.isFile(n)||dn.isBlob(n)?n:dn.isArrayBufferView(n)?n.buffer:dn.isURLSearchParams(n)?(wl(t,"application/x-www-form-urlencoded;charset=utf-8"),n.toString()):dn.isObject(n)||t&&t["Content-Type"]==="application/json"?(wl(t,"application/json"),zk(n)):n}],transformResponse:[function(n){var t=this.transitional,r=t&&t.silentJSONParsing,o=t&&t.forcedJSONParsing,s=!r&&this.responseType==="json";if(s||o&&dn.isString(n)&&n.length)try{return JSON.parse(n)}catch(a){if(s)throw a.name==="SyntaxError"?Lk(a,this,"E_JSON_PARSE"):a}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(n){return n>=200&&n<300}};Ro.headers={common:{Accept:"application/json, text/plain, */*"}};dn.forEach(["delete","get","head"],function(n){Ro.headers[n]={}});dn.forEach(["post","put","patch"],function(n){Ro.headers[n]=dn.merge(Ok)});var va=Ro,Fk=An,_k=va,Hk=function(n,t,r){var o=this||_k;return Fk.forEach(r,function(a){n=a.call(o,n,t)}),n},Qu=function(n){return!!(n&&n.__CANCEL__)},Cl=An,Jo=Hk,Wk=Qu,Vk=va;function Xo(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var jk=function(n){Xo(n),n.headers=n.headers||{},n.data=Jo.call(n,n.data,n.headers,n.transformRequest),n.headers=Cl.merge(n.headers.common||{},n.headers[n.method]||{},n.headers),Cl.forEach(["delete","get","head","post","put","patch","common"],function(o){delete n.headers[o]});var t=n.adapter||Vk.adapter;return t(n).then(function(o){return Xo(n),o.data=Jo.call(n,o.data,o.headers,n.transformResponse),o},function(o){return Wk(o)||(Xo(n),o&&o.response&&(o.response.data=Jo.call(n,o.response.data,o.response.headers,n.transformResponse))),Promise.reject(o)})},fn=An,Ju=function(n,t){t=t||{};var r={},o=["url","method","data"],s=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],l=["validateStatus"];function c(m,p){return fn.isPlainObject(m)&&fn.isPlainObject(p)?fn.merge(m,p):fn.isPlainObject(p)?fn.merge({},p):fn.isArray(p)?p.slice():p}function u(m){fn.isUndefined(t[m])?fn.isUndefined(n[m])||(r[m]=c(void 0,n[m])):r[m]=c(n[m],t[m])}fn.forEach(o,function(p){fn.isUndefined(t[p])||(r[p]=c(void 0,t[p]))}),fn.forEach(s,u),fn.forEach(a,function(p){fn.isUndefined(t[p])?fn.isUndefined(n[p])||(r[p]=c(void 0,n[p])):r[p]=c(void 0,t[p])}),fn.forEach(l,function(p){p in t?r[p]=c(n[p],t[p]):p in n&&(r[p]=c(void 0,n[p]))});var d=o.concat(s).concat(a).concat(l),f=Object.keys(n).concat(Object.keys(t)).filter(function(p){return d.indexOf(p)===-1});return fn.forEach(f,u),r};const Uk="axios",qk="0.21.4",Gk="Promise based HTTP client for the browser and node.js",Yk="index.js",Kk={test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},Qk={type:"git",url:"https://github.com/axios/axios.git"},Jk=["xhr","http","ajax","promise","node"],Xk="Matt Zabriskie",Zk="MIT",eP={url:"https://github.com/axios/axios/issues"},nP="https://axios-http.com",tP={coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},rP={"./lib/adapters/http.js":"./lib/adapters/xhr.js"},oP="dist/axios.min.js",iP="dist/axios.min.js",aP="./index.d.ts",sP={"follow-redirects":"^1.14.0"},lP=[{path:"./dist/axios.min.js",threshold:"5kB"}];var cP={name:Uk,version:qk,description:Gk,main:Yk,scripts:Kk,repository:Qk,keywords:Jk,author:Xk,license:Zk,bugs:eP,homepage:nP,devDependencies:tP,browser:rP,jsdelivr:oP,unpkg:iP,typings:aP,dependencies:sP,bundlesize:lP},Xu=cP,xa={};["object","boolean","number","function","string","symbol"].forEach(function(e,n){xa[e]=function(r){return typeof r===e||"a"+(n<1?"n ":" ")+e}});var Sl={},uP=Xu.version.split(".");function Zu(e,n){for(var t=n?n.split("."):uP,r=e.split("."),o=0;o<3;o++){if(t[o]>r[o])return!0;if(t[o]<r[o])return!1}return!1}xa.transitional=function(n,t,r){var o=t&&Zu(t);function s(a,l){return"[Axios v"+Xu.version+"] Transitional option '"+a+"'"+l+(r?". "+r:"")}return function(a,l,c){if(n===!1)throw new Error(s(l," has been removed in "+t));return o&&!Sl[l]&&(Sl[l]=!0,console.warn(s(l," has been deprecated since v"+t+" and will be removed in the near future"))),n?n(a,l,c):!0}};function dP(e,n,t){if(typeof e!="object")throw new TypeError("options must be an object");for(var r=Object.keys(e),o=r.length;o-- >0;){var s=r[o],a=n[s];if(a){var l=e[s],c=l===void 0||a(l,s,e);if(c!==!0)throw new TypeError("option "+s+" must be "+c);continue}if(t!==!0)throw Error("Unknown option "+s)}}var pP={isOlderVersion:Zu,assertOptions:dP,validators:xa},ed=An,fP=Gu,kl=mk,Pl=jk,To=Ju,nd=pP,Mt=nd.validators;function Br(e){this.defaults=e,this.interceptors={request:new kl,response:new kl}}Br.prototype.request=function(n){typeof n=="string"?(n=arguments[1]||{},n.url=arguments[0]):n=n||{},n=To(this.defaults,n),n.method?n.method=n.method.toLowerCase():this.defaults.method?n.method=this.defaults.method.toLowerCase():n.method="get";var t=n.transitional;t!==void 0&&nd.assertOptions(t,{silentJSONParsing:Mt.transitional(Mt.boolean,"1.0.0"),forcedJSONParsing:Mt.transitional(Mt.boolean,"1.0.0"),clarifyTimeoutError:Mt.transitional(Mt.boolean,"1.0.0")},!1);var r=[],o=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(o=o&&m.synchronous,r.unshift(m.fulfilled,m.rejected))});var s=[];this.interceptors.response.forEach(function(m){s.push(m.fulfilled,m.rejected)});var a;if(!o){var l=[Pl,void 0];for(Array.prototype.unshift.apply(l,r),l=l.concat(s),a=Promise.resolve(n);l.length;)a=a.then(l.shift(),l.shift());return a}for(var c=n;r.length;){var u=r.shift(),d=r.shift();try{c=u(c)}catch(f){d(f);break}}try{a=Pl(c)}catch(f){return Promise.reject(f)}for(;s.length;)a=a.then(s.shift(),s.shift());return a};Br.prototype.getUri=function(n){return n=To(this.defaults,n),fP(n.url,n.params,n.paramsSerializer).replace(/^\?/,"")};ed.forEach(["delete","get","head","options"],function(n){Br.prototype[n]=function(t,r){return this.request(To(r||{},{method:n,url:t,data:(r||{}).data}))}});ed.forEach(["post","put","patch"],function(n){Br.prototype[n]=function(t,r,o){return this.request(To(o||{},{method:n,url:t,data:r}))}});var mP=Br;function ya(e){this.message=e}ya.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};ya.prototype.__CANCEL__=!0;var td=ya,hP=td;function ho(e){if(typeof e!="function")throw new TypeError("executor must be a function.");var n;this.promise=new Promise(function(o){n=o});var t=this;e(function(o){t.reason||(t.reason=new hP(o),n(t.reason))})}ho.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};ho.source=function(){var n,t=new ho(function(o){n=o});return{token:t,cancel:n}};var gP=ho,bP=function(n){return function(r){return n.apply(null,r)}},vP=function(n){return typeof n=="object"&&n.isAxiosError===!0},Rl=An,xP=ju,to=mP,yP=Ju,wP=va;function rd(e){var n=new to(e),t=xP(to.prototype.request,n);return Rl.extend(t,to.prototype,n),Rl.extend(t,n),t}var Hn=rd(wP);Hn.Axios=to;Hn.create=function(n){return rd(yP(Hn.defaults,n))};Hn.Cancel=td;Hn.CancelToken=gP;Hn.isCancel=Qu;Hn.all=function(n){return Promise.all(n)};Hn.spread=bP;Hn.isAxiosError=vP;ha.exports=Hn;ha.exports.default=Hn;var od=ha.exports;const CP=Je()(e=>({skillSelect:{width:60,height:60,marginRight:e.spacing(.5)}}));function sr({name:e,value:n,skillList:t}){const r=Ee(),{classes:o}=CP();return i(ct,{variant:"standard",value:n,name:e,onChange:a=>{r(_p({key:a.target.name,value:a.target.value}))},className:o.skillSelect,renderValue:a=>a===""?i("div",{style:{fontSize:60,lineHeight:0},children:i(Fp,{})}):i(dr,{id:a,disableText:!0,style:{fontSize:60,lineHeight:0}}),displayEmpty:!0,children:t.map(a=>w(Zn,{value:a.id,children:[i(dr,{id:a.id,disableLink:!0,disableText:!0,style:{marginRight:4,fontSize:"1.2rem"}}),i(dr,{id:a.id,disableLink:!0,disableTooltip:!0,disableIcon:!0})]},a.id))})}const SP=Je()(e=>({weaponItem:{marginRight:e.spacing(1)},weaponSelect:{width:160,marginRight:e.spacing(1)},skillSelect:{width:60,height:60,marginRight:e.spacing(.5)}}));function id({character:e,buttons:n}){var $,C;const t=Ee(),{classes:r}=SP(),{t:o}=ke(),s=U(rc),a=U(oc),{mainhand1:l,mainhand2:c,offhand1:u,offhand2:d}=s,{healId:f,utility1Id:m,utility2Id:p,utility3Id:v,eliteId:g}=a,[h,x]=G.useState({skills:void 0,error:void 0}),[y,S]=G.useState(new Array(n.length)),{profession:R}=e.settings,{weapons:T}=jp[R],A=P=>{var L;((L=T.mainHand.find(E=>E.gw2id===P.target.value))==null?void 0:L.type)==="two-handed"&&(P.target.name==="mainhand1"&&t(Eo({key:"offhand1",value:""})),P.target.name==="mainhand2"&&t(Eo({key:"offhand2",value:""}))),t(Eo({key:P.target.name,value:P.target.value}))},I=P=>{var L;return(L=ic[P.toUpperCase().replace(" ","")])==null?void 0:L.gw2id};G.useEffect(()=>{od.get(`https://api.guildwars2.com/v2/professions/${ki(R)}`).then(P=>x({error:void 0,skills:P.data.skills})).catch(P=>(console.error(P),x({error:P.message}),null))},[R]);const D=!h.error&&!h.skills;return w(ge,{children:[i(V,{children:o("Select weapons:")}),w(X,{mb:1,children:[i(ct,{variant:"standard",value:l,name:"mainhand1",onChange:A,className:r.weaponSelect,children:G.Children.toArray(T.mainHand.map(({name:P})=>w(Zn,{value:I(P),children:[i(Ze,{id:I(P),disableText:!0,className:r.weaponItem}),` ${P}`]})))}),(($=T.mainHand.find(P=>P.gw2id===l))==null?void 0:$.type)!=="two-handed"&&i(ct,{variant:"standard",value:u,name:"offhand1",onChange:A,className:r.weaponSelect,children:G.Children.toArray(T.offHand.map(({name:P})=>w(Zn,{value:I(P),children:[i(Ze,{id:I(P),disableText:!0,className:r.weaponItem}),` ${P}`]})))})]}),i(X,{alignSelf:"center",children:i(Hp,{name:"WeaponSwap"})}),w(X,{mb:2,children:[i(ct,{variant:"standard",value:c,name:"mainhand2",onChange:A,className:r.weaponSelect,children:G.Children.toArray(T.mainHand.map(({name:P})=>w(Zn,{value:I(P),children:[i(Ze,{id:I(P),disableText:!0,className:r.weaponItem}),` ${P}`]})))}),((C=T.mainHand.find(P=>P.gw2id===c))==null?void 0:C.type)!=="two-handed"&&i(ct,{variant:"standard",value:d,name:"offhand2",onChange:A,className:r.weaponSelect,children:G.Children.toArray(T.offHand.map(({name:P})=>w(Zn,{value:I(P),children:[i(Ze,{id:I(P),disableText:!0,className:r.weaponItem}),` ${P}`]})))})]}),i(V,{children:o("Select skills:")}),w(X,{mb:2,children:[D&&i(Wp,{}),h.error&&i(Vp,{name:"ERROR",message:h.error}),h.skills&&w(ge,{children:[i(sr,{name:"healId",value:f,skillList:h.skills.filter(P=>P.type==="Heal")}),i(sr,{name:"utility1Id",value:m,skillList:h.skills.filter(P=>P.type==="Utility")}),i(sr,{name:"utility2Id",value:p,skillList:h.skills.filter(P=>P.type==="Utility")}),i(sr,{name:"utility3Id",value:v,skillList:h.skills.filter(P=>P.type==="Utility")}),i(sr,{name:"eliteId",value:g,skillList:h.skills.filter(P=>P.type==="Elite")})]})]}),i(sb,{variant:"contained",color:"primary",children:n.map(({label:P,icon:L,onClick:E},N)=>i(Yn,{startIcon:y[N]?i(Vu,{}):i(L,{}),disabled:y[N],onClick:()=>{const z=[...y];z[N]=!0,S(z),setTimeout(()=>{const q=[...y];q[N]=!1,S(q)},3e3),E()},children:P}))})]})}const kP={Power:0,Burning:0,Bleeding:0,Poison:0,Torment:0,Confusion:0},Tl=e=>Math.round(e*100)/100,PP=e=>Math.round(e),Qr=(e,n)=>e.replace(/^/gm," ".repeat(n)),RP=e=>Object.fromEntries(Object.entries(e).map(([n,t])=>[n==="Poison"?"Poisoned":n,t])),TP=({character:e})=>{const{t:n}=ke(),[t,r]=G.useState(kP),[o,s]=G.useState(""),[a,l]=G.useState("");G.useEffect(()=>{async function g(){var h,x,y,S,R,T,A,I,D,$,C,P,L,E,N,z,q,j,K;if(l(""),o)try{const W=o.split("/").slice(-1);if(!W)return;console.log("loading data from dps.report...");const te=await(await fetch(`https://dps.report/getJson?permalink=${W}`)).json();if(console.log("got data from dps.report: ",te),te.error||!Array.isArray(te==null?void 0:te.players)){l(JSON.stringify(te,null,2));return}const Z=te.players.find(Me=>Me.name===te.recordedBy);if(!Z){l("no player data!");return}const re=(((x=(h=te.phases)==null?void 0:h[0])==null?void 0:x.end)-((S=(y=te.phases)==null?void 0:y[0])==null?void 0:S.start))/1e3;let ue=0;const ce=(A=(T=(R=Z.dpsTargets)==null?void 0:R[0])==null?void 0:T[0])==null?void 0:A.powerDps;ue+=ce;const me=Up({Burning:737,Bleeding:736,Poison:723,Torment:19426,Confusion:861},Me=>{var Ne,on,Qe,F;const Le=(F=(Qe=(on=(Ne=Z.targetDamageDist)==null?void 0:Ne[0])==null?void 0:on[0])==null?void 0:Qe.find(ee=>(ee==null?void 0:ee.id)===Me))==null?void 0:F.totalDamage,Te=Tl((Le!=null?Le:0)/re);return ue+=Te,Te}),be=($=(D=(I=Z.dpsTargets)==null?void 0:I[0])==null?void 0:D[0])==null?void 0:$.dps,oe=(L=(P=(C=Z.statsTargets)==null?void 0:C[0])==null?void 0:P[0])==null?void 0:L.critableDirectDamageCount,ae=(z=(N=(E=Z.statsTargets)==null?void 0:E[0])==null?void 0:N[0])==null?void 0:z.criticalRate,De=oe/re,_e=ae/oe*100,se=(q=Z.minions)!=null?q:[],tn={Clone:{names:new Set,minionHits:0,minionCrits:0},Phantasm:{names:new Set,minionHits:0,minionCrits:0},Minion:{names:new Set,minionHits:0,minionCrits:0}};for(const{name:Me,targetDamageDist:Le}of se){console.log(Me);let Te="Minion";Me==="Clone"&&(Te="Clone"),Me!=null&&Me.startsWith("Illusionary")&&(Te="Phantasm"),tn[Te].names.add(Me);for(const Ne of(K=(j=Le==null?void 0:Le[0])==null?void 0:j[0])!=null?K:[]){const{indirectDamage:on,connectedHits:Qe,crit:F}=Ne;on||(console.log(F,Qe),tn[Te].minionHits+=Qe!=null?Qe:0,tn[Te].minionCrits+=F!=null?F:0)}}const Re=Object.entries(tn).filter(([Me,{minionHits:Le}])=>Le).flatMap(([Me,{names:Le,minionHits:Te,minionCrits:Ne}])=>{const on=[...Le].join(", "),Qe=Te/re,F=Ne/Te*100;return[[`${Me} hits/sec (${Ne}/${Te}: ${F.toFixed(2)}% crit)`,Qe],`            - ${on}
`]}),rn=[["Duration (sec)",re],`
`,["Power DPS (including minions)",ce],...Object.entries(me).map(([Me,Le])=>[`${Me} DPS`,Le]),`
`,["Sum",ue],["Total dps (log)",be],`
`,[`Player crittable hits per second (${ae}/${oe}: ${_e.toFixed(2)}% crit)`,De],`
`,...Re].map(Me=>{if(typeof Me=="string")return Me;const[Le,Te]=Me;return`${String(Te.toFixed(2)).padStart(9)}: ${Le}`}).join(`
`);r(pe({Power:ce},me)),l(rn)}catch(W){console.error(W),l(String(W))}}g()},[o]);const c=Object.entries(t).map(([g,h])=>{const{value:x,error:y}=ni(h);return{key:g,inputText:h,value:x,error:y}}),{cachedFormState:u}=e.settings,{coefficientHelper:d}=e.results,f=(g,h=0)=>{const{slope:x,intercept:y}=d[g];return h===y?0:(h-y)/x};let m=Object.fromEntries(c.map(({key:g,value:h})=>[g,f(g,h)]));Object.keys(m).forEach(g=>{m[g]=g==="Power"?PP(m[g]):Tl(m[g])}),m=RP(m);const p={values2:m},v=JSON.stringify(p,null,2).replaceAll(`
    `," ").replaceAll(`
  }`," }");return w(ge,{children:[i(V,{variant:"h6",children:i(J,{children:"Distribution Template"})}),i(V,{variant:"caption",children:i(J,{children:"input the DPS values from a golem log here:"})}),i("table",{children:w("tbody",{children:[i("tr",{children:c.map(({key:g})=>i("td",{children:n("DPSType",{context:g})},g))}),i("tr",{children:c.map(({key:g,inputText:h,error:x})=>i("td",{children:i(Kn,{variant:"standard",error:x,value:h,onChange:y=>{const S=pe({},t);S[g]=y.target.value,r(S)}})},g))})]})}),i("br",{}),i(V,{variant:"caption",children:i(J,{children:"or, enter a dps.report URL to attempt to to fetch the data automatically:"})}),i("br",{}),i(Kn,{fullWidth:!0,variant:"standard",onChange:g=>{s(g.target.value)}}),i("pre",{style:{margin:"1rem"},children:a}),i("br",{}),i(V,{variant:"caption",children:i(J,{children:"result:"})}),i("table",{children:w("tbody",{children:[i("tr",{children:Object.keys(m).map(g=>{const h=g==="Power"?"Power Coefficient":`Avg. ${g} Stacks`;return i("td",{children:h},h)})}),i("tr",{children:Object.values(m).map((g,h)=>i("td",{children:i(Kn,{disabled:!0,value:g,variant:"standard"})},h))})]})}),i("pre",{style:{userSelect:"all",overflowY:"auto",maxHeight:"250px",margin:"1rem"},children:Qr(v,6)}),i(V,{variant:"h6",children:i(J,{children:"Trait Template"})}),i("pre",{style:{userSelect:"all",overflowY:"auto",maxHeight:"250px",margin:"1rem"},children:Qr(JSON.stringify(u==null?void 0:u.traits,null,2)||"",6)}),i(V,{variant:"h6",children:i(J,{children:"Skills Template"})}),i("pre",{style:{userSelect:"all",overflowY:"auto",maxHeight:"250px",margin:"1rem"},children:Qr(JSON.stringify(u==null?void 0:u.skills,null,2)||"",6)}),i(V,{variant:"h6",children:i(J,{children:"Extras Template"})}),i("pre",{style:{userSelect:"all",overflowY:"auto",maxHeight:"250px",margin:"1rem"},children:Qr(JSON.stringify(u==null?void 0:u.extras,null,2)||"",6)})]})};var AP=G.memo(TP);const $P=(e,n)=>e.replace(/^/gm," ".repeat(n));function Jr(e){var n;return(n=Object.values(ic).find(t=>t.gw2id===e))==null?void 0:n.name}const DP=({character:e})=>{const{t:n}=ke(),t=U(rc),r=U(oc),o=()=>{var L,E,N,z;const{attributes:s,gear:a,settings:l}=e,{profession:c}=l,{buffs:u}=l.cachedFormState.buffs,{Sigil1:d,Sigil2:f,Enhancement:m,Nourishment:p,Runes:v}=l.extrasCombination,g=(L=Pn[p])==null?void 0:L.gw2id,h=(E=Pn[m])==null?void 0:E.gw2id,x=(N=Pn[d])==null?void 0:N.gw2id,y=(z=Pn[f])==null?void 0:z.gw2id,S=v?Pn[v]:"",R=v?S.text.replace(/(Superior|Rune|of|the)/g,"").trim():"",{mainhand1:T,offhand1:A,mainhand2:I,offhand2:D}=t,$=pe(pe(pe(pe(pe(pe(pe(pe(pe(pe({},T&&{weapon1MainType:Jr(T)}),T&&{weapon1MainSigil1Id:x}),!A&&{weapon1MainSigil2Id:y}),A&&{weapon1OffType:Jr(A)}),A&&{weapon1OffSigilId:y}),I&&{weapon2MainType:Jr(I)}),I&&{weapon2MainSigil1Id:x}),!D&&{weapon2MainSigil2Id:y}),D&&{weapon2OffType:Jr(D)}),D&&{weapon2OffSigilId:y}),C=Si.flatMap(q=>q.items).filter(q=>u[q.id]).map(({id:q,gw2id:j,type:K})=>({id:q,gw2id:j,type:K})),P={profession:c,weight:qp(c),gear:a,attributes:s,runeId:S.gw2id,runeName:R,infusions:[...Array(18).fill(49432)],weapons:$,consumables:{foodId:g,utilityId:h},skills:r,assumedBuffs:C};navigator.clipboard.writeText(`<Character ${$P(`gear={${JSON.stringify(P,null,2)}}`)} />`)};return i(ge,{children:w(Kt,{children:[i(Jt,{expandIcon:i(Zt,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:i(V,{children:i(J,{children:"Development"})})}),i(Qt,{children:w(he,{container:!0,children:[i(he,{item:!0,xs:12,children:i(Tn,{title:n("Website Templates"),helpText:i(J,{children:"Create templates for the discretize.eu website. Please check the discretize-guides repo for more information."}),content:i(id,{character:e,buttons:[{label:"Copy Build to clipboard",onClick:o,icon:fa}]})})}),i(he,{item:!0,xs:12,children:i(Tn,{title:n("Optimizer Templates"),content:i(AP,{character:e}),helpText:i(J,{children:"Create build templates that can be used for the gear optimizer."})})})]})})]})})};var IP=G.memo(DP);const BP=({data:e})=>{var a;const{t:n}=ke(),t=U(xo);if(!t)return null;console.log("Selected Character Data:",t);const r=Object.keys(t.results.effectiveDamageDistribution).map(l=>({name:l==="Poison Damage"?"Poisoned":l.replace("Damage","").trim(),value:t.results.damageBreakdown[l]})),o=Object.keys(t.results.effectiveDamageDistribution).map(l=>({name:l==="Poison Damage"?"Poisoned":l.replace("Damage","").trim(),value:t.results.effectiveDamageDistribution[l]})),s=Si.flatMap(l=>l.items).filter(l=>t.settings.cachedFormState.buffs.buffs[l.id]);return w(ac,{location:"ResultDetails",resetKeys:[t],children:[i(Ri,{text:"Result Character"}),i(Gp,{data:e,character:t,assumedBuffs:s}),w(he,{container:!0,spacing:2,children:[w(he,{item:!0,xs:12,sm:6,md:4,children:[i(WS,{data:t.attributes}),i(LS,{data:t.results.indicators}),i(Yo,{data:t.gearStats,title:n("Stats from affixes")}),t.infusions&&i(zS,{data:t.infusions})]}),w(he,{item:!0,xs:12,sm:6,md:4,children:[i(hl,{title:n("Damage Breakdown"),data:r}),i(hl,{title:n("Effective Distribution"),data:o})]}),w(he,{item:!0,xs:12,sm:6,md:4,children:[i(Yo,{data:t.results.effectivePositiveValues,title:n("Damage increase from +5 of attribute")}),i(Yo,{data:t.results.effectiveNegativeValues,title:n("Damage loss from -5 of attribute")})]}),i(he,{item:!0,xs:12,sm:6,md:4})]}),i(MS,{data:(a=t==null?void 0:t.settings)==null?void 0:a.appliedModifiers}),i(IP,{character:t})]})};var EP=G.memo(BP);const MP={Sigil1:i(Ze,{id:24615,disableLink:!0,disableText:!0,disableTooltip:!0,style:{fontSize:18}}),Sigil2:i(Ze,{id:24615,disableLink:!0,disableText:!0,disableTooltip:!0,style:{fontSize:18}}),Runes:i(Ze,{id:24836,disableLink:!0,disableText:!0,disableTooltip:!0,style:{fontSize:18}}),Nourishment:i(ro,{disableLink:!0,disableText:!0,name:"Nourishment",style:{fontSize:18}}),Enhancement:i(ro,{disableLink:!0,disableText:!0,name:"Enhancement",style:{fontSize:18}})},LP=({classes:e,weaponType:n="Two-handed",infusions:t={},rankBy:r="Damage",displayExtras:o})=>{const{t:s}=ke();return w(nt,{children:[i(je,{className:e.tablehead,align:"center",padding:"none",children:i(jn,{text:s("Click the star icon to save a result for comparison."),fontSize:"1rem"})}),i(je,{className:e.tablehead,children:s("priorityGoal",{context:r})}),Yp[n].map(a=>i(je,{className:ft(e.tablehead,e.gearColumn),align:"center",padding:"none",children:a.short},a.name)),Object.keys(t).map(a=>i(je,{className:ft(e.tablehead,e.infusionColumn),align:"center",padding:"none",children:i(Ze,{id:oo[a],disableText:!0,disableLink:!0})},a)),sc.filter(a=>o[a]).map((a,l)=>i(je,{className:ft(e.tablehead,e.extrasColumn),align:"center",padding:"none",children:MP[a]},`extras${l}`))]})};var Al=G.memo(LP),wa={},OP=qe.exports;Object.defineProperty(wa,"__esModule",{value:!0});var ad=wa.default=void 0,NP=OP(Ge),zP=Ke,FP=(0,NP.default)((0,zP.jsx)("path",{d:"m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"}),"StarRounded");ad=wa.default=FP;const _P=({character:e,selected:n,saved:t=!1,mostCommonAffix:r,underlineClass:o,selectedValue:s,compareByPercent:a,displayExtras:l})=>{const c=Ee(),{value:u}=e.results,d=s?u-s:0,f=d?` ${d>0?"+":""}${a?`${(100*d/s).toFixed(1)}%`:Math.round(d).toLocaleString()}`:"";return w(nt,{selected:n,style:n?{backgroundColor:"rgba(0, 204, 204, 0.2)"}:null,onClick:m=>c(Kp(e)),hover:!0,className:o,children:[i(je,{scope:"row",align:"center",padding:"none",children:i(ad,{sx:t?{color:"star"}:{opacity:"0.2","&:hover":{opacity:"1",color:"star"}},onClick:m=>{c(Qp(e)),m.stopPropagation()}})}),w(je,{scope:"row",children:[u.toFixed(0),f?i(V,{variant:"caption",sx:{color:"text.secondary"},children:f}):null]}),e.gear.map((m,p)=>i(je,{align:"center",padding:"none",children:i(V,{style:r&&r!==m?{fontWeight:300,fontSize:"1rem",color:"#00cccc"}:{fontWeight:300,fontSize:"1rem"},children:m.slice(0,4)})},m+p)),e.infusions?Object.values(e.infusions).map((m,p)=>i(je,{align:"center",padding:"none",children:m},`infu${p}`)):null,sc.filter(m=>l[m]).map((m,p)=>{var g;const v=e.settings.extrasCombination[m];return i(je,{align:"center",padding:"none",children:v?i(Ze,{id:(g=Pn[v])==null?void 0:g.gw2id,disableText:!0,disableLink:!0,style:{fontSize:23}}):null},`extras${p}`)})]})};var $l=G.memo(_P);const HP=Je()(e=>({container:{borderColor:e.palette.background.paper,border:"1px solid inherit"},shortTable:{maxHeight:440},tallTable:{maxHeight:"90vh"},tablehead:{backgroundColor:e.palette.background.paper},tableCollapse:{borderCollapse:"collapse !important",marginBottom:"0px !important"},underline:{borderBottom:`5px solid ${e.palette.divider}`},gearColumn:{minWidth:"3em"},infusionColumn:{minWidth:"1.8em"},extrasColumn:{minWidth:"2.2em"}})),WP=e=>{const n={};let t=0,r=null;for(const o of e)n[o]=(n[o]||0)+1,n[o]>t&&(t=n[o],r=o);return r},Zo=[],VP=()=>{var A,I,D;const{classes:e}=HP(),{t:n}=ke(),t=U(xo),r=U(Jp)||Zo,o=U(Xp)||Zo,s=U(Zp)||Zo,a=U(Ul),l=U(Gl),c=U(ql),u=G.useMemo(()=>l==="None"?r:l==="Combinations"?o.slice(0,100):l==="Sigils"?o.filter(($,C)=>!o.slice(0,C).some(L=>L.settings.extrasCombination.Sigil1===$.settings.extrasCombination.Sigil1&&L.settings.extrasCombination.Sigil2===$.settings.extrasCombination.Sigil2&&L.results.value>$.results.value)):o.filter(($,C)=>!o.slice(0,C).some(L=>L.settings.extrasCombination[l]===$.settings.extrasCombination[l]&&L.results.value>$.results.value)),[l,r,o]);let d=null;u[0]&&(d=WP(u[0].gear));const f=u[0],m=(A=f==null?void 0:f.settings)==null?void 0:A.weaponType,p=f==null?void 0:f.infusions,v=(I=f==null?void 0:f.settings)==null?void 0:I.rankby,g=(D=t==null?void 0:t.results)==null?void 0:D.value,h=$=>{var C,P;return((P=(C=f==null?void 0:f.settings)==null?void 0:C.shouldDisplayExtras)==null?void 0:P[$])||s.some(L=>{var E,N;return(N=(E=L==null?void 0:L.settings)==null?void 0:E.shouldDisplayExtras)==null?void 0:N[$]})},x=h("Sigil1")||h("Sigil2"),y=h("Runes"),S=h("Nourishment"),R=h("Enhancement"),T=G.useMemo(()=>({Sigil1:x,Sigil2:x,Runes:y,Nourishment:S,Enhancement:R}),[x,y,S,R]);return w(ge,{children:[i(X,{boxShadow:8,mb:3,children:i(Ls,{className:ft(e.container,c?e.tallTable:e.shortTable),children:w(ht,{stickyHeader:!0,"aria-label":"sticky table",className:e.tableCollapse,children:[i(Ns,{children:i(Al,{classes:e,weaponType:m,infusions:p,rankBy:v,displayExtras:T})}),i(gt,{sx:{cursor:"pointer"},children:u.map(($,C)=>{var z,q,j;const P=(z=u[0])==null?void 0:z.results.value,L=(q=u[C])==null?void 0:q.results.value,E=(j=u[C+1])==null?void 0:j.results.value,N=L===P&&L!==E;return i($l,{character:$,selected:$===t,saved:s.includes($),mostCommonAffix:d,underlineClass:N?e.underline:null,selectedValue:g,compareByPercent:a,displayExtras:T},$.id)})})]})})}),s.length?w(ge,{children:[i(Ri,{text:n("Saved Results")}),i(X,{boxShadow:8,mb:3,children:i(Ls,{className:ft(e.container,c?e.tallTable:e.shortTable),children:w(ht,{stickyHeader:!0,"aria-label":"saved results table",className:e.tableCollapse,children:[i(Ns,{style:{visibility:"collapse"},children:i(Al,{classes:e,weaponType:m,infusions:p,rankBy:v,displayExtras:T})}),i(gt,{sx:{cursor:"pointer"},children:s.map(($,C)=>i($l,{character:$,selected:$===t,saved:s.includes($),mostCommonAffix:d,underlineClass:C===s.length-1?e.bigUnderline:null,selectedValue:g,compareByPercent:a,displayExtras:T},$.id))})]})})})]}):null]})};var jP=G.memo(VP);function sd({state:e,setState:n}){return i(Q1,{open:e.open,autoHideDuration:3e3,onClose:()=>n(Ve(pe({},e),{open:!1})),children:i(wo,{onClose:()=>n(Ve(pe({},e),{open:!1})),severity:e.success?"success":"error",children:e.message})})}const UP=0,qP=({type:e})=>{const n=Ee(),{t}=ke(),[r,o]=G.useState({open:!1,success:!0,message:""}),s=G.useCallback(a=>{if(typeof window=="undefined")return;const l=new URL(window.location.href);l.searchParams.set("v",UP),l.searchParams.set("data",a);const c=l.href;if(c.length>8e3){console.log(`URL is too long! (${c.length} characters):`,c),o(v=>Ve(pe({},v),{open:!0,success:!1,message:t("Error: too much data!")}));return}if(console.log(`Exported long URL (${c.length} characters):`,c),!c.includes("optimizer.discretize.eu")){o(v=>Ve(pe({},v),{open:!0,success:!0,message:t("Copied link to clipboard! (Link shortener disabled in preview builds.)")})),navigator.clipboard.writeText(c);return}const u=od.get(`https://go.princeps.biz/?new=${c.replace("&","%26")}`).then(v=>{var g,h;return((g=v==null?void 0:v.data)==null?void 0:g.Status)===200?(console.log("Exported short URL:",v.data.ShortUrl),v.data.ShortUrl):(console.log(`URL shortener returned status ${(h=v==null?void 0:v.data)==null?void 0:h.Status}!`),c)}),d=new Promise(v=>setTimeout(v,3e3,c)),f=Promise.any([u,d]),m=f.then(v=>new Blob([v],{type:"text/plain"}));(typeof ClipboardItem!="undefined"?navigator.clipboard.write([new ClipboardItem({"text/plain":m})]):f.then(v=>navigator.clipboard.writeText(v))).then(()=>o(v=>Ve(pe({},v),{open:!0,success:!0,message:t("Copied link to clipboard!")}))).catch(()=>o(v=>Ve(pe({},v),{open:!0,success:!0,message:t("Failed to copy link to clipboard!")})))},[t]);return w(ge,{children:[i(ef,{content:t("Copy sharable link to clipboard (note: results are not currently included)"),children:i(_n,{onClick:()=>n({type:Pt.ExportFormState,onSuccess:s}),size:"large",children:i(Ir,{})})}),i(sd,{state:r,setState:o})]})},GP=Je()(e=>({modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,2,2)},closeIcon:{fontSize:20}})),YP=({children:e,title:n,character:t})=>{const{classes:r}=GP(),o=Ee(),{t:s}=ke(),[a,l]=G.useState(!1),c=()=>{l(!0)},u=()=>{l(!1)},d=()=>{const m=window.open("","_blank");o({type:Pt.ExportBuildPageState,newPage:m})},f=()=>{o({type:Pt.ExportBuildPageState,copyToClipboard:!0})};return w(ge,{children:[e(c),i(yi,{disableEnforceFocus:!0,"aria-labelledby":"build-share-modal",className:r.modal,open:a,onClose:u,children:i(wi,{in:a,children:w("div",{className:r.paper,children:[w(X,{display:"flex",justifyContent:"space-between",mb:1,children:[n&&i(X,{alignSelf:"center",children:i(V,{children:n})}),i(X,{alignSelf:"center",children:i(_n,{onClick:u,children:i(la,{className:r.closeIcon})})})]}),i(Ni,{}),i(id,{character:t,buttons:[{label:s("Open build"),onClick:d,icon:Ir},{label:s("Copy build"),onClick:f,icon:fa}]})]})})})]})},KP=()=>{const{t:e}=ke(),n=U(xo);return i(Tn,{title:i("a",{style:{textDecoration:"none",color:"inherit"},id:"#share",href:"#share",children:e("Share Builds")}),helpText:e("Generate shareable links here!"),content:w(ge,{children:[i(qP,{})," ",i(V,{variant:"body1",component:"span",children:i(J,{children:"Share settings."})})," ",i(V,{variant:"caption",children:i(J,{children:"Includes the current selected options on this page only. Does not include result builds in the table above"})}),i("br",{}),i(YP,{title:e("Build Share Settings"),character:n,children:t=>i(_n,{disabled:!n,onClick:()=>t(),size:"large",children:i(Ir,{})})})," ",w(V,{variant:"body1",component:"span",children:[i(J,{children:"Share Character."})," "]}),w(V,{variant:"caption",children:[" ",i(J,{children:"Select weapons and skills as you please."})]})]}),extraInfo:i(ge,{})})},QP=({data:e})=>{const n=Ee(),t=U(nf),{t:r}=ke(),o=a=>l=>{n(tf({id:a,enabled:l.target.checked}))},s=a=>l=>{n(rf({id:a,amount:l.target.value}))};return!e||e.length<1?r("This class does not appear to have skills with extra buffs"):e.map(a=>{var p;const{id:l,gw2id:c,subText:u,amountData:d}=a,f=Boolean(t[l]),m=((p=t[l])==null?void 0:p.amount)||"";return w(X,{justifyContent:"space-between",display:"flex",maxWidth:"648px",children:[i(X,{children:i(Tt,{value:l,checked:f,label:w(X,{display:"flex",children:[i(dr,{id:c,disableLink:!0}),u&&i(V,{sx:{fontWeight:200,marginLeft:1},children:r("skillSubText",{context:u})})]}),onChange:o(l)})}),d?i(X,{children:i(bt,{placeholder:d.default,endLabel:r("amountLabel",{context:d.label}),handleAmountChange:s(l),value:m,disabled:!f,maxWidth:38})}):null]},l)})},Dl=({profession:e})=>{var r;const{t:n}=ke(),t=(r=ti[e])==null?void 0:r.find(o=>o.section==="Skills");return t?i(Tn,{title:n("Skills"),content:i(QP,{profession:e,data:t.items})}):null};var Ca={},JP=qe.exports;Object.defineProperty(Ca,"__esModule",{value:!0});var ld=Ca.default=void 0,XP=JP(Ge),Il=Ke,ZP=(0,XP.default)([(0,Il.jsx)("path",{d:"M12 5.99 19.53 19H4.47L12 5.99M12 2 1 21h22L12 2z"},"0"),(0,Il.jsx)("path",{d:"M13 16h-2v2h2zm0-6h-2v5h2z"},"1")],"WarningAmber");ld=Ca.default=ZP;function Bl({children:e,direction:n="column"}){return i(Ln,{sx:{mt:.5,mb:1},elevation:0,children:w(X,{sx:{p:1,display:"flex",flexDirection:n},children:[i(X,{sx:{mr:1},children:i(ld,{})}),i(V,{variant:"caption",paragraph:!0,sx:{mb:0},children:e})]})})}const eR=({profession:e})=>{var g,h,x,y;const n=Ee(),{t}=ke(),r=(h=(g=ti[e])==null?void 0:g.filter(S=>S.id>0))!=null?h:[],o=U(of),s=U(af),a=U(sf),c=U(lc)?{opacity:.5}:{display:"none"},u=S=>R=>{const T=R.target.value;n(lf({index:S,newTraitLine:T}))},d=S=>R=>{const{tier:T,id:A}=R;n(uf({index:S,tier:T,newTrait:A}))},f=(S,R)=>T=>{n(df({index:S,id:R,enabled:T.target.checked}))},m=(S,R)=>T=>{n(pf({index:S,id:R,amount:T.target.value}))},p=[1,2,3].map((S,R)=>{var P,L;const T=o[R],A=T?parseInt(T,10):null,I=[],D=[];(P=Ga[A])==null||P.items.forEach(E=>{const{minor:N,subText:z,amountData:q}=E;N&&!z&&!q?D.push(E):I.push(E)});const $=(L=Ga[A])==null?void 0:L.note,C=`traitNr${S}`;return w(G.Fragment,{children:[w(mn,{variant:"standard",sx:{minWidth:210,margin:1},children:[i(Nn,{id:`Traitline${S}`,children:t("Traitline",{lineNr:S})}),i(ct,{label:t("Traitline",{lineNr:S}),labeldid:`Traitline${S}`,value:T,input:i(zn,{name:t("Traitline",{lineNr:S}),id:C}),onChange:u(R),renderValue:E=>i(Ya,{id:parseInt(E,10),disableLink:!0,style:{lineHeight:"1 !important"}}),children:r.map(E=>E.id).filter(E=>!o.includes(E.toString())||A===E).map(E=>i(Zn,{value:String(E),children:i(Ya,{id:E,disableLink:!0})},E))})]}),A?i(cf,{id:A,selectable:!0,selected:s[R],onSelect:d(R)}):i("br",{}),D.length>0&&i("div",{children:w(V,{variant:"caption",children:[i(J,{children:"Minors:"})," ",D.map(E=>{const{id:N,gw2id:z,subText:q}=E;return w(G.Fragment,{children:[z&&i(ei,{id:z,disableLink:!0})," ",i(V,{variant:"caption",children:q})]},N)})]})}),I.map(E=>{var Z;const{id:N,gw2id:z,minor:q,subText:j,amountData:K}=E,W=q||s[R].includes(z),H=Boolean(a[R][N]),te=(Z=a[R][N])==null?void 0:Z.amount;return w(X,{style:W?{}:c,justifyContent:"space-between",display:"flex",maxWidth:"648px",children:[i(X,{children:i(Tt,{value:N,checked:W&&H,label:w(ge,{children:[z&&i(ei,{id:z,disableLink:!0})," ",i(V,{variant:"caption",children:t("traitSubText",{context:j})})]}),onChange:f(R,N),disabled:!W})}),K?i(X,{children:i(bt,{placeholder:K.default,endLabel:t("amountLabel",{context:K.label}),handleAmountChange:m(R,N),value:te,disabled:!W||!H,maxWidth:38})}):null]},N)}),$?i(X,{sx:{p:1},maxWidth:"648px",children:i(Bl,{direction:"row",children:t("traitNote",{context:$})})}):null]},C)}),v=(y=(x=ti[e])==null?void 0:x.find(S=>S.section==="Skills"))==null?void 0:y.note;return w(ge,{children:[v?i(X,{sx:{p:1},maxWidth:"648px",children:i(Bl,{direction:"row",children:t("traitNote",{context:v})})}):null,p]})},nR=({profession:e,data:n})=>{const t=Ee(),r=U(lc),{t:o}=ke();let s;if(e){const{eliteSpecializations:l}=vo.find(c=>c.profession===e);s=n.presetTraits.list.filter(c=>c.profession===null||c.profession===e||l.includes(c.profession))}const a=G.useCallback(l=>{if(l===null)return;const c=JSON.parse(l.traits);t(ff(c));const u=JSON.parse(l.skills);t(mf(u))},[t]);return i(Tn,{first:!0,title:o("Traits"),helpText:w(ge,{children:[i(J,{children:"Select your traits, then select and customize the trait bonuses you want to simulate using the checkboxes below each line. Many bonuses are conditional and may not apply to your setup."}),i(X,{component:"span",sx:{mt:1,display:"block"}}),i(J,{children:"Only the bonuses with checkboxes are applied here, so be sure to change the Skill Coefficients section when changing to/from traits without checkboxes like Lingering Curse or Legendary Lore for accurate results."})]}),content:i(eR,{profession:e}),extraInfo:w(ge,{children:[i(Fn,{control:i(wr,{checked:r,onChange:l=>t(hf(l.target.checked)),name:"checked",color:"primary"}),label:o("Show all implemented modifier effects")}),e!==""&&i(Xt,{data:s,handleClick:a,presetCategory:"trait"})]})})};var tR=G.memo(nR);const un={templates:Tx,presetBuffs:Cx,presetAffixes:wx,presetDistribution:Sx,presetExtras:kx,presetInfusions:Px,presetTraits:Rx},rR=()=>{const e=U(kt("expertMode")),n=U(bo),{t}=ke(),r=t("Select a class or a build template from the menu above!"),o=t("Select a build template from the menu above!");return w(ge,{children:[i(ly,{data:un.templates.list,buffPresets:un.presetBuffs.list,prioritiesPresets:un.presetAffixes.list,distributionPresets:un.presetDistribution.list,extrasPresets:un.presetExtras.list,traitPresets:un.presetTraits.list}),w(X,{children:[n===""&&w(V,{mb:1,children:[i(ai,{}),i("i",{children:e?r:o})," ",i(ai,{})]}),w("div",{style:n===""?{opacity:.5}:{opacity:1},children:[i(he,{container:!0,children:e?w(ge,{children:[i(tR,{profession:n,data:un}),i(Dl,{profession:n}),i(ul,{profession:n,data:un}),i(Us,{data:un}),i(TC,{}),i(fl,{data:un}),i(pl,{}),i(ml,{data:un}),i(e2,{profession:n,data:un}),i(by,{})]}):w(ge,{children:[i(Dl,{profession:n}),i(ul,{profession:n,data:un}),i(Us,{first:!0,data:un}),i(fl,{data:un}),i(pl,{}),i(ml,{data:un})]})}),i(Jy,{profession:n}),i(jP,{}),i(X,{m:3}),i(EP,{data:un}),i(X,{m:3}),i(KP,{})]})]})]})},oR=({sagaType:e,clearUrlOnSuccess:n})=>{const t=Ee(),[r,o]=G.useState({open:!1,success:!0,message:""}),s=gf({key:Mo.BUILD}),a=G.useCallback(()=>{n&&(Ka({key:Mo.BUILD,value:void 0}),Ka({key:Mo.VERSION,value:void 0})),o(c=>Ve(pe({},c),{open:!0,success:!0,message:"Template successfully loaded!"}))},[n]),l=G.useCallback(()=>{o(c=>Ve(pe({},c),{open:!0,success:!1,message:"There was an error loading this template!"}))},[]);return G.useEffect(()=>(s&&(console.log("Imported URL data:",s),t({type:e,buildUrl:s,onSuccess:a,onError:l})),()=>{}),[s,l,a,t,e]),i(sd,{state:r,setState:o})},iR=()=>{const{i18n:e}=ke(),{language:n}=e;return i(bf,{value:n,children:w(vf,{children:[i(oR,{sagaType:Pt.ImportFormState,clearUrlOnSuccess:!0}),i(xf,{}),w(wo,{elevation:6,variant:"filled",severity:"warning",children:[i(J,{children:"The gear optimizer is currently in beta! Templates are not final and illusion/summon/mech and lifesteal and condition-on-crit damage is inaccurate. Please report potential issues to us in"})," ",i(lo,{href:"https://discord.gg/Qdt7nFY",color:"textPrimary",target:"_blank",rel:"noopener",children:"Discord"})," ",i(J,{children:"or"})," ",w(lo,{href:"https://github.com/discretize/discretize-gear-optimizer/tree/staging",color:"textPrimary",target:"_blank",rel:"noopener",children:[i(Ec,{fontSize:"small"})," Github"]}),"."]}),i(V,{variant:"h2",sx:{paddingBottom:2},children:i(J,{children:"Gear Optimizer"})}),w(ac,{location:"GearOptimizer",children:[i(rR,{})," "]})]})})},aR=yf();wf.render(i(G.StrictMode,{children:w(Cf,{store:aR,children:[i(Sf,{styles:kf}),w(Pf,{theme:Rf,children:[i(Tf,{}),i(iR,{})]})]})}),document.getElementById("root"));
