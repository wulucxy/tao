webpackJsonp([27],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(19);
	__webpack_require__(226);
	var $ = window.$ || __webpack_require__(41);
	
	//工具类方法
	var util = __webpack_require__(42);
	
	//公共方法
	var common = __webpack_require__(43);
	
	
	/* 可选，视需求而定 */
	var slider = __webpack_require__(232);
	var carousel = __webpack_require__(233);
	var updateBrowser = __webpack_require__(234);
	
	
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

/***/ 226:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(227);
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

/***/ 227:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(21)();
	// imports
	
	
	// module
	exports.push([module.id, ".bannerShow {\n  position: relative;\n  overflow: hidden;\n}\n.bannerShow ul {\n  height: 100%;\n  position: relative;\n}\n.bannerShow ul li {\n  float: left;\n}\n.picSlide a {\n  background-position: center center;\n  background-repeat: no-repeat;\n  display: block;\n  height: 360px;\n}\n.picSlide a > img {\n  width: 100%;\n  height: auto;\n}\n.bannerShow .dots {\n  position: absolute;\n  bottom: 20px;\n  z-index: 99;\n}\n.bannerShow .dots a {\n  display: block;\n  float: left;\n  width: 24px;\n  font: 0/0 a;\n  height: 24px;\n  margin: 0 12px;\n  border-radius: 50%;\n  cursor: pointer;\n  background-color: #cfcfcf;\n  -webkit-transition: all 0.4s ease;\n          transition: all 0.4s ease;\n}\n.bannerShow .dots a.active {\n  background: #61c0e2;\n}\n.sloganTag {\n  display: inline-block;\n  vertical-align: middle;\n  background-repeat: no-repeat;\n  position: relative;\n  z-index: 9;\n  background-image: url(" + __webpack_require__(228) + ");\n  width: 104px;\n  height: 103px;\n}\n.slogan_1 {\n  background-position: 0 0;\n}\n.slogan_2 {\n  background-position: -104px 0;\n}\n.slogan_3 {\n  background-position: -208px 0;\n}\n.s-slogan {\n  padding: 30px 0;\n  border-bottom: 1px solid #dcdbdb;\n  border-top: 1px solid #dcdbdb;\n}\n.s-slogan .container {\n  position: relative;\n}\n.s-slogan .container:before {\n  content: \"\";\n  position: absolute;\n  height: 0;\n  border-top: 1px solid #dcdbdb;\n  top: 52px;\n  left: 130px;\n  width: 700px;\n}\n.sloganList {\n  width: 33.25%;\n  float: left;\n  font-size: 15px;\n  line-height: 2;\n}\n.sloganList:nth-child(1) .pad {\n  padding-right: 88px;\n  padding-left: 10px;\n}\n.sloganList:nth-child(2) .pad {\n  padding-right: 58px;\n  padding-left: 10px;\n}\n.sloganList:nth-child(3) .pad {\n  padding-left: 30px;\n}\n.sloganList h4 {\n  text-align: center;\n  font-size: 20px;\n  color: #333;\n  margin: 20px 0 12px;\n}\n.subSloganList {\n  position: relative;\n  padding-left: 16px;\n}\n.subSloganList:before {\n  content: \"\";\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  background-color: #dbdbdb;\n  top: 8px;\n  border-radius: 50%;\n  left: 0;\n}\n.s-recommend {\n  padding: 32px 0;\n  border-top: 1px solid #e2e2e2;\n}\n.recommendList {\n  margin-left: -25px;\n  margin-right: -25px;\n}\n.recommendList li {\n  width: 50%;\n  float: left;\n  margin-bottom: 16px;\n}\n.recommendList .media {\n  padding: 0 25px;\n}\n.recommendList .media .link {\n  color: #333;\n}\n.recommendList .media .link:hover {\n  color: #666;\n}\n.recommendList .media > .fl {\n  margin-right: 6px;\n  display: inline-block;\n  width: 74px;\n  height: 37px;\n}\n.recommendList .media > .fl img.responsive {\n  width: 100%;\n  height: 100%;\n}\n.recommendList .media .media-body {\n  line-height: 24px;\n}\n.recommendList .media .media-body .txt {\n  font-size: 12px;\n  color: #000;\n  line-height: 1;\n}\n.recommendList .media .media-body .txt:hover {\n  color: #666;\n}\n.recommendList .media .detail {\n  margin-top: 8px;\n}\n.recommendList .media .detail .source {\n  padding: 0 3px;\n  min-width: 56px;\n  font-size: 12px;\n  line-height: 16px;\n  cursor: default;\n}\n.recommendList .media .detail .source:hover {\n  background: transparent;\n  color: #61c0e2;\n}\n.recommendList .media .detail .moment {\n  font-size: 12px;\n  line-height: 18px;\n}\n.countdown {\n  padding: 8px 16px;\n  background-color: #fff;\n  box-shadow: 1px 2px 1px #ccc;\n  margin-bottom: 10px;\n}\n.countdown .imgWrap {\n  margin-right: 4px;\n}\n.cd-day {\n  font-size: 24px;\n  color: #fcca00;\n  margin: 0 6px;\n}\n.icon-archive {\n  display: inline-block;\n  vertical-align: middle;\n  background-repeat: no-repeat;\n  background-image: url(" + __webpack_require__(229) + ");\n  width: 60px;\n  height: 60px;\n}\n.archiveList li:nth-child(1) .icon-archive {\n  background-position: 0 0;\n}\n.archiveList li:nth-child(2) .icon-archive {\n  background-position: -60px 0;\n}\n.archiveList li:nth-child(3) .icon-archive {\n  background-position: -120px 0;\n}\n.archiveList li:nth-child(4) .icon-archive {\n  background-position: -180px 0;\n}\n.archiveList li:nth-child(5) .icon-archive {\n  background-position: -240px 0;\n}\n.archiveList {\n  margin: 0 -6px 16px;\n  padding-left: 2px;\n  padding-right: 2px;\n}\n.archiveList li {\n  float: left;\n  width: 20%;\n}\n.archiveList .pad {\n  padding: 0 6px;\n}\n.archiveList .grid {\n  height: 250px;\n  position: relative;\n  border: 1px solid #eaeaea;\n  box-shadow: 0 1px 1px #ccc;\n  background-color: #f7f6f6;\n  -webkit-transition: 0.4s box-shadow ease;\n          transition: 0.4s box-shadow ease;\n}\n.archiveList .grid .top {\n  position: relative;\n  background-color: #fff;\n  line-height: 96px;\n  height: 96px;\n  text-align: center;\n}\n.archiveList .grid .top .mc {\n  border-top-color: #f3f3f3;\n  left: 50%;\n  margin-left: -8px;\n  margin-top: -1px;\n}\n.archiveList .grid .bot h4 {\n  color: #333;\n  font-size: 18px;\n  text-align: center;\n  margin: 12px 0;\n}\n.archiveList .grid .bot .db-content {\n  font-size: 13px;\n  line-height: 2;\n  color: #666;\n  padding: 0 6px;\n}\n.archiveList .grid:hover {\n  box-shadow: 0 0 8px 2px #ccc;\n}\n.red {\n  color: #e93c59;\n}\n.s-tool {\n  margin: 18px 0;\n}\n.icon-tools {\n  display: inline-block;\n  vertical-align: middle;\n  background-repeat: no-repeat;\n  background-image: url(" + __webpack_require__(230) + ");\n  width: 84px;\n  height: 78px;\n}\n.toolLists .imgWrap {\n  display: inline-block;\n  width: 128px;\n  height: 128px;\n  box-shadow: 1px 2px 2px #d0cfd0;\n  text-align: center;\n  line-height: 108px;\n  background-color: #fff;\n  margin-right: 14px;\n}\n.toolLists li:nth-child(1) .icon-tools {\n  background-position: 0 0;\n}\n.toolLists li:nth-child(2) .icon-tools {\n  background-position: -84px 0;\n}\n.toolLists li:nth-child(3) .icon-tools {\n  background-position: -168px 0;\n}\n.toolLists li:nth-child(4) .icon-tools {\n  background-position: -252px 0;\n}\n.toolLists li {\n  margin-bottom: 20px;\n  padding-bottom: 4px;\n}\n.toolLists h5 {\n  font-size: 18px;\n  color: #333;\n  margin-bottom: 4px;\n  line-height: 24px;\n}\n.toolLists .media-body {\n  color: #999;\n  font-size: 14px;\n}\n.toolLists .media-body .txt {\n  line-height: 24px;\n  height: 60px;\n}\n.toolLists .media-body .detail > .fl {\n  color: #333;\n  font-size: 16px;\n  margin-top: 14px;\n}\n.coopLists {\n  margin-right: 6px;\n}\n.coop {\n  box-shadow: 1px 2px 1px #eaeaea;\n  display: block;\n  text-align: center;\n  background-color: #fff;\n  margin-bottom: 20px;\n  line-height: 140px;\n}\n.s-carousel {\n  margin-top: 25px;\n  margin-bottom: 25px;\n}\n.collegeWrap {\n  position: relative;\n  height: 78px;\n}\n.collegeList {\n  margin-left: 0;\n  display: none;\n}\n.collegeList li {\n  float: left;\n  margin-right: 12px;\n  width: 154px;\n  background-color: #fff;\n  border: 1px solid #e2e2e2;\n  text-align: center;\n}\n.collegeList li a {\n  display: block;\n  width: 140px;\n  height: 60px;\n  text-align: center;\n}\n.collegeList li img {\n  max-width: 100%;\n  max-height: 100%;\n}\n.enterWrap {\n  width: 323px;\n  height: 302px;\n  background: url(" + __webpack_require__(231) + ") no-repeat;\n  left: 50%;\n  margin-left: 177px;\n  top: 29px;\n  z-index: 9;\n}\n.enterWrap .enterLinks {\n  font: 0/0 a;\n  overflow: hidden;\n  position: absolute;\n  background-color: transparent;\n}\n.enterWrap .book {\n  width: 156px;\n  height: 96px;\n  left: 5px;\n  top: 5px;\n}\n.enterWrap .score {\n  width: 156px;\n  height: 96px;\n  right: 5px;\n  top: 5px;\n}\n.enterWrap .evaluate {\n  width: 156px;\n  height: 96px;\n  left: 5px;\n  top: 103px;\n}\n.enterWrap .aboard {\n  width: 156px;\n  height: 98px;\n  right: 5px;\n  top: 103px;\n}\n.enterWrap .test {\n  width: 102px;\n  height: 96px;\n  left: 5px;\n  top: 200px;\n}\n.enterWrap .qa {\n  width: 102px;\n  height: 96px;\n  left: 109px;\n  top: 200px;\n}\n.enterWrap .expert {\n  width: 102px;\n  height: 96px;\n  right: 5px;\n  top: 200px;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 228:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/web/img/tool.png"

/***/ },

/***/ 229:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/web/img/archive.png"

/***/ },

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/web/img/case.png"

/***/ },

/***/ 231:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/web/img/enter.png"

/***/ },

/***/ 232:
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

/***/ 233:
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

/***/ },

/***/ 234:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(41);
	var extend =  __webpack_require__(46);
	
	__webpack_require__(235);
	
	var browser = __webpack_require__(50);
	var Cookies = __webpack_require__(104);
	
	var tmpl = __webpack_require__(238);
	
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

/***/ 235:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(236);
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

/***/ 236:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(21)();
	// imports
	
	
	// module
	exports.push([module.id, ".browser_nav {\n  height: 50px;\n  line-height: 50px;\n  color: #414040;\n  background: #ffe9ad;\n  width: 100%;\n  font-size: 14px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: none;\n}\n.browser_nav_room {\n  width: 1000px;\n  margin: 0 auto;\n}\n.browser_nav_room .txt {\n  float: left;\n}\n.browser_nav_room .blue {\n  color: #61c0e2;\n  display: inline-block;\n  padding: 0 5px;\n}\n.browser_nav_room .blue:hover {\n  color: #46a4c5;\n}\n.browser_nav_room .nav_close {\n  position: absolute;\n  top: 15px;\n  right: 0;\n  display: inline-block;\n  width: 19px;\n  height: 19px;\n  overflow: hidden;\n  font: 0/0 a;\n  background: url(" + __webpack_require__(237) + ");\n}\n", ""]);
	
	// exports


/***/ },

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/web/img/browserClose.png"

/***/ },

/***/ 238:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '';
	with (obj) {
	__p += '<div class="browser_nav" id="browser_nav">\n	<div class="browser_nav_room rel">\n		<span class="txt">检测到您的浏览器版本过低，建议您使用如下浏览器</span>\n		<a href="https://www.google.com/intl/zh-CN/chrome/browser/"target="_blank"class="b_chrome blue">Google Chrome</a>\n		<a href="https://www.mozilla.org/zh-CN/firefox/new/?utm_source=firefox-com&utm_medium=referral"target="_blank"class="b_firefox blue">Firefox</a>\n		<a href="http://chrome.360.cn/"target="_blank"class="b_360 blue">360极速</a>\n		达到页面最佳效果！\n		<a href="javascript:;" class="nav_close" id="nav_close">关闭</a>\n	</div>\n</div>';
	
	}
	return __p
	}

/***/ }

});
//# sourceMappingURL=home.js.map