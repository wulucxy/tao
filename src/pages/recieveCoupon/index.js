/* 建议这里都引入 */
require('../../assets/less/common.less');
require('./index.less');
var $ = window.$ || require("jquery");

//工具类方法
var util = require("../../assets/components/util");

//公共方法
var common = require("../../assets/components/common");

require("../../assets/components/validator");

$("#recieveCouponForm").validator({
	errorParent: '.row',
    successCallback: function(e) {
      var target = $(e.target).closest('.btn');
      //执行到下一步操作

    },
    focusinCallback: function() {
      
    },
    errorCallback: function(unvalidFields) {
      var oError = $('.errTxt');
      
    }
});