webpackJsonp([41],{0:function(t,i,e){e(21),e(293);var n=window.$||e(44),s=(e(45),e(46),e(238));s(n("#bannerShow"))},238:function(t,i,e){function n(t,i){function e(t,i){this.target=t,this.ul=t.find("ul"),this.li=this.ul.find("li"),this.visible_item=i.visible_item,this.options=i,this.timer=null,this.init(this.options)}e.prototype={init:function(t){var i=this,e=(i.target,this.li.length);i.target.css({overflow:"hidden"}),this.ul.css({position:"relative",left:0,width:100*e+"%"}),this.li.css({float:"left",width:100/e+"%"}),s.each(this.li,function(t,i){var e=s(i);e.find("a").css({backgroundImage:"url("+e.data("pic")+")"})}),t.nav&&e>1&&this.nav()},nav:function(){var t=this,i=(t.target,t.options,"dot"),e='<div class="dots">';s.each(this.li,function(n){e+='<a href="#" class="'+(n==t.visible_item?i+" active":i)+'">'+ ++n+"</a>"}),e+="</ol>",this.target.append(e);var n=this.target.find(".dots").width();this.target.find(".dots").css({left:"50%",marginLeft:-(n/2)}),this.dots=this.target.find(".dots"),this.dot=this.target.find("."+i),this.bindEvt()},bindEvt:function(){var t=this,i=t.target,e=t.options;this.dots.on("click",".dot",function(i){i.preventDefault();var e=s(this);return!e.hasClass("active")&&void(e.hasClass("dot")&&t.to(s(".dots  .dot").index(this)))}),e.keys&&s(document).keydown(function(i){var e=i.which;clearInterval(t.timer),37==e?t.to(t.visible_item-1):39==e?t.to(t.visible_item+1):27==e&&clearInterval(t.timer)}),e.delay&&(t.timer=setInterval(function(){t.to()},e.delay),e.pause&&i.mouseenter(function(){clearInterval(t.timer)}).mouseleave(function(){clearInterval(t.timer),t.timer=setInterval(function(){t.to()},e.delay)}))},to:function(t,i){var e=this,n=e.target,s=e.options;"undefined"==typeof t&&(t=e.visible_item+1,t=t>=this.li.length?0:t),t==-1&&(t=e.li.length-1),t==e.li.length&&(t=0),n.find(".dot").eq(t).addClass("active").siblings().removeClass("active"),e.ul.animate({left:"-"+t+"00%"},s.speed,function(){e.visible_item=t})}};var n=a({speed:500,delay:5e3,pause:!0,keys:!0,nav:!0,visible_item:0},i);return t.each(function(t){var i=s(this);return new e(i,n)})}var s=window.$||e(44),a=e(49);t.exports=n},293:function(t,i){}});