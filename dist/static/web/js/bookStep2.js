webpackJsonp([7],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(16);
	__webpack_require__(131);
	var $ = window.$ || __webpack_require__(38);
	
	//工具类方法
	var util = __webpack_require__(39);
	
	//公共方法
	var common = __webpack_require__(40);
	
	
	//自定义功能写下面
	//弹窗模板
	var tmpl_detail = __webpack_require__(129);
	var tmpl_questions = __webpack_require__(130);
	
	//自定义滚动插件
	var scroll = __webpack_require__(133);
	
	//数据绑定
	var dataSet = __webpack_require__(137);
	
	//详情弹窗
	$("[data-trigger]").on("click",function(e){
	    e.preventDefault();
	    var btn = $(e.target).closest(".trigger");
	    var tmpl = btn.data("trigger") == "detail" ? tmpl_detail : tmpl_questions;
	
	    modalBox( btn.get(0), {
	          html:tmpl(),
	          klass : 'w540 shadow',
	          closeByOverlay : false,
	          completeCallback : function(){ 
	            
	          }
	      });
	});
	
	
	//将原有的数据传入
	dataSet.init({
		klass : "current",
		url : "/system/city",
		startCallback : function(){
			var self = this;
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
	
		}
	});
	


/***/ },

/***/ 131:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 133:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(134);
	
	var $ = window.$ || __webpack_require__(38);
	var extend =  __webpack_require__(43);
	
	//mousewheel
	__webpack_require__(136);
	
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

/***/ 134:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 136:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(38);
	
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

/***/ 137:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(38);
	var extend =  __webpack_require__(43);
	var provList = __webpack_require__(138);
	
	var provinceId = $("[name=province]").val();
	
	var dataSet = {
	
	    render : function () {
	        var that = this;
	
	        //省列表
	        if(that.state.provList.length){
	            var provLis = $.map(that.state.provList,function(item){
	                return '<li data-code="'+item.code+'">'+item.name+'</li>';
	            });
	        }
	
	        if(!$(".prov").children().length){
	            $(".prov").html(provLis);
	            that.options.startCallback && that.options.startCallback.call(that);
	        }
	
	        //城市列表
	        if(that.state.cityList.length){
	            var cityLis = $.map(that.state.cityList,function(city){
	                if(city.status == 1){
	                    return '<li><label><input type="checkbox" checked="true" name="city" n="'+city["name"]+'" value="'+city["code"]+'" ><em>'+city["name"]+'</em></label></li>';
	                }else{
	                    return '<li><label><input type="checkbox" name="city" n="'+city["name"]+'" value="'+city["code"]+'" ><em>'+city["name"]+'</em></label></li>';
	                }
	            });
	
	            $(".city").html(cityLis);
	            that.options.completeCallback && that.options.completeCallback.call(that);
	        }
	        
	        //选中城市列表
	        var lis = [];
	        if(!that.state.selected.length){
	            lis.push('<li class="noList">动动手指，在左边选择求学地区吧！</li>');
	            //$(".btn-positive").addClass("disabled");
	        }else{
	            lis = $.map(that.state.selected,function (item) {
	                return '<li class="tagList" data-n="'+item.n+'" data-code="'+item.code+'"><span class="icon-close">X</span><span class="tagContent">' +item.n+ '</span></li>';
	            });
	            if($(".btn-positive").hasClass("disabled")){
	                $(".btn-positive").removeClass("disabled"); 
	            }
	        }
	        
	
	       $('#tagsWrap').html(lis.join('')); 
	    },
	
	
	    updateUI : function(loading) {
	        //if (!loading) saveState();
	       this.render(); 
	    },
	
	
	     init : function(o){
	        this.state = {
	            provList : provList,
	            cityList:  [],
	            selected : []
	        };
	
	        this.options = o;
	        this.prov = $( '.prov' );
	        this.city = $( '.city' );
	        
	        //默认省索引为0
	        this.provIndex = 0;
	        //缓存
	        this.cityDataCache = {};
	
	        this.bindEvt();
	        this.updateUI();
	
	    },
	
	    requestData : function(val){
	        var that = this,o = that.options;
	
	        if(that.cityDataCache[val]){
	            that.state.cityList = that.cityDataCache[val];
	            that.updateUI();
	            return;
	        }
	
	        $.ajax({
	            url : o.url,
	            type : "post",
	            contentType: "application/json",
	            data : JSON.stringify({provinceId:val}),
	            success : function(res){
	                if(typeof res =="string"){
	                    var res = $.parseJSON(res);
	                }
	
	                if(res.code!=1){
	                    warn(res.msg);
	                    return;
	                }
	
	                 var res = res.result;
	                
	                if(!that.cityDataCache[val]){
	                    that.cityDataCache[val] = res.c;
	                }
	
	                $.each(res.c,function(idx,ele){
	                    ele.status = 0;
	                });
	
	                that.state.cityList = res.c;
	                that.updateUI();
	
	            },
	            error : function(err){
	                console.log(err);
	            }
	        });
	    },
	
	    bindEvt : function(){
	        var that = this,o = that.options;
	
	        // 选择省份时发生事件
	        this.prov.on("click","li",function(){
	            that.provIndex = that.prov.find("li").index($(this));
	            $(this).siblings().removeClass(o.klass);
	            $(this).addClass(o.klass);
	
	            that.city.empty();
	            that.requestData.call(that,$(this).data("code"));
	        });
	
	        $(document).on('click', '.icon-close', function (e) {
	
	            var $li = $(this).closest(".tagList");
	            var val = $li.data("code"),n = $li.data("n");
	                
	            var ele = {
	                n : n,
	                code : val
	            };
	
	
	           $.each(that.state.selected,function(idx,item){
	                if(ele.code == item.code){
	                    that.state.selected.splice(idx,1);
	                    return false;
	                }
	           });
	
	           $.each(that.state.cityList,function(idx,item){
	                if(ele.code == item.code){
	                    that.state.cityList[idx].status = 0;
	                     return false;
	                }
	            });
	
	            
	            that.updateUI();
	        });
	
	        $(document).on("change","[name=city]",function(e){
	         
	          var ele = this,$ele = $(this);
	
	          if($ele.prop("checked")){
	            var eleObj = {
	                p : $(ele).attr("p"),
	                n : $(ele).attr("n"),
	                code : ele.value
	            };
	           
	            that.state.selected.push(eleObj);
	
	            $.each(that.state.cityList,function(idx,item){
	                if(eleObj.code == item.code){
	                    that.state.cityList[idx].status = 1;
	                     return false;
	                }
	            });
	
	          }else{
	            var eleObj = {
	                n : $(ele).attr("n"),
	                code : ele.value
	            };
	
	            $.each(that.state.selected,function(idx,item){
	                if(eleObj.code == item.code){
	                    that.state.selected.splice(idx,1);
	                     return false;
	                }
	            });
	
	
	            $.each(that.state.cityList,function(idx,item){
	                if(eleObj.code == item.code){
	                    that.state.cityList[idx].status = 0;
	                     return false;
	                }
	            });
	
	          }
	
	          that.updateUI();
	        });
	
	        $("#next").on("click",function(e){
	            e.preventDefault();
	            var btn = $(e.target).closest(".btn");
	            if(btn.hasClass("disabled")) return;
	            btn.addClass("disabled");
	
	            that.submitForm.call(that,btn,$("#caseForm"));
	        });
	    },
	
	    submitForm : function(btn,oForm){
	        var that = this;
	
	        var c = $.map($("#tagsWrap .tagList"),function(el,idx){
	            return {
	                "name" : $(el).data("n"),
	                "code" : $(el).data("code")
	            };
	        });
	
	        var _data = {
	            c : c
	        };
	
	        $.ajax({
	            url : preServer+provinceId+"/tzy/plan/wishes/step2",
	            type : "post",
	            contentType: "application/json",
	            data : JSON.stringify(_data),
	            success : function(res){
	                if(typeof res == "string"){
	                    var res = $.parseJSON(res);
	                }
	
	                if(res.code==1){
	                    window.location = "/box/plan/book_step3";
	                    return false;
	                }else{
	                    warn(res.msg);
	                    btn.removeClass("disabled");
	                    return false;
	                }
	            },
	            error : function(err){
	                btn.removeClass("disabled");
	                console.log(err);
	            }
	        })
	
	    }
	};
	
	module.exports = dataSet;
	


/***/ },

/***/ 138:
/***/ function(module, exports) {

	module.exports = [
	{
		"code": "330000",
		"name": "浙江省"
	},{
		"code": "340000",
		"name": "安徽省"
	}, {
		"code": "350000",
		"name": "福建省"
	}, {
		"code": "360000",
		"name": "江西省"
	}, {
		"code": "370000",
		"name": "山东省"
	}, {
		"code": "410000",
		"name": "河南省"
	}, {
		"code": "420000",
		"name": "湖北省"
	}, {
		"code": "430000",
		"name": "湖南省"
	}, {
		"code": "440000",
		"name": "广东省"
	}, {
		"code": "110000",
		"name": "北京市"
	}, {
		"code": "120000",
		"name": "天津市"
	}, {
		"code": "450000",
		"name": "广西壮族自治区"
	}, {
		"code": "460000",
		"name": "海南省"
	}, {
		"code": "140000",
		"name": "山西省"
	}, {
		"code": "500000",
		"name": "重庆市"
	}, {
		"code": "510000",
		"name": "四川省"
	}, {
		"code": "520000",
		"name": "贵州省"
	}, {
		"code": "530000",
		"name": "云南省"
	}, {
		"code": "540000",
		"name": "西藏自治区"
	}, {
		"code": "610000",
		"name": "陕西省"
	}, {
		"code": "620000",
		"name": "甘肃省"
	}, {
		"code": "630000",
		"name": "青海省"
	}, {
		"code": "640000",
		"name": "宁夏回族自治区"
	}, {
		"code": "650000",
		"name": "新疆维吾尔自治区"
	}, {
		"code": "150000",
		"name": "内蒙古自治区"
	}, {
		"code": "130000",
		"name": "河北省"
	}, {
		"code": "210000",
		"name": "辽宁省"
	}, {
		"code": "220000",
		"name": "吉林省"
	}, {
		"code": "230000",
		"name": "黑龙江省"
	}, {
		"code": "310000",
		"name": "上海市"
	}, {
		"code": "320000",
		"name": "江苏省"
	}];

/***/ }

});
//# sourceMappingURL=bookStep2.js.map