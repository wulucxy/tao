var $ = window.$ || require("jquery");
require('./index.less');
var tmpl_plan = require("../../templates/plan.ejs");
var checkBox = require("../../components/checkBox");
var userUtil = require("../../components/userUtil");

var payModal = {
	init: function(btn, options){
		this.options = options;
		this.btn = btn;
		this.provinceId = this.options.provinceId
	},

	requestExamInfo: function(info){
		var that = this;
		
		$.ajax({
			url : preServer+that.options.provinceId+"/profile/isFillExamInfo",
			contentType: "application/json",
			type : "get",
		    success : function(res){
		      if(typeof res == "string"){
		        var res = $.parseJSON(res);
		      }

		      if(res.code==1){
		      	var result = res.result
		      	!result.isFill && that.box(info);
		      }else{
		        warn(res.msg);
		        return;
		      }
		    },
		    error : function(err){
		       console.log(err);
		    }
		})
	},

	initSubject: function(){
		var planData = this.options.data || {}
		if(!planData.subjectList) return
    $('[name=subject]').each(function(idx, ele){
      var $ele = $(ele);
      $(planData.subjectList).each(function(l, k){
        if (k.type == $ele.val()){
          $ele.prop('checked',true);
        }
      })
    })
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

  postPlanInfo: function(btn,oForm, info){
  		var that = this
	    btn.addClass('disabled');
	    var oError = $('.errTxt');
	    var subjects = this.getSubjects().map(function(item){
	    	 return Number(item.code)
	    })

	    var data = {
	    	score: Number(oForm.find('[name=score]').val()),
        subjects: subjects
	    }

	    var rank = oForm.find('[name=rank]').val()
	    if(rank) {
	    	data.rank = Number(rank)
	    }

	    $.ajax({
	        url: preServer+this.provinceId + "/profile/fillExamInfo",
	        type: "post",
	        data: JSON.stringify(data),
	        contentType: "application/json",
	        success: function(res) {
	          if (typeof res == "string") {
	            var res = $.parseJSON(res);
	          }
	          if(res.code == 1011){
	          	window.location = '/home/signin'
	          }else if(res.code==1){
	          	that.options.successCallback(info)
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

	box: function(info){
		var that = this;
		var planData = this.options.data || {}

		modalBox(that.btn.get(), {
		      html:tmpl_plan(planData),
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
						      that.postPlanInfo(target, $("#planForm"), info);
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
	}
}

module.exports = payModal;
