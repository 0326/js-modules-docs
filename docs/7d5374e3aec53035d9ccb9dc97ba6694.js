require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var s=e[n]=new t.Module(n);r[n][0].call(s.exports,i,s,s.exports)}return e[n].exports}function o(r){this.id=r,this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.isParcelRequire=!0,t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({17:[function(require,module,exports) {

},{}],27:[function(require,module,exports) {
module.exports=`<h1 id="dialog">dialog</h1>
<p>这是测试 md</p>
<pre><code class="lang-javascript">console.log(&#39;hello&#39;);
</code></pre>
`
},{}],21:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../packages/response-dom/README.md"),e=r(t);function r(t){return t&&t.__esModule?t:{default:t}}var o=window.jQuery,a={};Array.from(o("#J_Config").find("a")).map(function(t){a[t.dataset.name]=t.href});var n=[{title:"通用模板",anchor:"comp-tpl",content:e.default},{title:"抽奖弹窗",anchor:"lottery-dialog",src:a["lottery-dialog"],content:e.default},{title:"RPC抽奖",anchor:"rpc-lottery",src:a["rpc-lottery"],content:e.default},{title:"RPC发奖",anchor:"rpc-award",src:a["rpc-award"],content:e.default},{title:"领奖按钮",anchor:"lottery-button",src:a["lottery-button"],content:e.default},{title:"中奖记录",anchor:"lottery-record",src:a["lottery-record"],content:e.default}];exports.default=n;
},{"../packages/response-dom/README.md":27}],12:[function(require,module,exports) {
"use strict";require("./css/main.css"),require("./css/welcome.css"),require("./css/side-menu.css"),require("./css/simulator.css");var e=require("./doconfig"),r=n(e);function n(e){return e&&e.__esModule?e:{default:e}}var t=window.jQuery;function u(e){var n=a(r.default);n=-1===n?0:n;var t=r.default.map(function(e,r){return'<li class="'+(r===n?"pure-menu-item pure-menu-selected":"pure-menu-item")+'" data-src="'+e.src+'" data-index="'+r+'">\n    <a href="#'+e.anchor+'" class="pure-menu-link">'+e.title+"</a>\n  </li>"}).join("");e.find(".pure-menu-list")[0].innerHTML=t}function i(e,n){var u=r.default[e]||{};n.html(u.content),u.src?(t("#simulator").find("iframe")[0].src=u.src,t("#simulator").show()):t("#simulator").hide(),t("pre code").each(function(e,r){hljs.highlightBlock(r)})}function a(e){var r=location.hash.substr(1);if(r)for(var n=0;n<e.length;n++)if(e[n].anchor===r)return n;return-1}t("#J_fullscreen").on("click",function(e){var r=t(e.target).data("href");r?window.open(r):(t(e.currentTarget).addClass("animated-zoom-out"),setTimeout(function(){t(e.currentTarget).remove()},1e3))}),function(e,n){var s=t("#menu"),c=t("#main");u(s),s.on("click",".pure-menu-item",function(e){var r=t(e.currentTarget);s.find(".pure-menu-selected").removeClass("pure-menu-selected"),r.addClass("pure-menu-selected"),i(r.data("index"),c)});var o=a(r.default);-1!==o&&i(o,c)}(window,window.document);
},{"./css/main.css":17,"./css/welcome.css":17,"./css/side-menu.css":17,"./css/simulator.css":17,"./doconfig":21}]},{},[12])