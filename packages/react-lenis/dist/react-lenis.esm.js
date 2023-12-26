import{useFrame as r}from"@studio-freight/hamo";import e from"@studio-freight/lenis";import t from"prop-types";import o,{createContext as a,useEffect as n,forwardRef as c,useRef as s,useState as l,useCallback as i,useImperativeHandle as f,useContext as u}from"react";import{create as m}from"zustand";import p from"clsx";function d(){return d=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r},d.apply(this,arguments)}const b=a(),y=m((()=>({})));function h(r,e=[],t=0){const{lenis:o,addCallback:a,removeCallback:c}=function(){const r=u(b),e=y();return r??e}();return n((()=>{if(r&&a&&c&&o)return a(r,t),r(o),()=>{c(r)}}),[o,a,c,t,...e]),o}const v=c((({children:t,root:a=!1,options:c={},autoRaf:u=!0,rafPriority:m=0,className:h,...v},g)=>{const N=s(),k=s(),[C,O]=l(),j=s([]),P=i(((r,e)=>{j.current.push({callback:r,priority:e}),j.current.sort(((r,e)=>r.priority-e.priority))}),[]),w=i((r=>{j.current=j.current.filter((e=>e.callback!==r))}),[]);f(g,(()=>C),[C]),n((()=>{const r=new e({...c,...!a&&{wrapper:N.current,content:k.current}});return O(r),()=>{r.destroy(),O(void 0)}}),[a,JSON.stringify(c)]),r((r=>{u&&C?.raf(r)}),m),n((()=>{a&&C&&y.setState({lenis:C,addCallback:P,removeCallback:w})}),[a,C,P,w]);const E=i((r=>{for(let e=0;e<j.current.length;e++)j.current[e].callback(r)}),[]);n((()=>(C?.on("scroll",E),()=>{C?.off("scroll",E)})),[C,E]);const R=i((()=>{N.current&&(N.current.className=p(C?.className,h))}),[C,h]);return n((()=>(R(),C?.on("className change",R),()=>{C?.off("className change",R)})),[C,R]),o.createElement(b.Provider,{value:{lenis:C,addCallback:P,removeCallback:w}},a?t:o.createElement("div",d({ref:N,className:p(C?.className,h)},v),o.createElement("div",{ref:k},t)))}));v.displayName="ReactLenis",v.propTypes={children:t.node,root:t.bool,options:t.object,autoRaf:t.bool,rafPriority:t.number,className:t.string};export{v as Lenis,b as LenisContext,v as ReactLenis,v as default,h as useLenis};
//# sourceMappingURL=react-lenis.esm.js.map
