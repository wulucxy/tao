/* 建议这里都引入 */
require('../../assets/less/common.less');
require('./index.less');
var $ = window.$ || require("jquery");

//工具类方法
var util = require("../../assets/components/util");

//公共方法
var common = require("../../assets/components/common");

require("../../assets/components/validator");

var tmpl = require('./templates/tmpl.ejs');

var province = $("[name=province]").val();

function subFunc(target, oForm) {

	if(target.hasClass('disabled')) return;
	target.addClass('disabled');

	var _data = {
		score: $("#score").val()
	};

	$.ajax({
		url: preServer+'330000/tzy/plan/scoreChange',
		type: 'post',
		contentType: "application/json",
		data: JSON.stringify(_data),
		success: function(res){
			if(typeof res == 'string'){
				var res = $.parseJSON(res);
			}

			if(res.code != 1){
				warn(res.msg);
				return;
			}

			var DATA = {
				result: res.result,
				score: _data.score
			}

			$('.dzWrapper').empty().append(tmpl(DATA)).show();

		},

		complete: function(){
			target.removeClass('disabled');
		}
	})
};

$('#scoreTransformerForm').validator({
	errorParent: '.row',
    successCallback: function(e) {
      var target = $(e.target).closest('.btn');
      //执行到下一步操作
      subFunc(target,$("#scoreTransformerForm"));

    },
    focusinCallback: function() {
      var _ele = $(this);
      common.hideError($('.errTxt'));
    },

    errorCallback: function(unvalidFields) {
      var oError = $('.errTxt');
    }
})
