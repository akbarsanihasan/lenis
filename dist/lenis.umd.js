!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("tiny-emitter"),require("virtual-scroll")):"function"==typeof define&&define.amd?define(["tiny-emitter","virtual-scroll"],e):(t||self).lenis=e(t.tinyEmitter,t.virtualScroll)}(this,function(t,e){function i(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var o=/*#__PURE__*/i(t),r=/*#__PURE__*/i(e);function n(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function l(){return l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},l.apply(this,arguments)}function c(t,e){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},c(t,e)}function a(t,e){var i=t%e;return i<0&&(i+=e),i}var h=["duration","easing"],u=/*#__PURE__*/function(){function t(){}var e=t.prototype;return e.to=function(t,e){var i=this,o=void 0===e?{}:e,r=o.duration,n=void 0===r?1:r,s=o.easing,c=void 0===s?function(t){return t}:s,a=function(t,e){if(null==t)return{};var i,o,r={},n=Object.keys(t);for(o=0;o<n.length;o++)e.indexOf(i=n[o])>=0||(r[i]=t[i]);return r}(o,h);this.target=t,this.fromKeys=l({},a),this.toKeys=l({},a),this.keys=Object.keys(l({},a)),this.keys.forEach(function(e){i.fromKeys[e]=t[e]}),this.duration=n,this.easing=c,this.currentTime=0,this.isRunning=!0},e.stop=function(){this.isRunning=!1},e.raf=function(t){var e=this;if(this.isRunning){this.currentTime=Math.min(this.currentTime+t,this.duration);var i=this.easing(this.progress);this.keys.forEach(function(t){var o=e.fromKeys[t];e.target[t]=o+(e.toKeys[t]-o)*i}),1===i&&this.stop()}},s(t,[{key:"progress",get:function(){return this.currentTime/this.duration}}]),t}();/*#__PURE__*/
return function(t){var e,i;function o(e){var i,o,n,s,l=void 0===e?{}:e,c=l.duration,a=void 0===c?1.2:c,h=l.easing,p=void 0===h?function(t){return Math.min(1,1.001-Math.pow(2,-10*t))}:h,d=l.smooth,f=void 0===d||d,v=l.mouseMultiplier,g=void 0===v?1:v,w=l.smoothTouch,m=void 0!==w&&w,y=l.touchMultiplier,b=void 0===y?2:y,S=l.direction,N=void 0===S?"vertical":S,O=l.gestureDirection,z=void 0===O?"vertical":O,T=l.infinite,R=void 0!==T&&T,W=l.wrapper,M=void 0===W?window:W,j=l.content,k=void 0===j?document.body:j;(s=t.call(this)||this).onWindowResize=function(){s.wrapperWidth=window.innerWidth,s.wrapperHeight=window.innerHeight},s.onWrapperResize=function(t){var e=t[0];if(e){var i=e.contentRect;s.wrapperWidth=i.width,s.wrapperHeight=i.height}},s.onContentResize=function(t){var e=t[0];if(e){var i=e.contentRect;s.contentWidth=i.width,s.contentHeight=i.height}},s.onVirtualScroll=function(t){var e=t.deltaY,i=t.deltaX,o=t.originalEvent,r=!!o.composedPath().find(function(t){return t.hasAttribute&&t.hasAttribute("data-lenis-prevent")});o.ctrlKey||r||(s.smooth=o.changedTouches?s.smoothTouch:s.options.smooth,s.stopped?o.preventDefault():s.smooth&&4!==o.buttons&&(s.smooth&&o.preventDefault(),s.targetScroll-="both"===s.gestureDirection?i+e:"horizontal"===s.gestureDirection?i:e,s.scrollTo(s.targetScroll)))},s.onScroll=function(t){s.isScrolling&&s.smooth||(s.targetScroll=s.scroll=s.lastScroll=s.wrapperNode[s.scrollProperty],s.notify())},window.lenisVersion="0.2.18",s.options={duration:a,easing:p,smooth:f,mouseMultiplier:g,smoothTouch:m,touchMultiplier:b,direction:N,gestureDirection:z,infinite:R,wrapper:M,content:k},s.duration=a,s.easing=p,s.smooth=f,s.mouseMultiplier=g,s.smoothTouch=m,s.touchMultiplier=b,s.direction=N,s.gestureDirection=z,s.infinite=R,s.wrapperNode=M,s.contentNode=k,s.wrapperNode.addEventListener("scroll",s.onScroll),s.wrapperNode===window?(s.wrapperNode.addEventListener("resize",s.onWindowResize),s.onWindowResize()):(s.wrapperHeight=s.wrapperNode.offsetHeight,s.wrapperWidth=s.wrapperNode.offsetWidth,s.wrapperObserver=new ResizeObserver(s.onWrapperResize),s.wrapperObserver.observe(s.wrapperNode)),s.contentHeight=s.contentNode.offsetHeight,s.contentWidth=s.contentNode.offsetWidth,s.contentObserver=new ResizeObserver(s.onContentResize),s.contentObserver.observe(s.contentNode),s.targetScroll=s.scroll=s.lastScroll=s.wrapperNode[s.scrollProperty],s.animate=new u;var H=(null==(i=navigator)||null==(o=i.userAgentData)?void 0:o.platform)||(null==(n=navigator)?void 0:n.platform)||"unknown";return s.virtualScroll=new r.default({el:s.wrapperNode,firefoxMultiplier:50,mouseMultiplier:s.mouseMultiplier*(H.includes("Win")?.84:.4),useKeyboard:!1,touchMultiplier:s.touchMultiplier,useTouch:!0,passive:!1}),s.virtualScroll.on(s.onVirtualScroll),s}i=t,(e=o).prototype=Object.create(i.prototype),e.prototype.constructor=e,c(e,i);var n=o.prototype;return n.start=function(){this.stopped=!1},n.stop=function(){this.stopped=!0,this.animate.stop()},n.destroy=function(){var t;this.wrapperNode===window&&this.wrapperNode.removeEventListener("resize",this.onWindowResize),this.wrapperNode.removeEventListener("scroll",this.onScroll),this.virtualScroll.destroy(),null==(t=this.wrapperObserver)||t.disconnect(),this.contentObserver.disconnect()},n.raf=function(t){var e=t-(this.now||0);this.now=t,!this.stopped&&this.smooth&&(this.lastScroll=this.scroll,this.animate.raf(.001*e),this.scroll===this.targetScroll&&(this.lastScroll=this.scroll),this.isScrolling&&(this.setScroll(this.scroll),this.notify()),this.isScrolling=this.scroll!==this.targetScroll)},n.setScroll=function(t){var e=this.infinite?a(t,this.limit):t;"horizontal"===this.direction?this.wrapperNode.scrollTo(e,0):this.wrapperNode.scrollTo(0,e)},n.notify=function(){var t=this.infinite?a(this.scroll,this.limit):this.scroll;this.emit("scroll",{scroll:t,limit:this.limit,velocity:this.velocity,direction:this.direction,progress:t/this.limit})},n.scrollTo=function(t,e){var i=void 0===e?{}:e,o=i.offset,r=void 0===o?0:o,n=i.immediate,s=void 0!==n&&n,l=i.duration,c=void 0===l?this.duration:l,a=i.easing,h=void 0===a?this.easing:a;if(null!=t){var u;if("number"==typeof t)u=t;else if("top"===t||"#top"===t)u=0;else if("bottom"===t)u=this.limit;else{var p;if("string"==typeof t)p=document.querySelector(t);else{if(null==t||!t.nodeType)return;p=t}if(!p)return;var d=0;if(this.wrapperNode!==window){var f=this.wrapperNode.getBoundingClientRect();d="horizontal"===this.direction?f.left:f.top}var v=p.getBoundingClientRect();u=("horizontal"===this.direction?v.left:v.top)+this.scroll-d}u+=r,this.targetScroll=this.infinite?u:Math.max(0,Math.min(u,this.limit)),!this.smooth||s?this.setScroll(this.targetScroll):this.animate.to(this,{duration:c,easing:h,scroll:this.targetScroll})}},s(o,[{key:"scrollProperty",get:function(){return this.wrapperNode===window?"horizontal"===this.direction?"scrollX":"scrollY":"horizontal"===this.direction?"scrollLeft":"scrollTop"}},{key:"limit",get:function(){return"horizontal"===this.direction?this.contentWidth-this.wrapperWidth:this.contentHeight-this.wrapperHeight}},{key:"velocity",get:function(){return this.scroll-this.lastScroll}}]),o}(o.default)});
//# sourceMappingURL=lenis.umd.js.map
