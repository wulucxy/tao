webpackJsonp([17],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(14);
	__webpack_require__(158);
	var $ = window.$ || __webpack_require__(36);
	
	//工具类方法
	var util = __webpack_require__(37);
	
	//公共方法
	var common = __webpack_require__(38);
	
	/* 具体实现 */
	
	// 表单验证组件
	__webpack_require__(53);
	
	var extend =  __webpack_require__(41);
	
	//弹窗模板
	var tmpl_detail = __webpack_require__(114);
	var tmpl_questions = __webpack_require__(115);
	
	//弹窗模板
	var tmpl_school = __webpack_require__(160);
	var tmpl_list = __webpack_require__(161);
	var tmpl_major = __webpack_require__(162);
	var majors = __webpack_require__(163);
	
	//provinceId
	var provinceId = $("[name=province]").val();
	
	//分页
	var pagination = __webpack_require__(164);
	//自定义滚动
	var scroll = __webpack_require__(118);
	
	
	var school = {
	
	  init : function(o){
	
	      this.bindEvt();
	
	      this.pager = 1;
	      
	      this.options = o;
	
	      this.state = {
	        "provList" : majors,
	        "cityList" : [
	          {
	            "type" : 1,
	            "list" : []
	          },
	          {
	            "type" : 2,
	            "list" : []
	          },
	          {
	            "type" : 3,
	            "list" : []
	          },
	          {
	            "type" : 4,
	            "list" : []
	          },
	          {
	            "type" : 5,
	            "list" : []
	          }
	        ],
	        "selected" :  $.parseJSON($("[name=selected]").text()),
	        "zhiyuanList" : $.parseJSON($("[name=zhiyuanList]").text())
	        
	      };
	
	      this.render();
	  },
	
	  render : function(type){
	    var that = this, o = that.options;
	
	      //渲染选中的大学，并激活右侧是否可添加专业
	      $.each(that.state.zhiyuanList,function(idx,item){
	          if(item.code && item.name){
	            //显示选中的大学
	            $("[major="+item.type+"]").val(item.name);
	            //选中大学的id
	            $("[major="+item.type+"]").attr("code",item.code);
	            $("[data-rel="+item.type+"]").removeClass("disabled");
	            $("[major="+item.type+"]").closest(".row").addClass("active");
	          }else{
	            //清除选中的大学
	            $("[major="+item.type+"]").val("");
	            //清除code
	            $("[major="+item.type+"]").attr("code","");
	
	            $("[data-rel="+item.type+"]").addClass("disabled");
	            $("[major="+item.type+"]").closest(".row").removeClass("active");
	          }
	
	          //增加回调方法
	          o.schoolSelectedCallback && o.schoolSelectedCallback.call(that,$("[major="+item.type+"]"));
	
	      });
	
	      //省列表
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
	      if($(".city").length && that.state.cityList[that.modal.majorType-1].list){
	        var cityLis = $.map(that.state.cityList[that.modal.majorType-1].list,function(city){
	            if(city.status == 1){
	                return '<li><label><input type="checkbox" checked="true" name="city" n="'+city["name"]+'" value="'+city["code"]+'" ><em>'+city["name"]+'</em></label></li>';
	            }else{
	                return '<li><label><input type="checkbox" name="city" n="'+city["name"]+'" value="'+city["code"]+'" ><em>'+city["name"]+'</em></label></li>';
	            }
	        });
	
	        $(".city").html(cityLis);
	        that.options.completeCallback && that.options.completeCallback.call(that);
	    }
	
	      //选中城市列表(弹窗)
	      var lis = [];
	      if($(".city").length && !that.state.selected[that.modal.majorType-1].list.length){
	          lis.push('<li class="noList"></li>');
	          $(".btn-positive").addClass("disabled");
	          $('#tagsWrap').html(lis.join('')); 
	      }else if($(".city").length && that.state.selected[that.modal.majorType-1].list){
	          lis = $.map(that.state.selected[that.modal.majorType-1].list,function (item) {
	              return '<li class="tagList" data-name="'+item.name+'" data-code="'+item.code+'"><span class="icon-close">X</span><span class="tagContent">' +item.name+ '</span></li>';
	          });
	          if($(".btn-positive").hasClass("disabled")){
	            $(".btn-positive").removeClass("disabled"); 
	          }
	          if(that.state.selected[that.modal.majorType-1].list.length>=6){
	            $("[name=city]").attr("disabled",true);
	          }else{
	            $("[name=city]").attr("disabled",false);
	          }
	          $('#tagsWrap').html(lis.join('')); 
	      }
	      
	      //当前页面展示的选中专业（单项）
	      if(typeof type != "undefined" && that.state.selected[type].list){
	        var lis = $.map(that.state.selected[type].list,function (item) {
	            return '<li class="tagList" data-name="'+item.name+'" data-code="'+item.code+'"><span class="icon-close">X</span><span class="tagContent">' +item.name+ '</span></li>';
	        });
	
	        $("[major="+(type+1)+"]").closest(".m-select").find(".tagsWrap").html(lis.join(""));
	        $("[major="+(type+1)+"]").closest(".m-select").find(".count").text(lis.length);
	      }else{
	        //全部渲染（全页面）
	        var _lis = [];
	        $.each(that.state.selected,function(idx,item){
	          if(item.list.length){
	            _lis = $.map(item.list,function(l){
	              return '<li class="tagList" data-name="'+l.name+'" data-code="'+l.code+'"><span class="icon-close">X</span><span class="tagContent">' +l.name+ '</span></li>';
	            });
	
	            if(that.state.zhiyuanList[idx].name && that.state.zhiyuanList[idx].name){
	              $("[major="+(idx+1)+"]").closest(".m-select").find(".tagsWrap").html(_lis.join(""));
	              $("[major="+(idx+1)+"]").closest(".m-select").find(".count").text(_lis.length);
	            }
	            _lis = [];
	          }
	        });
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
	
	    $(document).off().on("change","[name=city]",function(e){
	         
	        var ele = this,$ele = $(this);
	
	        if($ele.prop("checked")){
	          var eleObj = {
	              p : $(ele).attr("p"),
	              name : $(ele).attr("n"),
	              code : ele.value
	          };
	
	          //保存到当前志愿list列表中
	          that.state.selected[that.modal.majorType-1].list.push(eleObj);
	
	          //分志愿类型处理，将当前志愿选中项列出来
	          $.each(that.state.cityList[that.modal.majorType-1].list,function(idx,item){
	              if(eleObj.code == item.code){
	                  that.state.cityList[that.modal.majorType-1].list[idx].status = 1;
	                   return false;
	              }
	          });
	
	        }else{
	          var eleObj = {
	              name : $(ele).attr("n"),
	              code : ele.value
	          };
	
	          //去除选择项
	          $.each(that.state.selected[that.modal.majorType-1].list,function(idx,item){
	              if(eleObj.code == item.code){
	                  that.state.selected[that.modal.majorType-1].list.splice(idx,1);
	                   return false;
	              }
	          });
	
	
	          $.each(that.state.cityList[that.modal.majorType-1].list,function(idx,item){
	              if(eleObj.code == item.code){
	                  that.state.cityList[that.modal.majorType-1].list[idx].status = 0;
	                   return false;
	              }
	          });
	
	        }
	
	        that.render();
	    });
	
	    $(".s-major").off().on('click', '.icon-close', function (e) {
	
	        var $li = $(this).closest(".tagList");
	        var val = $li.data("code"),n = $li.data("name");
	            
	        var ele = {
	            name : n,
	            code : val
	        };
	
	       $.each(that.state.selected[that.modal.majorType-1].list,function(idx,item){
	            if(ele.code == item.code){
	                that.state.selected[that.modal.majorType-1].list.splice(idx,1);
	                return false;
	            }
	       });
	
	       $.each(that.state.cityList[that.modal.majorType-1].list,function(idx,item){
	            if(ele.code == item.code){
	                that.state.cityList[that.modal.majorType-1].list[idx].status = 0;
	                 return false;
	            }
	        });
	
	        
	        that.render();
	    });
	
	  },
	
	  requestCityData : function(val){
	    var that = this,o = that.options;
	
	    var collegeId = that.modal.majorType;
	
	    $.ajax({
	        url : "/v2/client/"+provinceId+"/data/college/"+collegeId+"/majors",
	        type : "post",
	        contentType: "application/json",
	        data : JSON.stringify({majorId:val}),
	        success : function(res){
	            if(typeof res =="string"){
	                var res = $.parseJSON(res);
	            }
	            
	            //默认未选中
	            $.each(res.c,function(idx,ele){
	                ele.status = 0;
	            });
	
	            that.state.cityList[that.modal.majorType-1].list = res.c;
	
	            //添加已选中的单元
	            $.each(that.state.selected,function(idx,ele){
	               //当前模块索引
	               if(that.modal.majorType-1 == idx){
	                  $.each(that.state.cityList[that.modal.majorType-1].list,function(idx2,ele2){
	                    $.each(ele.list,function(idx3,ele3){
	                      if(ele2.name == ele3.name && ele2.code == ele3.code){
	                        ele2.status = 1;
	                        return false;
	                      }
	                    });
	                    
	                  });
	               }
	            });
	
	            
	            that.render();
	
	        },
	        error : function(err){
	            console.log(err);
	        }
	    });
	  },
	
	  renderList : function(res){
	    var that = this;
	    var modal = that.modal;
	
	    $('.schoolLists').empty().append(tmpl_list(res)).hide().fadeIn();
	
	  },
	
	  detailpagination : function(res){
	    var that = this;
	    var modal = that.modal;
	    if(!modal.find('.pagination').length){
	       modal.find('.s-Content').append('<div class="pagination"></div>');
	          var $page = modal.find(".pagination");
	          pagination($page,{
	            pages: res.count,
	            displayedPages: 3,
	            currentPage : 1,
	            edges: 1,
	            onPageClick : function(pageNo){
	              that.requestData(pageNo);
	            }
	          });
	     }    
	  },
	
	  updateRes : function(btn){
	    var that = this;
	    btn.find(".count").text(that.state.selected[that.modal.majorType-1].list.length);
	    var lis = $.map(that.state.selected[that.modal.majorType-1].list,function (item) {
	        return '<li class="tagList" data-name="'+item.name+'" data-code="'+item.code+'"><span class="icon-close">X</span><span class="tagContent">' +item.name+ '</span></li>';
	    });
	    btn.closest(".m-select").find(".tagsWrap").empty().html(lis.join(""));
	  },
	
	  updateTags : function(btn){
	    var that = this;
	    var type = btn.data("rel") - 1;
	    $(".showTagList").off().on("click",".icon-close",function(e){
	
	      e.preventDefault();
	      var $li = $(this).closest(".tagList");
	      var code = $li.data("code"),name = $li.data("name");
	          
	      var ele = {
	          name : name,
	          code : code
	      };
	
	     $.each(that.state.selected[type].list,function(idx,item){
	          if(ele.code == item.code){
	              that.state.selected[type].list.splice(idx,1);
	              return false;
	          }
	     });
	
	     $.each(that.state.cityList[type].list,function(idx,item){
	          if(ele.code == item.code){
	              that.state.cityList[type].list[idx].status = 0;
	               return false;
	          }
	      });
	
	      
	      that.render(type);
	
	    });
	
	  },
	
	
	  requestData : function(pager){
	    var that = this;
	    $.ajax({
	      url : "/v2/client/"+provinceId+"/data/college/search",
	      type : "post",
	      contentType: "application/json",
	      data : JSON.stringify({page:pager,"keyword":$.trim($("#wd").val())}),
	      success : function(res){
	        if(typeof res == "string"){
	          var res = $.parseJSON(res);
	        }
	
	        that.renderList(res);
	        that.detailpagination(res);
	        that.Evt();
	      }
	    });
	  },
	
	  Evt : function(){
	    var that = this;
	
	
	    $(document).off().on("click",".schoolList",function(e){
	      e.preventDefault();
	      var $this = $(this);
	      $this.siblings().removeClass("active");
	      $this.addClass("active");
	
	      //清空选中cityList和selectedlist
	      that.state.selected[that.modal.majorType-1].list = [];
	      that.state.cityList[that.modal.majorType-1].list = [];
	
	      $.each(that.state.zhiyuanList,function(idx,ele){
	        if(that.modal.majorType == ele.type){
	          //保存志愿信息
	          that.state.zhiyuanList[idx].name = $this.attr("name");
	          that.state.zhiyuanList[idx].code = $this.attr("code");
	        }
	      });
	
	      $(".btn-close").trigger("click");
	      that.render(that.modal.majorType-1);
	    })
	  },
	
	  bindEvt : function(){
	    var that = this;
	    //切换顶部nav高亮
	    common.switchNav(1);
	
	    //checkbox定制
	    $('.label_radio').click(function(){
	      util.setupLabel();
	    });
	
	    util.setupLabel();
	
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
	
	
	    $(".addSchool").on("focusin",function(e){
	      e.preventDefault();
	      var oInput = $(e.target);
	      if(oInput.hasClass("cur")) return;
	      oInput.addClass("cur");
	
	      modalBox(oInput,{
	        html : tmpl_school(),
	        klass : 'w540 shadow',
	        closeByOverlay : false,
	        startCallback : function(modal){
	          //指向
	          that.modal = modal;
	          that.modal.ref = this;
	
	          modal.majorType = oInput.attr("major");
	          that.requestData(that.pager);
	          
	        },
	        completeCallback : function(){
	          var self = oInput; 
	          var oInput = $("#wd");
	          $("#sBtn").on("click",function(e){
	            e.preventDefault();
	            if($.trim(oInput.val()) == ""){
	              warn("请输入搜索关键词");
	              return false;
	            }
	
	            that.requestData(that.pager);
	
	
	          })
	          
	        },
	        closeCallback : function(){
	          oInput.removeClass("cur");
	        }
	      });
	
	    });
	
	    $(".addMajor").on("click",function(e){
	      e.preventDefault();
	      var btn = $(e.target).closest(".btn");
	      if(btn.hasClass("disabled")) return;
	
	      modalBox(btn,{
	        html : tmpl_major(),
	        klass : 'w540 shadow',
	        closeByOverlay : false,
	        startCallback : function(modal){
	          that.modal = modal;
	          modal.majorType = btn.data("rel");
	
	          that.render();
	        },
	
	        completeCallback : function(){
	          $("#majorBtn").on("click",function(e){
	            e.preventDefault();
	
	            if(that.state.selected.length > 6){
	              warn("请重新选择选项");
	              return;
	            }
	
	            $(".btn-close").trigger("click");
	            that.updateRes(btn);
	            that.updateTags(btn);
	          });
	        }
	      });
	
	    });
	
	    //清理选中的学校
	    $(".row .clear").on("click",function(e){
	      e.preventDefault();
	      var type = $(this).siblings(".input").attr("major");
	      
	      //清空选中cityList和selectedlist
	      that.state.selected[type-1].list = [];
	      that.state.cityList[type-1].list = [];
	
	      //清除zhiyuanList数据
	      that.state.zhiyuanList[type-1].name = "";
	      that.state.zhiyuanList[type-1].code = "";
	
	      that.render(type-1);
	
	    });
	  }
	};
	
	school.init({
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

/***/ 118:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(119);
	
	var $ = window.$ || __webpack_require__(36);
	var extend =  __webpack_require__(41);
	
	//mousewheel
	__webpack_require__(121);
	
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

/***/ 119:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 121:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(36);
	
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

/***/ 158:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 160:
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

/***/ 161:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	__p += ' ';
	 if (colleges.length == 0) { ;
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

/***/ 162:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '';
	with (obj) {
	__p += '<div class="modalCntWrap g9 modalForm">\n <h3 class="clearfix"><a href="javascript:;" class="icons btn-close fr"></a><span class="fl">专业选择</span></h3>\n <form action="javascript:;" onsubmit="return false" autocomplete="off" id="majorForm" class="rel">\n            \n    <div class="selectContent s-major clearfix" id="majorContainer">\n      <div class="column col1 fl">\n        <h4>专业门类</h4>\n        <div class="selectWrap">\n          <ul class="prov">\n            \n          </ul>\n        </div>\n      </div>\n      <div class="column col2 fl">\n        <h4>专业</h4>\n        <div class="selectWrap">\n          <ul class="city">\n        </ul>\n        </div>\n      </div>\n      <div class="column col3 fl">\n        <h4>已选</h4>\n        <ul class="tagsWrap clearfix" id="tagsWrap">\n        </ul>\n      </div>\n\n    </div>\n            \n    <div class="footerCnt tc">\n      <p id="errTxt" class="errTxt"></p>\n      <div class="row btnRow">\n            <button type="submit" class="btn btn-positive btn-form" id="majorBtn">\n                <em class="subTxt">保存</em>\n            </button>\n          </div>\n    </div>\n\n  </form>\n</div>';
	
	}
	return __p
	}

/***/ },

/***/ 163:
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

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(36);
	var extend =  __webpack_require__(41);
	
	  function Plugin(t,o){
			this.target=t;
			this.options=o;
		    this.pages = o.pages ? o.pages : Math.ceil(o.items / o.itemsOnPage);  //总页数
			this.currentPage = o.currentPage - 1;                                 //当前页，默认为0
			o.halfDisplayed = o.displayedPages / 2;                               //活动页的一半
			this.init(this.options);
	  }
	 
	  Plugin.prototype = {
	
	  	destroy : function(){
	  	  this.target.empty();
	  	},
	
	  	draw : function(){
	  	  var that = this,o = that.options;
	  	  that.destroy();
	  	  that.interval = that._getInterval();
	  	  that.panel = that.target;
	  	  if (o.prevText) {			
			that._appendItem(that.currentPage - 1, {text: o.prevText, classes: 'prev'});
		  }
	
		  if (that.interval.start > 0 && o.edges > 0) {				// 边缘按钮
			var end = Math.min(o.edges, that.interval.start);
			for (i = 0; i < end; i++) {                            // left
				that._appendItem(i);
			}
			
			if (o.edges < that.interval.start && (that.interval.start - o.edges != 1)) {     //区分是否可点击中间按钮
				that.panel.append('<span class="ellipse disabled">' + o.ellipseText + '</span>');
			} else if (that.interval.start - o.edges == 1) {
				that._appendItem(o.edges);
			}
		 }
	
		for (i = that.interval.start; i < that.interval.end; i++) {      // Generate interval links
			that._appendItem(i);
		}
	
		if (that.interval.end < o.pages && o.edges > 0) {                    // Generate end edges
			if (o.pages - o.edges > that.interval.end && (o.pages - o.edges - that.interval.end != 1)) {
				that.panel.append('<span class="ellipse disabled">' + o.ellipseText + '</span>');
			} else if (o.pages - o.edges - that.interval.end == 1) {
				that._appendItem(that.interval.end++);
			}
			var begin = Math.max(o.pages - o.edges, that.interval.end);   //从end往后
			for (i = begin; i < o.pages; i++) {
				that._appendItem(i);
			}
		}
	
		if (o.nextText) {
			that._appendItem(this.currentPage + 1, {text: o.nextText, classes: 'next'});
		}
	
	  	},
	
	  	_appendItem: function(pageIndex, opts) {
	  		var that = this,o = that.options,$link;
			pageIndex = pageIndex < 0 ? 0 : (pageIndex < this.pages ? pageIndex : this.pages - 1);
			var options = $.extend({
				text: pageIndex + 1,
				classes: ''
			}, opts);
	
			if (pageIndex == that.currentPage) {
				$link = $('<span class="currentPage">' + (options.text) + '</span>');
			} else {
				$link = $('<a href="' + o.hrefTextPrefix + (pageIndex + 1) + '">' + (options.text) + '</a>');
				$link.on('click',function(){
					that._selectPage(pageIndex);
					return false;
				});
			}
			if (options.classes) {
				$link.addClass(options.classes);
			}
	
			that.panel.append($link);
		},
	
		_selectPage : function(pageIndex){
			var that = this,o = that.options;
			that.currentPage = pageIndex;
			if (o.selectOnClick) {
				that.draw();
			}
			 o.onPageClick.call(that,pageIndex + 1);
		},
	
	  	_getInterval : function(){
	  	  var that = this,o = that.options;
	  	  return {
			start: Math.ceil(that.currentPage > o.halfDisplayed ? Math.max(Math.min(that.currentPage - o.halfDisplayed, (o.pages - o.displayedPages)), 0) : 0),
			end: Math.ceil(that.currentPage > o.halfDisplayed ? Math.min(that.currentPage + o.halfDisplayed, o.pages) : Math.min(o.displayedPages, o.pages))
		  };
	  	},
	
	
	  	init : function(o){
		  var that = this, $this = that.target;
		  if(that.options.onInit){
		  	 that.options.onInit.call(that);
		  }
		  that.draw();
		}
	
	  };
	
			
	var pagination = function(target,o) {
		var instance = $.data( $(target), 'pagination' );
		var settings=extend({
			items: 1,                  //分页条目数
			itemsOnPage: 1,            //每页显示item条数
			pages: 0,                  //手动指定分页数（如果指定此项就不需要以上两个参数）
			displayedPages: 5,         //中间活动页数
			edges: 2,                  //边缘显示页数
			currentPage: 1,            //当前页数
			hrefTextPrefix: '#page-',
			hrefTextSuffix: '',
			prevText: '&lt;',
			nextText: '&gt;',
			ellipseText: '&hellip;',
			cssStyle: 'light-theme',
			selectOnClick: true,
			onPageClick: function(pageNumber) {
			},
			onInit: function() {
			}
		},o);
	
		
		$(target).each(function(index) {
			var me = $(this);  
			if ( instance ) {
	          instance.init();
	        }else {
	            instance = $.data( this, 'pagination', new Plugin( me,settings ) );
	        }
		});
		return instance;
	};	
	
	module.exports = pagination;

/***/ }

});
//# sourceMappingURL=evaluateStep2.js.map