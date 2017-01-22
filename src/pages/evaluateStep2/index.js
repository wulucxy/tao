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

var searchSchool = require("../../assets/components/searchSchool");

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

//分页
var pagination = require("../../assets/components/pagination");
//自定义滚动
var scroll = require("../../assets/components/scroll");

// panel
var tmpl_panel = require("./templates/v2/panel.ejs");

// major
var tmpl_majorList = require("./templates/v2/majorList.ejs");

// divider
var tmpl_divider = require("./templates/v2/divider.ejs");

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
    field:$ele.attr('field'),
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
        that.state.current.major.field = $ele.attr('field');

        var current = that.state.current;
        var wishes = that.state.wishes;

        var isRepeat = false;
        $(wishes).each(function(idx,ele){
          if(ele.majorId == current.major.code 
              && ele.collegeId == current.college.code
              && ele.field == current.major.field
            ){
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

    $('#js-addSchool').on('dblclick', function(e){
      e.preventDefault();
    })


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




