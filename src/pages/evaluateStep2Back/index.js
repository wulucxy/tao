/* 建议这里都引入 */
require('../../assets/less/common.less');
require('./index.less');
var $ = window.$ || require('jquery');

//工具类方法
var util = require('../../assets/components/util');

//公共方法
var common = require('../../assets/components/common');

/* 具体实现 */

// 表单验证组件
require('../../assets/components/validator');

var extend =  require('object-assign');

//弹窗模板
var tmpl_detail = require("../../assets/templates/detail.ejs");
var tmpl_questions = require("../../assets/templates/questions.ejs");

//弹窗模板
var tmpl_school = require("./templates/searchSchool.ejs");
var tmpl_list = require("./templates/schoolList.ejs");
var tmpl_major = require("./templates/major.ejs");
var majors = require("./lib/majors");

//provinceId
var provinceId = $("[name=province]").val();

var courseType = $("[name=courseType]").val();

var batch = $("[name=batch]").val();

//是否更新志愿方案
var  isChange = $("[name=isChange]").val();

//分页
var pagination = require("../../assets/components/pagination");
//自定义滚动
var scroll = require("../../assets/components/scroll");

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

var school = {

  requestMajors : function(options){
    var that = this;
     $.ajax({
        url : preServer+provinceId+"/data/college/"+options.collegeId+"/category",
        type : "post",
        data : JSON.stringify({courseType : courseType,batch : batch}),
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

           that.state.provList = that.majors;

           options.callback && options.callback.call(that);

        },
        error : function(err){
          console.log(err);
        }
    })
  },

  init : function(o){

      this.bindEvt();

      this.pager = 1;
      this.capacity = 10;
      
      this.options = o;

      this.state = {
        "provList" : [],
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
        "selected" :  isChange == 0 ? $.parseJSON($("[name=selected]").text()) :  $.parseJSON($("[name=selected_blank]").text()) ,
        "zhiyuanList" :isChange == 0 ? $.parseJSON($("[name=zhiyuanList]").text()) : $.parseJSON($("[name=zhiyuanList_blank]").text())
        
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
          
        var cityLis;
        if(that.state.cityList[that.modal.majorType-1].list.length == 0){
          cityLis = '<li>暂无该专业数据</li>';
        }else{
          cityLis = $.map(that.state.cityList[that.modal.majorType-1].list,function(city){
              if(city.status == 1){
                  return '<li><label><input type="checkbox" checked="true" name="city" n="'+city["name"]+'" value="'+city["code"]+'" ><em>'+city["name"]+'</em></label></li>';
              }else{
                  return '<li><label><input type="checkbox" name="city" n="'+city["name"]+'" value="'+city["code"]+'" ><em>'+city["name"]+'</em></label></li>';
              }
          });
        }

        $(".city").html(cityLis);
        that.options.completeCallback && that.options.completeCallback.call(that);
    }

      //选中城市列表(弹窗)
      var lis = [];
      if($(".city").length && !that.state.selected[that.modal.majorType-1].list.length){
          lis.push('<li class="noList"></li>');
          //$(".btn-positive").addClass("disabled");
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

          //tag点击效果
          $.each($(".m-select"),function(idx,ele){
            var btn = $(ele).find(".addMajor");

            (function (btn) {       
              that.updateTags(btn); 
            })(btn);     

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
          //需要判断id一致，name一致（挖坑）
          $.each(that.state.cityList[that.modal.majorType-1].list,function(idx,item){
              if(eleObj.code == item.code && eleObj.name == item.name){
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
              if(eleObj.code == item.code && eleObj.name == item.name ){
                  that.state.selected[that.modal.majorType-1].list.splice(idx,1);
                   return false;
              }
          });


          $.each(that.state.cityList[that.modal.majorType-1].list,function(idx,item){
              if(eleObj.code == item.code && eleObj.name == item.name ){
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
            if(ele.code == item.code && ele.name == item.name){
                that.state.selected[that.modal.majorType-1].list.splice(idx,1);
                return false;
            }
       });

       $.each(that.state.cityList[that.modal.majorType-1].list,function(idx,item){
            if(ele.code == item.code && ele.name == item.name){
                that.state.cityList[that.modal.majorType-1].list[idx].status = 0;
                 return false;
            }
        });

        
        that.render();
    });

  },

  requestCityData : function(val){
    var that = this,o = that.options;

    //对应的院校对象
    var rel = that.addMajorTrigger.data("rel");
    var schoolInput = $("[major="+rel+"]");
    //学校code
    var collegeId = schoolInput.attr("code");

    var parm = [];
    parm.push("courseType="+courseType);
    parm.push("batch="+batch);

    $.ajax({
        url : preServer+provinceId+"/data/major/"+collegeId+"/category/"+val+"?"+parm.join("&"),
        type : "get",
        success : function(res){
            if(typeof res =="string"){
                var res = $.parseJSON(res);
            }

            if(res.code!=1){
              warn(res.msg);
              return;
            }

            var res = res.result;
            
            if(!res.length){
               that.state.cityList[that.modal.majorType-1].list = [];
                that.render();
               return;
            }
            //默认未选中
            $.each(res,function(idx,ele){
                ele.status = 0;
                ele.code = ele.majorId;
                ele.name = ele.majorName;
            });

            that.state.cityList[that.modal.majorType-1].list = res;

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
     }
        
     var $page = modal.find(".pagination");
      pagination($page,{
        pages:  Math.ceil(res.total / that.capacity),
        displayedPages: 3,
        currentPage : 1,
        edges: 1,
        onPageClick : function(pageNo){
          that.requestData(pageNo);
        }
      });

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

      var type = $li.closest(".m-select").find(".addMajor").data("rel") - 1;

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
      url : preServer+provinceId+"/data/college/search",
      type : "post",
      contentType: "application/json",
      data : JSON.stringify({capacity:that.capacity,batch:batch,page:pager,"keyword":$.trim($("#wd").val())}),
      success : function(res){
        if(typeof res == "string"){
          var res = $.parseJSON(res);
        }

        if(res.code!=1){
          warn(res.msg);
          return;
        }

        var res = res.result;

        that.renderList(res);
        if(!$(".modalBox .pagination").length){
          that.detailpagination(res);
        }
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

      //不能同时选择同一所学校判断
      var repeat = false;
      $.each(that.state.zhiyuanList,function(idx,ele){
        var code = $this.attr("code");
        var name = $this.attr("name");

        if(ele.code == code && ele.name == name){
          warn("请勿重复选择该学校");
          repeat = true;
          return false;
        }else{
          repeat = false;
        }
      });

      if(repeat) return;

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

          //增加trigger
          that.addSchoolTrigger = oInput;

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

      var collegeId = $('[major='+btn.data("rel")+']').attr("code");

      //动态获取院校下的大专业列表
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
            
            //增加trigger
            that.addMajorTrigger = btn;

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
      }

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

    //异步提交结果
    $("#verifyBtn").on("click",function(e){
      e.preventDefault();

    //只要有一个选中即ok
    var zhiyuanStatus = that.state.zhiyuanList.some(function(ele,idx){
       return !!(ele.name && ele.code);
    });

    //只要有大学选中那么也必须选择专业
    var zhiyuanMajorStatus = true;
    $.each(that.state.zhiyuanList,function(idx,ele){
      var idx = ele.type - 1;

      if(ele.name && ele.code){
       if(!(that.state.selected[idx].list.length)){
        zhiyuanMajorStatus = false;
        return false;
       }
      }
      
    });

    //有专业选中
    var selectedStatus = that.state.selected.some(function(ele,idx){
      var type = ele.type;
       return (ele.list.length > 0 && $("[major="+type+"]").length);
    });


    if(!zhiyuanStatus){
      warn("请至少选择一所志愿院校");
      return false;
    }else if(!zhiyuanMajorStatus){
      warn("请确保每所学校至少选择一个专业");
      return false;
    }else if(!selectedStatus){
      warn("请至少选择一个志愿院校对应的专业");
      return false;
    }

    //组装数据
    var wishList = [];
    $.each(that.state.zhiyuanList,function(idx,ele){
       var wish = {};
       if(ele.name && ele.code && that.state.selected[idx].list.length){
          wish.college = ele.code;
          wish.collegeName = ele.name;
          wish.type = ele.type;
          $.each(that.state.selected[idx].list,function(listIndex,list){
            list.majorId = list.code;
            list.majorName = list.name;
          });
          wish.majors = that.state.selected[idx].list;
       }

       wishList.push(wish);
    });

    $.ajax({
      url : preServer+provinceId+"/tzy/plan/assessment/step2",
      type : "post",
      contentType: "application/json",
      data : JSON.stringify({batch : batch, wishes : wishList,zhiyuanList : that.state.zhiyuanList,selected:that.state.selected}),
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




