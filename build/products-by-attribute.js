this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["products-by-attribute"]=function(t){function e(e){for(var n,i,a=e[0],u=e[1],s=e[2],d=0,b=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&b.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);for(l&&l(e);b.length;)b.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,a=1;a<r.length;a++){var u=r[a];0!==o[u]&&(n=!1)}n&&(c.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={19:0},c=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var l=u;return c.push([619,2,1,0]),r()}({0:function(t,e){!function(){t.exports=this.wp.element}()},1:function(t,e){!function(){t.exports=this.wp.i18n}()},17:function(t,e){!function(){t.exports=this.wp.compose}()},18:function(t,e,r){"use strict";r.d(e,"g",(function(){return b})),r.d(e,"d",(function(){return p})),r.d(e,"e",(function(){return g})),r.d(e,"c",(function(){return f})),r.d(e,"b",(function(){return h})),r.d(e,"f",(function(){return O})),r.d(e,"a",(function(){return m})),r.d(e,"h",(function(){return v}));var n=r(7),o=r.n(n),c=r(20),i=r(21),a=r.n(i),u=r(4),s=r(5);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(r,!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var b=function(t){var e=t.selected,r=void 0===e?[]:e,n=t.search,o=void 0===n?"":n,i=t.queryArgs,l=function(t){var e=t.selected,r=void 0===e?[]:e,n=t.search,o=void 0===n?"":n,i=t.queryArgs,a=void 0===i?[]:i,u={per_page:s.j?100:-1,catalog_visibility:"any",status:"publish",search:o,orderby:"title",order:"asc"},l=[Object(c.addQueryArgs)(s.f.products,d({},u,{},a))];return s.j&&r.length&&l.push(Object(c.addQueryArgs)(s.f.products,{catalog_visibility:"any",status:"publish",include:r})),l}({selected:r,search:o,queryArgs:void 0===i?[]:i});return Promise.all(l.map((function(t){return a()({path:t})}))).then((function(t){return Object(u.uniqBy)(Object(u.flatten)(t),"id").map((function(t){return d({},t,{parent:0})}))})).catch((function(t){throw t}))},p=function(t){return a()({path:"".concat(s.f.products,"/").concat(t)})},g=function(t){var e=t.selected,r=function(t){var e=t.selected,r=void 0===e?[]:e,n=t.search,o=[Object(c.addQueryArgs)("".concat(s.f.products,"/tags"),{per_page:s.k?100:-1,orderby:s.k?"count":"name",order:s.k?"desc":"asc",search:n})];return s.k&&r.length&&o.push(Object(c.addQueryArgs)("".concat(s.f.products,"/tags"),{include:r})),o}({selected:void 0===e?[]:e,search:t.search});return Promise.all(r.map((function(t){return a()({path:t})}))).then((function(t){return Object(u.uniqBy)(Object(u.flatten)(t),"id")}))},f=function(t){return a()({path:"".concat(s.f.categories,"/").concat(t)})},h=function(){return a()({path:Object(c.addQueryArgs)("".concat(s.f.products,"/categories"),{per_page:-1})})},O=function(t){return a()({path:Object(c.addQueryArgs)("".concat(s.f.products,"/").concat(t,"/variations"),{per_page:-1})})},m=function(){return a()({path:Object(c.addQueryArgs)("".concat(s.f.products,"/attributes"),{per_page:-1})})},v=function(t){return a()({path:Object(c.addQueryArgs)("".concat(s.f.products,"/attributes/").concat(t,"/terms"),{per_page:-1})})}},19:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(9),o=r.n(n),c=function(t){var e;return o.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if("function"!=typeof t.json){r.next=11;break}return r.prev=1,r.next=4,o.a.awrap(t.json());case 4:return e=r.sent,r.abrupt("return",{message:e.message,type:e.type||"api"});case 8:return r.prev=8,r.t0=r.catch(1),r.abrupt("return",{message:r.t0.message,type:"general"});case 11:return r.abrupt("return",{message:t.message,type:t.type||"general"});case 12:case"end":return r.stop()}}),null,null,[[1,8]])}},2:function(t,e){!function(){t.exports=this.wp.components}()},20:function(t,e){!function(){t.exports=this.wp.url}()},21:function(t,e){!function(){t.exports=this.wp.apiFetch}()},22:function(t,e){!function(){t.exports=this.React}()},23:function(t,e){!function(){t.exports=this.wp.editor}()},24:function(t,e){!function(){t.exports=this.moment}()},25:function(t,e){!function(){t.exports=this.wp.blocks}()},29:function(t,e){!function(){t.exports=this.wp.escapeHtml}()},31:function(t,e){!function(){t.exports=this.wp.isShallowEqual}()},32:function(t,e,r){"use strict";var n=r(0),o=r(1),c=(r(3),r(29));e.a=function(t){var e,r,i,a=t.error;return Object(n.createElement)("div",{className:"wc-block-error-message"},(r=(e=a).message,i=e.type,r?"general"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):"api"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned from the API","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):r:Object(o.__)("An unknown error occurred which prevented the block from being updated.","woo-gutenberg-products-block")))}},33:function(t,e,r){"use strict";var n=r(11),o=r.n(n),c=r(9),i=r.n(c),a=r(7),u=r.n(a),s=r(12),l=r.n(s),d=r(16),b=r.n(d),p=r(13),g=r.n(p),f=r(14),h=r.n(f),O=r(8),m=r.n(O),v=r(15),y=r.n(v),j=r(0),w=r(17),_=(r(3),r(4)),k=r(18),S=r(19);function P(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function E(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?P(r,!0).forEach((function(e){u()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):P(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var C=Object(w.createHigherOrderComponent)((function(t){var e=function(e){function r(){var t;return l()(this,r),(t=g()(this,h()(r).apply(this,arguments))).state={attributes:[],error:null,expandedAttribute:null,loading:!1,termsList:{},termsLoading:!1},t.loadAttributes=t.loadAttributes.bind(m()(t)),t.onExpandAttribute=t.onExpandAttribute.bind(m()(t)),t.debouncedLoadTerms=Object(_.debounce)(t.loadTerms.bind(m()(t)),200),t}return y()(r,e),b()(r,[{key:"componentDidMount",value:function(){this.loadAttributes()}},{key:"componentWillUnmount",value:function(){this.debouncedLoadTerms.cancel()}},{key:"componentDidUpdate",value:function(t,e){e.expandedAttribute!==this.state.expandedAttribute&&this.debouncedLoadTerms()}},{key:"loadAttributes",value:function(){var t=this,e=this.props.selected,r=this.state.expandedAttribute;this.setState({loading:!0}),Object(k.a)().then((function(n){n=n.map((function(t){return E({},t,{parent:0})}));var o=r;if(!r&&e.length>0){var c=n.find((function(t){return t.slug===e[0].attr_slug}));c&&(o=c.id)}t.setState({attributes:n,expandedAttribute:o,loading:!1,error:null})})).catch((function(e){var r;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.awrap(Object(S.a)(e));case 2:r=n.sent,t.setState({attributes:[],expandedAttribute:null,loading:!1,error:r});case 4:case"end":return n.stop()}}))}))}},{key:"loadTerms",value:function(){var t=this,e=this.state,r=e.expandedAttribute,n=e.termsList;r&&(n[r]||this.setState({termsLoading:!0}),Object(k.h)(r).then((function(e){e=e.map((function(t){return E({},t,{parent:r,attr_slug:t.attribute.slug})})),t.setState((function(t){return{termsList:E({},t.termsList,u()({},r,e)),termsLoading:!1}}))})).catch((function(e){var r;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.awrap(Object(S.a)(e));case 2:r=n.sent,t.setState({termsList:{},termsLoading:!1,error:r});case 4:case"end":return n.stop()}}))})))}},{key:"onExpandAttribute",value:function(t){var e=this.state.expandedAttribute;this.setState({expandedAttribute:t===e?null:t})}},{key:"render",value:function(){var e=this.state,r=e.error,n=e.expandedAttribute,c=e.loading,i=e.attributes,a=e.termsList,u=e.termsLoading;return Object(j.createElement)(t,o()({},this.props,{attributes:i,error:r,expandedAttribute:n,onExpandAttribute:this.onExpandAttribute,isLoading:c,termsAreLoading:u,termsList:a}))}}]),r}(j.Component);return e.defaultProps={selected:[]},e}),"withAttributes"),x=Object(w.createHigherOrderComponent)((function(t){return function(e){function r(){var t;return l()(this,r),(t=g()(this,h()(r).apply(this,arguments))).state={error:null,loading:!1,categories:null},t.loadCategories=t.loadCategories.bind(m()(t)),t}return y()(r,e),b()(r,[{key:"componentDidMount",value:function(){this.loadCategories()}},{key:"loadCategories",value:function(){var t=this;this.setState({loading:!0}),Object(k.b)().then((function(e){t.setState({categories:e,loading:!1,error:null})})).catch((function(e){var r;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.awrap(Object(S.a)(e));case 2:r=n.sent,t.setState({categories:null,loading:!1,error:r});case 4:case"end":return n.stop()}}))}))}},{key:"render",value:function(){var e=this.state,r=e.error,n=e.loading,c=e.categories;return Object(j.createElement)(t,o()({},this.props,{error:r,isLoading:n,categories:c}))}}]),r}(j.Component)}),"withCategories"),A=Object(w.createHigherOrderComponent)((function(t){return function(e){function r(){var t;return l()(this,r),(t=g()(this,h()(r).apply(this,arguments))).state={error:null,loading:!1,category:"preview"===t.props.attributes.categoryId?t.props.attributes.previewCategory:null},t.loadCategory=t.loadCategory.bind(m()(t)),t}return y()(r,e),b()(r,[{key:"componentDidMount",value:function(){this.loadCategory()}},{key:"componentDidUpdate",value:function(t){t.attributes.categoryId!==this.props.attributes.categoryId&&this.loadCategory()}},{key:"loadCategory",value:function(){var t=this,e=this.props.attributes.categoryId;"preview"!==e&&(e?(this.setState({loading:!0}),Object(k.c)(e).then((function(e){t.setState({category:e,loading:!1,error:null})})).catch((function(e){var r;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.awrap(Object(S.a)(e));case 2:r=n.sent,t.setState({category:null,loading:!1,error:r});case 4:case"end":return n.stop()}}))}))):this.setState({category:null,loading:!1,error:null}))}},{key:"render",value:function(){var e=this.state,r=e.error,n=e.loading,c=e.category;return Object(j.createElement)(t,o()({},this.props,{error:r,getCategory:this.loadCategory,isLoading:n,category:c}))}}]),r}(j.Component)}),"withCategory"),D=Object(w.createHigherOrderComponent)((function(t){return function(e){function r(){var t,e;l()(this,r);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return e=g()(this,(t=h()(r)).call.apply(t,[this].concat(o))),u()(m()(e),"state",{error:null,loading:!1,product:"preview"===e.props.attributes.productId?e.props.attributes.previewProduct:null}),u()(m()(e),"loadProduct",(function(){var t=e.props.attributes.productId;"preview"!==t&&(t?(e.setState({loading:!0}),Object(k.d)(t).then((function(t){e.setState({product:t,loading:!1,error:null})})).catch((function(t){var r;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.awrap(Object(S.a)(t));case 2:r=n.sent,e.setState({product:null,loading:!1,error:r});case 4:case"end":return n.stop()}}))}))):e.setState({product:null,loading:!1,error:null}))})),e}return y()(r,e),b()(r,[{key:"componentDidMount",value:function(){this.loadProduct()}},{key:"componentDidUpdate",value:function(t){t.attributes.productId!==this.props.attributes.productId&&this.loadProduct()}},{key:"render",value:function(){var e=this.state,r=e.error,n=e.loading,c=e.product;return Object(j.createElement)(t,o()({},this.props,{error:r,getProduct:this.loadProduct,isLoading:n,product:c}))}}]),r}(j.Component)}),"withProduct"),L=r(31),M=r.n(L);function T(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function I(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?T(r,!0).forEach((function(e){u()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):T(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var B=Object(w.createHigherOrderComponent)((function(t){var e=function(e){function r(){var t,e;l()(this,r);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return e=g()(this,(t=h()(r)).call.apply(t,[this].concat(o))),u()(m()(e),"state",{error:null,loading:!1,variations:{}}),u()(m()(e),"loadVariations",(function(){var t=e.props.products,r=e.state,n=r.loading,o=r.variations;if(!n){var c=e.getExpandedProduct();if(c&&!o[c]){var a=t.find((function(t){return t.id===c}));a.variations&&0!==a.variations.length?(e.setState({loading:!0}),Object(k.f)(c).then((function(t){var r=t.map((function(t){return I({},t,{parent:c})}));e.setState({variations:I({},e.state.variations,u()({},c,r)),loading:!1,error:null})})).catch((function(t){var r;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.awrap(Object(S.a)(t));case 2:r=n.sent,e.setState({variations:I({},e.state.variations,u()({},c,null)),loading:!1,error:r});case 4:case"end":return n.stop()}}))}))):e.setState({variations:I({},e.state.variations,u()({},c,null)),loading:!1,error:null})}}})),e}return y()(r,e),b()(r,[{key:"componentDidMount",value:function(){var t=this.props,e=t.selected,r=t.showVariations;e&&r&&this.loadVariations()}},{key:"componentDidUpdate",value:function(t){var e=this.props,r=e.isLoading,n=e.selected;e.showVariations&&(!M()(t.selected,n)||t.isLoading&&!r)&&this.loadVariations()}},{key:"isProductId",value:function(t){return this.props.products.some((function(e){return e.id===t}))}},{key:"findParentProduct",value:function(t){return this.props.products.filter((function(e){return e.variations&&e.variations.includes(t)}))[0].id}},{key:"getExpandedProduct",value:function(){var t=this.props,e=t.isLoading,r=t.selected;if(!t.showVariations)return null;var n=r&&r.length?r[0]:null;return n?this.prevSelectedItem=n:this.prevSelectedItem&&(e||this.isProductId(this.prevSelectedItem)||(n=this.prevSelectedItem)),!e&&n?this.isProductId(n)?n:this.findParentProduct(n):null}},{key:"render",value:function(){var e=this.props,r=e.error,n=e.isLoading,c=this.state,i=c.error,a=c.loading,u=c.variations;return Object(j.createElement)(t,o()({},this.props,{error:i||r,expandedProduct:this.getExpandedProduct(),isLoading:n,variations:u,variationsLoading:a}))}}]),r}(j.Component);return u()(e,"defaultProps",{selected:[],showVariations:!1}),e}),"withProductVariations"),N=r(5),V=Object(w.createHigherOrderComponent)((function(t){var e=function(e){function r(){var t;return l()(this,r),(t=g()(this,h()(r).apply(this,arguments))).state={list:[],loading:!0},t.setError=t.setError.bind(m()(t)),t.debouncedOnSearch=Object(_.debounce)(t.onSearch.bind(m()(t)),400),t}return y()(r,e),b()(r,[{key:"componentDidMount",value:function(){var t=this,e=this.props.selected;Object(k.g)({selected:e}).then((function(e){t.setState({list:e,loading:!1})})).catch(this.setError)}},{key:"componentWillUnmount",value:function(){this.debouncedOnSearch.cancel()}},{key:"onSearch",value:function(t){var e=this,r=this.props.selected;Object(k.g)({selected:r,search:t}).then((function(t){e.setState({list:t,loading:!1})})).catch(this.setError)}},{key:"setError",value:function(t){var e;return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.a.awrap(Object(S.a)(t));case 2:e=r.sent,this.setState({list:[],loading:!1,error:e});case 4:case"end":return r.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state,r=e.error,n=e.list,c=e.loading;return Object(j.createElement)(t,o()({},this.props,{error:r,products:n,isLoading:c,onSearch:N.j?this.debouncedOnSearch:null}))}}]),r}(j.Component);return e.defaultProps={selected:[]},e}),"withSearchedProducts"),H=Object(w.createHigherOrderComponent)((function(t){var e=function(e){function r(){return l()(this,r),g()(this,h()(r).apply(this,arguments))}return y()(r,e),b()(r,[{key:"render",value:function(){var e=this.props.selected;return Object(j.createElement)(t,o()({},this.props,{selected:Object(_.isNil)(e)?[]:[e]}))}}]),r}(j.Component);return e.defaultProps={selected:null},e}),"withTransformSingleSelectToMultipleSelect");r.d(e,"a",(function(){return C})),r.d(e,"b",(function(){return x})),r.d(e,"c",(function(){return A})),r.d(e,"d",(function(){return D})),r.d(e,"e",(function(){return B})),r.d(e,"f",(function(){return V})),r.d(e,"g",(function(){return H}))},4:function(t,e){!function(){t.exports=this.lodash}()},43:function(t,e){!function(){t.exports=this.wp.keycodes}()},46:function(t,e,r){"use strict";var n=r(7),o=r.n(n),c=r(0),i=r(1),a=(r(3),r(2));function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(r,!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.a=function(t){var e=t.onChange,r=t.settings,n=r.button,o=r.price,u=r.rating,l=r.title;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(a.ToggleControl,{label:Object(i.__)("Product title","woo-gutenberg-products-block"),help:l?Object(i.__)("Product title is visible.","woo-gutenberg-products-block"):Object(i.__)("Product title is hidden.","woo-gutenberg-products-block"),checked:l,onChange:function(){return e(s({},r,{title:!l}))}}),Object(c.createElement)(a.ToggleControl,{label:Object(i.__)("Product price","woo-gutenberg-products-block"),help:o?Object(i.__)("Product price is visible.","woo-gutenberg-products-block"):Object(i.__)("Product price is hidden.","woo-gutenberg-products-block"),checked:o,onChange:function(){return e(s({},r,{price:!o}))}}),Object(c.createElement)(a.ToggleControl,{label:Object(i.__)("Product rating","woo-gutenberg-products-block"),help:u?Object(i.__)("Product rating is visible.","woo-gutenberg-products-block"):Object(i.__)("Product rating is hidden.","woo-gutenberg-products-block"),checked:u,onChange:function(){return e(s({},r,{rating:!u}))}}),Object(c.createElement)(a.ToggleControl,{label:Object(i.__)("Add to Cart button","woo-gutenberg-products-block"),help:n?Object(i.__)("Add to Cart button is visible.","woo-gutenberg-products-block"):Object(i.__)("Add to Cart button is hidden.","woo-gutenberg-products-block"),checked:n,onChange:function(){return e(s({},r,{button:!n}))}}))}},47:function(t,e,r){"use strict";var n=r(0),o=r(1),c=r(4),i=(r(3),r(2)),a=r(5);e.a=function(t){var e=t.columns,r=t.rows,u=t.setAttributes,s=t.alignButtons;return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(i.RangeControl,{label:Object(o.__)("Columns","woo-gutenberg-products-block"),value:e,onChange:function(t){var e=Object(c.clamp)(t,a.n,a.l);u({columns:Object(c.isNaN)(e)?"":e})},min:a.n,max:a.l}),Object(n.createElement)(i.RangeControl,{label:Object(o.__)("Rows","woo-gutenberg-products-block"),value:r,onChange:function(t){var e=Object(c.clamp)(t,a.p,a.m);u({rows:Object(c.isNaN)(e)?"":e})},min:a.p,max:a.m}),Object(n.createElement)(i.ToggleControl,{label:Object(o.__)("Align Buttons","woo-gutenberg-products-block"),help:s?Object(o.__)("Buttons are aligned vertically.","woo-gutenberg-products-block"):Object(o.__)("Buttons follow content.","woo-gutenberg-products-block"),checked:s,onChange:function(){return u({alignButtons:!s})}}))}},5:function(t,e,r){"use strict";var n=r(6),o=Object(n.getSetting)("enableReviewRating",!0),c=Object(n.getSetting)("showAvatars",!0),i=Object(n.getSetting)("max_columns",6),a=Object(n.getSetting)("min_columns",1),u=Object(n.getSetting)("default_columns",3),s=Object(n.getSetting)("max_rows",6),l=Object(n.getSetting)("min_rows",1),d=Object(n.getSetting)("default_rows",2),b=Object(n.getSetting)("min_height",500),p=Object(n.getSetting)("default_height",500),g=Object(n.getSetting)("placeholderImgSrc",""),f=(Object(n.getSetting)("thumbnail_size",300),Object(n.getSetting)("isLargeCatalog")),h=Object(n.getSetting)("limitTags"),O=Object(n.getSetting)("hasProducts",!0),m=Object(n.getSetting)("hasTags",!0),v=Object(n.getSetting)("homeUrl",""),y=Object(n.getSetting)("productCount",0),j=Object(n.getSetting)("attributes",[]),w={root:"/wc/blocks",products:"".concat("/wc/blocks","/products"),categories:"".concat("/wc/blocks","/products/categories")};r.d(e,"e",(function(){return o})),r.d(e,"s",(function(){return c})),r.d(e,"l",(function(){return i})),r.d(e,"n",(function(){return a})),r.d(e,"b",(function(){return u})),r.d(e,"m",(function(){return s})),r.d(e,"p",(function(){return l})),r.d(e,"d",(function(){return d})),r.d(e,"o",(function(){return b})),r.d(e,"c",(function(){return p})),r.d(e,"q",(function(){return g})),r.d(e,"j",(function(){return f})),r.d(e,"k",(function(){return h})),r.d(e,"g",(function(){return O})),r.d(e,"h",(function(){return m})),r.d(e,"i",(function(){return v})),r.d(e,"r",(function(){return y})),r.d(e,"a",(function(){return j})),r.d(e,"f",(function(){return w}))},51:function(t,e){!function(){t.exports=this.ReactDOM}()},56:function(t,e){!function(){t.exports=this.wp.viewport}()},567:function(t,e,r){var n=r(568);"string"==typeof n&&(n=[[t.i,n,""]]);var o={insert:"head",singleton:!1};r(36)(n,o);n.locals&&(t.exports=n.locals)},568:function(t,e,r){},58:function(t,e,r){"use strict";var n=r(0),o=r(10),c=r.n(o),i=r(30),a=r.n(i),u=r(5);r.d(e,"a",(function(){return s}));var s=function(t){return function(e){var r=e.attributes,o=r.align,i=r.contentVisibility,s=c()(o?"align".concat(o):"",{"is-hidden-title":!i.title,"is-hidden-price":!i.price,"is-hidden-rating":!i.rating,"is-hidden-button":!i.button});return Object(n.createElement)(n.RawHTML,{className:s},function(t,e){var r=t.attributes,n=r.attributes,o=r.attrOperator,c=r.categories,i=r.catOperator,s=r.orderby,l=r.products,d=r.columns||u.b,b=r.rows||u.d,p=new Map;switch(p.set("limit",b*d),p.set("columns",d),c&&c.length&&(p.set("category",c.join(",")),i&&"all"===i&&p.set("cat_operator","AND")),n&&n.length&&(p.set("terms",n.map((function(t){return t.id})).join(",")),p.set("attribute",n[0].attr_slug),o&&"all"===o&&p.set("terms_operator","AND")),s&&("price_desc"===s?(p.set("orderby","price"),p.set("order","DESC")):"price_asc"===s?(p.set("orderby","price"),p.set("order","ASC")):"date"===s?(p.set("orderby","date"),p.set("order","DESC")):p.set("orderby",s)),e){case"woocommerce/product-best-sellers":p.set("best_selling","1");break;case"woocommerce/product-top-rated":p.set("orderby","rating");break;case"woocommerce/product-on-sale":p.set("on_sale","1");break;case"woocommerce/product-new":p.set("orderby","date"),p.set("order","DESC");break;case"woocommerce/handpicked-products":if(!l.length)return"";p.set("ids",l.join(",")),p.set("limit",l.length);break;case"woocommerce/product-category":if(!c||!c.length)return"";break;case"woocommerce/products-by-attribute":if(!n||!n.length)return""}var g="[products",f=!0,h=!1,O=void 0;try{for(var m,v=p[Symbol.iterator]();!(f=(m=v.next()).done);f=!0){var y=a()(m.value,2);g+=" "+y[0]+'="'+y[1]+'"'}}catch(t){h=!0,O=t}finally{try{f||null==v.return||v.return()}finally{if(h)throw O}}return g+="]"}(e,t))}}},6:function(t,e){!function(){t.exports=this.wc.wcSettings}()},619:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(1),c=r(28),i=r.n(c),a=r(25),u=r(5),s=(r(567),r(12)),l=r.n(s),d=r(16),b=r.n(d),p=r(13),g=r.n(p),f=r(14),h=r.n(f),O=r(15),m=r.n(O),v=r(23),y=r(2),j=(r(3),r(46)),w=r(47),_=r(79),k=r.n(_),S=r(11),P=r.n(S),E=r(4),C=r(34),x=r(33),A=r(32),D=(r(569),function(t){var e=t.attributes,r=t.error,c=t.expandedAttribute,i=t.onChange,a=t.onExpandAttribute,u=t.onOperatorChange,s=t.isLoading,l=t.operator,d=t.selected,b=t.termsAreLoading,p=t.termsList,g=function(t){return function(){i([]),a(t.id)}},f=p[c]||[],h=[].concat(k()(e),k()(f)),O={clear:Object(o.__)("Clear all product attributes","woo-gutenberg-products-block"),list:Object(o.__)("Product Attributes","woo-gutenberg-products-block"),noItems:Object(o.__)("Your store doesn't have any product attributes.","woo-gutenberg-products-block"),search:Object(o.__)("Search for product attributes","woo-gutenberg-products-block"),selected:function(t){return Object(o.sprintf)(Object(o._n)("%d attribute selected","%d attributes selected",t,"woo-gutenberg-products-block"),t)},updated:Object(o.__)("Product attribute search results updated.","woo-gutenberg-products-block")};return r?Object(n.createElement)(A.a,{error:r}):Object(n.createElement)(n.Fragment,null,Object(n.createElement)(C.a,{className:"woocommerce-product-attributes",list:h,isLoading:s,selected:d.map((function(t){var e=t.id;return Object(E.find)(h,{id:e})})).filter(Boolean),onChange:i,renderItem:function(t){var e=t.item,r=t.search,i=t.depth,a=void 0===i?0:i,u=["woocommerce-product-attributes__item","woocommerce-search-list__item"];return r.length&&u.push("is-searching"),0===a&&e.parent&&u.push("is-skip-level"),e.breadcrumbs.length?Object(n.createElement)(C.b,P()({className:u.join(" ")},t,{showCount:!0,"aria-label":"".concat(e.breadcrumbs[0],": ").concat(e.name)})):[Object(n.createElement)(C.b,P()({key:"attr-".concat(e.id)},t,{className:u.join(" "),isSelected:c===e.id,onSelect:g,isSingle:!0,disabled:"0"===e.count,"aria-expanded":c===e.id,"aria-label":Object(o.sprintf)(Object(o._n)("%s, has %d term","%s, has %d terms",e.count,"woo-gutenberg-products-block"),e.name,e.count)})),c===e.id&&b&&Object(n.createElement)("div",{key:"loading",className:"woocommerce-search-list__item woocommerce-product-attributes__itemdepth-1 is-loading is-not-active"},Object(n.createElement)(y.Spinner,null))]},messages:O,isHierarchical:!0}),!!u&&Object(n.createElement)("div",{className:d.length<2?"screen-reader-text":""},Object(n.createElement)(y.SelectControl,{className:"woocommerce-product-attributes__operator",label:Object(o.__)("Display products matching","woo-gutenberg-products-block"),help:Object(o.__)("Pick at least two attributes to use this setting.","woo-gutenberg-products-block"),value:l,onChange:u,options:[{label:Object(o.__)("Any selected attributes","woo-gutenberg-products-block"),value:"any"},{label:Object(o.__)("All selected attributes","woo-gutenberg-products-block"),value:"all"}]})))});D.defaultProps={operator:"any"};var L=Object(x.a)(D),M=r(69),T=function(t){function e(){return l()(this,e),g()(this,h()(e).apply(this,arguments))}return m()(e,t),b()(e,[{key:"getInspectorControls",value:function(){var t=this.props.setAttributes,e=this.props.attributes,r=e.attributes,c=e.attrOperator,i=e.columns,a=e.contentVisibility,u=e.orderby,s=e.rows,l=e.alignButtons;return Object(n.createElement)(v.InspectorControls,{key:"inspector"},Object(n.createElement)(y.PanelBody,{title:Object(o.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(n.createElement)(w.a,{columns:i,rows:s,alignButtons:l,setAttributes:t})),Object(n.createElement)(y.PanelBody,{title:Object(o.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},Object(n.createElement)(j.a,{settings:a,onChange:function(e){return t({contentVisibility:e})}})),Object(n.createElement)(y.PanelBody,{title:Object(o.__)("Filter by Product Attribute","woo-gutenberg-products-block"),initialOpen:!1},Object(n.createElement)(L,{selected:r,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=e.map((function(t){return{id:t.id,attr_slug:t.attr_slug}}));t({attributes:r})},operator:c,onOperatorChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return t({attrOperator:e})}})),Object(n.createElement)(y.PanelBody,{title:Object(o.__)("Order By","woo-gutenberg-products-block"),initialOpen:!1},Object(n.createElement)(M.a,{setAttributes:t,value:u})))}},{key:"renderEditMode",value:function(){var t=this.props,e=t.debouncedSpeak,r=t.setAttributes,c=this.props.attributes;return Object(n.createElement)(y.Placeholder,{icon:Object(n.createElement)(i.a,{icon:"custom-post-type"}),label:Object(o.__)("Products by Attribute","woo-gutenberg-products-block"),className:"wc-block-products-grid wc-block-products-by-attribute"},Object(o.__)("Display a grid of products from your selected attributes.","woo-gutenberg-products-block"),Object(n.createElement)("div",{className:"wc-block-products-by-attribute__selection"},Object(n.createElement)(L,{selected:c.attributes,onChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=t.map((function(t){return{id:t.id,attr_slug:t.attr_slug}}));r({attributes:e})},operator:c.attrOperator,onOperatorChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return r({attrOperator:t})}}),Object(n.createElement)(y.Button,{isDefault:!0,onClick:function(){r({editMode:!1}),e(Object(o.__)("Showing Products by Attribute block preview.","woo-gutenberg-products-block"))}},Object(o.__)("Done","woo-gutenberg-products-block"))))}},{key:"render",value:function(){var t=this.props,e=t.attributes,r=t.name,c=t.setAttributes,i=e.editMode;return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(v.BlockControls,null,Object(n.createElement)(y.Toolbar,{controls:[{icon:"edit",title:Object(o.__)("Edit"),onClick:function(){return c({editMode:!i})},isActive:i}]})),this.getInspectorControls(),i?this.renderEditMode():Object(n.createElement)(y.Disabled,null,Object(n.createElement)(v.ServerSideRender,{block:r,attributes:e})))}}]),e}(n.Component),I=Object(y.withSpokenMessages)(T),B=r(58);Object(a.registerBlockType)("woocommerce/products-by-attribute",{title:Object(o.__)("Products by Attribute","woo-gutenberg-products-block"),icon:{src:Object(n.createElement)(i.a,{icon:"custom-post-type"}),foreground:"#96588a"},category:"woocommerce",keywords:[Object(o.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(o.__)("Display a grid of products from your selected attributes.","woo-gutenberg-products-block"),supports:{align:["wide","full"],html:!1},attributes:{attributes:{type:"array",default:[]},attrOperator:{type:"string",default:"any"},columns:{type:"number",default:u.b},editMode:{type:"boolean",default:!0},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},orderby:{type:"string",default:"date"},rows:{type:"number",default:u.d},alignButtons:{type:"boolean",default:!1}},deprecated:[{attributes:{attributes:{type:"array",default:[]},attrOperator:{type:"string",default:"any"},columns:{type:"number",default:u.b},editMode:{type:"boolean",default:!0},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},orderby:{type:"string",default:"date"},rows:{type:"number",default:u.d}},save:Object(B.a)("woocommerce/products-by-attribute")}],edit:function(t){return Object(n.createElement)(I,t)},save:function(){return null}})},62:function(t,e){!function(){t.exports=this.wp.hooks}()},64:function(t,e){!function(){t.exports=this.wp.htmlEntities}()},65:function(t,e){!function(){t.exports=this.wp.date}()},68:function(t,e){!function(){t.exports=this.wp.dom}()},69:function(t,e,r){"use strict";var n=r(0),o=r(1),c=r(2);r(3);e.a=function(t){var e=t.value,r=t.setAttributes;return Object(n.createElement)(c.SelectControl,{label:Object(o.__)("Order products by","woo-gutenberg-products-block"),value:e,options:[{label:Object(o.__)("Newness - newest first","woo-gutenberg-products-block"),value:"date"},{label:Object(o.__)("Price - low to high","woo-gutenberg-products-block"),value:"price_asc"},{label:Object(o.__)("Price - high to low","woo-gutenberg-products-block"),value:"price_desc"},{label:Object(o.__)("Rating - highest first","woo-gutenberg-products-block"),value:"rating"},{label:Object(o.__)("Sales - most first","woo-gutenberg-products-block"),value:"popularity"},{label:Object(o.__)("Title - alphabetical","woo-gutenberg-products-block"),value:"title"},{label:Object(o.__)("Menu Order","woo-gutenberg-products-block"),value:"menu_order"}],onChange:function(t){return r({orderby:t})}})}},71:function(t,e){},74:function(t,e){},75:function(t,e){},76:function(t,e){},77:function(t,e){},9:function(t,e){!function(){t.exports=this.regeneratorRuntime}()}});