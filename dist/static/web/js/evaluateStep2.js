webpackJsonp([23],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(21);
	__webpack_require__(213);
	var $ = window.$ || __webpack_require__(44);
	
	//工具类方法
	var util = __webpack_require__(45);
	
	//公共方法
	var common = __webpack_require__(46);
	
	/* 具体实现 */
	
	// 表单验证组件
	__webpack_require__(62);
	
	var searchSchool = __webpack_require__(184);
	
	var extend =  __webpack_require__(49);
	
	//弹窗模板
	var tmpl_detail = __webpack_require__(135);
	var tmpl_questions = __webpack_require__(136);
	
	//弹窗模板
	var tmpl_school = __webpack_require__(216);
	var tmpl_list = __webpack_require__(217);
	var tmpl_major = __webpack_require__(218);
	var majors = __webpack_require__(219);
	
	//provinceId
	var provinceId = $("[name=province]").val();
	
	var courseType = $("[name=courseType]").val();
	
	var batch = $("[name=batch]").val();
	
	//分页
	var pagination = __webpack_require__(190);
	//自定义滚动
	var scroll = __webpack_require__(139);
	
	// panel
	var tmpl_panel = __webpack_require__(220);
	
	// major
	var tmpl_majorList = __webpack_require__(221);
	
	// divider
	var tmpl_divider = __webpack_require__(222);
	
	//兼容every实现
	if (typeof Array.prototype.every != "function") {
	  Array.prototype.every = function (fn, context) {
	    var passed = true;
	    if (typeof fn === "function") {
	       for (var k = 0, length = this.length; k < length; k++) {
	          if (passed === false) break;
	          passed = !!fn.call(context, this[k], k, this);
	      }
	    }
	    return passed;
	  };
	}
	
	//兼容some实现
	if (typeof Array.prototype.some != "function") {
	  Array.prototype.some = function (fn, context) {
	  var passed = false;
	  if (typeof fn === "function") {
	      for (var k = 0, length = this.length; k < length; k++) {
	      if (passed === true) break;
	      passed = !!fn.call(context, this[k], k, this);
	    }
	    }
	  return passed;
	  };
	}
	
	var __INITDATA__ = $('.wishInput').map(function(idx, ele){
	  var $ele = $(ele);
	  return {
	    collegeId: $ele.attr('collegeid'),
	    collegeName: $ele.attr('collegename'),
	    majorId:$ele.attr('majorid'),
	    majorName:$ele.attr('majorname'),
	    field:$ele.attr('field')
	  }
	}).get()
	
	var __INITSUBJECTS__ = $('.subjectInput').map(function(idx, ele){
	  var $ele = $(ele);
	  return {
	    name: $ele.attr('name'),
	    code: $ele.val()
	  }
	}).get()
	
	
	var evaluate = {
	
	  init : function(o){
	
	      this.pager = 1;
	      this.capacity = 10;
	      
	      this.options = o;
	
	      this.state = {
	        wishes : __INITDATA__ || [],
	        provList : [],
	        cityList : [],
	        current: {
	          college: {},
	          major: {}
	        }
	      };
	
	      this.bindEvt();
	
	      this.render();
	  },
	
	  render : function(type){
	    var that = this, o = that.options;
	
	    // 操作区域
	    // 未选择学校，专业不可点
	    $('#js-addSchool').toggleClass('disabled', !!that.state.current.college.code);
	    $('#js-addMajor').toggleClass('disabled', !!that.state.current.major.code || !that.state.current.college.code);
	   
	    $('#js-addNext').toggleClass('disabled', !(that.state.current.college.code && that.state.current.major.code))
	
	    if(that.state.wishes.length >= 80){
	      $('.downRow').hide();
	    }
	
	    $('#divider').empty().html(tmpl_divider(that.state));
	
	    // panel列表
	    $('.panelWrap').empty().html(tmpl_panel(that.state));
	
	    // 省列表
	      if(that.state.provList.length){
	          var provLis = $.map(that.state.provList,function(item){
	              return '<li data-code="'+item.code+'">'+item.name+'</li>';
	          });
	      }
	
	      if($(".prov").length && !$(".prov").children().length){
	        $(".prov").html(provLis);
	        that.boxEvt();
	        that.options.startCallback && that.options.startCallback.call(that);
	      }
	
	      //城市列表
	      if($(".city").length){
	          
	        $(".city").html(tmpl_majorList(
	          {majorList:that.state.cityList}
	        ));
	        that.options.completeCallback && that.options.completeCallback.call(that);
	    }
	
	  },
	
	  boxEvt : function(){
	    var that = this,o = that.options;
	    that.prov = $(".prov"),
	    that.city = $(".city");
	    // 选择省份时发生事件
	    that.prov.on("click","li",function(){
	        that.provIndex = that.prov.find("li").index($(this));
	        $(this).siblings().removeClass(o.klass);
	        $(this).addClass(o.klass);
	
	        that.city.empty();
	        //城市id
	        that.requestCityData.call(that,$(this).data("code"));
	    });
	
	    // 点中选择专业
	    // 注意不能选择已选中的志愿
	    $(document).off().on("click","[name=city]",function(e){
	         
	        var ele = this,$ele = $(this);
	
	        // 当前选中
	        that.state.current.major.code = $ele.val();
	        that.state.current.major.name = $ele.attr('n');
	
	        var current = that.state.current;
	        var wishes = that.state.wishes;
	
	        var isRepeat = false;
	        $(wishes).each(function(idx,ele){
	          if(ele.majorId == current.major.code && ele.collegeId == current.college.code){
	            warn("不能选择重复的志愿方案");
	            isRepeat = true;
	            return false;
	          }
	        })
	
	        if(isRepeat) return false;
	
	        // wishes
	        that.state.wishes[0].majorId = $ele.val();
	        that.state.wishes[0].majorName = $ele.attr('n');
	        that.state.wishes[0].field = $ele.attr('field');
	
	        $(".btn-close").trigger("click");
	        that.render();
	    });
	  },
	
	  requestCityData : function(val){
	    var that = this,o = that.options;
	
	    var collegeId = that.state.current.college.code;
	
	   var majors = that.state.majorListAll.filter(function(ele, idx){
	      return ele.code == val;
	    });
	
	   that.state.cityList = !!majors.length ? majors[0].majorList : []
	
	   that.render();
	   
	    // var parm = [];
	    // parm.push("courseType="+courseType);
	    // parm.push("batch="+batch);
	
	    // $.ajax({
	    //     url : preServer+provinceId+"/data/major/"+collegeId+"/category/"+val+"?"+parm.join("&"),
	    //     type : "get",
	    //     success : function(res){
	    //         if(typeof res =="string"){
	    //             var res = $.parseJSON(res);
	    //         }
	
	    //         if(res.code!=1){
	    //           warn(res.msg);
	    //           return;
	    //         }
	
	    //         var res = res.result;
	            
	    //         if(!res.length){
	    //           that.state.cityList = [];
	    //           that.render();
	    //           return;
	    //         }
	    //         //默认未选中
	    //         $.each(res,function(idx,ele){
	    //             ele.status = 0;
	    //             ele.code = ele.majorId;
	    //             ele.name = ele.majorName;
	    //         });
	
	    //         that.state.cityList = res;
	
	    //         that.render();
	
	    //     },
	    //     error : function(err){
	    //         console.log(err);
	    //     }
	    // });
	  },
	
	  bindEvt: function(){
	
	    this.addSchool();
	    this.addMajor();
	
	    this.removePanel();
	
	    this.addWishList();
	
	    this.submitForm();
	  },
	
	  submitForm: function(){
	    var that = this;
	    //异步提交结果
	    $("#verifyBtn").on("click",function(e){
	      e.preventDefault();
	
	      var wishes = that.state.wishes;
	
	      //只要有一个选中即ok
	      var wishStatus = wishes.some(function(ele,idx){
	         return !!(ele.collegeId && ele.majorId);
	      });
	      
	      //只要有大学选中那么也必须选择专业
	      var wishMajorStatus = true;
	      $.each(wishes, function(idx,ele){
	        if(ele.collegeId && ele.collegeName){
	         if(!ele.majorId || !ele.majorName){
	          wishMajorStatus = false;
	          return false;
	         }
	        }
	        
	      });
	
	   
	    if(!wishStatus){
	      warn("请至少选择一个志愿方案");
	      return false;
	    }else if(!wishMajorStatus){
	      warn("请确保每所学校至少选择一个专业");
	      return false;
	    }
	
	    console.log(that.state.wishes);
	    
	    $.ajax({
	      url : preServer+provinceId+"/tzy/plan/assessment/step2",
	      type : "post",
	      contentType: "application/json",
	      data : JSON.stringify({
	        wishes : that.state.wishes
	      }),
	      success : function(res){
	          if(typeof res =="string"){
	              var res = $.parseJSON(res);
	          }
	
	          if(res.code==1){
	              window.location = "/box/plan/evaluate_step3";
	              return false;
	          }else{
	              warn(res.msg);
	              return false;
	          }
	      },
	      error : function(err){
	          console.log(err);
	      }
	    });
	  });
	  },
	
	  resetWishes: function(){
	    var that = this;
	    // 重置
	    that.state.current['college'].name = '';
	    that.state.current['college'].code = '';
	    that.state.current['major'].code = '';
	    that.state.current['major'].name = '';
	  },
	
	  addWishList: function(){
	    var that = this;
	    $('body').on('click', '#js-addNext', function(e){
	      e.preventDefault();
	
	      if($(e.target).hasClass('disabled')) return false;
	
	      that.resetWishes();
	      that.render();
	
	    })
	
	  },
	
	  removePanel: function(){
	    var that = this;
	    $('body').on('click', '.panel-close', function(e){
	      e.preventDefault();
	
	      var panel = $(e.target).closest('.panel');
	      var collegeId = panel.attr('collegeid'),
	          majorId = panel.attr('majorid');
	
	      var panelIndex;
	
	      $(that.state.wishes).each(function(idx, ele){
	        if(collegeId == ele.collegeId && majorId == ele.majorId){
	          panelIndex = idx;
	          return false;
	        }  
	      });
	
	      that.resetWishes();
	
	      that.state.wishes.splice(panelIndex,1);
	      that.render();
	
	    })
	  },
	
	  addSchool : function(){
	    var o = this.options, that = this;
	    searchSchool.init({
	      el : "#js-addSchool",
	      provinceId : provinceId,
	      event:'click',
	      url : "/v2_1/client/"+provinceId+"/data/college/search",
	      startCallback  : function(modal){
	        
	      },
	      selectListCallback : function(li){
	        var self = this, $li = $(li);
	
	        $(".btn-close").trigger("click");
	
	        // 当前输入的内容
	        that.state.current['college'].name = $li.attr("name");
	        that.state.current['college'].code = $li.attr("code");
	
	        // wishes列表
	        that.state.wishes.unshift({
	          collegeId:$li.attr("code"),
	          collegeName:$li.attr("name")
	        })
	
	        that.render();
	      }
	    });
	
	  },
	
	  requestMajors : function(options){
	    var that = this;
	    var subjects = $(__INITSUBJECTS__).map(function(idx, ele){
	      return Number(ele.code)
	    }).get();
	
	     $.ajax({
	        url : preServer+provinceId+"/data/college/"+options.collegeId+"/category",
	        type : "post",
	        data : JSON.stringify({subjects: subjects}),
	        success : function(res){
	            if(typeof res =="string"){
	                var res = $.parseJSON(res);
	            }
	
	            if(res.code!=1){
	              warn(res.msg);
	              return;
	            }
	
	           that.majors = $.map(res.result,function(ele){
	              return {
	                name : ele.name,
	                code : ele.id
	              }
	           });
	
	           // 专业大类
	           that.state.provList = that.majors;
	
	           // 专业小类
	           that.state.majorListAll = $.map(res.result,function(ele){
	              return {
	                majorList : ele.majorList,
	                code : ele.id
	              }
	           });
	
	           options.callback && options.callback.call(that);
	
	        },
	        error : function(err){
	          console.log(err);
	        }
	    })
	  },
	
	  addMajor: function(){
	    var that = this;
	    $("#js-addMajor").on("click",function(e){
	      e.preventDefault();
	      var btn = $(e.target).closest(".btn");
	      if(btn.hasClass("disabled")) return;
	
	      var collegeId = that.state.current.college.code;
	
	      // 动态获取院校下的大专业列表
	      that.requestMajors({
	        collegeId : collegeId,
	        callback : majorBox
	      });
	
	      function majorBox(){
	          modalBox(btn,{
	          html : tmpl_major(),
	          klass : 'w540 shadow',
	          closeByOverlay : false,
	          startCallback : function(modal){
	            that.modal = modal;
	            that.render();
	          },
	
	          completeCallback : function(){
	            
	          },
	          closeCallback: function(){
	
	          }
	        });
	      }
	
	    });
	  }
	
	};
	
	evaluate.init({
	  klass : "current",
	  startCallback : function(){
	    scroll($(".prov"),{
	      height : $(".selectWrap").height(),
	      alwaysVisible : true
	    });
	
	    $(".prov").find("li").eq(0).trigger("click");
	  },
	
	  completeCallback : function(){
	    scroll($(".city"),{
	      height : $(".selectWrap").height(),
	      alwaysVisible : true
	    });
	  },
	
	  //选中学校的回调
	  schoolSelectedCallback : function(oInput){
	    var oRow = oInput.closest(".row");
	
	  }
	});
	
	
	
	


/***/ },

/***/ 139:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(140);
	
	var $ = window.$ || __webpack_require__(44);
	var extend =  __webpack_require__(49);
	
	//mousewheel
	__webpack_require__(142);
	
	function scroll(target,options){
	
	  function Plugin(t,o){
	    this.target=t;
	    this.options=o;
	    this.init(o);
	  }
	
	  Plugin.prototype={
	    generateHTML : function(){          //html架构组装
	      var that = this, $this = that.target,o=that.options;
	      
	      that.wrapper = $('<div>').addClass(o.wrapperClass).css({width: o.width,height: o.height});
	      $this.css({overflow: 'hidden',width: o.width,height: o.height});
	      that.rail = $('<div>').addClass(o.railClass).css({display: (o.alwaysVisible && o.railVisible) ? 'block' : 'none'});
	      that.bar = $('<div>').addClass(o.barClass).css({display: o.alwaysVisible ? 'block' : 'none'});
	      
	      var posCss = (o.position == 'right') ? { right: o.distance } : { left: o.distance };
	      that.rail.css(posCss);
	      that.bar.css(posCss);
	
	      $this.wrap(that.wrapper);
	      $this.parent().append(that.bar);     
	      $this.parent().append(that.rail);
	    },
	
	    getBarHeight:function(){
	      var that = this, $this = that.target,o=that.options;
	      var barHeight = Math.max(($this.outerHeight() / $this[0].scrollHeight) * $this.outerHeight(), o.minBarHeight);  
	     //获取未隐藏容器的高度比例，并按照比例设置bar的高度    scrollHeight为总高度（包括卷起的高度），outerwidth为容器可见高度
	      that.bar.css({ height: barHeight + 'px' });
	      var display = barHeight == $this.outerHeight() ? 'none' : 'block';  //设置bar的可见性
	      var railDisplay= (o.alwaysVisible && o.railVisible) ? 'block' : display;
	      that.rail.css({display: railDisplay});
	      that.bar.css({ display: display});
	    },
	
	    checkPos : function(){
	       var that = this, $this = that.target,o=that.options;
	       //判断初始位置
	        if (o.start === 'bottom'){
	          that.bar.css({ top: $this.outerHeight() - that.bar.outerHeight() });
	          that.scrollContent(0, true);
	        }
	        else if (o.start !== 'top'){
	          that.scrollContent($(o.start).position().top, false, true);
	
	          if (!o.alwaysVisible) { that.bar.hide(); }
	        }
	    },
	
	    drag : function(){
	      var that = this, $this = that.target,o=that.options;
	      that.isDragg = true;
	       if (o.railDraggable){
	          that.bar.on("mousedown", function(e) {
	            var $doc = $(document);
	            var disY=e.pageY-$(this).offset().top;
	
	            $doc.on("mousemove", function(e){
	               that.bar.offset({top:e.pageY-disY});
	               that.scrollContent(0, that.bar.position().top, false);// scroll content
	            });
	
	            $doc.on("mouseup", function(e) {
	              that.isDragg = false;
	              $doc.off('mousemove');
	             $doc.off('mouseup');
	            });
	            return false;
	          });
	        }
	    },
	
	    attachWheel:function(){
	      var that = this, $this = that.target,o=that.options;
	      $this.on('mousewheel', function(e, delta) {
	        if(delta > 0) {
	          if( that.wrapper.data( 'anim' ) ) return false;
	          that.wrapper.data( 'anim', true );
	          that.scrollContent(-1,true);
	        } 
	        else {
	          if( that.wrapper.data( 'anim' ) ) return false;
	          that.wrapper.data( 'anim', true );
	          that.scrollContent(1,true);
	        } 
	        return false;
	      });
	    },
	
	    scrollContent:function(y, isWheel, isJump){     //核心方法
	      var that = this, $this = that.target,o=that.options;
	      var delta = y,percentScroll;
	      var maxTop = $this.parent().outerHeight() - that.bar.outerHeight();
	
	      if (isWheel){
	        delta = parseInt(that.bar.css('top')) + y * parseInt(o.wheelStep) / 100 * that.bar.outerHeight();
	        //获取上一次bar的top值，鼠标每次滚动，都相当于以bar的高度为基准滑动20%
	
	        delta = Math.min(Math.max(delta, 0), maxTop);
	        //如果delta小于0，就取0
	        //如果delta大于maxtop，就取maxtop值
	  
	        delta = (y > 0) ? Math.ceil(delta) : Math.floor(delta);
	        //如果向下滑动，delta向上取整，否则向下取整。
	      
	        that.bar.css({ top: delta + 'px' });
	        that.wrapper.data( 'anim', false );
	      }
	      percentScroll = parseInt(that.bar.css('top')) / ($this.outerHeight());  //计算bar滚动比例，获取
	      delta = percentScroll * ($this[0].scrollHeight);
	
	      if (isJump){
	        delta = y;
	        var offsetTop = delta / $this[0].scrollHeight * $this.outerHeight();
	        that.bar.css({ top: Math.min(Math.max(offsetTop, 0), maxTop) + 'px' });
	      }
	
	      $this.scrollTop(delta);                 //将me.scrollTop设置为delta值
	    },
	
	    init : function(o){
	      var that = this, $this = that.target;
	      o.height = (o.height == 'auto') ? $this.parent().innerHeight() : o.height;   //如果o.height设置为auto,将o.height设置为父元素的innerHeight
	
	      if ($this.parent().hasClass(o.wrapperClass)){    //外围容器,当前$(this)并没有包括到o.wrapperClass。
	            var offset = $this.scrollTop();            //获取当前内容框的scrollTop值
	
	            that.bar = $this.parent().find('.' + o.barClass); 
	            that.rail = $this.parent().find('.' + o.railClass);
	
	            that.getBarHeight();
	            that.scrollContent(offset, false, true);
	            return;
	      }
	
	      that.generateHTML();
	      that.getBarHeight();
	      that.checkPos();
	      that.attachWheel();  //调用mousewheel事件
	      that.drag();
	    }
	  };
	
	  var settings = extend({
	      width : 'auto',  //内容区宽度
	      height : '250px', //内容区呈现高度
	      position : 'right', //scrollbar定位位置
	      start : "top", 
	      distance : '1px',   //scrollbar到右边界的距离
	      alwaysVisible : false, //scrollbar默认始终显示
	      disableFadeOut: true, //鼠标悬浮scrllbar效果
	      railVisible : true,  //rail滚动条背景
	      railDraggable : true, //rail可拖拽
	      railClass : 'scrollBeautifyRail',   //rail类
	      barClass : 'scrollBeautifyBar',     //bar类
	      wrapperClass : 'scrollBeautifyDiv', //容器类
	      wheelStep : 20,                //滚动步长(相对于bar自己)
	      minBarHeight:30               //bar最小值
	  },options);
	  
	  // return target.each(function(index) {
	  //   var me = $(this);  
	  //     return new Plugin(me,settings);
	  // });
	  
	  var instance = $(target).data('scroll' );
	
	  $(target).each(function(index) {
	    var me = $(this);   //表单容器本身
	    var instance = me.data('scroll', new Plugin( me,settings ) );
	  });
	  
	  return instance; 
	}
	
	module.exports = scroll;
	
	  

/***/ },

/***/ 140:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(141);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(41)(content, {});
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

/***/ 141:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports
	
	
	// module
	exports.push([module.id, ".scrollBeautifyDiv {\n  position: relative;\n  overflow: hidden;\n}\n.scrollBeautifyRail {\n  height: 100%;\n  position: absolute;\n  top: 0;\n  z-index: 90;\n}\n.scrollBeautifyBar {\n  position: absolute;\n  top: 0;\n  z-index: 99;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 142:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(44);
	
	var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
	    toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
	                ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
	    slice  = Array.prototype.slice,
	    nullLowestDeltaTimeout, lowestDelta;
	
	if ( $.event.fixHooks ) {
	    for ( var i = toFix.length; i; ) {
	        $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
	    }
	}
	
	var special = $.event.special.mousewheel = {
	    version: '3.1.12',
	
	    setup: function() {
	        if ( this.addEventListener ) {
	            for ( var i = toBind.length; i; ) {
	                this.addEventListener( toBind[--i], handler, false );
	            }
	        } else {
	            this.onmousewheel = handler;
	        }
	        // Store the line height and page height for this particular element
	        $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
	        $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
	    },
	
	    teardown: function() {
	        if ( this.removeEventListener ) {
	            for ( var i = toBind.length; i; ) {
	                this.removeEventListener( toBind[--i], handler, false );
	            }
	        } else {
	            this.onmousewheel = null;
	        }
	        // Clean up the data we added to the element
	        $.removeData(this, 'mousewheel-line-height');
	        $.removeData(this, 'mousewheel-page-height');
	    },
	
	    getLineHeight: function(elem) {
	        var $elem = $(elem),
	            $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
	        if (!$parent.length) {
	            $parent = $('body');
	        }
	        return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
	    },
	
	    getPageHeight: function(elem) {
	        return $(elem).height();
	    },
	
	    settings: {
	        adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
	        normalizeOffset: true  // calls getBoundingClientRect for each event
	    }
	};
	
	$.fn.extend({
	    mousewheel: function(fn) {
	        return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
	    },
	
	    unmousewheel: function(fn) {
	        return this.unbind('mousewheel', fn);
	    }
	});
	
	
	function handler(event) {
	    var orgEvent   = event || window.event,
	        args       = slice.call(arguments, 1),
	        delta      = 0,
	        deltaX     = 0,
	        deltaY     = 0,
	        absDelta   = 0,
	        offsetX    = 0,
	        offsetY    = 0;
	    event = $.event.fix(orgEvent);
	    event.type = 'mousewheel';
	
	    // Old school scrollwheel delta
	    if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
	    if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
	    if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
	    if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }
	
	    // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
	    if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
	        deltaX = deltaY * -1;
	        deltaY = 0;
	    }
	
	    // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
	    delta = deltaY === 0 ? deltaX : deltaY;
	
	    // New school wheel delta (wheel event)
	    if ( 'deltaY' in orgEvent ) {
	        deltaY = orgEvent.deltaY * -1;
	        delta  = deltaY;
	    }
	    if ( 'deltaX' in orgEvent ) {
	        deltaX = orgEvent.deltaX;
	        if ( deltaY === 0 ) { delta  = deltaX * -1; }
	    }
	
	    // No change actually happened, no reason to go any further
	    if ( deltaY === 0 && deltaX === 0 ) { return; }
	
	    // Need to convert lines and pages to pixels if we aren't already in pixels
	    // There are three delta modes:
	    //   * deltaMode 0 is by pixels, nothing to do
	    //   * deltaMode 1 is by lines
	    //   * deltaMode 2 is by pages
	    if ( orgEvent.deltaMode === 1 ) {
	        var lineHeight = $.data(this, 'mousewheel-line-height');
	        delta  *= lineHeight;
	        deltaY *= lineHeight;
	        deltaX *= lineHeight;
	    } else if ( orgEvent.deltaMode === 2 ) {
	        var pageHeight = $.data(this, 'mousewheel-page-height');
	        delta  *= pageHeight;
	        deltaY *= pageHeight;
	        deltaX *= pageHeight;
	    }
	
	    // Store lowest absolute delta to normalize the delta values
	    absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );
	
	    if ( !lowestDelta || absDelta < lowestDelta ) {
	        lowestDelta = absDelta;
	
	        // Adjust older deltas if necessary
	        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
	            lowestDelta /= 40;
	        }
	    }
	
	    // Adjust older deltas if necessary
	    if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
	        // Divide all the things by 40!
	        delta  /= 40;
	        deltaX /= 40;
	        deltaY /= 40;
	    }
	
	    // Get a whole, normalized value for the deltas
	    delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
	    deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
	    deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);
	
	    // Normalise offsetX and offsetY properties
	    if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
	        var boundingRect = this.getBoundingClientRect();
	        offsetX = event.clientX - boundingRect.left;
	        offsetY = event.clientY - boundingRect.top;
	    }
	
	    // Add information to the event object
	    event.deltaX = deltaX;
	    event.deltaY = deltaY;
	    event.deltaFactor = lowestDelta;
	    event.offsetX = offsetX;
	    event.offsetY = offsetY;
	    // Go ahead and set deltaMode to 0 since we converted to pixels
	    // Although this is a little odd since we overwrite the deltaX/Y
	    // properties with normalized deltas.
	    event.deltaMode = 0;
	
	    // Add event and delta to the front of the arguments
	    args.unshift(event, delta, deltaX, deltaY);
	
	    // Clearout lowestDelta after sometime to better
	    // handle multiple device types that give different
	    // a different lowestDelta
	    // Ex: trackpad = 3 and mouse wheel = 120
	    if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
	    nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);
	
	    return ($.event.dispatch || $.event.handle).apply(this, args);
	}
	
	function nullLowestDelta() {
	    lowestDelta = null;
	}
	
	function shouldAdjustOldDeltas(orgEvent, absDelta) {
	    // If this is an older event and the delta is divisable by 120,
	    // then we are assuming that the browser is treating this as an
	    // older mouse wheel event and that we should divide the deltas
	    // by 40 to try and get a more usable deltaFactor.
	    // Side note, this actually impacts the reported scroll distance
	    // in older browsers and can cause scrolling to be slower than native.
	    // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
	    return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
	}
	
	module.exports = special;


/***/ },

/***/ 213:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(214);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(41)(content, {});
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

/***/ 214:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports
	
	
	// module
	exports.push([module.id, ".clearfix {\n  *zoom: 1;\n}\n.clearfix:before,\n.clearfix:after {\n  display: table;\n  content: \"\";\n  line-height: 0;\n}\n.clearfix:after {\n  clear: both;\n}\n.hide-text {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.mr32 {\n  margin-right: 32px;\n}\n.upRow {\n  margin-bottom: 24px;\n}\n.icon-close {\n  display: inline-block;\n  vertical-align: middle;\n  width: 19px;\n  height: 19px;\n  background: url(" + __webpack_require__(215) + ");\n  position: relative;\n  z-index: 2;\n}\n.collegeName {\n  margin-right: 20px;\n}\n.actionContent {\n  margin-bottomp: 32px;\n}\n.actionContent .btn {\n  font-size: 18px;\n}\n.wux-divider {\n  height: 1px;\n  border-top: 1px solid #ddd;\n  text-align: center;\n  margin-top: 18px;\n  margin-bottom: 18px;\n  font-size: 16px;\n  line-height: 1;\n  color: #777;\n}\n.wux-divider span {\n  position: relative;\n  top: -8px;\n  background-color: #fff;\n  padding: 0 20px;\n}\n.downRow .btn {\n  border-radius: 3px;\n}\n.panelLists {\n  margin-top: 32px;\n  margin-right: -25px;\n}\n.s-major .col2 .selectWrap {\n  width: 312px;\n}\n.s-major .col2 .city label {\n  position: relative;\n}\n.s-major .col2 .city label input {\n  background: transparent;\n  border: 0;\n  position: absolute;\n  left: -100%;\n  width: 0;\n  height: 0;\n}\n.s-major .col2 .city label em {\n  max-width: none;\n}\n.no_wishList {\n  font-size: 18px;\n  color: #999;\n  padding-left: 24px;\n}\n.breadcrumb li {\n  width: 33.3%;\n}\n/* react默认样式覆盖 */\n.title a {\n  color: inherit;\n}\n.title a:hover {\n  color: inherit;\n}\n.p_assess {\n  margin-top: 24px;\n}\n.icon-location {\n  display: inline-block;\n  vertical-align: middle;\n  background-repeat: no-repeat;\n  width: 20px;\n  height: 21px;\n  background-image: url(" + __webpack_require__(38) + ");\n  background-position: 0 0;\n}\n.icon-book {\n  background-position: -20px 0;\n}\n.icon-list {\n  background-position: -40px 0;\n}\n.icon-fenshu {\n  background-position: -60px 0;\n}\n.icon-rank {\n  background-position: -80px 0;\n}\n.formWrap {\n  background-color: #fff;\n  padding: 28px 24px;\n  margin-bottom: 30px;\n}\n.formWrap .row .col2 {\n  margin-left: 160px;\n  width: 374px;\n}\n.formWrap .row .control-label {\n  font-size: 15px;\n  color: #444;\n}\n.formWrap .row .control-label em {\n  margin-left: 10px;\n}\n.modalBox .modalCntWrap .footerCnt {\n  margin-top: 0;\n}\n.m-select .bg {\n  margin-bottom: 20px;\n}\n.tagList {\n  position: relative;\n  margin-bottom: 30px;\n  width: 90px;\n  line-height: 32px;\n  background-color: #ededed;\n  color: #333;\n  text-align: center;\n  margin-right: 30px;\n  border: 1px solid #ccc;\n  float: left;\n}\n.tagList .icon-close {\n  position: absolute;\n  right: -10px;\n  top: -10px;\n  color: #fff;\n  text-align: center;\n  line-height: 20px;\n  cursor: pointer;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: #e71218;\n  z-index: 1;\n}\n.addMajor {\n  font-size: 16px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n.m-select .tagsWrap {\n  margin-top: 24px;\n}\n.s-Content {\n  padding: 12px 14px;\n}\n.s-Content .btn-search {\n  background-color: #1d718f;\n  border: none;\n  padding-left: 10px;\n  padding-right: 10px;\n  width: 41px;\n}\n.s-Content .inputWrap {\n  margin-right: 41px;\n}\n.s-Content .inputWrap .form-control {\n  border-radius: 0;\n}\n.s-Content .schoolLists {\n  margin-top: 8px;\n}\n.s-Content .schoolList {\n  line-height: 30px;\n  position: relative;\n  font-size: 14px;\n  padding-left: 10px;\n  color: #444;\n  -webkit-transition: background-color 0.4s, color 0.4s;\n          transition: background-color 0.4s, color 0.4s;\n  cursor: pointer;\n}\n.s-Content .schoolList .icon-check {\n  visibility: hidden;\n  margin-right: 4px;\n  vertical-align: middle;\n}\n.s-Content .schoolList.active,\n.s-Content .schoolList:hover {\n  color: #fff;\n  background-color: #61c0e2;\n}\n.s-Content .schoolList.active .icon-check,\n.s-Content .schoolList:hover .icon-check {\n  visibility: visible;\n}\n.s-Content .no_transList {\n  color: #333;\n  margin-top: 20px;\n}\n.ie8 .s-Content .schoolLists {\n  height: 310px;\n}\n.s-major {\n  padding: 14px 12px;\n}\n.s-major .col1 {\n  margin-right: 8px;\n}\n.s-major .col2 {\n  margin-right: 14px;\n}\n.s-major h4 {\n  color: #333;\n  font-size: 15px;\n  font-weight: normal;\n  margin-bottom: 10px;\n}\n.s-major .selectWrap {\n  width: 160px;\n  border: 1px solid #ccc;\n  cursor: pointer;\n  height: 300px;\n  padding: 5px 0;\n  background-color: #fff;\n}\n.s-major .selectWrap li {\n  color: #333;\n  line-height: 24px;\n  font-size: 14px;\n  padding-left: 10px;\n  height: 24px;\n}\n.s-major .selectWrap li:hover {\n  background-color: #ededed;\n}\n.s-major .prov li.current {\n  background-color: #ededed;\n}\n.s-major .scrollBeautifyBar {\n  background-color: #c1c1c1;\n  width: 8px;\n  border-radius: 4px;\n}\n.s-major .city.disabled {\n  background-color: #fff;\n}\n.s-major .city label {\n  cursor: pointer;\n  display: block;\n}\n.s-major .city label em,\n.s-major .city label input {\n  vertical-align: middle;\n}\n.s-major .city label em {\n  display: inline-block;\n  margin-left: 4px;\n  max-width: 120px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.s-major .tagList {\n  float: none;\n  margin-bottom: 16px;\n  margin-right: 0;\n  min-width: 90px;\n  max-width: 140px;\n  width: auto;\n  background-color: #f3f3f3;\n  line-height: 20px;\n  padding: 8px 0 8px 8px;\n  text-align: left;\n}\n.m-select .inputWrap {\n  display: inline-block;\n  width: 248px;\n  margin-right: 10px;\n}\n.m-select .inputWrap .clear {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 20px;\n  background-color: #aaa;\n  cursor: pointer;\n  top: 7px;\n  right: 13px;\n  color: #fff;\n  display: none;\n}\n.m-select .inputWrap .clear:hover {\n  background-color: #999;\n}\n.m-select .row.active .clear {\n  display: block;\n}\n.m-select .form-control {\n  width: 100%;\n}\npre {\n  display: none;\n}\n.formWrap .btnRow .btn {\n  margin-right: 30px;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 215:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/web/img/closeIcon.png"

/***/ },

/***/ 216:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '';
	with (obj) {
	__p += '<div class="modalCntWrap g9 modalForm sSchoolModal">\n <h3 class="clearfix"><a href="javascript:;" class="icons btn-close fr"></a><span class="fl">选择大学</span></h3>\n <form class="modalSubCnt" id="sSchoolForm" onsubmit="return false;">\n  \n  <div class="s-Content">\n    <div class="input-group clearfix rel">\n      <span class="input-group-btn fr" id="searchBtn">\n        <button class="btn btn-default btn-search" type="button" id="sBtn">\n          <i class="iconList icon-search"></i>\n        </button>\n      </span>\n      <div class="inputWrap">\n         <input type="text" class="form-control fl" placeholder="请输入关键字搜索" id="wd">\n      </div>\n     \n    </div>\n\n    <ul class="schoolLists">\n     \n    </ul>\n\n</div>\n\n</form>\n</div>';
	
	}
	return __p
	}

/***/ },

/***/ 217:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	__p += ' ';
	 if (colleges.length == 0 && page == 1) { ;
	__p += '\n	<li class="no_transList"><i class="noListIcon"></i><em class="vm">暂时搜索不到数据</em></li>\n';
	 }else{ ;
	__p += '\n	';
	 for (var i = 0; i < colleges.length; i++) { ;
	__p += '\n	 	<li class="schoolList" code="' +
	((__t = ( colleges[i].collegeId )) == null ? '' : __t) +
	'" name="' +
	((__t = ( colleges[i].collegeName )) == null ? '' : __t) +
	'"><em class="icon-check"></em><em class="vm">' +
	((__t = ( colleges[i].collegeName )) == null ? '' : __t) +
	'</em></li>\n ';
	 }} ;
	
	
	}
	return __p
	}

/***/ },

/***/ 218:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '';
	with (obj) {
	__p += '<div class="modalCntWrap g9 modalForm">\n <h3 class="clearfix"><a href="javascript:;" class="icons btn-close fr"></a><span class="fl">专业选择</span></h3>\n <form action="javascript:;" onsubmit="return false" autocomplete="off" id="majorForm" class="rel">\n            \n    <div class="selectContent s-major clearfix" id="majorContainer">\n      <div class="column col1 fl">\n        <h4>专业门类</h4>\n        <div class="selectWrap">\n          <ul class="prov">\n            \n          </ul>\n        </div>\n      </div>\n      <div class="column col2 fl">\n        <h4>专业</h4>\n        <div class="selectWrap">\n          <ul class="city">\n        </ul>\n        </div>\n      </div>\n      \n    </div>\n            \n    <div class="footerCnt tc">\n      <p id="errTxt" class="errTxt"></p>\n      <div class="row btnRow">\n            <button type="submit" class="btn btn-positive btn-form" id="majorBtn">\n                <em class="subTxt">保存</em>\n            </button>\n          </div>\n    </div>\n\n  </form>\n</div>';
	
	}
	return __p
	}

/***/ },

/***/ 219:
/***/ function(module, exports) {

	module.exports = [
		{"level": "1", "code": 3, "name": "哲学"},
		{"level": "1", "code": 4, "name": "经济学"}, 
		{"level": "1", "code": 5, "name": "法学"}, 
		{"level": "1", "code": 6, "name": "教育学"}, 
		{"level": "1", "code": 7, "name": "文学"}, {"level": "1", "code": 8, "name": "历史学"}, {"level": "1", "code": 9, "name": "理学"}, {"level": "1", "code": 10, "name": "工学"}, {"level": "1", "code": 11, "name": "农学"}, {"level": "1", "code": 12, "name": "医学"}, {"level": "1", "code": 13, "name": "管理学"}, {"level": "2", "code": 14, "name": "农林牧渔"}, {"level": "2", "code": 15, "name": "交通运输"}, {"level": "2", "code": 16, "name": "生化与药品"}, {"level": "2", "code": 17, "name": "能源开发与测绘"}, {"level": "2", "code": 18, "name": "材料与能源"}, {"level": "2", "code": 19, "name": "土建"}, {"level": "2", "code": 20, "name": "水利"}, {"level": "2", "code": 21, "name": "制造"}, {"level": "2", "code": 22, "name": "电子信息"}, {"level": "2", "code": 23, "name": "环保、气象与安全"}, {"level": "2", "code": 24, "name": "轻纺食品"}, {"level": "2", "code": 25, "name": "财经"}, {"level": "2", "code": 26, "name": "医药卫生"}, {"level": "2", "code": 27, "name": "旅游"}, {"level": "2", "code": 28, "name": "公共事业"}, {"level": "2", "code": 29, "name": "文化教育"}, {"level": "2", "code": 30, "name": "艺术设计传媒"}, {"level": "2", "code": 31, "name": "公安"}, 
		{"level": "2", "code": 32, "name": "法律"}
	
	];

/***/ },

/***/ 220:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	__p += ' ';
	 if (wishes.length == 0) { ;
	__p += '\n	<div class="no_wishList">\n		请使用上方控件选择学校和专业，录入志愿信息\n	</div>\n';
	 }else{ ;
	__p += '\n<div class="panelLists clearfix">\n	';
	 for (var i = 0; i < wishes.length; i++) { ;
	__p += '\n		<div class="panel" collegename="' +
	((__t = ( wishes[i].collegeName )) == null ? '' : __t) +
	'" collegeid="' +
	((__t = ( wishes[i].collegeId )) == null ? '' : __t) +
	'" majorname="' +
	((__t = ( wishes[i].majorName )) == null ? '' : __t) +
	'" majorid="' +
	((__t = ( wishes[i].majorId )) == null ? '' : __t) +
	'" >\n			<div class="panel-hd">\n				<i class="icon icon-close fr panel-close"></i>\n				<div class="collegeName">' +
	((__t = ( wishes[i].collegeName )) == null ? '' : __t) +
	'</div>\n			</div>\n			<div class="panel-bd">\n				' +
	((__t = ( wishes[i].majorName )) == null ? '' : __t);
	 if(wishes[i].field) { ;
	__p += '\n		 			  (' +
	((__t = ( wishes[i].field )) == null ? '' : __t) +
	'方向)\n		 		';
	 } ;
	__p += '\n			</div>\n		</div>\n	';
	 } ;
	__p += '\n</div>\n';
	 } ;
	
	
	}
	return __p
	}

/***/ },

/***/ 221:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	__p += ' ';
	 if (majorList.length == 0) { ;
	__p += '\n	<li>暂无该专业数据</li>\n';
	 }else{ ;
	__p += '\n	';
	 for (var i = 0; i < majorList.length; i++) { ;
	__p += '\n	 	<li>\n		 	<label for="major_' +
	((__t = ( majorList[i].majorId )) == null ? '' : __t) +
	'" >\n		 		<input type="radio" name="city" n="' +
	((__t = ( majorList[i].majorName )) == null ? '' : __t) +
	'" value="' +
	((__t = ( majorList[i].majorId )) == null ? '' : __t) +
	'" id="major_' +
	((__t = ( majorList[i].majorId )) == null ? '' : __t) +
	'" field="' +
	((__t = ( majorList[i].field )) == null ? '' : __t) +
	'" />\n		 		<em>' +
	((__t = ( majorList[i].majorName )) == null ? '' : __t) +
	'\n		 			';
	 if(majorList[i].field) { ;
	__p += '\n		 			  (' +
	((__t = ( majorList[i].field )) == null ? '' : __t) +
	'方向)\n		 			';
	 } ;
	__p += '\n		 		</em>\n		 	</label>\n		</li>\n ';
	 }} ;
	
	
	}
	return __p
	}

/***/ },

/***/ 222:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	__p += ' ';
	 if (wishes.length == 0) { ;
	__p += '\n	<span class="divider-content">已填志愿（ ' +
	((__t = ( wishes.length )) == null ? '' : __t) +
	'/80）</span>\n';
	 }else{ ;
	__p += '\n	<span class="divider-content">已填志愿（ ' +
	((__t = ( wishes.length )) == null ? '' : __t) +
	'/80）</span>\n ';
	 } ;
	
	
	}
	return __p
	}

/***/ }

});
//# sourceMappingURL=evaluateStep2.js.map