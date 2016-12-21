/* 建议这里都引入 */
require('../../assets/less/common.less');
require('./index.less');
var $ = window.$ || require("jquery");

//工具类方法
var util = require("../../assets/components/util");

//公共方法
var common = require("../../assets/components/common");

/* 具体实现 */
// 验证组件
require("../../assets/components/validator");

var checkBox = require("../../assets/components/checkBox");

//弹窗模板
var tmpl_detail = require("../../assets/templates/detail.ejs");
var tmpl_questions = require("../../assets/templates/questions.ejs");



//切换顶部nav高亮
common.switchNav(1);

var provinceId = $("[name=province]").val();

var __INITDATA__ = $('.subjectInput').map(function(idx, ele){
  var $ele = $(ele);
  return {
    name: $ele.attr('name'),
    code: $ele.val()
  }
}).get()

var book = {
  init: function(){
    this.render();
    this.bindEvt();
  },

  render: function(){
    $('[name=subject]').each(function(idx, ele){
      var $ele = $(ele);
      $(__INITDATA__).each(function(l, k){
        if (k.code == $ele.val()){
          $ele.prop('checked',true);
        }
      })
    })
  },

  bindEvt: function(){
    checkBox.init();
    this.formValidator();
  },

  formValidator: function(){
    var that = this;
    // 表单校验
    $("#assessForm_1").validator({
      errorParent: '.row',
        successCallback: function(e) {
          var target = $(e.target).closest('.btn');
          //执行到下一步操作
          that.subFunc(target,$("#assessForm_1"));

        },
        focusinCallback: function() {
          var _ele = $(this);
          common.hideError($('.errTxt'));
        },

        errorCallback: function(unvalidFields) {
          var oError = $('.errTxt');
        }
    });
  },

  subFunc: function(btn,oForm) {
      var that = this;
      var subjects = $('[name=subject]').map(function(idx, ele){
          if(ele.checked){
            return {
              name: $(ele).attr('n'),
              code: $(ele).val()
            }
          }
        }).get()

      var _data = {
        score : $("[name=score]").val(),
        subjects: subjects
      };
      $.ajax({
        url : preServer+provinceId+"/tzy/plan/wishes/step1",
        type : "post",
        contentType: "application/json",
        data : JSON.stringify(_data),
        success : function(res){
          if(typeof res == "string"){
            var res = $.parseJSON(res);
          }

          if(res.code==1){
            window.location = "/box/plan/book_step2";
            return false;
          }else{
            warn(res.msg);
            return;
          }
        },
        error : function(err){
           console.log(err);
        }
      })

  }

};


book.init();


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