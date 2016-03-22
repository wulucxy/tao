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

// 弹窗组件
var modalBox = require("../../assets/components/modalBox");

//弹窗模板
var tmpl_detail = require("../../assets/templates/detail.ejs");
var tmpl_questions = require("../../assets/templates/questions.ejs");



//切换顶部nav高亮
common.switchNav(1);

var provinceId = $("[name=province]").val();

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

$("#verifyBtn").on("click",function(e){
  e.preventDefault();
  var btn = $(e.target);
  if(btn.hasClass("disabled")) return;
  btn.addClass("disabled");

  var _data = {
    mobile : $("[name=mobile]").val(),
    province : $("[name=province]").val(),
    courseType : $("[name=courseType]").val(),
    score : $("[name=score]").val(),
    place : $("[name=place]").val(),
    wishes : $.parseJSON($("[name=wishes]").text())
  };

  $.each(_data.wishes,function(idx,ele){
      var majorList = [];

      if(ele.majors){
        $.each(ele.majors,function(l,n){
          if(n.majorId){
             majorList.push(n.majorId);
          }
        });

        ele.majors = majorList;
      }
  });

  $.ajax({
    url : preServer+provinceId +"/tzy/plan/assessment/create",
    type : "post",
    contentType: "application/json",
    data : JSON.stringify(_data),
    success : function(res){
      if(typeof res == "string"){
        var res = $.parseJSON(res);
      }

      if(res.code==1 && res.planId){
          window.location = "/pay/assessment?planId="+res.planId;
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
  });
});



