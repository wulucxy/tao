webpackJsonp([7],{0:function(e,t,a){a(23),a(149);var i=window.$||a(46),n=(a(47),a(48),a(147)),s=a(148),o=a(151),r=a(155);i("[data-trigger]").on("click",function(e){e.preventDefault();var t=i(e.target).closest(".trigger"),a="detail"==t.data("trigger")?n:s;modalBox(t.get(0),{html:a(),klass:"w540 shadow",closeByOverlay:!1,completeCallback:function(){}})}),r.init({klass:"current",url:"/system/city",startCallback:function(){o(i(".prov"),{height:i(".selectWrap").height(),alwaysVisible:!0}),i(".prov").find("li").eq(0).trigger("click")},completeCallback:function(){o(i(".city"),{height:i(".selectWrap").height(),alwaysVisible:!0})}})},149:function(e,t){},151:function(e,t,a){function i(e,t){function a(e,t){this.target=e,this.options=t,this.init(t)}a.prototype={generateHTML:function(){var e=this,t=e.target,a=e.options;e.wrapper=n("<div>").addClass(a.wrapperClass).css({width:a.width,height:a.height}),t.css({overflow:"hidden",width:a.width,height:a.height}),e.rail=n("<div>").addClass(a.railClass).css({display:a.alwaysVisible&&a.railVisible?"block":"none"}),e.bar=n("<div>").addClass(a.barClass).css({display:a.alwaysVisible?"block":"none"});var i="right"==a.position?{right:a.distance}:{left:a.distance};e.rail.css(i),e.bar.css(i),t.wrap(e.wrapper),t.parent().append(e.bar),t.parent().append(e.rail)},getBarHeight:function(){var e=this,t=e.target,a=e.options,i=Math.max(t.outerHeight()/t[0].scrollHeight*t.outerHeight(),a.minBarHeight);e.bar.css({height:i+"px"});var n=i==t.outerHeight()?"none":"block",s=a.alwaysVisible&&a.railVisible?"block":n;e.rail.css({display:s}),e.bar.css({display:n})},checkPos:function(){var e=this,t=e.target,a=e.options;"bottom"===a.start?(e.bar.css({top:t.outerHeight()-e.bar.outerHeight()}),e.scrollContent(0,!0)):"top"!==a.start&&(e.scrollContent(n(a.start).position().top,!1,!0),a.alwaysVisible||e.bar.hide())},drag:function(){var e=this,t=(e.target,e.options);e.isDragg=!0,t.railDraggable&&e.bar.on("mousedown",function(t){var a=n(document),i=t.pageY-n(this).offset().top;return a.on("mousemove",function(t){e.bar.offset({top:t.pageY-i}),e.scrollContent(0,e.bar.position().top,!1)}),a.on("mouseup",function(t){e.isDragg=!1,a.off("mousemove"),a.off("mouseup")}),!1})},attachWheel:function(){var e=this,t=e.target;e.options;t.on("mousewheel",function(t,a){if(a>0){if(e.wrapper.data("anim"))return!1;e.wrapper.data("anim",!0),e.scrollContent(-1,!0)}else{if(e.wrapper.data("anim"))return!1;e.wrapper.data("anim",!0),e.scrollContent(1,!0)}return!1})},scrollContent:function(e,t,a){var i,n=this,s=n.target,o=n.options,r=e,l=s.parent().outerHeight()-n.bar.outerHeight();if(t&&(r=parseInt(n.bar.css("top"))+e*parseInt(o.wheelStep)/100*n.bar.outerHeight(),r=Math.min(Math.max(r,0),l),r=e>0?Math.ceil(r):Math.floor(r),n.bar.css({top:r+"px"}),n.wrapper.data("anim",!1)),i=parseInt(n.bar.css("top"))/s.outerHeight(),r=i*s[0].scrollHeight,a){r=e;var c=r/s[0].scrollHeight*s.outerHeight();n.bar.css({top:Math.min(Math.max(c,0),l)+"px"})}s.scrollTop(r)},init:function(e){var t=this,a=t.target;if(e.height="auto"==e.height?a.parent().innerHeight():e.height,a.parent().hasClass(e.wrapperClass)){var i=a.scrollTop();return t.bar=a.parent().find("."+e.barClass),t.rail=a.parent().find("."+e.railClass),t.getBarHeight(),void t.scrollContent(i,!1,!0)}t.generateHTML(),t.getBarHeight(),t.checkPos(),t.attachWheel(),t.drag()}};var i=s({width:"auto",height:"250px",position:"right",start:"top",distance:"1px",alwaysVisible:!1,disableFadeOut:!0,railVisible:!0,railDraggable:!0,railClass:"scrollBeautifyRail",barClass:"scrollBeautifyBar",wrapperClass:"scrollBeautifyDiv",wheelStep:20,minBarHeight:30},t),o=n(e).data("scroll");return n(e).each(function(e){var t=n(this);t.data("scroll",new a(t,i))}),o}a(152);var n=window.$||a(46),s=a(51);a(154),e.exports=i},152:function(e,t){},154:function(e,t,a){function i(e){var t=e||window.event,a=d.call(arguments,1),i=0,c=0,h=0,u=0,f=0,m=0;if(e=l.event.fix(t),e.type="mousewheel","detail"in t&&(h=t.detail*-1),"wheelDelta"in t&&(h=t.wheelDelta),"wheelDeltaY"in t&&(h=t.wheelDeltaY),"wheelDeltaX"in t&&(c=t.wheelDeltaX*-1),"axis"in t&&t.axis===t.HORIZONTAL_AXIS&&(c=h*-1,h=0),i=0===h?c:h,"deltaY"in t&&(h=t.deltaY*-1,i=h),"deltaX"in t&&(c=t.deltaX,0===h&&(i=c*-1)),0!==h||0!==c){if(1===t.deltaMode){var g=l.data(this,"mousewheel-line-height");i*=g,h*=g,c*=g}else if(2===t.deltaMode){var v=l.data(this,"mousewheel-page-height");i*=v,h*=v,c*=v}if(u=Math.max(Math.abs(h),Math.abs(c)),(!r||u<r)&&(r=u,s(t,u)&&(r/=40)),s(t,u)&&(i/=40,c/=40,h/=40),i=Math[i>=1?"floor":"ceil"](i/r),c=Math[c>=1?"floor":"ceil"](c/r),h=Math[h>=1?"floor":"ceil"](h/r),p.settings.normalizeOffset&&this.getBoundingClientRect){var w=this.getBoundingClientRect();f=e.clientX-w.left,m=e.clientY-w.top}return e.deltaX=c,e.deltaY=h,e.deltaFactor=r,e.offsetX=f,e.offsetY=m,e.deltaMode=0,a.unshift(e,i,c,h),o&&clearTimeout(o),o=setTimeout(n,200),(l.event.dispatch||l.event.handle).apply(this,a)}}function n(){r=null}function s(e,t){return p.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120===0}var o,r,l=window.$||a(46),c=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],d=Array.prototype.slice;if(l.event.fixHooks)for(var u=c.length;u;)l.event.fixHooks[c[--u]]=l.event.mouseHooks;var p=l.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var e=h.length;e;)this.addEventListener(h[--e],i,!1);else this.onmousewheel=i;l.data(this,"mousewheel-line-height",p.getLineHeight(this)),l.data(this,"mousewheel-page-height",p.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var e=h.length;e;)this.removeEventListener(h[--e],i,!1);else this.onmousewheel=null;l.removeData(this,"mousewheel-line-height"),l.removeData(this,"mousewheel-page-height")},getLineHeight:function(e){var t=l(e),a=t["offsetParent"in l.fn?"offsetParent":"parent"]();return a.length||(a=l("body")),parseInt(a.css("fontSize"),10)||parseInt(t.css("fontSize"),10)||16},getPageHeight:function(e){return l(e).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};l.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}}),e.exports=p},155:function(e,t,a){var i=window.$||a(46),n=(a(51),a(156)),s=i("[name=province]").val(),o={render:function(){var e=this;if(e.state.provList.length)var t=i.map(e.state.provList,function(e){return'<li data-code="'+e.code+'">'+e.name+"</li>"});if(i(".prov").children().length||(i(".prov").html(t),e.options.startCallback&&e.options.startCallback.call(e)),e.state.cityList.length){var a=i.map(e.state.cityList,function(e){return 1==e.status?'<li><label><input type="checkbox" checked="true" name="city" n="'+e.name+'" value="'+e.code+'" ><em>'+e.name+"</em></label></li>":'<li><label><input type="checkbox" name="city" n="'+e.name+'" value="'+e.code+'" ><em>'+e.name+"</em></label></li>"});i(".city").html(a),e.options.completeCallback&&e.options.completeCallback.call(e)}var n=[];e.state.selected.length?(n=i.map(e.state.selected,function(e){return'<li class="tagList" data-n="'+e.n+'" data-code="'+e.code+'"><span class="icon-close">X</span><span class="tagContent">'+e.n+"</span></li>"}),i(".btn-positive").hasClass("disabled")&&i(".btn-positive").removeClass("disabled")):n.push('<li class="noList">动动手指，在左边选择求学地区吧！</li>'),i("#tagsWrap").html(n.join(""))},updateUI:function(e){this.render()},init:function(e){this.state={provList:n,cityList:[],selected:[]},this.options=e,this.prov=i(".prov"),this.city=i(".city"),this.provIndex=0,this.cityDataCache={},this.bindEvt(),this.updateUI()},requestData:function(e){var t=this,a=t.options;return t.cityDataCache[e]?(t.state.cityList=t.cityDataCache[e],void t.updateUI()):void i.ajax({url:a.url,type:"post",contentType:"application/json",data:JSON.stringify({provinceId:e}),success:function(a){if("string"==typeof a)var a=i.parseJSON(a);if(1!=a.code)return void warn(a.msg);var a=a.result;t.cityDataCache[e]||(t.cityDataCache[e]=a.c),i.each(a.c,function(e,t){t.status=0}),t.state.cityList=a.c,t.updateUI()},error:function(e){console.log(e)}})},bindEvt:function(){var e=this,t=e.options;this.prov.on("click","li",function(){e.provIndex=e.prov.find("li").index(i(this)),i(this).siblings().removeClass(t.klass),i(this).addClass(t.klass),e.city.empty(),e.requestData.call(e,i(this).data("code"))}),i(document).on("click",".icon-close",function(t){var a=i(this).closest(".tagList"),n=a.data("code"),s=a.data("n"),o={n:s,code:n};i.each(e.state.selected,function(t,a){if(o.code==a.code)return e.state.selected.splice(t,1),!1}),i.each(e.state.cityList,function(t,a){if(o.code==a.code)return e.state.cityList[t].status=0,!1}),e.updateUI()}),i(document).on("change","[name=city]",function(t){var a=this,n=i(this);if(n.prop("checked")){var s={p:i(a).attr("p"),n:i(a).attr("n"),code:a.value};e.state.selected.push(s),i.each(e.state.cityList,function(t,a){if(s.code==a.code)return e.state.cityList[t].status=1,!1})}else{var s={n:i(a).attr("n"),code:a.value};i.each(e.state.selected,function(t,a){if(s.code==a.code)return e.state.selected.splice(t,1),!1}),i.each(e.state.cityList,function(t,a){if(s.code==a.code)return e.state.cityList[t].status=0,!1})}e.updateUI()}),i("#next").on("click",function(t){t.preventDefault();var a=i(t.target).closest(".btn");a.hasClass("disabled")||(a.addClass("disabled"),e.submitForm.call(e,a,i("#caseForm")))})},submitForm:function(e,t){var a=i.map(i("#tagsWrap .tagList"),function(e,t){return{name:i(e).data("n"),code:i(e).data("code")}}),n={c:a};i.ajax({url:preServer+s+"/tzy/plan/wishes/step2",type:"post",contentType:"application/json",data:JSON.stringify(n),success:function(t){if("string"==typeof t)var t=i.parseJSON(t);return 1==t.code?(window.location="/box/plan/book_step3",!1):(warn(t.msg),e.removeClass("disabled"),!1)},error:function(t){e.removeClass("disabled"),console.log(t)}})}};e.exports=o},156:function(e,t){e.exports=[{code:"330000",name:"浙江省"},{code:"340000",name:"安徽省"},{code:"350000",name:"福建省"},{code:"360000",name:"江西省"},{code:"370000",name:"山东省"},{code:"410000",name:"河南省"},{code:"420000",name:"湖北省"},{code:"430000",name:"湖南省"},{code:"440000",name:"广东省"},{code:"110000",name:"北京市"},{code:"120000",name:"天津市"},{code:"450000",name:"广西壮族自治区"},{code:"460000",name:"海南省"},{code:"140000",name:"山西省"},{code:"500000",name:"重庆市"},{code:"510000",name:"四川省"},{code:"520000",name:"贵州省"},{code:"530000",name:"云南省"},{code:"540000",name:"西藏自治区"},{code:"610000",name:"陕西省"},{code:"620000",name:"甘肃省"},{code:"630000",name:"青海省"},{code:"640000",name:"宁夏回族自治区"},{code:"650000",name:"新疆维吾尔自治区"},{code:"150000",name:"内蒙古自治区"},{code:"130000",name:"河北省"},{code:"210000",name:"辽宁省"},{code:"220000",name:"吉林省"},{code:"230000",name:"黑龙江省"},{code:"310000",name:"上海市"},{code:"320000",name:"江苏省"},{code:"810000",name:"香港自治区"}]}});