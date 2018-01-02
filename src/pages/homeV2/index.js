/* 建议这里都引入 */
require('../../assets/less/common.less');
require('./index.less');
var extend =  require('object-assign');
var $ = window.$ || require("jquery");

//工具类方法
var util = require("../../assets/components/util");

//公共方法
var common = require("../../assets/components/common");
var userUtil = require("../../assets/components/userUtil");

/* 可选，视需求而定 */
var slider = require("../../assets/components/unslider");
var checkBox = require("../../assets/components/checkBox");
var carousel = require("./lib/carousel");
var updateBrowser = require("../../assets/components/updateBrowser");
var tmpl_plan = require("../../assets/templates/plan.ejs");
var provinceId = $("[name=province]").val();
var INITDATA = extend({score: '', rank: ''}, window.__INITDATA__)

slider($("#bannerShow"));

updateBrowser.init();

carousel.init();

$(".sloganTag").on("click",function(e){
	e.preventDefault();
	var rel = $(this).attr("id");
	var target = $("[rel="+rel+"]");

	var offset = target.offset().top;

	$("html,body").animate({
		"scrollTop" : offset
	},600);
});

const home = {
	init: function () {
		this.bindEvt()
	},

	getSubjects: function(){
    var that = this;
    var subjects = $('[name=subject]').map(function(idx, ele){
        if(ele.checked){
          return {
            name: $(ele).attr('n'),
            code: $(ele).val()
          }
        }
      }).get();

    return subjects;
  },

	postPlanInfo: function(btn,oForm){
	    btn.addClass('disabled');
	    var oError = $('.errTxt');
	    const subjects = this.getSubjects().map(function(item){
	    	 return Number(item.code)
	    })
	    $.ajax({
	        url: preServer+provinceId + "/profile/fillExamInfo",
	        type: "post",
	        data: JSON.stringify({
	          score: Number(oForm.find('[name=score]').val()),
	          rank: Number(oForm.find('[name=rank]').val()),
	          subjects: subjects
	        }),
	        contentType: "application/json",
	        success: function(res) {
	          if (typeof res == "string") {
	            var res = $.parseJSON(res);
	          }

	          if(res.code==1){
	          	setTimeout(function(){
	          		window.location = '/'
	          	}, 400)
	          }else{
	          	btn.removeClass('disabled');
	          	userUtil.showError(oError, res.msg);
	          	return;
	          }

	        },
	        error : function(err){
	        	btn.removeClass('disabled');
	        	return;
	        }
		});
	},
	initSubject: function(){
		if(!INITDATA.subjectList) return
    $('[name=subject]').each(function(idx, ele){
      var $ele = $(ele);
      $(INITDATA.subjectList).each(function(l, k){
        if (k.type == $ele.val()){
          $ele.prop('checked',true);
        }
      })
    })
  },
	bindEvt: function () {
		var that = this
		$(".js-edit").on('click', function(e){
			e.preventDefault();
			var btn = $(e.target);
			modalBox( btn.get(0), {
		      html:tmpl_plan(INITDATA),
		      klass : 'w540 shadow',
		      closeByOverlay : false,
		      startCallback: function () {
		      	that.initSubject()
		      	checkBox.init()
		      },
		      completeCallback : function(){
		      	// 聚焦
		      	$('#score').focus()
		      	// 表单校验
		        $("#planForm").validator({
							errorParent: '.row',
						    successCallback: function(e) {
						      var target = $(e.target).closest('.btn');
						      var oError = $('.errTxt');
						      var subjects = that.getSubjects();
				          if(subjects.length != 3){
				          	$('.subjectListRow').addClass('unvalid')
				          	userUtil.showErrorMsg($("#planForm"), oError, $('.subjectListRow'));
				            return false;
				          }else{
				          	$('.subjectListRow').removeClass('unvalid')
				            userUtil.hideError($('.errTxt'));
				          }
						      //执行到下一步操作
						      that.postPlanInfo(target, $("#planForm"));
						    },
						    focusinCallback: function() {
					          userUtil.hideError($('.errTxt'));
					          $(".row").removeClass('errorIpt');
					        },
					        errorCallback: function(unvalidFields) {
					          var oError = $('.errTxt');
					          userUtil.showErrorMsg($("#planForm"), oError, unvalidFields);
					        }
						});
		      }
		  });
		})
	}
}

home.init()
