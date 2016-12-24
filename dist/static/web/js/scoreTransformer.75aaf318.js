webpackJsonp([47],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(19);
	__webpack_require__(435);
	var $ = window.$ || __webpack_require__(41);
	
	//工具类方法
	var util = __webpack_require__(42);
	
	//公共方法
	var common = __webpack_require__(43);
	
	__webpack_require__(59);
	
	var tmpl = __webpack_require__(438);
	
	var province = $("[name=province]").val();
	
	function subFunc(target, oForm) {
	
		if(target.hasClass('disabled')) return;
		target.addClass('disabled');
	
		var _data = {
			score: $("#score").val()
		};
	
		$.ajax({
			url: preServer+province+'/tzy/plan/scoreChange',
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


/***/ },

/***/ 435:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 438:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	__p += '<div class="dz">\n	<p>' +
	((__t = ( score )) == null ? '' : __t) +
	'分在2016年相应的分数和排名</p>\n</div>\n<ul class="dzLists">\n	';
	 for (var i = 0; i < result.length; i++) { 
			var batchArr = ['一','二','三']
		  	var batch = batchArr[i]
		;
	__p += '\n	<li><span class="blue">总分' +
	((__t = ( batch )) == null ? '' : __t) +
	'（第' +
	((__t = ( batch )) == null ? '' : __t) +
	'批）：</span><span class="orange">' +
	((__t = ( result[i].score )) == null ? '' : __t) +
	'分</span>\n	</li>\n	';
	 } ;
	__p += '\n</ul>\n<div class="g9 f20">分数转换了，你才能更好地使用数据库</div>';
	
	}
	return __p
	}

/***/ }

});
//# sourceMappingURL=scoreTransformer.75aaf318.js.map