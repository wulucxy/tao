webpackJsonp([46],{0:function(r,e,a){a(21),a(304);var t=window.$||a(44),n=a(45),o=a(46),c=a(184);a(62),t(".label_radio").click(function(){n.setupLabel()}),n.setupLabel(),o.switchNav(2);var i=t("[name=province]").val(),s={init:function(){c.init({el:".addSchool",provinceId:i,selectListCallback:function(r){var e=this;if(e.trigger.hasClass("sub")){if(r.attr("code")==t("[name=primaryCode]").val())return void warn("请选择不同的学校进行对比");if(r.attr("name")==t(".sub").not(e.trigger).val())return void warn("请选择不同的学校进行对比")}else{var a,n=r.attr("name");if(t.each(t(".sub"),function(r,e){if(n==e.value)return warn("请选择不同的学校进行对比"),a=!0,!1}),a)return!1}t(".btn-close").trigger("click"),e.trigger.val(r.attr("name")),e.trigger.closest(".row").find(".hiddenCode").val(r.attr("code")),e.trigger.closest(".row").removeClass("errorIpt empty unvalid");var o=e.trigger.closest(".row").find(".subCode");o.length&&(o.val(r.attr("code")),o.prop("checked",!0))}}),this.bindEvt()},bindEvt:function(){var r=this;t("#scorelineForm").validator({errorParent:".row",successCallback:function(e){var a=t(e.target).closest(".btn");r.checkStatus()&&r.subFunc(a,t("#scorelineForm"))},focusinCallback:function(){t(this);o.hideError(t(".errTxt"))},errorCallback:function(e){t(".errTxt");r.unvalidFieldsCallback(e)}})},checkStatus:function(){if(!t("[name=contrast]").eq(0).val()&&!t("[name=contrast]").eq(1).val())return!1;if(t("[name=contrast]").eq(0).val()==t("[name=contrast]").eq(1).val())return t("[name=contrast]").eq(0).closest(".row").addClass("errorIpt unvalid"),!1;var r=!0;return t("[name=contrast]").each(function(e,a){if(t(a).val()==t("[name=primarySub]").val())return t(a).closest(".row").addClass("errorIpt unvalid"),r=!1,!1}),r},unvalidFieldsCallback:function(r){t.each(r,function(r,e){t(e).closest(".row").addClass("errorIpt")})},subFunc:function(r,e){var a=[];a.push("courseType="+t("[name=courseType]:checked").val()),a.push("batch="+t("[name=batch]:checked").val()),a.push("primary="+t("[name=primaryCode]").val()),a.push("second="+t("[name=secondCode]").val()),a.push("third="+t("[name=thirdCode]").val()),t.ajax({url:preServer+i+"/data/college/threshold/compare?"+a.join("&"),type:"get",success:function(r){if("string"==typeof r)var r=t.parseJSON(r);return 1!=r.code?void warn(r.msg):(window.location="/",!1)},error:function(r){console.log(r)}})}};s.init()},304:function(r,e){}});