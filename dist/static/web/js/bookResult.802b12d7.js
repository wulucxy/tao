webpackJsonp([4],{0:function(e,t,a){function n(){var e={majorList:c.parseJSON(c("[name=majorListJson]").text()),c:c.parseJSON(c("[name=cJson]").text()),batch:c("[name=batch]").text(),courseType:c("[name=courseType]").text(),score:c("[name=score]").text(),place:c("[name=place]").text(),province:c("[name=province]").val(),provinceName:c("[name=provinceName]").val(),userName:c("[name=userName]").val()};return e}function o(){var e=n();c("[data-trigger]").on("click",function(t){t.preventDefault();var a=c(t.target).closest(".trigger");modalBox(a.get(0),{html:l(e),klass:"w540 shadow",closeByOverlay:!1,startCallback:function(){r.setupLabel()},completeCallback:function(){}})})}a(19),a(122);var c=window.$||a(41),r=a(42),l=(a(43),a(124));c(".toggle").on("click",function(e){e.preventDefault();var t=c(this).closest(".detailContent");t.toggleClass("open")}),o()},122:function(e,t){}});