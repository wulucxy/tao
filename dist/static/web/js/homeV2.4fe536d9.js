webpackJsonp([27],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(19);
	__webpack_require__(236);
	var $ = window.$ || __webpack_require__(41);
	
	//工具类方法
	var util = __webpack_require__(42);
	
	//公共方法
	var common = __webpack_require__(43);
	
	
	/* 可选，视需求而定 */
	var slider = __webpack_require__(229);
	var carousel = __webpack_require__(242);
	var updateBrowser = __webpack_require__(231);
	
	
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

/***/ 229:
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

/***/ 231:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(41);
	var extend =  __webpack_require__(46);
	
	__webpack_require__(232);
	
	var browser = __webpack_require__(50);
	var Cookies = __webpack_require__(104);
	
	var tmpl = __webpack_require__(235);
	
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

/***/ 232:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 235:
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

/***/ 236:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 242:
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
//# sourceMappingURL=homeV2.4fe536d9.js.map