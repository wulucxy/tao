webpackJsonp([17],{0:function(e,o,r){function n(e,o){t.ajax({url:preServer+c+"/coupon/dole",type:"post",contentType:"application/json",data:JSON.stringify({invitationCode:i.getQuery("userId"),mobile:t("#mobile").val()}),success:function(e){if("string"==typeof e)var e=t.parseJSON(e);if(1!=e.code)return void warn(e.msg);e.result;return t(".recieveTxts").show(),!1},error:function(e){console.error(e)}})}r(23),r(198);var t=window.$||r(46),i=r(47),c=(r(48),t("[name=province]").val());r(64),t("#recieveCouponForm").length&&t("#recieveCouponForm").validator({errorParent:".row",successCallback:function(e){var o=t(e.target).closest(".btn");n(o,t("#recieveCouponForm"))},focusinCallback:function(){},errorCallback:function(e){t(".errTxt")}})},198:function(e,o){}});