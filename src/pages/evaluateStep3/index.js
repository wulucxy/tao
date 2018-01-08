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

var __INITWISHES__ = $('.wishInput').map(function(idx, ele){
  var $ele = $(ele);
  return {
    collegeId: $ele.attr('collegeid'),
    collegeName: $ele.attr('collegename'),
    majorId:$ele.attr('majorid'),
    majorName:$ele.attr('majorname'),
    field:$ele.attr('field'),
    universityMajorId: $ele.attr('universitymajorid')
  }
}).get()

var __INITSUBJECTS__ = $('.subjectInput').map(function(idx, ele){
  var $ele = $(ele);
  return Number($ele.val())

}).get()


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
    score : $("[name=score]").val(),
    rank : Number($("[name=rank]").val()),
    wishes: __INITWISHES__,
    subjects: __INITSUBJECTS__
  };


  $.ajax({
    url : preServer+provinceId +"/tzy/plan/accessment2018",
    type : "post",
    contentType: "application/json",
    data : JSON.stringify(_data),
    success : function(res){
      if(typeof res == "string"){
        var res = $.parseJSON(res);
      }

      if(res.code==1 && res.result.planId){
          window.location = "/box/plan/result?planId="+res.result.planId;
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



