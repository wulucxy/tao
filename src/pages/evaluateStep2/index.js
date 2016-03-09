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

      this.bindEvt();

      this.pager = 1;
      this.cityDataCache = [
        {},{},{},{},{}
      ];
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
        "selected" : [
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
        "zhiyuanList" : [
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
  },

  render : function(type){
    var that = this;

      $.each(that.state.zhiyuanList,function(idx,item){
          if(item.code && item.name){
            $("[major="+item.type+"]").val(item.name);
            $("[data-rel="+item.type+"]").removeClass("disabled");
          }else{
            $("[data-rel="+item.type+"]").addClass("disabled");
          }
      });

      //省列表
      if(that.state.provList.length){
          var provLis = $.map(that.state.provList,function(item){
              return '<li data-value="'+item.code+'">'+item.name+'</li>';
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
                return '<li><label><input type="checkbox" checked="true" name="city" n="'+city["name"]+'" value="'+city["value"]+'" ><em>'+city["name"]+'</em></label></li>';
            }else{
                return '<li><label><input type="checkbox" name="city" n="'+city["name"]+'" value="'+city["value"]+'" ><em>'+city["name"]+'</em></label></li>';
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
          console.log(that.modal.majorType,that.state.selected[that.modal.majorType-1].list);
          lis = $.map(that.state.selected[that.modal.majorType-1].list,function (item) {
              return '<li class="tagList" data-n="'+item.n+'" data-value="'+item.value+'"><span class="icon-close">X</span><span class="tagContent">' +item.n+ '</span></li>';
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
      
      //当前页面展示的选中专业
      if(typeof type != "undefined" && that.state.selected[type].list){
        var lis = $.map(that.state.selected[type].list,function (item) {
            return '<li class="tagList" data-n="'+item.n+'" data-value="'+item.value+'"><span class="icon-close">X</span><span class="tagContent">' +item.n+ '</span></li>';
        });
        $("[major="+(type+1)+"]").closest(".m-select").find(".tagsWrap").html(lis.join(""));
        $("[major="+(type+1)+"]").closest(".m-select").find(".count").text(lis.length);
      }else{

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
        that.requestCityData.call(that,$(this).data("value"));
    });

    $(document).off().on("change","[name=city]",function(e){
         
        var ele = this,$ele = $(this);

        if($ele.prop("checked")){
          var eleObj = {
              p : $(ele).attr("p"),
              n : $(ele).attr("n"),
              value : ele.value
          };

          //保存到当前志愿list列表中
          that.state.selected[that.modal.majorType-1].list.push(eleObj);

          //分志愿类型处理，将当前志愿选中项列出来
          $.each(that.state.cityList[that.modal.majorType-1].list,function(idx,item){
              if(eleObj.value == item.value){
                  that.state.cityList[that.modal.majorType-1].list[idx].status = 1;
                   return false;
              }
          });

        }else{
          var eleObj = {
              n : $(ele).attr("n"),
              value : ele.value
          };

          //去除选择项
          $.each(that.state.selected[that.modal.majorType-1].list,function(idx,item){
              if(eleObj.value == item.value){
                  that.state.selected[that.modal.majorType-1].list.splice(idx,1);
                   return false;
              }
          });


          $.each(that.state.cityList[that.modal.majorType-1].list,function(idx,item){
              if(eleObj.value == item.value){
                  that.state.cityList[that.modal.majorType-1].list[idx].status = 0;
                   return false;
              }
          });

        }

        that.render();
    });

    $(".s-major").off().on('click', '.icon-close', function (e) {

        var $li = $(this).closest(".tagList");
        var val = $li.data("value"),n = $li.data("n");
            
        var ele = {
            n : n,
            value : val
        };

       $.each(that.state.selected[that.modal.majorType-1].list,function(idx,item){
            if(ele.value == item.value){
                that.state.selected[that.modal.majorType-1].list.splice(idx,1);
                return false;
            }
       });

       $.each(that.state.cityList[that.modal.majorType-1].list,function(idx,item){
            if(ele.value == item.value){
                that.state.cityList[that.modal.majorType-1].list[idx].status = 0;
                 return false;
            }
        });

        
        that.render();
    });

  },

  requestCityData : function(val){
    var that = this,o = that.options;

    $.ajax({
        url : o.url,
        type : "post",
        contentType: "application/json",
        data : JSON.stringify({majorId:val}),
        success : function(res){
            if(typeof res =="string"){
                var res = $.parseJSON(res);
            }
            

            $.each(res.c,function(idx,ele){
                ele.status = 0;
            });

            that.state.cityList[that.modal.majorType-1].list = res.c;
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
        return '<li class="tagList" data-n="'+item.n+'" data-value="'+item.value+'"><span class="icon-close">X</span><span class="tagContent">' +item.n+ '</span></li>';
    });
    btn.closest(".m-select").find(".tagsWrap").empty().html(lis.join(""));
  },

  updateTags : function(btn){
    var that = this;
    var type = btn.data("rel") - 1;
    $(".showTagList").off().on("click",".icon-close",function(e){

      e.preventDefault();
      var $li = $(this).closest(".tagList");
      var val = $li.data("value"),n = $li.data("n");
          
      var ele = {
          n : n,
          value : val
      };

     $.each(that.state.selected[type].list,function(idx,item){
          if(ele.value == item.value){
              that.state.selected[type].list.splice(idx,1);
              return false;
          }
     });

     $.each(that.state.cityList[type].list,function(idx,item){
          if(ele.value == item.value){
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




