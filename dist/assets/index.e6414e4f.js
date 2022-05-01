var P=Object.defineProperty;var A=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var I=(s,o,t)=>o in s?P(s,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[o]=t,x=(s,o)=>{for(var t in o||(o={}))j.call(o,t)&&I(s,t,o[t]);if(A)for(var t of A(o))S.call(o,t)&&I(s,t,o[t]);return s};import{E,P as p,b as f,v as K}from"./index.ae4fb4c2.js";var O=globalThis&&globalThis.__extends||function(){var s=function(o,t){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])},s(o,t)};return function(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");s(o,t);function e(){this.constructor=o}o.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}}(),M=function(s){O(o,s);function o(){return s!==null&&s.apply(this,arguments)||this}return o}(E);class H extends E{constructor(o,t){var e;if(super(),e=this,this._handleMessage=r=>{if(this._injectedProvider&&r.source===window||r.origin===this._providerUrl.origin&&r.source===this._popup){if(r.data.method==="connected"){const n=new p(r.data.params.publicKey);(!this._publicKey||!this._publicKey.equals(n))&&(this._publicKey&&!this._publicKey.equals(n)&&this._handleDisconnect(),this._publicKey=n,this._autoApprove=!!r.data.params.autoApprove,this.emit("connect",this._publicKey))}else if(r.data.method==="disconnected")this._handleDisconnect();else if((r.data.result||r.data.error)&&this._responsePromises.has(r.data.id)){const[n,a]=this._responsePromises.get(r.data.id);r.data.result?n(r.data.result):a(new Error(r.data.error))}}},this._handleConnect=()=>(this._handlerAdded||(this._handlerAdded=!0,window.addEventListener("message",this._handleMessage),window.addEventListener("beforeunload",this.disconnect)),this._injectedProvider?new Promise(r=>{this._sendRequest("connect",{}),r()}):(window.name="parent",this._popup=window.open(this._providerUrl.toString(),"_blank","location,resizable,width=460,height=675"),new Promise(r=>{this.once("connect",r)}))),this._handleDisconnect=()=>{this._handlerAdded&&(this._handlerAdded=!1,window.removeEventListener("message",this._handleMessage),window.removeEventListener("beforeunload",this.disconnect)),this._publicKey&&(this._publicKey=null,this.emit("disconnect")),this._responsePromises.forEach(([r,n],a)=>{this._responsePromises.delete(a),n("Wallet disconnected")})},this._sendRequest=async function(r,n){if(r!=="connect"&&!e.connected)throw new Error("Wallet not connected");const a=e._nextRequestId;return++e._nextRequestId,new Promise((c,u)=>{e._responsePromises.set(a,[c,u]),e._injectedProvider?e._injectedProvider.postMessage({jsonrpc:"2.0",id:a,method:r,params:x({network:e._network},n)}):(e._popup.postMessage({jsonrpc:"2.0",id:a,method:r,params:n},e._providerUrl.origin),e.autoApprove||e._popup.focus())})},this.connect=()=>(this._popup&&this._popup.close(),this._handleConnect()),this.disconnect=async function(){e._injectedProvider&&await e._sendRequest("disconnect",{}),e._popup&&e._popup.close(),e._handleDisconnect()},this.sign=async function(r,n){if(!(r instanceof Uint8Array))throw new Error("Data must be an instance of Uint8Array");const a=await e._sendRequest("sign",{data:r,display:n}),c=f.decode(a.signature),u=new p(a.publicKey);return{signature:c,publicKey:u}},this.signTransaction=async function(r){const n=await e._sendRequest("signTransaction",{message:f.encode(r.serializeMessage())}),a=f.decode(n.signature),c=new p(n.publicKey);return r.addSignature(c,a),r},this.signAllTransactions=async function(r){const n=await e._sendRequest("signAllTransactions",{messages:r.map(u=>f.encode(u.serializeMessage()))}),a=n.signatures.map(u=>f.decode(u)),c=new p(n.publicKey);return r=r.map((u,i)=>(u.addSignature(c,a[i]),u)),r},k(o))this._injectedProvider=o;else if(W(o))this._providerUrl=new URL(o),this._providerUrl.hash=new URLSearchParams({origin:window.location.origin,network:t}).toString();else throw new Error("provider parameter must be an injected provider or a URL string.");this._network=t,this._publicKey=null,this._autoApprove=!1,this._popup=null,this._handlerAdded=!1,this._nextRequestId=1,this._responsePromises=new Map}get publicKey(){return this._publicKey}get connected(){return this._publicKey!==null}get autoApprove(){return this._autoApprove}}function W(s){return typeof s=="string"}function k(s){return R(s)&&C(s.postMessage)}function R(s){return typeof s=="object"&&s!==null}function C(s){return typeof s=="function"}var U=globalThis&&globalThis.__extends||function(){var s=function(o,t){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])},s(o,t)};return function(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");s(o,t);function e(){this.constructor=o}o.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}}(),v=globalThis&&globalThis.__awaiter||function(s,o,t,e){function r(n){return n instanceof t?n:new t(function(a){a(n)})}return new(t||(t=Promise))(function(n,a){function c(l){try{i(e.next(l))}catch(d){a(d)}}function u(l){try{i(e.throw(l))}catch(d){a(d)}}function i(l){l.done?n(l.value):r(l.value).then(c,u)}i((e=e.apply(s,o||[])).next())})},w=globalThis&&globalThis.__generator||function(s,o){var t={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},e,r,n,a;return a={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function c(i){return function(l){return u([i,l])}}function u(i){if(e)throw new TypeError("Generator is already executing.");for(;t;)try{if(e=1,r&&(n=i[0]&2?r.return:i[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,i[1])).done)return n;switch(r=0,n&&(i=[i[0]&2,n.value]),i[0]){case 0:case 1:n=i;break;case 4:return t.label++,{value:i[1],done:!1};case 5:t.label++,r=i[1],i=[0];continue;case 7:i=t.ops.pop(),t.trys.pop();continue;default:if(n=t.trys,!(n=n.length>0&&n[n.length-1])&&(i[0]===6||i[0]===2)){t=0;continue}if(i[0]===3&&(!n||i[1]>n[0]&&i[1]<n[3])){t.label=i[1];break}if(i[0]===6&&t.label<n[1]){t.label=n[1],n=i;break}if(n&&t.label<n[2]){t.label=n[2],t.ops.push(i);break}n[2]&&t.ops.pop(),t.trys.pop();continue}i=o.call(s,t)}catch(l){i=[6,l],r=0}finally{e=n=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},L=function(s){U(o,s);function o(t,e,r){var n=s.call(this)||this;return n._instance=null,n.handleMessage=function(a){},n._handleConnect=function(){n.emit("connect")},n._handleDisconnect=function(){window.clearInterval(n._pollTimer),n.emit("disconnect")},n._network=e,n._provider=r,n}return Object.defineProperty(o.prototype,"publicKey",{get:function(){return this._instance.publicKey||null},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"connected",{get:function(){return this._instance.connected||!1},enumerable:!1,configurable:!0}),o.prototype.connect=function(){return v(this,void 0,void 0,function(){var t=this;return w(this,function(e){switch(e.label){case 0:return this._instance=new H(this._provider,this._network),this._instance.on("connect",this._handleConnect),this._instance.on("disconnect",this._handleDisconnect),this._pollTimer=window.setInterval(function(){var r,n;((n=(r=t._instance)===null||r===void 0?void 0:r._popup)===null||n===void 0?void 0:n.closed)!==!1&&t._handleDisconnect()},200),[4,this._instance.connect()];case 1:return e.sent(),[2]}})})},o.prototype.disconnect=function(){return v(this,void 0,void 0,function(){return w(this,function(t){switch(t.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return this._instance.removeAllListeners("connect"),this._instance.removeAllListeners("disconnect"),[4,this._instance.disconnect()];case 1:return t.sent(),[2]}})})},o.prototype.signTransaction=function(t){return v(this,void 0,void 0,function(){return w(this,function(e){switch(e.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._instance.signTransaction(t)];case 1:return[2,e.sent()]}})})},o.prototype.signAllTransactions=function(t){return v(this,void 0,void 0,function(){return w(this,function(e){switch(e.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._instance.signAllTransactions(t)];case 1:return[2,e.sent()]}})})},o.prototype.signMessage=function(t,e){return e===void 0&&(e="hex"),v(this,void 0,void 0,function(){var r;return w(this,function(n){switch(n.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._instance.sign(t,e)];case 1:return r=n.sent().signature,[2,Uint8Array.from(r)]}})})},o}(M),D=globalThis&&globalThis.__extends||function(){var s=function(o,t){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])},s(o,t)};return function(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");s(o,t);function e(){this.constructor=o}o.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}}(),T=globalThis&&globalThis.__assign||function(){return T=Object.assign||function(s){for(var o,t=1,e=arguments.length;t<e;t++){o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(s[r]=o[r])}return s},T.apply(this,arguments)},g=globalThis&&globalThis.__awaiter||function(s,o,t,e){function r(n){return n instanceof t?n:new t(function(a){a(n)})}return new(t||(t=Promise))(function(n,a){function c(l){try{i(e.next(l))}catch(d){a(d)}}function u(l){try{i(e.throw(l))}catch(d){a(d)}}function i(l){l.done?n(l.value):r(l.value).then(c,u)}i((e=e.apply(s,o||[])).next())})},y=globalThis&&globalThis.__generator||function(s,o){var t={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},e,r,n,a;return a={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function c(i){return function(l){return u([i,l])}}function u(i){if(e)throw new TypeError("Generator is already executing.");for(;t;)try{if(e=1,r&&(n=i[0]&2?r.return:i[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,i[1])).done)return n;switch(r=0,n&&(i=[i[0]&2,n.value]),i[0]){case 0:case 1:n=i;break;case 4:return t.label++,{value:i[1],done:!1};case 5:t.label++,r=i[1],i=[0];continue;case 7:i=t.ops.pop(),t.trys.pop();continue;default:if(n=t.trys,!(n=n.length>0&&n[n.length-1])&&(i[0]===6||i[0]===2)){t=0;continue}if(i[0]===3&&(!n||i[1]>n[0]&&i[1]<n[3])){t.label=i[1];break}if(i[0]===6&&t.label<n[1]){t.label=n[1],n=i;break}if(n&&t.label<n[2]){t.label=n[2],t.ops.push(i);break}n[2]&&t.ops.pop(),t.trys.pop();continue}i=o.call(s,t)}catch(l){i=[6,l],r=0}finally{e=n=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},q=function(s){D(o,s);function o(t,e){var r,n=s.call(this)||this;return n._publicKey=null,n._messageHandlers={},n.handleMessage=function(a){if(n._messageHandlers[a.id]){var c=n._messageHandlers[a.id],u=c.resolve,i=c.reject;delete n._messageHandlers[a.id],a.error?i(a.error):u(a.result)}},n._sendMessage=function(a){if(!n.connected)throw new Error("Wallet not connected");return new Promise(function(c,u){var i,l,d=K();n._messageHandlers[d]={resolve:c,reject:u},(l=(i=n._iframe)===null||i===void 0?void 0:i.contentWindow)===null||l===void 0||l.postMessage({channel:"solflareWalletAdapterToIframe",data:T({id:d},a)},"*")})},n._iframe=t,n._publicKey=new p((r=e==null?void 0:e.toString)===null||r===void 0?void 0:r.call(e)),n}return Object.defineProperty(o.prototype,"publicKey",{get:function(){return this._publicKey||null},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"connected",{get:function(){return!0},enumerable:!1,configurable:!0}),o.prototype.connect=function(){return g(this,void 0,void 0,function(){return y(this,function(t){return[2]})})},o.prototype.disconnect=function(){return g(this,void 0,void 0,function(){return y(this,function(t){switch(t.label){case 0:return[4,this._sendMessage({method:"disconnect"})];case 1:return t.sent(),[2]}})})},o.prototype.signTransaction=function(t){return g(this,void 0,void 0,function(){var e,r,n,a;return y(this,function(c){switch(c.label){case 0:if(!this.connected)throw new Error("Wallet not connected");c.label=1;case 1:return c.trys.push([1,3,,4]),[4,this._sendMessage({method:"signTransaction",params:{message:f.encode(t.serializeMessage())}})];case 2:return e=c.sent(),r=e.publicKey,n=e.signature,t.addSignature(new p(r),f.decode(n)),[2,t];case 3:throw a=c.sent(),console.log(a),new Error("Failed to sign transaction");case 4:return[2]}})})},o.prototype.signAllTransactions=function(t){return g(this,void 0,void 0,function(){var e,r,n,a;return y(this,function(c){switch(c.label){case 0:if(!this.connected)throw new Error("Wallet not connected");c.label=1;case 1:return c.trys.push([1,3,,4]),[4,this._sendMessage({method:"signAllTransactions",params:{messages:t.map(function(u){return f.encode(u.serializeMessage())})}})];case 2:return e=c.sent(),r=e.publicKey,n=e.signatures,[2,t.map(function(u,i){return u.addSignature(new p(r),f.decode(n[i])),u})];case 3:throw a=c.sent(),console.log(a),new Error("Failed to sign transactions");case 4:return[2]}})})},o.prototype.signMessage=function(t,e){return e===void 0&&(e="hex"),g(this,void 0,void 0,function(){var r,n;return y(this,function(a){switch(a.label){case 0:if(!this.connected)throw new Error("Wallet not connected");a.label=1;case 1:return a.trys.push([1,3,,4]),[4,this._sendMessage({method:"signMessage",params:{data:t,display:e}})];case 2:return r=a.sent(),[2,Uint8Array.from(f.decode(r))];case 3:throw n=a.sent(),console.log(n),new Error("Failed to sign message");case 4:return[2]}})})},o}(M),F=globalThis&&globalThis.__extends||function(){var s=function(o,t){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])},s(o,t)};return function(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");s(o,t);function e(){this.constructor=o}o.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}}(),h=globalThis&&globalThis.__awaiter||function(s,o,t,e){function r(n){return n instanceof t?n:new t(function(a){a(n)})}return new(t||(t=Promise))(function(n,a){function c(l){try{i(e.next(l))}catch(d){a(d)}}function u(l){try{i(e.throw(l))}catch(d){a(d)}}function i(l){l.done?n(l.value):r(l.value).then(c,u)}i((e=e.apply(s,o||[])).next())})},_=globalThis&&globalThis.__generator||function(s,o){var t={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},e,r,n,a;return a={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function c(i){return function(l){return u([i,l])}}function u(i){if(e)throw new TypeError("Generator is already executing.");for(;t;)try{if(e=1,r&&(n=i[0]&2?r.return:i[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,i[1])).done)return n;switch(r=0,n&&(i=[i[0]&2,n.value]),i[0]){case 0:case 1:n=i;break;case 4:return t.label++,{value:i[1],done:!1};case 5:t.label++,r=i[1],i=[0];continue;case 7:i=t.ops.pop(),t.trys.pop();continue;default:if(n=t.trys,!(n=n.length>0&&n[n.length-1])&&(i[0]===6||i[0]===2)){t=0;continue}if(i[0]===3&&(!n||i[1]>n[0]&&i[1]<n[3])){t.label=i[1];break}if(i[0]===6&&t.label<n[1]){t.label=n[1],n=i;break}if(n&&t.label<n[2]){t.label=n[2],t.ops.push(i);break}n[2]&&t.ops.pop(),t.trys.pop();continue}i=o.call(s,t)}catch(l){i=[6,l],r=0}finally{e=n=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},$=globalThis&&globalThis.__values||function(s){var o=typeof Symbol=="function"&&Symbol.iterator,t=o&&s[o],e=0;if(t)return t.call(s);if(s&&typeof s.length=="number")return{next:function(){return s&&e>=s.length&&(s=void 0),{value:s&&s[e++],done:!s}}};throw new TypeError(o?"Object is not iterable.":"Symbol.iterator is not defined.")},N=function(s){F(o,s);function o(t){var e=s.call(this)||this;return e._network="mainnet-beta",e._adapterInstance=null,e._element=null,e._iframe=null,e._connectHandler=null,e._flutterHandlerInterval=null,e._handleEvent=function(r){var n,a,c;switch(r.type){case"connect_native_web":{e._collapseIframe(),e._adapterInstance=new L(e._iframe,e._network,((n=r.data)===null||n===void 0?void 0:n.provider)||"https://solflare.com/provider"),e._adapterInstance.on("connect",e._webConnected),e._adapterInstance.on("disconnect",e._webDisconnected),e._adapterInstance.connect(),e._setPreferredAdapter("native_web");return}case"connect":{e._collapseIframe(),e._adapterInstance=new q(e._iframe,((a=r.data)===null||a===void 0?void 0:a.publicKey)||""),e._adapterInstance.connect(),e._setPreferredAdapter((c=r.data)===null||c===void 0?void 0:c.adapter),e._connectHandler&&(e._connectHandler.resolve(),e._connectHandler=null),e.emit("connect",e.publicKey);return}case"disconnect":{e._connectHandler&&(e._connectHandler.reject(),e._connectHandler=null),e._disconnected(),e.emit("disconnect");return}case"collapse":{e._collapseIframe();return}default:return}},e._handleMessage=function(r){var n;if(((n=r.data)===null||n===void 0?void 0:n.channel)==="solflareIframeToWalletAdapter"){var a=r.data.data||{};a.type==="event"?e._handleEvent(a.event):e._adapterInstance&&e._adapterInstance.handleMessage(a)}},e._removeElement=function(){e._flutterHandlerInterval!==null&&(clearInterval(e._flutterHandlerInterval),e._flutterHandlerInterval=null),e._element&&(e._element.remove(),e._element=null)},e._removeDanglingElements=function(){var r,n,a=document.getElementsByClassName("solflare-wallet-adapter-iframe");try{for(var c=$(a),u=c.next();!u.done;u=c.next()){var i=u.value;i.parentElement&&i.remove()}}catch(l){r={error:l}}finally{try{u&&!u.done&&(n=c.return)&&n.call(c)}finally{if(r)throw r.error}}},e._injectElement=function(){e._removeElement(),e._removeDanglingElements();var r="".concat(o.IFRAME_URL,"?cluster=").concat(encodeURIComponent(e._network),"&origin=").concat(encodeURIComponent(window.location.origin)),n=e._getPreferredAdapter();n&&(r+="&adapter=".concat(encodeURIComponent(n))),e._element=document.createElement("div"),e._element.className="solflare-wallet-adapter-iframe",e._element.innerHTML=`
      <iframe src='`.concat(r,`' style='position: fixed; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; border: none; border-radius: 0; z-index: 99999; color-scheme: auto;' allowtransparency='true'></iframe>
    `),document.body.appendChild(e._element),e._iframe=e._element.querySelector("iframe"),window.fromFlutter=e._handleMobileMessage,e._flutterHandlerInterval=setInterval(function(){window.fromFlutter=e._handleMobileMessage},100),window.addEventListener("message",e._handleMessage,!1)},e._collapseIframe=function(){e._iframe&&(e._iframe.style.top="",e._iframe.style.right="",e._iframe.style.height="2px",e._iframe.style.width="2px")},e._getPreferredAdapter=function(){return localStorage&&localStorage.getItem("solflarePreferredWalletAdapter")||null},e._setPreferredAdapter=function(r){localStorage&&r&&localStorage.setItem("solflarePreferredWalletAdapter",r)},e._clearPreferredAdapter=function(){localStorage&&localStorage.removeItem("solflarePreferredWalletAdapter")},e._webConnected=function(){e._connectHandler&&(e._connectHandler.resolve(),e._connectHandler=null),e.emit("connect",e.publicKey)},e._webDisconnected=function(){e._connectHandler&&(e._connectHandler.reject(),e._connectHandler=null),e._disconnected(),e.emit("disconnect")},e._disconnected=function(){window.removeEventListener("message",e._handleMessage,!1),e._removeElement(),e._clearPreferredAdapter(),e._adapterInstance=null},e._handleMobileMessage=function(r){var n,a;(a=(n=e._iframe)===null||n===void 0?void 0:n.contentWindow)===null||a===void 0||a.postMessage({channel:"solflareMobileToIframe",data:r},"*")},t!=null&&t.network&&(e._network=t==null?void 0:t.network),e}return Object.defineProperty(o.prototype,"publicKey",{get:function(){var t;return((t=this._adapterInstance)===null||t===void 0?void 0:t.publicKey)||null},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"isConnected",{get:function(){var t;return!!(!((t=this._adapterInstance)===null||t===void 0)&&t.connected)},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"connected",{get:function(){return this.isConnected},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"autoApprove",{get:function(){return!1},enumerable:!1,configurable:!0}),o.prototype.connect=function(){return h(this,void 0,void 0,function(){var t=this;return _(this,function(e){switch(e.label){case 0:return this.connected?[2]:(this._injectElement(),[4,new Promise(function(r,n){t._connectHandler={resolve:r,reject:n}})]);case 1:return e.sent(),[2]}})})},o.prototype.disconnect=function(){return h(this,void 0,void 0,function(){return _(this,function(t){switch(t.label){case 0:return this._adapterInstance?[4,this._adapterInstance.disconnect()]:[2];case 1:return t.sent(),this._disconnected(),this.emit("disconnect"),[2]}})})},o.prototype.signTransaction=function(t){return h(this,void 0,void 0,function(){return _(this,function(e){switch(e.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._adapterInstance.signTransaction(t)];case 1:return[2,e.sent()]}})})},o.prototype.signAllTransactions=function(t){return h(this,void 0,void 0,function(){return _(this,function(e){switch(e.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._adapterInstance.signAllTransactions(t)];case 1:return[2,e.sent()]}})})},o.prototype.signMessage=function(t,e){return e===void 0&&(e="utf8"),h(this,void 0,void 0,function(){return _(this,function(r){switch(r.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._adapterInstance.signMessage(t,e)];case 1:return[2,r.sent()]}})})},o.prototype.sign=function(t,e){return e===void 0&&(e="utf8"),h(this,void 0,void 0,function(){return _(this,function(r){switch(r.label){case 0:return[4,this.signMessage(t,e)];case 1:return[2,r.sent()]}})})},o.prototype.detectWallet=function(t){return t===void 0&&(t=10),h(this,void 0,void 0,function(){return _(this,function(e){return[2,new Promise(function(r){var n=null;function a(l){u(),r(l)}var c=setTimeout(function(){a(!1)},t*1e3);function u(){window.removeEventListener("message",i,!1),n&&(document.body.removeChild(n),n=null),c&&(clearTimeout(c),c=null)}function i(l){var d,m,b;((d=l.data)===null||d===void 0?void 0:d.channel)==="solflareDetectorToAdapter"&&a(!!(!((b=(m=l.data)===null||m===void 0?void 0:m.data)===null||b===void 0)&&b.detected))}window.addEventListener("message",i,!1),n=document.createElement("div"),n.className="solflare-wallet-detect-iframe",n.innerHTML=`
        <iframe src='`.concat(o.DETECT_IFRAME_URL,"?timeout=").concat(t,`' style='position: fixed; top: -9999px; left: -9999px; width: 0; height: 0; pointer-events: none; border: none;'></iframe>
      `),document.body.appendChild(n)})]})})},o.IFRAME_URL="https://connect.solflare.com/",o.DETECT_IFRAME_URL="https://connect.solflare.com/detect",o}(E);export{N as default};
