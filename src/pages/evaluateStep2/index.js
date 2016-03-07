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

//分页
var pagination = require("../../assets/components/pagination");
//自定义滚动
var scroll = require("../../assets/components/scroll");


var school = {

  init : function(o){
     
      this.pager = 1;
      this.cityDataCache = {};
      this.options = o;

      this.state = {
        "majorList" : majors,
        "subMajorList" : [],
        "selected" : [],
        "selectList" : [
          {
            "type" : 1,
            "name" : "",
            "code" : ""
          },
          {
            "type" : 2,
            "name" : "",
            "code" : ""
          },
          {
            "type" : 3,
            "name" : "",
            "code" : ""
          },
          {
            "type" : 4,
            "name" : "",
            "code" : ""
          },
          {
            "type" : 5,
            "name" : "",
            "code" : ""
          }
        ]
        
      };

      this.render();
      this.bindEvt();
  },

  render : function(){
    var that = this;

      $.each(that.state.selectList,function(idx,item){
          if(item.code && item.name){
            $("[major="+item.type+"]").val(item.name);
            $("[data-rel="+item.type+"]").addClass("active");
          }else{
            $("[data-rel="+item.type+"]").removeClass("active");
          }
      });

      //省列表
      if(that.state.majorList.length){
          var provLis = $.map(that.state.majorList,function(item){
              return '<li data-value="'+item.code+'">'+item.name+'</li>';
          });
      }

      if($(".prov").length && !$(".prov").children().length){
        $(".prov").html(provLis);
        that.boxEvt();
        that.options.startCallback && that.options.startCallback.call(that);
      }

      //城市列表
      if(that.state.subMajorList.length){
          var cityLis = $.map(that.state.subMajorList,function(city){
              if(city.status == 1){
                  return '<li><label><input type="checkbox" checked="true" name="city" n="'+city["name"]+'" value="'+city["value"]+'" ><em>'+city["name"]+'</em></label></li>';
              }else{
                  return '<li><label><input type="checkbox" name="city" n="'+city["name"]+'" value="'+city["value"]+'" ><em>'+city["name"]+'</em></label></li>';
              }
          });

          $(".city").html(cityLis);
          that.options.completeCallback && that.options.completeCallback.call(that);
      }

      //选中城市列表
      var lis = [];
      if(!that.state.selected.length){
          lis.push('<li class="noList">动动手指，在左边选择专业吧！</li>');
          $(".btn-positive").addClass("diasabled");
      }else{
          lis = $.map(that.state.selected,function (item) {
              return '<li class="tagList" data-n="'+item.n+'" data-value="'+item.value+'"><span class="icon-close">X</span><span class="tagContent">' +item.n+ '</span></li>';
          });
          if($(".btn-positive").hasClass("diasabled")){
            $(".btn-positive").removeClass("diasabled"); 
          }
      }
      

     $('#tagsWrap').html(lis.join('')); 

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
        that.requestCityData.call(that,$(this).data("value"));
    });

    $(document).on("change","[name=city]",function(e){
         
        var ele = this,$ele = $(this);

        if($ele.prop("checked")){
          var eleObj = {
              p : $(ele).attr("p"),
              n : $(ele).attr("n"),
              value : ele.value
          };
         
          that.state.selected.push(eleObj);

          $.each(that.state.subMajorList,function(idx,item){
              if(eleObj.value == item.value){
                  that.state.subMajorList[idx].status = 1;
                   return false;
              }
          });

        }else{
          var eleObj = {
              n : $(ele).attr("n"),
              value : ele.value
          };

          $.each(that.state.selected,function(idx,item){
              if(eleObj.value == item.value){
                  that.state.selected.splice(idx,1);
                   return false;
              }
          });


          $.each(that.state.subMajorList,function(idx,item){
              if(eleObj.value == item.value){
                  that.state.subMajorList[idx].status = 0;
                   return false;
              }
          });

        }

        that.render();
    });

  },

  requestCityData : function(val){
    var that = this,o = that.options;

    if(that.cityDataCache[val]){
        that.state.subMajorList = that.cityDataCache[val];
        that.render();
        return;
    }

    $.ajax({
        url : o.url,
        type : "post",
        contentType: "application/json",
        data : JSON.stringify({majorId:val}),
        success : function(res){
            if(typeof res =="string"){
                var res = $.parseJSON(res);
            }
            
            if(!that.cityDataCache[val]){
                that.cityDataCache[val] = res.c;
            }

            $.each(res.c,function(idx,ele){
                ele.status = 0;
            });

            that.state.subMajorList = res.c;
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

  requestData : function(pager){
    var that = this;
    $.ajax({
      url : "/v2/client/getCollegeList",
      type : "post",
      contentType: "application/json",
      data : JSON.stringify({page:pager,"wd":$.trim($("#wd").val())}),
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
    $(document).on("click",".schoolList",function(e){
      e.preventDefault();
      var $this = $(this);
      $this.siblings().removeClass("active");
      $this.addClass("active");

      $.each(that.state.selectList,function(idx,ele){
        if(that.modal.majorType == ele.type){
          that.state.selectList[idx].name = $this.attr("name");
          that.state.selectList[idx].code = $this.attr("code");
        }
      });

      $(".btn-close").trigger("click");
      that.render();
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


    $(document).on("focusin",".addSchool",function(e){
      e.preventDefault();
      var oInput = $(e.target);
      if(oInput.hasClass("cur")) return;
      oInput.addClass("cur");

      modalBox(oInput,{
        html : tmpl_school(),
        klass : 'w540 shadow',
        closeByOverlay : false,
        startCallback : function(modal){

          that.modal = modal;
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

    $(document).on("click",".addMajor",function(e){
      e.preventDefault();
      var btn = $(e.target).closest(".btn");
      console.log(btn);
      if(!btn.hasClass("active")) return;

      modalBox(btn,{
        html : tmpl_major(),
        klass : 'w540 shadow',
        closeByOverlay : false,
        startCallback : function(modal){

          that.render();
        }
      });




    });
  }
};

school.init({
  klass : "current",
  url : "/v2/client/getMajor",
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
  }
});




