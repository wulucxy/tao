webpackJsonp([24],{0:function(e,a,t){t(21),t(223);var n=window.$||t(44),r=t(45),l=t(46);t(62);var o=t(48),s=t(135),i=t(136),c=n(".wishInput").map(function(e,a){var t=n(a);return{collegeId:t.attr("collegeid"),collegeName:t.attr("collegename"),majorId:t.attr("majorid"),majorName:t.attr("majorname"),field:t.attr("field")}}).get(),d=n(".subjectInput").map(function(e,a){var t=n(a);return{name:t.attr("name"),code:t.val()}}).get();l.switchNav(1);var p=n("[name=province]").val();n(".label_radio").click(function(){r.setupLabel()}),r.setupLabel(),n("[data-trigger]").on("click",function(e){e.preventDefault();var a=n(e.target).closest(".trigger"),t="detail"==a.data("trigger")?s:i;o(a.get(0),{html:t(),klass:"w540 shadow",closeByOverlay:!1,completeCallback:function(){}})}),n("#verifyBtn").on("click",function(e){e.preventDefault();var a=n(e.target);if(!a.hasClass("disabled")){a.addClass("disabled");var t={mobile:n("[name=mobile]").val(),province:n("[name=province]").val(),score:n("[name=score]").val(),wishes:c,subjects:d};n.ajax({url:preServer+p+"/tzy/plan/assessment/step3",type:"post",contentType:"application/json",data:JSON.stringify(t),success:function(e){if("string"==typeof e)var e=n.parseJSON(e);return 1==e.code&&e.result.planId?(window.location="/box/plan/result?planId="+e.result.planId,!1):(warn(e.msg),a.removeClass("disabled"),!1)},error:function(e){a.removeClass("disabled"),console.log(e)}})}})},223:function(e,a){}});