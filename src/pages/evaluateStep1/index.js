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

//弹窗模板
var tmpl_detail = require("../../assets/templates/detail.ejs");
var tmpl_questions = require("../../assets/templates/questions.ejs");

//checkbox定制
$('.label_radio').click(function(){
  util.setupLabel();
});

util.setupLabel();

//切换顶部nav高亮
common.switchNav(1);

// 表单校验
$("#assessForm_1").validator({
	errorParent: '.row',
    successCallback: function(e) {
      var target = $(e.target).closest('.btn');
      //执行到下一步操作
      //

    },
    focusinCallback: function() {
      var _ele = $(this);
      common.hideError($('.errTxt'));
    },

    errorCallback: function(unvalidFields) {
      var oError = $('.errTxt');
      common.showError($('.errTxt'));
    }
});

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