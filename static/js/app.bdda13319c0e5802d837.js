webpackJsonp([0],{"+rUw":function(t,n){},"/Hsx":function(t,n){},"06vG":function(t,n,e){t.exports=e.p+"static/img/recruitment.0342468.jpg"},"6o7y":function(t,n){},"7J7C":function(t,n){},CL0g:function(t,n){},FdQI:function(t,n,e){t.exports=e.p+"static/img/contact.1945caa.jpg"},IpLN:function(t,n,e){t.exports=e.p+"static/img/about.1c42c14.jpg"},Kjri:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("7+uW"),s={data:function(){return{page:"index",menu:["首页","关于我们","产品展示","人才招聘","联系我们"],router:["index","about","products","recruitment","contact"]}},methods:{handoff:function(t){this.page=t,this.$router.push(t)},addFavorite:function(){var t="http://www.jhjskj.com.cn";try{window.external.addFavorite(t,"俊晧金属官网")}catch(n){try{window.slidebar.addPanel("俊晧金属官网",t,"")}catch(t){alert("加入收藏失败，\n请使用Ctrl+D进行添加！")}}}}},i={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"wrap"},[e("div",{staticClass:"wrap-content"},[e("div",{staticClass:"logo"}),t._v(" "),t._m(0),t._v(" "),e("ul",{staticClass:"nav"},[t._m(1),t._v(" "),t._m(2),t._v(" "),e("li",{staticClass:"nav-item"},[e("a",{attrs:{href:"javascript:;"},on:{click:t.addFavorite}},[t._v("加入收藏")])])])]),t._v(" "),e("ul",{staticClass:"menu"},t._l(t.menu,function(n,a){return e("li",{key:n,staticClass:"menu-item",class:t.page==t.router[a]?"active":"",on:{click:function(n){t.handoff(t.router[a])}}},[e("span",{staticClass:"icon",class:"icon-"+t.router[a]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(n))])])}))])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"company"},[n("span",{staticClass:"cn"},[this._v("丹阳市俊晧金属科技有限公司")]),this._v(" "),n("span",{staticClass:"en"},[this._v("Danyang JunHao Metal Co., Ltd")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("li",{staticClass:"nav-item"},[n("a",{attrs:{href:"https://shop1746259766i52.1688.com",target:"blank"}},[this._v("阿里店铺")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("li",{staticClass:"nav-item"},[n("a",{attrs:{href:"https://shop428775974.taobao.com/",target:"blank"}},[this._v("淘宝店铺")])])}]};var r={name:"App",components:{Header:e("VU/8")(s,i,!1,function(t){e("ate6")},"data-v-7a495fed",null).exports}},c={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),this._v(" "),n("router-view")],1)},staticRenderFns:[]};var o=e("VU/8")(r,c,!1,function(t){e("Kjri")},null,null).exports,u=e("/ocq"),l={data:function(){return{pics:[e("O6Wv"),e("Q3Yn"),e("my7m")],index:0}},methods:{slide:function(t){this.index=t}},mounted:function(){var t=this;this.$nextTick(function(){setInterval(function(){t.index=(t.index+1)%t.pics.length},5e3)})}},p={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"wrap"},[e("ul",{staticClass:"box",style:{width:t.pics.length+"00%",left:"-"+t.index+"00%"}},t._l(t.pics,function(t){return e("li",{key:t,staticClass:"box-item"},[e("img",{attrs:{src:t,alt:""}})])})),t._v(" "),e("div",{staticClass:"controller"},t._l(t.pics.length,function(n){return e("span",{key:n,staticClass:"num",class:t.index+1==n?"active":"",on:{click:function(e){t.slide(n-1)}}},[t._v(t._s(n))])}))])},staticRenderFns:[]};var d={components:{slideBox:e("VU/8")(l,p,!1,function(t){e("YXOc")},"data-v-74ba1840",null).exports}},f={render:function(){var t=this.$createElement;return(this._self._c||t)("slideBox")},staticRenderFns:[]};var v=e("VU/8")(d,f,!1,function(t){e("CL0g")},"data-v-0945b9de",null).exports,m={created:function(){this.img=e("wpp3")("./"+this.$route.name+".jpg")}},h={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"banner"},[n("img",{staticClass:"img",attrs:{src:this.img,alt:""}})])},staticRenderFns:[]};var _=e("VU/8")(m,h,!1,function(t){e("llnj")},"data-v-252f348e",null).exports,x={components:{Banner:_}},g={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("Banner")],1)},staticRenderFns:[]};var C=e("VU/8")(x,g,!1,function(t){e("6o7y")},"data-v-c70aee0e",null).exports,w={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("products")])},staticRenderFns:[]};var b=e("VU/8")({},w,!1,function(t){e("+rUw")},"data-v-6deb4828",null).exports,j={components:{Banner:_}},$={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("Banner")],1)},staticRenderFns:[]};var y=e("VU/8")(j,$,!1,function(t){e("7J7C")},"data-v-7b413a50",null).exports,F={components:{Banner:_}},k={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("banner")],1)},staticRenderFns:[]};var E=e("VU/8")(F,k,!1,function(t){e("/Hsx")},"data-v-6c429016",null).exports;a.a.use(u.a);var U=new u.a({routes:[{path:"/index",name:"index",component:v},{path:"/about",name:"about",component:C},{path:"/products",name:"products",component:b},{path:"/recruitment",name:"recruitment",component:y},{path:"/contact",name:"contact",component:E}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:U,components:{App:o},template:"<App/>"}).$router.push("index")},O6Wv:function(t,n,e){t.exports=e.p+"static/img/slide1.11a52f2.jpg"},Q3Yn:function(t,n,e){t.exports=e.p+"static/img/slide2.268969b.jpg"},YXOc:function(t,n){},ate6:function(t,n){},llnj:function(t,n){},my7m:function(t,n,e){t.exports=e.p+"static/img/slide3.2a84678.jpg"},wpp3:function(t,n,e){var a={"./about.jpg":"IpLN","./contact.jpg":"FdQI","./recruitment.jpg":"06vG"};function s(t){return e(i(t))}function i(t){var n=a[t];if(!(n+1))throw new Error("Cannot find module '"+t+"'.");return n}s.keys=function(){return Object.keys(a)},s.resolve=i,t.exports=s,s.id="wpp3"}},["NHnr"]);
//# sourceMappingURL=app.bdda13319c0e5802d837.js.map