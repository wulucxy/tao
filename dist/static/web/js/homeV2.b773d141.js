webpackJsonp([28],{0:function(t,i,e){e(21),e(243);var n=window.$||e(44),o=(e(45),e(46),e(236)),s=e(249),a=e(238);o(n("#bannerShow")),a.init(),s.init(),n(".sloganTag").on("click",function(t){t.preventDefault();var i=n(this).attr("id"),e=n("[rel="+i+"]"),o=e.offset().top;n("html,body").animate({scrollTop:o},600)})},236:function(t,i,e){function n(t,i){function e(t,i){this.target=t,this.ul=t.find("ul"),this.li=this.ul.find("li"),this.visible_item=i.visible_item,this.options=i,this.timer=null,this.init(this.options)}e.prototype={init:function(t){var i=this,e=(i.target,this.li.length);i.target.css({overflow:"hidden"}),this.ul.css({position:"relative",left:0,width:100*e+"%"}),this.li.css({float:"left",width:100/e+"%"}),o.each(this.li,function(t,i){var e=o(i);e.find("a").css({backgroundImage:"url("+e.data("pic")+")"})}),t.nav&&e>1&&this.nav()},nav:function(){var t=this,i=(t.target,t.options,"dot"),e='<div class="dots">';o.each(this.li,function(n){e+='<a href="#" class="'+(n==t.visible_item?i+" active":i)+'">'+ ++n+"</a>"}),e+="</ol>",this.target.append(e);var n=this.target.find(".dots").width();this.target.find(".dots").css({left:"50%",marginLeft:-(n/2)}),this.dots=this.target.find(".dots"),this.dot=this.target.find("."+i),this.bindEvt()},bindEvt:function(){var t=this,i=t.target,e=t.options;this.dots.on("click",".dot",function(i){i.preventDefault();var e=o(this);return!e.hasClass("active")&&void(e.hasClass("dot")&&t.to(o(".dots  .dot").index(this)))}),e.keys&&o(document).keydown(function(i){var e=i.which;clearInterval(t.timer),37==e?t.to(t.visible_item-1):39==e?t.to(t.visible_item+1):27==e&&clearInterval(t.timer)}),e.delay&&(t.timer=setInterval(function(){t.to()},e.delay),e.pause&&i.mouseenter(function(){clearInterval(t.timer)}).mouseleave(function(){clearInterval(t.timer),t.timer=setInterval(function(){t.to()},e.delay)}))},to:function(t,i){var e=this,n=e.target,o=e.options;"undefined"==typeof t&&(t=e.visible_item+1,t=t>=this.li.length?0:t),t==-1&&(t=e.li.length-1),t==e.li.length&&(t=0),n.find(".dot").eq(t).addClass("active").siblings().removeClass("active"),e.ul.animate({left:"-"+t+"00%"},o.speed,function(){e.visible_item=t})}};var n=s({speed:500,delay:5e3,pause:!0,keys:!0,nav:!0,visible_item:0},i);return t.each(function(t){var i=o(this);return new e(i,n)})}var o=window.$||e(44),s=e(49);t.exports=n},238:function(t,i,e){var n=window.$||e(44);e(49);e(239);var o=e(53),s=e(107),a=e(242),r={init:function(){var t=this;return!!(o.isIE()&&o.isIE()<8)&&void t.bindEvt()},bindEvt:function(){if(!s.get("browser_nav")){var t=n("body");t.animate({"padding-top":50},300),t.append(a());var i=n("#browser_nav");i.slideDown(300),n("#nav_close").click(function(){s.set("browser_nav","close",{expires:3}),i.slideUp(300),t.animate({"padding-top":0},300)})}}};t.exports=r},239:function(t,i){},242:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj)__p+='<div class="browser_nav" id="browser_nav">\n\t<div class="browser_nav_room rel">\n\t\t<span class="txt">检测到您的浏览器版本过低，建议您使用如下浏览器</span>\n\t\t<a href="https://www.google.com/intl/zh-CN/chrome/browser/"target="_blank"class="b_chrome blue">Google Chrome</a>\n\t\t<a href="https://www.mozilla.org/zh-CN/firefox/new/?utm_source=firefox-com&utm_medium=referral"target="_blank"class="b_firefox blue">Firefox</a>\n\t\t<a href="http://chrome.360.cn/"target="_blank"class="b_360 blue">360极速</a>\n\t\t达到页面最佳效果！\n\t\t<a href="javascript:;" class="nav_close" id="nav_close">关闭</a>\n\t</div>\n</div>';return __p}},243:function(t,i){},249:function(t,i,e){var n=window.$||e(44),o=(e(49),{init:function(t){this.target=n(".collegeWrap");var i=n.extend({speed:500,delay:4e3,pause:!0,slideNum:6},t);this.iNow=0,this.options=i,this.ul=n(".collegeList"),this.li=this.ul.find("li"),this.len=this.li.length,this.timer=null,this.nextok=!0,this.prevok=!1,this.bindEvt()},bindEvt:function(){this.setWidth(),this.auto()},setWidth:function(){var t=this;t.oW=this.li.outerWidth(!0),t.cW=t.target.width(),this.oneMarginRight=parseInt(this.li.eq(0).css("marginRight")),this.rowNum=Math.round((t.cW+this.oneMarginRight)/this.oW),this.ul.css({width:this.len*t.oW}),this.ul.fadeIn()},toggleControl:function(){var t=this,i=(t.target,t.options);t.iNow>=t.len-t.rowNum?(t.iNow=t.len-t.rowNum,t.nextok=!1,clearInterval(t.timer),i.delay&&(t.timer=setTimeout(function(){t.prev()},i.delay))):t.nextok=!0,t.iNow<=0?(t.iNow=0,t.prevok=!1,clearInterval(t.timer),i.delay&&(t.timer=setTimeout(function(){t.next()},i.delay))):t.prevok=!0},auto:function(){var t=this,i=t.target,e=t.options;e.delay&&(t.timer=setInterval(function(){t.next()},e.delay),e.pause&&i.mouseenter(function(){clearInterval(t.timer)}).mouseleave(function(){clearInterval(t.timer),t.timer=setInterval(function(){t.next()},e.delay)}))},next:function(){this.to(1)},prev:function(){this.to(-1)},to:function(t){var i=this,e=(i.target,i.options);this.oW*this.li.length<=i.cW+this.oneMarginRight||(i.toggleControl(),1==t&&i.nextok?i.ul.stop(!1,!0).animate({marginLeft:"-="+e.slideNum*i.oW},function(){i.iNow+=e.slideNum,i.toggleControl()}):t==-1&&i.prevok&&i.ul.stop(!1,!0).animate({marginLeft:0},function(){i.iNow=0,i.toggleControl()}))}});t.exports=o}});