webpackJsonp([28],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(19);
	__webpack_require__(242);
	var $ = window.$ || __webpack_require__(41);
	
	//工具类方法
	var util = __webpack_require__(42);
	
	//公共方法
	var common = __webpack_require__(43);
	
	
	/* 可选，视需求而定 */
	var slider = __webpack_require__(235);
	var carousel = __webpack_require__(248);
	var updateBrowser = __webpack_require__(237);
	
	
	slider($("#bannerShow"));
	
	updateBrowser.init();
	
	carousel.init();
	
	$(".sloganTag").on("click",function(e){
		e.preventDefault();
		var rel = $(this).attr("id");
		var target = $("[rel="+rel+"]");
	
		var offset = target.offset().top;
	
		$("html,body").animate({
			"scrollTop" : offset
		},600);
	
	});


/***/ },

/***/ 235:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(41);
	var extend =  __webpack_require__(46);
	
	function unslider(target,options){
	
	    function Plugin(t,o){
	      this.target=t;
	      this.ul = t.find('ul');
	      this.li = this.ul.find('li');
	      this.visible_item = o.visible_item;
	      this.options=o;
	      this.timer = null;
	      this.init(this.options);
	    }
	
	    Plugin.prototype = {
	      init : function(o){
	        var that = this, $this = that.target;
	        var len = this.li.length;
	        that.target.css({overflow: 'hidden'});
	        this.ul.css({position: 'relative', left: 0, width: (len * 100) + '%'}); 
	        this.li.css({'float': 'left', width: (100 / len) + '%'}); 
	
	        $.each(this.li,function(idx,ele){
	          var $ele = $(ele);
	          $ele.find("a").css({"backgroundImage":"url("+$ele.data("pic")+")"});
	        });
	
	        if(o.nav && len > 1){
	          this.nav();
	        }
	      },
	      nav : function(){
	        var that = this, $this = that.target,o = that.options;
	        var name = 'dot';
	
	          var html = '<div class="dots">';
	          $.each(this.li, function(index) {
	            html += '<a href="#" class="' + (index == that.visible_item ? name + ' active' : name) + '">'+(++index)+'</a>';
	          });
	        html += '</ol>';
	        this.target.append(html);
	        var _dotsW = this.target.find('.dots').width();
	        this.target.find('.dots').css({left:'50%',marginLeft:-(_dotsW/2)});
	        this.dots = this.target.find('.dots');
	        this.dot = this.target.find('.'+name);
	        this.bindEvt();
	      },
	      bindEvt : function(){
	        var that = this, $this = that.target,o = that.options;
	        this.dots.on('click','.dot',function(e){                         //点击触发，自动轮播
	          e.preventDefault();
	          var me = $(this);
	           if(me.hasClass('active')){return false;}
	           if(me.hasClass('dot')){
	           that.to($('.dots  .dot').index(this));
	        }
	        });
	
	        if (o.keys) {
	        $(document).keydown(function(e) {
	          var key = e.which;
	          clearInterval(that.timer);
	          if (key == 37)
	            that.to(that.visible_item-1); // Left
	          else if (key == 39)
	            that.to(that.visible_item+1); // Right
	          else if (key == 27)
	            clearInterval(that.timer); // Esc
	        });
	        };
	
	        if(o.delay){
	        that.timer=setInterval(function() {
	            that.to();
	        },o.delay);
	
	        if (o.pause) {
	          $this.mouseenter(function() {
	            clearInterval(that.timer);
	          }).mouseleave(function(){
	            clearInterval(that.timer);
	            that.timer=setInterval(function(){
	              that.to();
	            },o.delay);
	          }); 
	        };
	        }
	      },
	      to : function(index,callback){
	        var that = this, $this = that.target,o = that.options;
	        if (typeof index == "undefined") { 
	          index = that.visible_item + 1;                   
	          index = index >= this.li.length ? 0 : index;         
	        }
	           
	          if(index==-1) index=that.li.length-1;
	        if(index==that.li.length) index=0;
	
	        $this.find('.dot').eq(index).addClass('active').siblings().removeClass('active');
	   
	        that.ul.animate({left: '-' + index + '00%'}, o.speed, function() {
	          that.visible_item = index;  
	        });
	      }
	    };
	
	    var settings = extend({
	      speed: 500,   
	      delay: 5000,  
	      pause: true,         
	      keys: true,      
	      nav: true,       
	      visible_item : 0
	    },options);
	    
	    return target.each(function(index) {
	      var me = $(this);  
	        return new Plugin(me,settings);
	    });
	  };
	
	  module.exports = unslider;


/***/ },

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(41);
	var extend =  __webpack_require__(46);
	
	__webpack_require__(238);
	
	var browser = __webpack_require__(50);
	var Cookies = __webpack_require__(104);
	
	var tmpl = __webpack_require__(241);
	
	var updateBrowser = {
		init : function(){
			var that = this;
			if (browser.isIE () && browser.isIE () < 8) {
			 	that.bindEvt();
			}else{
				//that.bindEvt();
				return false;
			}
		},
	
		bindEvt : function(){
			var that = this;
	
			if(Cookies.get('browser_nav')) return;
	
			var _body = $("body");
			_body.animate({"padding-top":50},300);
	
			_body.append(tmpl());
	
			var _browser_nav = $("#browser_nav");
			_browser_nav.slideDown(300);
	
			$("#nav_close").click(function(){
				// 创建一天的cookie防止刷新继续弹出等
				Cookies.set('browser_nav','close', { expires: 3 });
				_browser_nav.slideUp(300);
				_body.animate({"padding-top":0},300);
			});
		}
	};
	
	
	module.exports = updateBrowser;

/***/ },

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(239);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(38)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/autoprefixer-loader/index.js!./../../../../node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/autoprefixer-loader/index.js!./../../../../node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 239:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(21)();
	// imports
	
	
	// module
	exports.push([module.id, ".browser_nav {\n  height: 50px;\n  line-height: 50px;\n  color: #414040;\n  background: #ffe9ad;\n  width: 100%;\n  font-size: 14px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: none;\n}\n.browser_nav_room {\n  width: 1000px;\n  margin: 0 auto;\n}\n.browser_nav_room .txt {\n  float: left;\n}\n.browser_nav_room .blue {\n  color: #61c0e2;\n  display: inline-block;\n  padding: 0 5px;\n}\n.browser_nav_room .blue:hover {\n  color: #46a4c5;\n}\n.browser_nav_room .nav_close {\n  position: absolute;\n  top: 15px;\n  right: 0;\n  display: inline-block;\n  width: 19px;\n  height: 19px;\n  overflow: hidden;\n  font: 0/0 a;\n  background: url(" + __webpack_require__(240) + ");\n}\n", ""]);
	
	// exports


/***/ },

/***/ 240:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/web/img/browserClose.png"

/***/ },

/***/ 241:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '';
	with (obj) {
	__p += '<div class="browser_nav" id="browser_nav">\n	<div class="browser_nav_room rel">\n		<span class="txt">检测到您的浏览器版本过低，建议您使用如下浏览器</span>\n		<a href="https://www.google.com/intl/zh-CN/chrome/browser/"target="_blank"class="b_chrome blue">Google Chrome</a>\n		<a href="https://www.mozilla.org/zh-CN/firefox/new/?utm_source=firefox-com&utm_medium=referral"target="_blank"class="b_firefox blue">Firefox</a>\n		<a href="http://chrome.360.cn/"target="_blank"class="b_360 blue">360极速</a>\n		达到页面最佳效果！\n		<a href="javascript:;" class="nav_close" id="nav_close">关闭</a>\n	</div>\n</div>';
	
	}
	return __p
	}

/***/ },

/***/ 242:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(243);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(38)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 243:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(21)();
	// imports
	
	
	// module
	exports.push([module.id, ".bannerShow {\n  position: relative;\n  overflow: hidden;\n}\n.bannerShow ul {\n  height: 100%;\n  position: relative;\n}\n.bannerShow ul li {\n  float: left;\n}\n.picSlide a {\n  background-position: center center;\n  background-repeat: no-repeat;\n  display: block;\n  height: 460px;\n}\n.picSlide a > img {\n  width: 100%;\n  height: auto;\n}\n.bannerShow .dots {\n  position: absolute;\n  bottom: 20px;\n  z-index: 99;\n}\n.bannerShow .dots a {\n  display: block;\n  float: left;\n  width: 48px;\n  font: 0/0 a;\n  height: 8px;\n  margin: 0 12px;\n  border-radius: 4px;\n  cursor: pointer;\n  background-color: #2c7fbc;\n  -webkit-transition: all 0.4s ease;\n          transition: all 0.4s ease;\n}\n.bannerShow .dots a.active {\n  background: #fff;\n}\n.s-recommend {\n  padding: 32px 0 0;\n  border-top: 1px solid #e2e2e2;\n}\n.recommendList {\n  margin-left: -25px;\n  margin-right: -25px;\n}\n.recommendList li {\n  width: 50%;\n  float: left;\n  margin-bottom: 16px;\n}\n.recommendList .media {\n  padding: 0 25px;\n  position: relative;\n}\n.recommendList .media .link {\n  color: #333;\n}\n.recommendList .media .link:hover {\n  color: #666;\n}\n.recommendList .media > .fl {\n  margin-right: 6px;\n  display: inline-block;\n  width: 120px;\n  height: 90px;\n}\n.recommendList .media > .fl img.responsive {\n  width: 100%;\n  height: 100%;\n}\n.recommendList .media .media-body {\n  line-height: 24px;\n}\n.recommendList .media .media-body .txt {\n  font-size: 14px;\n  color: #000;\n}\n.recommendList .media .media-body .txt:hover {\n  color: #333;\n}\n.recommendList .media .detail {\n  margin-top: 8px;\n}\n.recommendList .media .detail .source {\n  padding: 0 3px;\n  min-width: 56px;\n  font-size: 12px;\n  line-height: 16px;\n  cursor: default;\n}\n.recommendList .media .detail .source:hover {\n  background: transparent;\n  color: #61c0e2;\n}\n.recommendList .media .detail .moment {\n  font-size: 12px;\n  line-height: 18px;\n  position: absolute;\n  bottom: 0;\n  right: 25px;\n}\n.countdown {\n  line-height: 48px;\n  background-color: #fe775d;\n  margin-bottom: 10px;\n  color: #fff;\n  text-align: center;\n}\n.cd-day {\n  font-size: 24px;\n  color: #fcca00;\n  margin: 0 6px;\n}\n.red {\n  color: #e93c59;\n}\n.s-coop {\n  margin: 48px 0 100px;\n}\n.s-coop h2 {\n  font-size: 28px;\n  color: #333;\n  margin-bottom: 32px;\n}\n.coop {\n  box-shadow: 1px 2px 1px #eaeaea;\n  display: inline-block;\n  width: 220px;\n  text-align: center;\n  background-color: #fff;\n  margin-bottom: 20px;\n  margin-right: 100px;\n  line-height: 140px;\n}\n.coop.last {\n  margin-right: 0;\n}\n.s-carousel {\n  margin-top: 25px;\n  margin-bottom: 25px;\n}\n.collegeWrap {\n  position: relative;\n  padding: 20px 0 20px 100px;\n  background-color: #cde9f2;\n}\n.collegeWrap .collegeTip {\n  position: absolute;\n  width: 88px;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  font-size: 22px;\n  color: #fff;\n  background-color: #1d718f;\n  font-weight: bold;\n}\n.collegeWrap .collegeTip .mc {\n  position: absolute;\n  right: -20px;\n  top: 50%;\n  margin-top: -10px;\n  border-width: 10px;\n  border-left-color: #1d718f;\n}\n.collegeWrap .collegeTip .collegeTipTxt {\n  width: 44px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 20px;\n}\n.collegeList {\n  margin-left: 0;\n  display: none;\n}\n.collegeList li {\n  float: left;\n  margin-right: 12px;\n  width: 154px;\n  background-color: #fff;\n  border: 1px solid #e2e2e2;\n  text-align: center;\n}\n.collegeList li a {\n  display: block;\n  width: 140px;\n  height: 60px;\n  text-align: center;\n}\n.collegeList li img {\n  max-width: 100%;\n  max-height: 100%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.s-grids {\n  margin-top: 40px;\n}\n.grid-items .upRow {\n  margin-right: -10px;\n}\n.grid-items .upRow .media-body h3 {\n  margin-bottom: 12px;\n}\n.grid-items .upRow .media-body div {\n  font-size: 16px;\n}\n.grid-items .upRow .media-body .yellow {\n  color: #f6ff00;\n}\n.grid-items .upRow .grid-item {\n  border-radius: 4px;\n  display: inline-block;\n  width: 330px;\n  height: 164px;\n  padding: 20px 0 30px 8px;\n  color: #fff;\n}\n.grid-items .upRow .grid-item:hover {\n  color: #fff;\n}\n.grid-items .upRow .grid-item .media-body {\n  margin-top: 40px;\n}\n.grid-items .upRow .link-book {\n  background-color: #fb9450;\n}\n.grid-items .upRow .link-book .imgWrap {\n  margin-top: 10px;\n  margin-right: 15px;\n}\n.grid-items .upRow .link-book:hover {\n  background-color: #E58749;\n}\n.grid-items .upRow .link-evaluate {\n  background-color: #fe775d;\n}\n.grid-items .upRow .link-evaluate .imgWrap {\n  margin-right: 8px;\n}\n.grid-items .upRow .link-evaluate:hover {\n  background-color: #E06952;\n}\n.grid-items .downRow {\n  margin-right: -10px;\n  margin-top: 20px;\n  text-align: justify;\n}\n.grid-items .downRow .grid-item {\n  background-color: #5acbf3;\n  border-radius: 4px;\n  width: 120px;\n  padding-top: 10px;\n  text-align: center;\n  display: inline-block;\n  font-size: 14px;\n  color: #fff;\n  vertical-align: top;\n}\n.grid-items .downRow .grid-item:hover {\n  color: #fff;\n  background-color: #2c7fbc;\n  -webkit-transition: background-color ease 0.4s;\n          transition: background-color ease 0.4s;\n}\n.grid-items .downRow .grid-item .figcaption {\n  margin-top: -10px;\n  height: 35px;\n  padding-top: 5px;\n}\n.grid-items .downRow .item3 .figcaption {\n  max-width: 60px;\n  padding-top: 0;\n  margin-left: auto;\n  margin-right: auto;\n  word-wrap: break-word;\n  line-height: 16px;\n}\n.grid-items .downRow .down-icon {\n  display: inline-block;\n  vertical-align: middle;\n  width: 75px;\n  height: 75px;\n  background-image: url(" + __webpack_require__(244) + ");\n}\n.grid-items .downRow .icon1 {\n  background-position: 0 0;\n}\n.grid-items .downRow .icon2 {\n  background-position: -75px 0;\n}\n.grid-items .downRow .icon3 {\n  background-position: -150px 0;\n}\n.grid-items .downRow .icon4 {\n  background-position: -225px 0;\n}\n.grid-items .downRow .icon5 {\n  background-position: -300px 0;\n}\n.s-recommend .title {\n  border-bottom: 6px solid #61c0e2;\n  line-height: 48px;\n  height: 54px;\n}\n.s-recommend .title .s-title {\n  background-color: #61c0e2;\n  color: #fff;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n.s-recommend .title .more {\n  font-size: 16px;\n  color: #999;\n}\n.s-recommend .title .more .plus {\n  width: 16px;\n  height: 16px;\n  display: inline-block;\n  background: url(" + __webpack_require__(245) + ");\n  font: 0/0 a;\n  vertical-align: middle;\n  margin-right: 4px;\n}\n.s-banner,\n.s-feature {\n  margin-top: 40px;\n}\n.featureLink {\n  width: 310px;\n  height: 127px;\n  background: url(" + __webpack_require__(246) + ");\n  display: inline-block;\n}\n.featureLink.feature_1 {\n  background-position: 0 0;\n}\n.featureLink.feature_2 {\n  background-position: -310px 0;\n}\n.featureLink.feature_3 {\n  background-position: -620px 0;\n}\n.coopIcon {\n  display: inline-block;\n  width: 33px;\n  height: 31px;\n  vertical-align: middle;\n  background: url(" + __webpack_require__(247) + ");\n}\n", ""]);
	
	// exports


/***/ },

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/web/img/itemIcon.png"

/***/ },

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/web/img/plus.png"

/***/ },

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/web/img/chaIcon.png"

/***/ },

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/web/img/coopIcon.png"

/***/ },

/***/ 248:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(41);
	var extend =  __webpack_require__(46);
	
	
	var carousel = {
		init : function(o){
			this.target= $(".collegeWrap");
	
			var settings=$.extend({
				speed: 500,   
				delay: 4000,  
				pause: true,
				slideNum:6
			},o);
	
			this.iNow = 0;
			this.options = settings;
			this.ul = $(".collegeList");
			this.li = this.ul.find("li");
			this.len = this.li.length;
			this.timer = null;
			this.nextok = true;
			this.prevok = false;
			this.bindEvt();
		},
	
		bindEvt : function(){
			this.setWidth();
			this.auto();
		},
	
		setWidth : function(){
			var that = this;
			that.oW = this.li.outerWidth(true);
			that.cW = that.target.width();
			this.oneMarginRight = parseInt(this.li.eq(0).css('marginRight'));
			this.rowNum = Math.round((that.cW+this.oneMarginRight) / this.oW);
			this.ul.css({width: this.len * that.oW});  //ul列表宽度为li列表宽度的个数倍
			this.ul.fadeIn();
		},
	
		toggleControl : function(){
			var that = this, $this = that.target,o = that.options;
	
			if(that.iNow >= that.len - that.rowNum){   //走到最后一步
				that.iNow = that.len - that.rowNum;
				that.nextok = false;
				
				clearInterval(that.timer);
	
				if(o.delay){
					that.timer=setTimeout(function() {
							that.prev();
					},o.delay);
				}
				
			}else{
				that.nextok = true;     
			}
	
			if(that.iNow <= 0) {					  //前面已经没有内容  
	        	 that.iNow = 0;
	        	 that.prevok = false; 
	        	clearInterval(that.timer);
	
				if(o.delay){
					that.timer=setTimeout(function() {
							that.next();
					},o.delay);
				}
	
	        }else{
				that.prevok = true;		
	        }		
		},
	
		auto : function(){
			var that = this, $this = that.target,o = that.options;
			  
			  if(o.delay){
				that.timer=setInterval(function() {
						that.next();
				},o.delay);
	
				if (o.pause) {
					$this.mouseenter(function() {
						clearInterval(that.timer);
					}).mouseleave(function(){
						clearInterval(that.timer);
						that.timer=setInterval(function(){
							that.next();
						},o.delay);
					});	
				};
			  }
		},
	
		next : function(){
			this.to(1); 
		},
	
		prev : function(){
			this.to(-1); 
		},
	
		to : function(index){
			var that = this, $this = that.target,o = that.options;
	
			//item数量不够轮播
			if(this.oW*this.li.length <= (that.cW+this.oneMarginRight)){
				return;
			}
	
			that.toggleControl();
	
			if(index==1 && that.nextok){
				that.ul.stop(false,true).animate({marginLeft:'-='+o.slideNum*that.oW},function(){
					that.iNow+=o.slideNum;	
					that.toggleControl();
				});		
			 }else if(index==-1 &&that.prevok){
			    that.ul.stop(false,true).animate({marginLeft:0},function(){
			    	that.iNow = 0;
			    	that.toggleControl();
				});			   
		   }
	}
	
	};
	
	module.exports = carousel;

/***/ }

});
//# sourceMappingURL=homeV2.js.map