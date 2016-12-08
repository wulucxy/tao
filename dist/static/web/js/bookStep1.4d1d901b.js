webpackJsonp([5],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(16);
	__webpack_require__(122);
	var $ = window.$ || __webpack_require__(38);
	
	//工具类方法
	var util = __webpack_require__(39);
	
	//公共方法
	var common = __webpack_require__(40);
	
	/* 具体实现 */
	// 验证组件
	__webpack_require__(56);
	
	var checkBox = __webpack_require__(124);
	
	//弹窗模板
	var tmpl_detail = __webpack_require__(125);
	var tmpl_questions = __webpack_require__(126);
	
	checkBox.init();
	
	//切换顶部nav高亮
	common.switchNav(1);
	
	var provinceId = $("[name=province]").val();
	
	
	
	function subFunc(btn,oForm){
	
	  var subjects = $('[name=subject]').map(function(idx, ele){
	      if(ele.checked){
	        return {
	          name: $(ele).attr('n'),
	          code: $(ele).val()
	        }
	      }
	    });
	
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
	
	// 表单校验
	$("#assessForm_1").validator({
		errorParent: '.row',
	    successCallback: function(e) {
	      var target = $(e.target).closest('.btn');
	      //执行到下一步操作
	      subFunc(target,$("#assessForm_1"));
	
	    },
	    focusinCallback: function() {
	      var _ele = $(this);
	      common.hideError($('.errTxt'));
	    },
	
	    errorCallback: function(unvalidFields) {
	      var oError = $('.errTxt');
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

/***/ },

/***/ 122:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 124:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(38);
	
	var checkBox = {
	
	  render: function(){
	    if($('.label_check input').length) {
	        $('.label_check').each(function(){
	            $(this).removeClass('c_on');
	        });
	
	        $('.label_check input').map(function(idx,ele){
	            if($(ele).is(":checked")){
	              return ele;
	            }
	        }).each(function(){
	            $(this).parent('label').addClass('c_on');
	        });
	    };
	  },
	
	  init: function(){
	    this.render();
	    this.bindEvt();
	  },
	
	  getCheckListValue: function(){
	    var checkList = [];
	    $('[name=subject]').filter(function(idx,ele) {
	      if(ele.checked){
	        checkList.push(ele.value);
	      }
	    })
	
	    return checkList;
	  },
	
	  bindEvt: function(){
	    var labelLists = this.getCheckListValue();
	    $(document).on('click','.label_check input',function(e) {
	
	      var $item = $(e.target);
	
	      if($item.prop('checked')) {
	        labelLists.push($item.val())
	      }else {
	        var startIndex = labelLists.indexOf($item.val())
	        labelLists.splice(startIndex,1);
	      }
	
	      if(labelLists.length > 3) {
	        labelLists.shift();
	      }
	
	      $('.label_check').each(function(){
	          $(this).removeClass('c_on');
	          $(this).find('input').attr('checked', false);
	      });
	
	      $('.label_check input').map(function(idx,ele){
	
	          var _value = String(ele.value);
	
	          if(labelLists.indexOf(_value) > "-1") {
	            ele.checked = true;
	            $(ele).parent('label').addClass('c_on')
	          }
	      })
	
	    });
	  }
	};
	
	module.exports = checkBox;

/***/ }

});
//# sourceMappingURL=bookStep1.4d1d901b.js.map