_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[34],{"2qu3":function(e,t,r){"use strict";var n=r("lSNA"),i=r("lwsE"),c=r("W8MJ");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,s=!0,a=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){a=!0,c=e},f:function(){try{s||null==r.return||r.return()}finally{if(a)throw c}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.__esModule=!0,t.default=void 0;var d,u=(d=r("q1tI"))&&d.__esModule?d:{default:d},j=r("8L3h"),m=r("jwwS");var b=[],f=[],h=!1;function p(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}function O(e){var t={loading:!1,loaded:{},error:null},r=[];try{Object.keys(e).forEach((function(n){var i=p(e[n]);i.loading?t.loading=!0:(t.loaded[n]=i.loaded,t.error=i.error),r.push(i.promise),i.promise.then((function(e){t.loaded[n]=e})).catch((function(e){t.error=e}))}))}catch(n){t.error=n}return t.promise=Promise.all(r).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function v(e,t){return u.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function x(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:v,webpack:null,modules:null},t),n=null;function i(){if(!n){var t=new g(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!h&&"function"===typeof r.webpack){var c=r.webpack();f.push((function(e){var t,r=o(c);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(-1!==e.indexOf(n))return i()}}catch(s){r.e(s)}finally{r.f()}}))}var s=function(e,t){i();var c=u.default.useContext(m.LoadableContext),s=(0,j.useSubscription)(n);return u.default.useImperativeHandle(t,(function(){return{retry:n.retry}}),[]),c&&Array.isArray(r.modules)&&r.modules.forEach((function(e){c(e)})),u.default.useMemo((function(){return s.loading||s.error?u.default.createElement(r.loading,{isLoading:s.loading,pastDelay:s.pastDelay,timedOut:s.timedOut,error:s.error,retry:n.retry}):s.loaded?r.render(s.loaded,e):null}),[e,s])};return s.preload=function(){return i()},s.displayName="LoadableComponent",u.default.forwardRef(s)}var g=function(){function e(t,r){i(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return c(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=a(a({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function y(e){return x(p,e)}function N(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return N(e,t)}))}y.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return x(O,e)},y.preloadAll=function(){return new Promise((function(e,t){N(b).then(e,t)}))},y.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return h=!0,t()};N(f,e).then(r,r)}))},window.__NEXT_PRELOADREADY=y.preloadReady;var _=y;t.default=_},Ix5F:function(e,t,r){"use strict";var n=r("nKUr"),i=(r("q1tI"),r("YFqc")),c=r.n(i);t.a=function(e){var t=e.pageTitle,r=e.homePageUrl,i=e.homePageText,s=e.activePageText,a=e.bgImage;return Object(n.jsx)("div",{className:"page-title-area ".concat(a),children:Object(n.jsx)("div",{className:"d-table",children:Object(n.jsx)("div",{className:"d-table-cell",children:Object(n.jsxs)("div",{className:"page-title-item",children:[Object(n.jsx)("h2",{children:t}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(c.a,{href:r,children:Object(n.jsx)("a",{children:i})})}),Object(n.jsx)("li",{className:"active",children:s})]})]})})})})}},XV8z:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/testimonials",function(){return r("ptHL")}])},a6RD:function(e,t,r){"use strict";var n=r("lSNA");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.__esModule=!0,t.noSSR=o,t.default=function(e,t){var r=s.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=c(c({},n),e));if(n=c(c({},n),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(n.render=function(t,r){return e.render(r,t)}),e.modules)){r=s.default.Map;var i={},a=e.modules();Object.keys(a).forEach((function(e){var t=a[e];"function"!==typeof t.then?i[e]=t:i[e]=function(){return t.then((function(e){return e.default||e}))}})),n.loader=i}n.loadableGenerated&&delete(n=c(c({},n),n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,o(r,n);delete n.ssr}return r(n)};a(r("q1tI"));var s=a(r("2qu3"));function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return delete t.webpack,delete t.modules,e(t)}},gP0B:function(e,t,r){"use strict";var n=r("nKUr");r("q1tI"),r("YFqc");t.a=function(){return Object(n.jsx)("div",{className:"doctors-area ptb-100",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"section-title",children:Object(n.jsx)("h2",{children:"Meet Our Staff"})}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-sm-6 col-lg-4",children:Object(n.jsxs)("div",{className:"doctor-item",children:[Object(n.jsx)("div",{className:"doctor-top",children:Object(n.jsx)("img",{src:"/images/doctors/doctor1.jpg",alt:"Doctor"})}),Object(n.jsxs)("div",{className:"doctor-bottom",children:[Object(n.jsx)("h3",{children:Object(n.jsx)("a",{children:"Dr. Babatunde"})}),Object(n.jsx)("span",{children:"Neurosurgeon"})]})]})}),Object(n.jsx)("div",{className:"col-sm-6 col-lg-4",children:Object(n.jsxs)("div",{className:"doctor-item",children:[Object(n.jsx)("div",{className:"doctor-top",children:Object(n.jsx)("img",{src:"/images/doctors/doctor2.jpg",alt:"Doctor"})}),Object(n.jsxs)("div",{className:"doctor-bottom",children:[Object(n.jsx)("h3",{children:Object(n.jsx)("a",{children:"Dr. Addision Smith"})}),Object(n.jsx)("span",{children:"Neurosurgeon"})]})]})}),Object(n.jsx)("div",{className:"col-sm-6 offset-sm-3 offset-lg-0 col-lg-4",children:Object(n.jsxs)("div",{className:"doctor-item",children:[Object(n.jsx)("div",{className:"doctor-top",children:Object(n.jsx)("img",{src:"/images/doctors/doctor3.jpg",alt:"Doctor"})}),Object(n.jsxs)("div",{className:"doctor-bottom",children:[Object(n.jsx)("h3",{children:Object(n.jsx)("a",{children:"Dr. Sarah Tylor"})}),Object(n.jsx)("span",{children:"Dental Surgeon"})]})]})})]})]})})}},iG4s:function(e,t,r){"use strict";var n=r("rePB"),i=r("ODXe"),c=r("nKUr"),s=r("q1tI"),a=r.n(s),o=r("a6RD");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=r.n(o)()((function(){return r.e(4).then(r.t.bind(null,"Rst5",7))}),{loadableGenerated:{webpack:function(){return["Rst5"]},modules:["react-owl-carousel3"]}}),j={items:1,loop:!0,margin:0,nav:!0,dots:!1,autoplay:!1,autoplayHoverPause:!0,navText:["<i class='icofont-simple-left'></i>","<i class='icofont-simple-right'></i>"]};t.a=function(){var e=a.a.useState(!1),t=Object(i.a)(e,2),r=t[0],n=t[1];return a.a.useEffect((function(){n(!0)}),[]),Object(c.jsx)("div",{className:"review-area ptb-100",children:Object(c.jsx)("div",{className:"container",children:r?Object(c.jsxs)(u,d(d({className:"feedback-slider owl-carousel owl-theme"},j),{},{children:[Object(c.jsxs)("div",{className:"feedback-item",children:[Object(c.jsxs)("div",{className:"client-img",children:[Object(c.jsx)("img",{src:"/images/clients/client1.png",alt:"Feedback"}),Object(c.jsx)("h3",{children:"Adision Smith"})]}),Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra"})]}),Object(c.jsxs)("div",{className:"feedback-item",children:[Object(c.jsxs)("div",{className:"client-img",children:[Object(c.jsx)("img",{src:"/images/clients/client2.png",alt:"Feedback"}),Object(c.jsx)("h3",{children:"John Cena"})]}),Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra"})]}),Object(c.jsxs)("div",{className:"feedback-item",children:[Object(c.jsxs)("div",{className:"client-img",children:[Object(c.jsx)("img",{src:"/images/clients/client3.png",alt:"Feedback"}),Object(c.jsx)("h3",{children:"Mac Smith"})]}),Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra"})]}),Object(c.jsxs)("div",{className:"feedback-item",children:[Object(c.jsxs)("div",{className:"client-img",children:[Object(c.jsx)("img",{src:"/images/clients/client4.png",alt:"Feedback"}),Object(c.jsx)("h3",{children:"Shane Watson"})]}),Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra"})]})]})):""})})}},jwwS:function(e,t,r){"use strict";var n;t.__esModule=!0,t.LoadableContext=void 0;var i=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=i},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},ptHL:function(e,t,r){"use strict";r.r(t);var n=r("nKUr"),i=r("q1tI"),c=r.n(i),s=r("j1fb"),a=r("SxW8"),o=r("Ix5F"),l=r("sSrI"),d=r("iG4s"),u=r("gP0B"),j=r("mdYk");t.default=function(){return Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)(s.a,{}),Object(n.jsx)(a.a,{}),Object(n.jsx)(o.a,{pageTitle:"Testimonials",homePageUrl:"/",homePageText:"Home",activePageText:"Testimonials",bgImage:"page-title-one"}),Object(n.jsx)("div",{className:"pt-100",children:Object(n.jsx)(l.a,{})}),Object(n.jsx)(d.a,{}),Object(n.jsx)(u.a,{}),Object(n.jsx)(j.a,{})]})}},sSrI:function(e,t,r){"use strict";var n=r("nKUr"),i=(r("q1tI"),r("YFqc")),c=r.n(i);t.a=function(){return Object(n.jsx)("div",{className:"expertise-area pb-70",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"section-title",children:Object(n.jsx)("h2",{children:"Our Expertise"})}),Object(n.jsxs)("div",{className:"row align-items-center",children:[Object(n.jsx)("div",{className:"col-lg-6",children:Object(n.jsx)("div",{className:"expertise-item",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-sm-6 col-lg-6",children:Object(n.jsxs)("div",{className:"expertise-inner",children:[Object(n.jsx)("i",{className:"icofont-doctor-alt"}),Object(n.jsx)("h3",{children:Object(n.jsx)(c.a,{href:"/#",children:Object(n.jsx)("a",{children:"Certified Doctors"})})}),Object(n.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})}),Object(n.jsx)("div",{className:"col-sm-6 col-lg-6",children:Object(n.jsxs)("div",{className:"expertise-inner",children:[Object(n.jsx)("i",{className:"icofont-stretcher"}),Object(n.jsx)("h3",{children:Object(n.jsx)(c.a,{href:"/#",children:Object(n.jsx)("a",{children:"Emergency"})})}),Object(n.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})}),Object(n.jsx)("div",{className:"col-sm-6 col-lg-6",children:Object(n.jsxs)("div",{className:"expertise-inner",children:[Object(n.jsx)("i",{className:"icofont-network"}),Object(n.jsx)("h3",{children:Object(n.jsx)(c.a,{href:"/#",children:Object(n.jsx)("a",{children:"Teachnology"})})}),Object(n.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})}),Object(n.jsx)("div",{className:"col-sm-6 col-lg-6",children:Object(n.jsxs)("div",{className:"expertise-inner",children:[Object(n.jsx)("i",{className:"icofont-ambulance-cross"}),Object(n.jsx)("h3",{children:Object(n.jsx)(c.a,{href:"/#",children:Object(n.jsx)("a",{children:"Ambulance"})})}),Object(n.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})})]})})}),Object(n.jsx)("div",{className:"col-lg-6",children:Object(n.jsx)("div",{className:"expertise-item",children:Object(n.jsx)("div",{className:"expertise-right",children:Object(n.jsx)("img",{src:"/images/about4.jpg",alt:"Expertise"})})})})]})]})})}}},[["XV8z",0,1,2,3]]]);