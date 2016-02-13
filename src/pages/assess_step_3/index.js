/* 建议这里都引入 */
require('../../assets/less/common.less');
require('./index.less');
var $ = window.$ || require('jquery');

//工具类方法
var util = require('../../assets/components/util');

//公共方法
var common = require('../../assets/components/common');

/* 具体实现 */

var React = require('react');
var ReactDOM = require('react-dom');


// 表单验证组件
require('../../assets/components/validator');

// 弹窗组件
var modalBox = require("../../assets/components/modalBox");

//弹窗模板
var tmpl_detail = require("../../assets/templates/detail.ejs");
var tmpl_questions = require("../../assets/templates/questions.ejs");



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
