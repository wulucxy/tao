webpackJsonp([41],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(21);
	__webpack_require__(293);
	var $ = window.$ || __webpack_require__(44);
	
	//工具类方法
	var util = __webpack_require__(45);
	
	//公共方法
	var common = __webpack_require__(46);
	
	
	//自定义功能写下面
	var slider = __webpack_require__(238);
	
	slider($("#bannerShow"));

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(44);
	var extend =  __webpack_require__(49);
	
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


/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(294);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(41)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/autoprefixer-loader/index.js!../../../node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/autoprefixer-loader/index.js!../../../node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports
	
	
	// module
	exports.push([module.id, ".bannerShow {\n  position: relative;\n  overflow: hidden;\n  margin-top: 20px;\n}\n.bannerShow ul {\n  height: 100%;\n  position: relative;\n}\n.bannerShow ul li {\n  float: left;\n}\n.picSlide a {\n  background-position: center center;\n  background-repeat: no-repeat;\n  display: block;\n  height: 120px;\n}\n.picSlide a > img {\n  width: 100%;\n  height: auto;\n}\n.bannerShow .dots {\n  position: absolute;\n  bottom: 20px;\n  z-index: 99;\n}\n.bannerShow .dots a {\n  display: block;\n  float: left;\n  width: 24px;\n  font: 0/0 a;\n  height: 24px;\n  margin: 0 12px;\n  border-radius: 50%;\n  cursor: pointer;\n  background-color: #cfcfcf;\n  transition: all 0.4s ease;\n}\n.bannerShow .dots a.active {\n  background: #61c0e2;\n}\n.s-carousel {\n  margin-top: 25px;\n  margin-bottom: 25px;\n}\n.collegeWrap {\n  position: relative;\n}\n.collegeList {\n  margin-left: 0;\n  margin-right: -12px;\n}\n.collegeList li {\n  float: left;\n  margin-right: 12px;\n  margin-bottom: 10px;\n  width: 190px;\n  height: 60px;\n  line-height: 58px;\n  background-color: #fff;\n  border: 1px solid #e2e2e2;\n  text-align: center;\n}\n.collegeList li a {\n  display: block;\n  padding: 0 20px;\n}\n.collegeList li img {\n  max-width: 100%;\n  max-height: 100%;\n  vertical-align: top;\n}\n.collegeListWrap {\n  margin-top: 24px;\n}\n.collegeListWrap + .collegeListWrap {\n  margin-top: 10px;\n}\n.recWrap {\n  margin-bottom: 40px;\n}\n", ""]);
	
	// exports


/***/ })

});
//# sourceMappingURL=recommendUni.js.map